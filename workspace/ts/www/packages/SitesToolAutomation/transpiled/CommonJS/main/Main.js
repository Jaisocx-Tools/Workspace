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
var _Main_keywordResponsiveSize, _Main_fileBaseName_responsiveSizesConstants, _Main_fileBaseName_CssImports;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const fs = __importStar(require("node:fs"));
const path = __importStar(require("node:path"));
const ResponsiveDatasetConstants_js_1 = require("../constants/ResponsiveDatasetConstants.js");
const ResponsiveSizesNames_js_1 = require("../responsive_sizes_names/ResponsiveSizesNames.js");
const ResponsiveFilesSet_js_1 = require("../responsive_files_set/ResponsiveFilesSet.js");
const ResponsiveImports_js_1 = require("../responsive_imports/ResponsiveImports.js");
// import { ResponsiveTsFile_ResponsiveSizesNames } from "../ts_file_with_sizes_names/ResponsiveTsFile_ResponsiveSizesNames.js";
const ResponsiveDatasetBase_js_1 = require("../automation_base_class/ResponsiveDatasetBase.js");
class Main {
    // responsiveTsFile_ResponsiveSizesNames: ResponsiveTsFile_ResponsiveSizesNames;
    constructor() {
        _Main_keywordResponsiveSize.set(this, "");
        _Main_fileBaseName_responsiveSizesConstants.set(this, void 0);
        _Main_fileBaseName_CssImports.set(this, void 0);
        this.pathToJsonDatasetForResponsiveSizes = "data/ResponsiveSizes/ResponsiveSizes.json";
        __classPrivateFieldSet(this, _Main_keywordResponsiveSize, "responsive_size", "f");
        __classPrivateFieldSet(this, _Main_fileBaseName_responsiveSizesConstants, "Constants", "f");
        __classPrivateFieldSet(this, _Main_fileBaseName_CssImports, "CssImports", "f");
        this.responsiveDatasetConstants = new ResponsiveDatasetConstants_js_1.ResponsiveDatasetConstants();
        this.responsiveDatasetBase = new ResponsiveDatasetBase_js_1.ResponsiveDatasetBase();
        this.responsiveCssFile = new ResponsiveFilesSet_js_1.ResponsiveFilesSet(this.responsiveDatasetBase, this.responsiveDatasetConstants);
        this.responsiveCssFileWithResponsiveSizes = new ResponsiveSizesNames_js_1.ResponsiveSizesNames(this.responsiveDatasetBase, this.responsiveDatasetConstants);
        this.responsiveImports = new ResponsiveImports_js_1.ResponsiveImports(this.responsiveDatasetBase, this.responsiveDatasetConstants);
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
                __classPrivateFieldGet(this, _Main_keywordResponsiveSize, "f"),
                "_a02_",
                __classPrivateFieldGet(this, _Main_fileBaseName_responsiveSizesConstants, "f")
            ].join("");
            //@ts-ignore
            retVal = await this.responsiveCssFileWithResponsiveSizes.produceCssFileWithResponsiveSizesConstants(fileBaseName_responsiveSizesConstants, newLinesAmount, padding);
        }
        // CSS IMPORTS
        // ---------------------------------------------
        withConstantsImportLine = (withSizesCssConstants && withConstantsImportLine);
        let isWebpackAliased_true = true;
        let filename = [
            __classPrivateFieldGet(this, _Main_keywordResponsiveSize, "f"),
            "_a03_",
            __classPrivateFieldGet(this, _Main_fileBaseName_CssImports, "f"),
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
            __classPrivateFieldGet(this, _Main_keywordResponsiveSize, "f"),
            "_a03_",
            __classPrivateFieldGet(this, _Main_fileBaseName_CssImports, "f"),
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
exports.Main = Main;
_Main_keywordResponsiveSize = new WeakMap(), _Main_fileBaseName_responsiveSizesConstants = new WeakMap(), _Main_fileBaseName_CssImports = new WeakMap();
//# sourceMappingURL=Main.js.map