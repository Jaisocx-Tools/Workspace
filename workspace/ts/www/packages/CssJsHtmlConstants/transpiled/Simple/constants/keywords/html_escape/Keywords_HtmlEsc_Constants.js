class Keywords_HtmlEsc_Constants extends CharcodeSymbolConstants {
    #HTMLESC__SYMBOL__QUOTE_DOUBLE;
    #HTMLESC__SYMBOL__QUOTE_SINGLE;
    #HTMLESC__SYMBOL__QUOTE_ALT;
    #HTMLESC__SYMBOL__BRACE_ROUND_OPEN;
    #HTMLESC__SYMBOL__BRACE_ROUND_CLOSE;
    #HTMLESC__SYMBOL__BRACE_TRIANGLE_OPEN;
    #HTMLESC__SYMBOL__BRACE_TRIANGLE_CLOSE;
    #HTMLESC__SYMBOL__BRACE_SQUARE_OPEN;
    #HTMLESC__SYMBOL__BRACE_SQUARE_CLOSE;
    #HTMLESC__SYMBOL__BRACE_FIGURE_OPEN;
    #HTMLESC__SYMBOL__BRACE_FIGURE_CLOSE;
    #HTMLESC__SYMBOL__COLON;
    #HTMLESC__SYMBOL__SEMICOLON;
    #HTMLESC__SYMBOL__POINT;
    #HTMLESC__SYMBOL__COMMA;
    #HTMLESC__SYMBOL__DASH;
    #HTMLESC__SYMBOL__UNDERSORE;
    #HTMLESC__SYMBOL__SLASH;
    #HTMLESC__SYMBOL__SLASH_UPWARDS;
    #HTMLESC__SYMBOL__DOLLAR;
    #HTMLESC__SYMBOL__HASH;
    #HTMLESC__SYMBOL__PERCENTS;
    #HTMLESC__SYMBOL__AMPERSAND;
    #HTMLESC__SYMBOL__TILDE;
    #HTMLESC__SYMBOL__DACH;
    #HTMLESC__SYMBOL__EQUALITY;
    #HTMLESC__SYMBOL__ADDITION;
    #HTMLESC__SYMBOL__EXCLAMATION;
    #HTMLESC__SYMBOL__QUESTION;
    #HTMLESC__SYMBOL__BACKGROUNDCOLOR_CHAR;



    constructor() {
        super();
        this.#HTMLESC__SYMBOL__QUOTE_DOUBLE = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_QuoteDouble());
        this.#HTMLESC__SYMBOL__QUOTE_SINGLE = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_QuoteSingle());
        this.#HTMLESC__SYMBOL__QUOTE_ALT = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_QuoteAlt());
        this.#HTMLESC__SYMBOL__BRACE_ROUND_OPEN = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_BraceRoundOpen());
        this.#HTMLESC__SYMBOL__BRACE_ROUND_CLOSE = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_BraceRoundClose());
        this.#HTMLESC__SYMBOL__BRACE_TRIANGLE_OPEN = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_BraceTriangleOpen());
        this.#HTMLESC__SYMBOL__BRACE_TRIANGLE_CLOSE = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_BraceTriangleClose());
        this.#HTMLESC__SYMBOL__BRACE_SQUARE_OPEN = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_BraceSquareOpen());
        this.#HTMLESC__SYMBOL__BRACE_SQUARE_CLOSE = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_BraceSquareClose());
        this.#HTMLESC__SYMBOL__BRACE_FIGURE_OPEN = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_BraceFigureOpen());
        this.#HTMLESC__SYMBOL__BRACE_FIGURE_CLOSE = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_BraceFigureClose());
        this.#HTMLESC__SYMBOL__COLON = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_Colon());
        this.#HTMLESC__SYMBOL__SEMICOLON = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_Semicolon());
        this.#HTMLESC__SYMBOL__POINT = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_Point());
        this.#HTMLESC__SYMBOL__COMMA = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_Comma());
        this.#HTMLESC__SYMBOL__DASH = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_Dash());
        this.#HTMLESC__SYMBOL__UNDERSORE = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_Underscore());
        this.#HTMLESC__SYMBOL__SLASH = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_Slash());
        this.#HTMLESC__SYMBOL__SLASH_UPWARDS = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_SlashUpwards());
        this.#HTMLESC__SYMBOL__DOLLAR = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_Dollar());
        this.#HTMLESC__SYMBOL__HASH = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_Hash());
        this.#HTMLESC__SYMBOL__PERCENTS = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_Symbol_PERCENTS());
        this.#HTMLESC__SYMBOL__AMPERSAND = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_Ampersand());
        this.#HTMLESC__SYMBOL__TILDE = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_Tilde());
        this.#HTMLESC__SYMBOL__DACH = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_Dach());
        this.#HTMLESC__SYMBOL__EQUALITY = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_Equality());
        this.#HTMLESC__SYMBOL__ADDITION = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_Addition());
        this.#HTMLESC__SYMBOL__EXCLAMATION = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_Exclamation());
        this.#HTMLESC__SYMBOL__QUESTION = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_Question());
        this.#HTMLESC__SYMBOL__BACKGROUNDCOLOR_CHAR = this.getHtmlEscapedSymbol_byCharcode(this.getCharcode_SymbolBackgroundColor());
    }



    getHtmlEscapedSymbol_byCharcode(inChar) {
        let locCharcode = inChar;
        let asStringSymbolCharcode = ("" + locCharcode);
        let locPos_0_Ampersand = this.getAmpersand();
        let locPos_1_SymbolHashtag = this.getSymbol_Hashtag();
        let locPos_2_SymbolNumber_0_Zero = this.getSymbolNumber_0_Zero();
        let locPos_Last_Semicolon = this.getSemicolon();
        let htmlSymbolEscapedArray = [
            locPos_0_Ampersand,
            locPos_1_SymbolHashtag,
            locPos_2_SymbolNumber_0_Zero,
            asStringSymbolCharcode,
            locPos_Last_Semicolon
        ];
        let retVal_htmlEscapedSymbol = htmlSymbolEscapedArray.join("");


        return retVal_htmlEscapedSymbol;
    }



    getHtmlEscapedSymbol_bySymbol(inSymbol) {
        let locSymbolCharcode = this.getCharcodeSymbol(inSymbol);
        let retVal_htmlEscapedSymbol = this.getHtmlEscapedSymbol_byCharcode(locSymbolCharcode);


        return retVal_htmlEscapedSymbol;
    }



    getHtmlEsc_QuoteDouble() {
        return this.#HTMLESC__SYMBOL__QUOTE_DOUBLE;
    }



    getHtmlEsc_QuoteSingle() {
        return this.#HTMLESC__SYMBOL__QUOTE_SINGLE;
    }



    getHtmlEsc_QuoteAlt() {
        return this.#HTMLESC__SYMBOL__QUOTE_ALT;
    }



    getHtmlEsc_BraceRoundOpen() {
        return this.#HTMLESC__SYMBOL__BRACE_ROUND_OPEN;
    }



    getHtmlEsc_BraceRoundClose() {
        return this.#HTMLESC__SYMBOL__BRACE_ROUND_CLOSE;
    }



    getHtmlEsc_BraceTriangleOpen() {
        return this.#HTMLESC__SYMBOL__BRACE_TRIANGLE_OPEN;
    }



    getHtmlEsc_BraceTriangleClose() {
        return this.#HTMLESC__SYMBOL__BRACE_TRIANGLE_CLOSE;
    }



    getHtmlEsc_BraceSquareOpen() {
        return this.#HTMLESC__SYMBOL__BRACE_SQUARE_OPEN;
    }



    getHtmlEsc_BraceSquareClose() {
        return this.#HTMLESC__SYMBOL__BRACE_SQUARE_CLOSE;
    }



    getHtmlEsc_BraceFigureOpen() {
        return this.#HTMLESC__SYMBOL__BRACE_FIGURE_OPEN;
    }



    getHtmlEsc_BraceFigureClose() {
        return this.#HTMLESC__SYMBOL__BRACE_FIGURE_CLOSE;
    }



    getHtmlEsc_Colon() {
        return this.#HTMLESC__SYMBOL__COLON;
    }



    getHtmlEsc_Semicolon() {
        return this.#HTMLESC__SYMBOL__SEMICOLON;
    }



    getHtmlEsc_Point() {
        return this.#HTMLESC__SYMBOL__POINT;
    }



    getHtmlEsc_Comma() {
        return this.#HTMLESC__SYMBOL__COMMA;
    }



    getHtmlEsc_Dash() {
        return this.#HTMLESC__SYMBOL__DASH;
    }



    getHtmlEsc_Underscore() {
        return this.#HTMLESC__SYMBOL__UNDERSORE;
    }



    getHtmlEsc_Slash() {
        return this.#HTMLESC__SYMBOL__SLASH;
    }



    getHtmlEsc_SlashUpwards() {
        return this.#HTMLESC__SYMBOL__SLASH_UPWARDS;
    }



    getHtmlEsc_Dollar() {
        return this.#HTMLESC__SYMBOL__DOLLAR;
    }



    getHtmlEsc_Hash() {
        return this.#HTMLESC__SYMBOL__HASH;
    }



    getHtmlEsc_Symbol_PERCENTS() {
        return this.#HTMLESC__SYMBOL__PERCENTS;
    }



    getHtmlEsc_Ampersand() {
        return this.#HTMLESC__SYMBOL__AMPERSAND;
    }



    getHtmlEsc_Tilde() {
        return this.#HTMLESC__SYMBOL__TILDE;
    }



    getHtmlEsc_Dach() {
        return this.#HTMLESC__SYMBOL__DACH;
    }



    getHtmlEsc_Equality() {
        return this.#HTMLESC__SYMBOL__EQUALITY;
    }



    getHtmlEsc_Addition() {
        return this.#HTMLESC__SYMBOL__ADDITION;
    }



    getHtmlEsc_Exclamation() {
        return this.#HTMLESC__SYMBOL__EXCLAMATION;
    }



    getHtmlEsc_Question() {
        return this.#HTMLESC__SYMBOL__QUESTION;
    }



    getHtmlEsc_SymbolBackgroundColor() {
        return this.#HTMLESC__SYMBOL__BACKGROUNDCOLOR_CHAR;
    }
}


