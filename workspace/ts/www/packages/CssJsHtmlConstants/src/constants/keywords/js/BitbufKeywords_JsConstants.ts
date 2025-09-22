import { TextEncoder } from "util";
import { Keywords_JsConstants } from "./Keywords_JsConstants.js";



export class BitbufKeywords_JsConstants extends Keywords_JsConstants {

  _textEncoder: TextEncoder;


  // keywords
  #BITBUF__JS__KEYWORD__IMPORT:                     Uint8Array;
  #BITBUF__JS__KEYWORD__EXPORT:                     Uint8Array;
  #BITBUF__JS__KEYWORD__FROM:                       Uint8Array;
  #BITBUF__JS__KEYWORD__DEFAULT:                    Uint8Array;

  #BITBUF__JS__KEYWORD__CONST:                      Uint8Array;
  #BITBUF__JS__KEYWORD__LET:                        Uint8Array;
  #BITBUF__JS__KEYWORD__VAR:                        Uint8Array;

  #BITBUF__JS__KEYWORD__FUNCTION:                   Uint8Array;
  #BITBUF__JS__KEYWORD__RETURN:                     Uint8Array;

  #BITBUF__JS__KEYWORD__IF:                         Uint8Array;
  #BITBUF__JS__KEYWORD__ELSE:                       Uint8Array;
  #BITBUF__JS__KEYWORD__FOR:                        Uint8Array;
  #BITBUF__JS__KEYWORD__WHILE:                      Uint8Array;

  #BITBUF__JS__KEYWORD__TRY:                        Uint8Array;
  #BITBUF__JS__KEYWORD__CATCH:                      Uint8Array;
  #BITBUF__JS__KEYWORD__FINALLY:                    Uint8Array;

  #BITBUF__JS__KEYWORD__NEW:                        Uint8Array;
  #BITBUF__JS__KEYWORD__CLASS:                      Uint8Array;
  #BITBUF__JS__KEYWORD__EXTENDS:                    Uint8Array;
  #BITBUF__JS__KEYWORD__SUPER:                      Uint8Array;
  #BITBUF__JS__KEYWORD__THIS:                       Uint8Array;

  #BITBUF__JS__KEYWORD__NULL:                       Uint8Array;
  #BITBUF__JS__KEYWORD__TRUE:                       Uint8Array;
  #BITBUF__JS__KEYWORD__FALSE:                      Uint8Array;


  // tokens
  #BITBUF__JS__TOKEN__STATEMENT_FINISH:             Uint8Array;

  #BITBUF__JS__TOKEN__BLOCK_OPEN:                   Uint8Array;
  #BITBUF__JS__TOKEN__BLOCK_CLOSE:                  Uint8Array;

  #BITBUF__JS__TOKEN__PAREN_OPEN:                   Uint8Array;
  #BITBUF__JS__TOKEN__PAREN_CLOSE:                  Uint8Array;

  #BITBUF__JS__TOKEN__ARRAY_OPEN:                   Uint8Array;
  #BITBUF__JS__TOKEN__ARRAY_CLOSE:                  Uint8Array;

  #BITBUF__JS__TOKEN__OBJECT_OPEN:                  Uint8Array;
  #BITBUF__JS__TOKEN__OBJECT_CLOSE:                 Uint8Array;

  #BITBUF__JS__TOKEN__METHOD_ARGS__START:           Uint8Array;
  #BITBUF__JS__TOKEN__METHOD_ARGS__FINISH:          Uint8Array;
  #BITBUF__JS__TOKEN__METHOD_ARGS__DELIMITER:       Uint8Array;

  #BITBUF__JS__TOKEN__ASSIGN:                       Uint8Array;

  #BITBUF__JS__TOKEN__ARROW:                        Uint8Array;
  #BITBUF__JS__TOKEN__ARROW_FUNCTION_DELIMITER:     Uint8Array;

  #BITBUF__JS__TOKEN__CLASS_AND_PROPERTY_DELIMITER: Uint8Array;
  #BITBUF__JS__TOKEN__CLASS_AND_METHOD_DELIMITER:   Uint8Array;

  #BITBUF__JS__TOKEN__TYPESCRIPT_DATATYPE_DELIMITER:  Uint8Array;



  constructor() {
    super();

    this._textEncoder = new TextEncoder();


    // keywords
    this.#BITBUF__JS__KEYWORD__IMPORT                 = this._textEncoder.encode( this.getJs_Keyword_Import() );
    this.#BITBUF__JS__KEYWORD__EXPORT                 = this._textEncoder.encode( this.getJs_Keyword_Export() );
    this.#BITBUF__JS__KEYWORD__FROM                   = this._textEncoder.encode( this.getJs_Keyword_From() );
    this.#BITBUF__JS__KEYWORD__DEFAULT                = this._textEncoder.encode( this.getJs_Keyword_Default() );

    this.#BITBUF__JS__KEYWORD__CONST                  = this._textEncoder.encode( this.getJs_Keyword_Const() );
    this.#BITBUF__JS__KEYWORD__LET                    = this._textEncoder.encode( this.getJs_Keyword_Let() );
    this.#BITBUF__JS__KEYWORD__VAR                    = this._textEncoder.encode( this.getJs_Keyword_Var() );

    this.#BITBUF__JS__KEYWORD__FUNCTION               = this._textEncoder.encode( this.getJs_Keyword_Function() );
    this.#BITBUF__JS__KEYWORD__RETURN                 = this._textEncoder.encode( this.getJs_Keyword_Return() );

    this.#BITBUF__JS__KEYWORD__IF                     = this._textEncoder.encode( this.getJs_Keyword_If() );
    this.#BITBUF__JS__KEYWORD__ELSE                   = this._textEncoder.encode( this.getJs_Keyword_Else() );
    this.#BITBUF__JS__KEYWORD__FOR                    = this._textEncoder.encode( this.getJs_Keyword_For() );
    this.#BITBUF__JS__KEYWORD__WHILE                  = this._textEncoder.encode( this.getJs_Keyword_While() );

    this.#BITBUF__JS__KEYWORD__TRY                    = this._textEncoder.encode( this.getJs_Keyword_Try() );
    this.#BITBUF__JS__KEYWORD__CATCH                  = this._textEncoder.encode( this.getJs_Keyword_Catch() );
    this.#BITBUF__JS__KEYWORD__FINALLY                = this._textEncoder.encode( this.getJs_Keyword_Finally() );

    this.#BITBUF__JS__KEYWORD__NEW                    = this._textEncoder.encode( this.getJs_Keyword_New() );
    this.#BITBUF__JS__KEYWORD__CLASS                  = this._textEncoder.encode( this.getJs_Keyword_Class() );
    this.#BITBUF__JS__KEYWORD__EXTENDS                = this._textEncoder.encode( this.getJs_Keyword_Extends() );
    this.#BITBUF__JS__KEYWORD__SUPER                  = this._textEncoder.encode( this.getJs_Keyword_Super() );
    this.#BITBUF__JS__KEYWORD__THIS                   = this._textEncoder.encode( this.getJs_Keyword_This() );

    this.#BITBUF__JS__KEYWORD__NULL                   = this._textEncoder.encode( this.getJs_Keyword_Null() );
    this.#BITBUF__JS__KEYWORD__TRUE                   = this._textEncoder.encode( this.getJs_Keyword_True() );
    this.#BITBUF__JS__KEYWORD__FALSE                  = this._textEncoder.encode( this.getJs_Keyword_False() );


    // tokens
    this.#BITBUF__JS__TOKEN__STATEMENT_FINISH         = this._textEncoder.encode( this.getJs_Token_StatementFinish() );

    this.#BITBUF__JS__TOKEN__BLOCK_OPEN               = this._textEncoder.encode( this.getJs_Token_Block_Open() );
    this.#BITBUF__JS__TOKEN__BLOCK_CLOSE              = this._textEncoder.encode( this.getJs_Token_Block_Close() );

    this.#BITBUF__JS__TOKEN__PAREN_OPEN               = this._textEncoder.encode( this.getJs_Token_Paren_Open() );
    this.#BITBUF__JS__TOKEN__PAREN_CLOSE              = this._textEncoder.encode( this.getJs_Token_Paren_Close() );

    this.#BITBUF__JS__TOKEN__ARRAY_OPEN               = this._textEncoder.encode( this.getJs_Token_Array_Open() );
    this.#BITBUF__JS__TOKEN__ARRAY_CLOSE              = this._textEncoder.encode( this.getJs_Token_Array_Close() );

    this.#BITBUF__JS__TOKEN__OBJECT_OPEN              = this._textEncoder.encode( this.getJs_Token_Object_Open() );
    this.#BITBUF__JS__TOKEN__OBJECT_CLOSE             = this._textEncoder.encode( this.getJs_Token_Object_Close() );

    this.#BITBUF__JS__TOKEN__METHOD_ARGS__START       = this._textEncoder.encode( this.getJs_Token_MethodArgs_Start() );
    this.#BITBUF__JS__TOKEN__METHOD_ARGS__FINISH      = this._textEncoder.encode( this.getJs_Token_MethodArgs_Finish() );
    this.#BITBUF__JS__TOKEN__METHOD_ARGS__DELIMITER   = this._textEncoder.encode( this.getJs_Token_MethodArgs_Delimiter() );

    this.#BITBUF__JS__TOKEN__ASSIGN                   = this._textEncoder.encode( this.getJs_Token_Assign() );

    this.#BITBUF__JS__TOKEN__ARROW                    = this._textEncoder.encode( this.getJs_Token_Arrow() );
    this.#BITBUF__JS__TOKEN__ARROW_FUNCTION_DELIMITER = this._textEncoder.encode( this.getJs_Token_ArrowFunction_Delimiter() );

    this.#BITBUF__JS__TOKEN__CLASS_AND_PROPERTY_DELIMITER = this._textEncoder.encode( this.getJs_Token_ClassAndProperty_Delimiter() );
    this.#BITBUF__JS__TOKEN__CLASS_AND_METHOD_DELIMITER   = this._textEncoder.encode( this.getJs_Token_ClassAndMethod_Delimiter() );

    this.#BITBUF__JS__TOKEN__TYPESCRIPT_DATATYPE_DELIMITER = this._textEncoder.encode( this.getJs_Token_Typescript_Datatype_Delimiter() );

  }


  // keywords
  public getBitbuf_Js_Keyword_Import():            Uint8Array {
    return this.#BITBUF__JS__KEYWORD__IMPORT; }



  public getBitbuf_Js_Keyword_Export():            Uint8Array {
    return this.#BITBUF__JS__KEYWORD__EXPORT; }



  public getBitbuf_Js_Keyword_From():              Uint8Array {
    return this.#BITBUF__JS__KEYWORD__FROM; }



  public getBitbuf_Js_Keyword_Default():           Uint8Array {
    return this.#BITBUF__JS__KEYWORD__DEFAULT; }



  public getBitbuf_Js_Keyword_Const():             Uint8Array {
    return this.#BITBUF__JS__KEYWORD__CONST; }



  public getBitbuf_Js_Keyword_Let():               Uint8Array {
    return this.#BITBUF__JS__KEYWORD__LET; }



  public getBitbuf_Js_Keyword_Var():               Uint8Array {
    return this.#BITBUF__JS__KEYWORD__VAR; }



  public getBitbuf_Js_Keyword_Function():          Uint8Array {
    return this.#BITBUF__JS__KEYWORD__FUNCTION; }



  public getBitbuf_Js_Keyword_Return():            Uint8Array {
    return this.#BITBUF__JS__KEYWORD__RETURN; }



  public getBitbuf_Js_Keyword_If():                Uint8Array {
    return this.#BITBUF__JS__KEYWORD__IF; }



  public getBitbuf_Js_Keyword_Else():              Uint8Array {
    return this.#BITBUF__JS__KEYWORD__ELSE; }



  public getBitbuf_Js_Keyword_For():               Uint8Array {
    return this.#BITBUF__JS__KEYWORD__FOR; }



  public getBitbuf_Js_Keyword_While():             Uint8Array {
    return this.#BITBUF__JS__KEYWORD__WHILE; }



  public getBitbuf_Js_Keyword_Try():               Uint8Array {
    return this.#BITBUF__JS__KEYWORD__TRY; }



  public getBitbuf_Js_Keyword_Catch():             Uint8Array {
    return this.#BITBUF__JS__KEYWORD__CATCH; }



  public getBitbuf_Js_Keyword_Finally():           Uint8Array {
    return this.#BITBUF__JS__KEYWORD__FINALLY; }



  public getBitbuf_Js_Keyword_New():               Uint8Array {
    return this.#BITBUF__JS__KEYWORD__NEW; }



  public getBitbuf_Js_Keyword_Class():             Uint8Array {
    return this.#BITBUF__JS__KEYWORD__CLASS; }



  public getBitbuf_Js_Keyword_Extends():           Uint8Array {
    return this.#BITBUF__JS__KEYWORD__EXTENDS; }



  public getBitbuf_Js_Keyword_Super():             Uint8Array {
    return this.#BITBUF__JS__KEYWORD__SUPER; }



  public getBitbuf_Js_Keyword_This():              Uint8Array {
    return this.#BITBUF__JS__KEYWORD__THIS; }



  public getBitbuf_Js_Keyword_Null():              Uint8Array {
    return this.#BITBUF__JS__KEYWORD__NULL; }



  public getBitbuf_Js_Keyword_True():              Uint8Array {
    return this.#BITBUF__JS__KEYWORD__TRUE; }



  public getBitbuf_Js_Keyword_False():             Uint8Array {
    return this.#BITBUF__JS__KEYWORD__FALSE; }


  // tokens
  public getBitbuf_Js_Token_StatementFinish():     Uint8Array {
    return this.#BITBUF__JS__TOKEN__STATEMENT_FINISH; }



  public getBitbuf_Js_Token_Block_Open():          Uint8Array {
    return this.#BITBUF__JS__TOKEN__BLOCK_OPEN; }



  public getBitbuf_Js_Token_Block_Close():         Uint8Array {
    return this.#BITBUF__JS__TOKEN__BLOCK_CLOSE; }



  public getBitbuf_Js_Token_Paren_Open():          Uint8Array {
    return this.#BITBUF__JS__TOKEN__PAREN_OPEN; }



  public getBitbuf_Js_Token_Paren_Close():         Uint8Array {
    return this.#BITBUF__JS__TOKEN__PAREN_CLOSE; }



  public getBitbuf_Js_Token_Array_Open():          Uint8Array {
    return this.#BITBUF__JS__TOKEN__ARRAY_OPEN; }



  public getBitbuf_Js_Token_Array_Close():         Uint8Array {
    return this.#BITBUF__JS__TOKEN__ARRAY_CLOSE; }



  public getBitbuf_Js_Token_Object_Open():         Uint8Array {
    return this.#BITBUF__JS__TOKEN__OBJECT_OPEN; }



  public getBitbuf_Js_Token_Object_Close():        Uint8Array {
    return this.#BITBUF__JS__TOKEN__OBJECT_CLOSE; }



  public getBitbuf_Js_Token_MethodArgs_Start():           Uint8Array {
    return this.#BITBUF__JS__TOKEN__METHOD_ARGS__START; }



  public getBitbuf_Js_Token_MethodArgs_Finish():          Uint8Array {
    return this.#BITBUF__JS__TOKEN__METHOD_ARGS__FINISH; }



  public getBitbuf_Js_Token_MethodArgs_Delimiter():       Uint8Array {
    return this.#BITBUF__JS__TOKEN__METHOD_ARGS__DELIMITER; }



  public getBitbuf_Js_Token_Assign():                     Uint8Array {
    return this.#BITBUF__JS__TOKEN__ASSIGN; }



  public getBitbuf_Js_Token_Arrow():                      Uint8Array {
    return this.#BITBUF__JS__TOKEN__ARROW; }



  public getBitbuf_Js_Token_ArrowFunction_Delimiter():    Uint8Array {
    return this.#BITBUF__JS__TOKEN__ARROW_FUNCTION_DELIMITER; }



  public getBitbuf_Js_Token_ClassAndProperty_Delimiter(): Uint8Array {
    return this.#BITBUF__JS__TOKEN__CLASS_AND_PROPERTY_DELIMITER; }



  public getBitbuf_Js_Token_ClassAndMethod_Delimiter():   Uint8Array {
    return this.#BITBUF__JS__TOKEN__CLASS_AND_METHOD_DELIMITER; }



  public getBitbuf_Js_Token_Typescript_Datatype_Delimiter(): Uint8Array {
    return this.#BITBUF__JS__TOKEN__TYPESCRIPT_DATATYPE_DELIMITER; }

}

