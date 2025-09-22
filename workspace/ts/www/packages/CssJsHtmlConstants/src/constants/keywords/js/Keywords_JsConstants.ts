import { SymbolConstants } from "../../symbols/SymbolConstants.js";



export class Keywords_JsConstants extends SymbolConstants {

  #JS_KEYWORD__IMPORT:                     string;
  #JS_KEYWORD__EXPORT:                     string;
  #JS_KEYWORD__FROM:                       string;
  #JS_KEYWORD__DEFAULT:                    string;

  #JS_KEYWORD__CONST:                      string;
  #JS_KEYWORD__LET:                        string;
  #JS_KEYWORD__VAR:                        string;

  #JS_KEYWORD__FUNCTION:                   string;
  #JS_KEYWORD__RETURN:                     string;

  #JS_KEYWORD__IF:                         string;
  #JS_KEYWORD__ELSE:                       string;
  #JS_KEYWORD__FOR:                        string;
  #JS_KEYWORD__WHILE:                      string;

  #JS_KEYWORD__TRY:                        string;
  #JS_KEYWORD__CATCH:                      string;
  #JS_KEYWORD__FINALLY:                    string;

  #JS_KEYWORD__NEW:                        string;
  #JS_KEYWORD__CLASS:                      string;
  #JS_KEYWORD__EXTENDS:                    string;
  #JS_KEYWORD__SUPER:                      string;
  #JS_KEYWORD__THIS:                       string;

  #JS_KEYWORD__NULL:                       string;
  #JS_KEYWORD__TRUE:                       string;
  #JS_KEYWORD__FALSE:                      string;



  #JS_TOKEN__STATEMENT_FINISH:             string;

  #JS_TOKEN__BLOCK_OPEN:                   string;
  #JS_TOKEN__BLOCK_CLOSE:                  string;

  #JS_TOKEN__PAREN_OPEN:                   string;
  #JS_TOKEN__PAREN_CLOSE:                  string;

  #JS_TOKEN__ARRAY_OPEN:                   string;
  #JS_TOKEN__ARRAY_CLOSE:                  string;

  #JS_TOKEN__OBJECT_OPEN:                 string;
  #JS_TOKEN__OBJECT_CLOSE:                string;

  #JS_TOKEN__METHOD_ARGS__START:           string;
  #JS_TOKEN__METHOD_ARGS__FINISH:          string;
  #JS_TOKEN__METHOD_ARGS__DELIMITER:       string;


  #JS_TOKEN__ASSIGN:                       string;

  #JS_TOKEN__ARROW:                        string;
  #JS_TOKEN__ARROW_FUNCTION_DELIMITER:     string;

  #JS_TOKEN__CLASS_AND_PROPERTY_DELIMITER: string;
  #JS_TOKEN__CLASS_AND_METHOD_DELIMITER:   string;

  #JS_TOKEN__TYPESCRIPT_DATATYPE_DELIMITER:  string;



  constructor() {
    super();


    // keywords
    this.#JS_KEYWORD__IMPORT                 = "import";
    this.#JS_KEYWORD__EXPORT                 = "export";
    this.#JS_KEYWORD__FROM                   = "from";
    this.#JS_KEYWORD__DEFAULT                = "default";

    this.#JS_KEYWORD__CONST                  = "const";
    this.#JS_KEYWORD__LET                    = "let";
    this.#JS_KEYWORD__VAR                    = "var";

    this.#JS_KEYWORD__FUNCTION               = "function";
    this.#JS_KEYWORD__RETURN                 = "return";

    this.#JS_KEYWORD__IF                     = "if";
    this.#JS_KEYWORD__ELSE                   = "else";
    this.#JS_KEYWORD__FOR                    = "for";
    this.#JS_KEYWORD__WHILE                  = "while";

    this.#JS_KEYWORD__TRY                    = "try";
    this.#JS_KEYWORD__CATCH                  = "catch";
    this.#JS_KEYWORD__FINALLY                = "finally";

    this.#JS_KEYWORD__NEW                    = "new";
    this.#JS_KEYWORD__CLASS                  = "class";
    this.#JS_KEYWORD__EXTENDS                = "extends";
    this.#JS_KEYWORD__SUPER                  = "super";
    this.#JS_KEYWORD__THIS                   = "this";

    this.#JS_KEYWORD__NULL                   = "null";
    this.#JS_KEYWORD__TRUE                   = "true";
    this.#JS_KEYWORD__FALSE                  = "false";

    this.#JS_TOKEN__STATEMENT_FINISH         = this.getSemicolon();

    this.#JS_TOKEN__BLOCK_OPEN               = this.getBraceFigureOpen();
    this.#JS_TOKEN__BLOCK_CLOSE              = this.getBraceFigureClose();

    this.#JS_TOKEN__PAREN_OPEN               = this.getBraceRoundOpen();
    this.#JS_TOKEN__PAREN_CLOSE              = this.getBraceRoundClose();

    this.#JS_TOKEN__ARRAY_OPEN               = this.getBraceSquareOpen();
    this.#JS_TOKEN__ARRAY_CLOSE              = this.getBraceSquareClose();

    this.#JS_TOKEN__OBJECT_OPEN              = this.getBraceFigureOpen();
    this.#JS_TOKEN__OBJECT_CLOSE             = this.getBraceFigureClose();

    this.#JS_TOKEN__METHOD_ARGS__START       = this.getBraceRoundOpen();
    this.#JS_TOKEN__METHOD_ARGS__FINISH      = this.getBraceRoundClose();
    this.#JS_TOKEN__METHOD_ARGS__DELIMITER   = this.getComma();

    this.#JS_TOKEN__ASSIGN                   = this.getEquality();

    this.#JS_TOKEN__ARROW                    = ( this.getEquality() + this.getBraceTriangleClose() );
    this.#JS_TOKEN__ARROW_FUNCTION_DELIMITER = this.#JS_TOKEN__ARROW;

    this.#JS_TOKEN__CLASS_AND_PROPERTY_DELIMITER = this.getPoint();
    this.#JS_TOKEN__CLASS_AND_METHOD_DELIMITER   = this.getPoint();

    this.#JS_TOKEN__TYPESCRIPT_DATATYPE_DELIMITER = this.getColon();

  }


  // keywords
  public getJs_Keyword_Import():            string {
    return this.#JS_KEYWORD__IMPORT; }



  public getJs_Keyword_Export():            string {
    return this.#JS_KEYWORD__EXPORT; }



  public getJs_Keyword_From():              string {
    return this.#JS_KEYWORD__FROM; }



  public getJs_Keyword_Default():           string {
    return this.#JS_KEYWORD__DEFAULT; }



  public getJs_Keyword_Const():             string {
    return this.#JS_KEYWORD__CONST; }



  public getJs_Keyword_Let():               string {
    return this.#JS_KEYWORD__LET; }



  public getJs_Keyword_Var():               string {
    return this.#JS_KEYWORD__VAR; }



  public getJs_Keyword_Function():          string {
    return this.#JS_KEYWORD__FUNCTION; }



  public getJs_Keyword_Return():            string {
    return this.#JS_KEYWORD__RETURN; }



  public getJs_Keyword_If():                string {
    return this.#JS_KEYWORD__IF; }



  public getJs_Keyword_Else():              string {
    return this.#JS_KEYWORD__ELSE; }



  public getJs_Keyword_For():               string {
    return this.#JS_KEYWORD__FOR; }



  public getJs_Keyword_While():             string {
    return this.#JS_KEYWORD__WHILE; }



  public getJs_Keyword_Try():               string {
    return this.#JS_KEYWORD__TRY; }



  public getJs_Keyword_Catch():             string {
    return this.#JS_KEYWORD__CATCH; }



  public getJs_Keyword_Finally():           string {
    return this.#JS_KEYWORD__FINALLY; }



  public getJs_Keyword_New():               string {
    return this.#JS_KEYWORD__NEW; }



  public getJs_Keyword_Class():             string {
    return this.#JS_KEYWORD__CLASS; }



  public getJs_Keyword_Extends():           string {
    return this.#JS_KEYWORD__EXTENDS; }



  public getJs_Keyword_Super():             string {
    return this.#JS_KEYWORD__SUPER; }



  public getJs_Keyword_This():              string {
    return this.#JS_KEYWORD__THIS; }



  public getJs_Keyword_Null():              string {
    return this.#JS_KEYWORD__NULL; }



  public getJs_Keyword_True():              string {
    return this.#JS_KEYWORD__TRUE; }



  public getJs_Keyword_False():             string {
    return this.#JS_KEYWORD__FALSE; }


  // tokens
  public getJs_Token_StatementFinish():     string {
    return this.#JS_TOKEN__STATEMENT_FINISH; }



  public getJs_Token_Block_Open():          string {
    return this.#JS_TOKEN__BLOCK_OPEN; }



  public getJs_Token_Block_Close():         string {
    return this.#JS_TOKEN__BLOCK_CLOSE; }



  public getJs_Token_Paren_Open():          string {
    return this.#JS_TOKEN__PAREN_OPEN; }



  public getJs_Token_Paren_Close():         string {
    return this.#JS_TOKEN__PAREN_CLOSE; }



  public getJs_Token_Array_Open():          string {
    return this.#JS_TOKEN__ARRAY_OPEN; }



  public getJs_Token_Array_Close():         string {
    return this.#JS_TOKEN__ARRAY_CLOSE; }



  public getJs_Token_Object_Open():         string {
    return this.#JS_TOKEN__OBJECT_OPEN; }



  public getJs_Token_Object_Close():        string {
    return this.#JS_TOKEN__OBJECT_CLOSE; }



  public getJs_Token_MethodArgs_Start():           string {
    return this.#JS_TOKEN__METHOD_ARGS__START; }



  public getJs_Token_MethodArgs_Finish():          string {
    return this.#JS_TOKEN__METHOD_ARGS__FINISH; }



  public getJs_Token_MethodArgs_Delimiter():       string {
    return this.#JS_TOKEN__METHOD_ARGS__DELIMITER; }



  public getJs_Token_Assign():    string {
    return this.#JS_TOKEN__ASSIGN; }



  public getJs_Token_Arrow():    string {
    return this.#JS_TOKEN__ARROW; }



  public getJs_Token_ArrowFunction_Delimiter():    string {
    return this.#JS_TOKEN__ARROW_FUNCTION_DELIMITER; }



  public getJs_Token_ClassAndProperty_Delimiter(): string {
    return this.#JS_TOKEN__CLASS_AND_PROPERTY_DELIMITER; }



  public getJs_Token_ClassAndMethod_Delimiter():   string {
    return this.#JS_TOKEN__CLASS_AND_METHOD_DELIMITER; }



  public getJs_Token_Typescript_Datatype_Delimiter(): string {
    return this.#JS_TOKEN__TYPESCRIPT_DATATYPE_DELIMITER; }

}

