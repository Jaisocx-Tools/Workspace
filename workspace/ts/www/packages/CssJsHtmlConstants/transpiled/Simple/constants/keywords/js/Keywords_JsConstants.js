class Keywords_JsConstants extends SymbolConstants {
    #JS_KEYWORD__IMPORT;
    #JS_KEYWORD__EXPORT;
    #JS_KEYWORD__FROM;
    #JS_KEYWORD__DEFAULT;
    #JS_KEYWORD__CONST;
    #JS_KEYWORD__LET;
    #JS_KEYWORD__VAR;
    #JS_KEYWORD__FUNCTION;
    #JS_KEYWORD__RETURN;
    #JS_KEYWORD__IF;
    #JS_KEYWORD__ELSE;
    #JS_KEYWORD__FOR;
    #JS_KEYWORD__WHILE;
    #JS_KEYWORD__TRY;
    #JS_KEYWORD__CATCH;
    #JS_KEYWORD__FINALLY;
    #JS_KEYWORD__NEW;
    #JS_KEYWORD__CLASS;
    #JS_KEYWORD__EXTENDS;
    #JS_KEYWORD__SUPER;
    #JS_KEYWORD__THIS;
    #JS_KEYWORD__NULL;
    #JS_KEYWORD__TRUE;
    #JS_KEYWORD__FALSE;
    #JS_TOKEN__STATEMENT_FINISH;
    #JS_TOKEN__BLOCK_OPEN;
    #JS_TOKEN__BLOCK_CLOSE;
    #JS_TOKEN__PAREN_OPEN;
    #JS_TOKEN__PAREN_CLOSE;
    #JS_TOKEN__ARRAY_OPEN;
    #JS_TOKEN__ARRAY_CLOSE;
    #JS_TOKEN__OBJECT_OPEN;
    #JS_TOKEN__OBJECT_CLOSE;
    #JS_TOKEN__METHOD_ARGS__START;
    #JS_TOKEN__METHOD_ARGS__FINISH;
    #JS_TOKEN__METHOD_ARGS__DELIMITER;
    #JS_TOKEN__ASSIGN;
    #JS_TOKEN__ARROW;
    #JS_TOKEN__ARROW_FUNCTION_DELIMITER;
    #JS_TOKEN__CLASS_AND_PROPERTY_DELIMITER;
    #JS_TOKEN__CLASS_AND_METHOD_DELIMITER;
    #JS_TOKEN__TYPESCRIPT_DATATYPE_DELIMITER;



    constructor() {
        super();


        // keywords
        this.#JS_KEYWORD__IMPORT = "import";
        this.#JS_KEYWORD__EXPORT = "export";
        this.#JS_KEYWORD__FROM = "from";
        this.#JS_KEYWORD__DEFAULT = "default";
        this.#JS_KEYWORD__CONST = "const";
        this.#JS_KEYWORD__LET = "let";
        this.#JS_KEYWORD__VAR = "var";
        this.#JS_KEYWORD__FUNCTION = "function";
        this.#JS_KEYWORD__RETURN = "return";
        this.#JS_KEYWORD__IF = "if";
        this.#JS_KEYWORD__ELSE = "else";
        this.#JS_KEYWORD__FOR = "for";
        this.#JS_KEYWORD__WHILE = "while";
        this.#JS_KEYWORD__TRY = "try";
        this.#JS_KEYWORD__CATCH = "catch";
        this.#JS_KEYWORD__FINALLY = "finally";
        this.#JS_KEYWORD__NEW = "new";
        this.#JS_KEYWORD__CLASS = "class";
        this.#JS_KEYWORD__EXTENDS = "extends";
        this.#JS_KEYWORD__SUPER = "super";
        this.#JS_KEYWORD__THIS = "this";
        this.#JS_KEYWORD__NULL = "null";
        this.#JS_KEYWORD__TRUE = "true";
        this.#JS_KEYWORD__FALSE = "false";
        this.#JS_TOKEN__STATEMENT_FINISH = this.getSemicolon();
        this.#JS_TOKEN__BLOCK_OPEN = this.getBraceFigureOpen();
        this.#JS_TOKEN__BLOCK_CLOSE = this.getBraceFigureClose();
        this.#JS_TOKEN__PAREN_OPEN = this.getBraceRoundOpen();
        this.#JS_TOKEN__PAREN_CLOSE = this.getBraceRoundClose();
        this.#JS_TOKEN__ARRAY_OPEN = this.getBraceSquareOpen();
        this.#JS_TOKEN__ARRAY_CLOSE = this.getBraceSquareClose();
        this.#JS_TOKEN__OBJECT_OPEN = this.getBraceFigureOpen();
        this.#JS_TOKEN__OBJECT_CLOSE = this.getBraceFigureClose();
        this.#JS_TOKEN__METHOD_ARGS__START = this.getBraceRoundOpen();
        this.#JS_TOKEN__METHOD_ARGS__FINISH = this.getBraceRoundClose();
        this.#JS_TOKEN__METHOD_ARGS__DELIMITER = this.getComma();
        this.#JS_TOKEN__ASSIGN = this.getEquality();
        this.#JS_TOKEN__ARROW = (this.getEquality() + this.getBraceTriangleClose());
        this.#JS_TOKEN__ARROW_FUNCTION_DELIMITER = this.#JS_TOKEN__ARROW;
        this.#JS_TOKEN__CLASS_AND_PROPERTY_DELIMITER = this.getPoint();
        this.#JS_TOKEN__CLASS_AND_METHOD_DELIMITER = this.getPoint();
        this.#JS_TOKEN__TYPESCRIPT_DATATYPE_DELIMITER = this.getColon();
    }


    // keywords
    getJs_Keyword_Import() {
        return this.#JS_KEYWORD__IMPORT;
    }



    getJs_Keyword_Export() {
        return this.#JS_KEYWORD__EXPORT;
    }



    getJs_Keyword_From() {
        return this.#JS_KEYWORD__FROM;
    }



    getJs_Keyword_Default() {
        return this.#JS_KEYWORD__DEFAULT;
    }



    getJs_Keyword_Const() {
        return this.#JS_KEYWORD__CONST;
    }



    getJs_Keyword_Let() {
        return this.#JS_KEYWORD__LET;
    }



    getJs_Keyword_Var() {
        return this.#JS_KEYWORD__VAR;
    }



    getJs_Keyword_Function() {
        return this.#JS_KEYWORD__FUNCTION;
    }



    getJs_Keyword_Return() {
        return this.#JS_KEYWORD__RETURN;
    }



    getJs_Keyword_If() {
        return this.#JS_KEYWORD__IF;
    }



    getJs_Keyword_Else() {
        return this.#JS_KEYWORD__ELSE;
    }



    getJs_Keyword_For() {
        return this.#JS_KEYWORD__FOR;
    }



    getJs_Keyword_While() {
        return this.#JS_KEYWORD__WHILE;
    }



    getJs_Keyword_Try() {
        return this.#JS_KEYWORD__TRY;
    }



    getJs_Keyword_Catch() {
        return this.#JS_KEYWORD__CATCH;
    }



    getJs_Keyword_Finally() {
        return this.#JS_KEYWORD__FINALLY;
    }



    getJs_Keyword_New() {
        return this.#JS_KEYWORD__NEW;
    }



    getJs_Keyword_Class() {
        return this.#JS_KEYWORD__CLASS;
    }



    getJs_Keyword_Extends() {
        return this.#JS_KEYWORD__EXTENDS;
    }



    getJs_Keyword_Super() {
        return this.#JS_KEYWORD__SUPER;
    }



    getJs_Keyword_This() {
        return this.#JS_KEYWORD__THIS;
    }



    getJs_Keyword_Null() {
        return this.#JS_KEYWORD__NULL;
    }



    getJs_Keyword_True() {
        return this.#JS_KEYWORD__TRUE;
    }



    getJs_Keyword_False() {
        return this.#JS_KEYWORD__FALSE;
    }


    // tokens
    getJs_Token_StatementFinish() {
        return this.#JS_TOKEN__STATEMENT_FINISH;
    }



    getJs_Token_Block_Open() {
        return this.#JS_TOKEN__BLOCK_OPEN;
    }



    getJs_Token_Block_Close() {
        return this.#JS_TOKEN__BLOCK_CLOSE;
    }



    getJs_Token_Paren_Open() {
        return this.#JS_TOKEN__PAREN_OPEN;
    }



    getJs_Token_Paren_Close() {
        return this.#JS_TOKEN__PAREN_CLOSE;
    }



    getJs_Token_Array_Open() {
        return this.#JS_TOKEN__ARRAY_OPEN;
    }



    getJs_Token_Array_Close() {
        return this.#JS_TOKEN__ARRAY_CLOSE;
    }



    getJs_Token_Object_Open() {
        return this.#JS_TOKEN__OBJECT_OPEN;
    }



    getJs_Token_Object_Close() {
        return this.#JS_TOKEN__OBJECT_CLOSE;
    }



    getJs_Token_MethodArgs_Start() {
        return this.#JS_TOKEN__METHOD_ARGS__START;
    }



    getJs_Token_MethodArgs_Finish() {
        return this.#JS_TOKEN__METHOD_ARGS__FINISH;
    }



    getJs_Token_MethodArgs_Delimiter() {
        return this.#JS_TOKEN__METHOD_ARGS__DELIMITER;
    }



    getJs_Token_Assign() {
        return this.#JS_TOKEN__ASSIGN;
    }



    getJs_Token_Arrow() {
        return this.#JS_TOKEN__ARROW;
    }



    getJs_Token_ArrowFunction_Delimiter() {
        return this.#JS_TOKEN__ARROW_FUNCTION_DELIMITER;
    }



    getJs_Token_ClassAndProperty_Delimiter() {
        return this.#JS_TOKEN__CLASS_AND_PROPERTY_DELIMITER;
    }



    getJs_Token_ClassAndMethod_Delimiter() {
        return this.#JS_TOKEN__CLASS_AND_METHOD_DELIMITER;
    }



    getJs_Token_Typescript_Datatype_Delimiter() {
        return this.#JS_TOKEN__TYPESCRIPT_DATATYPE_DELIMITER;
    }
}


