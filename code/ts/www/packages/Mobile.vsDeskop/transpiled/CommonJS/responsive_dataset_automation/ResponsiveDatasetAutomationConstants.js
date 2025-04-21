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
var _ResponsiveDatasetAutomationConstants_keywordMediarule, _ResponsiveDatasetAutomationConstants_mediaRuleName, _ResponsiveDatasetAutomationConstants_mediaConstantNameStart, _ResponsiveDatasetAutomationConstants_mediaLine, _ResponsiveDatasetAutomationConstants_mediaRule, _ResponsiveDatasetAutomationConstants_mediaRuleScreen, _ResponsiveDatasetAutomationConstants_mediaRulePrint, _ResponsiveDatasetAutomationConstants_mediaRuleOrientation, _ResponsiveDatasetAutomationConstants_mediaRuleOrientationLandscape, _ResponsiveDatasetAutomationConstants_mediaRuleOrientationPortrait, _ResponsiveDatasetAutomationConstants_mediaRuleAnd, _ResponsiveDatasetAutomationConstants_braceRoundStart, _ResponsiveDatasetAutomationConstants_braceRoundEnd, _ResponsiveDatasetAutomationConstants_braceFigureStart, _ResponsiveDatasetAutomationConstants_braceFigureEnd, _ResponsiveDatasetAutomationConstants_importUrlStart, _ResponsiveDatasetAutomationConstants_importUrlEnd, _ResponsiveDatasetAutomationConstants_keywordWidth, _ResponsiveDatasetAutomationConstants_keywordFrom, _ResponsiveDatasetAutomationConstants_keywordTil, _ResponsiveDatasetAutomationConstants_cssVariablePrefix, _ResponsiveDatasetAutomationConstants_cssVariableNameValueDelimiter, _ResponsiveDatasetAutomationConstants_cssExpressionEnd, _ResponsiveDatasetAutomationConstants_doubleQuote, _ResponsiveDatasetAutomationConstants_commentStart, _ResponsiveDatasetAutomationConstants_commentEnd, _ResponsiveDatasetAutomationConstants_backgroundSpace, _ResponsiveDatasetAutomationConstants_N, _ResponsiveDatasetAutomationConstants_underscore, _ResponsiveDatasetAutomationConstants_unitPx, _ResponsiveDatasetAutomationConstants_minWidth, _ResponsiveDatasetAutomationConstants_maxWidth;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsiveDatasetAutomationConstants = void 0;
class ResponsiveDatasetAutomationConstants {
    constructor() {
        _ResponsiveDatasetAutomationConstants_keywordMediarule.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_mediaRuleName.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_mediaConstantNameStart.set(this, void 0);
        _ResponsiveDatasetAutomationConstants_mediaLine.set(this, void 0);
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
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_keywordMediarule, "media_rule", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_mediaRuleName, "media_rule_name", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_mediaConstantNameStart, "s", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_mediaLine, [], "f");
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
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_cssExpressionEnd, ": ", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_doubleQuote, "\"", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_commentStart, "/*", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_commentEnd, "*/", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_backgroundSpace, " ", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_N, "\n", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_underscore, "_", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_unitPx, "px", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_minWidth, "min-width", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetAutomationConstants_maxWidth, "max-width", "f");
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
    getMediaLine(media, minWidth, maxWidth, orientation) {
        let mediaLine = "";
        const mediaPos = 1;
        const minWidthPos = 6;
        const maxWidthPos = 13;
        const orientationPos = 20;
        if (__classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaLine, "f").length !== 0) {
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaLine, "f")[mediaPos] = media;
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaLine, "f")[minWidthPos] = minWidth;
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaLine, "f")[maxWidthPos] = maxWidth;
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaLine, "f")[orientationPos] = orientation;
            mediaLine = __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaLine, "f").join("");
            return mediaLine;
        }
        let words = [
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaRule, "f"),
            media,
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaRuleAnd, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_braceRoundStart, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_minWidth, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_cssVariableNameValueDelimiter, "f"),
            minWidth,
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_unitPx, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_braceRoundEnd, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaRuleAnd, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_braceRoundStart, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_maxWidth, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_cssVariableNameValueDelimiter, "f"),
            maxWidth,
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_unitPx, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_braceRoundEnd, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaRuleAnd, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_braceRoundStart, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_mediaRuleOrientation, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_cssVariableNameValueDelimiter, "f"),
            orientation,
            __classPrivateFieldGet(this, _ResponsiveDatasetAutomationConstants_braceRoundEnd, "f")
        ];
        mediaLine = words.join("");
        return mediaLine;
    }
}
exports.ResponsiveDatasetAutomationConstants = ResponsiveDatasetAutomationConstants;
_ResponsiveDatasetAutomationConstants_keywordMediarule = new WeakMap(), _ResponsiveDatasetAutomationConstants_mediaRuleName = new WeakMap(), _ResponsiveDatasetAutomationConstants_mediaConstantNameStart = new WeakMap(), _ResponsiveDatasetAutomationConstants_mediaLine = new WeakMap(), _ResponsiveDatasetAutomationConstants_mediaRule = new WeakMap(), _ResponsiveDatasetAutomationConstants_mediaRuleScreen = new WeakMap(), _ResponsiveDatasetAutomationConstants_mediaRulePrint = new WeakMap(), _ResponsiveDatasetAutomationConstants_mediaRuleOrientation = new WeakMap(), _ResponsiveDatasetAutomationConstants_mediaRuleOrientationLandscape = new WeakMap(), _ResponsiveDatasetAutomationConstants_mediaRuleOrientationPortrait = new WeakMap(), _ResponsiveDatasetAutomationConstants_mediaRuleAnd = new WeakMap(), _ResponsiveDatasetAutomationConstants_braceRoundStart = new WeakMap(), _ResponsiveDatasetAutomationConstants_braceRoundEnd = new WeakMap(), _ResponsiveDatasetAutomationConstants_braceFigureStart = new WeakMap(), _ResponsiveDatasetAutomationConstants_braceFigureEnd = new WeakMap(), _ResponsiveDatasetAutomationConstants_importUrlStart = new WeakMap(), _ResponsiveDatasetAutomationConstants_importUrlEnd = new WeakMap(), _ResponsiveDatasetAutomationConstants_keywordWidth = new WeakMap(), _ResponsiveDatasetAutomationConstants_keywordFrom = new WeakMap(), _ResponsiveDatasetAutomationConstants_keywordTil = new WeakMap(), _ResponsiveDatasetAutomationConstants_cssVariablePrefix = new WeakMap(), _ResponsiveDatasetAutomationConstants_cssVariableNameValueDelimiter = new WeakMap(), _ResponsiveDatasetAutomationConstants_cssExpressionEnd = new WeakMap(), _ResponsiveDatasetAutomationConstants_doubleQuote = new WeakMap(), _ResponsiveDatasetAutomationConstants_commentStart = new WeakMap(), _ResponsiveDatasetAutomationConstants_commentEnd = new WeakMap(), _ResponsiveDatasetAutomationConstants_backgroundSpace = new WeakMap(), _ResponsiveDatasetAutomationConstants_N = new WeakMap(), _ResponsiveDatasetAutomationConstants_underscore = new WeakMap(), _ResponsiveDatasetAutomationConstants_unitPx = new WeakMap(), _ResponsiveDatasetAutomationConstants_minWidth = new WeakMap(), _ResponsiveDatasetAutomationConstants_maxWidth = new WeakMap();
//# sourceMappingURL=ResponsiveDatasetAutomationConstants.js.map