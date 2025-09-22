import { SymbolConstants } from "./SymbolConstants.js";
export class CharcodeSymbolConstants extends SymbolConstants {
    #CHARCODE__SYMBOL__QUOTE_DOUBLE;
    #CHARCODE__SYMBOL__QUOTE_SINGLE;
    #CHARCODE__SYMBOL__QUOTE_ALT;
    #CHARCODE__SYMBOL__BRACE_ROUND_OPEN;
    #CHARCODE__SYMBOL__BRACE_ROUND_CLOSE;
    #CHARCODE__SYMBOL__BRACE_TRIANGLE_OPEN;
    #CHARCODE__SYMBOL__BRACE_TRIANGLE_CLOSE;
    #CHARCODE__SYMBOL__BRACE_SQUARE_OPEN;
    #CHARCODE__SYMBOL__BRACE_SQUARE_CLOSE;
    #CHARCODE__SYMBOL__BRACE_FIGURE_OPEN;
    #CHARCODE__SYMBOL__BRACE_FIGURE_CLOSE;
    #CHARCODE__SYMBOL__COLON;
    #CHARCODE__SYMBOL__SEMICOLON;
    #CHARCODE__SYMBOL__POINT;
    #CHARCODE__SYMBOL__COMMA;
    #CHARCODE__SYMBOL__DASH;
    #CHARCODE__SYMBOL__UNDERSORE;
    #CHARCODE__SYMBOL__SLASH;
    #CHARCODE__SYMBOL__SLASH_UPWARDS;
    #CHARCODE__SYMBOL__DOLLAR;
    #CHARCODE__SYMBOL__HASH;
    #CHARCODE__SYMBOL__PERCENTS;
    #CHARCODE__SYMBOL__AMPERSAND;
    #CHARCODE__SYMBOL__TILDE;
    #CHARCODE__SYMBOL__DACH;
    #CHARCODE__SYMBOL__EQUALITY;
    #CHARCODE__SYMBOL__ADDITION;
    #CHARCODE__SYMBOL__EXCLAMATION;
    #CHARCODE__SYMBOL__QUESTION;
    #CHARCODE__SYMBOL__BACKGROUNDCOLOR_CHAR;
    #CHARCODE__SYMBOL__NUMBER__0_ZERO;
    #CHARCODE__SYMBOL__NUMBER__1_ONE;
    #CHARCODE__SYMBOL__NUMBER__2_TWO;
    #CHARCODE__SYMBOL__NUMBER__3_THREE;
    #CHARCODE__SYMBOL__NUMBER__4_FOUR;
    #CHARCODE__SYMBOL__NUMBER__5_FIVE;
    #CHARCODE__SYMBOL__NUMBER__6_SIX;
    #CHARCODE__SYMBOL__NUMBER__7_SEVEN;
    #CHARCODE__SYMBOL__NUMBER__8_EIGHT;
    #CHARCODE__SYMBOL__NUMBER__9_NINE;
    constructor() {
        super();
        this.#CHARCODE__SYMBOL__QUOTE_DOUBLE = this.getCharcodeSymbol(this.getQuoteDouble());
        this.#CHARCODE__SYMBOL__QUOTE_SINGLE = this.getCharcodeSymbol(this.getQuoteSingle());
        this.#CHARCODE__SYMBOL__QUOTE_ALT = this.getCharcodeSymbol(this.getQuoteAlt());
        this.#CHARCODE__SYMBOL__BRACE_ROUND_OPEN = this.getCharcodeSymbol(this.getBraceRoundOpen());
        this.#CHARCODE__SYMBOL__BRACE_ROUND_CLOSE = this.getCharcodeSymbol(this.getBraceRoundClose());
        this.#CHARCODE__SYMBOL__BRACE_TRIANGLE_OPEN = this.getCharcodeSymbol(this.getBraceTriangleOpen());
        this.#CHARCODE__SYMBOL__BRACE_TRIANGLE_CLOSE = this.getCharcodeSymbol(this.getBraceTriangleClose());
        this.#CHARCODE__SYMBOL__BRACE_SQUARE_OPEN = this.getCharcodeSymbol(this.getBraceSquareOpen());
        this.#CHARCODE__SYMBOL__BRACE_SQUARE_CLOSE = this.getCharcodeSymbol(this.getBraceSquareClose());
        this.#CHARCODE__SYMBOL__BRACE_FIGURE_OPEN = this.getCharcodeSymbol(this.getBraceFigureOpen());
        this.#CHARCODE__SYMBOL__BRACE_FIGURE_CLOSE = this.getCharcodeSymbol(this.getBraceFigureClose());
        this.#CHARCODE__SYMBOL__COLON = this.getCharcodeSymbol(this.getColon());
        this.#CHARCODE__SYMBOL__SEMICOLON = this.getCharcodeSymbol(this.getSemicolon());
        this.#CHARCODE__SYMBOL__POINT = this.getCharcodeSymbol(this.getPoint());
        this.#CHARCODE__SYMBOL__COMMA = this.getCharcodeSymbol(this.getComma());
        this.#CHARCODE__SYMBOL__DASH = this.getCharcodeSymbol(this.getDash());
        this.#CHARCODE__SYMBOL__UNDERSORE = this.getCharcodeSymbol(this.getUnderscore());
        this.#CHARCODE__SYMBOL__SLASH = this.getCharcodeSymbol(this.getSlash());
        this.#CHARCODE__SYMBOL__SLASH_UPWARDS = this.getCharcodeSymbol(this.getSlashUpwards());
        this.#CHARCODE__SYMBOL__DOLLAR = this.getCharcodeSymbol(this.getDollar());
        this.#CHARCODE__SYMBOL__HASH = this.getCharcodeSymbol(this.getSymbol_Hashtag());
        this.#CHARCODE__SYMBOL__PERCENTS = this.getCharcodeSymbol(this.getSymbol_PERCENTS());
        this.#CHARCODE__SYMBOL__AMPERSAND = this.getCharcodeSymbol(this.getAmpersand());
        this.#CHARCODE__SYMBOL__TILDE = this.getCharcodeSymbol(this.getTilde());
        this.#CHARCODE__SYMBOL__DACH = this.getCharcodeSymbol(this.getDach());
        this.#CHARCODE__SYMBOL__EQUALITY = this.getCharcodeSymbol(this.getEquality());
        this.#CHARCODE__SYMBOL__ADDITION = this.getCharcodeSymbol(this.getAddition());
        this.#CHARCODE__SYMBOL__EXCLAMATION = this.getCharcodeSymbol(this.getExclamation());
        this.#CHARCODE__SYMBOL__QUESTION = this.getCharcodeSymbol(this.getQuestion());
        this.#CHARCODE__SYMBOL__BACKGROUNDCOLOR_CHAR = this.getCharcodeSymbol(this.getSymbolBackgroundColor());
        this.#CHARCODE__SYMBOL__NUMBER__0_ZERO = this.getCharcodeSymbol(this.getSymbolNumber_0_Zero());
        this.#CHARCODE__SYMBOL__NUMBER__1_ONE = this.getCharcodeSymbol(this.getSymbolNumber_1_One());
        this.#CHARCODE__SYMBOL__NUMBER__2_TWO = this.getCharcodeSymbol(this.getSymbolNumber_2_Two());
        this.#CHARCODE__SYMBOL__NUMBER__3_THREE = this.getCharcodeSymbol(this.getSymbolNumber_3_Three());
        this.#CHARCODE__SYMBOL__NUMBER__4_FOUR = this.getCharcodeSymbol(this.getSymbolNumber_4_Four());
        this.#CHARCODE__SYMBOL__NUMBER__5_FIVE = this.getCharcodeSymbol(this.getSymbolNumber_5_Five());
        this.#CHARCODE__SYMBOL__NUMBER__6_SIX = this.getCharcodeSymbol(this.getSymbolNumber_6_Six());
        this.#CHARCODE__SYMBOL__NUMBER__7_SEVEN = this.getCharcodeSymbol(this.getSymbolNumber_7_Seven());
        this.#CHARCODE__SYMBOL__NUMBER__8_EIGHT = this.getCharcodeSymbol(this.getSymbolNumber_8_Eight());
        this.#CHARCODE__SYMBOL__NUMBER__9_NINE = this.getCharcodeSymbol(this.getSymbolNumber_9_Nine());
    }
    getCharcode_QuoteDouble() {
        return this.#CHARCODE__SYMBOL__QUOTE_DOUBLE;
    }
    getCharcode_QuoteSingle() {
        return this.#CHARCODE__SYMBOL__QUOTE_SINGLE;
    }
    getCharcode_QuoteAlt() {
        return this.#CHARCODE__SYMBOL__QUOTE_ALT;
    }
    getCharcode_BraceRoundOpen() {
        return this.#CHARCODE__SYMBOL__BRACE_ROUND_OPEN;
    }
    getCharcode_BraceRoundClose() {
        return this.#CHARCODE__SYMBOL__BRACE_ROUND_CLOSE;
    }
    getCharcode_BraceTriangleOpen() {
        return this.#CHARCODE__SYMBOL__BRACE_TRIANGLE_OPEN;
    }
    getCharcode_BraceTriangleClose() {
        return this.#CHARCODE__SYMBOL__BRACE_TRIANGLE_CLOSE;
    }
    getCharcode_BraceSquareOpen() {
        return this.#CHARCODE__SYMBOL__BRACE_SQUARE_OPEN;
    }
    getCharcode_BraceSquareClose() {
        return this.#CHARCODE__SYMBOL__BRACE_SQUARE_CLOSE;
    }
    getCharcode_BraceFigureOpen() {
        return this.#CHARCODE__SYMBOL__BRACE_FIGURE_OPEN;
    }
    getCharcode_BraceFigureClose() {
        return this.#CHARCODE__SYMBOL__BRACE_FIGURE_CLOSE;
    }
    getCharcode_Colon() {
        return this.#CHARCODE__SYMBOL__COLON;
    }
    getCharcode_Semicolon() {
        return this.#CHARCODE__SYMBOL__SEMICOLON;
    }
    getCharcode_Point() {
        return this.#CHARCODE__SYMBOL__POINT;
    }
    getCharcode_Comma() {
        return this.#CHARCODE__SYMBOL__COMMA;
    }
    getCharcode_Dash() {
        return this.#CHARCODE__SYMBOL__DASH;
    }
    getCharcode_Underscore() {
        return this.#CHARCODE__SYMBOL__UNDERSORE;
    }
    getCharcode_Slash() {
        return this.#CHARCODE__SYMBOL__SLASH;
    }
    getCharcode_SlashUpwards() {
        return this.#CHARCODE__SYMBOL__SLASH_UPWARDS;
    }
    getCharcode_Dollar() {
        return this.#CHARCODE__SYMBOL__DOLLAR;
    }
    getCharcode_Hash() {
        return this.#CHARCODE__SYMBOL__HASH;
    }
    getCharcode_Symbol_PERCENTS() {
        return this.#CHARCODE__SYMBOL__PERCENTS;
    }
    getCharcode_Ampersand() {
        return this.#CHARCODE__SYMBOL__AMPERSAND;
    }
    getCharcode_Tilde() {
        return this.#CHARCODE__SYMBOL__TILDE;
    }
    getCharcode_Dach() {
        return this.#CHARCODE__SYMBOL__DACH;
    }
    getCharcode_Equality() {
        return this.#CHARCODE__SYMBOL__EQUALITY;
    }
    getCharcode_Addition() {
        return this.#CHARCODE__SYMBOL__ADDITION;
    }
    getCharcode_Exclamation() {
        return this.#CHARCODE__SYMBOL__EXCLAMATION;
    }
    getCharcode_Question() {
        return this.#CHARCODE__SYMBOL__QUESTION;
    }
    getCharcode_SymbolBackgroundColor() {
        return this.#CHARCODE__SYMBOL__BACKGROUNDCOLOR_CHAR;
    }
    getCharcode_SymbolNumber_0_Zero() {
        return this.#CHARCODE__SYMBOL__NUMBER__0_ZERO;
    }
    getCharcode_SymbolNumber_1_One() {
        return this.#CHARCODE__SYMBOL__NUMBER__1_ONE;
    }
    getCharcode_SymbolNumber_2_Two() {
        return this.#CHARCODE__SYMBOL__NUMBER__2_TWO;
    }
    getCharcode_SymbolNumber_3_Three() {
        return this.#CHARCODE__SYMBOL__NUMBER__3_THREE;
    }
    getCharcode_SymbolNumber_4_Four() {
        return this.#CHARCODE__SYMBOL__NUMBER__4_FOUR;
    }
    getCharcode_SymbolNumber_5_Five() {
        return this.#CHARCODE__SYMBOL__NUMBER__5_FIVE;
    }
    getCharcode_SymbolNumber_6_Six() {
        return this.#CHARCODE__SYMBOL__NUMBER__6_SIX;
    }
    getCharcode_SymbolNumber_7_Seven() {
        return this.#CHARCODE__SYMBOL__NUMBER__7_SEVEN;
    }
    getCharcode_SymbolNumber_8_Eight() {
        return this.#CHARCODE__SYMBOL__NUMBER__8_EIGHT;
    }
    getCharcode_SymbolNumber_9_Nine() {
        return this.#CHARCODE__SYMBOL__NUMBER__9_NINE;
    }
}
//# sourceMappingURL=CharcodeSymbolConstants.js.map