"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsiveDatasetAutomationConstants = void 0;
class ResponsiveDatasetAutomationConstants {
    constructor() {
        this.textEncoder = new TextEncoder();
        this. = "media_rule";
        this. = "media_rule_name";
        this. = "style";
        this. = "@media only ";
        this. = "screen";
        this. = "print";
        this. = "orientation";
        this. = "landscape";
        this. = "portrait";
        this. = " and ";
        this. = "(";
        this. = ")";
        this. = "{";
        this. = "}";
        this. = "@import url(\"";
        this. = "\");";
        this. = "width";
        this. = "min_width";
        this. = "max_width";
        this. = "--";
        this. = ": ";
        this. = "var";
        this. = ";";
        this. = "\"";
        this. = "/*";
        this. = "*/";
        this. = " ";
        this. = "\n";
        this. = "_";
        this. = "px";
        this. = "min-width";
        this. = "max-width";
        this. = [
            this.,
            this.
        ];
        this. = [
            this.,
            this.,
            "range_orderby_id",
            this.,
            "art",
            this.,
            "art_size",
            this.,
            "orientation"
        ];
        this. = [
            this.,
            "1",
            this.,
            this.,
            this.,
            this.,
            "6",
            this.,
            this.,
            this.,
            this.,
            this.,
            this.,
            "13",
            this.,
            this.,
            this.,
            this.,
            this.,
            this.,
            "20",
            this.
        ];
        this. = [
            this.,
            this.,
            this.,
            "3",
            this.
        ];
        this. = [
            this.,
            this.,
            this.,
            this.,
            this.,
            "5",
            this.,
            this.,
            this.,
            this.,
            this.,
            "11",
            this.,
            this.,
            this.
        ];
        this. = [
            this.,
            this.,
            this.,
            this.,
            this.,
            "5",
            this.,
            this.,
            "8",
            this.,
            "10",
            this.,
            this.
        ];
        this. = [
            [this.,
                this.,
                this.,
                this.].join(""),
            "1",
            [this.,
                this.,
                this.,
                this.].join(""),
            "3",
            [this.,
                this.].join(""),
            "5",
            [this.,
                this.].join("")
        ];
        this. = new Array();
        this. = this.textEncoder.encode(this.);
        this. = new Array();
        this. = new Array();
        this. = new Array();
        this. = new Array();
        this. = new Array();
        this. = new Array();
        this. = new Array();
        this. = this.textEncoder.encode(this.);
        this. = this.textEncoder.encode(this.);
        this. = this.textEncoder.encode(this.);
    }
    textsToBitsbufs() {
        let textsBlocksNamesArray = [
            "orientationKeywords",
            "mediaName",
            "mediaLine",
            "mediaConstantNameLine",
            "responsiveSizeConstantLine",
            "mediaConstantLine",
            "responsiveSizeVariable_Width"
        ];
        let textBlocks = new Array();
        let bitsbufsTextBlocks = new Array();
        let textBlockName = "";
        let textBlockNameFirstLetterUC = "";
        let getMethodName = "";
        let getBitsbufsMethodName = "";
        let textBlocksLen = 0;
        for (textBlockName of textsBlocksNamesArray) {
            textBlockNameFirstLetterUC = (textBlockName.charAt(0).toUpperCase() + textBlockName.slice(1));
            getMethodName = `get${textBlockNameFirstLetterUC}`;
            getBitsbufsMethodName = `getBitbufs${textBlockNameFirstLetterUC}`;
            // @ts-ignore
            textBlocks = this[getMethodName].call(this);
            // @ts-ignore
            bitsbufsTextBlocks = this[getBitsbufsMethodName].call(this);
            textBlocksLen = this.textArrayToUnt8Arrays(
            // @ts-ignore
            textBlocks, bitsbufsTextBlocks);
        }
        return textBlocksLen;
    }
    textArrayToUnt8Arrays(inArray, inOutBitsbufsTextBlocks) {
        let textLine = "";
        let bitsbufsTextLine = this.textEncoder.encode(" ");
        let i = 0;
        let textBlocksLen = inArray.length;
        for (i = 0; i < textBlocksLen; i++) {
            // @ts-ignore
            textLine = inArray[i];
            bitsbufsTextLine = this.textEncoder.encode(textLine);
            // @ts-ignore
            inOutBitsbufsTextBlocks[i] = bitsbufsTextLine;
        }
        return textBlocksLen;
    }
    getKeywordResponsiveSize() {
        return this.;
    }
    getResponsiveSizeName() {
        return this.;
    }
    getMediaConstantNameStart() {
        return this.;
    }
    getResponsiveSize() {
        return this.;
    }
    getResponsiveSizeScreen() {
        return this.;
    }
    getResponsiveSizePrint() {
        return this.;
    }
    getResponsiveSizeOrientation() {
        return this.;
    }
    getResponsiveSizeOrientationLandscape() {
        return this.;
    }
    getResponsiveSizeOrientationPortrait() {
        return this.;
    }
    getResponsiveSizeAnd() {
        return this.;
    }
    getBraceRoundStart() {
        return this.;
    }
    getBraceRoundEnd() {
        return this.;
    }
    getBraceFigureStart() {
        return this.;
    }
    getBraceFigureEnd() {
        return this.;
    }
    getImportUrlStart() {
        return this.;
    }
    getImportUrlEnd() {
        return this.;
    }
    getKeywordWidth() {
        return this.;
    }
    getKeywordFrom() {
        return this.;
    }
    getKeywordTil() {
        return this.;
    }
    getCssVariablePrefix() {
        return this.;
    }
    getCssVariableNameValueDelimiter() {
        return this.;
    }
    getCssExpressionEnd() {
        return this.;
    }
    getDoubleQuote() {
        return this.;
    }
    getCommentStart() {
        return this.;
    }
    getCommentEnd() {
        return this.;
    }
    getBackgroundSpace() {
        return this.;
    }
    getN() {
        return this.;
    }
    getBitsbufN() {
        return this.;
    }
    getUnderscore() {
        return this.;
    }
    getUnitPx() {
        return this.;
    }
    getMinWidth() {
        return this.;
    }
    getMaxWidth() {
        return this.;
    }
    getBitbufsOrientationKeywords() {
        return this.;
    }
    getOrientationKeywords() {
        return this.;
    }
    getMediaLine() {
        return this.;
    }
    getMediaConstantNameLine() {
        return this.;
    }
    getResponsiveSizeConstantLine() {
        return this.;
    }
    getMediaConstantLine() {
        return this.;
    }
    getResponsiveSizeVariable_Width() {
        return this.;
    }
    getBitbufsMediaLine() {
        return this.;
    }
    getBitbufsMediaConstantNameLine() {
        return this.;
    }
    getBitbufsResponsiveSizeConstantLine() {
        return this.;
    }
    getBitbufsMediaConstantLine() {
        return this.;
    }
    getBitbufsResponsiveSizeVariable_Width() {
        return this.;
    }
    getBitsbufKeywordFrom() {
        return this.;
    }
    getBitsbufKeywordTil() {
        return this.;
    }
    getMediaName(rangeOrderbyId, art, artSize, orientation) {
        const rangeOrderbyIdPos = 2;
        const artPos = 4;
        const artSizePos = 6;
        const orientationPos = 8;
        this.[rangeOrderbyIdPos] = this.textEncoder.encode(rangeOrderbyId);
        this.[artPos] = this.textEncoder.encode(art);
        this.[artSizePos] = this.textEncoder.encode(artSize);
        this.[orientationPos] = this.textEncoder.encode(orientation);
        return this.;
    }
    getMediaLineUpdated(media, minWidth, maxWidth, orientation) {
        const mediaPos = 1;
        const minWidthPos = 6;
        const maxWidthPos = 13;
        const orientationPos = 20;
        this.[mediaPos] = this.textEncoder.encode(media);
        this.[minWidthPos] = this.textEncoder.encode(minWidth);
        this.[maxWidthPos] = this.textEncoder.encode(maxWidth);
        this.[orientationPos] = this.textEncoder.encode(orientation);
        return this.;
    }
    getMediaConstantNameLineUpdated(mediaName) {
        const mediaNamePos = 3;
        this.[mediaNamePos] = this.textEncoder.encode(mediaName);
        return this.;
    }
    getResponsiveSizeConstantLineUpdated(mediaName, mediaLine) {
        const mediaNamePos = 5;
        const mediaLinePos = 11;
        this.[mediaNamePos] = this.textEncoder.encode(mediaName);
        this.[mediaLinePos] = mediaLine;
        return this.;
    }
    getMediaConstantNameUpdated(mediaName, postfix, size) {
        const mediaNamePos = 5;
        const postfixPos = 8;
        // const sizePos: number = 10;
        this.[mediaNamePos] = this.textEncoder.encode(mediaName);
        this.[postfixPos] = this.textEncoder.encode(postfix);
        // this.#bitbufsMediaConstantLine[sizePos] = this.textEncoder.encode( size );
        return this.;
    }
    getResponsiveSizeVariable_Width_Updated(mediaName, postfix) {
        const postfixPos_1 = 1;
        const mediaNamePos = 3;
        const postfixPos_2 = 5;
        this.[postfixPos_1] = postfix;
        this.[mediaNamePos] = mediaName;
        this.[postfixPos_2] = postfix;
        return this.;
    }
}
exports.ResponsiveDatasetAutomationConstants = ResponsiveDatasetAutomationConstants;
//# sourceMappingURL=ResponsiveDatasetAutomationConstants.js.map