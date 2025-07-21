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
exports.ResponsiveDatasetBase = void 0;
//@ts-ignore
const fs = __importStar(require("node:fs"));
//@ts-ignore
const path = __importStar(require("node:path"));
const file_writer_1 = require("@jaisocx/file-writer");
const template_renderer_1 = require("@jaisocx/template-renderer");
const ResponsiveDatasetConstants_js_1 = require("../constants/ResponsiveDatasetConstants.js");
class ResponsiveDatasetBase {
    constructor() {
        // this.textEncoder = new TextEncoder();
        // this.textDecoder = new TextDecoder();
        this.responsiveDatasetConstants = new ResponsiveDatasetConstants_js_1.ResponsiveDatasetConstants();
        this.fileWriter = new file_writer_1.FileWriter();
        this.fileWriter
            .setDebug(false);
        this.templateRenderer = new template_renderer_1.TemplateRenderer();
        this.templateRenderer
            .setDebug(false);
        this.mediaAndStylesThemeFolderPath = "";
        this.mediaAndStylesResponsiveFolderPath = "";
        this.datasetFilePath = "";
        this.mediaQueryCssFileTemplatePath = "";
        this.dataset = new Object();
        this.datasetBitsbufs = new Object();
        this.templateMediaCssFileContent = "";
        this.webpackAliasName = "";
        this.templateProjectPath = "";
        this.sitesToolName = "";
        this.sitesTool_ThemeName = "";
        this.commandLineArgs = new Object();
        this.bitsbufSitesToolName = new Uint8Array();
        this.bitsbufSitesTool_ThemeName = new Uint8Array();
    }
    // NOT IMPLEMENTED
    // sets the path to the new TypeScript SitesTool
    // where the produced .css files will be placed.
    setTemplateProjectPath(path) {
        this.templateProjectPath = path;
        return this;
    }
    getTemplateProjectPath() {
        return this.templateProjectPath;
    }
    /**
     * @ready
    */
    setWebpackAliasName(alias) {
        this.webpackAliasName = alias;
        return this;
    }
    getWebpackAliasName() {
        return this.webpackAliasName;
    }
    // NOT IMPLEMENTED
    // first to implement the class prop set method,
    // later we know the resources we need on cdn for the css responsive feature of a SitesTool
    setCdnUrl(_cdnUrl) {
        throw new Error("Method setCdnUrl() was not implemented");
        return this;
    }
    /**
     * @ready
    */
    setMediaAndStylesThemeFolderPath(inFolderRelativePath) {
        this.mediaAndStylesThemeFolderPath = path.resolve(this.templateProjectPath, inFolderRelativePath);
        if (fs.existsSync(this.mediaAndStylesThemeFolderPath) === false) {
            fs.mkdirSync(this.mediaAndStylesThemeFolderPath, { recursive: true });
        }
        return this;
    }
    getMediaAndStylesThemeFolderPath() {
        return this.mediaAndStylesThemeFolderPath;
    }
    setMediaAndStylesResponsiveFolderPath(inFolderRelativePath) {
        this.mediaAndStylesResponsiveFolderPath = path.resolve(this.templateProjectPath, inFolderRelativePath);
        if (fs.existsSync(this.mediaAndStylesResponsiveFolderPath) === false) {
            fs.mkdirSync(this.mediaAndStylesResponsiveFolderPath, { recursive: true });
        }
        return this;
    }
    getMediaAndStylesResponsiveFolderPath() {
        return this.mediaAndStylesResponsiveFolderPath;
    }
    setMediaQueryCssFileTemplatePath(path) {
        this.mediaQueryCssFileTemplatePath = path;
        return this;
    }
    getMediaQueryCssFileTemplatePath() {
        return this.mediaQueryCssFileTemplatePath;
    }
    // reads json with sizes
    /**
     * @ready
    */
    readDataset(inDatasetFileAbsolutePath) {
        this.datasetFilePath = inDatasetFileAbsolutePath;
        const json = fs.readFileSync(this.datasetFilePath, "utf8");
        this.dataset = JSON.parse(json);
        return this;
    }
    /**
     * @ready
    */
    setDataset(inDataset) {
        this.dataset = inDataset;
        return this;
    }
    setSitesToolName(name) {
        this.sitesToolName = name;
        let te = this.fileWriter.textEncoder;
        this.bitsbufSitesToolName = te.encode(this.sitesToolName);
        return this;
    }
    setSitesTool_ThemeName(themeName) {
        this.sitesTool_ThemeName = themeName;
        let te = this.fileWriter.textEncoder;
        this.bitsbufSitesTool_ThemeName = te.encode(this.sitesTool_ThemeName);
        return this;
    }
    setCommandLineArgs(args) {
        this.commandLineArgs = args;
        return this;
    }
    datasetPropsToBitsbufs(sitesTool, sitesTool_ThemeName) {
        let te = this.fileWriter.textEncoder;
        let zeroLenBitsbuf = new Uint8Array(0);
        this.setSitesToolName(sitesTool);
        this.setSitesTool_ThemeName(sitesTool_ThemeName);
        //@ts-ignore
        let data = this.dataset["data"];
        let datasetKeys = Object.keys(data);
        let datasetPropname = "";
        let dataProp = new Object();
        for (datasetPropname of datasetKeys) {
            dataProp = data[datasetPropname];
            //@ts-ignore
            this.datasetBitsbufs[datasetPropname] = new Object();
            //@ts-ignore
            let dataBitsbufs = this.datasetBitsbufs[datasetPropname];
            dataBitsbufs["SitesToolName"] = this.bitsbufSitesToolName;
            dataBitsbufs["SitesTool_ThemeName"] = this.bitsbufSitesTool_ThemeName;
            dataBitsbufs["range_orderby_id"] = te.encode(dataProp["range_orderby_id"]);
            let dataPropWidth = dataProp["width"];
            let dataPropHeight = dataProp["height"];
            dataBitsbufs["width"] = new Object();
            dataBitsbufs["width"]["from"] = te.encode("" + dataPropWidth["from"]);
            dataBitsbufs["width"]["to"] = te.encode("" + dataPropWidth["to"]);
            dataBitsbufs["height"] = new Object();
            dataBitsbufs["height"]["from"] = te.encode("" + dataPropHeight["from"]);
            dataBitsbufs["height"]["to"] = te.encode("" + dataPropHeight["to"]);
            dataBitsbufs["art"] = te.encode(dataProp["art"]);
            dataBitsbufs["art_size"] = te.encode(dataProp["art_size"]);
            let responsiveSizeName_Oriented = this.responsiveDatasetConstants
                .getResponsiveSizeNameOrientedBitsbufsArray(dataBitsbufs["range_orderby_id"], dataBitsbufs["art"], dataBitsbufs["art_size"], zeroLenBitsbuf, this.bitsbufSitesToolName, this.bitsbufSitesTool_ThemeName);
            let responsiveSizeName = this.responsiveDatasetConstants
                .getResponsiveSizeName(responsiveSizeName_Oriented);
            // console.log( responsiveSizeName );
            dataBitsbufs["responsiveSizeName"] = this.fileWriter.concatUint8Arrays(responsiveSizeName);
            let responsiveSizeNameString = this.fileWriter.textDecoder.decode(dataBitsbufs["responsiveSizeName"]);
            dataBitsbufs["responsiveSizeNameString"] = responsiveSizeNameString;
            // console.log( responsiveSizeNameString );
        }
        return this;
    }
    getDatasetFilePath() {
        return this.datasetFilePath;
    }
    // json with sizes
    /**
     * @ready
    */
    getDataset() {
        return this.dataset;
    }
    /**
     * @ready
     *
     * @retVal datatype { from: number, to: number }
    */
    getSizesByOrientation(responsiveDatasetPropName, orientation, byBitsbufs) {
        let sizes = new Object();
        let heights = new Object();
        // @ts-ignore
        let data = this.dataset["data"][responsiveDatasetPropName];
        let responsiveDatasetProp = new Object();
        if (byBitsbufs === true) {
            responsiveDatasetProp = this.datasetBitsbufs[responsiveDatasetPropName];
        }
        else {
            responsiveDatasetProp = data;
        }
        let orientationStandard = data["orientation_standard"];
        if (orientation === orientationStandard) {
            sizes = Object.assign({}, responsiveDatasetProp["width"]);
            heights = responsiveDatasetProp["height"];
        }
        else if ((orientation === this.responsiveDatasetConstants.getKeywordOrientationLandscape()) ||
            (orientation === this.responsiveDatasetConstants.getKeywordOrientationPortrait())) {
            sizes = Object.assign({}, responsiveDatasetProp["height"]);
            heights = responsiveDatasetProp["width"];
        }
        else {
            throw new Error(`Orientation value supported is "landscape" | "portrait". Was set ${orientation}`);
        }
        sizes["min-height"] = heights["from"];
        sizes["max-height"] = heights["to"];
        return sizes;
    }
}
exports.ResponsiveDatasetBase = ResponsiveDatasetBase;
//# sourceMappingURL=ResponsiveDatasetBase.js.map