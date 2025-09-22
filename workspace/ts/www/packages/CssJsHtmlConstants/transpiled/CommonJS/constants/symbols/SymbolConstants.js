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
var _SymbolConstants_SYMBOL__QUOTE_DOUBLE, _SymbolConstants_SYMBOL__QUOTE_SINGLE, _SymbolConstants_SYMBOL__QUOTE_ALT, _SymbolConstants_SYMBOL__BRACE_ROUND_OPEN, _SymbolConstants_SYMBOL__BRACE_ROUND_CLOSE, _SymbolConstants_SYMBOL__BRACE_TRIANGLE_OPEN, _SymbolConstants_SYMBOL__BRACE_TRIANGLE_CLOSE, _SymbolConstants_SYMBOL__BRACE_SQUARE_OPEN, _SymbolConstants_SYMBOL__BRACE_SQUARE_CLOSE, _SymbolConstants_SYMBOL__BRACE_FIGURE_OPEN, _SymbolConstants_SYMBOL__BRACE_FIGURE_CLOSE, _SymbolConstants_SYMBOL__COLON, _SymbolConstants_SYMBOL__SEMICOLON, _SymbolConstants_SYMBOL__POINT, _SymbolConstants_SYMBOL__COMMA, _SymbolConstants_SYMBOL__DASH, _SymbolConstants_SYMBOL__UNDERSORE, _SymbolConstants_SYMBOL__SLASH, _SymbolConstants_SYMBOL__SLASH_UPWARDS, _SymbolConstants_SYMBOL__DOLLAR, _SymbolConstants_SYMBOL__HASH, _SymbolConstants_SYMBOL__PERCENTS, _SymbolConstants_SYMBOL__AMPERSAND, _SymbolConstants_SYMBOL__TILDE, _SymbolConstants_SYMBOL__DACH, _SymbolConstants_SYMBOL__EQUALITY, _SymbolConstants_SYMBOL__ADDITION, _SymbolConstants_SYMBOL__EXCLAMATION, _SymbolConstants_SYMBOL__QUESTION, _SymbolConstants_SYMBOL__BACKGROUNDCOLOR_CHAR, _SymbolConstants_SYMBOL__NUMBER__0_ZERO, _SymbolConstants_SYMBOL__NUMBER__1_ONE, _SymbolConstants_SYMBOL__NUMBER__2_TWO, _SymbolConstants_SYMBOL__NUMBER__3_THREE, _SymbolConstants_SYMBOL__NUMBER__4_FOUR, _SymbolConstants_SYMBOL__NUMBER__5_FIVE, _SymbolConstants_SYMBOL__NUMBER__6_SIX, _SymbolConstants_SYMBOL__NUMBER__7_SEVEN, _SymbolConstants_SYMBOL__NUMBER__8_EIGHT, _SymbolConstants_SYMBOL__NUMBER__9_NINE, _SymbolConstants_NUMBER__0_ZERO, _SymbolConstants_NUMBER__1_ONE, _SymbolConstants_NUMBER__2_TWO, _SymbolConstants_NUMBER__3_THREE, _SymbolConstants_NUMBER__4_FOUR, _SymbolConstants_NUMBER__5_FIVE, _SymbolConstants_NUMBER__6_SIX, _SymbolConstants_NUMBER__7_SEVEN, _SymbolConstants_NUMBER__8_EIGHT, _SymbolConstants_NUMBER__9_NINE, _SymbolConstants_POSITION_OF_FIRST_CHAR;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymbolConstants = void 0;
class SymbolConstants {
    constructor() {
        _SymbolConstants_SYMBOL__QUOTE_DOUBLE.set(this, void 0);
        _SymbolConstants_SYMBOL__QUOTE_SINGLE.set(this, void 0);
        _SymbolConstants_SYMBOL__QUOTE_ALT.set(this, void 0);
        _SymbolConstants_SYMBOL__BRACE_ROUND_OPEN.set(this, void 0);
        _SymbolConstants_SYMBOL__BRACE_ROUND_CLOSE.set(this, void 0);
        _SymbolConstants_SYMBOL__BRACE_TRIANGLE_OPEN.set(this, void 0);
        _SymbolConstants_SYMBOL__BRACE_TRIANGLE_CLOSE.set(this, void 0);
        _SymbolConstants_SYMBOL__BRACE_SQUARE_OPEN.set(this, void 0);
        _SymbolConstants_SYMBOL__BRACE_SQUARE_CLOSE.set(this, void 0);
        _SymbolConstants_SYMBOL__BRACE_FIGURE_OPEN.set(this, void 0);
        _SymbolConstants_SYMBOL__BRACE_FIGURE_CLOSE.set(this, void 0);
        _SymbolConstants_SYMBOL__COLON.set(this, void 0);
        _SymbolConstants_SYMBOL__SEMICOLON.set(this, void 0);
        _SymbolConstants_SYMBOL__POINT.set(this, void 0);
        _SymbolConstants_SYMBOL__COMMA.set(this, void 0);
        _SymbolConstants_SYMBOL__DASH.set(this, void 0);
        _SymbolConstants_SYMBOL__UNDERSORE.set(this, void 0);
        _SymbolConstants_SYMBOL__SLASH.set(this, void 0);
        _SymbolConstants_SYMBOL__SLASH_UPWARDS.set(this, void 0);
        _SymbolConstants_SYMBOL__DOLLAR.set(this, void 0);
        _SymbolConstants_SYMBOL__HASH.set(this, void 0);
        _SymbolConstants_SYMBOL__PERCENTS.set(this, void 0);
        _SymbolConstants_SYMBOL__AMPERSAND.set(this, void 0);
        _SymbolConstants_SYMBOL__TILDE.set(this, void 0);
        _SymbolConstants_SYMBOL__DACH.set(this, void 0);
        _SymbolConstants_SYMBOL__EQUALITY.set(this, void 0);
        _SymbolConstants_SYMBOL__ADDITION.set(this, void 0);
        _SymbolConstants_SYMBOL__EXCLAMATION.set(this, void 0);
        _SymbolConstants_SYMBOL__QUESTION.set(this, void 0);
        _SymbolConstants_SYMBOL__BACKGROUNDCOLOR_CHAR.set(this, void 0);
        _SymbolConstants_SYMBOL__NUMBER__0_ZERO.set(this, void 0);
        _SymbolConstants_SYMBOL__NUMBER__1_ONE.set(this, void 0);
        _SymbolConstants_SYMBOL__NUMBER__2_TWO.set(this, void 0);
        _SymbolConstants_SYMBOL__NUMBER__3_THREE.set(this, void 0);
        _SymbolConstants_SYMBOL__NUMBER__4_FOUR.set(this, void 0);
        _SymbolConstants_SYMBOL__NUMBER__5_FIVE.set(this, void 0);
        _SymbolConstants_SYMBOL__NUMBER__6_SIX.set(this, void 0);
        _SymbolConstants_SYMBOL__NUMBER__7_SEVEN.set(this, void 0);
        _SymbolConstants_SYMBOL__NUMBER__8_EIGHT.set(this, void 0);
        _SymbolConstants_SYMBOL__NUMBER__9_NINE.set(this, void 0);
        _SymbolConstants_NUMBER__0_ZERO.set(this, void 0);
        _SymbolConstants_NUMBER__1_ONE.set(this, void 0);
        _SymbolConstants_NUMBER__2_TWO.set(this, void 0);
        _SymbolConstants_NUMBER__3_THREE.set(this, void 0);
        _SymbolConstants_NUMBER__4_FOUR.set(this, void 0);
        _SymbolConstants_NUMBER__5_FIVE.set(this, void 0);
        _SymbolConstants_NUMBER__6_SIX.set(this, void 0);
        _SymbolConstants_NUMBER__7_SEVEN.set(this, void 0);
        _SymbolConstants_NUMBER__8_EIGHT.set(this, void 0);
        _SymbolConstants_NUMBER__9_NINE.set(this, void 0);
        _SymbolConstants_POSITION_OF_FIRST_CHAR.set(this, void 0);
        // Initialization of private fields remains unchanged
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__QUOTE_DOUBLE, "\"", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__QUOTE_SINGLE, "'", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__QUOTE_ALT, "`", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__BRACE_ROUND_OPEN, "(", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__BRACE_ROUND_CLOSE, ")", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__BRACE_TRIANGLE_OPEN, "<", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__BRACE_TRIANGLE_CLOSE, ">", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__BRACE_SQUARE_OPEN, "[", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__BRACE_SQUARE_CLOSE, "]", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__BRACE_FIGURE_OPEN, "{", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__BRACE_FIGURE_CLOSE, "}", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__COLON, ":", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__SEMICOLON, ";", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__POINT, ".", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__COMMA, ",", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__DASH, "-", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__UNDERSORE, "_", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__SLASH, "/", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__SLASH_UPWARDS, "|", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__DOLLAR, "$", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__HASH, "#", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__PERCENTS, "%", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__AMPERSAND, "&", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__TILDE, "~", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__DACH, "^", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__EQUALITY, "=", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__ADDITION, "+", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__EXCLAMATION, "!", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__QUESTION, "?", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__BACKGROUNDCOLOR_CHAR, " ", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__NUMBER__0_ZERO, "0", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__NUMBER__1_ONE, "1", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__NUMBER__2_TWO, "2", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__NUMBER__3_THREE, "3", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__NUMBER__4_FOUR, "4", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__NUMBER__5_FIVE, "5", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__NUMBER__6_SIX, "6", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__NUMBER__7_SEVEN, "7", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__NUMBER__8_EIGHT, "8", "f");
        __classPrivateFieldSet(this, _SymbolConstants_SYMBOL__NUMBER__9_NINE, "9", "f");
        __classPrivateFieldSet(this, _SymbolConstants_NUMBER__0_ZERO, 0, "f");
        __classPrivateFieldSet(this, _SymbolConstants_NUMBER__1_ONE, 1, "f");
        __classPrivateFieldSet(this, _SymbolConstants_NUMBER__2_TWO, 2, "f");
        __classPrivateFieldSet(this, _SymbolConstants_NUMBER__3_THREE, 3, "f");
        __classPrivateFieldSet(this, _SymbolConstants_NUMBER__4_FOUR, 4, "f");
        __classPrivateFieldSet(this, _SymbolConstants_NUMBER__5_FIVE, 5, "f");
        __classPrivateFieldSet(this, _SymbolConstants_NUMBER__6_SIX, 6, "f");
        __classPrivateFieldSet(this, _SymbolConstants_NUMBER__7_SEVEN, 7, "f");
        __classPrivateFieldSet(this, _SymbolConstants_NUMBER__8_EIGHT, 8, "f");
        __classPrivateFieldSet(this, _SymbolConstants_NUMBER__9_NINE, 9, "f");
        __classPrivateFieldSet(this, _SymbolConstants_POSITION_OF_FIRST_CHAR, __classPrivateFieldGet(this, _SymbolConstants_NUMBER__0_ZERO, "f"), "f");
    }
    getCharcodeSymbol(inSymbol) {
        return inSymbol.charCodeAt(__classPrivateFieldGet(this, _SymbolConstants_POSITION_OF_FIRST_CHAR, "f"));
    }
    getQuoteDouble() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__QUOTE_DOUBLE, "f");
    }
    getQuoteSingle() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__QUOTE_SINGLE, "f");
    }
    getQuoteAlt() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__QUOTE_ALT, "f");
    }
    getBraceRoundOpen() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__BRACE_ROUND_OPEN, "f");
    }
    getBraceRoundClose() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__BRACE_ROUND_CLOSE, "f");
    }
    getBraceTriangleOpen() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__BRACE_TRIANGLE_OPEN, "f");
    }
    getBraceTriangleClose() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__BRACE_TRIANGLE_CLOSE, "f");
    }
    getBraceSquareOpen() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__BRACE_SQUARE_OPEN, "f");
    }
    getBraceSquareClose() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__BRACE_SQUARE_CLOSE, "f");
    }
    getBraceFigureOpen() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__BRACE_FIGURE_OPEN, "f");
    }
    getBraceFigureClose() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__BRACE_FIGURE_CLOSE, "f");
    }
    getColon() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__COLON, "f");
    }
    getSemicolon() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__SEMICOLON, "f");
    }
    getPoint() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__POINT, "f");
    }
    getComma() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__COMMA, "f");
    }
    getDash() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__DASH, "f");
    }
    getUnderscore() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__UNDERSORE, "f");
    }
    getSlash() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__SLASH, "f");
    }
    getSlashUpwards() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__SLASH_UPWARDS, "f");
    }
    getDollar() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__DOLLAR, "f");
    }
    getSymbol_Hashtag() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__HASH, "f");
    }
    getSymbol_PERCENTS() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__PERCENTS, "f");
    }
    getAmpersand() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__AMPERSAND, "f");
    }
    getTilde() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__TILDE, "f");
    }
    getDach() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__DACH, "f");
    }
    getEquality() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__EQUALITY, "f");
    }
    getAddition() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__ADDITION, "f");
    }
    getExclamation() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__EXCLAMATION, "f");
    }
    getQuestion() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__QUESTION, "f");
    }
    getSymbolBackgroundColor() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__BACKGROUNDCOLOR_CHAR, "f");
    }
    getSymbolNumber_0_Zero() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__NUMBER__0_ZERO, "f");
    }
    getSymbolNumber_1_One() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__NUMBER__1_ONE, "f");
    }
    getSymbolNumber_2_Two() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__NUMBER__2_TWO, "f");
    }
    getSymbolNumber_3_Three() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__NUMBER__3_THREE, "f");
    }
    getSymbolNumber_4_Four() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__NUMBER__4_FOUR, "f");
    }
    getSymbolNumber_5_Five() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__NUMBER__5_FIVE, "f");
    }
    getSymbolNumber_6_Six() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__NUMBER__6_SIX, "f");
    }
    getSymbolNumber_7_Seven() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__NUMBER__7_SEVEN, "f");
    }
    getSymbolNumber_8_Eight() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__NUMBER__8_EIGHT, "f");
    }
    getSymbolNumber_9_Nine() {
        return __classPrivateFieldGet(this, _SymbolConstants_SYMBOL__NUMBER__9_NINE, "f");
    }
    getNumber_0_Zero() {
        return __classPrivateFieldGet(this, _SymbolConstants_NUMBER__0_ZERO, "f");
    }
    getNumber_1_One() {
        return __classPrivateFieldGet(this, _SymbolConstants_NUMBER__1_ONE, "f");
    }
    getNumber_2_Two() {
        return __classPrivateFieldGet(this, _SymbolConstants_NUMBER__2_TWO, "f");
    }
    getNumber_3_Three() {
        return __classPrivateFieldGet(this, _SymbolConstants_NUMBER__3_THREE, "f");
    }
    getNumber_4_Four() {
        return __classPrivateFieldGet(this, _SymbolConstants_NUMBER__4_FOUR, "f");
    }
    getNumber_5_Five() {
        return __classPrivateFieldGet(this, _SymbolConstants_NUMBER__5_FIVE, "f");
    }
    getNumber_6_Six() {
        return __classPrivateFieldGet(this, _SymbolConstants_NUMBER__6_SIX, "f");
    }
    getNumber_7_Seven() {
        return __classPrivateFieldGet(this, _SymbolConstants_NUMBER__7_SEVEN, "f");
    }
    getNumber_8_Eight() {
        return __classPrivateFieldGet(this, _SymbolConstants_NUMBER__8_EIGHT, "f");
    }
    getNumber_9_Nine() {
        return __classPrivateFieldGet(this, _SymbolConstants_NUMBER__9_NINE, "f");
    }
}
exports.SymbolConstants = SymbolConstants;
_SymbolConstants_SYMBOL__QUOTE_DOUBLE = new WeakMap(), _SymbolConstants_SYMBOL__QUOTE_SINGLE = new WeakMap(), _SymbolConstants_SYMBOL__QUOTE_ALT = new WeakMap(), _SymbolConstants_SYMBOL__BRACE_ROUND_OPEN = new WeakMap(), _SymbolConstants_SYMBOL__BRACE_ROUND_CLOSE = new WeakMap(), _SymbolConstants_SYMBOL__BRACE_TRIANGLE_OPEN = new WeakMap(), _SymbolConstants_SYMBOL__BRACE_TRIANGLE_CLOSE = new WeakMap(), _SymbolConstants_SYMBOL__BRACE_SQUARE_OPEN = new WeakMap(), _SymbolConstants_SYMBOL__BRACE_SQUARE_CLOSE = new WeakMap(), _SymbolConstants_SYMBOL__BRACE_FIGURE_OPEN = new WeakMap(), _SymbolConstants_SYMBOL__BRACE_FIGURE_CLOSE = new WeakMap(), _SymbolConstants_SYMBOL__COLON = new WeakMap(), _SymbolConstants_SYMBOL__SEMICOLON = new WeakMap(), _SymbolConstants_SYMBOL__POINT = new WeakMap(), _SymbolConstants_SYMBOL__COMMA = new WeakMap(), _SymbolConstants_SYMBOL__DASH = new WeakMap(), _SymbolConstants_SYMBOL__UNDERSORE = new WeakMap(), _SymbolConstants_SYMBOL__SLASH = new WeakMap(), _SymbolConstants_SYMBOL__SLASH_UPWARDS = new WeakMap(), _SymbolConstants_SYMBOL__DOLLAR = new WeakMap(), _SymbolConstants_SYMBOL__HASH = new WeakMap(), _SymbolConstants_SYMBOL__PERCENTS = new WeakMap(), _SymbolConstants_SYMBOL__AMPERSAND = new WeakMap(), _SymbolConstants_SYMBOL__TILDE = new WeakMap(), _SymbolConstants_SYMBOL__DACH = new WeakMap(), _SymbolConstants_SYMBOL__EQUALITY = new WeakMap(), _SymbolConstants_SYMBOL__ADDITION = new WeakMap(), _SymbolConstants_SYMBOL__EXCLAMATION = new WeakMap(), _SymbolConstants_SYMBOL__QUESTION = new WeakMap(), _SymbolConstants_SYMBOL__BACKGROUNDCOLOR_CHAR = new WeakMap(), _SymbolConstants_SYMBOL__NUMBER__0_ZERO = new WeakMap(), _SymbolConstants_SYMBOL__NUMBER__1_ONE = new WeakMap(), _SymbolConstants_SYMBOL__NUMBER__2_TWO = new WeakMap(), _SymbolConstants_SYMBOL__NUMBER__3_THREE = new WeakMap(), _SymbolConstants_SYMBOL__NUMBER__4_FOUR = new WeakMap(), _SymbolConstants_SYMBOL__NUMBER__5_FIVE = new WeakMap(), _SymbolConstants_SYMBOL__NUMBER__6_SIX = new WeakMap(), _SymbolConstants_SYMBOL__NUMBER__7_SEVEN = new WeakMap(), _SymbolConstants_SYMBOL__NUMBER__8_EIGHT = new WeakMap(), _SymbolConstants_SYMBOL__NUMBER__9_NINE = new WeakMap(), _SymbolConstants_NUMBER__0_ZERO = new WeakMap(), _SymbolConstants_NUMBER__1_ONE = new WeakMap(), _SymbolConstants_NUMBER__2_TWO = new WeakMap(), _SymbolConstants_NUMBER__3_THREE = new WeakMap(), _SymbolConstants_NUMBER__4_FOUR = new WeakMap(), _SymbolConstants_NUMBER__5_FIVE = new WeakMap(), _SymbolConstants_NUMBER__6_SIX = new WeakMap(), _SymbolConstants_NUMBER__7_SEVEN = new WeakMap(), _SymbolConstants_NUMBER__8_EIGHT = new WeakMap(), _SymbolConstants_NUMBER__9_NINE = new WeakMap(), _SymbolConstants_POSITION_OF_FIRST_CHAR = new WeakMap();
//# sourceMappingURL=SymbolConstants.js.map