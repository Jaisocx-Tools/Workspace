export class SymbolConstants {
    #SYMBOL__QUOTE_DOUBLE;
    #SYMBOL__QUOTE_SINGLE;
    #SYMBOL__QUOTE_ALT;
    #SYMBOL__BRACE_ROUND_OPEN;
    #SYMBOL__BRACE_ROUND_CLOSE;
    #SYMBOL__BRACE_TRIANGLE_OPEN;
    #SYMBOL__BRACE_TRIANGLE_CLOSE;
    #SYMBOL__BRACE_SQUARE_OPEN;
    #SYMBOL__BRACE_SQUARE_CLOSE;
    #SYMBOL__BRACE_FIGURE_OPEN;
    #SYMBOL__BRACE_FIGURE_CLOSE;
    #SYMBOL__COLON;
    #SYMBOL__SEMICOLON;
    #SYMBOL__POINT;
    #SYMBOL__COMMA;
    #SYMBOL__DASH;
    #SYMBOL__UNDERSORE;
    #SYMBOL__SLASH;
    #SYMBOL__SLASH_UPWARDS;
    #SYMBOL__DOLLAR;
    #SYMBOL__HASH;
    #SYMBOL__PERCENTS;
    #SYMBOL__AMPERSAND;
    #SYMBOL__TILDE;
    #SYMBOL__DACH;
    #SYMBOL__EQUALITY;
    #SYMBOL__ADDITION;
    #SYMBOL__EXCLAMATION;
    #SYMBOL__QUESTION;
    #SYMBOL__BACKGROUNDCOLOR_CHAR;
    #SYMBOL__NUMBER__0_ZERO;
    #SYMBOL__NUMBER__1_ONE;
    #SYMBOL__NUMBER__2_TWO;
    #SYMBOL__NUMBER__3_THREE;
    #SYMBOL__NUMBER__4_FOUR;
    #SYMBOL__NUMBER__5_FIVE;
    #SYMBOL__NUMBER__6_SIX;
    #SYMBOL__NUMBER__7_SEVEN;
    #SYMBOL__NUMBER__8_EIGHT;
    #SYMBOL__NUMBER__9_NINE;
    #NUMBER__0_ZERO;
    #NUMBER__1_ONE;
    #NUMBER__2_TWO;
    #NUMBER__3_THREE;
    #NUMBER__4_FOUR;
    #NUMBER__5_FIVE;
    #NUMBER__6_SIX;
    #NUMBER__7_SEVEN;
    #NUMBER__8_EIGHT;
    #NUMBER__9_NINE;
    #POSITION_OF_FIRST_CHAR;
    constructor() {
        // Initialization of private fields remains unchanged
        this.#SYMBOL__QUOTE_DOUBLE = "\"";
        this.#SYMBOL__QUOTE_SINGLE = "'";
        this.#SYMBOL__QUOTE_ALT = "`";
        this.#SYMBOL__BRACE_ROUND_OPEN = "(";
        this.#SYMBOL__BRACE_ROUND_CLOSE = ")";
        this.#SYMBOL__BRACE_TRIANGLE_OPEN = "<";
        this.#SYMBOL__BRACE_TRIANGLE_CLOSE = ">";
        this.#SYMBOL__BRACE_SQUARE_OPEN = "[";
        this.#SYMBOL__BRACE_SQUARE_CLOSE = "]";
        this.#SYMBOL__BRACE_FIGURE_OPEN = "{";
        this.#SYMBOL__BRACE_FIGURE_CLOSE = "}";
        this.#SYMBOL__COLON = ":";
        this.#SYMBOL__SEMICOLON = ";";
        this.#SYMBOL__POINT = ".";
        this.#SYMBOL__COMMA = ",";
        this.#SYMBOL__DASH = "-";
        this.#SYMBOL__UNDERSORE = "_";
        this.#SYMBOL__SLASH = "/";
        this.#SYMBOL__SLASH_UPWARDS = "|";
        this.#SYMBOL__DOLLAR = "$";
        this.#SYMBOL__HASH = "#";
        this.#SYMBOL__PERCENTS = "%";
        this.#SYMBOL__AMPERSAND = "&";
        this.#SYMBOL__TILDE = "~";
        this.#SYMBOL__DACH = "^";
        this.#SYMBOL__EQUALITY = "=";
        this.#SYMBOL__ADDITION = "+";
        this.#SYMBOL__EXCLAMATION = "!";
        this.#SYMBOL__QUESTION = "?";
        this.#SYMBOL__BACKGROUNDCOLOR_CHAR = " ";
        this.#SYMBOL__NUMBER__0_ZERO = "0";
        this.#SYMBOL__NUMBER__1_ONE = "1";
        this.#SYMBOL__NUMBER__2_TWO = "2";
        this.#SYMBOL__NUMBER__3_THREE = "3";
        this.#SYMBOL__NUMBER__4_FOUR = "4";
        this.#SYMBOL__NUMBER__5_FIVE = "5";
        this.#SYMBOL__NUMBER__6_SIX = "6";
        this.#SYMBOL__NUMBER__7_SEVEN = "7";
        this.#SYMBOL__NUMBER__8_EIGHT = "8";
        this.#SYMBOL__NUMBER__9_NINE = "9";
        this.#NUMBER__0_ZERO = 0;
        this.#NUMBER__1_ONE = 1;
        this.#NUMBER__2_TWO = 2;
        this.#NUMBER__3_THREE = 3;
        this.#NUMBER__4_FOUR = 4;
        this.#NUMBER__5_FIVE = 5;
        this.#NUMBER__6_SIX = 6;
        this.#NUMBER__7_SEVEN = 7;
        this.#NUMBER__8_EIGHT = 8;
        this.#NUMBER__9_NINE = 9;
        this.#POSITION_OF_FIRST_CHAR = this.#NUMBER__0_ZERO;
    }
    getCharcodeSymbol(inSymbol) {
        return inSymbol.charCodeAt(this.#POSITION_OF_FIRST_CHAR);
    }
    getQuoteDouble() {
        return this.#SYMBOL__QUOTE_DOUBLE;
    }
    getQuoteSingle() {
        return this.#SYMBOL__QUOTE_SINGLE;
    }
    getQuoteAlt() {
        return this.#SYMBOL__QUOTE_ALT;
    }
    getBraceRoundOpen() {
        return this.#SYMBOL__BRACE_ROUND_OPEN;
    }
    getBraceRoundClose() {
        return this.#SYMBOL__BRACE_ROUND_CLOSE;
    }
    getBraceTriangleOpen() {
        return this.#SYMBOL__BRACE_TRIANGLE_OPEN;
    }
    getBraceTriangleClose() {
        return this.#SYMBOL__BRACE_TRIANGLE_CLOSE;
    }
    getBraceSquareOpen() {
        return this.#SYMBOL__BRACE_SQUARE_OPEN;
    }
    getBraceSquareClose() {
        return this.#SYMBOL__BRACE_SQUARE_CLOSE;
    }
    getBraceFigureOpen() {
        return this.#SYMBOL__BRACE_FIGURE_OPEN;
    }
    getBraceFigureClose() {
        return this.#SYMBOL__BRACE_FIGURE_CLOSE;
    }
    getColon() {
        return this.#SYMBOL__COLON;
    }
    getSemicolon() {
        return this.#SYMBOL__SEMICOLON;
    }
    getPoint() {
        return this.#SYMBOL__POINT;
    }
    getComma() {
        return this.#SYMBOL__COMMA;
    }
    getDash() {
        return this.#SYMBOL__DASH;
    }
    getUnderscore() {
        return this.#SYMBOL__UNDERSORE;
    }
    getSlash() {
        return this.#SYMBOL__SLASH;
    }
    getSlashUpwards() {
        return this.#SYMBOL__SLASH_UPWARDS;
    }
    getDollar() {
        return this.#SYMBOL__DOLLAR;
    }
    getSymbol_Hashtag() {
        return this.#SYMBOL__HASH;
    }
    getSymbol_PERCENTS() {
        return this.#SYMBOL__PERCENTS;
    }
    getAmpersand() {
        return this.#SYMBOL__AMPERSAND;
    }
    getTilde() {
        return this.#SYMBOL__TILDE;
    }
    getDach() {
        return this.#SYMBOL__DACH;
    }
    getEquality() {
        return this.#SYMBOL__EQUALITY;
    }
    getAddition() {
        return this.#SYMBOL__ADDITION;
    }
    getExclamation() {
        return this.#SYMBOL__EXCLAMATION;
    }
    getQuestion() {
        return this.#SYMBOL__QUESTION;
    }
    getSymbolBackgroundColor() {
        return this.#SYMBOL__BACKGROUNDCOLOR_CHAR;
    }
    getSymbolNumber_0_Zero() {
        return this.#SYMBOL__NUMBER__0_ZERO;
    }
    getSymbolNumber_1_One() {
        return this.#SYMBOL__NUMBER__1_ONE;
    }
    getSymbolNumber_2_Two() {
        return this.#SYMBOL__NUMBER__2_TWO;
    }
    getSymbolNumber_3_Three() {
        return this.#SYMBOL__NUMBER__3_THREE;
    }
    getSymbolNumber_4_Four() {
        return this.#SYMBOL__NUMBER__4_FOUR;
    }
    getSymbolNumber_5_Five() {
        return this.#SYMBOL__NUMBER__5_FIVE;
    }
    getSymbolNumber_6_Six() {
        return this.#SYMBOL__NUMBER__6_SIX;
    }
    getSymbolNumber_7_Seven() {
        return this.#SYMBOL__NUMBER__7_SEVEN;
    }
    getSymbolNumber_8_Eight() {
        return this.#SYMBOL__NUMBER__8_EIGHT;
    }
    getSymbolNumber_9_Nine() {
        return this.#SYMBOL__NUMBER__9_NINE;
    }
    getNumber_0_Zero() {
        return this.#NUMBER__0_ZERO;
    }
    getNumber_1_One() {
        return this.#NUMBER__1_ONE;
    }
    getNumber_2_Two() {
        return this.#NUMBER__2_TWO;
    }
    getNumber_3_Three() {
        return this.#NUMBER__3_THREE;
    }
    getNumber_4_Four() {
        return this.#NUMBER__4_FOUR;
    }
    getNumber_5_Five() {
        return this.#NUMBER__5_FIVE;
    }
    getNumber_6_Six() {
        return this.#NUMBER__6_SIX;
    }
    getNumber_7_Seven() {
        return this.#NUMBER__7_SEVEN;
    }
    getNumber_8_Eight() {
        return this.#NUMBER__8_EIGHT;
    }
    getNumber_9_Nine() {
        return this.#NUMBER__9_NINE;
    }
}
//# sourceMappingURL=SymbolConstants.js.map