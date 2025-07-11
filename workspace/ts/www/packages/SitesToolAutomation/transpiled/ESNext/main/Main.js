//@ts-ignore
import * as fs from "node:fs";
//@ts-ignore
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
    #fileBaseName_Imports;
    responsiveDatasetConstants;
    responsiveDatasetBase;
    responsiveCssFile;
    responsiveCssFileWithResponsiveSizes;
    responsiveImports;
    // responsiveTsFile_ResponsiveSizesNames: ResponsiveTsFile_ResponsiveSizesNames;
    constructor() {
        this.pathToJsonDatasetForResponsiveSizes = "data/responsive_sizes/ResponsiveSizes.json";
        this.#keywordResponsiveSize = "responsive_size";
        this.#fileBaseName_responsiveSizesConstants = "Constants";
        this.#fileBaseName_Imports = "Imports";
        this.responsiveDatasetConstants = new ResponsiveDatasetConstants();
        this.responsiveDatasetBase = new ResponsiveDatasetBase();
        this.responsiveCssFile = new ResponsiveFilesSet(this.responsiveDatasetBase, this.responsiveDatasetConstants);
        this.responsiveCssFileWithResponsiveSizes = new ResponsiveSizesNames(this.responsiveDatasetBase, this.responsiveDatasetConstants);
        this.responsiveImports = new ResponsiveImports(this.responsiveDatasetBase, this.responsiveDatasetConstants);
        // this.responsiveTsFile_ResponsiveSizesNames = new ResponsiveTsFile_ResponsiveSizesNames();
    }
    // the central main method to produce .css files and for them the datasets, texts and names and .css files names.
    // cssOrJsTool: "css" | "js"
    async run(commandLineArgs) {
        commandLineArgs["withSizesCssConstants"] = (commandLineArgs["withSizesCssConstants"] === "true");
        commandLineArgs["withConstantsImportLine"] = (commandLineArgs["withConstantsImportLine"] === "true");
        this.#keywordResponsiveSize = commandLineArgs["keywordResponsiveSize"];
        this.responsiveDatasetConstants.setKeywordResponsiveSize(this.#keywordResponsiveSize);
        this.responsiveDatasetConstants.initBitbufsArrays();
        this.responsiveDatasetBase.setCommandLineArgs(commandLineArgs);
        this.responsiveDatasetBase.setSitesTool_ThemeName(commandLineArgs["sitesTool_ThemeName"]);
        this.responsiveDatasetBase.setSitesToolName(commandLineArgs["sitesToolName"]);
        if (this.responsiveDatasetBase.templateProjectPath.length === 0) {
            this.responsiveDatasetBase.templateProjectPath = path.resolve("../../", "sites_tools", (commandLineArgs["cssOrJsTool"] + "_tools"), commandLineArgs["sitesToolName"]);
        }
        if (fs.existsSync(this.responsiveDatasetBase.templateProjectPath) === false) {
            fs.mkdirSync(this.responsiveDatasetBase.templateProjectPath, { recursive: true });
        }
        if (this.responsiveDatasetBase.webpackAliasName.length === 0) {
            this.responsiveDatasetBase.webpackAliasName = ["@", commandLineArgs["sitesToolName"], "_", "MediaAndStyles"].join("");
        }
        // ${SitesTool}/MediaAndStyles/themes/${ThemeName}
        let mediaAndStyles_themePath = path.resolve("MediaAndStyles", "themes", commandLineArgs["sitesTool_ThemeName"], "responsive");
        // ${SitesTool}/MediaAndStyles/themes/${ThemeName}/responsive
        let mediaAndStyles_responsivePath = path.resolve(mediaAndStyles_themePath, "responsive");
        this.responsiveDatasetBase
            .readDataset(this.pathToJsonDatasetForResponsiveSizes)
            .datasetPropsToBitsbufs(commandLineArgs["sitesToolName"], commandLineArgs["sitesTool_ThemeName"])
            .setMediaAndStylesThemeFolderPath(mediaAndStyles_themePath)
            .setMediaAndStylesResponsiveFolderPath(mediaAndStyles_responsivePath)
            .setMediaQueryCssFileTemplatePath(commandLineArgs["templatePath"]);
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
        if (commandLineArgs["withSizesCssConstants"] === true) {
            fileBaseName_responsiveSizesConstants = [
                this.#keywordResponsiveSize,
                "_a02_",
                this.#fileBaseName_responsiveSizesConstants
            ].join("");
            //@ts-ignore
            retVal = await this.responsiveCssFileWithResponsiveSizes
                .produceCssFileWithResponsiveSizesConstants(fileBaseName_responsiveSizesConstants, newLinesAmount, padding);
        }
        // CSS IMPORTS
        // ---------------------------------------------
        let withConstantsImportLine = (commandLineArgs["withSizesCssConstants"] && commandLineArgs["withConstantsImportLine"]);
        let isWebpackAliased_true = true;
        // ResponsiveSizesCssImports_Webpack.css
        let filenameArray = [
            this.#keywordResponsiveSize,
            "_a03_",
            this.#fileBaseName_Imports,
            "_",
            commandLineArgs["sitesToolName"],
            "_",
            "relativeOrWebpackKeyword",
            ".css"
        ];
        let relativeOrWebpackKeywordPos = (filenameArray.length - 2);
        filenameArray[relativeOrWebpackKeywordPos] = "Webpack";
        retVal = await this.responsiveImports.produceImportsCssFileWithResponsiveFilesSetsSet(filenameArray.join(""), this.responsiveDatasetBase.mediaAndStylesThemeFolderPath, isWebpackAliased_true, withConstantsImportLine);
        let isWebpackAliased_false = false;
        filenameArray[relativeOrWebpackKeywordPos] = "Relative";
        retVal = await this.responsiveImports.produceImportsCssFileWithResponsiveFilesSetsSet(filenameArray.join(""), this.responsiveDatasetBase.mediaAndStylesResponsiveFolderPath, isWebpackAliased_false, withConstantsImportLine);
        // let webpackAliasTemplateFilePath: string = path.resolve(
        //   this.responsiveDatasetBase.templateProjectPath,
        //   "data",
        //   "webpack.aliases.json.template"
        // );
        // let webpackAliasTemplateContents: string = fs.readFileSync (
        //   webpackAliasTemplateFilePath,
        //   "utf8" );
        // this.responsiveDatasetBase.templateRenderer.setTemplate( webpackAliasTemplateContents );
        return retVal;
        // TS CLASS
        // ---------------------------------------------
        // retVal = await this.responsiveTsFile_ResponsiveSizesNames
        //   .produceTsFileWithResponsiveSizesNames( "ResponsiveSizesConstants" );
    }
}
//# sourceMappingURL=Main.js.map