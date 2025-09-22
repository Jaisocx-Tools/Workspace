class BitbufKeywords_HtmlEsc_Constants extends Keywords_HtmlEsc_Constants {
    _textEncoder;
    #BITBUF__HTMLESC__SYMBOL__QUOTE_DOUBLE;
    #BITBUF__HTMLESC__SYMBOL__QUOTE_SINGLE;
    #BITBUF__HTMLESC__SYMBOL__QUOTE_ALT;
    #BITBUF__HTMLESC__SYMBOL__BRACE_ROUND_OPEN;
    #BITBUF__HTMLESC__SYMBOL__BRACE_ROUND_CLOSE;
    #BITBUF__HTMLESC__SYMBOL__BRACE_TRIANGLE_OPEN;
    #BITBUF__HTMLESC__SYMBOL__BRACE_TRIANGLE_CLOSE;
    #BITBUF__HTMLESC__SYMBOL__BRACE_SQUARE_OPEN;
    #BITBUF__HTMLESC__SYMBOL__BRACE_SQUARE_CLOSE;
    #BITBUF__HTMLESC__SYMBOL__BRACE_FIGURE_OPEN;
    #BITBUF__HTMLESC__SYMBOL__BRACE_FIGURE_CLOSE;
    #BITBUF__HTMLESC__SYMBOL__COLON;
    #BITBUF__HTMLESC__SYMBOL__SEMICOLON;
    #BITBUF__HTMLESC__SYMBOL__POINT;
    #BITBUF__HTMLESC__SYMBOL__COMMA;
    #BITBUF__HTMLESC__SYMBOL__DASH;
    #BITBUF__HTMLESC__SYMBOL__UNDERSORE;
    #BITBUF__HTMLESC__SYMBOL__SLASH;
    #BITBUF__HTMLESC__SYMBOL__SLASH_UPWARDS;
    #BITBUF__HTMLESC__SYMBOL__DOLLAR;
    #BITBUF__HTMLESC__SYMBOL__HASH;
    #BITBUF__HTMLESC__SYMBOL__PERCENTS;
    #BITBUF__HTMLESC__SYMBOL__AMPERSAND;
    #BITBUF__HTMLESC__SYMBOL__TILDE;
    #BITBUF__HTMLESC__SYMBOL__DACH;
    #BITBUF__HTMLESC__SYMBOL__EQUALITY;
    #BITBUF__HTMLESC__SYMBOL__ADDITION;
    #BITBUF__HTMLESC__SYMBOL__EXCLAMATION;
    #BITBUF__HTMLESC__SYMBOL__QUESTION;
    #BITBUF__HTMLESC__SYMBOL__HTMLESC__SYMBOL__BACKGROUNDCOLOR_CHAR;



    constructor() {
        super();
        this._textEncoder = new TextEncoder();
        this.#BITBUF__HTMLESC__SYMBOL__QUOTE_DOUBLE = this._textEncoder.encode(this.getHtmlEsc_QuoteDouble());
        this.#BITBUF__HTMLESC__SYMBOL__QUOTE_SINGLE = this._textEncoder.encode(this.getHtmlEsc_QuoteSingle());
        this.#BITBUF__HTMLESC__SYMBOL__QUOTE_ALT = this._textEncoder.encode(this.getHtmlEsc_QuoteAlt());
        this.#BITBUF__HTMLESC__SYMBOL__BRACE_ROUND_OPEN = this._textEncoder.encode(this.getHtmlEsc_BraceRoundOpen());
        this.#BITBUF__HTMLESC__SYMBOL__BRACE_ROUND_CLOSE = this._textEncoder.encode(this.getHtmlEsc_BraceRoundClose());
        this.#BITBUF__HTMLESC__SYMBOL__BRACE_TRIANGLE_OPEN = this._textEncoder.encode(this.getHtmlEsc_BraceTriangleOpen());
        this.#BITBUF__HTMLESC__SYMBOL__BRACE_TRIANGLE_CLOSE = this._textEncoder.encode(this.getHtmlEsc_BraceTriangleClose());
        this.#BITBUF__HTMLESC__SYMBOL__BRACE_SQUARE_OPEN = this._textEncoder.encode(this.getHtmlEsc_BraceSquareOpen());
        this.#BITBUF__HTMLESC__SYMBOL__BRACE_SQUARE_CLOSE = this._textEncoder.encode(this.getHtmlEsc_BraceSquareClose());
        this.#BITBUF__HTMLESC__SYMBOL__BRACE_FIGURE_OPEN = this._textEncoder.encode(this.getHtmlEsc_BraceFigureOpen());
        this.#BITBUF__HTMLESC__SYMBOL__BRACE_FIGURE_CLOSE = this._textEncoder.encode(this.getHtmlEsc_BraceFigureClose());
        this.#BITBUF__HTMLESC__SYMBOL__COLON = this._textEncoder.encode(this.getHtmlEsc_Colon());
        this.#BITBUF__HTMLESC__SYMBOL__SEMICOLON = this._textEncoder.encode(this.getHtmlEsc_Semicolon());
        this.#BITBUF__HTMLESC__SYMBOL__POINT = this._textEncoder.encode(this.getHtmlEsc_Point());
        this.#BITBUF__HTMLESC__SYMBOL__COMMA = this._textEncoder.encode(this.getHtmlEsc_Comma());
        this.#BITBUF__HTMLESC__SYMBOL__DASH = this._textEncoder.encode(this.getHtmlEsc_Dash());
        this.#BITBUF__HTMLESC__SYMBOL__UNDERSORE = this._textEncoder.encode(this.getHtmlEsc_Underscore());
        this.#BITBUF__HTMLESC__SYMBOL__SLASH = this._textEncoder.encode(this.getHtmlEsc_Slash());
        this.#BITBUF__HTMLESC__SYMBOL__SLASH_UPWARDS = this._textEncoder.encode(this.getHtmlEsc_SlashUpwards());
        this.#BITBUF__HTMLESC__SYMBOL__DOLLAR = this._textEncoder.encode(this.getHtmlEsc_Dollar());
        this.#BITBUF__HTMLESC__SYMBOL__HASH = this._textEncoder.encode(this.getHtmlEsc_Hash());
        this.#BITBUF__HTMLESC__SYMBOL__PERCENTS = this._textEncoder.encode(this.getHtmlEsc_Symbol_PERCENTS());
        this.#BITBUF__HTMLESC__SYMBOL__AMPERSAND = this._textEncoder.encode(this.getHtmlEsc_Ampersand());
        this.#BITBUF__HTMLESC__SYMBOL__TILDE = this._textEncoder.encode(this.getHtmlEsc_Tilde());
        this.#BITBUF__HTMLESC__SYMBOL__DACH = this._textEncoder.encode(this.getHtmlEsc_Dach());
        this.#BITBUF__HTMLESC__SYMBOL__EQUALITY = this._textEncoder.encode(this.getHtmlEsc_Equality());
        this.#BITBUF__HTMLESC__SYMBOL__ADDITION = this._textEncoder.encode(this.getHtmlEsc_Addition());
        this.#BITBUF__HTMLESC__SYMBOL__EXCLAMATION = this._textEncoder.encode(this.getHtmlEsc_Exclamation());
        this.#BITBUF__HTMLESC__SYMBOL__QUESTION = this._textEncoder.encode(this.getHtmlEsc_Question());
        this.#BITBUF__HTMLESC__SYMBOL__HTMLESC__SYMBOL__BACKGROUNDCOLOR_CHAR = this._textEncoder.encode(this.getHtmlEsc_SymbolBackgroundColor());
    }



    getBitbuf_HtmlEsc_QuoteDouble() {
        return this.#BITBUF__HTMLESC__SYMBOL__QUOTE_DOUBLE;
    }



    getBitbuf_HtmlEsc_QuoteSingle() {
        return this.#BITBUF__HTMLESC__SYMBOL__QUOTE_SINGLE;
    }



    getBitbuf_HtmlEsc_QuoteAlt() {
        return this.#BITBUF__HTMLESC__SYMBOL__QUOTE_ALT;
    }



    getBitbuf_HtmlEsc_BraceRoundOpen() {
        return this.#BITBUF__HTMLESC__SYMBOL__BRACE_ROUND_OPEN;
    }



    getBitbuf_HtmlEsc_BraceRoundClose() {
        return this.#BITBUF__HTMLESC__SYMBOL__BRACE_ROUND_CLOSE;
    }



    getBitbuf_HtmlEsc_BraceTriangleOpen() {
        return this.#BITBUF__HTMLESC__SYMBOL__BRACE_TRIANGLE_OPEN;
    }



    getBitbuf_HtmlEsc_BraceTriangleClose() {
        return this.#BITBUF__HTMLESC__SYMBOL__BRACE_TRIANGLE_CLOSE;
    }



    getBitbuf_HtmlEsc_BraceSquareOpen() {
        return this.#BITBUF__HTMLESC__SYMBOL__BRACE_SQUARE_OPEN;
    }



    getBitbuf_HtmlEsc_BraceSquareClose() {
        return this.#BITBUF__HTMLESC__SYMBOL__BRACE_SQUARE_CLOSE;
    }



    getBitbuf_HtmlEsc_BraceFigureOpen() {
        return this.#BITBUF__HTMLESC__SYMBOL__BRACE_FIGURE_OPEN;
    }



    getBitbuf_HtmlEsc_BraceFigureClose() {
        return this.#BITBUF__HTMLESC__SYMBOL__BRACE_FIGURE_CLOSE;
    }



    getBitbuf_HtmlEsc_Colon() {
        return this.#BITBUF__HTMLESC__SYMBOL__COLON;
    }



    getBitbuf_HtmlEsc_Semicolon() {
        return this.#BITBUF__HTMLESC__SYMBOL__SEMICOLON;
    }



    getBitbuf_HtmlEsc_Point() {
        return this.#BITBUF__HTMLESC__SYMBOL__POINT;
    }



    getBitbuf_HtmlEsc_Comma() {
        return this.#BITBUF__HTMLESC__SYMBOL__COMMA;
    }



    getBitbuf_HtmlEsc_Dash() {
        return this.#BITBUF__HTMLESC__SYMBOL__DASH;
    }



    getBitbuf_HtmlEsc_Underscore() {
        return this.#BITBUF__HTMLESC__SYMBOL__UNDERSORE;
    }



    getBitbuf_HtmlEsc_Slash() {
        return this.#BITBUF__HTMLESC__SYMBOL__SLASH;
    }



    getBitbuf_HtmlEsc_SlashUpwards() {
        return this.#BITBUF__HTMLESC__SYMBOL__SLASH_UPWARDS;
    }



    getBitbuf_HtmlEsc_Dollar() {
        return this.#BITBUF__HTMLESC__SYMBOL__DOLLAR;
    }



    getBitbuf_HtmlEsc_Hash() {
        return this.#BITBUF__HTMLESC__SYMBOL__HASH;
    }



    getBitbuf_HtmlEsc_Symbol_PERCENTS() {
        return this.#BITBUF__HTMLESC__SYMBOL__PERCENTS;
    }



    getBitbuf_HtmlEsc_Ampersand() {
        return this.#BITBUF__HTMLESC__SYMBOL__AMPERSAND;
    }



    getBitbuf_HtmlEsc_Tilde() {
        return this.#BITBUF__HTMLESC__SYMBOL__TILDE;
    }



    getBitbuf_HtmlEsc_Dach() {
        return this.#BITBUF__HTMLESC__SYMBOL__DACH;
    }



    getBitbuf_HtmlEsc_Equality() {
        return this.#BITBUF__HTMLESC__SYMBOL__EQUALITY;
    }



    getBitbuf_HtmlEsc_Addition() {
        return this.#BITBUF__HTMLESC__SYMBOL__ADDITION;
    }



    getBitbuf_HtmlEsc_Exclamation() {
        return this.#BITBUF__HTMLESC__SYMBOL__EXCLAMATION;
    }



    getBitbuf_HtmlEsc_Question() {
        return this.#BITBUF__HTMLESC__SYMBOL__QUESTION;
    }



    getBitbuf_HtmlEsc_SymbolBackgroundColor() {
        return this.#BITBUF__HTMLESC__SYMBOL__HTMLESC__SYMBOL__BACKGROUNDCOLOR_CHAR;
    }
}


