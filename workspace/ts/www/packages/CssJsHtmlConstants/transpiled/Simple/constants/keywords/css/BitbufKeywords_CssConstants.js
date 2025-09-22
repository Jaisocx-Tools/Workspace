class BitbufKeywords_CssConstants extends Keywords_CssConstants {
    _textEncoder;
    #BITBUF__CSS__KEYWORD__IMPORT;
    #BITBUF__CSS__KEYWORD__SRC;
    #BITBUF__CSS__KEYWORD__VAR;
    #BITBUF__CSS__SIZE_UNIT__PX;
    #BITBUF__CSS__SIZE_UNIT__REM;
    #BITBUF__CSS__SIZE_UNIT__PT;
    #BITBUF__CSS__SIZE_UNIT__PERCENTS;
    #BITBUF__CSS__SIZE_UNIT__VH;
    #BITBUF__CSS__SIZE_UNIT__VW;
    #BITBUF__CSS__SIZE__HUNDRED_PERCENTS;
    #BITBUF__CSS__SIZE__HUNDRED_VH;
    #BITBUF__CSS__SIZE__HUNDRED_VW;
    #BITBUF__CSS__NAME_VALUE_JOINER;
    #BITBUF__CSS__LINE_FINISH;
    #BITBUF__CSS__STYLE_VALUE__OPEN;
    #BITBUF__CSS__STYLE_VALUE__CLOSE;
    #BITBUF__CSS__SELECTOR__ID;
    #BITBUF__CSS__SELECTOR__CLASS;
    #BITBUF__CSS__SELECTOR__ATTRIBUTE_OPEN;
    #BITBUF__CSS__SELECTOR__ATTRIBUTE_CLOSE;



    constructor() {
        super();
        this._textEncoder = new TextEncoder();
        this.#BITBUF__CSS__KEYWORD__IMPORT = this._textEncoder.encode(this.getCss_Keyword_Import());
        this.#BITBUF__CSS__KEYWORD__SRC = this._textEncoder.encode(this.getCss_Keyword_Src());
        this.#BITBUF__CSS__KEYWORD__VAR = this._textEncoder.encode(this.getCss_Keyword_Var());
        this.#BITBUF__CSS__SIZE_UNIT__PX = this._textEncoder.encode(this.getCss_SizeUnit_Px());
        this.#BITBUF__CSS__SIZE_UNIT__REM = this._textEncoder.encode(this.getCss_SizeUnit_Rem());
        this.#BITBUF__CSS__SIZE_UNIT__PT = this._textEncoder.encode(this.getCss_SizeUnit_Pt());
        this.#BITBUF__CSS__SIZE_UNIT__PERCENTS = this._textEncoder.encode(this.getCss_SizeUnit_Percents());
        this.#BITBUF__CSS__SIZE_UNIT__VH = this._textEncoder.encode(this.getCss_SizeUnit_Vh());
        this.#BITBUF__CSS__SIZE_UNIT__VW = this._textEncoder.encode(this.getCss_SizeUnit_Vw());
        this.#BITBUF__CSS__SIZE__HUNDRED_PERCENTS = this._textEncoder.encode(this.getCss_Size_HundredPercents());
        this.#BITBUF__CSS__SIZE__HUNDRED_VH = this._textEncoder.encode(this.getCss_Size_HundredVh());
        this.#BITBUF__CSS__SIZE__HUNDRED_VW = this._textEncoder.encode(this.getCss_Size_HundredVw());
        this.#BITBUF__CSS__NAME_VALUE_JOINER = this._textEncoder.encode(this.getCss_NameValueJoiner());
        this.#BITBUF__CSS__LINE_FINISH = this._textEncoder.encode(this.getCss_LineFinish());
        this.#BITBUF__CSS__STYLE_VALUE__OPEN = this._textEncoder.encode(this.getCss_StyleValue_Open());
        this.#BITBUF__CSS__STYLE_VALUE__CLOSE = this._textEncoder.encode(this.getCss_StyleValue_Close());
        this.#BITBUF__CSS__SELECTOR__ID = this._textEncoder.encode(this.getCss_Selector_Id());
        this.#BITBUF__CSS__SELECTOR__CLASS = this._textEncoder.encode(this.getCss_Selector_Class());
        this.#BITBUF__CSS__SELECTOR__ATTRIBUTE_OPEN = this._textEncoder.encode(this.getCss_Selector_Attribute_Open());
        this.#BITBUF__CSS__SELECTOR__ATTRIBUTE_CLOSE = this._textEncoder.encode(this.getCss_Selector_Attribute_Close());
    }



    getBitbuf_Css_Keyword_Import() {
        return this.#BITBUF__CSS__KEYWORD__IMPORT;
    }



    getBitbuf_Css_Keyword_Src() {
        return this.#BITBUF__CSS__KEYWORD__SRC;
    }



    getBitbuf_Css_Keyword_Var() {
        return this.#BITBUF__CSS__KEYWORD__VAR;
    }



    getBitbuf_Css_SizeUnit_Px() {
        return this.#BITBUF__CSS__SIZE_UNIT__PX;
    }



    getBitbuf_Css_SizeUnit_Rem() {
        return this.#BITBUF__CSS__SIZE_UNIT__REM;
    }



    getBitbuf_Css_SizeUnit_Pt() {
        return this.#BITBUF__CSS__SIZE_UNIT__PT;
    }



    getBitbuf_Css_SizeUnit_Percents() {
        return this.#BITBUF__CSS__SIZE_UNIT__PERCENTS;
    }



    getBitbuf_Css_SizeUnit_Vh() {
        return this.#BITBUF__CSS__SIZE_UNIT__VH;
    }



    getBitbuf_Css_SizeUnit_Vw() {
        return this.#BITBUF__CSS__SIZE_UNIT__VW;
    }



    getBitbuf_Css_Size_HundredPercents() {
        return this.#BITBUF__CSS__SIZE__HUNDRED_PERCENTS;
    }



    getBitbuf_Css_Size_HundredVh() {
        return this.#BITBUF__CSS__SIZE__HUNDRED_VH;
    }



    getBitbuf_Css_Size_HundredVw() {
        return this.#BITBUF__CSS__SIZE__HUNDRED_VW;
    }



    getBitbuf_Css_NameValueJoiner() {
        return this.#BITBUF__CSS__NAME_VALUE_JOINER;
    }



    getBitbuf_Css_LineFinish() {
        return this.#BITBUF__CSS__LINE_FINISH;
    }



    getBitbuf_Css_StyleValue_Open() {
        return this.#BITBUF__CSS__STYLE_VALUE__OPEN;
    }



    getBitbuf_Css_StyleValue_Close() {
        return this.#BITBUF__CSS__STYLE_VALUE__CLOSE;
    }



    getBitbuf_Css_Selector_Id() {
        return this.#BITBUF__CSS__SELECTOR__ID;
    }



    getBitbuf_Css_Selector_Class() {
        return this.#BITBUF__CSS__SELECTOR__CLASS;
    }



    getBitbuf_Css_Selector_Attribute_Open() {
        return this.#BITBUF__CSS__SELECTOR__ATTRIBUTE_OPEN;
    }



    getBitbuf_Css_Selector_Attribute_Close() {
        return this.#BITBUF__CSS__SELECTOR__ATTRIBUTE_CLOSE;
    }
}


