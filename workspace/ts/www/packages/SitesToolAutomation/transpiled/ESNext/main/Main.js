import * as fs from "node:fs";
import * as path from "node:path";
import { ResponsiveDatasetConstants } from "../constants/ResponsiveDatasetConstants.js";
import { ResponsiveSizesNames } from "../responsive_sizes_names/ResponsiveSizesNames.js";
import { ResponsiveFilesSet } from "../responsive_files_set/ResponsiveFilesSet.js";
import { ResponsiveImports } from "../responsive_imports/ResponsiveImports.js";
// import { ResponsiveTsFile_ResponsiveSizesNames } from "../ts_file_with_sizes_names/ResponsiveTsFile_ResponsiveSizesNames.js";
import { ResponsiveDatasetBase } from "../automation_base_class/ResponsiveDatasetBase.js";
export class Main {
    pathToJsonDatasetForResponsiveSizes;
    #keywordResponsiveSize = "";
    #fileBaseName_responsiveSizesConstants;
    #fileBaseName_CssImports;
    responsiveDatasetConstants;
    responsiveDatasetBase;
    responsiveCssFile;
    responsiveCssFileWithResponsiveSizes;
    responsiveImports;
    // responsiveTsFile_ResponsiveSizesNames: ResponsiveTsFile_ResponsiveSizesNames;
    constructor() {
        this.pathToJsonDatasetForResponsiveSizes = "data/ResponsiveSizes/ResponsiveSizes.json";
        this.#keywordResponsiveSize = "responsive_size";
        this.#fileBaseName_responsiveSizesConstants = "Constants";
        this.#fileBaseName_CssImports = "CssImports";
        this.responsiveDatasetConstants = new ResponsiveDatasetConstants();
        this.responsiveDatasetBase = new ResponsiveDatasetBase();
        this.responsiveCssFile = new ResponsiveFilesSet(this.responsiveDatasetBase, this.responsiveDatasetConstants);
        this.responsiveCssFileWithResponsiveSizes = new ResponsiveSizesNames(this.responsiveDatasetBase, this.responsiveDatasetConstants);
        this.responsiveImports = new ResponsiveImports(this.responsiveDatasetBase, this.responsiveDatasetConstants);
        // this.responsiveTsFile_ResponsiveSizesNames = new ResponsiveTsFile_ResponsiveSizesNames();
    }
    // the central main method to produce .css files and for them the datasets, texts and names and .css files names.
    // cssOrJsTool: "css" | "js"
    async run(sitesToolName, cssOrJsTool, mediaQueryCssFileTemplatePath, withSizesCssConstants, withConstantsImportLine) {
        this.responsiveDatasetBase.setSitesToolName(sitesToolName);
        if (this.responsiveDatasetBase.templateProjectPath.length === 0) {
            this.responsiveDatasetBase.templateProjectPath = path.resolve("../../", "sites_tools", (cssOrJsTool + "_tools"), sitesToolName);
        }
        if (fs.existsSync(this.responsiveDatasetBase.templateProjectPath) === false) {
            fs.mkdirSync(this.responsiveDatasetBase.templateProjectPath, { recursive: true });
        }
        if (this.responsiveDatasetBase.webpackAliasName.length === 0) {
            this.responsiveDatasetBase.webpackAliasName = ["@", sitesToolName, "_", "MediaAndStyles"].join("");
        }
        this.responsiveDatasetBase
            .readDataset(this.pathToJsonDatasetForResponsiveSizes)
            .datasetPropsToBitsbufs(sitesToolName)
            .setMediaAndStylesResponsiveFolderPath(["MediaAndStyles", "/", "themes", "/", "theme_base"].join(""))
            .setMediaQueryCssFileTemplatePath(mediaQueryCssFileTemplatePath);
        // console.log( this.responsiveDatasetBase.dataset );
        let retVal = 0;
        let newLinesAmount = 3;
        let padding = 2;
        // CSS FILES SET, MEDIA QUERIES
        // ---------------------------------------------
        this.responsiveCssFile.readTemplateMediaCssFile(this.responsiveDatasetBase.mediaQueryCssFileTemplatePath);
        retVal = await this.responsiveCssFile.produceResponsiveFilesSetsSet();
        // CSS FILE WITH CONSTANTS OF RESPONSIVE SIZES
        // ---------------------------------------------
        let fileBaseName_responsiveSizesConstants = "";
        if (withSizesCssConstants === true) {
            fileBaseName_responsiveSizesConstants = [
                this.#keywordResponsiveSize,
                "_a02_",
                this.#fileBaseName_responsiveSizesConstants
            ].join("");
            //@ts-ignore
            retVal = await this.responsiveCssFileWithResponsiveSizes.produceCssFileWithResponsiveSizesConstants(fileBaseName_responsiveSizesConstants, newLinesAmount, padding);
        }
        // CSS IMPORTS
        // ---------------------------------------------
        withConstantsImportLine = (withSizesCssConstants && withConstantsImportLine);
        let isWebpackAliased_true = true;
        let filename = [
            this.#keywordResponsiveSize,
            "_a03_",
            this.#fileBaseName_CssImports,
            "_",
            sitesToolName,
            "_",
            "Webpack",
            ".css"
        ].join("");
        retVal = await this.responsiveImports.produceImportsCssFileWithResponsiveFilesSetsSet(
        // ResponsiveSizesCssImports_Webpack.css
        filename, this.responsiveDatasetBase.mediaAndStylesResponsiveFolderPath, fileBaseName_responsiveSizesConstants, isWebpackAliased_true, withConstantsImportLine);
        let isWebpackAliased_false = false;
        filename = [
            this.#keywordResponsiveSize,
            "_a03_",
            this.#fileBaseName_CssImports,
            "_",
            sitesToolName,
            "_",
            "Relative",
            ".css"
        ].join("");
        retVal = await this.responsiveImports.produceImportsCssFileWithResponsiveFilesSetsSet(
        // ResponsiveSizesCssImports_Relative.css
        filename, this.responsiveDatasetBase.mediaAndStylesResponsiveFolderPath, fileBaseName_responsiveSizesConstants, isWebpackAliased_false, withConstantsImportLine);
        return retVal;
        // TS CLASS
        // ---------------------------------------------
        // retVal = await this.responsiveTsFile_ResponsiveSizesNames
        //   .produceTsFileWithResponsiveSizesNames( "ResponsiveSizesConstants" );
    }
}
//# sourceMappingURL=Main.js.map