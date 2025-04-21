import * as fs from "node:fs";
import * as path from "node:path";
import { FileWriter, FileWriterQueue } from "@jaisocx/file-writer";
import { CssImporterConstants } from "./CssImporterConstants.js";
import { BaseParser } from "./BaseParser.js";
import { ParsedResultDTO } from "./ParsedResultDTO.js";
export class CssImporter {
    debug;
    cssImporterConstants;
    baseParser;
    packagePath;
    webpackAliases;
    cssFilePath;
    cssTargetFilePath;
    fileWriter;
    fileWriterQueue;
    constructor() {
        this.debug = false;
        this.cssImporterConstants = new CssImporterConstants();
        this.baseParser = new BaseParser();
        this.packagePath = "";
        this.webpackAliases = "";
        this.cssFilePath = "";
        this.cssTargetFilePath = "";
        this.fileWriter = new FileWriter();
        this.fileWriter
            .setDebug(false);
        this.fileWriterQueue = new FileWriterQueue(this.fileWriter, 200, 200);
        this.fileWriterQueue
            .setDebug(false);
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
        let hasError = false;
        let err = {};
        let webpackAliases = this.getWebpackAliases();
        // NOTICE: HARDCODED
        let counterStop = 1200;
        let fd = await this.fileWriter.toAddToFileInLoop_CleanupFileAndGetNewFileHandle(this.cssTargetFilePath);
        // example to be notified on write end and file handle close.
        if (this.debug === true) {
            this.fileWriterQueue.addThisClassEventListener(this.fileWriterQueue.eventEOF.eventName, (eventName, payload) => {
                console.log("EOF", { eventName,
                    payload });
            });
        }
        let inOutResultDTO = new ParsedResultDTO();
        let resultDTO = new ParsedResultDTO();
        try {
            this.baseParser.setWebpackAliases(webpackAliases, this.packagePath);
            resultDTO = this.cssBundleMake(inOutResultDTO, this.cssFilePath, this.cssFilePath, counterStop);
        }
        catch (error) {
            console.error(error);
            err = error;
            hasError = true;
        }
        if (hasError === true) {
            this.fileWriter.filehandleClose();
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
        return 1;
    }
    /**
     * @info based on methods call .validBitsbufRefsRefine(), .resolveUrlBitsbufWithWebpackAlias(), fs.read and fs.write files.
     */
    cssBundleMake(inParsedResultDTO, inFilePath, bitsbufName, counterStop) {
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
        if (this.debug === true) {
            console.log("Comments:\n");
            this.baseParser.contentPreviewByRange(fileContentsBuffer, bitsBufRefs_Comments);
            console.log("\n\nCss without comments:\n");
            this.baseParser.contentPreviewByRange(fileContentsBuffer, bitsBufRefs_NoComments);
        }
        this.baseParser.validBitsbufRefsRefine(fileContentsBuffer, bitsBufRefs_NoComments, // datatype explained: [ [startRef: number, endRef: number], [startRef: number, endRef: number], ... ];
        bitsBufRefs_NoImports, bitsBufRefs_ImportURLs, importsTokens, counterStop);
        if (this.debug === true) {
            console.log("\n\nImports:\n");
            this.baseParser.contentPreviewByRange(fileContentsBuffer, bitsBufRefs_ImportURLs);
            console.log("\n\nCss with no imports no comments:\n");
            this.baseParser.contentPreviewByRange(fileContentsBuffer, bitsBufRefs_NoImports);
        }
        let refsIx = 0;
        let numberOfRanges = bitsBufRefs_NoImports.length;
        let range = [];
        let rangeStart = 0;
        let rangeEnd = 0;
        let resultDTO = new ParsedResultDTO();
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
                latestImportsIx = this.compareRanges(fileContentsBuffer, bitsbufName, bitsBufRefs_ImportURLs, resultDTO, firstRangeStart, latestImportsIx, counterStop, true);
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
                this.fileWriterQueue.enqueue(resultDTO.cssFilePath, range);
                continue;
            }
            if (bitsBufRefs_ImportURLs[latestImportsIx][0] > rangeStart) {
                if (rangeStart === rangeEnd) {
                    continue;
                }
                resultDTO.addRange(range);
                this.fileWriterQueue.enqueue(resultDTO.cssFilePath, range);
                if (refsIx !== (numberOfRanges - 1)) {
                    continue;
                }
            }
            latestImportsIx = this.compareRanges(fileContentsBuffer, bitsbufName, bitsBufRefs_ImportURLs, resultDTO, rangeStart, latestImportsIx, counterStop, true);
        }
        resultDTO.cssFileContents = new Uint8Array();
        inParsedResultDTO.addParsedResult(resultDTO);
        return resultDTO;
    }
    compareRanges(fileContentsBuffer, bitsbufName, ranges, inResultDTO, mainRangeStart, inLastRangeIx, counterStop, isRangeImportUrl) {
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
                this.fileWriterQueue.enqueue(bitsbufName, importRange);
                continue;
            }
            let cssFileToImport_Path = this.baseParser.resolveUrlBitsbufWithWebpackAlias(fileContentsBuffer, ranges[importsIx], this.webpackAliases);
            // temp workaround, the inp file bitsbuf's name has t o be a number, or a description text or file path for debugging purposes.
            let bitsbufNameSubcall = cssFileToImport_Path;
            let importParseResultDTO = this.cssBundleMake(inResultDTO, cssFileToImport_Path, bitsbufNameSubcall, counterStop);
            inResultDTO.addParsedResult(importParseResultDTO);
        }
        return lastRangeIx;
    }
}
//# sourceMappingURL=CssImporter.js.map