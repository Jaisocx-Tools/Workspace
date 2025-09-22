import { SymbolConstants } from "../../symbols/SymbolConstants.js";
export class Keywords_CssConstants extends SymbolConstants {
    #CSS_KEYWORD__IMPORT;
    #CSS_KEYWORD__SRC;
    #CSS_KEYWORD__VAR;
    #CSS_SIZE_UNIT__PX;
    #CSS_SIZE_UNIT__REM;
    #CSS_SIZE_UNIT__PT;
    #CSS_SIZE_UNIT__PERCENTS;
    #CSS_SIZE_UNIT__VH;
    #CSS_SIZE_UNIT__VW;
    #CSS_SIZE__HUNDRED_PERCENTS;
    #CSS_SIZE__HUNDRED_VH;
    #CSS_SIZE__HUNDRED_VW;
    #CSS__NAME_VALUE_JOINER;
    #CSS__LINE_FINISH;
    #CSS__STYLE_VALUE__OPEN;
    #CSS__STYLE_VALUE__CLOSE;
    #CSS__SELECTOR__ID;
    #CSS__SELECTOR__CLASS;
    #CSS__SELECTOR__ATTRIBUTE_OPEN;
    #CSS__SELECTOR__ATTRIBUTE_CLOSE;
    //  #CSS__: string;
    constructor() {
        super();
        this.#CSS_KEYWORD__IMPORT = "@import";
        this.#CSS_KEYWORD__SRC = "src";
        this.#CSS_KEYWORD__VAR = "var";
        this.#CSS_SIZE_UNIT__PX = "px";
        this.#CSS_SIZE_UNIT__REM = "rem";
        this.#CSS_SIZE_UNIT__PT = "pt";
        this.#CSS_SIZE_UNIT__PERCENTS = this.getSymbol_PERCENTS();
        this.#CSS_SIZE_UNIT__VH = "vh";
        this.#CSS_SIZE_UNIT__VW = "vw";
        this.#CSS_SIZE__HUNDRED_PERCENTS = "100%";
        this.#CSS_SIZE__HUNDRED_VH = "100vh";
        this.#CSS_SIZE__HUNDRED_VW = "100vw";
        this.#CSS__NAME_VALUE_JOINER = this.getColon();
        this.#CSS__LINE_FINISH = this.getSemicolon();
        this.#CSS__STYLE_VALUE__OPEN = this.getBraceFigureOpen();
        this.#CSS__STYLE_VALUE__CLOSE = this.getBraceFigureClose();
        this.#CSS__SELECTOR__ID = this.getSymbol_Hashtag();
        this.#CSS__SELECTOR__CLASS = this.getPoint();
        this.#CSS__SELECTOR__ATTRIBUTE_OPEN = this.getBraceSquareOpen();
        this.#CSS__SELECTOR__ATTRIBUTE_CLOSE = this.getBraceSquareClose();
    }
    getCss_Keyword_Import() {
        return this.#CSS_KEYWORD__IMPORT;
    }
    getCss_Keyword_Src() {
        return this.#CSS_KEYWORD__SRC;
    }
    getCss_Keyword_Var() {
        return this.#CSS_KEYWORD__VAR;
    }
    getCss_SizeUnit_Px() {
        return this.#CSS_SIZE_UNIT__PX;
    }
    getCss_SizeUnit_Rem() {
        return this.#CSS_SIZE_UNIT__REM;
    }
    getCss_SizeUnit_Pt() {
        return this.#CSS_SIZE_UNIT__PT;
    }
    getCss_SizeUnit_Percents() {
        return this.#CSS_SIZE_UNIT__PERCENTS;
    }
    getCss_SizeUnit_Vh() {
        return this.#CSS_SIZE_UNIT__VH;
    }
    getCss_SizeUnit_Vw() {
        return this.#CSS_SIZE_UNIT__VW;
    }
    getCss_Size_HundredPercents() {
        return this.#CSS_SIZE__HUNDRED_PERCENTS;
    }
    getCss_Size_HundredVh() {
        return this.#CSS_SIZE__HUNDRED_VH;
    }
    getCss_Size_HundredVw() {
        return this.#CSS_SIZE__HUNDRED_VW;
    }
    getCss_NameValueJoiner() {
        return this.#CSS__NAME_VALUE_JOINER;
    }
    getCss_LineFinish() {
        return this.#CSS__LINE_FINISH;
    }
    getCss_StyleValue_Open() {
        return this.#CSS__STYLE_VALUE__OPEN;
    }
    getCss_StyleValue_Close() {
        return this.#CSS__STYLE_VALUE__CLOSE;
    }
    getCss_Selector_Id() {
        return this.#CSS__SELECTOR__ID;
    }
    getCss_Selector_Class() {
        return this.#CSS__SELECTOR__CLASS;
    }
    getCss_Selector_Attribute_Open() {
        return this.#CSS__SELECTOR__ATTRIBUTE_OPEN;
    }
    getCss_Selector_Attribute_Close() {
        return this.#CSS__SELECTOR__ATTRIBUTE_CLOSE;
    }
}
//# sourceMappingURL=Keywords_CssConstants.js.map