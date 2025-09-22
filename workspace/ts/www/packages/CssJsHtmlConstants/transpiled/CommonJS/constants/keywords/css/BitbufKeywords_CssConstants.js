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
var _BitbufKeywords_CssConstants_BITBUF__CSS__KEYWORD__IMPORT, _BitbufKeywords_CssConstants_BITBUF__CSS__KEYWORD__SRC, _BitbufKeywords_CssConstants_BITBUF__CSS__KEYWORD__VAR, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__PX, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__REM, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__PT, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__PERCENTS, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__VH, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__VW, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE__HUNDRED_PERCENTS, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE__HUNDRED_VH, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE__HUNDRED_VW, _BitbufKeywords_CssConstants_BITBUF__CSS__NAME_VALUE_JOINER, _BitbufKeywords_CssConstants_BITBUF__CSS__LINE_FINISH, _BitbufKeywords_CssConstants_BITBUF__CSS__STYLE_VALUE__OPEN, _BitbufKeywords_CssConstants_BITBUF__CSS__STYLE_VALUE__CLOSE, _BitbufKeywords_CssConstants_BITBUF__CSS__SELECTOR__ID, _BitbufKeywords_CssConstants_BITBUF__CSS__SELECTOR__CLASS, _BitbufKeywords_CssConstants_BITBUF__CSS__SELECTOR__ATTRIBUTE_OPEN, _BitbufKeywords_CssConstants_BITBUF__CSS__SELECTOR__ATTRIBUTE_CLOSE;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitbufKeywords_CssConstants = void 0;
const util_1 = require("util");
const Keywords_CssConstants_js_1 = require("./Keywords_CssConstants.js");
class BitbufKeywords_CssConstants extends Keywords_CssConstants_js_1.Keywords_CssConstants {
    constructor() {
        super();
        _BitbufKeywords_CssConstants_BITBUF__CSS__KEYWORD__IMPORT.set(this, void 0);
        _BitbufKeywords_CssConstants_BITBUF__CSS__KEYWORD__SRC.set(this, void 0);
        _BitbufKeywords_CssConstants_BITBUF__CSS__KEYWORD__VAR.set(this, void 0);
        _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__PX.set(this, void 0);
        _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__REM.set(this, void 0);
        _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__PT.set(this, void 0);
        _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__PERCENTS.set(this, void 0);
        _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__VH.set(this, void 0);
        _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__VW.set(this, void 0);
        _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE__HUNDRED_PERCENTS.set(this, void 0);
        _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE__HUNDRED_VH.set(this, void 0);
        _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE__HUNDRED_VW.set(this, void 0);
        _BitbufKeywords_CssConstants_BITBUF__CSS__NAME_VALUE_JOINER.set(this, void 0);
        _BitbufKeywords_CssConstants_BITBUF__CSS__LINE_FINISH.set(this, void 0);
        _BitbufKeywords_CssConstants_BITBUF__CSS__STYLE_VALUE__OPEN.set(this, void 0);
        _BitbufKeywords_CssConstants_BITBUF__CSS__STYLE_VALUE__CLOSE.set(this, void 0);
        _BitbufKeywords_CssConstants_BITBUF__CSS__SELECTOR__ID.set(this, void 0);
        _BitbufKeywords_CssConstants_BITBUF__CSS__SELECTOR__CLASS.set(this, void 0);
        _BitbufKeywords_CssConstants_BITBUF__CSS__SELECTOR__ATTRIBUTE_OPEN.set(this, void 0);
        _BitbufKeywords_CssConstants_BITBUF__CSS__SELECTOR__ATTRIBUTE_CLOSE.set(this, void 0);
        this._textEncoder = new util_1.TextEncoder();
        __classPrivateFieldSet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__KEYWORD__IMPORT, this._textEncoder.encode(this.getCss_Keyword_Import()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__KEYWORD__SRC, this._textEncoder.encode(this.getCss_Keyword_Src()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__KEYWORD__VAR, this._textEncoder.encode(this.getCss_Keyword_Var()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__PX, this._textEncoder.encode(this.getCss_SizeUnit_Px()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__REM, this._textEncoder.encode(this.getCss_SizeUnit_Rem()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__PT, this._textEncoder.encode(this.getCss_SizeUnit_Pt()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__PERCENTS, this._textEncoder.encode(this.getCss_SizeUnit_Percents()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__VH, this._textEncoder.encode(this.getCss_SizeUnit_Vh()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__VW, this._textEncoder.encode(this.getCss_SizeUnit_Vw()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE__HUNDRED_PERCENTS, this._textEncoder.encode(this.getCss_Size_HundredPercents()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE__HUNDRED_VH, this._textEncoder.encode(this.getCss_Size_HundredVh()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE__HUNDRED_VW, this._textEncoder.encode(this.getCss_Size_HundredVw()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__NAME_VALUE_JOINER, this._textEncoder.encode(this.getCss_NameValueJoiner()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__LINE_FINISH, this._textEncoder.encode(this.getCss_LineFinish()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__STYLE_VALUE__OPEN, this._textEncoder.encode(this.getCss_StyleValue_Open()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__STYLE_VALUE__CLOSE, this._textEncoder.encode(this.getCss_StyleValue_Close()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__SELECTOR__ID, this._textEncoder.encode(this.getCss_Selector_Id()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__SELECTOR__CLASS, this._textEncoder.encode(this.getCss_Selector_Class()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__SELECTOR__ATTRIBUTE_OPEN, this._textEncoder.encode(this.getCss_Selector_Attribute_Open()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__SELECTOR__ATTRIBUTE_CLOSE, this._textEncoder.encode(this.getCss_Selector_Attribute_Close()), "f");
    }
    getBitbuf_Css_Keyword_Import() {
        return __classPrivateFieldGet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__KEYWORD__IMPORT, "f");
    }
    getBitbuf_Css_Keyword_Src() {
        return __classPrivateFieldGet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__KEYWORD__SRC, "f");
    }
    getBitbuf_Css_Keyword_Var() {
        return __classPrivateFieldGet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__KEYWORD__VAR, "f");
    }
    getBitbuf_Css_SizeUnit_Px() {
        return __classPrivateFieldGet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__PX, "f");
    }
    getBitbuf_Css_SizeUnit_Rem() {
        return __classPrivateFieldGet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__REM, "f");
    }
    getBitbuf_Css_SizeUnit_Pt() {
        return __classPrivateFieldGet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__PT, "f");
    }
    getBitbuf_Css_SizeUnit_Percents() {
        return __classPrivateFieldGet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__PERCENTS, "f");
    }
    getBitbuf_Css_SizeUnit_Vh() {
        return __classPrivateFieldGet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__VH, "f");
    }
    getBitbuf_Css_SizeUnit_Vw() {
        return __classPrivateFieldGet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__VW, "f");
    }
    getBitbuf_Css_Size_HundredPercents() {
        return __classPrivateFieldGet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE__HUNDRED_PERCENTS, "f");
    }
    getBitbuf_Css_Size_HundredVh() {
        return __classPrivateFieldGet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE__HUNDRED_VH, "f");
    }
    getBitbuf_Css_Size_HundredVw() {
        return __classPrivateFieldGet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE__HUNDRED_VW, "f");
    }
    getBitbuf_Css_NameValueJoiner() {
        return __classPrivateFieldGet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__NAME_VALUE_JOINER, "f");
    }
    getBitbuf_Css_LineFinish() {
        return __classPrivateFieldGet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__LINE_FINISH, "f");
    }
    getBitbuf_Css_StyleValue_Open() {
        return __classPrivateFieldGet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__STYLE_VALUE__OPEN, "f");
    }
    getBitbuf_Css_StyleValue_Close() {
        return __classPrivateFieldGet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__STYLE_VALUE__CLOSE, "f");
    }
    getBitbuf_Css_Selector_Id() {
        return __classPrivateFieldGet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__SELECTOR__ID, "f");
    }
    getBitbuf_Css_Selector_Class() {
        return __classPrivateFieldGet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__SELECTOR__CLASS, "f");
    }
    getBitbuf_Css_Selector_Attribute_Open() {
        return __classPrivateFieldGet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__SELECTOR__ATTRIBUTE_OPEN, "f");
    }
    getBitbuf_Css_Selector_Attribute_Close() {
        return __classPrivateFieldGet(this, _BitbufKeywords_CssConstants_BITBUF__CSS__SELECTOR__ATTRIBUTE_CLOSE, "f");
    }
}
exports.BitbufKeywords_CssConstants = BitbufKeywords_CssConstants;
_BitbufKeywords_CssConstants_BITBUF__CSS__KEYWORD__IMPORT = new WeakMap(), _BitbufKeywords_CssConstants_BITBUF__CSS__KEYWORD__SRC = new WeakMap(), _BitbufKeywords_CssConstants_BITBUF__CSS__KEYWORD__VAR = new WeakMap(), _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__PX = new WeakMap(), _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__REM = new WeakMap(), _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__PT = new WeakMap(), _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__PERCENTS = new WeakMap(), _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__VH = new WeakMap(), _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE_UNIT__VW = new WeakMap(), _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE__HUNDRED_PERCENTS = new WeakMap(), _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE__HUNDRED_VH = new WeakMap(), _BitbufKeywords_CssConstants_BITBUF__CSS__SIZE__HUNDRED_VW = new WeakMap(), _BitbufKeywords_CssConstants_BITBUF__CSS__NAME_VALUE_JOINER = new WeakMap(), _BitbufKeywords_CssConstants_BITBUF__CSS__LINE_FINISH = new WeakMap(), _BitbufKeywords_CssConstants_BITBUF__CSS__STYLE_VALUE__OPEN = new WeakMap(), _BitbufKeywords_CssConstants_BITBUF__CSS__STYLE_VALUE__CLOSE = new WeakMap(), _BitbufKeywords_CssConstants_BITBUF__CSS__SELECTOR__ID = new WeakMap(), _BitbufKeywords_CssConstants_BITBUF__CSS__SELECTOR__CLASS = new WeakMap(), _BitbufKeywords_CssConstants_BITBUF__CSS__SELECTOR__ATTRIBUTE_OPEN = new WeakMap(), _BitbufKeywords_CssConstants_BITBUF__CSS__SELECTOR__ATTRIBUTE_CLOSE = new WeakMap();
//# sourceMappingURL=BitbufKeywords_CssConstants.js.map