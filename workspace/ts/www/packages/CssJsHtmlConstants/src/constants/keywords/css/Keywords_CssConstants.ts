import { SymbolConstants } from "./SymbolConstants.js";



export class Keywords_CssConstants extends SymbolConstants {

  #CSS_SIZE_UNIT__PX: string;
  #CSS_SIZE_UNIT__REM: string;
  #CSS_SIZE_UNIT__PT: string;
  #CSS_SIZE_UNIT__PERCENTS: string;
  #CSS_SIZE_UNIT__VH: string;
  #CSS_SIZE_UNIT__VW: string;

  #CSS_SIZE__HUNDRED_PERCENTS: string;
  #CSS_SIZE__HUNDRED_VH: string;
  #CSS_SIZE__HUNDRED_VW: string;

  #CSS__NAME_VALUE_JOINER: string;
  #CSS__LINE_FINISH: string;

  #CSS__STYLE_VALUE__OPEN: string;
  #CSS__STYLE_VALUE__CLOSE: string;

  #CSS__SELECTOR__ID: string;
  #CSS__SELECTOR__CLASS: string;

  #CSS__SELECTOR__ATTRIBUTE_OPEN: string;
  #CSS__SELECTOR__ATTRIBUTE_CLOSE: string;

//  #CSS__: string;



  constructor() {

    super();

    this.#CSS_KEYWORD__IMPORT        = "@import";
    this.#CSS_KEYWORD__SRC           = "src";
    this.#CSS_KEYWORD__VAR           = "var";

    this.#CSS_SIZE_UNIT__PX          = "px";
    this.#CSS_SIZE_UNIT__REM         = "rem";
    this.#CSS_SIZE_UNIT__PT          = "pt";
    this.#CSS_SIZE_UNIT__PERCENTS    = this.getSymbol_PERCENTS();
    this.#CSS_SIZE_UNIT__VH          = "vh";
    this.#CSS_SIZE_UNIT__WV          = "wv";

    this.#CSS_SIZE__HUNDRED_PERCENTS = "100%";
    this.#CSS_SIZE__HUNDRED_VH       = "100vh";
    this.#CSS_SIZE__HUNDRED_WV       = "100wv";

    this.#CSS__NAME_VALUE_JOINER     = this.getColon();
    this.#CSS__LINE_FINISH           = this.getSemicolon();

    this.#CSS__STYLE_VALUE__OPEN     = this.getBraceFigureOpen();
    this.#CSS__STYLE_VALUE__CLOSE    = this.getBraceFigureClose();

    this.#CSS__SELECTOR__ID          = this.getSymbol_Hashtag();
    this.#CSS__SELECTOR__CLASS       = this.getPoint();

    this.#CSS__SELECTOR__ATTRIBUTE_OPEN  = this.getBraceSquareOpen();
    this.#CSS__SELECTOR__ATTRIBUTE_CLOSE = this.getBraceSquareClose();

  }

}


