"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Keywords_JsConstants_JS_KEYWORD__IMPORT, _Keywords_JsConstants_JS_KEYWORD__EXPORT, _Keywords_JsConstants_JS_KEYWORD__FROM, _Keywords_JsConstants_JS_KEYWORD__DEFAULT, _Keywords_JsConstants_JS_KEYWORD__CONST, _Keywords_JsConstants_JS_KEYWORD__LET, _Keywords_JsConstants_JS_KEYWORD__VAR, _Keywords_JsConstants_JS_KEYWORD__FUNCTION, _Keywords_JsConstants_JS_KEYWORD__RETURN, _Keywords_JsConstants_JS_KEYWORD__IF, _Keywords_JsConstants_JS_KEYWORD__ELSE, _Keywords_JsConstants_JS_KEYWORD__FOR, _Keywords_JsConstants_JS_KEYWORD__WHILE, _Keywords_JsConstants_JS_KEYWORD__TRY, _Keywords_JsConstants_JS_KEYWORD__CATCH, _Keywords_JsConstants_JS_KEYWORD__FINALLY, _Keywords_JsConstants_JS_KEYWORD__NEW, _Keywords_JsConstants_JS_KEYWORD__CLASS, _Keywords_JsConstants_JS_KEYWORD__EXTENDS, _Keywords_JsConstants_JS_KEYWORD__SUPER, _Keywords_JsConstants_JS_KEYWORD__THIS, _Keywords_JsConstants_JS_KEYWORD__NULL, _Keywords_JsConstants_JS_KEYWORD__TRUE, _Keywords_JsConstants_JS_KEYWORD__FALSE, _Keywords_JsConstants_JS_TOKEN__STATEMENT_FINISH, _Keywords_JsConstants_JS_TOKEN__BLOCK_OPEN, _Keywords_JsConstants_JS_TOKEN__BLOCK_CLOSE, _Keywords_JsConstants_JS_TOKEN__PAREN_OPEN, _Keywords_JsConstants_JS_TOKEN__PAREN_CLOSE, _Keywords_JsConstants_JS_TOKEN__ARRAY_OPEN, _Keywords_JsConstants_JS_TOKEN__ARRAY_CLOSE, _Keywords_JsConstants_JS_TOKEN__OBJECT_OPEN, _Keywords_JsConstants_JS_TOKEN__OBJECT_CLOSE, _Keywords_JsConstants_JS_TOKEN__METHOD_ARGS__START, _Keywords_JsConstants_JS_TOKEN__METHOD_ARGS__FINISH, _Keywords_JsConstants_JS_TOKEN__METHOD_ARGS__DELIMITER, _Keywords_JsConstants_JS_TOKEN__ASSIGN, _Keywords_JsConstants_JS_TOKEN__ARROW, _Keywords_JsConstants_JS_TOKEN__ARROW_FUNCTION_DELIMITER, _Keywords_JsConstants_JS_TOKEN__CLASS_AND_PROPERTY_DELIMITER, _Keywords_JsConstants_JS_TOKEN__CLASS_AND_METHOD_DELIMITER, _Keywords_JsConstants_JS_TOKEN__TYPESCRIPT_DATATYPE_DELIMITER;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Keywords_JsConstants = void 0;
const SymbolConstants_js_1 = require("../../symbols/SymbolConstants.js");
class Keywords_JsConstants extends SymbolConstants_js_1.SymbolConstants {
    constructor() {
        super();
        _Keywords_JsConstants_JS_KEYWORD__IMPORT.set(this, void 0);
        _Keywords_JsConstants_JS_KEYWORD__EXPORT.set(this, void 0);
        _Keywords_JsConstants_JS_KEYWORD__FROM.set(this, void 0);
        _Keywords_JsConstants_JS_KEYWORD__DEFAULT.set(this, void 0);
        _Keywords_JsConstants_JS_KEYWORD__CONST.set(this, void 0);
        _Keywords_JsConstants_JS_KEYWORD__LET.set(this, void 0);
        _Keywords_JsConstants_JS_KEYWORD__VAR.set(this, void 0);
        _Keywords_JsConstants_JS_KEYWORD__FUNCTION.set(this, void 0);
        _Keywords_JsConstants_JS_KEYWORD__RETURN.set(this, void 0);
        _Keywords_JsConstants_JS_KEYWORD__IF.set(this, void 0);
        _Keywords_JsConstants_JS_KEYWORD__ELSE.set(this, void 0);
        _Keywords_JsConstants_JS_KEYWORD__FOR.set(this, void 0);
        _Keywords_JsConstants_JS_KEYWORD__WHILE.set(this, void 0);
        _Keywords_JsConstants_JS_KEYWORD__TRY.set(this, void 0);
        _Keywords_JsConstants_JS_KEYWORD__CATCH.set(this, void 0);
        _Keywords_JsConstants_JS_KEYWORD__FINALLY.set(this, void 0);
        _Keywords_JsConstants_JS_KEYWORD__NEW.set(this, void 0);
        _Keywords_JsConstants_JS_KEYWORD__CLASS.set(this, void 0);
        _Keywords_JsConstants_JS_KEYWORD__EXTENDS.set(this, void 0);
        _Keywords_JsConstants_JS_KEYWORD__SUPER.set(this, void 0);
        _Keywords_JsConstants_JS_KEYWORD__THIS.set(this, void 0);
        _Keywords_JsConstants_JS_KEYWORD__NULL.set(this, void 0);
        _Keywords_JsConstants_JS_KEYWORD__TRUE.set(this, void 0);
        _Keywords_JsConstants_JS_KEYWORD__FALSE.set(this, void 0);
        _Keywords_JsConstants_JS_TOKEN__STATEMENT_FINISH.set(this, void 0);
        _Keywords_JsConstants_JS_TOKEN__BLOCK_OPEN.set(this, void 0);
        _Keywords_JsConstants_JS_TOKEN__BLOCK_CLOSE.set(this, void 0);
        _Keywords_JsConstants_JS_TOKEN__PAREN_OPEN.set(this, void 0);
        _Keywords_JsConstants_JS_TOKEN__PAREN_CLOSE.set(this, void 0);
        _Keywords_JsConstants_JS_TOKEN__ARRAY_OPEN.set(this, void 0);
        _Keywords_JsConstants_JS_TOKEN__ARRAY_CLOSE.set(this, void 0);
        _Keywords_JsConstants_JS_TOKEN__OBJECT_OPEN.set(this, void 0);
        _Keywords_JsConstants_JS_TOKEN__OBJECT_CLOSE.set(this, void 0);
        _Keywords_JsConstants_JS_TOKEN__METHOD_ARGS__START.set(this, void 0);
        _Keywords_JsConstants_JS_TOKEN__METHOD_ARGS__FINISH.set(this, void 0);
        _Keywords_JsConstants_JS_TOKEN__METHOD_ARGS__DELIMITER.set(this, void 0);
        _Keywords_JsConstants_JS_TOKEN__ASSIGN.set(this, void 0);
        _Keywords_JsConstants_JS_TOKEN__ARROW.set(this, void 0);
        _Keywords_JsConstants_JS_TOKEN__ARROW_FUNCTION_DELIMITER.set(this, void 0);
        _Keywords_JsConstants_JS_TOKEN__CLASS_AND_PROPERTY_DELIMITER.set(this, void 0);
        _Keywords_JsConstants_JS_TOKEN__CLASS_AND_METHOD_DELIMITER.set(this, void 0);
        _Keywords_JsConstants_JS_TOKEN__TYPESCRIPT_DATATYPE_DELIMITER.set(this, void 0);
        // keywords
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_KEYWORD__IMPORT, "import", "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_KEYWORD__EXPORT, "export", "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_KEYWORD__FROM, "from", "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_KEYWORD__DEFAULT, "default", "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_KEYWORD__CONST, "const", "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_KEYWORD__LET, "let", "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_KEYWORD__VAR, "var", "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_KEYWORD__FUNCTION, "function", "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_KEYWORD__RETURN, "return", "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_KEYWORD__IF, "if", "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_KEYWORD__ELSE, "else", "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_KEYWORD__FOR, "for", "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_KEYWORD__WHILE, "while", "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_KEYWORD__TRY, "try", "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_KEYWORD__CATCH, "catch", "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_KEYWORD__FINALLY, "finally", "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_KEYWORD__NEW, "new", "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_KEYWORD__CLASS, "class", "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_KEYWORD__EXTENDS, "extends", "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_KEYWORD__SUPER, "super", "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_KEYWORD__THIS, "this", "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_KEYWORD__NULL, "null", "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_KEYWORD__TRUE, "true", "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_KEYWORD__FALSE, "false", "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_TOKEN__STATEMENT_FINISH, this.getSemicolon(), "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_TOKEN__BLOCK_OPEN, this.getBraceFigureOpen(), "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_TOKEN__BLOCK_CLOSE, this.getBraceFigureClose(), "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_TOKEN__PAREN_OPEN, this.getBraceRoundOpen(), "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_TOKEN__PAREN_CLOSE, this.getBraceRoundClose(), "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_TOKEN__ARRAY_OPEN, this.getBraceSquareOpen(), "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_TOKEN__ARRAY_CLOSE, this.getBraceSquareClose(), "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_TOKEN__OBJECT_OPEN, this.getBraceFigureOpen(), "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_TOKEN__OBJECT_CLOSE, this.getBraceFigureClose(), "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_TOKEN__METHOD_ARGS__START, this.getBraceRoundOpen(), "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_TOKEN__METHOD_ARGS__FINISH, this.getBraceRoundClose(), "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_TOKEN__METHOD_ARGS__DELIMITER, this.getComma(), "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_TOKEN__ASSIGN, this.getEquality(), "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_TOKEN__ARROW, (this.getEquality() + this.getBraceTriangleClose()), "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_TOKEN__ARROW_FUNCTION_DELIMITER, __classPrivateFieldGet(this, _Keywords_JsConstants_JS_TOKEN__ARROW, "f"), "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_TOKEN__CLASS_AND_PROPERTY_DELIMITER, this.getPoint(), "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_TOKEN__CLASS_AND_METHOD_DELIMITER, this.getPoint(), "f");
        __classPrivateFieldSet(this, _Keywords_JsConstants_JS_TOKEN__TYPESCRIPT_DATATYPE_DELIMITER, this.getColon(), "f");
    }
    // keywords
    getJs_Keyword_Import() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_KEYWORD__IMPORT, "f");
    }
    getJs_Keyword_Export() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_KEYWORD__EXPORT, "f");
    }
    getJs_Keyword_From() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_KEYWORD__FROM, "f");
    }
    getJs_Keyword_Default() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_KEYWORD__DEFAULT, "f");
    }
    getJs_Keyword_Const() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_KEYWORD__CONST, "f");
    }
    getJs_Keyword_Let() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_KEYWORD__LET, "f");
    }
    getJs_Keyword_Var() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_KEYWORD__VAR, "f");
    }
    getJs_Keyword_Function() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_KEYWORD__FUNCTION, "f");
    }
    getJs_Keyword_Return() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_KEYWORD__RETURN, "f");
    }
    getJs_Keyword_If() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_KEYWORD__IF, "f");
    }
    getJs_Keyword_Else() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_KEYWORD__ELSE, "f");
    }
    getJs_Keyword_For() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_KEYWORD__FOR, "f");
    }
    getJs_Keyword_While() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_KEYWORD__WHILE, "f");
    }
    getJs_Keyword_Try() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_KEYWORD__TRY, "f");
    }
    getJs_Keyword_Catch() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_KEYWORD__CATCH, "f");
    }
    getJs_Keyword_Finally() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_KEYWORD__FINALLY, "f");
    }
    getJs_Keyword_New() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_KEYWORD__NEW, "f");
    }
    getJs_Keyword_Class() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_KEYWORD__CLASS, "f");
    }
    getJs_Keyword_Extends() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_KEYWORD__EXTENDS, "f");
    }
    getJs_Keyword_Super() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_KEYWORD__SUPER, "f");
    }
    getJs_Keyword_This() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_KEYWORD__THIS, "f");
    }
    getJs_Keyword_Null() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_KEYWORD__NULL, "f");
    }
    getJs_Keyword_True() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_KEYWORD__TRUE, "f");
    }
    getJs_Keyword_False() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_KEYWORD__FALSE, "f");
    }
    // tokens
    getJs_Token_StatementFinish() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_TOKEN__STATEMENT_FINISH, "f");
    }
    getJs_Token_Block_Open() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_TOKEN__BLOCK_OPEN, "f");
    }
    getJs_Token_Block_Close() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_TOKEN__BLOCK_CLOSE, "f");
    }
    getJs_Token_Paren_Open() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_TOKEN__PAREN_OPEN, "f");
    }
    getJs_Token_Paren_Close() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_TOKEN__PAREN_CLOSE, "f");
    }
    getJs_Token_Array_Open() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_TOKEN__ARRAY_OPEN, "f");
    }
    getJs_Token_Array_Close() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_TOKEN__ARRAY_CLOSE, "f");
    }
    getJs_Token_Object_Open() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_TOKEN__OBJECT_OPEN, "f");
    }
    getJs_Token_Object_Close() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_TOKEN__OBJECT_CLOSE, "f");
    }
    getJs_Token_MethodArgs_Start() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_TOKEN__METHOD_ARGS__START, "f");
    }
    getJs_Token_MethodArgs_Finish() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_TOKEN__METHOD_ARGS__FINISH, "f");
    }
    getJs_Token_MethodArgs_Delimiter() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_TOKEN__METHOD_ARGS__DELIMITER, "f");
    }
    getJs_Token_Assign() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_TOKEN__ASSIGN, "f");
    }
    getJs_Token_Arrow() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_TOKEN__ARROW, "f");
    }
    getJs_Token_ArrowFunction_Delimiter() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_TOKEN__ARROW_FUNCTION_DELIMITER, "f");
    }
    getJs_Token_ClassAndProperty_Delimiter() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_TOKEN__CLASS_AND_PROPERTY_DELIMITER, "f");
    }
    getJs_Token_ClassAndMethod_Delimiter() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_TOKEN__CLASS_AND_METHOD_DELIMITER, "f");
    }
    getJs_Token_Typescript_Datatype_Delimiter() {
        return __classPrivateFieldGet(this, _Keywords_JsConstants_JS_TOKEN__TYPESCRIPT_DATATYPE_DELIMITER, "f");
    }
}
exports.Keywords_JsConstants = Keywords_JsConstants;
_Keywords_JsConstants_JS_KEYWORD__IMPORT = new WeakMap(), _Keywords_JsConstants_JS_KEYWORD__EXPORT = new WeakMap(), _Keywords_JsConstants_JS_KEYWORD__FROM = new WeakMap(), _Keywords_JsConstants_JS_KEYWORD__DEFAULT = new WeakMap(), _Keywords_JsConstants_JS_KEYWORD__CONST = new WeakMap(), _Keywords_JsConstants_JS_KEYWORD__LET = new WeakMap(), _Keywords_JsConstants_JS_KEYWORD__VAR = new WeakMap(), _Keywords_JsConstants_JS_KEYWORD__FUNCTION = new WeakMap(), _Keywords_JsConstants_JS_KEYWORD__RETURN = new WeakMap(), _Keywords_JsConstants_JS_KEYWORD__IF = new WeakMap(), _Keywords_JsConstants_JS_KEYWORD__ELSE = new WeakMap(), _Keywords_JsConstants_JS_KEYWORD__FOR = new WeakMap(), _Keywords_JsConstants_JS_KEYWORD__WHILE = new WeakMap(), _Keywords_JsConstants_JS_KEYWORD__TRY = new WeakMap(), _Keywords_JsConstants_JS_KEYWORD__CATCH = new WeakMap(), _Keywords_JsConstants_JS_KEYWORD__FINALLY = new WeakMap(), _Keywords_JsConstants_JS_KEYWORD__NEW = new WeakMap(), _Keywords_JsConstants_JS_KEYWORD__CLASS = new WeakMap(), _Keywords_JsConstants_JS_KEYWORD__EXTENDS = new WeakMap(), _Keywords_JsConstants_JS_KEYWORD__SUPER = new WeakMap(), _Keywords_JsConstants_JS_KEYWORD__THIS = new WeakMap(), _Keywords_JsConstants_JS_KEYWORD__NULL = new WeakMap(), _Keywords_JsConstants_JS_KEYWORD__TRUE = new WeakMap(), _Keywords_JsConstants_JS_KEYWORD__FALSE = new WeakMap(), _Keywords_JsConstants_JS_TOKEN__STATEMENT_FINISH = new WeakMap(), _Keywords_JsConstants_JS_TOKEN__BLOCK_OPEN = new WeakMap(), _Keywords_JsConstants_JS_TOKEN__BLOCK_CLOSE = new WeakMap(), _Keywords_JsConstants_JS_TOKEN__PAREN_OPEN = new WeakMap(), _Keywords_JsConstants_JS_TOKEN__PAREN_CLOSE = new WeakMap(), _Keywords_JsConstants_JS_TOKEN__ARRAY_OPEN = new WeakMap(), _Keywords_JsConstants_JS_TOKEN__ARRAY_CLOSE = new WeakMap(), _Keywords_JsConstants_JS_TOKEN__OBJECT_OPEN = new WeakMap(), _Keywords_JsConstants_JS_TOKEN__OBJECT_CLOSE = new WeakMap(), _Keywords_JsConstants_JS_TOKEN__METHOD_ARGS__START = new WeakMap(), _Keywords_JsConstants_JS_TOKEN__METHOD_ARGS__FINISH = new WeakMap(), _Keywords_JsConstants_JS_TOKEN__METHOD_ARGS__DELIMITER = new WeakMap(), _Keywords_JsConstants_JS_TOKEN__ASSIGN = new WeakMap(), _Keywords_JsConstants_JS_TOKEN__ARROW = new WeakMap(), _Keywords_JsConstants_JS_TOKEN__ARROW_FUNCTION_DELIMITER = new WeakMap(), _Keywords_JsConstants_JS_TOKEN__CLASS_AND_PROPERTY_DELIMITER = new WeakMap(), _Keywords_JsConstants_JS_TOKEN__CLASS_AND_METHOD_DELIMITER = new WeakMap(), _Keywords_JsConstants_JS_TOKEN__TYPESCRIPT_DATATYPE_DELIMITER = new WeakMap();
//# sourceMappingURL=Keywords_JsConstants.js.map