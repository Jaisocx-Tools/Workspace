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
var _Keywords_CssConstants_CSS_KEYWORD__IMPORT, _Keywords_CssConstants_CSS_KEYWORD__SRC, _Keywords_CssConstants_CSS_KEYWORD__VAR, _Keywords_CssConstants_CSS_SIZE_UNIT__PX, _Keywords_CssConstants_CSS_SIZE_UNIT__REM, _Keywords_CssConstants_CSS_SIZE_UNIT__PT, _Keywords_CssConstants_CSS_SIZE_UNIT__PERCENTS, _Keywords_CssConstants_CSS_SIZE_UNIT__VH, _Keywords_CssConstants_CSS_SIZE_UNIT__VW, _Keywords_CssConstants_CSS_SIZE__HUNDRED_PERCENTS, _Keywords_CssConstants_CSS_SIZE__HUNDRED_VH, _Keywords_CssConstants_CSS_SIZE__HUNDRED_VW, _Keywords_CssConstants_CSS__NAME_VALUE_JOINER, _Keywords_CssConstants_CSS__LINE_FINISH, _Keywords_CssConstants_CSS__STYLE_VALUE__OPEN, _Keywords_CssConstants_CSS__STYLE_VALUE__CLOSE, _Keywords_CssConstants_CSS__SELECTOR__ID, _Keywords_CssConstants_CSS__SELECTOR__CLASS, _Keywords_CssConstants_CSS__SELECTOR__ATTRIBUTE_OPEN, _Keywords_CssConstants_CSS__SELECTOR__ATTRIBUTE_CLOSE;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Keywords_CssConstants = void 0;
const SymbolConstants_js_1 = require("../../symbols/SymbolConstants.js");
class Keywords_CssConstants extends SymbolConstants_js_1.SymbolConstants {
    //  #CSS__: string;
    constructor() {
        super();
        _Keywords_CssConstants_CSS_KEYWORD__IMPORT.set(this, void 0);
        _Keywords_CssConstants_CSS_KEYWORD__SRC.set(this, void 0);
        _Keywords_CssConstants_CSS_KEYWORD__VAR.set(this, void 0);
        _Keywords_CssConstants_CSS_SIZE_UNIT__PX.set(this, void 0);
        _Keywords_CssConstants_CSS_SIZE_UNIT__REM.set(this, void 0);
        _Keywords_CssConstants_CSS_SIZE_UNIT__PT.set(this, void 0);
        _Keywords_CssConstants_CSS_SIZE_UNIT__PERCENTS.set(this, void 0);
        _Keywords_CssConstants_CSS_SIZE_UNIT__VH.set(this, void 0);
        _Keywords_CssConstants_CSS_SIZE_UNIT__VW.set(this, void 0);
        _Keywords_CssConstants_CSS_SIZE__HUNDRED_PERCENTS.set(this, void 0);
        _Keywords_CssConstants_CSS_SIZE__HUNDRED_VH.set(this, void 0);
        _Keywords_CssConstants_CSS_SIZE__HUNDRED_VW.set(this, void 0);
        _Keywords_CssConstants_CSS__NAME_VALUE_JOINER.set(this, void 0);
        _Keywords_CssConstants_CSS__LINE_FINISH.set(this, void 0);
        _Keywords_CssConstants_CSS__STYLE_VALUE__OPEN.set(this, void 0);
        _Keywords_CssConstants_CSS__STYLE_VALUE__CLOSE.set(this, void 0);
        _Keywords_CssConstants_CSS__SELECTOR__ID.set(this, void 0);
        _Keywords_CssConstants_CSS__SELECTOR__CLASS.set(this, void 0);
        _Keywords_CssConstants_CSS__SELECTOR__ATTRIBUTE_OPEN.set(this, void 0);
        _Keywords_CssConstants_CSS__SELECTOR__ATTRIBUTE_CLOSE.set(this, void 0);
        __classPrivateFieldSet(this, _Keywords_CssConstants_CSS_KEYWORD__IMPORT, "@import", "f");
        __classPrivateFieldSet(this, _Keywords_CssConstants_CSS_KEYWORD__SRC, "src", "f");
        __classPrivateFieldSet(this, _Keywords_CssConstants_CSS_KEYWORD__VAR, "var", "f");
        __classPrivateFieldSet(this, _Keywords_CssConstants_CSS_SIZE_UNIT__PX, "px", "f");
        __classPrivateFieldSet(this, _Keywords_CssConstants_CSS_SIZE_UNIT__REM, "rem", "f");
        __classPrivateFieldSet(this, _Keywords_CssConstants_CSS_SIZE_UNIT__PT, "pt", "f");
        __classPrivateFieldSet(this, _Keywords_CssConstants_CSS_SIZE_UNIT__PERCENTS, this.getSymbol_PERCENTS(), "f");
        __classPrivateFieldSet(this, _Keywords_CssConstants_CSS_SIZE_UNIT__VH, "vh", "f");
        __classPrivateFieldSet(this, _Keywords_CssConstants_CSS_SIZE_UNIT__VW, "vw", "f");
        __classPrivateFieldSet(this, _Keywords_CssConstants_CSS_SIZE__HUNDRED_PERCENTS, "100%", "f");
        __classPrivateFieldSet(this, _Keywords_CssConstants_CSS_SIZE__HUNDRED_VH, "100vh", "f");
        __classPrivateFieldSet(this, _Keywords_CssConstants_CSS_SIZE__HUNDRED_VW, "100vw", "f");
        __classPrivateFieldSet(this, _Keywords_CssConstants_CSS__NAME_VALUE_JOINER, this.getColon(), "f");
        __classPrivateFieldSet(this, _Keywords_CssConstants_CSS__LINE_FINISH, this.getSemicolon(), "f");
        __classPrivateFieldSet(this, _Keywords_CssConstants_CSS__STYLE_VALUE__OPEN, this.getBraceFigureOpen(), "f");
        __classPrivateFieldSet(this, _Keywords_CssConstants_CSS__STYLE_VALUE__CLOSE, this.getBraceFigureClose(), "f");
        __classPrivateFieldSet(this, _Keywords_CssConstants_CSS__SELECTOR__ID, this.getSymbol_Hashtag(), "f");
        __classPrivateFieldSet(this, _Keywords_CssConstants_CSS__SELECTOR__CLASS, this.getPoint(), "f");
        __classPrivateFieldSet(this, _Keywords_CssConstants_CSS__SELECTOR__ATTRIBUTE_OPEN, this.getBraceSquareOpen(), "f");
        __classPrivateFieldSet(this, _Keywords_CssConstants_CSS__SELECTOR__ATTRIBUTE_CLOSE, this.getBraceSquareClose(), "f");
    }
    getCss_Keyword_Import() {
        return __classPrivateFieldGet(this, _Keywords_CssConstants_CSS_KEYWORD__IMPORT, "f");
    }
    getCss_Keyword_Src() {
        return __classPrivateFieldGet(this, _Keywords_CssConstants_CSS_KEYWORD__SRC, "f");
    }
    getCss_Keyword_Var() {
        return __classPrivateFieldGet(this, _Keywords_CssConstants_CSS_KEYWORD__VAR, "f");
    }
    getCss_SizeUnit_Px() {
        return __classPrivateFieldGet(this, _Keywords_CssConstants_CSS_SIZE_UNIT__PX, "f");
    }
    getCss_SizeUnit_Rem() {
        return __classPrivateFieldGet(this, _Keywords_CssConstants_CSS_SIZE_UNIT__REM, "f");
    }
    getCss_SizeUnit_Pt() {
        return __classPrivateFieldGet(this, _Keywords_CssConstants_CSS_SIZE_UNIT__PT, "f");
    }
    getCss_SizeUnit_Percents() {
        return __classPrivateFieldGet(this, _Keywords_CssConstants_CSS_SIZE_UNIT__PERCENTS, "f");
    }
    getCss_SizeUnit_Vh() {
        return __classPrivateFieldGet(this, _Keywords_CssConstants_CSS_SIZE_UNIT__VH, "f");
    }
    getCss_SizeUnit_Vw() {
        return __classPrivateFieldGet(this, _Keywords_CssConstants_CSS_SIZE_UNIT__VW, "f");
    }
    getCss_Size_HundredPercents() {
        return __classPrivateFieldGet(this, _Keywords_CssConstants_CSS_SIZE__HUNDRED_PERCENTS, "f");
    }
    getCss_Size_HundredVh() {
        return __classPrivateFieldGet(this, _Keywords_CssConstants_CSS_SIZE__HUNDRED_VH, "f");
    }
    getCss_Size_HundredVw() {
        return __classPrivateFieldGet(this, _Keywords_CssConstants_CSS_SIZE__HUNDRED_VW, "f");
    }
    getCss_NameValueJoiner() {
        return __classPrivateFieldGet(this, _Keywords_CssConstants_CSS__NAME_VALUE_JOINER, "f");
    }
    getCss_LineFinish() {
        return __classPrivateFieldGet(this, _Keywords_CssConstants_CSS__LINE_FINISH, "f");
    }
    getCss_StyleValue_Open() {
        return __classPrivateFieldGet(this, _Keywords_CssConstants_CSS__STYLE_VALUE__OPEN, "f");
    }
    getCss_StyleValue_Close() {
        return __classPrivateFieldGet(this, _Keywords_CssConstants_CSS__STYLE_VALUE__CLOSE, "f");
    }
    getCss_Selector_Id() {
        return __classPrivateFieldGet(this, _Keywords_CssConstants_CSS__SELECTOR__ID, "f");
    }
    getCss_Selector_Class() {
        return __classPrivateFieldGet(this, _Keywords_CssConstants_CSS__SELECTOR__CLASS, "f");
    }
    getCss_Selector_Attribute_Open() {
        return __classPrivateFieldGet(this, _Keywords_CssConstants_CSS__SELECTOR__ATTRIBUTE_OPEN, "f");
    }
    getCss_Selector_Attribute_Close() {
        return __classPrivateFieldGet(this, _Keywords_CssConstants_CSS__SELECTOR__ATTRIBUTE_CLOSE, "f");
    }
}
exports.Keywords_CssConstants = Keywords_CssConstants;
_Keywords_CssConstants_CSS_KEYWORD__IMPORT = new WeakMap(), _Keywords_CssConstants_CSS_KEYWORD__SRC = new WeakMap(), _Keywords_CssConstants_CSS_KEYWORD__VAR = new WeakMap(), _Keywords_CssConstants_CSS_SIZE_UNIT__PX = new WeakMap(), _Keywords_CssConstants_CSS_SIZE_UNIT__REM = new WeakMap(), _Keywords_CssConstants_CSS_SIZE_UNIT__PT = new WeakMap(), _Keywords_CssConstants_CSS_SIZE_UNIT__PERCENTS = new WeakMap(), _Keywords_CssConstants_CSS_SIZE_UNIT__VH = new WeakMap(), _Keywords_CssConstants_CSS_SIZE_UNIT__VW = new WeakMap(), _Keywords_CssConstants_CSS_SIZE__HUNDRED_PERCENTS = new WeakMap(), _Keywords_CssConstants_CSS_SIZE__HUNDRED_VH = new WeakMap(), _Keywords_CssConstants_CSS_SIZE__HUNDRED_VW = new WeakMap(), _Keywords_CssConstants_CSS__NAME_VALUE_JOINER = new WeakMap(), _Keywords_CssConstants_CSS__LINE_FINISH = new WeakMap(), _Keywords_CssConstants_CSS__STYLE_VALUE__OPEN = new WeakMap(), _Keywords_CssConstants_CSS__STYLE_VALUE__CLOSE = new WeakMap(), _Keywords_CssConstants_CSS__SELECTOR__ID = new WeakMap(), _Keywords_CssConstants_CSS__SELECTOR__CLASS = new WeakMap(), _Keywords_CssConstants_CSS__SELECTOR__ATTRIBUTE_OPEN = new WeakMap(), _Keywords_CssConstants_CSS__SELECTOR__ATTRIBUTE_CLOSE = new WeakMap();
//# sourceMappingURL=Keywords_CssConstants.js.map