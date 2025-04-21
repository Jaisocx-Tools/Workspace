import * as fs from "node:fs";
import * as path from "node:path";
import { ResponsiveDatasetAutomationConstants } from "./ResponsiveDatasetAutomationConstants.js";
export class ResponsiveDatasetAutomation {
    automationConstants;
    mediaAndStylesResponsiveFolderPath;
    datasetFilePath;
    dataset;
    templateMediaCssFileContent;
    webpackAliasName;
    constructor() {
        this.automationConstants = new ResponsiveDatasetAutomationConstants();
        this.mediaAndStylesResponsiveFolderPath = "";
        this.datasetFilePath = "";
        this.dataset = {};
        this.templateMediaCssFileContent = "";
        this.webpackAliasName = "";
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
    readDataset(inDatasetFileRelativePath) {
        this.datasetFilePath = path.resolve(this.mediaAndStylesResponsiveFolderPath, inDatasetFileRelativePath);
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
    readTemplateMediaCssFile(inFileRelativePath) {
        const templatePath = path.resolve(this.mediaAndStylesResponsiveFolderPath, inFileRelativePath);
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
    produceMediaConstantsCssFile(fileName) {
        return this;
    }
    produceMediaCssFilesSet() {
        return this;
    }
    produceMediaCssFile(responsiveDatasetPropName, fileName) {
        // do in constants class array, logics like method there already 
        // sets 3 variables on an array Id
        // let words = method();
        // words[1] = nediaRuleName;
        // words[2] = mediaRuleLine;
        // words[3] = mediaRuleConstantLine;
        // mediaRuleName;
        // mediaRuleLine;
        // mediaRuleConstantLine;
        // let words1 = this.templateMediaCssFileContent.split( mediaRuleName );
        // let words2 = words1[1].split( mediaRuleLine );
        // let words3 = words2[1].split( mediaRuleConstantLine );
        // let words: string[] = [
        //   words1[0],
        //   mediaRuleName,
        //   words2[0],
        //   mediaRuleLine,
        //   words3[0],
        //   mediaRuleConstantLine,
        //   words3[1]
        // ];
        // for ( let block of words ) {
        //   fs.appedFileSync( fileName, block );
        // }
        // fd.close();
        return this;
    }
    // writes this file:
    // @import url("@jaisocx-css-clean-start-MediaAndStyles/responsive/clean-start-xs-mobile-landscape.css");
    // @import url("@jaisocx-css-clean-start-MediaAndStyles/responsive/clean-start-xs-mobile-portrait.css");
    //   
    // @import url("@jaisocx-css-clean-start-MediaAndStyles/responsive/clean-start-s-mobile-landscape.css");
    // ...  
    produceMediaCssImportsCssFile(fileName, webpackAliased) {
        return this;
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
        const words = [
            this.automationConstants.getCssVariablePrefix(),
            this.automationConstants.getMediaRuleName(),
            this.automationConstants.getCssVariableNameValueDelimiter(),
            mediaName,
            this.automationConstants.getCssExpressionEnd()
        ];
        const mediaNameLine = words.join("");
        return mediaNameLine;
    }
    /**
     * @ready
     */
    // @media only screen and (min-width: 786px) and (max-width: 1023px) and (orientation: landscape)
    produceMediaRule(responsiveDatasetPropName, orientation, media // screen | print | all
    ) {
        const mediaName = this.produceMediaName(responsiveDatasetPropName, orientation);
        let sizes = this.getSizesByOrientation(responsiveDatasetPropName, orientation);
        let minWidth = sizes["from"];
        let maxWidth = sizes["to"];
        //`"@media only ${media} and (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) and (orientation: ${orientation})";`;
        let mediaLine = this.automationConstants.getMediaLine(media, minWidth, maxWidth, orientation);
        return mediaLine;
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
        let maxWidth = sizes["to"];
        //`"@media only ${media} and (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) and (orientation: ${orientation})";`;
        let mediaLine = this.automationConstants.getMediaLine(media, minWidth, maxWidth, orientation);
        let words = [
            this.automationConstants.getCssVariablePrefix(),
            mediaName,
            this.automationConstants.getUnderscore(),
            this.automationConstants.getUnderscore(),
            this.automationConstants.getKeywordMediarule(),
            this.automationConstants.getCssVariableNameValueDelimiter(),
            this.automationConstants.getDoubleQuote(),
            mediaLine,
            this.automationConstants.getDoubleQuote(),
            this.automationConstants.getCssExpressionEnd()
        ];
        const mediaConstantLine = words.join("");
        return mediaConstantLine;
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
        let orientationValues = [
            this.automationConstants.getMediaRuleOrientationPortrait(),
            this.automationConstants.getMediaRuleOrientationLandscape()
        ];
        let mediaLines = [];
        let mediaLine = "";
        let newLine = this.automationConstants.getN();
        let orientation = "";
        let isStartValue = true;
        for (orientation of orientationValues) {
            for (let i = 0; i < 2; i++) {
                isStartValue = (i === 1);
                mediaLine = this.produceMediaConstantLine(responsiveDatasetPropName, orientation, isStartValue);
                mediaLines.push(mediaLine);
            }
            mediaLines.push(this.automationConstants.getN());
        }
        let mediaLinesSet = mediaLines.join(newLine);
        return mediaLinesSet;
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
        if (isStartValue === true) {
            size = (sizes["from"]);
        }
        else {
            size = (sizes["til"]);
        }
        let words = [
            this.automationConstants.getCssVariablePrefix(),
            mediaName,
            this.automationConstants.getUnderscore(),
            this.automationConstants.getUnderscore(),
            this.automationConstants.getKeywordWidth(),
            this.automationConstants.getUnderscore(),
            this.automationConstants.getUnderscore(),
            postfix,
            this.automationConstants.getCssVariableNameValueDelimiter(),
            size,
            this.automationConstants.getUnitPx(),
            this.automationConstants.getCssExpressionEnd()
        ];
        const mediaLine = words.join("");
        return mediaLine;
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
//# sourceMappingURL=ResponsiveDatasetAutomation.js.map