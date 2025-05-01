export class ResponsiveDatasetAutomationConstants {
    textEncoder;
    #keywordMediarule;
    #mediaRuleName;
    #mediaConstantNameStart;
    #mediaRule;
    #mediaRuleScreen;
    #mediaRulePrint;
    #mediaRuleOrientation;
    #mediaRuleOrientationLandscape;
    #mediaRuleOrientationPortrait;
    #mediaRuleAnd;
    #braceRoundStart;
    #braceRoundEnd;
    #braceFigureStart;
    #braceFigureEnd;
    #importUrlStart;
    #importUrlEnd;
    #keywordWidth;
    #keywordFrom;
    #keywordTil;
    #cssVariablePrefix;
    #cssVariableNameValueDelimiter;
    #cssVariableReferenceKeyword_Var;
    #cssExpressionEnd;
    #doubleQuote;
    #commentStart;
    #commentEnd;
    #backgroundSpace;
    #N;
    #underscore;
    #unitPx;
    #minWidth;
    #maxWidth;
    #orientationKeywords;
    #bitbufsOrientationKeywords;
    #mediaLine;
    #mediaConstantNameLine;
    #mediaRuleConstantLine;
    #mediaConstantLine;
    #mediaRuleVariable_Width;
    #bitbufsMediaLine;
    #bitbufsMediaConstantNameLine;
    #bitbufsMediaRuleConstantLine;
    #bitbufsMediaConstantLine;
    #bitbufsMediaRuleVariable_Width;
    #bitsbufN;
    #bitbufKeywordFrom;
    #bitbufKeywordTil;
    constructor() {
        this.textEncoder = new TextEncoder();
        this.#keywordMediarule = "media_rule";
        this.#mediaRuleName = "media_rule_name";
        this.#mediaConstantNameStart = "style";
        this.#mediaRule = "@media only ";
        this.#mediaRuleScreen = "screen";
        this.#mediaRulePrint = "print";
        this.#mediaRuleOrientation = "orientation";
        this.#mediaRuleOrientationLandscape = "landscape";
        this.#mediaRuleOrientationPortrait = "portrait";
        this.#mediaRuleAnd = " and ";
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
            this.#mediaRuleOrientationPortrait,
            this.#mediaRuleOrientationLandscape
        ];
        this.#mediaLine = [
            this.#mediaRule,
            "1",
            this.#mediaRuleAnd,
            this.#braceRoundStart,
            this.#minWidth,
            this.#cssVariableNameValueDelimiter,
            "6",
            this.#unitPx,
            this.#braceRoundEnd,
            this.#mediaRuleAnd,
            this.#braceRoundStart,
            this.#maxWidth,
            this.#cssVariableNameValueDelimiter,
            "13",
            this.#unitPx,
            this.#braceRoundEnd,
            this.#mediaRuleAnd,
            this.#braceRoundStart,
            this.#mediaRuleOrientation,
            this.#cssVariableNameValueDelimiter,
            "20",
            this.#braceRoundEnd
        ];
        this.#mediaConstantNameLine = [
            this.#cssVariablePrefix,
            this.#mediaRuleName,
            this.#cssVariableNameValueDelimiter,
            "3",
            this.#cssExpressionEnd
        ];
        this.#mediaRuleConstantLine = [
            this.#backgroundSpace,
            this.#backgroundSpace,
            this.#backgroundSpace,
            this.#backgroundSpace,
            this.#cssVariablePrefix,
            "5",
            this.#underscore,
            this.#underscore,
            this.#keywordMediarule,
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
            this.#keywordWidth,
            this.#underscore,
            this.#underscore,
            "11",
            this.#cssVariableNameValueDelimiter,
            "13",
            this.#unitPx,
            this.#cssExpressionEnd
        ];
        this.#mediaRuleVariable_Width = [
            [this.#cssVariablePrefix,
                this.#keywordMediarule,
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
        this.#bitbufsMediaLine = new Array();
        this.#bitbufsMediaConstantNameLine = new Array();
        this.#bitbufsMediaRuleConstantLine = new Array();
        this.#bitbufsMediaConstantLine = new Array();
        this.#bitbufsMediaRuleVariable_Width = new Array();
        this.#bitsbufN = this.textEncoder.encode(this.#N);
        this.#bitbufKeywordFrom = this.textEncoder.encode(this.#keywordFrom);
        this.#bitbufKeywordTil = this.textEncoder.encode(this.#keywordTil);
    }
    textsToBitsbufs() {
        let textsBlocksNamesArray = [
            "orientationKeywords",
            "mediaLine",
            "mediaConstantNameLine",
            "mediaRuleConstantLine",
            "mediaConstantLine",
            "mediaRuleVariable_Width"
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
    getKeywordMediarule() {
        return this.#keywordMediarule;
    }
    getMediaRuleName() {
        return this.#mediaRuleName;
    }
    getMediaConstantNameStart() {
        return this.#mediaConstantNameStart;
    }
    getMediaRule() {
        return this.#mediaRule;
    }
    getMediaRuleScreen() {
        return this.#mediaRuleScreen;
    }
    getMediaRulePrint() {
        return this.#mediaRulePrint;
    }
    getMediaRuleOrientation() {
        return this.#mediaRuleOrientation;
    }
    getMediaRuleOrientationLandscape() {
        return this.#mediaRuleOrientationLandscape;
    }
    getMediaRuleOrientationPortrait() {
        return this.#mediaRuleOrientationPortrait;
    }
    getMediaRuleAnd() {
        return this.#mediaRuleAnd;
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
    getMediaRuleConstantLine() {
        return this.#mediaRuleConstantLine;
    }
    getMediaConstantLine() {
        return this.#mediaConstantLine;
    }
    getMediaRuleVariable_Width() {
        return this.#mediaRuleVariable_Width;
    }
    getBitbufsMediaLine() {
        return this.#bitbufsMediaLine;
    }
    getBitbufsMediaConstantNameLine() {
        return this.#bitbufsMediaConstantNameLine;
    }
    getBitbufsMediaRuleConstantLine() {
        return this.#bitbufsMediaRuleConstantLine;
    }
    getBitbufsMediaConstantLine() {
        return this.#bitbufsMediaConstantLine;
    }
    getBitbufsMediaRuleVariable_Width() {
        return this.#bitbufsMediaRuleVariable_Width;
    }
    getBitsbufKeywordFrom() {
        return this.#bitbufKeywordFrom;
    }
    getBitsbufKeywordTil() {
        return this.#bitbufKeywordTil;
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
    getMediaRuleConstantLineUpdated(mediaName, mediaLine) {
        const mediaNamePos = 5;
        const mediaLinePos = 11;
        this.#bitbufsMediaRuleConstantLine[mediaNamePos] = this.textEncoder.encode(mediaName);
        this.#bitbufsMediaRuleConstantLine[mediaLinePos] = mediaLine;
        return this.#bitbufsMediaRuleConstantLine;
    }
    getMediaConstantLineUpdated(mediaName, postfix, size) {
        const mediaNamePos = 5;
        const postfixPos = 11;
        const sizePos = 13;
        this.#bitbufsMediaConstantLine[mediaNamePos] = this.textEncoder.encode(mediaName);
        this.#bitbufsMediaConstantLine[postfixPos] = this.textEncoder.encode(postfix);
        this.#bitbufsMediaConstantLine[sizePos] = this.textEncoder.encode(size);
        return this.#bitbufsMediaConstantLine;
    }
    getMediaRuleVariable_Width_Updated(mediaName, postfix) {
        const postfixPos_1 = 1;
        const mediaNamePos = 3;
        const postfixPos_2 = 5;
        this.#bitbufsMediaRuleVariable_Width[postfixPos_1] = postfix;
        this.#bitbufsMediaRuleVariable_Width[mediaNamePos] = mediaName;
        this.#bitbufsMediaRuleVariable_Width[postfixPos_2] = postfix;
        return this.#bitbufsMediaRuleVariable_Width;
    }
}
//# sourceMappingURL=ResponsiveDatasetAutomationConstants.js.map