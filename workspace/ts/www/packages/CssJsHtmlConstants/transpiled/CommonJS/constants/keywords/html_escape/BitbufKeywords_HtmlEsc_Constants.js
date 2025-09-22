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
var _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__QUOTE_DOUBLE, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__QUOTE_SINGLE, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__QUOTE_ALT, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_ROUND_OPEN, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_ROUND_CLOSE, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_TRIANGLE_OPEN, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_TRIANGLE_CLOSE, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_SQUARE_OPEN, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_SQUARE_CLOSE, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_FIGURE_OPEN, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_FIGURE_CLOSE, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__COLON, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__SEMICOLON, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__POINT, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__COMMA, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__DASH, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__UNDERSORE, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__SLASH, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__SLASH_UPWARDS, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__DOLLAR, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__HASH, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__PERCENTS, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__AMPERSAND, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__TILDE, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__DACH, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__EQUALITY, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__ADDITION, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__EXCLAMATION, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__QUESTION, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__HTMLESC__SYMBOL__BACKGROUNDCOLOR_CHAR;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitbufKeywords_HtmlEsc_Constants = void 0;
const util_1 = require("util");
const Keywords_HtmlEsc_Constants_js_1 = require("./Keywords_HtmlEsc_Constants.js");
class BitbufKeywords_HtmlEsc_Constants extends Keywords_HtmlEsc_Constants_js_1.Keywords_HtmlEsc_Constants {
    constructor() {
        super();
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__QUOTE_DOUBLE.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__QUOTE_SINGLE.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__QUOTE_ALT.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_ROUND_OPEN.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_ROUND_CLOSE.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_TRIANGLE_OPEN.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_TRIANGLE_CLOSE.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_SQUARE_OPEN.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_SQUARE_CLOSE.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_FIGURE_OPEN.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_FIGURE_CLOSE.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__COLON.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__SEMICOLON.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__POINT.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__COMMA.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__DASH.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__UNDERSORE.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__SLASH.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__SLASH_UPWARDS.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__DOLLAR.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__HASH.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__PERCENTS.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__AMPERSAND.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__TILDE.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__DACH.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__EQUALITY.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__ADDITION.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__EXCLAMATION.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__QUESTION.set(this, void 0);
        _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__HTMLESC__SYMBOL__BACKGROUNDCOLOR_CHAR.set(this, void 0);
        this._textEncoder = new util_1.TextEncoder();
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__QUOTE_DOUBLE, this._textEncoder.encode(this.getHtmlEsc_QuoteDouble()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__QUOTE_SINGLE, this._textEncoder.encode(this.getHtmlEsc_QuoteSingle()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__QUOTE_ALT, this._textEncoder.encode(this.getHtmlEsc_QuoteAlt()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_ROUND_OPEN, this._textEncoder.encode(this.getHtmlEsc_BraceRoundOpen()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_ROUND_CLOSE, this._textEncoder.encode(this.getHtmlEsc_BraceRoundClose()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_TRIANGLE_OPEN, this._textEncoder.encode(this.getHtmlEsc_BraceTriangleOpen()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_TRIANGLE_CLOSE, this._textEncoder.encode(this.getHtmlEsc_BraceTriangleClose()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_SQUARE_OPEN, this._textEncoder.encode(this.getHtmlEsc_BraceSquareOpen()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_SQUARE_CLOSE, this._textEncoder.encode(this.getHtmlEsc_BraceSquareClose()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_FIGURE_OPEN, this._textEncoder.encode(this.getHtmlEsc_BraceFigureOpen()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_FIGURE_CLOSE, this._textEncoder.encode(this.getHtmlEsc_BraceFigureClose()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__COLON, this._textEncoder.encode(this.getHtmlEsc_Colon()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__SEMICOLON, this._textEncoder.encode(this.getHtmlEsc_Semicolon()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__POINT, this._textEncoder.encode(this.getHtmlEsc_Point()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__COMMA, this._textEncoder.encode(this.getHtmlEsc_Comma()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__DASH, this._textEncoder.encode(this.getHtmlEsc_Dash()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__UNDERSORE, this._textEncoder.encode(this.getHtmlEsc_Underscore()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__SLASH, this._textEncoder.encode(this.getHtmlEsc_Slash()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__SLASH_UPWARDS, this._textEncoder.encode(this.getHtmlEsc_SlashUpwards()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__DOLLAR, this._textEncoder.encode(this.getHtmlEsc_Dollar()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__HASH, this._textEncoder.encode(this.getHtmlEsc_Hash()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__PERCENTS, this._textEncoder.encode(this.getHtmlEsc_Symbol_PERCENTS()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__AMPERSAND, this._textEncoder.encode(this.getHtmlEsc_Ampersand()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__TILDE, this._textEncoder.encode(this.getHtmlEsc_Tilde()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__DACH, this._textEncoder.encode(this.getHtmlEsc_Dach()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__EQUALITY, this._textEncoder.encode(this.getHtmlEsc_Equality()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__ADDITION, this._textEncoder.encode(this.getHtmlEsc_Addition()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__EXCLAMATION, this._textEncoder.encode(this.getHtmlEsc_Exclamation()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__QUESTION, this._textEncoder.encode(this.getHtmlEsc_Question()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__HTMLESC__SYMBOL__BACKGROUNDCOLOR_CHAR, this._textEncoder.encode(this.getHtmlEsc_SymbolBackgroundColor()), "f");
    }
    getBitbuf_HtmlEsc_QuoteDouble() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__QUOTE_DOUBLE, "f");
    }
    getBitbuf_HtmlEsc_QuoteSingle() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__QUOTE_SINGLE, "f");
    }
    getBitbuf_HtmlEsc_QuoteAlt() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__QUOTE_ALT, "f");
    }
    getBitbuf_HtmlEsc_BraceRoundOpen() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_ROUND_OPEN, "f");
    }
    getBitbuf_HtmlEsc_BraceRoundClose() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_ROUND_CLOSE, "f");
    }
    getBitbuf_HtmlEsc_BraceTriangleOpen() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_TRIANGLE_OPEN, "f");
    }
    getBitbuf_HtmlEsc_BraceTriangleClose() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_TRIANGLE_CLOSE, "f");
    }
    getBitbuf_HtmlEsc_BraceSquareOpen() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_SQUARE_OPEN, "f");
    }
    getBitbuf_HtmlEsc_BraceSquareClose() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_SQUARE_CLOSE, "f");
    }
    getBitbuf_HtmlEsc_BraceFigureOpen() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_FIGURE_OPEN, "f");
    }
    getBitbuf_HtmlEsc_BraceFigureClose() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_FIGURE_CLOSE, "f");
    }
    getBitbuf_HtmlEsc_Colon() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__COLON, "f");
    }
    getBitbuf_HtmlEsc_Semicolon() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__SEMICOLON, "f");
    }
    getBitbuf_HtmlEsc_Point() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__POINT, "f");
    }
    getBitbuf_HtmlEsc_Comma() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__COMMA, "f");
    }
    getBitbuf_HtmlEsc_Dash() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__DASH, "f");
    }
    getBitbuf_HtmlEsc_Underscore() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__UNDERSORE, "f");
    }
    getBitbuf_HtmlEsc_Slash() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__SLASH, "f");
    }
    getBitbuf_HtmlEsc_SlashUpwards() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__SLASH_UPWARDS, "f");
    }
    getBitbuf_HtmlEsc_Dollar() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__DOLLAR, "f");
    }
    getBitbuf_HtmlEsc_Hash() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__HASH, "f");
    }
    getBitbuf_HtmlEsc_Symbol_PERCENTS() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__PERCENTS, "f");
    }
    getBitbuf_HtmlEsc_Ampersand() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__AMPERSAND, "f");
    }
    getBitbuf_HtmlEsc_Tilde() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__TILDE, "f");
    }
    getBitbuf_HtmlEsc_Dach() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__DACH, "f");
    }
    getBitbuf_HtmlEsc_Equality() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__EQUALITY, "f");
    }
    getBitbuf_HtmlEsc_Addition() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__ADDITION, "f");
    }
    getBitbuf_HtmlEsc_Exclamation() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__EXCLAMATION, "f");
    }
    getBitbuf_HtmlEsc_Question() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__QUESTION, "f");
    }
    getBitbuf_HtmlEsc_SymbolBackgroundColor() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__HTMLESC__SYMBOL__BACKGROUNDCOLOR_CHAR, "f");
    }
}
exports.BitbufKeywords_HtmlEsc_Constants = BitbufKeywords_HtmlEsc_Constants;
_BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__QUOTE_DOUBLE = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__QUOTE_SINGLE = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__QUOTE_ALT = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_ROUND_OPEN = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_ROUND_CLOSE = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_TRIANGLE_OPEN = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_TRIANGLE_CLOSE = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_SQUARE_OPEN = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_SQUARE_CLOSE = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_FIGURE_OPEN = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__BRACE_FIGURE_CLOSE = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__COLON = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__SEMICOLON = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__POINT = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__COMMA = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__DASH = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__UNDERSORE = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__SLASH = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__SLASH_UPWARDS = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__DOLLAR = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__HASH = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__PERCENTS = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__AMPERSAND = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__TILDE = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__DACH = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__EQUALITY = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__ADDITION = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__EXCLAMATION = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__QUESTION = new WeakMap(), _BitbufKeywords_HtmlEsc_Constants_BITBUF__HTMLESC__SYMBOL__HTMLESC__SYMBOL__BACKGROUNDCOLOR_CHAR = new WeakMap();
//# sourceMappingURL=BitbufKeywords_HtmlEsc_Constants.js.map