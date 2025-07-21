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
import { FileProducerByTemplate } from "@jaisocx/file-producer-by-template";
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
        commandLineArgs["withSizesCssConstants"] = (commandLineArgs["withSizesCssConstants"] === "true") || (commandLineArgs["withSizesCssConstants"] === "yes");
        commandLineArgs["justTheme"] = (commandLineArgs["justTheme"] === "true") || (commandLineArgs["justTheme"] === "yes");
        commandLineArgs["justThemeResponsiveDataset"] = (commandLineArgs["justThemeResponsiveDataset"] === "true") || (commandLineArgs["justThemeResponsiveDataset"] === "yes");
        if (commandLineArgs["keywordResponsiveSize"]) {
            this.#keywordResponsiveSize = commandLineArgs["keywordResponsiveSize"];
            this.responsiveDatasetConstants.setKeywordResponsiveSize(this.#keywordResponsiveSize);
        }
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
        let mediaAndStyles_themePath = path.resolve(this.responsiveDatasetBase.templateProjectPath, "MediaAndStyles", "themes", commandLineArgs["sitesTool_ThemeName"]);
        if (fs.existsSync(mediaAndStyles_themePath) === false) {
            fs.mkdirSync(mediaAndStyles_themePath, { recursive: true });
        }
        // ${SitesTool}/MediaAndStyles/themes/${ThemeName}/responsive
        let mediaAndStyles_responsivePath = path.resolve(mediaAndStyles_themePath, "responsive");
        if (fs.existsSync(mediaAndStyles_responsivePath) === false) {
            fs.mkdirSync(mediaAndStyles_responsivePath, { recursive: true });
        }
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
        let fileProducerByTemplate = new FileProducerByTemplate();
        let sitesTool_ThemeCssClassName = (this.responsiveDatasetBase.sitesTool_ThemeName === "theme_base") ? "" : [".", this.responsiveDatasetBase.sitesTool_ThemeName].join("");
        let templatesData = {
            "SitesToolName": this.responsiveDatasetBase.sitesToolName,
            "SitesTool_ThemeName": this.responsiveDatasetBase.sitesTool_ThemeName,
            "SitesTool_ThemeCssClassName": sitesTool_ThemeCssClassName
        };
        let filePath = "";
        //@ts-ignore
        let fileProducedResult = 0;
        if (!commandLineArgs["justThemeResponsiveDataset"] && !commandLineArgs["justTheme"]) {
            filePath = path.resolve(this.responsiveDatasetBase.templateProjectPath, "BuildData.example.json");
            fileProducedResult = fileProducerByTemplate
                .readTemplateFile("data/templates/BuildData.json.template")
                .setTemplateData(templatesData)
                .setFilePath(filePath)
                .produce();
            filePath = path.resolve(this.responsiveDatasetBase.templateProjectPath, "index.example.html");
            fileProducedResult = fileProducerByTemplate
                .readTemplateFile("data/templates/index.example.html.template")
                .setTemplateData(templatesData)
                .setFilePath(filePath)
                .produce();
            filePath = path.resolve(this.responsiveDatasetBase.templateProjectPath, "webpack.aliases.json");
            fileProducedResult = fileProducerByTemplate
                .readTemplateFile("data/templates/webpack.aliases.json.template")
                .setTemplateData(templatesData)
                .setFilePath(filePath)
                .produce();
            filePath = path.resolve(this.responsiveDatasetBase.templateProjectPath, "src", "index.ts");
            fileProducedResult = fileProducerByTemplate
                .readTemplateFile("data/templates/src/index.ts.template")
                .setTemplateData(templatesData)
                .setFilePath(filePath)
                .produce();
            filePath = path.resolve(this.responsiveDatasetBase.templateProjectPath, "MediaAndStyles", (this.responsiveDatasetBase.sitesToolName + "_main.css"));
            fileProducedResult = fileProducerByTemplate
                .readTemplateFile("data/templates/css/SitesTool_main.css.template")
                .setTemplateData(templatesData)
                .setFilePath(filePath)
                .produce();
            filePath = path.resolve(this.responsiveDatasetBase.templateProjectPath, "MediaAndStyles", (this.responsiveDatasetBase.sitesToolName + "_main_Webpack.css"));
            //@ts-ignore
            templatesData["min"] = "";
            fileProducedResult = fileProducerByTemplate
                .readTemplateFile("data/templates/css/SitesTool_main_Webpack.css.template")
                .setTemplateData(templatesData)
                .setFilePath(filePath)
                .produce();
            filePath = path.resolve(this.responsiveDatasetBase.templateProjectPath, "MediaAndStyles", (this.responsiveDatasetBase.sitesToolName + "_main_Webpack_min.css"));
            //@ts-ignore
            templatesData["min"] = "_min";
            fileProducedResult = fileProducerByTemplate
                .readTemplateFile("data/templates/css/SitesTool_main_Webpack.css.template")
                .setTemplateData(templatesData)
                .setFilePath(filePath)
                .produce();
            //@ts-ignore
            delete templatesData["min"];
            filePath = path.resolve(this.responsiveDatasetBase.templateProjectPath, "MediaAndStyles", (this.responsiveDatasetBase.sitesToolName + "_main_relative.css"));
            fileProducedResult = fileProducerByTemplate
                .readTemplateFile("data/templates/css/SitesTool_main_relative.css.template")
                .setTemplateData(templatesData)
                .setFilePath(filePath)
                .produce();
            let fileContentsToCopy = "";
            filePath = path.resolve(this.responsiveDatasetBase.templateProjectPath, "package.json");
            fileContentsToCopy = fs.readFileSync("data/templates/package.json.copy", { encoding: "utf8",
                flag: "r" });
            fs.writeFileSync(filePath, fileContentsToCopy, { encoding: "utf8",
                mode: 0o755 });
            filePath = path.resolve(this.responsiveDatasetBase.templateProjectPath, "src", "webpack.aliases.mjs");
            fileContentsToCopy = fs.readFileSync("data/templates/src/webpack.aliases.mjs.copy", { encoding: "utf8",
                flag: "r" });
            fs.writeFileSync(filePath, fileContentsToCopy, { encoding: "utf8",
                mode: 0o755 });
            filePath = path.resolve(this.responsiveDatasetBase.templateProjectPath, "src", "webpack.aliases.cjs");
            fileContentsToCopy = fs.readFileSync("data/templates/src/webpack.aliases.cjs.copy", { encoding: "utf8",
                flag: "r" });
            fs.writeFileSync(filePath, fileContentsToCopy, { encoding: "utf8",
                mode: 0o755 });
            filePath = path.resolve(this.responsiveDatasetBase.templateProjectPath, "src", "webpackAliases.ts");
            fileContentsToCopy = fs.readFileSync("data/templates/src/webpackAliases.ts.copy", { encoding: "utf8",
                flag: "r" });
            fs.writeFileSync(filePath, fileContentsToCopy, { encoding: "utf8",
                mode: 0o755 });
        }
        if (!commandLineArgs["justThemeResponsiveDataset"]) {
            filePath = path.resolve(this.responsiveDatasetBase.templateProjectPath, "MediaAndStyles", "themes", this.responsiveDatasetBase.sitesTool_ThemeName, [
                this.responsiveDatasetBase.sitesToolName,
                this.responsiveDatasetBase.sitesTool_ThemeName,
                "main.css"
            ].join("_"));
            fileProducedResult = fileProducerByTemplate
                .readTemplateFile("data/templates/css/SitesTool_ThemeName.css.template")
                .setTemplateData(templatesData)
                .setFilePath(filePath)
                .produce();
        }
        // CSS FILES SET, MEDIA QUERIES
        // ---------------------------------------------
        this.responsiveCssFile.readTemplateMediaCssFile(this.responsiveDatasetBase.mediaQueryCssFileTemplatePath);
        retVal = await this.responsiveCssFile.produceResponsiveFilesSetsSet();
        // CSS FILE WITH CONSTANTS OF RESPONSIVE SIZES
        // ---------------------------------------------
        let fileBaseName_responsiveSizesConstants = "";
        if (commandLineArgs["withSizesCssConstants"] === true && !commandLineArgs["justTheme"] && !commandLineArgs["justThemeResponsiveDataset"]) {
            fileBaseName_responsiveSizesConstants = [
                this.#keywordResponsiveSize,
                "_",
                this.#fileBaseName_responsiveSizesConstants
            ].join("");
            //@ts-ignore
            retVal = await this.responsiveCssFileWithResponsiveSizes
                .produceCssFileWithResponsiveSizesConstants(fileBaseName_responsiveSizesConstants, newLinesAmount, padding);
        }
        // CSS IMPORTS
        // ---------------------------------------------
        let isWebpackAliased_true = true;
        // ResponsiveSizesCssImports_Webpack.css
        let filenameArray = [
            this.#keywordResponsiveSize,
            "_",
            this.#fileBaseName_Imports,
            "_",
            commandLineArgs["sitesToolName"],
            "_",
            commandLineArgs["sitesTool_ThemeName"],
            "_",
            "relativeOrWebpackKeyword",
            ".css"
        ];
        let relativeOrWebpackKeywordPos = (filenameArray.length - 2);
        if (!commandLineArgs["justThemeResponsiveDataset"]) {
            filenameArray[relativeOrWebpackKeywordPos] = "Webpack";
            retVal = await this.responsiveImports.produceImportsCssFileWithResponsiveFilesSetsSet(filenameArray.join(""), this.responsiveDatasetBase.mediaAndStylesThemeFolderPath, isWebpackAliased_true);
            filenameArray[relativeOrWebpackKeywordPos] = "Webpack_min";
            retVal = await this.responsiveImports.produceImportsCssFileWithResponsiveFilesSetsSet(filenameArray.join(""), this.responsiveDatasetBase.mediaAndStylesThemeFolderPath, isWebpackAliased_true);
            let isWebpackAliased_false = false;
            filenameArray[relativeOrWebpackKeywordPos] = "Relative";
            retVal = await this.responsiveImports.produceImportsCssFileWithResponsiveFilesSetsSet(filenameArray.join(""), this.responsiveDatasetBase.mediaAndStylesThemeFolderPath, isWebpackAliased_false);
        }
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