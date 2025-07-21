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
exports.ResponsiveFilesSet = void 0;
//@ts-ignore
const fs = __importStar(require("node:fs"));
//@ts-ignore
const path = __importStar(require("node:path"));
// import { FileWriter } from "@jaisocx/file-writer";
const template_renderer_1 = require("@jaisocx/template-renderer");
class ResponsiveFilesSet {
    constructor(base, constants) {
        // this.fileWriter = new FileWriter();
        this.templateRenderer = new template_renderer_1.TemplateRenderer();
        this.responsiveDatasetConstants = constants;
        this.responsiveDatasetBase = base;
        this.mediaQueryCssFileContent = "";
    }
    // SiteToolAutomation/data/templates/ResponsiveTemplate.template
    // in this package, just one art of .css files is produced with the template.
    // the .css files with media query for one size like "mobile_xs": SiteToolAutomation/MediaAndStyles/responsive/style_e02_mobile_xs_portrait.css.
    readTemplateMediaCssFile(mediaQueryCssFileTemplatePath) {
        const templatePath = mediaQueryCssFileTemplatePath;
        this.mediaQueryCssFileContent = fs.readFileSync(templatePath, "utf8");
        return this;
    }
    // RENAMED produceMediaCssFilesSet
    // produces .css files with media queries for sizes like this .css file:
    // in the folder
    // SiteToolAutomation/MediaAndStyles/responsive
    //    style_e02_mobile_xs_portrait.css
    //    style_e02_mobile_xs_landscape.css
    //    style_e02_mobile_s_portrait.css
    // ...
    async produceResponsiveFilesSetsSet() {
        // @ts-ignore
        let propNames = Object.keys(this.responsiveDatasetBase.dataset.data);
        let responsiveDatasetPropName = "";
        let orientationKeywords = this.responsiveDatasetConstants.getOrientationKeywords();
        let orientationKeywordsBitsbufs = this.responsiveDatasetConstants.getOrientationKeywordsBitsbufs();
        let orientation = "";
        let orientationBitsbuf = new Uint8Array();
        let sitesTool_ThemeNameBitsbuf = this.responsiveDatasetBase.fileWriter.textEncoder
            .encode(this.responsiveDatasetBase.sitesTool_ThemeName);
        let sitesToolBitsbuf = this.responsiveDatasetBase.fileWriter.textEncoder
            .encode(this.responsiveDatasetBase.sitesToolName);
        let templateDataBase = {
            "SitesTool_ThemeName": "",
            "SitesTool_ThemeCssClassName": "",
            "SitesToolName": "",
            "responsiveSizeConstantName": "",
            "responsiveSizeName": "",
            "orientation": "",
            "min-width": "",
            "max-width": "",
            "min-height": "",
            "max-height": ""
        };
        responsiveDatasetPropName = propNames[0];
        let templateDataOverridden = this.getTemplateDataOverridden(responsiveDatasetPropName, templateDataBase);
        //@ts-ignore
        let templateRendererDataRecordId = this.templateRenderer
            .setTemplate(this.mediaQueryCssFileContent)
            .setData(templateDataOverridden)
            .getActiveDataRecordId();
        this.templateRenderer.optimize(templateRendererDataRecordId);
        let mediaRetVal = 0;
        let orientationId = 0;
        for (responsiveDatasetPropName of propNames) {
            for (orientationId = 0; orientationId < 2; orientationId++) {
                orientation = orientationKeywords[orientationId];
                orientationBitsbuf = orientationKeywordsBitsbufs[orientationId];
                mediaRetVal = await this.produceOneResponsiveFilesSet(sitesTool_ThemeNameBitsbuf, sitesToolBitsbuf, responsiveDatasetPropName, orientation, orientationBitsbuf);
            }
        }
        return mediaRetVal;
    }
    // RENAMED produceMediaCssFile
    // this method produces one of the .css files for the method above
    // in the folder
    // SiteToolAutomation/MediaAndStyles/responsive
    //    style_e02_mobile_xs_portrait.css
    async produceOneResponsiveFilesSet(themeNameBitsbuf, sitesToolBitsbuf, responsiveDatasetPropName, orientation, orientationBitsbuf) {
        let responsiveSizeConstantName = this.responsiveDatasetConstants
            .getResponsiveSizeConstantNameBitsbuf();
        let sitesTool_ThemeCssClassName = (this.responsiveDatasetBase.sitesTool_ThemeName === "theme_base") ? "" : ("." + this.responsiveDatasetBase.sitesTool_ThemeName);
        let sitesTool_ThemeCssClassNameBitsbuf = this.responsiveDatasetBase.fileWriter.textEncoder
            .encode(sitesTool_ThemeCssClassName);
        //@ts-ignore
        let responsiveData = this.responsiveDatasetBase.datasetBitsbufs[responsiveDatasetPropName];
        let sizesByBitsbufs_true = true;
        let sizes = this.responsiveDatasetBase.getSizesByOrientation(responsiveDatasetPropName, orientation, sizesByBitsbufs_true);
        let responsiveSizeName_withSitesToolName_Array = this.responsiveDatasetConstants
            .getResponsiveSizeNameOrientedBitsbufsArray(responsiveData["range_orderby_id"], responsiveData["art"], responsiveData["art_size"], orientationBitsbuf, sitesToolBitsbuf, themeNameBitsbuf);
        let responsiveSizeNameOrientedArray = responsiveSizeName_withSitesToolName_Array.slice(0, 9);
        let responsiveSizeName_withSitesToolName = this.responsiveDatasetBase.fileWriter
            .concatUint8Arrays(responsiveSizeName_withSitesToolName_Array);
        let responsiveSizeNameOriented = this.responsiveDatasetBase.fileWriter
            .concatUint8Arrays(responsiveSizeNameOrientedArray);
        let templateDataBase = {
            "SitesTool_ThemeName": themeNameBitsbuf,
            "SitesTool_ThemeCssClassName": sitesTool_ThemeCssClassNameBitsbuf,
            "SitesToolName": sitesToolBitsbuf,
            "responsiveSizeConstantName": responsiveSizeConstantName,
            "responsiveSizeName": responsiveSizeNameOriented,
            "orientation": orientationBitsbuf,
            "min-width": sizes["from"],
            "max-width": sizes["to"],
            "min-height": sizes["min-height"],
            "max-height": sizes["max-height"]
        };
        let templateDataOverridden = this.getTemplateDataOverridden(responsiveDatasetPropName, templateDataBase);
        // console.info( templateDataOverridden );
        let templateRendererDataRecordId = this.templateRenderer.getActiveDataRecordId();
        this.templateRenderer
            .setData(templateDataOverridden);
        let responsiveCssFile_Content = this.templateRenderer.renderOptimizedDataBitsbufs(templateRendererDataRecordId, templateDataOverridden);
        let responsiveSizeName_withSitesToolName_string = this.responsiveDatasetBase.fileWriter
            .textDecoder.decode(responsiveSizeName_withSitesToolName);
        let responsiveCssFile_Name = [
            responsiveSizeName_withSitesToolName_string,
            ".css"
        ].join("");
        let responsiveCssFile_Path = path.resolve(this.responsiveDatasetBase.mediaAndStylesResponsiveFolderPath, responsiveCssFile_Name);
        let retVal = 0;
        retVal = await this.responsiveDatasetBase.fileWriter.toAddToFileInLoop_CleanupFileAndGetNewFileHandle(responsiveCssFile_Path);
        retVal = await this.responsiveDatasetBase.fileWriter.appendFlatArrayToFile(responsiveCssFile_Content);
        retVal = await this.responsiveDatasetBase.fileWriter.filehandleClose();
        return retVal;
    }
    getTemplateDataOverridden(_responsiveDatasetPropName, templateDataBase) {
        // console.info( templateDataBase );
        return templateDataBase;
    }
}
exports.ResponsiveFilesSet = ResponsiveFilesSet;
//# sourceMappingURL=ResponsiveFilesSet.js.map