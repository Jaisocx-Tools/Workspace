import { SymbolConstants } from "../../symbols/SymbolConstants.js";



export class Keywords_CssConstants extends SymbolConstants {

  #CSS_KEYWORD__IMPORT: string;
  #CSS_KEYWORD__SRC: string;
  #CSS_KEYWORD__VAR: string;

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
    this.#CSS_SIZE_UNIT__VW          = "vw";

    this.#CSS_SIZE__HUNDRED_PERCENTS = "100%";
    this.#CSS_SIZE__HUNDRED_VH       = "100vh";
    this.#CSS_SIZE__HUNDRED_VW       = "100vw";

    this.#CSS__NAME_VALUE_JOINER     = this.getColon();
    this.#CSS__LINE_FINISH           = this.getSemicolon();

    this.#CSS__STYLE_VALUE__OPEN     = this.getBraceFigureOpen();
    this.#CSS__STYLE_VALUE__CLOSE    = this.getBraceFigureClose();

    this.#CSS__SELECTOR__ID          = this.getSymbol_Hashtag();
    this.#CSS__SELECTOR__CLASS       = this.getPoint();

    this.#CSS__SELECTOR__ATTRIBUTE_OPEN  = this.getBraceSquareOpen();
    this.#CSS__SELECTOR__ATTRIBUTE_CLOSE = this.getBraceSquareClose();

  }



  public getCss_Keyword_Import(): string {
    return this.#CSS_KEYWORD__IMPORT; }



  public getCss_Keyword_Src(): string {
    return this.#CSS_KEYWORD__SRC; }



  public getCss_Keyword_Var(): string {
    return this.#CSS_KEYWORD__VAR; }



  public getCss_SizeUnit_Px(): string {
    return this.#CSS_SIZE_UNIT__PX; }



  public getCss_SizeUnit_Rem(): string {
    return this.#CSS_SIZE_UNIT__REM; }



  public getCss_SizeUnit_Pt(): string {
    return this.#CSS_SIZE_UNIT__PT; }



  public getCss_SizeUnit_Percents(): string {
    return this.#CSS_SIZE_UNIT__PERCENTS; }



  public getCss_SizeUnit_Vh(): string {
    return this.#CSS_SIZE_UNIT__VH; }



  public getCss_SizeUnit_Vw(): string {
    return this.#CSS_SIZE_UNIT__VW; }



  public getCss_Size_HundredPercents(): string {
    return this.#CSS_SIZE__HUNDRED_PERCENTS; }



  public getCss_Size_HundredVh(): string {
    return this.#CSS_SIZE__HUNDRED_VH; }



  public getCss_Size_HundredVw(): string {
    return this.#CSS_SIZE__HUNDRED_VW; }



  public getCss_NameValueJoiner(): string {
    return this.#CSS__NAME_VALUE_JOINER; }



  public getCss_LineFinish(): string {
    return this.#CSS__LINE_FINISH; }



  public getCss_StyleValue_Open(): string {
    return this.#CSS__STYLE_VALUE__OPEN; }



  public getCss_StyleValue_Close(): string {
    return this.#CSS__STYLE_VALUE__CLOSE; }



  public getCss_Selector_Id(): string {
    return this.#CSS__SELECTOR__ID; }



  public getCss_Selector_Class(): string {
    return this.#CSS__SELECTOR__CLASS; }



  public getCss_Selector_Attribute_Open(): string {
    return this.#CSS__SELECTOR__ATTRIBUTE_OPEN; }



  public getCss_Selector_Attribute_Close(): string {
    return this.#CSS__SELECTOR__ATTRIBUTE_CLOSE; }

}


