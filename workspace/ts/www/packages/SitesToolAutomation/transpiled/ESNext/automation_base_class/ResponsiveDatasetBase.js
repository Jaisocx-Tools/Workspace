//@ts-ignore
import * as fs from "node:fs";
//@ts-ignore
import * as path from "node:path";
import { FileWriter } from "@jaisocx/file-writer";
import { TemplateRenderer } from "@jaisocx/template-renderer";
import { ResponsiveDatasetConstants } from "../constants/ResponsiveDatasetConstants.js";
export class ResponsiveDatasetBase {
    // textEncoder: TextEncoder;
    // textDecoder: TextDecoder;
    responsiveDatasetConstants;
    fileWriter;
    templateRenderer;
    mediaAndStylesThemeFolderPath;
    mediaAndStylesResponsiveFolderPath;
    datasetFilePath;
    mediaQueryCssFileTemplatePath;
    dataset;
    datasetBitsbufs;
    templateMediaCssFileContent;
    webpackAliasName;
    templateProjectPath;
    sitesToolName;
    sitesTool_ThemeName;
    commandLineArgs;
    bitsbufSitesToolName;
    bitsbufSitesTool_ThemeName;
    constructor() {
        // this.textEncoder = new TextEncoder();
        // this.textDecoder = new TextDecoder();
        this.responsiveDatasetConstants = new ResponsiveDatasetConstants();
        this.fileWriter = new FileWriter();
        this.fileWriter
            .setDebug(false);
        this.templateRenderer = new TemplateRenderer();
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
            sizes = { ...responsiveDatasetProp["width"] };
            heights = responsiveDatasetProp["height"];
        }
        else if ((orientation === this.responsiveDatasetConstants.getKeywordOrientationLandscape()) ||
            (orientation === this.responsiveDatasetConstants.getKeywordOrientationPortrait())) {
            sizes = { ...responsiveDatasetProp["height"] };
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
//# sourceMappingURL=ResponsiveDatasetBase.js.map