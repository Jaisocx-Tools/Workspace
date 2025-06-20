import * as fs from "node:fs";
import * as path from "node:path";
// import { FileWriter } from "@jaisocx/file-writer";
import { TemplateRenderer } from "@jaisocx/template-renderer";
export class ResponsiveCssFile {
    // fileWriter: FileWriter;
    templateRenderer;
    responsiveDatasetConstants;
    responsiveDatasetBase;
    mediaQueryCssFileContent;
    constructor(base, constants) {
        // this.fileWriter = new FileWriter();
        this.templateRenderer = new TemplateRenderer();
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
    async produceResponsiveCssFilesSet() {
        // @ts-ignore
        let propNames = Object.keys(this.responsiveDatasetBase.dataset.data);
        let responsiveDatasetPropName = "";
        let orientationKeywords = this.responsiveDatasetConstants.getOrientationKeywords();
        let orientationKeywordsBitsbufs = this.responsiveDatasetConstants.getOrientationKeywordsBitsbufs();
        let orientation = "";
        let orientationBitsbuf = new Uint8Array();
        let sitesToolBitsbuf = this.responsiveDatasetBase.fileWriter.textEncoder
            .encode(this.responsiveDatasetBase.sitesToolName);
        //@ts-ignore
        let templateRendererDataRecordId = this.templateRenderer
            .setTemplate(this.mediaQueryCssFileContent)
            .setData({
            "SitesToolName": "",
            "responsiveSizeConstantName": "",
            "responsiveSizeName": "",
            "orientation": "",
            "min-width": "",
            "max-width": "",
        })
            .getActiveDataRecordId();
        this.templateRenderer.optimize(templateRendererDataRecordId);
        let mediaRetVal = 0;
        let orientationId = 0;
        for (responsiveDatasetPropName of propNames) {
            for (orientationId = 0; orientationId < 2; orientationId++) {
                orientation = orientationKeywords[orientationId];
                orientationBitsbuf = orientationKeywordsBitsbufs[orientationId];
                mediaRetVal = await this.produceOneResponsiveCssFile(sitesToolBitsbuf, responsiveDatasetPropName, orientation, orientationBitsbuf);
            }
        }
        return mediaRetVal;
    }
    // RENAMED produceMediaCssFile
    // this method produces one of the .css files for the method above
    // in the folder
    // SiteToolAutomation/MediaAndStyles/responsive
    //    style_e02_mobile_xs_portrait.css
    async produceOneResponsiveCssFile(sitesToolBitsbuf, responsiveDatasetPropName, orientation, orientationBitsbuf) {
        let responsiveSizeConstantName = this.responsiveDatasetConstants
            .getResponsiveSizeConstantNameBitsbuf();
        //@ts-ignore
        let responsiveData = this.responsiveDatasetBase.datasetBitsbufs[responsiveDatasetPropName];
        let sizesByBitsbufs_true = true;
        let sizes = this.responsiveDatasetBase.getSizesByOrientation(responsiveDatasetPropName, orientation, sizesByBitsbufs_true);
        let responsiveSizeName_withSitesToolName_Array = this.responsiveDatasetConstants
            .getResponsiveSizeName_withSitesToolName_ByBitsbufs(responsiveData["range_orderby_id"], responsiveData["art"], responsiveData["art_size"], orientationBitsbuf, sitesToolBitsbuf);
        let responsiveSizeNameOrientedArray = responsiveSizeName_withSitesToolName_Array.slice(0, 9);
        let responsiveSizeName_withSitesToolName = this.responsiveDatasetBase.fileWriter
            .concatUint8Arrays(responsiveSizeName_withSitesToolName_Array);
        let responsiveSizeNameOriented = this.responsiveDatasetBase.fileWriter
            .concatUint8Arrays(responsiveSizeNameOrientedArray);
        let templateData = this.getTemplateData(sitesToolBitsbuf, responsiveDatasetPropName, orientation, orientationBitsbuf, responsiveSizeConstantName, responsiveData, sizes, responsiveSizeName_withSitesToolName_Array, responsiveSizeNameOriented);
        let templateRendererDataRecordId = this.templateRenderer.getActiveDataRecordId();
        this.templateRenderer
            .setData(templateData);
        let responsiveCssFile_Content = this.templateRenderer.renderOptimizedDataBitsbufs(templateRendererDataRecordId, templateData);
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
    getTemplateData(sitesToolBitsbuf, _responsiveDatasetPropName, _orientation, orientationBitsbuf, responsiveSizeConstantName, _responsiveData, sizes, _responsiveSizeName_withSitesToolName_Array, responsiveSizeNameOriented) {
        let templateData = {
            "SitesToolName": sitesToolBitsbuf,
            "responsiveSizeConstantName": responsiveSizeConstantName,
            "responsiveSizeName": responsiveSizeNameOriented,
            "orientation": orientationBitsbuf,
            "min-width": sizes["from"],
            "max-width": sizes["to"],
        };
        // console.log( templateData );
        return templateData;
    }
}
//# sourceMappingURL=ResponsiveCssFile.js.map