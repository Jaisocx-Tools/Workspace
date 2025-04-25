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
exports.ResponsiveDatasetAutomation = void 0;
const fs = __importStar(require("node:fs"));
const path = __importStar(require("node:path"));
const node_util_1 = require("node:util");
const file_writer_1 = require("@jaisocx/file-writer");
const template_renderer_1 = require("@jaisocx/template-renderer");
const ResponsiveDatasetAutomationConstants_js_1 = require("./ResponsiveDatasetAutomationConstants.js");
class ResponsiveDatasetAutomation {
    constructor() {
        this.textEncoder = new node_util_1.TextEncoder();
        this.textDecoder = new node_util_1.TextDecoder();
        this.automationConstants = new ResponsiveDatasetAutomationConstants_js_1.ResponsiveDatasetAutomationConstants();
        this.automationConstants.textsToBitsbufs();
        this.mediaAndStylesResponsiveFolderPath = "";
        this.datasetFilePath = "";
        this.dataset = {};
        this.templateMediaCssFileContent = "";
        this.webpackAliasName = "";
        this.fileWriter = new file_writer_1.FileWriter();
        this.fileWriter
            .setDebug(false);
        this.templateRenderer = new template_renderer_1.TemplateRenderer();
        this.templateRenderer
            .setDebug(false);
    }
    timestampsLogNs(fn, label = "Function", logTimestamp = true) {
        return (...args) => {
            let logTime = (startTimestampNs, logMessage, log) => {
                const endTimestampNs = process.hrtime.bigint();
                // @ts-ignore
                const interval = BigInt(endTimestampNs - startTimestampNs);
                if (log === true) {
                    console.log(`${logMessage}: ${interval} ns`);
                }
                return interval;
            };
            const start = process.hrtime.bigint();
            const result = fn(...args);
            // Handle async functions
            if (result instanceof Promise) {
                return result.then(res => {
                    logTime(start, label, logTimestamp);
                    return result;
                });
            }
            logTime(start, label, logTimestamp);
            return result;
        };
    }
    /**
     * @ready
    */
    setMediaAndStylesResponsiveFolderPath(inFolderPath) {
        this.mediaAndStylesResponsiveFolderPath = inFolderPath;
        return this;
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
    /**
     * @ready
    */
    readTemplateMediaCssFile(inFileAbsolutePath) {
        const templatePath = inFileAbsolutePath;
        this.templateMediaCssFileContent = fs.readFileSync(templatePath, "utf8");
        return this;
    }
    /**
     * @ready
    */
    setWebpackAliasName(alias) {
        this.webpackAliasName = alias;
        return this;
    }
    /**
     * @ready
    */
    // :root {
    //
    //   Extra Small Mobile (XS)
    //   --screen-xs-mobile-portrait-from: 3px;
    //   --screen-xs-mobile-portrait-til: 320px;
    //
    //   --screen-xs-mobile-landscape-til: 568px; 
    //   --screen-xs-mobile-landscape-from: 569px; 
    //
    //
    //   Small Mobile (S)
    //   --screen-s-mobile-portrait-from: 321px; 
    //   ...
    async produceMediaConstantsCssFile(targetFileName) {
        // @ts-ignore
        let propNames = Object.keys(this.dataset.data);
        let responsiveDatasetPropName = "";
        let mediaConstantLinesSet = new Array();
        await this.fileWriter.toAddToFileInLoop_CleanupFileAndGetNewFileHandle(path.resolve(this.mediaAndStylesResponsiveFolderPath, targetFileName));
        let cssClassStartLine = this.textEncoder.encode(".workspace {\n");
        await this.fileWriter.appendBitsbufToFile(cssClassStartLine);
        let i = 0;
        let propsNumber = propNames.length;
        for (i = 0; i < propsNumber; i++) {
            responsiveDatasetPropName = propNames[i];
            mediaConstantLinesSet = this.produceMediaConstantLinesSet(responsiveDatasetPropName);
            await this.fileWriter.appendMixedArrayToFile(mediaConstantLinesSet);
        }
        let cssClassEndLine = this.textEncoder.encode("}\n");
        await this.fileWriter.appendBitsbufToFile(cssClassEndLine);
        await this.fileWriter.filehandleClose();
        return 1;
    }
    /**
     * @ready
    */
    async produceMediaCssFilesSet(filenamePrefix) {
        // @ts-ignore
        let propNames = Object.keys(this.dataset.data);
        let responsiveDatasetPropName = "";
        let orientationKeywords = this.automationConstants.getOrientationKeywords();
        let orientation = "";
        let templateRendererDataRecordId = this.templateRenderer
            .setTemplate(this.templateMediaCssFileContent)
            .setData({
            "mediaName": "",
            "mediaRuleLine": "",
            "mediaRuleConstanLine": ""
        })
            .getActiveDataRecordId();
        this.timestampsLogNs(this.templateRenderer.optimize.bind(this.templateRenderer), "TemplateRenderer.optimize()", true)(templateRendererDataRecordId);
        main: for (responsiveDatasetPropName of propNames) {
            for (orientation of orientationKeywords) {
                await this.produceMediaCssFile(filenamePrefix, responsiveDatasetPropName, orientation);
                break main;
            }
        }
        return 1;
    }
    /**
     * @ready
     */
    async produceMediaCssFile(filenamePrefix, responsiveDatasetPropName, orientation) {
        let mediaNameText = this.produceMediaName(responsiveDatasetPropName, orientation);
        let mediaRuleLinesArray = this.produceMediaRule(responsiveDatasetPropName, orientation, this.automationConstants.getMediaRuleScreen());
        let mediaRuleConstanLinesArray = this.produceMediaConstantNameLine(responsiveDatasetPropName, orientation);
        let mediaName = this.textEncoder.encode(mediaNameText);
        let mediaRuleLine = this.fileWriter.concatUint8Arrays(mediaRuleLinesArray);
        let mediaRuleConstanLine = this.fileWriter.concatUint8Arrays(mediaRuleConstanLinesArray);
        // temp for debugging
        // let mediaRuleLineText: string = this.textDecoder.decode ( this.fileWriter.concatUint8Arrays( mediaRuleLine ) );
        // let mediaRuleConstanLineText: string = this.textDecoder.decode ( this.fileWriter.concatUint8Arrays( mediaRuleConstanLine ) );
        let templateData = {
            "mediaName": mediaName,
            "mediaRuleLine": mediaRuleLine,
            "mediaRuleConstanLine": mediaRuleConstanLine
        };
        // temp for debugging
        // let templateData: any = {
        //   "mediaName": mediaNameText,
        //   "mediaRuleLine": mediaRuleLineText,
        //   "mediaRuleConstanLine": mediaRuleConstanLineText
        // };
        this.templateRenderer
            .setData(templateData);
        let templateRendererDataRecordId = this.templateRenderer.getActiveDataRecordId();
        let content = this.templateRenderer.renderOptimizedDataBitsbufs(templateRendererDataRecordId, templateData);
        // temp for debugging
        // @ts-ignore
        // let contentText: string = this.templateRenderer.renderOptimizedToString ( 
        //   templateRendererDataRecordId,
        //   templateData
        // );
        let fileName = [filenamePrefix, mediaNameText, ".css"].join("");
        let mediaCssFilePath = path.resolve(this.mediaAndStylesResponsiveFolderPath, fileName);
        let opened = await this.fileWriter.toAddToFileInLoop_CleanupFileAndGetNewFileHandle(mediaCssFilePath);
        let written = await this.fileWriter.appendFlatArrayToFile(content);
        let closed = await this.fileWriter.filehandleClose();
        return written;
    }
    /**
     * @ready
     */
    // writes this file:
    // @import url("@jaisocx-css-clean-start-MediaAndStyles/responsive/clean-start-xs-mobile-landscape.css");
    // @import url("@jaisocx-css-clean-start-MediaAndStyles/responsive/clean-start-xs-mobile-portrait.css");
    //   
    // @import url("@jaisocx-css-clean-start-MediaAndStyles/responsive/clean-start-s-mobile-landscape.css");
    // ...  
    async produceMediaCssImportsCssFile(targetFileName, relativeImportedFilesFolderPath, importedFilenamePrefix, webpackAliased) {
        // @ts-ignore
        let data = this.dataset.data;
        let importedFileName = "";
        let webpackAliasName = "";
        let mediaName = "";
        let mediaCssImportLine = "";
        if (webpackAliased === true) {
            webpackAliasName = this.webpackAliasName;
        }
        let orientationKeywords = this.automationConstants.getOrientationKeywords();
        await this.fileWriter.toAddToFileInLoop_CleanupFileAndGetNewFileHandle(path.resolve(this.mediaAndStylesResponsiveFolderPath, targetFileName));
        for (let responsiveDatasetPropName in data) {
            for (let orientation of orientationKeywords) {
                mediaName = this.produceMediaName(responsiveDatasetPropName, orientation);
                importedFileName = `${importedFilenamePrefix}${mediaName}.css`;
                mediaCssImportLine = this.produceMediaCssImportLine(relativeImportedFilesFolderPath, importedFileName, webpackAliasName);
                await this.fileWriter.appendTextToFile(mediaCssImportLine);
            }
        }
        await this.fileWriter.filehandleClose();
        return 1;
    }
    // @import url("@jaisocx-css-clean-start-MediaAndStyles/responsive/clean-start-s-mobile-landscape.css");
    /**
     * @ready
    */
    produceMediaCssImportLine(relativeImportedFilesFolderPath, importedFileName, webpackAliasName) {
        let words = [
            this.automationConstants.getImportUrlStart(),
            webpackAliasName,
            "/",
            relativeImportedFilesFolderPath,
            "/",
            importedFileName,
            this.automationConstants.getImportUrlEnd(),
            this.automationConstants.getN()
        ];
        let importLine = words.join("");
        return importLine;
    }
    /**
     * @ready
     */
    produceMediaName(responsiveDatasetPropName, orientation) {
        // @ts-ignore
        let responsiveDatasetProp = this.dataset.data[responsiveDatasetPropName];
        const words = [
            this.automationConstants.getMediaConstantNameStart(),
            this.automationConstants.getUnderscore(),
            responsiveDatasetProp["range_orderby_id"],
            this.automationConstants.getUnderscore(),
            responsiveDatasetProp["art"],
            this.automationConstants.getUnderscore(),
            responsiveDatasetProp["art_size"],
            this.automationConstants.getUnderscore(),
            orientation
        ];
        const mediaName = words.join("");
        return mediaName;
    }
    // --media_rule_name: s_56_16k_tv_horizontal;
    /**
     * @ready
     */
    produceMediaConstantNameLine(responsiveDatasetPropName, orientation) {
        const mediaName = this.produceMediaName(responsiveDatasetPropName, orientation);
        let mediaConstantNameLine = this.automationConstants.getMediaConstantNameLineUpdated(mediaName);
        return [...mediaConstantNameLine];
    }
    /**
     * @ready
     */
    // @media only screen and (min-width: 786px) and (max-width: 1023px) and (orientation: landscape)
    produceMediaRule(responsiveDatasetPropName, orientation, media // screen | print | all
    ) {
        let sizes = this.getSizesByOrientation(responsiveDatasetPropName, orientation);
        let minWidth = (new Number(sizes["from"])).toString();
        let maxWidth = (new Number(sizes["til"])).toString();
        //`"@media only ${media} and (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) and (orientation: ${orientation})";`;
        let mediaLine = this.automationConstants.getMediaLineUpdated(media, minWidth, maxWidth, orientation);
        return [...mediaLine];
    }
    // --s_56_16k_tv_horizontal__media_rule: "@media only screen and (min-width: 786px) and (max-width: 1023px) and (orientation: landscape)";
    /**
     * @ready
    */
    produceMediaRuleConstantLine(responsiveDatasetPropName, orientation, media // screen | print | all
    ) {
        const mediaName = this.produceMediaName(responsiveDatasetPropName, orientation);
        let sizes = this.getSizesByOrientation(responsiveDatasetPropName, orientation);
        let minWidth = sizes["from"];
        let maxWidth = sizes["til"];
        //`"@media only ${media} and (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) and (orientation: ${orientation})";`;
        let mediaLine = this.automationConstants.getMediaLineUpdated(media, minWidth, maxWidth, orientation);
        let mediaRuleConstantLine = this.automationConstants.getMediaRuleConstantLineUpdated(mediaName, mediaLine);
        return [...mediaRuleConstantLine];
    }
    //
    // --s_56_16k_tv_vertical__width__from: 8641px; /* 16k TV */
    // --s_56_16k_tv_vertical__width__til: 9999px; /* 16k TV */
    //
    // --s_56_16k_tv_horizontal__width__from: 15361px; /* 16k TV */
    // --s_56_16k_tv_horizontal__width__til: 25360px; /* 16k TV */
    /**
     * @ready
    */
    produceMediaConstantLinesSet(responsiveDatasetPropName) {
        let orientationValues = this.automationConstants.getOrientationKeywords();
        let mediaLines = new Array(4);
        let mediaLine = new Array();
        let newLine = this.automationConstants.getBitsbufN();
        let orientation = "";
        let isStartValue = true;
        let mediaLinePos = 0;
        for (orientation of orientationValues) {
            for (let i = 1; i < 3; i++) {
                isStartValue = (i === 1);
                mediaLine = this.produceMediaConstantLine(responsiveDatasetPropName, orientation, isStartValue);
                mediaLine.push(newLine);
                mediaLines[mediaLinePos] = mediaLine;
                mediaLinePos++;
            }
        }
        mediaLines[3].push(newLine);
        return mediaLines;
    }
    /**
     * @ready
     *
     * @retVal datatype { from: number, to: number }
    */
    getSizesByOrientation(responsiveDatasetPropName, orientation) {
        let sizes = {};
        // @ts-ignore
        let responsiveDatasetProp = this.dataset.data[responsiveDatasetPropName];
        let orientationStandard = responsiveDatasetProp["orientation_standard"];
        if (orientation === orientationStandard) {
            sizes = responsiveDatasetProp["width"];
        }
        else if ((orientation === this.automationConstants.getMediaRuleOrientationLandscape()) ||
            (orientation === this.automationConstants.getMediaRuleOrientationPortrait())) {
            sizes = responsiveDatasetProp["height"];
        }
        else {
            throw new Error(`Orientation value supported is "landscape" | "portrait". Was set ${orientation}`);
        }
        return sizes;
    }
    // --s_56_16k_tv_horizontal__width__til: 25360px; /* 16k TV */
    /**
     * @ready
    */
    produceMediaConstantLine(responsiveDatasetPropName, orientation, isStartValue) {
        const mediaName = this.produceMediaName(responsiveDatasetPropName, orientation);
        let postfix = "";
        if (isStartValue === true) {
            postfix = this.automationConstants.getKeywordFrom();
        }
        else {
            postfix = this.automationConstants.getKeywordTil();
        }
        let size = "";
        let sizes = this.getSizesByOrientation(responsiveDatasetPropName, orientation);
        size = (new Number(sizes[postfix])).toString();
        let mediaConstantLine = this.automationConstants.getMediaConstantLineUpdated(mediaName, postfix, size);
        //if ( this.debug === true ) {
        let mediaConstantLineText = this.textDecoder.decode(this.fileWriter.concatUint8Arrays(mediaConstantLine));
        console.info(mediaConstantLineText);
        //}
        return [...mediaConstantLine];
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
    */
    getDatasetFilePath() {
        return this.datasetFilePath;
    }
}
exports.ResponsiveDatasetAutomation = ResponsiveDatasetAutomation;
//# sourceMappingURL=ResponsiveDatasetAutomation.js.map