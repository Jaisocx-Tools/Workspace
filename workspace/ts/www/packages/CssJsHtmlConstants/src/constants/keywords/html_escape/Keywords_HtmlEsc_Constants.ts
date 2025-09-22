import { CharcodeSymbolConstants } from "../../symbols/CharcodeSymbolConstants.js";



export class Keywords_HtmlEsc_Constants extends CharcodeSymbolConstants {

  #HTMLESC__SYMBOL__QUOTE_DOUBLE:                    string;
  #HTMLESC__SYMBOL__QUOTE_SINGLE:                    string;
  #HTMLESC__SYMBOL__QUOTE_ALT:                       string;

  #HTMLESC__SYMBOL__BRACE_ROUND_OPEN:                string;
  #HTMLESC__SYMBOL__BRACE_ROUND_CLOSE:               string;

  #HTMLESC__SYMBOL__BRACE_TRIANGLE_OPEN:             string;
  #HTMLESC__SYMBOL__BRACE_TRIANGLE_CLOSE:            string;

  #HTMLESC__SYMBOL__BRACE_SQUARE_OPEN:               string;
  #HTMLESC__SYMBOL__BRACE_SQUARE_CLOSE:              string;

  #HTMLESC__SYMBOL__BRACE_FIGURE_OPEN:               string;
  #HTMLESC__SYMBOL__BRACE_FIGURE_CLOSE:              string;

  #HTMLESC__SYMBOL__COLON:                           string;
  #HTMLESC__SYMBOL__SEMICOLON:                       string;

  #HTMLESC__SYMBOL__POINT:                           string;
  #HTMLESC__SYMBOL__COMMA:                           string;

  #HTMLESC__SYMBOL__DASH:                            string;
  #HTMLESC__SYMBOL__UNDERSORE:                       string;

  #HTMLESC__SYMBOL__SLASH:                           string;
  #HTMLESC__SYMBOL__SLASH_UPWARDS:                   string;

  #HTMLESC__SYMBOL__DOLLAR:                          string;
  #HTMLESC__SYMBOL__HASH:                            string;
  #HTMLESC__SYMBOL__PERCENTS:                        string;

  #HTMLESC__SYMBOL__AMPERSAND:                       string;
  #HTMLESC__SYMBOL__TILDE:                           string;
  #HTMLESC__SYMBOL__DACH:                            string;
  #HTMLESC__SYMBOL__EQUALITY:                        string;
  #HTMLESC__SYMBOL__ADDITION:                        string;

  #HTMLESC__SYMBOL__EXCLAMATION:                     string;
  #HTMLESC__SYMBOL__QUESTION:                        string;

  #HTMLESC__SYMBOL__BACKGROUNDCOLOR_CHAR:            string;



  constructor() {
    super();

    this.#HTMLESC__SYMBOL__QUOTE_DOUBLE               = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_QuoteDouble() );
    this.#HTMLESC__SYMBOL__QUOTE_SINGLE               = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_QuoteSingle() );
    this.#HTMLESC__SYMBOL__QUOTE_ALT                  = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_QuoteAlt() );

    this.#HTMLESC__SYMBOL__BRACE_ROUND_OPEN           = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_BraceRoundOpen() );
    this.#HTMLESC__SYMBOL__BRACE_ROUND_CLOSE          = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_BraceRoundClose() );

    this.#HTMLESC__SYMBOL__BRACE_TRIANGLE_OPEN        = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_BraceTriangleOpen() );
    this.#HTMLESC__SYMBOL__BRACE_TRIANGLE_CLOSE       = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_BraceTriangleClose() );

    this.#HTMLESC__SYMBOL__BRACE_SQUARE_OPEN          = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_BraceSquareOpen() );
    this.#HTMLESC__SYMBOL__BRACE_SQUARE_CLOSE         = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_BraceSquareClose() );

    this.#HTMLESC__SYMBOL__BRACE_FIGURE_OPEN          = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_BraceFigureOpen() );
    this.#HTMLESC__SYMBOL__BRACE_FIGURE_CLOSE         = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_BraceFigureClose() );

    this.#HTMLESC__SYMBOL__COLON                      = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_Colon() );
    this.#HTMLESC__SYMBOL__SEMICOLON                  = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_Semicolon() );

    this.#HTMLESC__SYMBOL__POINT                      = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_Point() );
    this.#HTMLESC__SYMBOL__COMMA                      = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_Comma() );

    this.#HTMLESC__SYMBOL__DASH                       = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_Dash() );
    this.#HTMLESC__SYMBOL__UNDERSORE                  = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_Underscore() );

    this.#HTMLESC__SYMBOL__SLASH                      = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_Slash() );
    this.#HTMLESC__SYMBOL__SLASH_UPWARDS              = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_SlashUpwards() );

    this.#HTMLESC__SYMBOL__DOLLAR                     = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_Dollar() );
    this.#HTMLESC__SYMBOL__HASH                       = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_Hash() );
    this.#HTMLESC__SYMBOL__PERCENTS                   = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_Symbol_PERCENTS() );

    this.#HTMLESC__SYMBOL__AMPERSAND                  = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_Ampersand() );
    this.#HTMLESC__SYMBOL__TILDE                      = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_Tilde() );
    this.#HTMLESC__SYMBOL__DACH                       = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_Dach() );
    this.#HTMLESC__SYMBOL__EQUALITY                   = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_Equality() );
    this.#HTMLESC__SYMBOL__ADDITION                   = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_Addition() );

    this.#HTMLESC__SYMBOL__EXCLAMATION                = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_Exclamation() );
    this.#HTMLESC__SYMBOL__QUESTION                   = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_Question() );

    this.#HTMLESC__SYMBOL__BACKGROUNDCOLOR_CHAR       = this.getHtmlEscapedSymbol_byCharcode ( this.getCharcode_SymbolBackgroundColor() );
  }



  public getHtmlEscapedSymbol_byCharcode ( inChar: number ): string {
    let locCharcode: number = inChar;
    let asStringSymbolCharcode: string = ( "" + locCharcode );

    let locPos_0_Ampersand: string           = this.getAmpersand();
    let locPos_1_SymbolHashtag: string       = this.getSymbol_Hashtag();
    let locPos_2_SymbolNumber_0_Zero: string = this.getSymbolNumber_0_Zero();
    let locPos_Last_Semicolon: string        = this.getSemicolon();

    let htmlSymbolEscapedArray: string[] = [
      locPos_0_Ampersand,
      locPos_1_SymbolHashtag,
      locPos_2_SymbolNumber_0_Zero,
      asStringSymbolCharcode,
      locPos_Last_Semicolon
    ];

    let retVal_htmlEscapedSymbol: string = htmlSymbolEscapedArray.join( "" );


    return retVal_htmlEscapedSymbol;

  }



  public getHtmlEscapedSymbol_bySymbol ( inSymbol: string ): string {
    let locSymbolCharcode: number = this.getCharcodeSymbol( inSymbol );
    let retVal_htmlEscapedSymbol: string = this.getHtmlEscapedSymbol_byCharcode ( locSymbolCharcode );


    return retVal_htmlEscapedSymbol;
  }



  public getHtmlEsc_QuoteDouble():        string {
    return this.#HTMLESC__SYMBOL__QUOTE_DOUBLE; }



  public getHtmlEsc_QuoteSingle():        string {
    return this.#HTMLESC__SYMBOL__QUOTE_SINGLE; }



  public getHtmlEsc_QuoteAlt():           string {
    return this.#HTMLESC__SYMBOL__QUOTE_ALT; }



  public getHtmlEsc_BraceRoundOpen():     string {
    return this.#HTMLESC__SYMBOL__BRACE_ROUND_OPEN; }



  public getHtmlEsc_BraceRoundClose():    string {
    return this.#HTMLESC__SYMBOL__BRACE_ROUND_CLOSE; }



  public getHtmlEsc_BraceTriangleOpen():  string {
    return this.#HTMLESC__SYMBOL__BRACE_TRIANGLE_OPEN; }



  public getHtmlEsc_BraceTriangleClose(): string {
    return this.#HTMLESC__SYMBOL__BRACE_TRIANGLE_CLOSE; }



  public getHtmlEsc_BraceSquareOpen():    string {
    return this.#HTMLESC__SYMBOL__BRACE_SQUARE_OPEN; }



  public getHtmlEsc_BraceSquareClose():   string {
    return this.#HTMLESC__SYMBOL__BRACE_SQUARE_CLOSE; }



  public getHtmlEsc_BraceFigureOpen():    string {
    return this.#HTMLESC__SYMBOL__BRACE_FIGURE_OPEN; }



  public getHtmlEsc_BraceFigureClose():   string {
    return this.#HTMLESC__SYMBOL__BRACE_FIGURE_CLOSE; }



  public getHtmlEsc_Colon():              string {
    return this.#HTMLESC__SYMBOL__COLON; }



  public getHtmlEsc_Semicolon():          string {
    return this.#HTMLESC__SYMBOL__SEMICOLON; }



  public getHtmlEsc_Point():              string {
    return this.#HTMLESC__SYMBOL__POINT; }



  public getHtmlEsc_Comma():              string {
    return this.#HTMLESC__SYMBOL__COMMA; }



  public getHtmlEsc_Dash():               string {
    return this.#HTMLESC__SYMBOL__DASH; }



  public getHtmlEsc_Underscore():         string {
    return this.#HTMLESC__SYMBOL__UNDERSORE; }



  public getHtmlEsc_Slash():              string {
    return this.#HTMLESC__SYMBOL__SLASH; }



  public getHtmlEsc_SlashUpwards():       string {
    return this.#HTMLESC__SYMBOL__SLASH_UPWARDS; }



  public getHtmlEsc_Dollar():             string {
    return this.#HTMLESC__SYMBOL__DOLLAR; }



  public getHtmlEsc_Hash():               string {
    return this.#HTMLESC__SYMBOL__HASH; }



  public getHtmlEsc_Symbol_PERCENTS():    string {
    return this.#HTMLESC__SYMBOL__PERCENTS; }



  public getHtmlEsc_Ampersand():          string {
    return this.#HTMLESC__SYMBOL__AMPERSAND; }



  public getHtmlEsc_Tilde():              string {
    return this.#HTMLESC__SYMBOL__TILDE; }



  public getHtmlEsc_Dach():               string {
    return this.#HTMLESC__SYMBOL__DACH; }



  public getHtmlEsc_Equality():           string {
    return this.#HTMLESC__SYMBOL__EQUALITY; }



  public getHtmlEsc_Addition():           string {
    return this.#HTMLESC__SYMBOL__ADDITION; }



  public getHtmlEsc_Exclamation():        string {
    return this.#HTMLESC__SYMBOL__EXCLAMATION; }



  public getHtmlEsc_Question():           string {
    return this.#HTMLESC__SYMBOL__QUESTION; }



  public getHtmlEsc_SymbolBackgroundColor(): string {
    return this.#HTMLESC__SYMBOL__BACKGROUNDCOLOR_CHAR; }

}


