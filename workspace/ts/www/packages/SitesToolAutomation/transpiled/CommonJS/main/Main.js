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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Main_keywordResponsiveSize, _Main_fileBaseName_responsiveSizesConstants, _Main_fileBaseName_Imports;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
//@ts-ignore
const fs = __importStar(require("node:fs"));
//@ts-ignore
const path = __importStar(require("node:path"));
const ResponsiveDatasetConstants_js_1 = require("../constants/ResponsiveDatasetConstants.js");
const ResponsiveSizesNames_js_1 = require("../responsive_sizes_names/ResponsiveSizesNames.js");
const ResponsiveFilesSet_js_1 = require("../responsive_files_set/ResponsiveFilesSet.js");
const ResponsiveImports_js_1 = require("../responsive_imports/ResponsiveImports.js");
// import { ResponsiveTsFile_ResponsiveSizesNames } from "../ts_file_with_sizes_names/ResponsiveTsFile_ResponsiveSizesNames.js";
const ResponsiveDatasetBase_js_1 = require("../automation_base_class/ResponsiveDatasetBase.js");
const file_producer_by_template_1 = require("@jaisocx/file-producer-by-template");
class Main {
    // responsiveTsFile_ResponsiveSizesNames: ResponsiveTsFile_ResponsiveSizesNames;
    constructor() {
        _Main_keywordResponsiveSize.set(this, "");
        _Main_fileBaseName_responsiveSizesConstants.set(this, void 0);
        _Main_fileBaseName_Imports.set(this, void 0);
        this.pathToJsonDatasetForResponsiveSizes = "data/responsive_sizes/ResponsiveSizes.json";
        __classPrivateFieldSet(this, _Main_keywordResponsiveSize, "responsive_size", "f");
        __classPrivateFieldSet(this, _Main_fileBaseName_responsiveSizesConstants, "Constants", "f");
        __classPrivateFieldSet(this, _Main_fileBaseName_Imports, "Imports", "f");
        this.responsiveDatasetConstants = new ResponsiveDatasetConstants_js_1.ResponsiveDatasetConstants();
        this.responsiveDatasetBase = new ResponsiveDatasetBase_js_1.ResponsiveDatasetBase();
        this.responsiveCssFile = new ResponsiveFilesSet_js_1.ResponsiveFilesSet(this.responsiveDatasetBase, this.responsiveDatasetConstants);
        this.responsiveCssFileWithResponsiveSizes = new ResponsiveSizesNames_js_1.ResponsiveSizesNames(this.responsiveDatasetBase, this.responsiveDatasetConstants);
        this.responsiveImports = new ResponsiveImports_js_1.ResponsiveImports(this.responsiveDatasetBase, this.responsiveDatasetConstants);
        // this.responsiveTsFile_ResponsiveSizesNames = new ResponsiveTsFile_ResponsiveSizesNames();
    }
    // the central main method to produce .css files and for them the datasets, texts and names and .css files names.
    // cssOrJsTool: "css" | "js"
    async run(commandLineArgs) {
        commandLineArgs["withSizesCssConstants"] = (commandLineArgs["withSizesCssConstants"] === "true") || (commandLineArgs["withSizesCssConstants"] === "yes");
        commandLineArgs["justTheme"] = (commandLineArgs["justTheme"] === "true") || (commandLineArgs["justTheme"] === "yes");
        commandLineArgs["justThemeResponsiveDataset"] = (commandLineArgs["justThemeResponsiveDataset"] === "true") || (commandLineArgs["justThemeResponsiveDataset"] === "yes");
        if (commandLineArgs["keywordResponsiveSize"]) {
            __classPrivateFieldSet(this, _Main_keywordResponsiveSize, commandLineArgs["keywordResponsiveSize"], "f");
            this.responsiveDatasetConstants.setKeywordResponsiveSize(__classPrivateFieldGet(this, _Main_keywordResponsiveSize, "f"));
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
        let fileProducerByTemplate = new file_producer_by_template_1.FileProducerByTemplate();
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
                __classPrivateFieldGet(this, _Main_keywordResponsiveSize, "f"),
                "_",
                __classPrivateFieldGet(this, _Main_fileBaseName_responsiveSizesConstants, "f")
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
            __classPrivateFieldGet(this, _Main_keywordResponsiveSize, "f"),
            "_",
            __classPrivateFieldGet(this, _Main_fileBaseName_Imports, "f"),
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
exports.Main = Main;
_Main_keywordResponsiveSize = new WeakMap(), _Main_fileBaseName_responsiveSizesConstants = new WeakMap(), _Main_fileBaseName_Imports = new WeakMap();
//# sourceMappingURL=Main.js.map