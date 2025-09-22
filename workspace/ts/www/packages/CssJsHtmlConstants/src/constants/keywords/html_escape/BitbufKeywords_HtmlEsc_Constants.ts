import { TextEncoder } from "util";
import { Keywords_HtmlEsc_Constants } from "./Keywords_HtmlEsc_Constants.js";



export class BitbufKeywords_HtmlEsc_Constants extends Keywords_HtmlEsc_Constants {

  _textEncoder: TextEncoder;

  #BITBUF__HTMLESC__SYMBOL__QUOTE_DOUBLE:                    Uint8Array;
  #BITBUF__HTMLESC__SYMBOL__QUOTE_SINGLE:                    Uint8Array;
  #BITBUF__HTMLESC__SYMBOL__QUOTE_ALT:                       Uint8Array;

  #BITBUF__HTMLESC__SYMBOL__BRACE_ROUND_OPEN:                Uint8Array;
  #BITBUF__HTMLESC__SYMBOL__BRACE_ROUND_CLOSE:               Uint8Array;

  #BITBUF__HTMLESC__SYMBOL__BRACE_TRIANGLE_OPEN:             Uint8Array;
  #BITBUF__HTMLESC__SYMBOL__BRACE_TRIANGLE_CLOSE:            Uint8Array;

  #BITBUF__HTMLESC__SYMBOL__BRACE_SQUARE_OPEN:               Uint8Array;
  #BITBUF__HTMLESC__SYMBOL__BRACE_SQUARE_CLOSE:              Uint8Array;

  #BITBUF__HTMLESC__SYMBOL__BRACE_FIGURE_OPEN:               Uint8Array;
  #BITBUF__HTMLESC__SYMBOL__BRACE_FIGURE_CLOSE:              Uint8Array;

  #BITBUF__HTMLESC__SYMBOL__COLON:                           Uint8Array;
  #BITBUF__HTMLESC__SYMBOL__SEMICOLON:                       Uint8Array;

  #BITBUF__HTMLESC__SYMBOL__POINT:                           Uint8Array;
  #BITBUF__HTMLESC__SYMBOL__COMMA:                           Uint8Array;

  #BITBUF__HTMLESC__SYMBOL__DASH:                            Uint8Array;
  #BITBUF__HTMLESC__SYMBOL__UNDERSORE:                       Uint8Array;

  #BITBUF__HTMLESC__SYMBOL__SLASH:                           Uint8Array;
  #BITBUF__HTMLESC__SYMBOL__SLASH_UPWARDS:                   Uint8Array;

  #BITBUF__HTMLESC__SYMBOL__DOLLAR:                          Uint8Array;
  #BITBUF__HTMLESC__SYMBOL__HASH:                            Uint8Array;
  #BITBUF__HTMLESC__SYMBOL__PERCENTS:                        Uint8Array;

  #BITBUF__HTMLESC__SYMBOL__AMPERSAND:                       Uint8Array;
  #BITBUF__HTMLESC__SYMBOL__TILDE:                           Uint8Array;
  #BITBUF__HTMLESC__SYMBOL__DACH:                            Uint8Array;
  #BITBUF__HTMLESC__SYMBOL__EQUALITY:                        Uint8Array;
  #BITBUF__HTMLESC__SYMBOL__ADDITION:                        Uint8Array;

  #BITBUF__HTMLESC__SYMBOL__EXCLAMATION:                     Uint8Array;
  #BITBUF__HTMLESC__SYMBOL__QUESTION:                        Uint8Array;
  #BITBUF__HTMLESC__SYMBOL__HTMLESC__SYMBOL__BACKGROUNDCOLOR_CHAR: Uint8Array;



  constructor() {
    super();

    this._textEncoder = new TextEncoder();



    this.#BITBUF__HTMLESC__SYMBOL__QUOTE_DOUBLE               = this._textEncoder.encode( this.getHtmlEsc_QuoteDouble() );
    this.#BITBUF__HTMLESC__SYMBOL__QUOTE_SINGLE               = this._textEncoder.encode( this.getHtmlEsc_QuoteSingle() );
    this.#BITBUF__HTMLESC__SYMBOL__QUOTE_ALT                  = this._textEncoder.encode( this.getHtmlEsc_QuoteAlt() );

    this.#BITBUF__HTMLESC__SYMBOL__BRACE_ROUND_OPEN           = this._textEncoder.encode( this.getHtmlEsc_BraceRoundOpen() );
    this.#BITBUF__HTMLESC__SYMBOL__BRACE_ROUND_CLOSE          = this._textEncoder.encode( this.getHtmlEsc_BraceRoundClose() );

    this.#BITBUF__HTMLESC__SYMBOL__BRACE_TRIANGLE_OPEN        = this._textEncoder.encode( this.getHtmlEsc_BraceTriangleOpen() );
    this.#BITBUF__HTMLESC__SYMBOL__BRACE_TRIANGLE_CLOSE       = this._textEncoder.encode( this.getHtmlEsc_BraceTriangleClose() );

    this.#BITBUF__HTMLESC__SYMBOL__BRACE_SQUARE_OPEN          = this._textEncoder.encode( this.getHtmlEsc_BraceSquareOpen() );
    this.#BITBUF__HTMLESC__SYMBOL__BRACE_SQUARE_CLOSE         = this._textEncoder.encode( this.getHtmlEsc_BraceSquareClose() );

    this.#BITBUF__HTMLESC__SYMBOL__BRACE_FIGURE_OPEN          = this._textEncoder.encode( this.getHtmlEsc_BraceFigureOpen() );
    this.#BITBUF__HTMLESC__SYMBOL__BRACE_FIGURE_CLOSE         = this._textEncoder.encode( this.getHtmlEsc_BraceFigureClose() );

    this.#BITBUF__HTMLESC__SYMBOL__COLON                      = this._textEncoder.encode( this.getHtmlEsc_Colon() );
    this.#BITBUF__HTMLESC__SYMBOL__SEMICOLON                  = this._textEncoder.encode( this.getHtmlEsc_Semicolon() );

    this.#BITBUF__HTMLESC__SYMBOL__POINT                      = this._textEncoder.encode( this.getHtmlEsc_Point() );
    this.#BITBUF__HTMLESC__SYMBOL__COMMA                      = this._textEncoder.encode( this.getHtmlEsc_Comma() );

    this.#BITBUF__HTMLESC__SYMBOL__DASH                       = this._textEncoder.encode( this.getHtmlEsc_Dash() );
    this.#BITBUF__HTMLESC__SYMBOL__UNDERSORE                  = this._textEncoder.encode( this.getHtmlEsc_Underscore() );

    this.#BITBUF__HTMLESC__SYMBOL__SLASH                      = this._textEncoder.encode( this.getHtmlEsc_Slash() );
    this.#BITBUF__HTMLESC__SYMBOL__SLASH_UPWARDS              = this._textEncoder.encode( this.getHtmlEsc_SlashUpwards() );

    this.#BITBUF__HTMLESC__SYMBOL__DOLLAR                     = this._textEncoder.encode( this.getHtmlEsc_Dollar() );
    this.#BITBUF__HTMLESC__SYMBOL__HASH                       = this._textEncoder.encode( this.getHtmlEsc_Hash() );
    this.#BITBUF__HTMLESC__SYMBOL__PERCENTS                   = this._textEncoder.encode( this.getHtmlEsc_Symbol_PERCENTS() );

    this.#BITBUF__HTMLESC__SYMBOL__AMPERSAND                  = this._textEncoder.encode( this.getHtmlEsc_Ampersand() );
    this.#BITBUF__HTMLESC__SYMBOL__TILDE                      = this._textEncoder.encode( this.getHtmlEsc_Tilde() );
    this.#BITBUF__HTMLESC__SYMBOL__DACH                       = this._textEncoder.encode( this.getHtmlEsc_Dach() );
    this.#BITBUF__HTMLESC__SYMBOL__EQUALITY                   = this._textEncoder.encode( this.getHtmlEsc_Equality() );
    this.#BITBUF__HTMLESC__SYMBOL__ADDITION                   = this._textEncoder.encode( this.getHtmlEsc_Addition() );

    this.#BITBUF__HTMLESC__SYMBOL__EXCLAMATION                = this._textEncoder.encode( this.getHtmlEsc_Exclamation() );
    this.#BITBUF__HTMLESC__SYMBOL__QUESTION                   = this._textEncoder.encode( this.getHtmlEsc_Question() );

    this.#BITBUF__HTMLESC__SYMBOL__HTMLESC__SYMBOL__BACKGROUNDCOLOR_CHAR  = this._textEncoder.encode( this.getHtmlEsc_SymbolBackgroundColor() );

  }



  public getBitbuf_HtmlEsc_QuoteDouble():        Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__QUOTE_DOUBLE; }



  public getBitbuf_HtmlEsc_QuoteSingle():        Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__QUOTE_SINGLE; }



  public getBitbuf_HtmlEsc_QuoteAlt():           Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__QUOTE_ALT; }



  public getBitbuf_HtmlEsc_BraceRoundOpen():     Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__BRACE_ROUND_OPEN; }



  public getBitbuf_HtmlEsc_BraceRoundClose():    Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__BRACE_ROUND_CLOSE; }



  public getBitbuf_HtmlEsc_BraceTriangleOpen():  Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__BRACE_TRIANGLE_OPEN; }



  public getBitbuf_HtmlEsc_BraceTriangleClose(): Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__BRACE_TRIANGLE_CLOSE; }



  public getBitbuf_HtmlEsc_BraceSquareOpen():    Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__BRACE_SQUARE_OPEN; }



  public getBitbuf_HtmlEsc_BraceSquareClose():   Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__BRACE_SQUARE_CLOSE; }



  public getBitbuf_HtmlEsc_BraceFigureOpen():    Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__BRACE_FIGURE_OPEN; }



  public getBitbuf_HtmlEsc_BraceFigureClose():   Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__BRACE_FIGURE_CLOSE; }



  public getBitbuf_HtmlEsc_Colon():              Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__COLON; }



  public getBitbuf_HtmlEsc_Semicolon():          Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__SEMICOLON; }



  public getBitbuf_HtmlEsc_Point():              Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__POINT; }



  public getBitbuf_HtmlEsc_Comma():              Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__COMMA; }



  public getBitbuf_HtmlEsc_Dash():               Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__DASH; }



  public getBitbuf_HtmlEsc_Underscore():         Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__UNDERSORE; }



  public getBitbuf_HtmlEsc_Slash():              Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__SLASH; }



  public getBitbuf_HtmlEsc_SlashUpwards():       Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__SLASH_UPWARDS; }



  public getBitbuf_HtmlEsc_Dollar():             Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__DOLLAR; }



  public getBitbuf_HtmlEsc_Hash():               Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__HASH; }



  public getBitbuf_HtmlEsc_Symbol_PERCENTS():    Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__PERCENTS; }



  public getBitbuf_HtmlEsc_Ampersand():          Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__AMPERSAND; }



  public getBitbuf_HtmlEsc_Tilde():              Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__TILDE; }



  public getBitbuf_HtmlEsc_Dach():               Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__DACH; }



  public getBitbuf_HtmlEsc_Equality():           Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__EQUALITY; }



  public getBitbuf_HtmlEsc_Addition():           Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__ADDITION; }



  public getBitbuf_HtmlEsc_Exclamation():        Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__EXCLAMATION; }



  public getBitbuf_HtmlEsc_Question():           Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__QUESTION; }



  public getBitbuf_HtmlEsc_SymbolBackgroundColor(): Uint8Array {
    return this.#BITBUF__HTMLESC__SYMBOL__HTMLESC__SYMBOL__BACKGROUNDCOLOR_CHAR; }

}


