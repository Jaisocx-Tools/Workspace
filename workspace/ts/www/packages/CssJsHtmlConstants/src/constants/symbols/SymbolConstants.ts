export class SymbolConstants {

  #SYMBOL__QUOTE_DOUBLE: string;
  #SYMBOL__QUOTE_SINGLE: string;
  #SYMBOL__QUOTE_ALT:    string;



  #SYMBOL__BRACE_ROUND_OPEN:  string;
  #SYMBOL__BRACE_ROUND_CLOSE: string;

  #SYMBOL__BRACE_TRIANGLE_OPEN:  string;
  #SYMBOL__BRACE_TRIANGLE_CLOSE: string;

  #SYMBOL__BRACE_SQUARE_OPEN:  string;
  #SYMBOL__BRACE_SQUARE_CLOSE: string;

  #SYMBOL__BRACE_FIGURE_OPEN:  string;
  #SYMBOL__BRACE_FIGURE_CLOSE: string;



  #SYMBOL__COLON:         string;
  #SYMBOL__SEMICOLON:     string;

  #SYMBOL__POINT:         string;
  #SYMBOL__COMMA:         string;

  #SYMBOL__DASH:          string;
  #SYMBOL__UNDERSORE:     string;

  #SYMBOL__SLASH:         string;



  #SYMBOL__SLASH_UPWARDS: string;

  #SYMBOL__DOLLAR:        string;
  #SYMBOL__HASH:          string;
  #SYMBOL__PERCENTS:      string;

  #SYMBOL__AMPERSAND:     string;
  #SYMBOL__TILDE:         string;
  #SYMBOL__DACH:          string;
  #SYMBOL__EQUALITY:      string;
  #SYMBOL__ADDITION:      string;

  #SYMBOL__EXCLAMATION:   string;
  #SYMBOL__QUESTION:      string;

  #SYMBOL__BACKGROUNDCOLOR_CHAR: string;



  #SYMBOL__NUMBER__0_ZERO:   string;
  #SYMBOL__NUMBER__1_ONE:    string;
  #SYMBOL__NUMBER__2_TWO:    string;
  #SYMBOL__NUMBER__3_THREE:  string;
  #SYMBOL__NUMBER__4_FOUR:   string;
  #SYMBOL__NUMBER__5_FIVE:   string;
  #SYMBOL__NUMBER__6_SIX:    string;
  #SYMBOL__NUMBER__7_SEVEN:  string;
  #SYMBOL__NUMBER__8_EIGHT:  string;
  #SYMBOL__NUMBER__9_NINE:   string;



  #NUMBER__0_ZERO:   number;
  #NUMBER__1_ONE:    number;
  #NUMBER__2_TWO:    number;
  #NUMBER__3_THREE:  number;
  #NUMBER__4_FOUR:   number;
  #NUMBER__5_FIVE:   number;
  #NUMBER__6_SIX:    number;
  #NUMBER__7_SEVEN:  number;
  #NUMBER__8_EIGHT:  number;
  #NUMBER__9_NINE:   number;



  #POSITION_OF_FIRST_CHAR:   number;



  constructor() {

    // Initialization of private fields remains unchanged
    this.#SYMBOL__QUOTE_DOUBLE          = "\"";
    this.#SYMBOL__QUOTE_SINGLE          = "'";
    this.#SYMBOL__QUOTE_ALT             = "`";



    this.#SYMBOL__BRACE_ROUND_OPEN      = "(";
    this.#SYMBOL__BRACE_ROUND_CLOSE     = ")";

    this.#SYMBOL__BRACE_TRIANGLE_OPEN   = "<";
    this.#SYMBOL__BRACE_TRIANGLE_CLOSE  = ">";

    this.#SYMBOL__BRACE_SQUARE_OPEN     = "[";
    this.#SYMBOL__BRACE_SQUARE_CLOSE    = "]";

    this.#SYMBOL__BRACE_FIGURE_OPEN     = "{";
    this.#SYMBOL__BRACE_FIGURE_CLOSE    = "}";



    this.#SYMBOL__COLON             = ":";
    this.#SYMBOL__SEMICOLON         = ";";

    this.#SYMBOL__POINT             = ".";
    this.#SYMBOL__COMMA             = ",";

    this.#SYMBOL__DASH              = "-";
    this.#SYMBOL__UNDERSORE         = "_";

    this.#SYMBOL__SLASH             = "/";



    this.#SYMBOL__SLASH_UPWARDS     = "|";

    this.#SYMBOL__DOLLAR            = "$";
    this.#SYMBOL__HASH              = "#";
    this.#SYMBOL__PERCENTS          = "%";

    this.#SYMBOL__AMPERSAND         = "&";
    this.#SYMBOL__TILDE             = "~";
    this.#SYMBOL__DACH              = "^";
    this.#SYMBOL__EQUALITY          = "=";
    this.#SYMBOL__ADDITION          = "+";

    this.#SYMBOL__EXCLAMATION       = "!";
    this.#SYMBOL__QUESTION          = "?";

    this.#SYMBOL__BACKGROUNDCOLOR_CHAR = " ";



    this.#SYMBOL__NUMBER__0_ZERO    = "0";
    this.#SYMBOL__NUMBER__1_ONE     = "1";
    this.#SYMBOL__NUMBER__2_TWO     = "2";
    this.#SYMBOL__NUMBER__3_THREE   = "3";
    this.#SYMBOL__NUMBER__4_FOUR    = "4";
    this.#SYMBOL__NUMBER__5_FIVE    = "5";
    this.#SYMBOL__NUMBER__6_SIX     = "6";
    this.#SYMBOL__NUMBER__7_SEVEN   = "7";
    this.#SYMBOL__NUMBER__8_EIGHT   = "8";
    this.#SYMBOL__NUMBER__9_NINE    = "9";



    this.#NUMBER__0_ZERO   = 0;
    this.#NUMBER__1_ONE    = 1;
    this.#NUMBER__2_TWO    = 2;
    this.#NUMBER__3_THREE  = 3;
    this.#NUMBER__4_FOUR   = 4;
    this.#NUMBER__5_FIVE   = 5;
    this.#NUMBER__6_SIX    = 6;
    this.#NUMBER__7_SEVEN  = 7;
    this.#NUMBER__8_EIGHT  = 8;
    this.#NUMBER__9_NINE   = 9;



    this.#POSITION_OF_FIRST_CHAR = this.#NUMBER__0_ZERO;

  }



  public getCharcodeSymbol ( inSymbol: string ): number {
    return inSymbol.charCodeAt ( this.#POSITION_OF_FIRST_CHAR ); }



  public getQuoteDouble(): string {
    return this.#SYMBOL__QUOTE_DOUBLE; }



  public getQuoteSingle(): string {
    return this.#SYMBOL__QUOTE_SINGLE; }



  public getQuoteAlt():    string {
    return this.#SYMBOL__QUOTE_ALT; }



  public getBraceRoundOpen():      string {
    return this.#SYMBOL__BRACE_ROUND_OPEN; }



  public getBraceRoundClose():     string {
    return this.#SYMBOL__BRACE_ROUND_CLOSE; }



  public getBraceTriangleOpen():   string {
    return this.#SYMBOL__BRACE_TRIANGLE_OPEN; }



  public getBraceTriangleClose():  string {
    return this.#SYMBOL__BRACE_TRIANGLE_CLOSE; }



  public getBraceSquareOpen():     string {
    return this.#SYMBOL__BRACE_SQUARE_OPEN; }



  public getBraceSquareClose():    string {
    return this.#SYMBOL__BRACE_SQUARE_CLOSE; }



  public getBraceFigureOpen():     string {
    return this.#SYMBOL__BRACE_FIGURE_OPEN; }



  public getBraceFigureClose():    string {
    return this.#SYMBOL__BRACE_FIGURE_CLOSE; }



  public getColon():           string {
    return this.#SYMBOL__COLON; }



  public getSemicolon():       string {
    return this.#SYMBOL__SEMICOLON; }



  public getPoint():           string {
    return this.#SYMBOL__POINT; }



  public getComma():           string {
    return this.#SYMBOL__COMMA; }



  public getDash():            string {
    return this.#SYMBOL__DASH; }



  public getUnderscore():      string {
    return this.#SYMBOL__UNDERSORE; }



  public getSlash():           string {
    return this.#SYMBOL__SLASH; }



  public getSlashUpwards():    string {
    return this.#SYMBOL__SLASH_UPWARDS; }



  public getDollar():          string {
    return this.#SYMBOL__DOLLAR; }



  public getSymbol_Hashtag():  string {
    return this.#SYMBOL__HASH; }



  public getSymbol_PERCENTS(): string {
    return this.#SYMBOL__PERCENTS; }



  public getAmpersand():       string {
    return this.#SYMBOL__AMPERSAND; }



  public getTilde():           string {
    return this.#SYMBOL__TILDE; }



  public getDach():            string {
    return this.#SYMBOL__DACH; }



  public getEquality():        string {
    return this.#SYMBOL__EQUALITY; }



  public getAddition():        string {
    return this.#SYMBOL__ADDITION; }



  public getExclamation():     string {
    return this.#SYMBOL__EXCLAMATION; }



  public getQuestion():        string {
    return this.#SYMBOL__QUESTION; }



  public getSymbolBackgroundColor(): string {
    return this.#SYMBOL__BACKGROUNDCOLOR_CHAR; }



  public getSymbolNumber_0_Zero():   string {
    return this.#SYMBOL__NUMBER__0_ZERO; }



  public getSymbolNumber_1_One():    string {
    return this.#SYMBOL__NUMBER__1_ONE; }



  public getSymbolNumber_2_Two():    string {
    return this.#SYMBOL__NUMBER__2_TWO; }



  public getSymbolNumber_3_Three():  string {
    return this.#SYMBOL__NUMBER__3_THREE; }



  public getSymbolNumber_4_Four():   string {
    return this.#SYMBOL__NUMBER__4_FOUR; }



  public getSymbolNumber_5_Five():   string {
    return this.#SYMBOL__NUMBER__5_FIVE; }



  public getSymbolNumber_6_Six():    string {
    return this.#SYMBOL__NUMBER__6_SIX; }



  public getSymbolNumber_7_Seven():  string {
    return this.#SYMBOL__NUMBER__7_SEVEN; }



  public getSymbolNumber_8_Eight():  string {
    return this.#SYMBOL__NUMBER__8_EIGHT; }



  public getSymbolNumber_9_Nine():   string {
    return this.#SYMBOL__NUMBER__9_NINE; }



  public getNumber_0_Zero():    number {
    return this.#NUMBER__0_ZERO; }



  public getNumber_1_One():     number {
    return this.#NUMBER__1_ONE; }



  public getNumber_2_Two():     number {
    return this.#NUMBER__2_TWO; }



  public getNumber_3_Three():   number {
    return this.#NUMBER__3_THREE; }



  public getNumber_4_Four():    number {
    return this.#NUMBER__4_FOUR; }



  public getNumber_5_Five():    number {
    return this.#NUMBER__5_FIVE; }



  public getNumber_6_Six():     number {
    return this.#NUMBER__6_SIX; }



  public getNumber_7_Seven():   number {
    return this.#NUMBER__7_SEVEN; }



  public getNumber_8_Eight():   number {
    return this.#NUMBER__8_EIGHT; }



  public getNumber_9_Nine():    number {
    return this.#NUMBER__9_NINE; }

}



