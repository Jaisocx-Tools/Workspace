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
exports.ResponsiveImports = void 0;
//@ts-ignore
const path = __importStar(require("node:path"));
class ResponsiveImports {
    constructor(base, constants) {
        this.responsiveDatasetConstants = constants;
        this.responsiveDatasetBase = base;
    }
    // RENAMED produceMediaCssImportsCssFile
    // .css file with @import url every .css file from the methods above with media queries, for every size one .css file
    // in the folder
    // SiteToolAutomation/MediaAndStyles/responsive
    //    MediaCssImports.css
    //    MediaCssImports_Webpack.css
    //    MediaCssImports_CDN.css
    // lines like this:
    // one .css file with constants for sizes:
    //    @import url("./MediaConstants.css");
    // and other .css files, every same tamplate for media queries.
    //    @import url("./style_e02_mobile_xs_portrait.css");
    //    @import url("./style_e02_mobile_xs_landscape.css");
    //    @import url("./style_e04_mobile_s_portrait.css");
    //    ...
    //    ...
    async produceImportsCssFileWithResponsiveFilesSetsSet(targetFileName, relativeImportedFilesFolderPath, webpackAliased) {
        let fw = this.responsiveDatasetBase.fileWriter;
        let te = this.responsiveDatasetBase.fileWriter.textEncoder;
        // @ts-ignore
        let data = this.responsiveDatasetBase.datasetBitsbufs;
        let targetFilePath = path.resolve(relativeImportedFilesFolderPath, targetFileName);
        let fileWriterRetVal = await fw.toAddToFileInLoop_CleanupFileAndGetNewFileHandle(targetFilePath);
        let commentText = "";
        let urlStart = "";
        if (webpackAliased === true) {
            commentText = "Webpack build css imports";
            urlStart = [
                this.responsiveDatasetBase.webpackAliasName,
                "themes",
                this.responsiveDatasetBase.sitesTool_ThemeName,
                "responsive"
            ].join("/");
        }
        else {
            commentText = "Relative urls css imports";
            urlStart = [
                ".",
                "responsive"
            ].join("/");
        }
        let newLineBitsbuf = this.responsiveDatasetConstants.getNewLineBitsbuf();
        let linesDelimiter = new Uint8Array(2);
        linesDelimiter.fill(newLineBitsbuf.at(0), 0, 2);
        // the first line is written in the imports css file
        let commentBitsbuf = te.encode(commentText);
        let firstLineEncommentedArray = this.responsiveDatasetConstants
            .getCssEncommentedLine(commentBitsbuf);
        let firstLineEncommentedArray_Clone = [...firstLineEncommentedArray];
        firstLineEncommentedArray_Clone.push(linesDelimiter);
        let firstLineEncommented = fw.concatUint8Arrays(firstLineEncommentedArray_Clone);
        fileWriterRetVal = await fw.appendBitsbufToFile(firstLineEncommented);
        let bitsbufUrlStart = te.encode(urlStart);
        // css import lines for every css file with media queries for every responsive size is written to the imports css file
        fileWriterRetVal = await this.produceImportsLinesSet_ForResponsiveFilesSetsSet(data, bitsbufUrlStart);
        // adds one new line at the end of the file
        fileWriterRetVal = await fw.appendBitsbufToFile(linesDelimiter);
        // file writer closes the css imports file
        fileWriterRetVal = await fw.filehandleClose();
        return fileWriterRetVal;
    }
    // the subcall for the method above, the produceMediaCssImportsCssFile()
    // iterates every .json data record with sizes,
    // produces .css files names with media queries like
    //    responsive/style_e02_mobile_xs_portrait.css
    // from the method
    //    produceMediaCssFile()
    // and adds the import lines for every of these .css files like this:
    //    @import url("./style_e02_mobile_xs_portrait.css");
    // or
    //    @import url("@jaisocx-css-clean-start-MediaAndStyles/style_e02_mobile_xs_portrait.css");
    // not implemented with cdn, and don't know for now, whether needed, it seems for the css-clean-start theme or a SitesTool theme for sure.
    // for example:
    //    @import url("https://cdn.brightday.email/Media.vsDesktop/responsive/style_e02_mobile_xs_portrait.css");
    async produceImportsLinesSet_ForResponsiveFilesSetsSet(data, bitsbufUrlStart) {
        let fw = this.responsiveDatasetBase.fileWriter;
        let sitesToolName = this.responsiveDatasetBase.sitesToolName;
        let sitesToolNameBitsbuf = fw.textEncoder.encode(sitesToolName);
        let sitesTool_ThemeName = this.responsiveDatasetBase.sitesTool_ThemeName;
        let sitesTool_ThemeNameBitsbuf = fw.textEncoder.encode(sitesTool_ThemeName);
        let newLineBitsbuf = this.responsiveDatasetConstants.getNewLineBitsbuf();
        let responsiveSizeName_withSitesToolName_Array = new Array();
        let responsiveSizeName_withSitesToolName = new Uint8Array();
        let cssImportLine = new Array();
        let bitsbufCssImportLine = new Uint8Array();
        let linesDelimiter = new Uint8Array(3);
        linesDelimiter.fill(newLineBitsbuf.at(0), 0, 3);
        let orientationKeywords = this.responsiveDatasetConstants.getOrientationKeywordsBitsbufs();
        let orientationBitsbuf = new Uint8Array();
        let labelLineArray = new Array();
        let labelLine = new Uint8Array();
        let written = 0;
        let orientationKeywordId = 0;
        let responsiveSizeDataNames = Object.keys(data);
        let responsiveDatasetLength = responsiveSizeDataNames.length;
        let responsiveSizeDataId = 0;
        let responsiveSizeDataLastId = (responsiveDatasetLength - 1);
        let responsiveDatasetPropName = "";
        let responsiveSizeData = new Object();
        let paddingBuf = new Uint8Array(0);
        for (responsiveSizeDataId = 0; responsiveSizeDataId < responsiveDatasetLength; responsiveSizeDataId++) {
            responsiveDatasetPropName = responsiveSizeDataNames[responsiveSizeDataId];
            responsiveSizeData = data[responsiveDatasetPropName];
            responsiveSizeName_withSitesToolName_Array = this.responsiveDatasetConstants
                .getResponsiveSizeNameOrientedBitsbufsArray(responsiveSizeData["range_orderby_id"], responsiveSizeData["art"], responsiveSizeData["art_size"], orientationBitsbuf, sitesToolNameBitsbuf, sitesTool_ThemeNameBitsbuf);
            labelLineArray = this.responsiveDatasetConstants
                .getLabelLineArray(paddingBuf, responsiveSizeData["art"], responsiveSizeData["art_size"]);
            labelLine = fw.concatUint8Arrays(labelLineArray);
            written = await fw.appendBitsbufToFile(labelLine);
            for (orientationKeywordId = 0; orientationKeywordId < 2; orientationKeywordId++) {
                orientationBitsbuf = orientationKeywords[orientationKeywordId];
                this.responsiveDatasetConstants
                    .responsiveSizeName_setOrientation(orientationBitsbuf);
                responsiveSizeName_withSitesToolName = this.responsiveDatasetBase
                    .fileWriter.concatUint8Arrays(responsiveSizeName_withSitesToolName_Array);
                cssImportLine = this.responsiveDatasetConstants
                    .getImportLineBitsbufsArray(bitsbufUrlStart, responsiveSizeName_withSitesToolName, newLineBitsbuf);
                if (responsiveSizeDataId === responsiveSizeDataLastId) {
                    this.responsiveDatasetConstants.importLine_setNewlineBitsbuf(newLineBitsbuf);
                }
                else if (orientationKeywordId === 1) {
                    this.responsiveDatasetConstants.importLine_setNewlineBitsbuf(linesDelimiter);
                }
                else {
                    this.responsiveDatasetConstants.importLine_setNewlineBitsbuf(newLineBitsbuf);
                }
                bitsbufCssImportLine = fw.concatUint8Arrays(cssImportLine);
                written = await fw.appendBitsbufToFile(bitsbufCssImportLine);
            }
        }
        return written;
    }
}
exports.ResponsiveImports = ResponsiveImports;
//# sourceMappingURL=ResponsiveImports.js.map