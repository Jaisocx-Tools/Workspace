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
var _Keywords_HtmlConstants_TOKEN__HTMLDOC_STARTS, _Keywords_HtmlConstants_TOKEN__TAG_STARTTAG_OPEN, _Keywords_HtmlConstants_TOKEN__TAG_STARTTAG_CLOSE, _Keywords_HtmlConstants_TOKEN__TAG_SELFOPEN_OPEN, _Keywords_HtmlConstants_TOKEN__TAG_SELFOPEN_CLOSE, _Keywords_HtmlConstants_TOKEN__TAG_CLOSETAG_OPEN, _Keywords_HtmlConstants_TOKEN__TAG_CLOSETAG_CLOSE, _Keywords_HtmlConstants_TOKEN__ATTR_NAME_VALUE_JOINER, _Keywords_HtmlConstants_TOKEN__ATTR_OPEN, _Keywords_HtmlConstants_TOKEN__ATTR_CLOSE, _Keywords_HtmlConstants_TOKEN__ATTR_DELIMITER, _Keywords_HtmlConstants_TOKEN__COMMENT_OPEN, _Keywords_HtmlConstants_TOKEN__COMMENT_CLOSE, _Keywords_HtmlConstants_TOKEN__CDATA_OPEN, _Keywords_HtmlConstants_TOKEN__CDATA_CLOSE, _Keywords_HtmlConstants_TAGNAME__HTML_UC, _Keywords_HtmlConstants_TAGNAME__HEAD_UC, _Keywords_HtmlConstants_TAGNAME__TITLE_UC, _Keywords_HtmlConstants_TAGNAME__META_UC, _Keywords_HtmlConstants_TAGNAME__SCRIPT_UC, _Keywords_HtmlConstants_TAGNAME__LINK_UC, _Keywords_HtmlConstants_TAGNAME__STYLE_UC, _Keywords_HtmlConstants_TAGNAME__BODY_UC, _Keywords_HtmlConstants_TAGNAME__MAIN_UC, _Keywords_HtmlConstants_TAGNAME__FOOTER_UC, _Keywords_HtmlConstants_TAGNAME__HTML_LC, _Keywords_HtmlConstants_TAGNAME__HEAD_LC, _Keywords_HtmlConstants_TAGNAME__TITLE_LC, _Keywords_HtmlConstants_TAGNAME__META_LC, _Keywords_HtmlConstants_TAGNAME__SCRIPT_LC, _Keywords_HtmlConstants_TAGNAME__LINK_LC, _Keywords_HtmlConstants_TAGNAME__STYLE_LC, _Keywords_HtmlConstants_TAGNAME__BODY_LC, _Keywords_HtmlConstants_TAGNAME__MAIN_LC, _Keywords_HtmlConstants_TAGNAME__FOOTER_LC;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Keywords_HtmlConstants = void 0;
const SymbolConstants_js_1 = require("../../symbols/SymbolConstants.js");
class Keywords_HtmlConstants extends SymbolConstants_js_1.SymbolConstants {
    constructor() {
        super();
        _Keywords_HtmlConstants_TOKEN__HTMLDOC_STARTS.set(this, void 0);
        _Keywords_HtmlConstants_TOKEN__TAG_STARTTAG_OPEN.set(this, void 0);
        _Keywords_HtmlConstants_TOKEN__TAG_STARTTAG_CLOSE.set(this, void 0);
        _Keywords_HtmlConstants_TOKEN__TAG_SELFOPEN_OPEN.set(this, void 0);
        _Keywords_HtmlConstants_TOKEN__TAG_SELFOPEN_CLOSE.set(this, void 0);
        _Keywords_HtmlConstants_TOKEN__TAG_CLOSETAG_OPEN.set(this, void 0);
        _Keywords_HtmlConstants_TOKEN__TAG_CLOSETAG_CLOSE.set(this, void 0);
        _Keywords_HtmlConstants_TOKEN__ATTR_NAME_VALUE_JOINER.set(this, void 0);
        _Keywords_HtmlConstants_TOKEN__ATTR_OPEN.set(this, void 0);
        _Keywords_HtmlConstants_TOKEN__ATTR_CLOSE.set(this, void 0);
        _Keywords_HtmlConstants_TOKEN__ATTR_DELIMITER.set(this, void 0);
        _Keywords_HtmlConstants_TOKEN__COMMENT_OPEN.set(this, void 0);
        _Keywords_HtmlConstants_TOKEN__COMMENT_CLOSE.set(this, void 0);
        // XML RELATED
        _Keywords_HtmlConstants_TOKEN__CDATA_OPEN.set(this, void 0);
        _Keywords_HtmlConstants_TOKEN__CDATA_CLOSE.set(this, void 0);
        _Keywords_HtmlConstants_TAGNAME__HTML_UC.set(this, void 0);
        _Keywords_HtmlConstants_TAGNAME__HEAD_UC.set(this, void 0);
        _Keywords_HtmlConstants_TAGNAME__TITLE_UC.set(this, void 0);
        _Keywords_HtmlConstants_TAGNAME__META_UC.set(this, void 0);
        _Keywords_HtmlConstants_TAGNAME__SCRIPT_UC.set(this, void 0);
        _Keywords_HtmlConstants_TAGNAME__LINK_UC.set(this, void 0);
        _Keywords_HtmlConstants_TAGNAME__STYLE_UC.set(this, void 0);
        _Keywords_HtmlConstants_TAGNAME__BODY_UC.set(this, void 0);
        _Keywords_HtmlConstants_TAGNAME__MAIN_UC.set(this, void 0);
        _Keywords_HtmlConstants_TAGNAME__FOOTER_UC.set(this, void 0);
        _Keywords_HtmlConstants_TAGNAME__HTML_LC.set(this, void 0);
        _Keywords_HtmlConstants_TAGNAME__HEAD_LC.set(this, void 0);
        _Keywords_HtmlConstants_TAGNAME__TITLE_LC.set(this, void 0);
        _Keywords_HtmlConstants_TAGNAME__META_LC.set(this, void 0);
        _Keywords_HtmlConstants_TAGNAME__SCRIPT_LC.set(this, void 0);
        _Keywords_HtmlConstants_TAGNAME__LINK_LC.set(this, void 0);
        _Keywords_HtmlConstants_TAGNAME__STYLE_LC.set(this, void 0);
        _Keywords_HtmlConstants_TAGNAME__BODY_LC.set(this, void 0);
        _Keywords_HtmlConstants_TAGNAME__MAIN_LC.set(this, void 0);
        _Keywords_HtmlConstants_TAGNAME__FOOTER_LC.set(this, void 0);
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TOKEN__HTMLDOC_STARTS, "<!DOCTYPE html>", "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TOKEN__TAG_STARTTAG_OPEN, this.getBraceTriangleOpen(), "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TOKEN__TAG_STARTTAG_CLOSE, this.getBraceTriangleClose(), "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TOKEN__TAG_SELFOPEN_OPEN, this.getBraceTriangleOpen(), "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TOKEN__TAG_SELFOPEN_CLOSE, "/>", "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TOKEN__TAG_CLOSETAG_OPEN, "</", "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TOKEN__TAG_CLOSETAG_CLOSE, this.getBraceTriangleClose(), "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TOKEN__ATTR_NAME_VALUE_JOINER, this.getEquality(), "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TOKEN__ATTR_OPEN, this.getQuoteDouble(), "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TOKEN__ATTR_CLOSE, this.getQuoteDouble(), "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TOKEN__ATTR_DELIMITER, this.getSymbolBackgroundColor(), "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TOKEN__COMMENT_OPEN, "<!--", "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TOKEN__COMMENT_CLOSE, "-->", "f");
        // XML RELATED
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TOKEN__CDATA_OPEN, "<![CDATA[", "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TOKEN__CDATA_CLOSE, "]]>", "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TAGNAME__HTML_UC, "HTML", "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TAGNAME__HEAD_UC, "HEAD", "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TAGNAME__TITLE_UC, "TITLE", "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TAGNAME__META_UC, "META", "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TAGNAME__SCRIPT_UC, "SCRIPT", "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TAGNAME__LINK_UC, "LINK", "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TAGNAME__STYLE_UC, "STYLE", "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TAGNAME__BODY_UC, "BODY", "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TAGNAME__MAIN_UC, "MAIN", "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TAGNAME__FOOTER_UC, "FOOTER", "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TAGNAME__HTML_LC, "html", "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TAGNAME__HEAD_LC, "head", "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TAGNAME__TITLE_LC, "title", "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TAGNAME__META_LC, "meta", "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TAGNAME__SCRIPT_LC, "script", "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TAGNAME__LINK_LC, "link", "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TAGNAME__STYLE_LC, "style", "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TAGNAME__BODY_LC, "body", "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TAGNAME__MAIN_LC, "main", "f");
        __classPrivateFieldSet(this, _Keywords_HtmlConstants_TAGNAME__FOOTER_LC, "footer", "f");
    }
    getHtml_Token_HtmldocStarts() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TOKEN__HTMLDOC_STARTS, "f");
    }
    getHtml_Token_Tag_Starttag_Open() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TOKEN__TAG_STARTTAG_OPEN, "f");
    }
    getHtml_Token_Tag_Starttag_Close() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TOKEN__TAG_STARTTAG_CLOSE, "f");
    }
    getHtml_Token_Tag_Selfopen_Open() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TOKEN__TAG_SELFOPEN_OPEN, "f");
    }
    getHtml_Token_Tag_Selfopen_Close() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TOKEN__TAG_SELFOPEN_CLOSE, "f");
    }
    getHtml_Token_Tag_Closetag_Open() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TOKEN__TAG_CLOSETAG_OPEN, "f");
    }
    getHtml_Token_Tag_Closetag_Close() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TOKEN__TAG_CLOSETAG_CLOSE, "f");
    }
    getHtml_Token_Attr_NameValueJoiner() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TOKEN__ATTR_NAME_VALUE_JOINER, "f");
    }
    getHtml_Token_Attr_Open() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TOKEN__ATTR_OPEN, "f");
    }
    getHtml_Token_Attr_Close() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TOKEN__ATTR_CLOSE, "f");
    }
    getHtml_Token_Attr_Delimiter() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TOKEN__ATTR_DELIMITER, "f");
    }
    getHtml_Token_Comment_Open() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TOKEN__COMMENT_OPEN, "f");
    }
    getHtml_Token_Comment_Close() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TOKEN__COMMENT_CLOSE, "f");
    }
    // XML RELATED
    getHtml_Token_Cdata_Open() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TOKEN__CDATA_OPEN, "f");
    }
    getHtml_Token_Cdata_Close() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TOKEN__CDATA_CLOSE, "f");
    }
    getHtml_Tagname_HTML_UC() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TAGNAME__HTML_UC, "f");
    }
    getHtml_Tagname_HEAD_UC() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TAGNAME__HEAD_UC, "f");
    }
    getHtml_Tagname_TITLE_UC() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TAGNAME__TITLE_UC, "f");
    }
    getHtml_Tagname_META_UC() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TAGNAME__META_UC, "f");
    }
    getHtml_Tagname_SCRIPT_UC() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TAGNAME__SCRIPT_UC, "f");
    }
    getHtml_Tagname_LINK_UC() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TAGNAME__LINK_UC, "f");
    }
    getHtml_Tagname_STYLE_UC() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TAGNAME__STYLE_UC, "f");
    }
    getHtml_Tagname_BODY_UC() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TAGNAME__BODY_UC, "f");
    }
    getHtml_Tagname_MAIN_UC() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TAGNAME__MAIN_UC, "f");
    }
    getHtml_Tagname_FOOTER_UC() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TAGNAME__FOOTER_UC, "f");
    }
    getHtml_Tagname_HTML_LC() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TAGNAME__HTML_LC, "f");
    }
    getHtml_Tagname_HEAD_LC() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TAGNAME__HEAD_LC, "f");
    }
    getHtml_Tagname_TITLE_LC() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TAGNAME__TITLE_LC, "f");
    }
    getHtml_Tagname_META_LC() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TAGNAME__META_LC, "f");
    }
    getHtml_Tagname_SCRIPT_LC() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TAGNAME__SCRIPT_LC, "f");
    }
    getHtml_Tagname_LINK_LC() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TAGNAME__LINK_LC, "f");
    }
    getHtml_Tagname_STYLE_LC() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TAGNAME__STYLE_LC, "f");
    }
    getHtml_Tagname_BODY_LC() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TAGNAME__BODY_LC, "f");
    }
    getHtml_Tagname_MAIN_LC() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TAGNAME__MAIN_LC, "f");
    }
    getHtml_Tagname_FOOTER_LC() {
        return __classPrivateFieldGet(this, _Keywords_HtmlConstants_TAGNAME__FOOTER_LC, "f");
    }
}
exports.Keywords_HtmlConstants = Keywords_HtmlConstants;
_Keywords_HtmlConstants_TOKEN__HTMLDOC_STARTS = new WeakMap(), _Keywords_HtmlConstants_TOKEN__TAG_STARTTAG_OPEN = new WeakMap(), _Keywords_HtmlConstants_TOKEN__TAG_STARTTAG_CLOSE = new WeakMap(), _Keywords_HtmlConstants_TOKEN__TAG_SELFOPEN_OPEN = new WeakMap(), _Keywords_HtmlConstants_TOKEN__TAG_SELFOPEN_CLOSE = new WeakMap(), _Keywords_HtmlConstants_TOKEN__TAG_CLOSETAG_OPEN = new WeakMap(), _Keywords_HtmlConstants_TOKEN__TAG_CLOSETAG_CLOSE = new WeakMap(), _Keywords_HtmlConstants_TOKEN__ATTR_NAME_VALUE_JOINER = new WeakMap(), _Keywords_HtmlConstants_TOKEN__ATTR_OPEN = new WeakMap(), _Keywords_HtmlConstants_TOKEN__ATTR_CLOSE = new WeakMap(), _Keywords_HtmlConstants_TOKEN__ATTR_DELIMITER = new WeakMap(), _Keywords_HtmlConstants_TOKEN__COMMENT_OPEN = new WeakMap(), _Keywords_HtmlConstants_TOKEN__COMMENT_CLOSE = new WeakMap(), _Keywords_HtmlConstants_TOKEN__CDATA_OPEN = new WeakMap(), _Keywords_HtmlConstants_TOKEN__CDATA_CLOSE = new WeakMap(), _Keywords_HtmlConstants_TAGNAME__HTML_UC = new WeakMap(), _Keywords_HtmlConstants_TAGNAME__HEAD_UC = new WeakMap(), _Keywords_HtmlConstants_TAGNAME__TITLE_UC = new WeakMap(), _Keywords_HtmlConstants_TAGNAME__META_UC = new WeakMap(), _Keywords_HtmlConstants_TAGNAME__SCRIPT_UC = new WeakMap(), _Keywords_HtmlConstants_TAGNAME__LINK_UC = new WeakMap(), _Keywords_HtmlConstants_TAGNAME__STYLE_UC = new WeakMap(), _Keywords_HtmlConstants_TAGNAME__BODY_UC = new WeakMap(), _Keywords_HtmlConstants_TAGNAME__MAIN_UC = new WeakMap(), _Keywords_HtmlConstants_TAGNAME__FOOTER_UC = new WeakMap(), _Keywords_HtmlConstants_TAGNAME__HTML_LC = new WeakMap(), _Keywords_HtmlConstants_TAGNAME__HEAD_LC = new WeakMap(), _Keywords_HtmlConstants_TAGNAME__TITLE_LC = new WeakMap(), _Keywords_HtmlConstants_TAGNAME__META_LC = new WeakMap(), _Keywords_HtmlConstants_TAGNAME__SCRIPT_LC = new WeakMap(), _Keywords_HtmlConstants_TAGNAME__LINK_LC = new WeakMap(), _Keywords_HtmlConstants_TAGNAME__STYLE_LC = new WeakMap(), _Keywords_HtmlConstants_TAGNAME__BODY_LC = new WeakMap(), _Keywords_HtmlConstants_TAGNAME__MAIN_LC = new WeakMap(), _Keywords_HtmlConstants_TAGNAME__FOOTER_LC = new WeakMap();
//# sourceMappingURL=Keywords_HtmlConstants.js.map