export class ResponsiveDatasetAutomationConstants {
    textEncoder;
    keywordResponsiveSize;
    responsiveSizeName;
    mediaConstantNameStart;
    responsiveSize;
    responsiveSizeScreen;
    responsiveSizePrint;
    responsiveSizeOrientation;
    responsiveSizeOrientationLandscape;
    responsiveSizeOrientationPortrait;
    responsiveSizeAnd;
    braceRoundStart;
    braceRoundEnd;
    braceFigureStart;
    braceFigureEnd;
    importUrlStart;
    importUrlEnd;
    keywordWidth;
    keywordFrom;
    keywordTil;
    cssVariablePrefix;
    cssVariableNameValueDelimiter;
    cssVariableReferenceKeyword_Var;
    cssExpressionEnd;
    doubleQuote;
    commentStart;
    commentEnd;
    backgroundSpace;
    N;
    underscore;
    unitPx;
    minWidth;
    maxWidth;
    orientationKeywords;
    bitbufsOrientationKeywords;
    mediaName;
    mediaLine;
    mediaConstantNameLine;
    mediaConstantName;
    responsiveSizeConstantLine;
    mediaConstantLine;
    responsiveSizeVariable_Width;
    bitbufsMediaName;
    bitbufsMediaLine;
    bitbufMediaConstantNameStart;
    bitbufsMediaConstantNameLine;
    bitbufsResponsiveSizeConstantLine;
    bitbufsMediaConstantName;
    bitbufsMediaConstantLine;
    bitbufsResponsiveSizeVariable_Width;
    bitsbufN;
    bitbufKeywordFrom;
    bitbufKeywordTil;
    constructor() {
        this.textEncoder = new TextEncoder();
        this.#keywordResponsiveSize = "media_rule";
        this.#responsiveSizeName = "media_rule_name";
        this.#mediaConstantNameStart = "style";
        this.#responsiveSize = "@media only ";
        this.#responsiveSizeScreen = "screen";
        this.#responsiveSizePrint = "print";
        this.#responsiveSizeOrientation = "orientation";
        this.#responsiveSizeOrientationLandscape = "landscape";
        this.#responsiveSizeOrientationPortrait = "portrait";
        this.#responsiveSizeAnd = " and ";
        this.#braceRoundStart = "(";
        this.#braceRoundEnd = ")";
        this.#braceFigureStart = "{";
        this.#braceFigureEnd = "}";
        this.#importUrlStart = "@import url(\"";
        this.#importUrlEnd = "\");";
        this.#keywordWidth = "width";
        this.#keywordFrom = "min_width";
        this.#keywordTil = "max_width";
        this.#cssVariablePrefix = "--";
        this.#cssVariableNameValueDelimiter = ": ";
        this.#cssVariableReferenceKeyword_Var = "var";
        this.#cssExpressionEnd = ";";
        this.#doubleQuote = "\"";
        this.#commentStart = "/*";
        this.#commentEnd = "*/";
        this.#backgroundSpace = " ";
        this.#N = "\n";
        this.#underscore = "_";
        this.#unitPx = "px";
        this.#minWidth = "min-width";
        this.#maxWidth = "max-width";
        this.#orientationKeywords = [
            this.#responsiveSizeOrientationPortrait,
            this.#responsiveSizeOrientationLandscape
        ];
        this.#mediaName = [
            this.#mediaConstantNameStart,
            this.#underscore,
            "range_orderby_id",
            this.#underscore,
            "art",
            this.#underscore,
            "art_size",
            this.#underscore,
            "orientation"
        ];
        this.#mediaLine = [
            this.#responsiveSize,
            "1",
            this.#responsiveSizeAnd,
            this.#braceRoundStart,
            this.#minWidth,
            this.#cssVariableNameValueDelimiter,
            "6",
            this.#unitPx,
            this.#braceRoundEnd,
            this.#responsiveSizeAnd,
            this.#braceRoundStart,
            this.#maxWidth,
            this.#cssVariableNameValueDelimiter,
            "13",
            this.#unitPx,
            this.#braceRoundEnd,
            this.#responsiveSizeAnd,
            this.#braceRoundStart,
            this.#responsiveSizeOrientation,
            this.#cssVariableNameValueDelimiter,
            "20",
            this.#braceRoundEnd
        ];
        this.#mediaConstantNameLine = [
            this.#cssVariablePrefix,
            this.#responsiveSizeName,
            this.#cssVariableNameValueDelimiter,
            "3",
            this.#cssExpressionEnd
        ];
        this.#responsiveSizeConstantLine = [
            this.#backgroundSpace,
            this.#backgroundSpace,
            this.#backgroundSpace,
            this.#backgroundSpace,
            this.#cssVariablePrefix,
            "5",
            this.#underscore,
            this.#underscore,
            this.#keywordResponsiveSize,
            this.#cssVariableNameValueDelimiter,
            this.#doubleQuote,
            "11",
            this.#doubleQuote,
            this.#cssExpressionEnd,
            this.#N
        ];
        this.#mediaConstantLine = [
            this.#backgroundSpace,
            this.#backgroundSpace,
            this.#backgroundSpace,
            this.#backgroundSpace,
            this.#cssVariablePrefix,
            "5",
            this.#underscore,
            this.#underscore,
            "8",
            this.#cssVariableNameValueDelimiter,
            "10",
            this.#unitPx,
            this.#cssExpressionEnd
        ];
        this.#responsiveSizeVariable_Width = [
            [this.#cssVariablePrefix,
                this.#keywordResponsiveSize,
                this.#underscore,
                this.#underscore].join(""),
            "1",
            [this.#cssVariableNameValueDelimiter,
                this.#cssVariableReferenceKeyword_Var,
                this.#braceRoundStart,
                this.#cssVariablePrefix].join(""),
            "3",
            [this.#underscore,
                this.#underscore].join(""),
            "5",
            [this.#braceRoundEnd,
                this.#cssExpressionEnd].join("")
        ];
        this.#bitbufsOrientationKeywords = new Array();
        this.#bitbufMediaConstantNameStart = this.textEncoder.encode(this.#mediaConstantNameStart);
        this.#bitbufsMediaName = new Array();
        this.#bitbufsMediaLine = new Array();
        this.#bitbufsMediaConstantNameLine = new Array();
        this.#bitbufsMediaConstantName = new Array();
        this.#bitbufsResponsiveSizeConstantLine = new Array();
        this.#bitbufsMediaConstantLine = new Array();
        this.#bitbufsResponsiveSizeVariable_Width = new Array();
        this.#bitsbufN = this.textEncoder.encode(this.#N);
        this.#bitbufKeywordFrom = this.textEncoder.encode(this.#keywordFrom);
        this.#bitbufKeywordTil = this.textEncoder.encode(this.#keywordTil);
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
        return this.#keywordResponsiveSize;
    }
    getResponsiveSizeName() {
        return this.#responsiveSizeName;
    }
    getMediaConstantNameStart() {
        return this.#mediaConstantNameStart;
    }
    getResponsiveSize() {
        return this.#responsiveSize;
    }
    getResponsiveSizeScreen() {
        return this.#responsiveSizeScreen;
    }
    getResponsiveSizePrint() {
        return this.#responsiveSizePrint;
    }
    getResponsiveSizeOrientation() {
        return this.#responsiveSizeOrientation;
    }
    getResponsiveSizeOrientationLandscape() {
        return this.#responsiveSizeOrientationLandscape;
    }
    getResponsiveSizeOrientationPortrait() {
        return this.#responsiveSizeOrientationPortrait;
    }
    getResponsiveSizeAnd() {
        return this.#responsiveSizeAnd;
    }
    getBraceRoundStart() {
        return this.#braceRoundStart;
    }
    getBraceRoundEnd() {
        return this.#braceRoundEnd;
    }
    getBraceFigureStart() {
        return this.#braceFigureStart;
    }
    getBraceFigureEnd() {
        return this.#braceFigureEnd;
    }
    getImportUrlStart() {
        return this.#importUrlStart;
    }
    getImportUrlEnd() {
        return this.#importUrlEnd;
    }
    getKeywordWidth() {
        return this.#keywordWidth;
    }
    getKeywordFrom() {
        return this.#keywordFrom;
    }
    getKeywordTil() {
        return this.#keywordTil;
    }
    getCssVariablePrefix() {
        return this.#cssVariablePrefix;
    }
    getCssVariableNameValueDelimiter() {
        return this.#cssVariableNameValueDelimiter;
    }
    getCssExpressionEnd() {
        return this.#cssExpressionEnd;
    }
    getDoubleQuote() {
        return this.#doubleQuote;
    }
    getCommentStart() {
        return this.#commentStart;
    }
    getCommentEnd() {
        return this.#commentEnd;
    }
    getBackgroundSpace() {
        return this.#backgroundSpace;
    }
    getN() {
        return this.#N;
    }
    getBitsbufN() {
        return this.#bitsbufN;
    }
    getUnderscore() {
        return this.#underscore;
    }
    getUnitPx() {
        return this.#unitPx;
    }
    getMinWidth() {
        return this.#minWidth;
    }
    getMaxWidth() {
        return this.#maxWidth;
    }
    getBitbufsOrientationKeywords() {
        return this.#bitbufsOrientationKeywords;
    }
    getOrientationKeywords() {
        return this.#orientationKeywords;
    }
    getMediaLine() {
        return this.#mediaLine;
    }
    getMediaConstantNameLine() {
        return this.#mediaConstantNameLine;
    }
    getResponsiveSizeConstantLine() {
        return this.#responsiveSizeConstantLine;
    }
    getMediaConstantLine() {
        return this.#mediaConstantLine;
    }
    getResponsiveSizeVariable_Width() {
        return this.#responsiveSizeVariable_Width;
    }
    getBitbufsMediaLine() {
        return this.#bitbufsMediaLine;
    }
    getBitbufsMediaConstantNameLine() {
        return this.#bitbufsMediaConstantNameLine;
    }
    getBitbufsResponsiveSizeConstantLine() {
        return this.#bitbufsResponsiveSizeConstantLine;
    }
    getBitbufsMediaConstantLine() {
        return this.#bitbufsMediaConstantLine;
    }
    getBitbufsResponsiveSizeVariable_Width() {
        return this.#bitbufsResponsiveSizeVariable_Width;
    }
    getBitsbufKeywordFrom() {
        return this.#bitbufKeywordFrom;
    }
    getBitsbufKeywordTil() {
        return this.#bitbufKeywordTil;
    }
    getMediaName(rangeOrderbyId, art, artSize, orientation) {
        const rangeOrderbyIdPos = 2;
        const artPos = 4;
        const artSizePos = 6;
        const orientationPos = 8;
        this.#bitbufsMediaName[rangeOrderbyIdPos] = this.textEncoder.encode(rangeOrderbyId);
        this.#bitbufsMediaName[artPos] = this.textEncoder.encode(art);
        this.#bitbufsMediaName[artSizePos] = this.textEncoder.encode(artSize);
        this.#bitbufsMediaName[orientationPos] = this.textEncoder.encode(orientation);
        return this.#bitbufsMediaName;
    }
    getMediaLineUpdated(media, minWidth, maxWidth, orientation) {
        const mediaPos = 1;
        const minWidthPos = 6;
        const maxWidthPos = 13;
        const orientationPos = 20;
        this.#bitbufsMediaLine[mediaPos] = this.textEncoder.encode(media);
        this.#bitbufsMediaLine[minWidthPos] = this.textEncoder.encode(minWidth);
        this.#bitbufsMediaLine[maxWidthPos] = this.textEncoder.encode(maxWidth);
        this.#bitbufsMediaLine[orientationPos] = this.textEncoder.encode(orientation);
        return this.#bitbufsMediaLine;
    }
    getMediaConstantNameLineUpdated(mediaName) {
        const mediaNamePos = 3;
        this.#bitbufsMediaConstantNameLine[mediaNamePos] = this.textEncoder.encode(mediaName);
        return this.#bitbufsMediaConstantNameLine;
    }
    getResponsiveSizeConstantLineUpdated(mediaName, mediaLine) {
        const mediaNamePos = 5;
        const mediaLinePos = 11;
        this.#bitbufsResponsiveSizeConstantLine[mediaNamePos] = this.textEncoder.encode(mediaName);
        this.#bitbufsResponsiveSizeConstantLine[mediaLinePos] = mediaLine;
        return this.#bitbufsResponsiveSizeConstantLine;
    }
    getMediaConstantNameUpdated(mediaName, postfix, size) {
        const mediaNamePos = 5;
        const postfixPos = 8;
        // const sizePos: number = 10;
        this.#bitbufsMediaConstantName[mediaNamePos] = this.textEncoder.encode(mediaName);
        this.#bitbufsMediaConstantName[postfixPos] = this.textEncoder.encode(postfix);
        // this.#bitbufsMediaConstantLine[sizePos] = this.textEncoder.encode( size );
        return this.#bitbufsMediaConstantName;
    }
    getResponsiveSizeVariable_Width_Updated(mediaName, postfix) {
        const postfixPos_1 = 1;
        const mediaNamePos = 3;
        const postfixPos_2 = 5;
        this.#bitbufsResponsiveSizeVariable_Width[postfixPos_1] = postfix;
        this.#bitbufsResponsiveSizeVariable_Width[mediaNamePos] = mediaName;
        this.#bitbufsResponsiveSizeVariable_Width[postfixPos_2] = postfix;
        return this.#bitbufsResponsiveSizeVariable_Width;
    }
}
//# sourceMappingURL=ResponsiveDatasetAutomationConstants.js.map