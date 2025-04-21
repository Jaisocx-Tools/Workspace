export class ResponsiveDatasetAutomationConstants {
    #keywordMediarule;
    #mediaRuleName;
    #mediaConstantNameStart;
    #mediaLine;
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
    constructor() {
        this.#keywordMediarule = "media_rule";
        this.#mediaRuleName = "media_rule_name";
        this.#mediaConstantNameStart = "s";
        this.#mediaLine = [];
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
        this.#cssExpressionEnd = ": ";
        this.#doubleQuote = "\"";
        this.#commentStart = "/*";
        this.#commentEnd = "*/";
        this.#backgroundSpace = " ";
        this.#N = "\n";
        this.#underscore = "_";
        this.#unitPx = "px";
        this.#minWidth = "min-width";
        this.#maxWidth = "max-width";
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
    getMediaLine(media, minWidth, maxWidth, orientation) {
        let mediaLine = "";
        const mediaPos = 1;
        const minWidthPos = 6;
        const maxWidthPos = 13;
        const orientationPos = 20;
        if (this.#mediaLine.length !== 0) {
            this.#mediaLine[mediaPos] = media;
            this.#mediaLine[minWidthPos] = minWidth;
            this.#mediaLine[maxWidthPos] = maxWidth;
            this.#mediaLine[orientationPos] = orientation;
            mediaLine = this.#mediaLine.join("");
            return mediaLine;
        }
        let words = [
            this.#mediaRule,
            media,
            this.#mediaRuleAnd,
            this.#braceRoundStart,
            this.#minWidth,
            this.#cssVariableNameValueDelimiter,
            minWidth,
            this.#unitPx,
            this.#braceRoundEnd,
            this.#mediaRuleAnd,
            this.#braceRoundStart,
            this.#maxWidth,
            this.#cssVariableNameValueDelimiter,
            maxWidth,
            this.#unitPx,
            this.#braceRoundEnd,
            this.#mediaRuleAnd,
            this.#braceRoundStart,
            this.#mediaRuleOrientation,
            this.#cssVariableNameValueDelimiter,
            orientation,
            this.#braceRoundEnd
        ];
        mediaLine = words.join("");
        return mediaLine;
    }
}
//# sourceMappingURL=ResponsiveDatasetAutomationConstants.js.map