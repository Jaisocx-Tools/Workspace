class BitbufKeywords_JsConstants extends Keywords_JsConstants {
    _textEncoder;


    // keywords
    #BITBUF__JS__KEYWORD__IMPORT;
    #BITBUF__JS__KEYWORD__EXPORT;
    #BITBUF__JS__KEYWORD__FROM;
    #BITBUF__JS__KEYWORD__DEFAULT;
    #BITBUF__JS__KEYWORD__CONST;
    #BITBUF__JS__KEYWORD__LET;
    #BITBUF__JS__KEYWORD__VAR;
    #BITBUF__JS__KEYWORD__FUNCTION;
    #BITBUF__JS__KEYWORD__RETURN;
    #BITBUF__JS__KEYWORD__IF;
    #BITBUF__JS__KEYWORD__ELSE;
    #BITBUF__JS__KEYWORD__FOR;
    #BITBUF__JS__KEYWORD__WHILE;
    #BITBUF__JS__KEYWORD__TRY;
    #BITBUF__JS__KEYWORD__CATCH;
    #BITBUF__JS__KEYWORD__FINALLY;
    #BITBUF__JS__KEYWORD__NEW;
    #BITBUF__JS__KEYWORD__CLASS;
    #BITBUF__JS__KEYWORD__EXTENDS;
    #BITBUF__JS__KEYWORD__SUPER;
    #BITBUF__JS__KEYWORD__THIS;
    #BITBUF__JS__KEYWORD__NULL;
    #BITBUF__JS__KEYWORD__TRUE;
    #BITBUF__JS__KEYWORD__FALSE;


    // tokens
    #BITBUF__JS__TOKEN__STATEMENT_FINISH;
    #BITBUF__JS__TOKEN__BLOCK_OPEN;
    #BITBUF__JS__TOKEN__BLOCK_CLOSE;
    #BITBUF__JS__TOKEN__PAREN_OPEN;
    #BITBUF__JS__TOKEN__PAREN_CLOSE;
    #BITBUF__JS__TOKEN__ARRAY_OPEN;
    #BITBUF__JS__TOKEN__ARRAY_CLOSE;
    #BITBUF__JS__TOKEN__OBJECT_OPEN;
    #BITBUF__JS__TOKEN__OBJECT_CLOSE;
    #BITBUF__JS__TOKEN__METHOD_ARGS__START;
    #BITBUF__JS__TOKEN__METHOD_ARGS__FINISH;
    #BITBUF__JS__TOKEN__METHOD_ARGS__DELIMITER;
    #BITBUF__JS__TOKEN__ASSIGN;
    #BITBUF__JS__TOKEN__ARROW;
    #BITBUF__JS__TOKEN__ARROW_FUNCTION_DELIMITER;
    #BITBUF__JS__TOKEN__CLASS_AND_PROPERTY_DELIMITER;
    #BITBUF__JS__TOKEN__CLASS_AND_METHOD_DELIMITER;
    #BITBUF__JS__TOKEN__TYPESCRIPT_DATATYPE_DELIMITER;



    constructor() {
        super();
        this._textEncoder = new TextEncoder();


        // keywords
        this.#BITBUF__JS__KEYWORD__IMPORT = this._textEncoder.encode(this.getJs_Keyword_Import());
        this.#BITBUF__JS__KEYWORD__EXPORT = this._textEncoder.encode(this.getJs_Keyword_Export());
        this.#BITBUF__JS__KEYWORD__FROM = this._textEncoder.encode(this.getJs_Keyword_From());
        this.#BITBUF__JS__KEYWORD__DEFAULT = this._textEncoder.encode(this.getJs_Keyword_Default());
        this.#BITBUF__JS__KEYWORD__CONST = this._textEncoder.encode(this.getJs_Keyword_Const());
        this.#BITBUF__JS__KEYWORD__LET = this._textEncoder.encode(this.getJs_Keyword_Let());
        this.#BITBUF__JS__KEYWORD__VAR = this._textEncoder.encode(this.getJs_Keyword_Var());
        this.#BITBUF__JS__KEYWORD__FUNCTION = this._textEncoder.encode(this.getJs_Keyword_Function());
        this.#BITBUF__JS__KEYWORD__RETURN = this._textEncoder.encode(this.getJs_Keyword_Return());
        this.#BITBUF__JS__KEYWORD__IF = this._textEncoder.encode(this.getJs_Keyword_If());
        this.#BITBUF__JS__KEYWORD__ELSE = this._textEncoder.encode(this.getJs_Keyword_Else());
        this.#BITBUF__JS__KEYWORD__FOR = this._textEncoder.encode(this.getJs_Keyword_For());
        this.#BITBUF__JS__KEYWORD__WHILE = this._textEncoder.encode(this.getJs_Keyword_While());
        this.#BITBUF__JS__KEYWORD__TRY = this._textEncoder.encode(this.getJs_Keyword_Try());
        this.#BITBUF__JS__KEYWORD__CATCH = this._textEncoder.encode(this.getJs_Keyword_Catch());
        this.#BITBUF__JS__KEYWORD__FINALLY = this._textEncoder.encode(this.getJs_Keyword_Finally());
        this.#BITBUF__JS__KEYWORD__NEW = this._textEncoder.encode(this.getJs_Keyword_New());
        this.#BITBUF__JS__KEYWORD__CLASS = this._textEncoder.encode(this.getJs_Keyword_Class());
        this.#BITBUF__JS__KEYWORD__EXTENDS = this._textEncoder.encode(this.getJs_Keyword_Extends());
        this.#BITBUF__JS__KEYWORD__SUPER = this._textEncoder.encode(this.getJs_Keyword_Super());
        this.#BITBUF__JS__KEYWORD__THIS = this._textEncoder.encode(this.getJs_Keyword_This());
        this.#BITBUF__JS__KEYWORD__NULL = this._textEncoder.encode(this.getJs_Keyword_Null());
        this.#BITBUF__JS__KEYWORD__TRUE = this._textEncoder.encode(this.getJs_Keyword_True());
        this.#BITBUF__JS__KEYWORD__FALSE = this._textEncoder.encode(this.getJs_Keyword_False());


        // tokens
        this.#BITBUF__JS__TOKEN__STATEMENT_FINISH = this._textEncoder.encode(this.getJs_Token_StatementFinish());
        this.#BITBUF__JS__TOKEN__BLOCK_OPEN = this._textEncoder.encode(this.getJs_Token_Block_Open());
        this.#BITBUF__JS__TOKEN__BLOCK_CLOSE = this._textEncoder.encode(this.getJs_Token_Block_Close());
        this.#BITBUF__JS__TOKEN__PAREN_OPEN = this._textEncoder.encode(this.getJs_Token_Paren_Open());
        this.#BITBUF__JS__TOKEN__PAREN_CLOSE = this._textEncoder.encode(this.getJs_Token_Paren_Close());
        this.#BITBUF__JS__TOKEN__ARRAY_OPEN = this._textEncoder.encode(this.getJs_Token_Array_Open());
        this.#BITBUF__JS__TOKEN__ARRAY_CLOSE = this._textEncoder.encode(this.getJs_Token_Array_Close());
        this.#BITBUF__JS__TOKEN__OBJECT_OPEN = this._textEncoder.encode(this.getJs_Token_Object_Open());
        this.#BITBUF__JS__TOKEN__OBJECT_CLOSE = this._textEncoder.encode(this.getJs_Token_Object_Close());
        this.#BITBUF__JS__TOKEN__METHOD_ARGS__START = this._textEncoder.encode(this.getJs_Token_MethodArgs_Start());
        this.#BITBUF__JS__TOKEN__METHOD_ARGS__FINISH = this._textEncoder.encode(this.getJs_Token_MethodArgs_Finish());
        this.#BITBUF__JS__TOKEN__METHOD_ARGS__DELIMITER = this._textEncoder.encode(this.getJs_Token_MethodArgs_Delimiter());
        this.#BITBUF__JS__TOKEN__ASSIGN = this._textEncoder.encode(this.getJs_Token_Assign());
        this.#BITBUF__JS__TOKEN__ARROW = this._textEncoder.encode(this.getJs_Token_Arrow());
        this.#BITBUF__JS__TOKEN__ARROW_FUNCTION_DELIMITER = this._textEncoder.encode(this.getJs_Token_ArrowFunction_Delimiter());
        this.#BITBUF__JS__TOKEN__CLASS_AND_PROPERTY_DELIMITER = this._textEncoder.encode(this.getJs_Token_ClassAndProperty_Delimiter());
        this.#BITBUF__JS__TOKEN__CLASS_AND_METHOD_DELIMITER = this._textEncoder.encode(this.getJs_Token_ClassAndMethod_Delimiter());
        this.#BITBUF__JS__TOKEN__TYPESCRIPT_DATATYPE_DELIMITER = this._textEncoder.encode(this.getJs_Token_Typescript_Datatype_Delimiter());
    }


    // keywords
    getBitbuf_Js_Keyword_Import() {
        return this.#BITBUF__JS__KEYWORD__IMPORT;
    }



    getBitbuf_Js_Keyword_Export() {
        return this.#BITBUF__JS__KEYWORD__EXPORT;
    }



    getBitbuf_Js_Keyword_From() {
        return this.#BITBUF__JS__KEYWORD__FROM;
    }



    getBitbuf_Js_Keyword_Default() {
        return this.#BITBUF__JS__KEYWORD__DEFAULT;
    }



    getBitbuf_Js_Keyword_Const() {
        return this.#BITBUF__JS__KEYWORD__CONST;
    }



    getBitbuf_Js_Keyword_Let() {
        return this.#BITBUF__JS__KEYWORD__LET;
    }



    getBitbuf_Js_Keyword_Var() {
        return this.#BITBUF__JS__KEYWORD__VAR;
    }



    getBitbuf_Js_Keyword_Function() {
        return this.#BITBUF__JS__KEYWORD__FUNCTION;
    }



    getBitbuf_Js_Keyword_Return() {
        return this.#BITBUF__JS__KEYWORD__RETURN;
    }



    getBitbuf_Js_Keyword_If() {
        return this.#BITBUF__JS__KEYWORD__IF;
    }



    getBitbuf_Js_Keyword_Else() {
        return this.#BITBUF__JS__KEYWORD__ELSE;
    }



    getBitbuf_Js_Keyword_For() {
        return this.#BITBUF__JS__KEYWORD__FOR;
    }



    getBitbuf_Js_Keyword_While() {
        return this.#BITBUF__JS__KEYWORD__WHILE;
    }



    getBitbuf_Js_Keyword_Try() {
        return this.#BITBUF__JS__KEYWORD__TRY;
    }



    getBitbuf_Js_Keyword_Catch() {
        return this.#BITBUF__JS__KEYWORD__CATCH;
    }



    getBitbuf_Js_Keyword_Finally() {
        return this.#BITBUF__JS__KEYWORD__FINALLY;
    }



    getBitbuf_Js_Keyword_New() {
        return this.#BITBUF__JS__KEYWORD__NEW;
    }



    getBitbuf_Js_Keyword_Class() {
        return this.#BITBUF__JS__KEYWORD__CLASS;
    }



    getBitbuf_Js_Keyword_Extends() {
        return this.#BITBUF__JS__KEYWORD__EXTENDS;
    }



    getBitbuf_Js_Keyword_Super() {
        return this.#BITBUF__JS__KEYWORD__SUPER;
    }



    getBitbuf_Js_Keyword_This() {
        return this.#BITBUF__JS__KEYWORD__THIS;
    }



    getBitbuf_Js_Keyword_Null() {
        return this.#BITBUF__JS__KEYWORD__NULL;
    }



    getBitbuf_Js_Keyword_True() {
        return this.#BITBUF__JS__KEYWORD__TRUE;
    }



    getBitbuf_Js_Keyword_False() {
        return this.#BITBUF__JS__KEYWORD__FALSE;
    }


    // tokens
    getBitbuf_Js_Token_StatementFinish() {
        return this.#BITBUF__JS__TOKEN__STATEMENT_FINISH;
    }



    getBitbuf_Js_Token_Block_Open() {
        return this.#BITBUF__JS__TOKEN__BLOCK_OPEN;
    }



    getBitbuf_Js_Token_Block_Close() {
        return this.#BITBUF__JS__TOKEN__BLOCK_CLOSE;
    }



    getBitbuf_Js_Token_Paren_Open() {
        return this.#BITBUF__JS__TOKEN__PAREN_OPEN;
    }



    getBitbuf_Js_Token_Paren_Close() {
        return this.#BITBUF__JS__TOKEN__PAREN_CLOSE;
    }



    getBitbuf_Js_Token_Array_Open() {
        return this.#BITBUF__JS__TOKEN__ARRAY_OPEN;
    }



    getBitbuf_Js_Token_Array_Close() {
        return this.#BITBUF__JS__TOKEN__ARRAY_CLOSE;
    }



    getBitbuf_Js_Token_Object_Open() {
        return this.#BITBUF__JS__TOKEN__OBJECT_OPEN;
    }



    getBitbuf_Js_Token_Object_Close() {
        return this.#BITBUF__JS__TOKEN__OBJECT_CLOSE;
    }



    getBitbuf_Js_Token_MethodArgs_Start() {
        return this.#BITBUF__JS__TOKEN__METHOD_ARGS__START;
    }



    getBitbuf_Js_Token_MethodArgs_Finish() {
        return this.#BITBUF__JS__TOKEN__METHOD_ARGS__FINISH;
    }



    getBitbuf_Js_Token_MethodArgs_Delimiter() {
        return this.#BITBUF__JS__TOKEN__METHOD_ARGS__DELIMITER;
    }



    getBitbuf_Js_Token_Assign() {
        return this.#BITBUF__JS__TOKEN__ASSIGN;
    }



    getBitbuf_Js_Token_Arrow() {
        return this.#BITBUF__JS__TOKEN__ARROW;
    }



    getBitbuf_Js_Token_ArrowFunction_Delimiter() {
        return this.#BITBUF__JS__TOKEN__ARROW_FUNCTION_DELIMITER;
    }



    getBitbuf_Js_Token_ClassAndProperty_Delimiter() {
        return this.#BITBUF__JS__TOKEN__CLASS_AND_PROPERTY_DELIMITER;
    }



    getBitbuf_Js_Token_ClassAndMethod_Delimiter() {
        return this.#BITBUF__JS__TOKEN__CLASS_AND_METHOD_DELIMITER;
    }



    getBitbuf_Js_Token_Typescript_Datatype_Delimiter() {
        return this.#BITBUF__JS__TOKEN__TYPESCRIPT_DATATYPE_DELIMITER;
    }
}


