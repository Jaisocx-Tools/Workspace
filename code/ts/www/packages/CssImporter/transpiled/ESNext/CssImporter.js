import * as fs from "node:fs";
import * as path from "node:path";
import { CssImporterConstants } from "./CssImporterConstants.js";
import { BaseParser } from "./BaseParser.js";
import { ParsedResultDTO } from "./ParsedResultDTO.js";
export class CssImporter {
    cssImporterConstants;
    baseParser;
    packagePath;
    webpackAliases;
    cssFilePath;
    cssTargetFilePath;
    constructor() {
        this.cssImporterConstants = new CssImporterConstants();
        this.baseParser = new BaseParser();
        this.packagePath = "";
        this.webpackAliases = "";
        this.cssFilePath = "";
        this.cssTargetFilePath = "";
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
        if (fs.existsSync(this.cssTargetFilePath) === true) {
            fs.unlinkSync(this.cssTargetFilePath);
            console.log("File deleted:", this.cssTargetFilePath);
        }
        fs.writeFileSync(this.cssTargetFilePath, "");
        console.log("File created:", this.cssTargetFilePath);
        let fd = await fs.promises.open(this.cssTargetFilePath, "a");
        console.log("File opened:", this.cssTargetFilePath);
        try {
            this.baseParser.setWebpackAliases(webpackAliases, this.packagePath);
            await this.cssBundleMake(fd, this.cssFilePath, counterStop);
        }
        catch (error) {
            console.error(error);
        }
        console.log("File written:", this.cssTargetFilePath);
        fd.close();
        console.log("File closed:", this.cssTargetFilePath);
        return 0;
    }
    /**
     * @info based on methods call .validBitsbufRefsRefine(), .resolveUrlBitsbufWithWebpackAlias(), fs.read and fs.write files.
     */
    async cssBundleMake(inFd, inFilePath, counterStop) {
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
        let resultDTO = new ParsedResultDTO();
        resultDTO.cssFilePath = inFilePath;
        resultDTO.cssFileContents = fileContentsBuffer;
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
                await this.baseParser.appendToFile(inFd, fileContentsBuffer, range);
            }
            resultDTO.cssFileContents = new Uint8Array();
            return resultDTO;
        }
        else {
            let firstImportRange = bitsBufRefs_ImportURLs[0]; // may be undefined
            let firstImportRangeStart = firstImportRange[0];
            if (firstImportRangeStart < firstRangeStart) {
                latestImportsIx = await this.compareRanges(fileContentsBuffer, bitsBufRefs_ImportURLs, resultDTO, inFd, firstRangeStart, latestImportsIx, counterStop, true);
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
                await this.baseParser.appendToFile(inFd, fileContentsBuffer, range);
                continue;
            }
            if (bitsBufRefs_ImportURLs[latestImportsIx][0] > rangeStart) {
                resultDTO.addRange(range);
                await this.baseParser.appendToFile(inFd, fileContentsBuffer, range);
                if (refsIx !== (numberOfRanges - 1)) {
                    continue;
                }
            }
            latestImportsIx = await this.compareRanges(fileContentsBuffer, bitsBufRefs_ImportURLs, resultDTO, inFd, rangeStart, latestImportsIx, counterStop, true);
        }
        // # await fd.close();
        resultDTO.cssFileContents = new Uint8Array();
        return resultDTO;
    }
    async compareRanges(fileContentsBuffer, ranges, resultDTO, inFd, mainRangeStart, inLastRangeIx, counterStop, isRangeImportUrl) {
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
                resultDTO.addRange(importRange);
                await this.baseParser.appendToFile(inFd, fileContentsBuffer, importRange);
                continue;
            }
            let cssFileToImport_Path = this.baseParser.resolveUrlBitsbufWithWebpackAlias(fileContentsBuffer, ranges[importsIx], this.webpackAliases);
            // console.log( cssFileToImport_Path );
            let importParseResultDTO = await this.cssBundleMake(inFd, cssFileToImport_Path, counterStop);
            resultDTO.addParsedResult(importParseResultDTO);
        }
        return lastRangeIx;
    }
}
//# sourceMappingURL=CssImporter.js.map