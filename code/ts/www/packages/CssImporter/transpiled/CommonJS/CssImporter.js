"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssImporter = void 0;
const fs = __importStar(require("node:fs"));
const path = __importStar(require("node:path"));
const file_writer_1 = require("@jaisocx/file-writer");
const CssImporterConstants_js_1 = require("./CssImporterConstants.js");
const BaseParser_js_1 = require("./BaseParser.js");
const ParsedResultDTO_js_1 = require("./ParsedResultDTO.js");
class CssImporter {
    constructor() {
        this.cssImporterConstants = new CssImporterConstants_js_1.CssImporterConstants();
        this.baseParser = new BaseParser_js_1.BaseParser();
        this.packagePath = "";
        this.webpackAliases = "";
        this.cssFilePath = "";
        this.cssTargetFilePath = "";
        this.fileWriter = new file_writer_1.FileWriter();
        this.fileWriter
            .setDebug(true);
        this.fileWriterQueue = new file_writer_1.FileWriterQueue(this.fileWriter, 200, 200);
        this.fileWriterQueue
            .setDebug(true);
    }
    setPackagePath(packagePath) {
        this.packagePath = packagePath;
        return this;
    }
    getPackagePath() {
        return this.packagePath;
    }
    setCssFilePath(cssFilePath) {
        this.cssFilePath = cssFilePath;
        return this;
    }
    getCssFilePath() {
        return this.cssFilePath;
    }
    setCssTargetFilePath(cssTargetFilePath) {
        this.cssTargetFilePath = cssTargetFilePath;
        return this;
    }
    getCssTargetFilePath() {
        return this.cssTargetFilePath;
    }
    setWebpackAliases(webpackAliases) {
        this.webpackAliases = webpackAliases;
        return this;
    }
    readJsonFile(filePath) {
        const contents = fs.readFileSync(filePath, "utf-8");
        let aliasesObj = JSON.parse(contents);
        return aliasesObj;
    }
    getWebpackAliases() {
        if ((this.webpackAliases !== "") || (this.webpackAliases === false)) {
            return this.webpackAliases;
        }
        const aliasesPath = path.resolve(this.packagePath, this.cssImporterConstants.getWebpackAliasesJsonPath());
        let aliasesObj = {};
        let success = false;
        if (fs.existsSync(aliasesPath)) {
            aliasesObj = this.readJsonFile(aliasesPath);
            success = true;
        }
        if (!success) {
            return false;
        }
        this.webpackAliases = aliasesObj;
        return this.webpackAliases;
    }
    async build() {
        let webpackAliases = this.getWebpackAliases();
        // NOTICE: HARDCODED
        let counterStop = 1200;
        let fd = await this.fileWriter.toAddToFileInLoop_CleanupFileAndGetNewFileHandle(this.cssTargetFilePath);
        // example to be notified on write end and file handle close.
        this.fileWriterQueue.addThisClassEventListener(this.fileWriterQueue.eventEOF.eventName, (eventName, payload) => {
            console.log("EOF", { eventName,
                payload });
        });
        let inOutResultDTO = new ParsedResultDTO_js_1.ParsedResultDTO();
        let resultDTO = new ParsedResultDTO_js_1.ParsedResultDTO();
        try {
            this.baseParser.setWebpackAliases(webpackAliases, this.packagePath);
            resultDTO = this.cssBundleMake(inOutResultDTO, fd, this.cssFilePath, this.cssFilePath, counterStop);
        }
        catch (error) {
            console.error(error);
        }
        console.log("All files enqueued", this.cssTargetFilePath);
        fs.writeFileSync("inOutResultDTO", JSON.stringify(inOutResultDTO.toJson(), null, 2));
        fs.writeFileSync("resultDTO", JSON.stringify(resultDTO.toJson(), null, 2));
        this.fileWriterQueue.setHasToStop(true);
        this.fileWriterQueue.filehandleClose();
        console.log("CssImporter.build()", "After this.fileWriterQueue.filehandleClose();", this.cssTargetFilePath);
        return 1;
    }
    /**
     * @info based on methods call .validBitsbufRefsRefine(), .resolveUrlBitsbufWithWebpackAlias(), fs.read and fs.write files.
     */
    cssBundleMake(inParsedResultDTO, inFd, inFilePath, bitsbufName, counterStop) {
        let fileContentsBuffer = this.baseParser.readFileContentsAsBitsBuf(inFilePath);
        let fileSize = fileContentsBuffer.length;
        let fileLastIx = fileSize - 1;
        let bitsBufRefs_ReadFile = [[0, fileLastIx]];
        let bitsBufRefs_NoComments = [];
        let bitsBufRefs_Comments = [];
        let bitsBufRefs_NoImports = [];
        let bitsBufRefs_ImportURLs = [];
        let cssTokens = this.cssImporterConstants.getCssTokens();
        let commentsTokens = cssTokens["comment"];
        let importsTokens = cssTokens["import"];
        this.baseParser.validBitsbufRefsRefine(fileContentsBuffer, bitsBufRefs_ReadFile, // datatype explained: [ [startRef: number, endRef: number], [startRef: number, endRef: number], ... ];
        bitsBufRefs_NoComments, bitsBufRefs_Comments, commentsTokens, counterStop);
        // console.log( "Comments:\n" );
        // this.contentPreviewByRange( 
        //   fileContentsBuffer, 
        //   bitsBufRefs_Comments );
        // console.log( "\n\nCss without comments:\n" );
        // this.contentPreviewByRange( 
        //   fileContentsBuffer, 
        //   bitsBufRefs_NoComments );
        this.baseParser.validBitsbufRefsRefine(fileContentsBuffer, bitsBufRefs_NoComments, // datatype explained: [ [startRef: number, endRef: number], [startRef: number, endRef: number], ... ];
        bitsBufRefs_NoImports, bitsBufRefs_ImportURLs, importsTokens, counterStop);
        // console.log( "\n\nImports:\n" );
        // this.contentPreviewByRange( fileContentsBuffer, bitsBufRefs_ImportURLs );
        // console.log( "\n\nCss with no imports no comments:\n" );
        // this.contentPreviewByRange( fileContentsBuffer, bitsBufRefs_NoImports );
        let refsIx = 0;
        let numberOfRanges = bitsBufRefs_NoImports.length;
        let range = [];
        let rangeStart = 0;
        let rangeEnd = 0;
        // # let fd: FileHandle = await fs.promises.open( this.cssTargetFilePath, "a" );
        let resultDTO = new ParsedResultDTO_js_1.ParsedResultDTO();
        resultDTO.cssFilePath = inFilePath;
        resultDTO.cssFileContents = fileContentsBuffer;
        this.fileWriterQueue.namedBitsbufs[resultDTO.cssFilePath] = fileContentsBuffer;
        let firstRange = bitsBufRefs_NoImports[0];
        let firstRangeStart = firstRange[0];
        let firstRangeEnd = firstRange[1];
        rangeStart = firstRangeStart;
        rangeEnd = firstRangeEnd;
        let latestImportsIx = 0;
        // here we handle the css file when no import urls were found in the file.
        // just writing all ranges to target file.
        if (bitsBufRefs_ImportURLs.length === 0) {
            resultDTO.rangesOrDtoOfImport = [...bitsBufRefs_NoImports];
            for (refsIx = 0; refsIx < numberOfRanges; refsIx++) {
                range = [...bitsBufRefs_NoImports[refsIx]];
                rangeStart = range[0];
                rangeEnd = range[1];
                // when the range is of zero size, skip to the next range.
                if (rangeStart === rangeEnd) {
                    continue;
                }
                // await this.baseParser.appendToFile( 
                //   inFd, 
                //   fileContentsBuffer, 
                //   range );
                this.fileWriterQueue.enqueue(resultDTO.cssFilePath, range);
            }
            resultDTO.cssFileContents = new Uint8Array();
            inParsedResultDTO.addParsedResult(resultDTO);
            return resultDTO;
        }
        else {
            let firstImportRange = bitsBufRefs_ImportURLs[0]; // may be undefined
            let firstImportRangeStart = firstImportRange[0];
            if (firstImportRangeStart < firstRangeStart) {
                latestImportsIx = this.compareRanges(fileContentsBuffer, bitsbufName, bitsBufRefs_ImportURLs, resultDTO, inFd, firstRangeStart, latestImportsIx, counterStop, true);
            }
        }
        for (refsIx = 0; refsIx < numberOfRanges; refsIx++) {
            range = [...bitsBufRefs_NoImports[refsIx]];
            rangeStart = range[0];
            rangeEnd = range[1];
            // in this condition code applies, when all css import url lines were already done.
            // just writing the bitsbuf of the main range and skip to the next range.
            if (latestImportsIx === bitsBufRefs_ImportURLs.length) {
                // when the range is of zero size, skip to the next range.
                if (rangeStart === rangeEnd) {
                    continue;
                }
                resultDTO.addRange(range);
                // await this.baseParser.appendToFile( 
                //   inFd, 
                //   fileContentsBuffer, 
                //   range );
                this.fileWriterQueue.enqueue(resultDTO.cssFilePath, range);
                continue;
            }
            if (bitsBufRefs_ImportURLs[latestImportsIx][0] > rangeStart) {
                if (rangeStart === rangeEnd) {
                    continue;
                }
                resultDTO.addRange(range);
                // await this.baseParser.appendToFile( 
                //   inFd, 
                //   fileContentsBuffer, 
                //   range );
                this.fileWriterQueue.enqueue(resultDTO.cssFilePath, range);
                if (refsIx !== (numberOfRanges - 1)) {
                    continue;
                }
            }
            latestImportsIx = this.compareRanges(fileContentsBuffer, bitsbufName, bitsBufRefs_ImportURLs, resultDTO, inFd, rangeStart, latestImportsIx, counterStop, true);
        }
        // # await fd.close();
        resultDTO.cssFileContents = new Uint8Array();
        inParsedResultDTO.addParsedResult(resultDTO);
        return resultDTO;
    }
    compareRanges(fileContentsBuffer, bitsbufName, ranges, inResultDTO, inFd, mainRangeStart, inLastRangeIx, counterStop, isRangeImportUrl) {
        let importsIx = 0;
        let lastRangeIx = inLastRangeIx;
        let numberOfRanges = ranges.length;
        for (importsIx = lastRangeIx; importsIx < ranges.length; importsIx++) {
            lastRangeIx = importsIx;
            let importRange = ranges[importsIx];
            let importRangeStart = importRange[0];
            if (importRangeStart > mainRangeStart) {
                break;
            }
            if (isRangeImportUrl === false) {
                inResultDTO.addRange(importRange);
                // await this.baseParser.appendToFile( 
                //   inFd, 
                //   fileContentsBuffer, 
                //   importRange );
                // this.fileWriterQueue.enqueue (
                //   bitsbufName,
                //   importRange
                // );
                continue;
            }
            let cssFileToImport_Path = this.baseParser.resolveUrlBitsbufWithWebpackAlias(fileContentsBuffer, ranges[importsIx], this.webpackAliases);
            // console.log( cssFileToImport_Path );
            // temp workaround, the inp file bitsbuf's name has t o be a number, or a description text or file path for debugging purposes.
            let bitsbufNameSubcall = cssFileToImport_Path;
            let importParseResultDTO = this.cssBundleMake(inResultDTO, inFd, cssFileToImport_Path, bitsbufNameSubcall, counterStop);
            inResultDTO.addParsedResult(importParseResultDTO);
        }
        return lastRangeIx;
    }
}
exports.CssImporter = CssImporter;
//# sourceMappingURL=CssImporter.js.map