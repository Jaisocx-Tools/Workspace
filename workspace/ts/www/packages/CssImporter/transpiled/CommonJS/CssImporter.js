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
const node_util_1 = require("node:util");
const file_writer_1 = require("@jaisocx/file-writer");
const tokens_parser_1 = require("@jaisocx/tokens-parser");
const CssImporterConstants_js_1 = require("./CssImporterConstants.js");
const ParsedResultDTO_js_1 = require("./ParsedResultDTO.js");
class CssImporter {
    constructor() {
        this.debug = false;
        this.cssImporterConstants = new CssImporterConstants_js_1.CssImporterConstants();
        this.fileReader = new tokens_parser_1.FileReader();
        this.tokensParser = new tokens_parser_1.TokensParser();
        this.packagePath = "";
        this.webpackAliases = "";
        this.cssFilePath = "";
        this.cssTargetFilePath = "";
        this.fileWriter = new file_writer_1.FileWriter();
        this.fileWriter
            .setDebug(false);
        this.fileWriterQueue = new file_writer_1.FileWriterQueue(this.fileWriter, 200, 200);
        this.fileWriterQueue
            .setDebug(false);
        this.textDecoder = new node_util_1.TextDecoder("utf8");
    }
    setDebug(inDebug) {
        this.debug = inDebug;
        return this;
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
    setWebpackAliases(aliasesObject, packageRoot) {
        this.webpackAliases = aliasesObject;
        let webpackAliasVariableNamePackageRoot = this.cssImporterConstants.getWebpackAliasVariableNamePackageRoot();
        let alias = "";
        let aliasValue = "";
        for (alias in this.webpackAliases) {
            aliasValue = this.webpackAliases[alias];
            aliasValue = aliasValue.replace(webpackAliasVariableNamePackageRoot, packageRoot);
            this.webpackAliases[alias] = aliasValue;
        }
        return this;
    }
    /**
     *
     * @param inBitsbuf
     * @param filePathTextRefs
     * @param webpackAliases the object, read from the file webpack.aliases.json
     * @returns
     */
    resolveUrlBitsbufWithWebpackAlias(inBitsbuf, filePathTextRefs, webpackAliases) {
        let filePathBitsbuf = inBitsbuf.subarray(filePathTextRefs[0], filePathTextRefs[1]);
        let filePathUntrimmed = this.textDecoder.decode(filePathBitsbuf);
        let filePathTrimmed = filePathUntrimmed.trim();
        let filePathAliased = this.tokensParser.trimQuotes(filePathTrimmed);
        let urlResolved = false;
        let alias = "";
        let filePathResolved = "";
        if (filePathAliased.startsWith("@") === false) {
            return filePathAliased;
        }
        for (alias in webpackAliases) {
            if (filePathAliased.startsWith(alias + "/") === false) {
                continue;
            }
            filePathResolved = filePathAliased.replace((alias + "/"), (webpackAliases[alias]));
            filePathResolved = path.resolve(filePathResolved);
            urlResolved = true;
            break;
        }
        // @ts-ignore
        if (urlResolved === false) {
            let aliasesJson = JSON.stringify(webpackAliases, null, 2);
            let errMsg = `The @import statement url in the css file:\n${filePathAliased}\nwas not prefixed with no of webpack aliases: \n${aliasesJson}`;
            throw new Error(errMsg);
        }
        if (fs.existsSync(filePathResolved) === false) {
            let errMsg = `The file path resolved with webpack alias does not exist:\n${filePathResolved}`;
            throw new Error(errMsg);
        }
        return filePathResolved;
    }
    async build() {
        let hasError = false;
        let err = {};
        let webpackAliases = this.getWebpackAliases();
        // NOTICE: HARDCODED
        let counterStop = 1200;
        let opened = await this.fileWriterQueue.fileWriter.toAddToFileInLoop_CleanupFileAndGetNewFileHandle(this.cssTargetFilePath);
        // example to be notified on write end and file handle close.
        if (this.debug === true) {
            this.fileWriterQueue.addThisClassEventListener(this.fileWriterQueue.eventEOF.eventName, (eventName, payload) => {
                console.log("EOF", { eventName,
                    payload });
            });
        }
        let inOutResultDTO = new ParsedResultDTO_js_1.ParsedResultDTO();
        let resultDTO = new ParsedResultDTO_js_1.ParsedResultDTO();
        try {
            this.setWebpackAliases(webpackAliases, this.packagePath);
            resultDTO = this.cssBundleMake(inOutResultDTO, this.cssFilePath, this.cssFilePath, counterStop);
        }
        catch (error) {
            console.error(error);
            err = error;
            hasError = true;
        }
        if (hasError === true) {
            let closed = await this.fileWriter.filehandleClose();
            err.closed = closed;
            throw err;
        }
        if (this.debug === true) {
            console.log("All files enqueued", this.cssTargetFilePath);
            fs.writeFileSync("inOutResultDTO", JSON.stringify(inOutResultDTO.toJson(), null, 2));
            fs.writeFileSync("resultDTO", JSON.stringify(resultDTO.toJson(), null, 2));
        }
        this.fileWriterQueue.setHasToStop(true);
        this.fileWriterQueue.filehandleClose();
        if (this.debug === true) {
            console.log("CssImporter.build()", "After this.fileWriterQueue.filehandleClose();", this.cssTargetFilePath);
        }
        return opened;
    }
    /**
     * @info based on methods call .validBitsbufRefsRefine(), .resolveUrlBitsbufWithWebpackAlias(), fs.read and fs.write files.
     */
    cssBundleMake(inParsedResultDTO, inFilePath, bitsbufName, counterStop) {
        let fileContentsBuffer = this.fileReader.readFileContentsAsBitsBuf(inFilePath);
        let fileSize = fileContentsBuffer.length;
        let fileLastIx = fileSize - 1;
        let bitsBufRefs_ReadFile = [[0, (fileLastIx + 1)]];
        let bitsBufRefs_NoComments = [];
        let bitsBufRefs_Comments_Outer = [];
        let bitsBufRefs_Comments_Inner = [];
        let bitsBufRefs_NoImports = [];
        let bitsBufRefs_ImportURLs_Outer = [];
        let bitsBufRefs_ImportURLs_Inner = [];
        let cssTokens = this.cssImporterConstants.getCssTokens();
        let commentsTokens = cssTokens["comment"];
        let importsTokens = cssTokens["url"];
        this.tokensParser
            .parseWithStartAndEndTokensSets(fileContentsBuffer, bitsBufRefs_ReadFile, 
        // datatype explained: [ [startRef: number, endRef: number], [startRef: number, endRef: number], ... ];
        commentsTokens, bitsBufRefs_NoComments, bitsBufRefs_Comments_Outer, bitsBufRefs_Comments_Inner, counterStop);
        if (this.debug === true) {
            console.log("Comments:\n");
            this.tokensParser.contentPreviewByRange(fileContentsBuffer, bitsBufRefs_Comments_Inner);
            console.log("\n\nCss without comments:\n");
            this.tokensParser.contentPreviewByRange(fileContentsBuffer, bitsBufRefs_NoComments);
        }
        this.tokensParser
            .parseWithStartAndEndTokensSets(fileContentsBuffer, bitsBufRefs_NoComments, 
        // datatype explained: [ [startRef: number, endRef: number], [startRef: number, endRef: number], ... ];
        importsTokens, bitsBufRefs_NoImports, bitsBufRefs_ImportURLs_Outer, bitsBufRefs_ImportURLs_Inner, counterStop);
        if (this.debug === true) {
            console.log("\n\nImports:\n");
            this.tokensParser.contentPreviewByRange(fileContentsBuffer, bitsBufRefs_ImportURLs_Inner);
            console.log("\n\nCss with no imports no comments:\n");
            this.tokensParser.contentPreviewByRange(fileContentsBuffer, bitsBufRefs_NoImports);
        }
        let refsIx = 0;
        let numberOfRanges = bitsBufRefs_NoImports.length;
        let range = [];
        let rangeStart = 0;
        let rangeEnd = 0;
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
        if (bitsBufRefs_ImportURLs_Inner.length === 0) {
            resultDTO.rangesOrDtoOfImport = [...bitsBufRefs_NoImports];
            for (refsIx = 0; refsIx < numberOfRanges; refsIx++) {
                range = [...bitsBufRefs_NoImports[refsIx]];
                rangeStart = range[0];
                rangeEnd = range[1];
                // when the range is of zero size, skip to the next range.
                if (rangeStart === rangeEnd) {
                    continue;
                }
                this.fileWriterQueue.enqueue(resultDTO.cssFilePath, range);
            }
            resultDTO.cssFileContents = new Uint8Array();
            inParsedResultDTO.addParsedResult(resultDTO);
            return resultDTO;
        }
        else {
            let firstImportRange = bitsBufRefs_ImportURLs_Inner[0];
            // may be undefined
            let firstImportRangeStart = firstImportRange[0];
            if (firstImportRangeStart < firstRangeStart) {
                latestImportsIx = this.compareRanges(fileContentsBuffer, bitsbufName, bitsBufRefs_ImportURLs_Inner, resultDTO, firstRangeStart, latestImportsIx, counterStop, true);
            }
        }
        for (refsIx = 0; refsIx < numberOfRanges; refsIx++) {
            range = [...bitsBufRefs_NoImports[refsIx]];
            rangeStart = range[0];
            rangeEnd = range[1];
            // in this condition code applies, when all css import url lines were already done.
            // just writing the bitsbuf of the main range and skip to the next range.
            if (latestImportsIx === bitsBufRefs_ImportURLs_Inner.length) {
                // when the range is of zero size, skip to the next range.
                if (rangeStart === rangeEnd) {
                    continue;
                }
                resultDTO.addRange(range);
                this.fileWriterQueue.enqueue(resultDTO.cssFilePath, range);
                continue;
            }
            if (bitsBufRefs_ImportURLs_Inner[latestImportsIx][0] > rangeStart) {
                if (rangeStart === rangeEnd) {
                    continue;
                }
                resultDTO.addRange(range);
                this.fileWriterQueue.enqueue(resultDTO.cssFilePath, range);
                if (refsIx !== (numberOfRanges - 1)) {
                    continue;
                }
            }
            latestImportsIx = this.compareRanges(fileContentsBuffer, bitsbufName, bitsBufRefs_ImportURLs_Inner, resultDTO, rangeStart, latestImportsIx, counterStop, true);
        }
        resultDTO.cssFileContents = new Uint8Array();
        inParsedResultDTO.addParsedResult(resultDTO);
        return resultDTO;
    }
    compareRanges(fileContentsBuffer, bitsbufName, ranges, inResultDTO, mainRangeStart, inLastRangeIx, counterStop, isRangeImportUrl) {
        let importsIx = 0;
        let lastRangeIx = inLastRangeIx;
        let numberOfRanges = ranges.length;
        for (importsIx = lastRangeIx; importsIx < numberOfRanges; importsIx++) {
            lastRangeIx = importsIx;
            let importRange = ranges[importsIx];
            let importRangeStart = importRange[0];
            if (importRangeStart > mainRangeStart) {
                break;
            }
            if (isRangeImportUrl === false) {
                inResultDTO.addRange(importRange);
                this.fileWriterQueue.enqueue(bitsbufName, importRange);
                continue;
            }
            let cssFileToImport_Path = this.resolveUrlBitsbufWithWebpackAlias(fileContentsBuffer, ranges[importsIx], this.webpackAliases);
            // temp workaround, the inp file bitsbuf's name has t o be a number, or a description text or file path for debugging purposes.
            let bitsbufNameSubcall = cssFileToImport_Path;
            let importParseResultDTO = this.cssBundleMake(inResultDTO, cssFileToImport_Path, bitsbufNameSubcall, counterStop);
            inResultDTO.addParsedResult(importParseResultDTO);
        }
        return lastRangeIx;
    }
}
exports.CssImporter = CssImporter;
//# sourceMappingURL=CssImporter.js.map