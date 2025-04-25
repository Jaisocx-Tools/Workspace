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
    #bitbufsMediaLine;
    #bitbufsMediaConstantNameLine;
    #bitbufsMediaRuleConstantLine;
    #bitbufsMediaConstantLine;
    #bitsbufN;
    constructor() {
        this.textEncoder = new TextEncoder();
        this.#keywordMediarule = "media_rule";
        this.#mediaRuleName = "media_rule_name";
        this.#mediaConstantNameStart = "s";
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
        this.#keywordFrom = "from";
        this.#keywordTil = "til";
        this.#cssVariablePrefix = "--";
        this.#cssVariableNameValueDelimiter = ": ";
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
        this.#bitbufsOrientationKeywords = new Array();
        this.#bitbufsMediaLine = new Array();
        this.#bitbufsMediaConstantNameLine = new Array();
        this.#bitbufsMediaRuleConstantLine = new Array();
        this.#bitbufsMediaConstantLine = new Array();
        this.#bitsbufN = this.textEncoder.encode(this.#N);
    }
    textsToBitsbufs() {
        let textsBlocksNamesArray = [
            "orientationKeywords",
            "mediaLine",
            "mediaConstantNameLine",
            "mediaRuleConstantLine",
            "mediaConstantLine"
        ];
        let textBlocks = new Array();
        let bitsbufsTextBlocks = new Array();
        let textBlockName = "";
        let textBlockNameFirstLetterUC = "";
        let propertyName = "";
        let getMethodName = "";
        let getBitsbufsMethodName = "";
        let bitsbufsPropertyName = "";
        for (textBlockName of textsBlocksNamesArray) {
            propertyName = `#${textBlockName}`;
            textBlockNameFirstLetterUC = (textBlockName.charAt(0).toUpperCase() + textBlockName.slice(1));
            getMethodName = `get${textBlockNameFirstLetterUC}`;
            getBitsbufsMethodName = `getBitbufs${textBlockNameFirstLetterUC}`;
            // @ts-ignore
            textBlocks = this[getMethodName].call(this);
            // @ts-ignore
            bitsbufsTextBlocks = this[getBitsbufsMethodName].call(this);
            let textLine = "";
            let bitsbufsTextLine = this.textEncoder.encode(" ");
            let i = 0;
            let textBlocksLen = textBlocks.length;
            for (i = 0; i < textBlocksLen; i++) {
                // @ts-ignore
                textLine = textBlocks[i];
                bitsbufsTextLine = this.textEncoder.encode(textLine); //this.textEncoder.encode( textLine );
                // @ts-ignore
                bitsbufsTextBlocks[i] = bitsbufsTextLine;
            }
        }
        return 1;
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
}
//# sourceMappingURL=ResponsiveDatasetAutomationConstants.js.map