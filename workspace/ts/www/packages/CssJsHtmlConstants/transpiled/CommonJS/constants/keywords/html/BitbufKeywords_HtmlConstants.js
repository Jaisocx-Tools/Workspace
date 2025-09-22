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
var _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__HTMLDOC_STARTS, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_STARTTAG_OPEN, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_STARTTAG_CLOSE, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_SELFOPEN_OPEN, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_SELFOPEN_CLOSE, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_CLOSETAG_OPEN, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_CLOSETAG_CLOSE, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__ATTR_NAME_VALUE_JOINER, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__ATTR_OPEN, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__ATTR_CLOSE, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__ATTR_DELIMITER, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__COMMENT_OPEN, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__COMMENT_CLOSE, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__CDATA_OPEN, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__CDATA_CLOSE, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__HTML_UC, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__HEAD_UC, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__TITLE_UC, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__META_UC, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__SCRIPT_UC, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__LINK_UC, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__STYLE_UC, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__BODY_UC, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__MAIN_UC, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__FOOTER_UC, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__HTML_LC, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__HEAD_LC, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__TITLE_LC, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__META_LC, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__SCRIPT_LC, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__LINK_LC, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__STYLE_LC, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__BODY_LC, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__MAIN_LC, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__FOOTER_LC;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitbufKeywords_HtmlConstants = void 0;
const util_1 = require("util");
const Keywords_HtmlConstants_js_1 = require("./Keywords_HtmlConstants.js");
class BitbufKeywords_HtmlConstants extends Keywords_HtmlConstants_js_1.Keywords_HtmlConstants {
    constructor() {
        super();
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__HTMLDOC_STARTS.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_STARTTAG_OPEN.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_STARTTAG_CLOSE.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_SELFOPEN_OPEN.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_SELFOPEN_CLOSE.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_CLOSETAG_OPEN.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_CLOSETAG_CLOSE.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__ATTR_NAME_VALUE_JOINER.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__ATTR_OPEN.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__ATTR_CLOSE.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__ATTR_DELIMITER.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__COMMENT_OPEN.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__COMMENT_CLOSE.set(this, void 0);
        // XML RELATED
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__CDATA_OPEN.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__CDATA_CLOSE.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__HTML_UC.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__HEAD_UC.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__TITLE_UC.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__META_UC.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__SCRIPT_UC.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__LINK_UC.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__STYLE_UC.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__BODY_UC.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__MAIN_UC.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__FOOTER_UC.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__HTML_LC.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__HEAD_LC.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__TITLE_LC.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__META_LC.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__SCRIPT_LC.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__LINK_LC.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__STYLE_LC.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__BODY_LC.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__MAIN_LC.set(this, void 0);
        _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__FOOTER_LC.set(this, void 0);
        this._textEncoder = new util_1.TextEncoder();
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__HTMLDOC_STARTS, this._textEncoder.encode(this.getHtml_Token_HtmldocStarts()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_STARTTAG_OPEN, this._textEncoder.encode(this.getHtml_Token_Tag_Starttag_Open()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_STARTTAG_CLOSE, this._textEncoder.encode(this.getHtml_Token_Tag_Starttag_Close()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_SELFOPEN_OPEN, this._textEncoder.encode(this.getHtml_Token_Tag_Selfopen_Open()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_SELFOPEN_CLOSE, this._textEncoder.encode(this.getHtml_Token_Tag_Selfopen_Close()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_CLOSETAG_OPEN, this._textEncoder.encode(this.getHtml_Token_Tag_Closetag_Open()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_CLOSETAG_CLOSE, this._textEncoder.encode(this.getHtml_Token_Tag_Closetag_Close()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__ATTR_NAME_VALUE_JOINER, this._textEncoder.encode(this.getHtml_Token_Attr_NameValueJoiner()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__ATTR_OPEN, this._textEncoder.encode(this.getHtml_Token_Attr_Open()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__ATTR_CLOSE, this._textEncoder.encode(this.getHtml_Token_Attr_Close()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__ATTR_DELIMITER, this._textEncoder.encode(this.getHtml_Token_Attr_Delimiter()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__COMMENT_OPEN, this._textEncoder.encode(this.getHtml_Token_Comment_Open()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__COMMENT_CLOSE, this._textEncoder.encode(this.getHtml_Token_Comment_Close()), "f");
        // XML RELATED
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__CDATA_OPEN, this._textEncoder.encode(this.getHtml_Token_Cdata_Open()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__CDATA_CLOSE, this._textEncoder.encode(this.getHtml_Token_Cdata_Close()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__HTML_UC, this._textEncoder.encode(this.getHtml_Tagname_HTML_UC()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__HEAD_UC, this._textEncoder.encode(this.getHtml_Tagname_HEAD_UC()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__TITLE_UC, this._textEncoder.encode(this.getHtml_Tagname_TITLE_UC()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__META_UC, this._textEncoder.encode(this.getHtml_Tagname_META_UC()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__SCRIPT_UC, this._textEncoder.encode(this.getHtml_Tagname_SCRIPT_UC()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__LINK_UC, this._textEncoder.encode(this.getHtml_Tagname_LINK_UC()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__STYLE_UC, this._textEncoder.encode(this.getHtml_Tagname_STYLE_UC()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__BODY_UC, this._textEncoder.encode(this.getHtml_Tagname_BODY_UC()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__MAIN_UC, this._textEncoder.encode(this.getHtml_Tagname_MAIN_UC()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__FOOTER_UC, this._textEncoder.encode(this.getHtml_Tagname_FOOTER_UC()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__HTML_LC, this._textEncoder.encode(this.getHtml_Tagname_HTML_LC()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__HEAD_LC, this._textEncoder.encode(this.getHtml_Tagname_HEAD_LC()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__TITLE_LC, this._textEncoder.encode(this.getHtml_Tagname_TITLE_LC()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__META_LC, this._textEncoder.encode(this.getHtml_Tagname_META_LC()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__SCRIPT_LC, this._textEncoder.encode(this.getHtml_Tagname_SCRIPT_LC()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__LINK_LC, this._textEncoder.encode(this.getHtml_Tagname_LINK_LC()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__STYLE_LC, this._textEncoder.encode(this.getHtml_Tagname_STYLE_LC()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__BODY_LC, this._textEncoder.encode(this.getHtml_Tagname_BODY_LC()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__MAIN_LC, this._textEncoder.encode(this.getHtml_Tagname_MAIN_LC()), "f");
        __classPrivateFieldSet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__FOOTER_LC, this._textEncoder.encode(this.getHtml_Tagname_FOOTER_LC()), "f");
    }
    getBitbuf_Html_Token_HtmldocStarts() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__HTMLDOC_STARTS, "f");
    }
    getBitbuf_Html_Token_Tag_Starttag_Open() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_STARTTAG_OPEN, "f");
    }
    getBitbuf_Html_Token_Tag_Starttag_Close() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_STARTTAG_CLOSE, "f");
    }
    getBitbuf_Html_Token_Tag_Selfopen_Open() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_SELFOPEN_OPEN, "f");
    }
    getBitbuf_Html_Token_Tag_Selfopen_Close() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_SELFOPEN_CLOSE, "f");
    }
    getBitbuf_Html_Token_Tag_Closetag_Open() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_CLOSETAG_OPEN, "f");
    }
    getBitbuf_Html_Token_Tag_Closetag_Close() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_CLOSETAG_CLOSE, "f");
    }
    getBitbuf_Html_Token_Attr_NameValueJoiner() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__ATTR_NAME_VALUE_JOINER, "f");
    }
    getBitbuf_Html_Token_Attr_Open() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__ATTR_OPEN, "f");
    }
    getBitbuf_Html_Token_Attr_Close() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__ATTR_CLOSE, "f");
    }
    getBitbuf_Html_Token_Attr_Delimiter() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__ATTR_DELIMITER, "f");
    }
    getBitbuf_Html_Token_Comment_Open() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__COMMENT_OPEN, "f");
    }
    getBitbuf_Html_Token_Comment_Close() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__COMMENT_CLOSE, "f");
    }
    // XML RELATED
    getBitbuf_Html_Token_Cdata_Open() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__CDATA_OPEN, "f");
    }
    getBitbuf_Html_Token_Cdata_Close() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__CDATA_CLOSE, "f");
    }
    getBitbuf_Html_Tagname_HTML_UC() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__HTML_UC, "f");
    }
    getBitbuf_Html_Tagname_HEAD_UC() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__HEAD_UC, "f");
    }
    getBitbuf_Html_Tagname_TITLE_UC() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__TITLE_UC, "f");
    }
    getBitbuf_Html_Tagname_META_UC() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__META_UC, "f");
    }
    getBitbuf_Html_Tagname_SCRIPT_UC() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__SCRIPT_UC, "f");
    }
    getBitbuf_Html_Tagname_LINK_UC() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__LINK_UC, "f");
    }
    getBitbuf_Html_Tagname_STYLE_UC() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__STYLE_UC, "f");
    }
    getBitbuf_Html_Tagname_BODY_UC() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__BODY_UC, "f");
    }
    getBitbuf_Html_Tagname_MAIN_UC() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__MAIN_UC, "f");
    }
    getBitbuf_Html_Tagname_FOOTER_UC() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__FOOTER_UC, "f");
    }
    getBitbuf_Html_Tagname_HTML_LC() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__HTML_LC, "f");
    }
    getBitbuf_Html_Tagname_HEAD_LC() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__HEAD_LC, "f");
    }
    getBitbuf_Html_Tagname_TITLE_LC() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__TITLE_LC, "f");
    }
    getBitbuf_Html_Tagname_META_LC() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__META_LC, "f");
    }
    getBitbuf_Html_Tagname_SCRIPT_LC() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__SCRIPT_LC, "f");
    }
    getBitbuf_Html_Tagname_LINK_LC() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__LINK_LC, "f");
    }
    getBitbuf_Html_Tagname_STYLE_LC() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__STYLE_LC, "f");
    }
    getBitbuf_Html_Tagname_BODY_LC() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__BODY_LC, "f");
    }
    getBitbuf_Html_Tagname_MAIN_LC() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__MAIN_LC, "f");
    }
    getBitbuf_Html_Tagname_FOOTER_LC() {
        return __classPrivateFieldGet(this, _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__FOOTER_LC, "f");
    }
}
exports.BitbufKeywords_HtmlConstants = BitbufKeywords_HtmlConstants;
_BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__HTMLDOC_STARTS = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_STARTTAG_OPEN = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_STARTTAG_CLOSE = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_SELFOPEN_OPEN = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_SELFOPEN_CLOSE = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_CLOSETAG_OPEN = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__TAG_CLOSETAG_CLOSE = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__ATTR_NAME_VALUE_JOINER = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__ATTR_OPEN = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__ATTR_CLOSE = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__ATTR_DELIMITER = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__COMMENT_OPEN = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__COMMENT_CLOSE = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__CDATA_OPEN = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TOKEN__CDATA_CLOSE = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__HTML_UC = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__HEAD_UC = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__TITLE_UC = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__META_UC = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__SCRIPT_UC = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__LINK_UC = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__STYLE_UC = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__BODY_UC = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__MAIN_UC = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__FOOTER_UC = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__HTML_LC = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__HEAD_LC = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__TITLE_LC = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__META_LC = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__SCRIPT_LC = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__LINK_LC = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__STYLE_LC = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__BODY_LC = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__MAIN_LC = new WeakMap(), _BitbufKeywords_HtmlConstants_BITBUF__HTML__TAGNAME__FOOTER_LC = new WeakMap();
//# sourceMappingURL=BitbufKeywords_HtmlConstants.js.map