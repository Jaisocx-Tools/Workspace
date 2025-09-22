import { SymbolConstants } from "./SymbolConstants.js";



export class CharcodeSymbolConstants extends SymbolConstants {

  #CHARCODE__SYMBOL__QUOTE_DOUBLE:                    number;
  #CHARCODE__SYMBOL__QUOTE_SINGLE:                    number;
  #CHARCODE__SYMBOL__QUOTE_ALT:                       number;



  #CHARCODE__SYMBOL__BRACE_ROUND_OPEN:                number;
  #CHARCODE__SYMBOL__BRACE_ROUND_CLOSE:               number;

  #CHARCODE__SYMBOL__BRACE_TRIANGLE_OPEN:             number;
  #CHARCODE__SYMBOL__BRACE_TRIANGLE_CLOSE:            number;

  #CHARCODE__SYMBOL__BRACE_SQUARE_OPEN:               number;
  #CHARCODE__SYMBOL__BRACE_SQUARE_CLOSE:              number;

  #CHARCODE__SYMBOL__BRACE_FIGURE_OPEN:               number;
  #CHARCODE__SYMBOL__BRACE_FIGURE_CLOSE:              number;



  #CHARCODE__SYMBOL__COLON:                           number;
  #CHARCODE__SYMBOL__SEMICOLON:                       number;

  #CHARCODE__SYMBOL__POINT:                           number;
  #CHARCODE__SYMBOL__COMMA:                           number;

  #CHARCODE__SYMBOL__DASH:                            number;
  #CHARCODE__SYMBOL__UNDERSORE:                       number;

  #CHARCODE__SYMBOL__SLASH:                           number;
  #CHARCODE__SYMBOL__SLASH_UPWARDS:                   number;

  #CHARCODE__SYMBOL__DOLLAR:                          number;
  #CHARCODE__SYMBOL__HASH:                            number;
  #CHARCODE__SYMBOL__PERCENTS:                        number;

  #CHARCODE__SYMBOL__AMPERSAND:                       number;
  #CHARCODE__SYMBOL__TILDE:                           number;
  #CHARCODE__SYMBOL__DACH:                            number;
  #CHARCODE__SYMBOL__EQUALITY:                        number;
  #CHARCODE__SYMBOL__ADDITION:                        number;

  #CHARCODE__SYMBOL__EXCLAMATION:                     number;
  #CHARCODE__SYMBOL__QUESTION:                        number;

  #CHARCODE__SYMBOL__BACKGROUNDCOLOR_CHAR:           number;



  #CHARCODE__SYMBOL__NUMBER__0_ZERO:                  number;
  #CHARCODE__SYMBOL__NUMBER__1_ONE:                   number;
  #CHARCODE__SYMBOL__NUMBER__2_TWO:                   number;
  #CHARCODE__SYMBOL__NUMBER__3_THREE:                 number;
  #CHARCODE__SYMBOL__NUMBER__4_FOUR:                  number;
  #CHARCODE__SYMBOL__NUMBER__5_FIVE:                  number;
  #CHARCODE__SYMBOL__NUMBER__6_SIX:                   number;
  #CHARCODE__SYMBOL__NUMBER__7_SEVEN:                 number;
  #CHARCODE__SYMBOL__NUMBER__8_EIGHT:                 number;
  #CHARCODE__SYMBOL__NUMBER__9_NINE:                  number;



  constructor() {
    super();

    this.#CHARCODE__SYMBOL__QUOTE_DOUBLE               = this.getCharcodeSymbol( this.getQuoteDouble() );
    this.#CHARCODE__SYMBOL__QUOTE_SINGLE               = this.getCharcodeSymbol( this.getQuoteSingle() );
    this.#CHARCODE__SYMBOL__QUOTE_ALT                  = this.getCharcodeSymbol( this.getQuoteAlt() );

    this.#CHARCODE__SYMBOL__BRACE_ROUND_OPEN           = this.getCharcodeSymbol( this.getBraceRoundOpen() );
    this.#CHARCODE__SYMBOL__BRACE_ROUND_CLOSE          = this.getCharcodeSymbol( this.getBraceRoundClose() );

    this.#CHARCODE__SYMBOL__BRACE_TRIANGLE_OPEN        = this.getCharcodeSymbol( this.getBraceTriangleOpen() );
    this.#CHARCODE__SYMBOL__BRACE_TRIANGLE_CLOSE       = this.getCharcodeSymbol( this.getBraceTriangleClose() );

    this.#CHARCODE__SYMBOL__BRACE_SQUARE_OPEN          = this.getCharcodeSymbol( this.getBraceSquareOpen() );
    this.#CHARCODE__SYMBOL__BRACE_SQUARE_CLOSE         = this.getCharcodeSymbol( this.getBraceSquareClose() );

    this.#CHARCODE__SYMBOL__BRACE_FIGURE_OPEN          = this.getCharcodeSymbol( this.getBraceFigureOpen() );
    this.#CHARCODE__SYMBOL__BRACE_FIGURE_CLOSE         = this.getCharcodeSymbol( this.getBraceFigureClose() );

    this.#CHARCODE__SYMBOL__COLON                      = this.getCharcodeSymbol( this.getColon() );
    this.#CHARCODE__SYMBOL__SEMICOLON                  = this.getCharcodeSymbol( this.getSemicolon() );

    this.#CHARCODE__SYMBOL__POINT                      = this.getCharcodeSymbol( this.getPoint() );
    this.#CHARCODE__SYMBOL__COMMA                      = this.getCharcodeSymbol( this.getComma() );

    this.#CHARCODE__SYMBOL__DASH                       = this.getCharcodeSymbol( this.getDash() );
    this.#CHARCODE__SYMBOL__UNDERSORE                  = this.getCharcodeSymbol( this.getUnderscore() );

    this.#CHARCODE__SYMBOL__SLASH                      = this.getCharcodeSymbol( this.getSlash() );
    this.#CHARCODE__SYMBOL__SLASH_UPWARDS              = this.getCharcodeSymbol( this.getSlashUpwards() );

    this.#CHARCODE__SYMBOL__DOLLAR                     = this.getCharcodeSymbol( this.getDollar() );
    this.#CHARCODE__SYMBOL__HASH                       = this.getCharcodeSymbol( this.getSymbol_Hashtag() );
    this.#CHARCODE__SYMBOL__PERCENTS                   = this.getCharcodeSymbol( this.getSymbol_PERCENTS() );

    this.#CHARCODE__SYMBOL__AMPERSAND                  = this.getCharcodeSymbol( this.getAmpersand() );
    this.#CHARCODE__SYMBOL__TILDE                      = this.getCharcodeSymbol( this.getTilde() );
    this.#CHARCODE__SYMBOL__DACH                       = this.getCharcodeSymbol( this.getDach() );
    this.#CHARCODE__SYMBOL__EQUALITY                   = this.getCharcodeSymbol( this.getEquality() );
    this.#CHARCODE__SYMBOL__ADDITION                   = this.getCharcodeSymbol( this.getAddition() );

    this.#CHARCODE__SYMBOL__EXCLAMATION                = this.getCharcodeSymbol( this.getExclamation() );
    this.#CHARCODE__SYMBOL__QUESTION                   = this.getCharcodeSymbol( this.getQuestion() );

    this.#CHARCODE__SYMBOL__BACKGROUNDCOLOR_CHAR      = this.getCharcodeSymbol( this.getSymbolBackgroundColor() );

    this.#CHARCODE__SYMBOL__NUMBER__0_ZERO             = this.getCharcodeSymbol( this.getSymbolNumber_0_Zero() );
    this.#CHARCODE__SYMBOL__NUMBER__1_ONE              = this.getCharcodeSymbol( this.getSymbolNumber_1_One() );
    this.#CHARCODE__SYMBOL__NUMBER__2_TWO              = this.getCharcodeSymbol( this.getSymbolNumber_2_Two() );
    this.#CHARCODE__SYMBOL__NUMBER__3_THREE            = this.getCharcodeSymbol( this.getSymbolNumber_3_Three() );
    this.#CHARCODE__SYMBOL__NUMBER__4_FOUR             = this.getCharcodeSymbol( this.getSymbolNumber_4_Four() );
    this.#CHARCODE__SYMBOL__NUMBER__5_FIVE             = this.getCharcodeSymbol( this.getSymbolNumber_5_Five() );
    this.#CHARCODE__SYMBOL__NUMBER__6_SIX              = this.getCharcodeSymbol( this.getSymbolNumber_6_Six() );
    this.#CHARCODE__SYMBOL__NUMBER__7_SEVEN            = this.getCharcodeSymbol( this.getSymbolNumber_7_Seven() );
    this.#CHARCODE__SYMBOL__NUMBER__8_EIGHT            = this.getCharcodeSymbol( this.getSymbolNumber_8_Eight() );
    this.#CHARCODE__SYMBOL__NUMBER__9_NINE             = this.getCharcodeSymbol( this.getSymbolNumber_9_Nine() );

  }



  public getCharcode_QuoteDouble():        number {
    return this.#CHARCODE__SYMBOL__QUOTE_DOUBLE; }



  public getCharcode_QuoteSingle():        number {
    return this.#CHARCODE__SYMBOL__QUOTE_SINGLE; }



  public getCharcode_QuoteAlt():           number {
    return this.#CHARCODE__SYMBOL__QUOTE_ALT; }



  public getCharcode_BraceRoundOpen():     number {
    return this.#CHARCODE__SYMBOL__BRACE_ROUND_OPEN; }



  public getCharcode_BraceRoundClose():    number {
    return this.#CHARCODE__SYMBOL__BRACE_ROUND_CLOSE; }



  public getCharcode_BraceTriangleOpen():  number {
    return this.#CHARCODE__SYMBOL__BRACE_TRIANGLE_OPEN; }



  public getCharcode_BraceTriangleClose(): number {
    return this.#CHARCODE__SYMBOL__BRACE_TRIANGLE_CLOSE; }



  public getCharcode_BraceSquareOpen():    number {
    return this.#CHARCODE__SYMBOL__BRACE_SQUARE_OPEN; }



  public getCharcode_BraceSquareClose():   number {
    return this.#CHARCODE__SYMBOL__BRACE_SQUARE_CLOSE; }



  public getCharcode_BraceFigureOpen():    number {
    return this.#CHARCODE__SYMBOL__BRACE_FIGURE_OPEN; }



  public getCharcode_BraceFigureClose():   number {
    return this.#CHARCODE__SYMBOL__BRACE_FIGURE_CLOSE; }



  public getCharcode_Colon():              number {
    return this.#CHARCODE__SYMBOL__COLON; }



  public getCharcode_Semicolon():          number {
    return this.#CHARCODE__SYMBOL__SEMICOLON; }



  public getCharcode_Point():              number {
    return this.#CHARCODE__SYMBOL__POINT; }



  public getCharcode_Comma():              number {
    return this.#CHARCODE__SYMBOL__COMMA; }



  public getCharcode_Dash():               number {
    return this.#CHARCODE__SYMBOL__DASH; }



  public getCharcode_Underscore():         number {
    return this.#CHARCODE__SYMBOL__UNDERSORE; }



  public getCharcode_Slash():              number {
    return this.#CHARCODE__SYMBOL__SLASH; }



  public getCharcode_SlashUpwards():       number {
    return this.#CHARCODE__SYMBOL__SLASH_UPWARDS; }



  public getCharcode_Dollar():             number {
    return this.#CHARCODE__SYMBOL__DOLLAR; }



  public getCharcode_Hash():               number {
    return this.#CHARCODE__SYMBOL__HASH; }



  public getCharcode_Symbol_PERCENTS():    number {
    return this.#CHARCODE__SYMBOL__PERCENTS; }



  public getCharcode_Ampersand():          number {
    return this.#CHARCODE__SYMBOL__AMPERSAND; }



  public getCharcode_Tilde():              number {
    return this.#CHARCODE__SYMBOL__TILDE; }



  public getCharcode_Dach():               number {
    return this.#CHARCODE__SYMBOL__DACH; }



  public getCharcode_Equality():           number {
    return this.#CHARCODE__SYMBOL__EQUALITY; }



  public getCharcode_Addition():           number {
    return this.#CHARCODE__SYMBOL__ADDITION; }



  public getCharcode_Exclamation():        number {
    return this.#CHARCODE__SYMBOL__EXCLAMATION; }



  public getCharcode_Question():           number {
    return this.#CHARCODE__SYMBOL__QUESTION; }



  public getCharcode_SymbolBackgroundColor():   number {
    return this.#CHARCODE__SYMBOL__BACKGROUNDCOLOR_CHAR; }



  public getCharcode_SymbolNumber_0_Zero():   number {
    return this.#CHARCODE__SYMBOL__NUMBER__0_ZERO; }



  public getCharcode_SymbolNumber_1_One():    number {
    return this.#CHARCODE__SYMBOL__NUMBER__1_ONE; }



  public getCharcode_SymbolNumber_2_Two():    number {
    return this.#CHARCODE__SYMBOL__NUMBER__2_TWO; }



  public getCharcode_SymbolNumber_3_Three():  number {
    return this.#CHARCODE__SYMBOL__NUMBER__3_THREE; }



  public getCharcode_SymbolNumber_4_Four():   number {
    return this.#CHARCODE__SYMBOL__NUMBER__4_FOUR; }



  public getCharcode_SymbolNumber_5_Five():   number {
    return this.#CHARCODE__SYMBOL__NUMBER__5_FIVE; }



  public getCharcode_SymbolNumber_6_Six():    number {
    return this.#CHARCODE__SYMBOL__NUMBER__6_SIX; }



  public getCharcode_SymbolNumber_7_Seven():  number {
    return this.#CHARCODE__SYMBOL__NUMBER__7_SEVEN; }



  public getCharcode_SymbolNumber_8_Eight():  number {
    return this.#CHARCODE__SYMBOL__NUMBER__8_EIGHT; }



  public getCharcode_SymbolNumber_9_Nine():   number {
    return this.#CHARCODE__SYMBOL__NUMBER__9_NINE; }

}


