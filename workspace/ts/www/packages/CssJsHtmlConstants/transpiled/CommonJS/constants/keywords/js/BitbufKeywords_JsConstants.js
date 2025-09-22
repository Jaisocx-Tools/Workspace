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
var _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__IMPORT, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__EXPORT, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__FROM, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__DEFAULT, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__CONST, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__LET, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__VAR, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__FUNCTION, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__RETURN, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__IF, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__ELSE, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__FOR, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__WHILE, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__TRY, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__CATCH, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__FINALLY, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__NEW, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__CLASS, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__EXTENDS, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__SUPER, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__THIS, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__NULL, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__TRUE, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__FALSE, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__STATEMENT_FINISH, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__BLOCK_OPEN, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__BLOCK_CLOSE, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__PAREN_OPEN, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__PAREN_CLOSE, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__ARRAY_OPEN, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__ARRAY_CLOSE, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__OBJECT_OPEN, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__OBJECT_CLOSE, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__METHOD_ARGS__START, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__METHOD_ARGS__FINISH, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__METHOD_ARGS__DELIMITER, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__ASSIGN, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__ARROW, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__ARROW_FUNCTION_DELIMITER, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__CLASS_AND_PROPERTY_DELIMITER, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__CLASS_AND_METHOD_DELIMITER, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__TYPESCRIPT_DATATYPE_DELIMITER;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitbufKeywords_JsConstants = void 0;
const util_1 = require("util");
const Keywords_JsConstants_js_1 = require("./Keywords_JsConstants.js");
class BitbufKeywords_JsConstants extends Keywords_JsConstants_js_1.Keywords_JsConstants {
    constructor() {
        super();
        // keywords
        _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__IMPORT.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__EXPORT.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__FROM.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__DEFAULT.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__CONST.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__LET.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__VAR.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__FUNCTION.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__RETURN.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__IF.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__ELSE.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__FOR.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__WHILE.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__TRY.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__CATCH.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__FINALLY.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__NEW.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__CLASS.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__EXTENDS.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__SUPER.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__THIS.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__NULL.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__TRUE.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__FALSE.set(this, void 0);
        // tokens
        _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__STATEMENT_FINISH.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__BLOCK_OPEN.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__BLOCK_CLOSE.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__PAREN_OPEN.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__PAREN_CLOSE.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__ARRAY_OPEN.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__ARRAY_CLOSE.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__OBJECT_OPEN.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__OBJECT_CLOSE.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__METHOD_ARGS__START.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__METHOD_ARGS__FINISH.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__METHOD_ARGS__DELIMITER.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__ASSIGN.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__ARROW.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__ARROW_FUNCTION_DELIMITER.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__CLASS_AND_PROPERTY_DELIMITER.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__CLASS_AND_METHOD_DELIMITER.set(this, void 0);
        _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__TYPESCRIPT_DATATYPE_DELIMITER.set(this, void 0);
        this._textEncoder = new util_1.TextEncoder();
        // keywords
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__IMPORT, this._textEncoder.encode(this.getJs_Keyword_Import()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__EXPORT, this._textEncoder.encode(this.getJs_Keyword_Export()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__FROM, this._textEncoder.encode(this.getJs_Keyword_From()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__DEFAULT, this._textEncoder.encode(this.getJs_Keyword_Default()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__CONST, this._textEncoder.encode(this.getJs_Keyword_Const()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__LET, this._textEncoder.encode(this.getJs_Keyword_Let()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__VAR, this._textEncoder.encode(this.getJs_Keyword_Var()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__FUNCTION, this._textEncoder.encode(this.getJs_Keyword_Function()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__RETURN, this._textEncoder.encode(this.getJs_Keyword_Return()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__IF, this._textEncoder.encode(this.getJs_Keyword_If()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__ELSE, this._textEncoder.encode(this.getJs_Keyword_Else()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__FOR, this._textEncoder.encode(this.getJs_Keyword_For()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__WHILE, this._textEncoder.encode(this.getJs_Keyword_While()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__TRY, this._textEncoder.encode(this.getJs_Keyword_Try()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__CATCH, this._textEncoder.encode(this.getJs_Keyword_Catch()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__FINALLY, this._textEncoder.encode(this.getJs_Keyword_Finally()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__NEW, this._textEncoder.encode(this.getJs_Keyword_New()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__CLASS, this._textEncoder.encode(this.getJs_Keyword_Class()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__EXTENDS, this._textEncoder.encode(this.getJs_Keyword_Extends()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__SUPER, this._textEncoder.encode(this.getJs_Keyword_Super()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__THIS, this._textEncoder.encode(this.getJs_Keyword_This()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__NULL, this._textEncoder.encode(this.getJs_Keyword_Null()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__TRUE, this._textEncoder.encode(this.getJs_Keyword_True()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__FALSE, this._textEncoder.encode(this.getJs_Keyword_False()), "f");
        // tokens
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__STATEMENT_FINISH, this._textEncoder.encode(this.getJs_Token_StatementFinish()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__BLOCK_OPEN, this._textEncoder.encode(this.getJs_Token_Block_Open()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__BLOCK_CLOSE, this._textEncoder.encode(this.getJs_Token_Block_Close()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__PAREN_OPEN, this._textEncoder.encode(this.getJs_Token_Paren_Open()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__PAREN_CLOSE, this._textEncoder.encode(this.getJs_Token_Paren_Close()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__ARRAY_OPEN, this._textEncoder.encode(this.getJs_Token_Array_Open()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__ARRAY_CLOSE, this._textEncoder.encode(this.getJs_Token_Array_Close()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__OBJECT_OPEN, this._textEncoder.encode(this.getJs_Token_Object_Open()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__OBJECT_CLOSE, this._textEncoder.encode(this.getJs_Token_Object_Close()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__METHOD_ARGS__START, this._textEncoder.encode(this.getJs_Token_MethodArgs_Start()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__METHOD_ARGS__FINISH, this._textEncoder.encode(this.getJs_Token_MethodArgs_Finish()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__METHOD_ARGS__DELIMITER, this._textEncoder.encode(this.getJs_Token_MethodArgs_Delimiter()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__ASSIGN, this._textEncoder.encode(this.getJs_Token_Assign()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__ARROW, this._textEncoder.encode(this.getJs_Token_Arrow()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__ARROW_FUNCTION_DELIMITER, this._textEncoder.encode(this.getJs_Token_ArrowFunction_Delimiter()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__CLASS_AND_PROPERTY_DELIMITER, this._textEncoder.encode(this.getJs_Token_ClassAndProperty_Delimiter()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__CLASS_AND_METHOD_DELIMITER, this._textEncoder.encode(this.getJs_Token_ClassAndMethod_Delimiter()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__TYPESCRIPT_DATATYPE_DELIMITER, this._textEncoder.encode(this.getJs_Token_Typescript_Datatype_Delimiter()), "f");
    }
    // keywords
    getBitbuf_Js_Keyword_Import() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__IMPORT, "f");
    }
    getBitbuf_Js_Keyword_Export() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__EXPORT, "f");
    }
    getBitbuf_Js_Keyword_From() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__FROM, "f");
    }
    getBitbuf_Js_Keyword_Default() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__DEFAULT, "f");
    }
    getBitbuf_Js_Keyword_Const() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__CONST, "f");
    }
    getBitbuf_Js_Keyword_Let() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__LET, "f");
    }
    getBitbuf_Js_Keyword_Var() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__VAR, "f");
    }
    getBitbuf_Js_Keyword_Function() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__FUNCTION, "f");
    }
    getBitbuf_Js_Keyword_Return() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__RETURN, "f");
    }
    getBitbuf_Js_Keyword_If() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__IF, "f");
    }
    getBitbuf_Js_Keyword_Else() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__ELSE, "f");
    }
    getBitbuf_Js_Keyword_For() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__FOR, "f");
    }
    getBitbuf_Js_Keyword_While() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__WHILE, "f");
    }
    getBitbuf_Js_Keyword_Try() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__TRY, "f");
    }
    getBitbuf_Js_Keyword_Catch() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__CATCH, "f");
    }
    getBitbuf_Js_Keyword_Finally() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__FINALLY, "f");
    }
    getBitbuf_Js_Keyword_New() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__NEW, "f");
    }
    getBitbuf_Js_Keyword_Class() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__CLASS, "f");
    }
    getBitbuf_Js_Keyword_Extends() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__EXTENDS, "f");
    }
    getBitbuf_Js_Keyword_Super() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__SUPER, "f");
    }
    getBitbuf_Js_Keyword_This() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__THIS, "f");
    }
    getBitbuf_Js_Keyword_Null() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__NULL, "f");
    }
    getBitbuf_Js_Keyword_True() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__TRUE, "f");
    }
    getBitbuf_Js_Keyword_False() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__FALSE, "f");
    }
    // tokens
    getBitbuf_Js_Token_StatementFinish() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__STATEMENT_FINISH, "f");
    }
    getBitbuf_Js_Token_Block_Open() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__BLOCK_OPEN, "f");
    }
    getBitbuf_Js_Token_Block_Close() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__BLOCK_CLOSE, "f");
    }
    getBitbuf_Js_Token_Paren_Open() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__PAREN_OPEN, "f");
    }
    getBitbuf_Js_Token_Paren_Close() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__PAREN_CLOSE, "f");
    }
    getBitbuf_Js_Token_Array_Open() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__ARRAY_OPEN, "f");
    }
    getBitbuf_Js_Token_Array_Close() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__ARRAY_CLOSE, "f");
    }
    getBitbuf_Js_Token_Object_Open() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__OBJECT_OPEN, "f");
    }
    getBitbuf_Js_Token_Object_Close() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__OBJECT_CLOSE, "f");
    }
    getBitbuf_Js_Token_MethodArgs_Start() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__METHOD_ARGS__START, "f");
    }
    getBitbuf_Js_Token_MethodArgs_Finish() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__METHOD_ARGS__FINISH, "f");
    }
    getBitbuf_Js_Token_MethodArgs_Delimiter() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__METHOD_ARGS__DELIMITER, "f");
    }
    getBitbuf_Js_Token_Assign() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__ASSIGN, "f");
    }
    getBitbuf_Js_Token_Arrow() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__ARROW, "f");
    }
    getBitbuf_Js_Token_ArrowFunction_Delimiter() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__ARROW_FUNCTION_DELIMITER, "f");
    }
    getBitbuf_Js_Token_ClassAndProperty_Delimiter() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__CLASS_AND_PROPERTY_DELIMITER, "f");
    }
    getBitbuf_Js_Token_ClassAndMethod_Delimiter() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__CLASS_AND_METHOD_DELIMITER, "f");
    }
    getBitbuf_Js_Token_Typescript_Datatype_Delimiter() {
        return __classPrivateFieldGet(this, _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__TYPESCRIPT_DATATYPE_DELIMITER, "f");
    }
}
exports.BitbufKeywords_JsConstants = BitbufKeywords_JsConstants;
_BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__IMPORT = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__EXPORT = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__FROM = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__DEFAULT = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__CONST = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__LET = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__VAR = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__FUNCTION = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__RETURN = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__IF = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__ELSE = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__FOR = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__WHILE = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__TRY = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__CATCH = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__FINALLY = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__NEW = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__CLASS = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__EXTENDS = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__SUPER = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__THIS = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__NULL = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__TRUE = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__KEYWORD__FALSE = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__STATEMENT_FINISH = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__BLOCK_OPEN = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__BLOCK_CLOSE = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__PAREN_OPEN = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__PAREN_CLOSE = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__ARRAY_OPEN = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__ARRAY_CLOSE = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__OBJECT_OPEN = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__OBJECT_CLOSE = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__METHOD_ARGS__START = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__METHOD_ARGS__FINISH = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__METHOD_ARGS__DELIMITER = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__ASSIGN = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__ARROW = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__ARROW_FUNCTION_DELIMITER = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__CLASS_AND_PROPERTY_DELIMITER = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__CLASS_AND_METHOD_DELIMITER = new WeakMap(), _BitbufKeywords_JsConstants_BITBUF__JS__TOKEN__TYPESCRIPT_DATATYPE_DELIMITER = new WeakMap();
//# sourceMappingURL=BitbufKeywords_JsConstants.js.map