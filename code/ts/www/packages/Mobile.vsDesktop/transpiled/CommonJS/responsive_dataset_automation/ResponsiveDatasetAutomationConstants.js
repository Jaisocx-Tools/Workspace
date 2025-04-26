"use strict";
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
var _ResponsiveDatasetAutomationConstants_keywordMediarule, _ResponsiveDatasetAutomationConstants_mediaRuleName, _ResponsiveDatasetAutomationConstants_mediaConstantNameStart, _ResponsiveDatasetAutomationConstants_mediaRule, _ResponsiveDatasetAutomationConstants_mediaRuleScreen, _ResponsiveDatasetAutomationConstants_mediaRulePrint, _ResponsiveDatasetAutomationConstants_mediaRuleOrientation, _ResponsiveDatasetAutomationConstants_mediaRuleOrientationLandscape, _ResponsiveDatasetAutomationConstants_mediaRuleOrientationPortrait, _ResponsiveDatasetAutomationConstants_mediaRuleAnd, _ResponsiveDatasetAutomationConstants_braceRoundStart, _ResponsiveDatasetAutomationConstants_braceRoundEnd, _ResponsiveDatasetAutomationConstants_braceFigureStart, _ResponsiveDatasetAutomationConstants_braceFigureEnd, _ResponsiveDatasetAutomationConstants_importUrlStart, _ResponsiveDatasetAutomationConstants_importUrlEnd, _ResponsiveDatasetAutomationConstants_keywordWidth, _ResponsiveDatasetAutomationConstants_keywordFrom, _ResponsiveDatasetAutomationConstants_keywordTil, _ResponsiveDatasetAutomationConstants_cssVariablePrefix, _ResponsiveDatasetAutomationConstants_cssVariableNameValueDelimiter, _ResponsiveDatasetAutomationConstants_cssVariableReferenceKeyword_Var, _ResponsiveDatasetAutomationConstants_cssExpressionEnd, _ResponsiveDatasetAutomationConstants_doubleQuote, _ResponsiveDatasetAutomationConstants_commentStart, _ResponsiveDatasetAutomationConstants_commentEnd, _ResponsiveDatasetAutomationConstants_backgroundSpace, _ResponsiveDatasetAutomationConstants_N, _ResponsiveDatasetAutomationConstants_underscore, _ResponsiveDatasetAutomationConstants_unitPx, _ResponsiveDatasetAutomationConstants_minWidth, _ResponsiveDatasetAutomationConstants_maxWidth, _ResponsiveDatasetAutomationConstants_orientationKeywords, _ResponsiveDatasetAutomationConstants_bitbufsOrientationKeywords, _ResponsiveDatasetAutomationConstants_mediaLine, _ResponsiveDatasetAutomationConstants_mediaConstantNameLine, _ResponsiveDatasetAutomationConstants_mediaRuleConstantLine, _ResponsiveDatasetAutomationConstants_mediaConstantLine, _ResponsiveDatasetAutomationConstants_mediaRuleVariable_Width, _ResponsiveDatasetAutomationConstants_bitbufsMediaLine, _ResponsiveDatasetAutomationConstants_bitbufsMediaConstantNameLine, _ResponsiveDatasetAutomationConstants_bitbufsMediaRuleConstantLine, _ResponsiveDatasetAutomationConstants_bitbufsMediaConstantLine, _ResponsiveDatasetAutomationConstants_bitbufsMediaRuleVariable_Width, _ResponsiveDatasetAutomationConstants_bitsbufN, _ResponsiveDatasetAutomationConstants_bitbufKeywordFrom, _ResponsiveDatasetAutomationConstants_bitbufKeywordTil;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsiveDatasetAutomationConstants = void 0;
class ResponsiveDatasetAutomationConstants {
    constructor() {
        _ResponsiveDatasetAutomationConstants_keywordMediarule.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_mediaRuleName.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_mediaConstantNameStart.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_mediaRule.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_mediaRuleScreen.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_mediaRulePrint.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_mediaRuleOrientation.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_mediaRuleOrientationLandscape.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_mediaRuleOrientationPortrait.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_mediaRuleAnd.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_braceRoundStart.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_braceRoundEnd.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_braceFigureStart.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_braceFigureEnd.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_importUrlStart.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_importUrlEnd.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_keywordWidth.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_keywordFrom.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_keywordTil.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_cssVariablePrefix.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_cssVariableNameValueDelimiter.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_cssVariableReferenceKeyword_Var.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_cssExpressionEnd.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_doubleQuote.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_commentStart.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_commentEnd.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_backgroundSpace.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_N.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_underscore.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_unitPx.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_minWidth.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_maxWidth.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_orientationKeywords.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_bitbufsOrientationKeywords.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_mediaLine.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_mediaConstantNameLine.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_mediaRuleConstantLine.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_mediaConstantLine.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_mediaRuleVariable_Width.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_bitbufsMediaLine.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_bitbufsMediaConstantNameLine.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_bitbufsMediaRuleConstantLine.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_bitbufsMediaConstantLine.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_bitbufsMediaRuleVariable_Width.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_bitsbufN.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_bitbufKeywordFrom.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_bitbufKeywordTil.set(this, void 0);
        this.textEncoder = new TextEncoder();
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_keywordMediarule, "media_rule", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_mediaRuleName, "media_rule_name", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_mediaConstantNameStart, "s", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_mediaRule, "@media only ", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_mediaRuleScreen, "screen", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_mediaRulePrint, "print", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_mediaRuleOrientation, "orientation", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_mediaRuleOrientationLandscape, "landscape", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_mediaRuleOrientationPortrait, "portrait", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_mediaRuleAnd, " and ", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_braceRoundStart, "(", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_braceRoundEnd, ")", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_braceFigureStart, "{", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_braceFigureEnd, "}", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_importUrlStart, "@import url(\"", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_importUrlEnd, "\");", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_keywordWidth, "width", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_keywordFrom, "from", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_keywordTil, "til", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_cssVariablePrefix, "--", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_cssVariableNameValueDelimiter, ": ", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_cssVariableReferenceKeyword_Var, "var", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_cssExpressionEnd, ";", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_doubleQuote, "\"", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_commentStart, "/*", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_commentEnd, "*/", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_backgroundSpace, " ", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_N, "\n", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_underscore, "_", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_unitPx, "px", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_minWidth, "min-width", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_maxWidth, "max-width", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_orientationKeywords, [
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaRuleOrientationPortrait, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaRuleOrientationLandscape, "f")
        ], "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_mediaLine, [
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaRule, "f"),
            "1",
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaRuleAnd, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_braceRoundStart, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_minWidth, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_cssVariableNameValueDelimiter, "f"),
            "6",
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_unitPx, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_braceRoundEnd, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaRuleAnd, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_braceRoundStart, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_maxWidth, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_cssVariableNameValueDelimiter, "f"),
            "13",
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_unitPx, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_braceRoundEnd, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaRuleAnd, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_braceRoundStart, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaRuleOrientation, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_cssVariableNameValueDelimiter, "f"),
            "20",
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_braceRoundEnd, "f")
        ], "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_mediaConstantNameLine, [
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_cssVariablePrefix, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaRuleName, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_cssVariableNameValueDelimiter, "f"),
            "3",
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_cssExpressionEnd, "f")
        ], "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_mediaRuleConstantLine, [
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_backgroundSpace, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_backgroundSpace, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_backgroundSpace, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_backgroundSpace, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_cssVariablePrefix, "f"),
            "5",
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_underscore, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_underscore, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_keywordMediarule, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_cssVariableNameValueDelimiter, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_doubleQuote, "f"),
            "11",
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_doubleQuote, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_cssExpressionEnd, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_N, "f")
        ], "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_mediaConstantLine, [
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_backgroundSpace, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_backgroundSpace, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_backgroundSpace, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_backgroundSpace, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_cssVariablePrefix, "f"),
            "5",
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_underscore, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_underscore, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_keywordWidth, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_underscore, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_underscore, "f"),
            "11",
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_cssVariableNameValueDelimiter, "f"),
            "13",
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_unitPx, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_cssExpressionEnd, "f")
        ], "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_mediaRuleVariable_Width, [
            [__classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_cssVariablePrefix, "f"),
                __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_keywordWidth, "f"),
                __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_underscore, "f"),
                __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_underscore, "f")].join(""),
            "1",
            [__classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_cssVariableNameValueDelimiter, "f"),
                __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_cssVariableReferenceKeyword_Var, "f"),
                __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_braceRoundStart, "f"),
                __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_cssVariablePrefix, "f")].join(""),
            "3",
            [__classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_underscore, "f"),
                __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_underscore, "f"),
                __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_keywordWidth, "f"),
                __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_underscore, "f"),
                __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_underscore, "f")].join(""),
            "5",
            [__classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_braceRoundEnd, "f"),
                __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_cssExpressionEnd, "f")].join("")
        ], "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_bitbufsOrientationKeywords, new Array(), "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaLine, new Array(), "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaConstantNameLine, new Array(), "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaRuleConstantLine, new Array(), "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaConstantLine, new Array(), "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaRuleVariable_Width, new Array(), "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_bitsbufN, this.textEncoder.encode(__classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_N, "f")), "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_bitbufKeywordFrom, this.textEncoder.encode(__classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_keywordFrom, "f")), "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_bitbufKeywordTil, this.textEncoder.encode(__classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_keywordTil, "f")), "f");
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
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_keywordMediarule, "f");
    }
    getMediaRuleName() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaRuleName, "f");
    }
    getMediaConstantNameStart() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaConstantNameStart, "f");
    }
    getMediaRule() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaRule, "f");
    }
    getMediaRuleScreen() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaRuleScreen, "f");
    }
    getMediaRulePrint() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaRulePrint, "f");
    }
    getMediaRuleOrientation() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaRuleOrientation, "f");
    }
    getMediaRuleOrientationLandscape() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaRuleOrientationLandscape, "f");
    }
    getMediaRuleOrientationPortrait() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaRuleOrientationPortrait, "f");
    }
    getMediaRuleAnd() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaRuleAnd, "f");
    }
    getBraceRoundStart() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_braceRoundStart, "f");
    }
    getBraceRoundEnd() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_braceRoundEnd, "f");
    }
    getBraceFigureStart() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_braceFigureStart, "f");
    }
    getBraceFigureEnd() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_braceFigureEnd, "f");
    }
    getImportUrlStart() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_importUrlStart, "f");
    }
    getImportUrlEnd() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_importUrlEnd, "f");
    }
    getKeywordWidth() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_keywordWidth, "f");
    }
    getKeywordFrom() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_keywordFrom, "f");
    }
    getKeywordTil() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_keywordTil, "f");
    }
    getCssVariablePrefix() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_cssVariablePrefix, "f");
    }
    getCssVariableNameValueDelimiter() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_cssVariableNameValueDelimiter, "f");
    }
    getCssExpressionEnd() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_cssExpressionEnd, "f");
    }
    getDoubleQuote() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_doubleQuote, "f");
    }
    getCommentStart() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_commentStart, "f");
    }
    getCommentEnd() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_commentEnd, "f");
    }
    getBackgroundSpace() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_backgroundSpace, "f");
    }
    getN() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_N, "f");
    }
    getBitsbufN() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitsbufN, "f");
    }
    getUnderscore() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_underscore, "f");
    }
    getUnitPx() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_unitPx, "f");
    }
    getMinWidth() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_minWidth, "f");
    }
    getMaxWidth() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_maxWidth, "f");
    }
    getBitbufsOrientationKeywords() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitbufsOrientationKeywords, "f");
    }
    getOrientationKeywords() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_orientationKeywords, "f");
    }
    getMediaLine() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaLine, "f");
    }
    getMediaConstantNameLine() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaConstantNameLine, "f");
    }
    getMediaRuleConstantLine() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaRuleConstantLine, "f");
    }
    getMediaConstantLine() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaConstantLine, "f");
    }
    getMediaRuleVariable_Width() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaRuleVariable_Width, "f");
    }
    getBitbufsMediaLine() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaLine, "f");
    }
    getBitbufsMediaConstantNameLine() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaConstantNameLine, "f");
    }
    getBitbufsMediaRuleConstantLine() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaRuleConstantLine, "f");
    }
    getBitbufsMediaConstantLine() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaConstantLine, "f");
    }
    getBitbufsMediaRuleVariable_Width() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaRuleVariable_Width, "f");
    }
    getBitsbufKeywordFrom() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitbufKeywordFrom, "f");
    }
    getBitsbufKeywordTil() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitbufKeywordTil, "f");
    }
    getMediaLineUpdated(media, minWidth, maxWidth, orientation) {
        const mediaPos = 1;
        const minWidthPos = 6;
        const maxWidthPos = 13;
        const orientationPos = 20;
        __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaLine, "f")[mediaPos] = this.textEncoder.encode(media);
        __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaLine, "f")[minWidthPos] = this.textEncoder.encode(minWidth);
        __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaLine, "f")[maxWidthPos] = this.textEncoder.encode(maxWidth);
        __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaLine, "f")[orientationPos] = this.textEncoder.encode(orientation);
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaLine, "f");
    }
    getMediaConstantNameLineUpdated(mediaName) {
        const mediaNamePos = 3;
        __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaConstantNameLine, "f")[mediaNamePos] = this.textEncoder.encode(mediaName);
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaConstantNameLine, "f");
    }
    getMediaRuleConstantLineUpdated(mediaName, mediaLine) {
        const mediaNamePos = 5;
        const mediaLinePos = 11;
        __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaRuleConstantLine, "f")[mediaNamePos] = this.textEncoder.encode(mediaName);
        __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaRuleConstantLine, "f")[mediaLinePos] = mediaLine;
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaRuleConstantLine, "f");
    }
    getMediaConstantLineUpdated(mediaName, postfix, size) {
        const mediaNamePos = 5;
        const postfixPos = 11;
        const sizePos = 13;
        __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaConstantLine, "f")[mediaNamePos] = this.textEncoder.encode(mediaName);
        __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaConstantLine, "f")[postfixPos] = this.textEncoder.encode(postfix);
        __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaConstantLine, "f")[sizePos] = this.textEncoder.encode(size);
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaConstantLine, "f");
    }
    getMediaRuleVariable_Width_Updated(mediaName, postfix) {
        const postfixPos_1 = 1;
        const mediaNamePos = 3;
        const postfixPos_2 = 5;
        __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaRuleVariable_Width, "f")[postfixPos_1] = postfix;
        __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaRuleVariable_Width, "f")[mediaNamePos] = mediaName;
        __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaRuleVariable_Width, "f")[postfixPos_2] = postfix;
        return __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_bitbufsMediaRuleVariable_Width, "f");
    }
}
exports.ResponsiveDatasetAutomationConstants = ResponsiveDatasetAutomationConstants;
_ResponsiveDatasetAutomationConstants_keywordMediarule = new WeakMap(), _ResponsiveDatasetAutomationConstants_mediaRuleName = new WeakMap(), _ResponsiveDatasetAutomationConstants_mediaConstantNameStart = new WeakMap(), _ResponsiveDatasetAutomationConstants_mediaRule = new WeakMap(), _ResponsiveDatasetAutomationConstants_mediaRuleScreen = new WeakMap(), _ResponsiveDatasetAutomationConstants_mediaRulePrint = new WeakMap(), _ResponsiveDatasetAutomationConstants_mediaRuleOrientation = new WeakMap(), _ResponsiveDatasetAutomationConstants_mediaRuleOrientationLandscape = new WeakMap(), _ResponsiveDatasetAutomationConstants_mediaRuleOrientationPortrait = new WeakMap(), _ResponsiveDatasetAutomationConstants_mediaRuleAnd = new WeakMap(), _ResponsiveDatasetAutomationConstants_braceRoundStart = new WeakMap(), _ResponsiveDatasetAutomationConstants_braceRoundEnd = new WeakMap(), _ResponsiveDatasetAutomationConstants_braceFigureStart = new WeakMap(), _ResponsiveDatasetAutomationConstants_braceFigureEnd = new WeakMap(), _ResponsiveDatasetAutomationConstants_importUrlStart = new WeakMap(), _ResponsiveDatasetAutomationConstants_importUrlEnd = new WeakMap(), _ResponsiveDatasetAutomationConstants_keywordWidth = new WeakMap(), _ResponsiveDatasetAutomationConstants_keywordFrom = new WeakMap(), _ResponsiveDatasetAutomationConstants_keywordTil = new WeakMap(), _ResponsiveDatasetAutomationConstants_cssVariablePrefix = new WeakMap(), _ResponsiveDatasetAutomationConstants_cssVariableNameValueDelimiter = new WeakMap(), _ResponsiveDatasetAutomationConstants_cssVariableReferenceKeyword_Var = new WeakMap(), _ResponsiveDatasetAutomationConstants_cssExpressionEnd = new WeakMap(), _ResponsiveDatasetAutomationConstants_doubleQuote = new WeakMap(), _ResponsiveDatasetAutomationConstants_commentStart = new WeakMap(), _ResponsiveDatasetAutomationConstants_commentEnd = new WeakMap(), _ResponsiveDatasetAutomationConstants_backgroundSpace = new WeakMap(), _ResponsiveDatasetAutomationConstants_N = new WeakMap(), _ResponsiveDatasetAutomationConstants_underscore = new WeakMap(), _ResponsiveDatasetAutomationConstants_unitPx = new WeakMap(), _ResponsiveDatasetAutomationConstants_minWidth = new WeakMap(), _ResponsiveDatasetAutomationConstants_maxWidth = new WeakMap(), _ResponsiveDatasetAutomationConstants_orientationKeywords = new WeakMap(), _ResponsiveDatasetAutomationConstants_bitbufsOrientationKeywords = new WeakMap(), _ResponsiveDatasetAutomationConstants_mediaLine = new WeakMap(), _ResponsiveDatasetAutomationConstants_mediaConstantNameLine = new WeakMap(), _ResponsiveDatasetAutomationConstants_mediaRuleConstantLine = new WeakMap(), _ResponsiveDatasetAutomationConstants_mediaConstantLine = new WeakMap(), _ResponsiveDatasetAutomationConstants_mediaRuleVariable_Width = new WeakMap(), _ResponsiveDatasetAutomationConstants_bitbufsMediaLine = new WeakMap(), _ResponsiveDatasetAutomationConstants_bitbufsMediaConstantNameLine = new WeakMap(), _ResponsiveDatasetAutomationConstants_bitbufsMediaRuleConstantLine = new WeakMap(), _ResponsiveDatasetAutomationConstants_bitbufsMediaConstantLine = new WeakMap(), _ResponsiveDatasetAutomationConstants_bitbufsMediaRuleVariable_Width = new WeakMap(), _ResponsiveDatasetAutomationConstants_bitsbufN = new WeakMap(), _ResponsiveDatasetAutomationConstants_bitbufKeywordFrom = new WeakMap(), _ResponsiveDatasetAutomationConstants_bitbufKeywordTil = new WeakMap();
//# sourceMappingURL=ResponsiveDatasetAutomationConstants.js.map