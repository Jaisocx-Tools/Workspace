import { TextEncoder } from "util";
import { Keywords_CssConstants } from "./Keywords_CssConstants.js";



export class BitbufKeywords_CssConstants extends Keywords_CssConstants {

  _textEncoder: TextEncoder;

  #BITBUF__CSS__KEYWORD__IMPORT:                     Uint8Array;
  #BITBUF__CSS__KEYWORD__SRC:                        Uint8Array;
  #BITBUF__CSS__KEYWORD__VAR:                        Uint8Array;

  #BITBUF__CSS__SIZE_UNIT__PX:                       Uint8Array;
  #BITBUF__CSS__SIZE_UNIT__REM:                      Uint8Array;
  #BITBUF__CSS__SIZE_UNIT__PT:                       Uint8Array;
  #BITBUF__CSS__SIZE_UNIT__PERCENTS:                 Uint8Array;
  #BITBUF__CSS__SIZE_UNIT__VH:                       Uint8Array;
  #BITBUF__CSS__SIZE_UNIT__VW:                       Uint8Array;

  #BITBUF__CSS__SIZE__HUNDRED_PERCENTS:              Uint8Array;
  #BITBUF__CSS__SIZE__HUNDRED_VH:                    Uint8Array;
  #BITBUF__CSS__SIZE__HUNDRED_VW:                    Uint8Array;

  #BITBUF__CSS__NAME_VALUE_JOINER:                   Uint8Array;
  #BITBUF__CSS__LINE_FINISH:                         Uint8Array;

  #BITBUF__CSS__STYLE_VALUE__OPEN:                   Uint8Array;
  #BITBUF__CSS__STYLE_VALUE__CLOSE:                  Uint8Array;

  #BITBUF__CSS__SELECTOR__ID:                        Uint8Array;
  #BITBUF__CSS__SELECTOR__CLASS:                     Uint8Array;

  #BITBUF__CSS__SELECTOR__ATTRIBUTE_OPEN:            Uint8Array;
  #BITBUF__CSS__SELECTOR__ATTRIBUTE_CLOSE:           Uint8Array;



  constructor() {
    super();

    this._textEncoder = new TextEncoder();



    this.#BITBUF__CSS__KEYWORD__IMPORT                 = this._textEncoder.encode( this.getCss_Keyword_Import() );
    this.#BITBUF__CSS__KEYWORD__SRC                    = this._textEncoder.encode( this.getCss_Keyword_Src() );
    this.#BITBUF__CSS__KEYWORD__VAR                    = this._textEncoder.encode( this.getCss_Keyword_Var() );

    this.#BITBUF__CSS__SIZE_UNIT__PX                   = this._textEncoder.encode( this.getCss_SizeUnit_Px() );
    this.#BITBUF__CSS__SIZE_UNIT__REM                  = this._textEncoder.encode( this.getCss_SizeUnit_Rem() );
    this.#BITBUF__CSS__SIZE_UNIT__PT                   = this._textEncoder.encode( this.getCss_SizeUnit_Pt() );
    this.#BITBUF__CSS__SIZE_UNIT__PERCENTS             = this._textEncoder.encode( this.getCss_SizeUnit_Percents() );
    this.#BITBUF__CSS__SIZE_UNIT__VH                   = this._textEncoder.encode( this.getCss_SizeUnit_Vh() );
    this.#BITBUF__CSS__SIZE_UNIT__VW                   = this._textEncoder.encode( this.getCss_SizeUnit_Vw() );

    this.#BITBUF__CSS__SIZE__HUNDRED_PERCENTS          = this._textEncoder.encode( this.getCss_Size_HundredPercents() );
    this.#BITBUF__CSS__SIZE__HUNDRED_VH                = this._textEncoder.encode( this.getCss_Size_HundredVh() );
    this.#BITBUF__CSS__SIZE__HUNDRED_VW                = this._textEncoder.encode( this.getCss_Size_HundredVw() );

    this.#BITBUF__CSS__NAME_VALUE_JOINER               = this._textEncoder.encode( this.getCss_NameValueJoiner() );
    this.#BITBUF__CSS__LINE_FINISH                     = this._textEncoder.encode( this.getCss_LineFinish() );

    this.#BITBUF__CSS__STYLE_VALUE__OPEN               = this._textEncoder.encode( this.getCss_StyleValue_Open() );
    this.#BITBUF__CSS__STYLE_VALUE__CLOSE              = this._textEncoder.encode( this.getCss_StyleValue_Close() );

    this.#BITBUF__CSS__SELECTOR__ID                    = this._textEncoder.encode( this.getCss_Selector_Id() );
    this.#BITBUF__CSS__SELECTOR__CLASS                 = this._textEncoder.encode( this.getCss_Selector_Class() );

    this.#BITBUF__CSS__SELECTOR__ATTRIBUTE_OPEN        = this._textEncoder.encode( this.getCss_Selector_Attribute_Open() );
    this.#BITBUF__CSS__SELECTOR__ATTRIBUTE_CLOSE       = this._textEncoder.encode( this.getCss_Selector_Attribute_Close() );

  }



  public getBitbuf_Css_Keyword_Import():         Uint8Array {
    return this.#BITBUF__CSS__KEYWORD__IMPORT; }



  public getBitbuf_Css_Keyword_Src():            Uint8Array {
    return this.#BITBUF__CSS__KEYWORD__SRC; }



  public getBitbuf_Css_Keyword_Var():            Uint8Array {
    return this.#BITBUF__CSS__KEYWORD__VAR; }



  public getBitbuf_Css_SizeUnit_Px():            Uint8Array {
    return this.#BITBUF__CSS__SIZE_UNIT__PX; }



  public getBitbuf_Css_SizeUnit_Rem():           Uint8Array {
    return this.#BITBUF__CSS__SIZE_UNIT__REM; }



  public getBitbuf_Css_SizeUnit_Pt():            Uint8Array {
    return this.#BITBUF__CSS__SIZE_UNIT__PT; }



  public getBitbuf_Css_SizeUnit_Percents():      Uint8Array {
    return this.#BITBUF__CSS__SIZE_UNIT__PERCENTS; }



  public getBitbuf_Css_SizeUnit_Vh():            Uint8Array {
    return this.#BITBUF__CSS__SIZE_UNIT__VH; }



  public getBitbuf_Css_SizeUnit_Vw():            Uint8Array {
    return this.#BITBUF__CSS__SIZE_UNIT__VW; }



  public getBitbuf_Css_Size_HundredPercents():   Uint8Array {
    return this.#BITBUF__CSS__SIZE__HUNDRED_PERCENTS; }



  public getBitbuf_Css_Size_HundredVh():         Uint8Array {
    return this.#BITBUF__CSS__SIZE__HUNDRED_VH; }



  public getBitbuf_Css_Size_HundredVw():         Uint8Array {
    return this.#BITBUF__CSS__SIZE__HUNDRED_VW; }



  public getBitbuf_Css_NameValueJoiner():        Uint8Array {
    return this.#BITBUF__CSS__NAME_VALUE_JOINER; }



  public getBitbuf_Css_LineFinish():             Uint8Array {
    return this.#BITBUF__CSS__LINE_FINISH; }



  public getBitbuf_Css_StyleValue_Open():        Uint8Array {
    return this.#BITBUF__CSS__STYLE_VALUE__OPEN; }



  public getBitbuf_Css_StyleValue_Close():       Uint8Array {
    return this.#BITBUF__CSS__STYLE_VALUE__CLOSE; }



  public getBitbuf_Css_Selector_Id():            Uint8Array {
    return this.#BITBUF__CSS__SELECTOR__ID; }



  public getBitbuf_Css_Selector_Class():         Uint8Array {
    return this.#BITBUF__CSS__SELECTOR__CLASS; }



  public getBitbuf_Css_Selector_Attribute_Open(): Uint8Array {
    return this.#BITBUF__CSS__SELECTOR__ATTRIBUTE_OPEN; }



  public getBitbuf_Css_Selector_Attribute_Close(): Uint8Array {
    return this.#BITBUF__CSS__SELECTOR__ATTRIBUTE_CLOSE; }

}


