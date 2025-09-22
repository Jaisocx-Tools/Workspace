import { TextEncoder } from "util";
import { Keywords_HtmlConstants } from "./Keywords_HtmlConstants.js";
export class BitbufKeywords_HtmlConstants extends Keywords_HtmlConstants {
    _textEncoder;
    #BITBUF__HTML__TOKEN__HTMLDOC_STARTS;
    #BITBUF__HTML__TOKEN__TAG_STARTTAG_OPEN;
    #BITBUF__HTML__TOKEN__TAG_STARTTAG_CLOSE;
    #BITBUF__HTML__TOKEN__TAG_SELFOPEN_OPEN;
    #BITBUF__HTML__TOKEN__TAG_SELFOPEN_CLOSE;
    #BITBUF__HTML__TOKEN__TAG_CLOSETAG_OPEN;
    #BITBUF__HTML__TOKEN__TAG_CLOSETAG_CLOSE;
    #BITBUF__HTML__TOKEN__ATTR_NAME_VALUE_JOINER;
    #BITBUF__HTML__TOKEN__ATTR_OPEN;
    #BITBUF__HTML__TOKEN__ATTR_CLOSE;
    #BITBUF__HTML__TOKEN__ATTR_DELIMITER;
    #BITBUF__HTML__TOKEN__COMMENT_OPEN;
    #BITBUF__HTML__TOKEN__COMMENT_CLOSE;
    // XML RELATED
    #BITBUF__HTML__TOKEN__CDATA_OPEN;
    #BITBUF__HTML__TOKEN__CDATA_CLOSE;
    #BITBUF__HTML__TAGNAME__HTML_UC;
    #BITBUF__HTML__TAGNAME__HEAD_UC;
    #BITBUF__HTML__TAGNAME__TITLE_UC;
    #BITBUF__HTML__TAGNAME__META_UC;
    #BITBUF__HTML__TAGNAME__SCRIPT_UC;
    #BITBUF__HTML__TAGNAME__LINK_UC;
    #BITBUF__HTML__TAGNAME__STYLE_UC;
    #BITBUF__HTML__TAGNAME__BODY_UC;
    #BITBUF__HTML__TAGNAME__MAIN_UC;
    #BITBUF__HTML__TAGNAME__FOOTER_UC;
    #BITBUF__HTML__TAGNAME__HTML_LC;
    #BITBUF__HTML__TAGNAME__HEAD_LC;
    #BITBUF__HTML__TAGNAME__TITLE_LC;
    #BITBUF__HTML__TAGNAME__META_LC;
    #BITBUF__HTML__TAGNAME__SCRIPT_LC;
    #BITBUF__HTML__TAGNAME__LINK_LC;
    #BITBUF__HTML__TAGNAME__STYLE_LC;
    #BITBUF__HTML__TAGNAME__BODY_LC;
    #BITBUF__HTML__TAGNAME__MAIN_LC;
    #BITBUF__HTML__TAGNAME__FOOTER_LC;
    constructor() {
        super();
        this._textEncoder = new TextEncoder();
        this.#BITBUF__HTML__TOKEN__HTMLDOC_STARTS = this._textEncoder.encode(this.getHtml_Token_HtmldocStarts());
        this.#BITBUF__HTML__TOKEN__TAG_STARTTAG_OPEN = this._textEncoder.encode(this.getHtml_Token_Tag_Starttag_Open());
        this.#BITBUF__HTML__TOKEN__TAG_STARTTAG_CLOSE = this._textEncoder.encode(this.getHtml_Token_Tag_Starttag_Close());
        this.#BITBUF__HTML__TOKEN__TAG_SELFOPEN_OPEN = this._textEncoder.encode(this.getHtml_Token_Tag_Selfopen_Open());
        this.#BITBUF__HTML__TOKEN__TAG_SELFOPEN_CLOSE = this._textEncoder.encode(this.getHtml_Token_Tag_Selfopen_Close());
        this.#BITBUF__HTML__TOKEN__TAG_CLOSETAG_OPEN = this._textEncoder.encode(this.getHtml_Token_Tag_Closetag_Open());
        this.#BITBUF__HTML__TOKEN__TAG_CLOSETAG_CLOSE = this._textEncoder.encode(this.getHtml_Token_Tag_Closetag_Close());
        this.#BITBUF__HTML__TOKEN__ATTR_NAME_VALUE_JOINER = this._textEncoder.encode(this.getHtml_Token_Attr_NameValueJoiner());
        this.#BITBUF__HTML__TOKEN__ATTR_OPEN = this._textEncoder.encode(this.getHtml_Token_Attr_Open());
        this.#BITBUF__HTML__TOKEN__ATTR_CLOSE = this._textEncoder.encode(this.getHtml_Token_Attr_Close());
        this.#BITBUF__HTML__TOKEN__ATTR_DELIMITER = this._textEncoder.encode(this.getHtml_Token_Attr_Delimiter());
        this.#BITBUF__HTML__TOKEN__COMMENT_OPEN = this._textEncoder.encode(this.getHtml_Token_Comment_Open());
        this.#BITBUF__HTML__TOKEN__COMMENT_CLOSE = this._textEncoder.encode(this.getHtml_Token_Comment_Close());
        // XML RELATED
        this.#BITBUF__HTML__TOKEN__CDATA_OPEN = this._textEncoder.encode(this.getHtml_Token_Cdata_Open());
        this.#BITBUF__HTML__TOKEN__CDATA_CLOSE = this._textEncoder.encode(this.getHtml_Token_Cdata_Close());
        this.#BITBUF__HTML__TAGNAME__HTML_UC = this._textEncoder.encode(this.getHtml_Tagname_HTML_UC());
        this.#BITBUF__HTML__TAGNAME__HEAD_UC = this._textEncoder.encode(this.getHtml_Tagname_HEAD_UC());
        this.#BITBUF__HTML__TAGNAME__TITLE_UC = this._textEncoder.encode(this.getHtml_Tagname_TITLE_UC());
        this.#BITBUF__HTML__TAGNAME__META_UC = this._textEncoder.encode(this.getHtml_Tagname_META_UC());
        this.#BITBUF__HTML__TAGNAME__SCRIPT_UC = this._textEncoder.encode(this.getHtml_Tagname_SCRIPT_UC());
        this.#BITBUF__HTML__TAGNAME__LINK_UC = this._textEncoder.encode(this.getHtml_Tagname_LINK_UC());
        this.#BITBUF__HTML__TAGNAME__STYLE_UC = this._textEncoder.encode(this.getHtml_Tagname_STYLE_UC());
        this.#BITBUF__HTML__TAGNAME__BODY_UC = this._textEncoder.encode(this.getHtml_Tagname_BODY_UC());
        this.#BITBUF__HTML__TAGNAME__MAIN_UC = this._textEncoder.encode(this.getHtml_Tagname_MAIN_UC());
        this.#BITBUF__HTML__TAGNAME__FOOTER_UC = this._textEncoder.encode(this.getHtml_Tagname_FOOTER_UC());
        this.#BITBUF__HTML__TAGNAME__HTML_LC = this._textEncoder.encode(this.getHtml_Tagname_HTML_LC());
        this.#BITBUF__HTML__TAGNAME__HEAD_LC = this._textEncoder.encode(this.getHtml_Tagname_HEAD_LC());
        this.#BITBUF__HTML__TAGNAME__TITLE_LC = this._textEncoder.encode(this.getHtml_Tagname_TITLE_LC());
        this.#BITBUF__HTML__TAGNAME__META_LC = this._textEncoder.encode(this.getHtml_Tagname_META_LC());
        this.#BITBUF__HTML__TAGNAME__SCRIPT_LC = this._textEncoder.encode(this.getHtml_Tagname_SCRIPT_LC());
        this.#BITBUF__HTML__TAGNAME__LINK_LC = this._textEncoder.encode(this.getHtml_Tagname_LINK_LC());
        this.#BITBUF__HTML__TAGNAME__STYLE_LC = this._textEncoder.encode(this.getHtml_Tagname_STYLE_LC());
        this.#BITBUF__HTML__TAGNAME__BODY_LC = this._textEncoder.encode(this.getHtml_Tagname_BODY_LC());
        this.#BITBUF__HTML__TAGNAME__MAIN_LC = this._textEncoder.encode(this.getHtml_Tagname_MAIN_LC());
        this.#BITBUF__HTML__TAGNAME__FOOTER_LC = this._textEncoder.encode(this.getHtml_Tagname_FOOTER_LC());
    }
    getBitbuf_Html_Token_HtmldocStarts() {
        return this.#BITBUF__HTML__TOKEN__HTMLDOC_STARTS;
    }
    getBitbuf_Html_Token_Tag_Starttag_Open() {
        return this.#BITBUF__HTML__TOKEN__TAG_STARTTAG_OPEN;
    }
    getBitbuf_Html_Token_Tag_Starttag_Close() {
        return this.#BITBUF__HTML__TOKEN__TAG_STARTTAG_CLOSE;
    }
    getBitbuf_Html_Token_Tag_Selfopen_Open() {
        return this.#BITBUF__HTML__TOKEN__TAG_SELFOPEN_OPEN;
    }
    getBitbuf_Html_Token_Tag_Selfopen_Close() {
        return this.#BITBUF__HTML__TOKEN__TAG_SELFOPEN_CLOSE;
    }
    getBitbuf_Html_Token_Tag_Closetag_Open() {
        return this.#BITBUF__HTML__TOKEN__TAG_CLOSETAG_OPEN;
    }
    getBitbuf_Html_Token_Tag_Closetag_Close() {
        return this.#BITBUF__HTML__TOKEN__TAG_CLOSETAG_CLOSE;
    }
    getBitbuf_Html_Token_Attr_NameValueJoiner() {
        return this.#BITBUF__HTML__TOKEN__ATTR_NAME_VALUE_JOINER;
    }
    getBitbuf_Html_Token_Attr_Open() {
        return this.#BITBUF__HTML__TOKEN__ATTR_OPEN;
    }
    getBitbuf_Html_Token_Attr_Close() {
        return this.#BITBUF__HTML__TOKEN__ATTR_CLOSE;
    }
    getBitbuf_Html_Token_Attr_Delimiter() {
        return this.#BITBUF__HTML__TOKEN__ATTR_DELIMITER;
    }
    getBitbuf_Html_Token_Comment_Open() {
        return this.#BITBUF__HTML__TOKEN__COMMENT_OPEN;
    }
    getBitbuf_Html_Token_Comment_Close() {
        return this.#BITBUF__HTML__TOKEN__COMMENT_CLOSE;
    }
    // XML RELATED
    getBitbuf_Html_Token_Cdata_Open() {
        return this.#BITBUF__HTML__TOKEN__CDATA_OPEN;
    }
    getBitbuf_Html_Token_Cdata_Close() {
        return this.#BITBUF__HTML__TOKEN__CDATA_CLOSE;
    }
    getBitbuf_Html_Tagname_HTML_UC() {
        return this.#BITBUF__HTML__TAGNAME__HTML_UC;
    }
    getBitbuf_Html_Tagname_HEAD_UC() {
        return this.#BITBUF__HTML__TAGNAME__HEAD_UC;
    }
    getBitbuf_Html_Tagname_TITLE_UC() {
        return this.#BITBUF__HTML__TAGNAME__TITLE_UC;
    }
    getBitbuf_Html_Tagname_META_UC() {
        return this.#BITBUF__HTML__TAGNAME__META_UC;
    }
    getBitbuf_Html_Tagname_SCRIPT_UC() {
        return this.#BITBUF__HTML__TAGNAME__SCRIPT_UC;
    }
    getBitbuf_Html_Tagname_LINK_UC() {
        return this.#BITBUF__HTML__TAGNAME__LINK_UC;
    }
    getBitbuf_Html_Tagname_STYLE_UC() {
        return this.#BITBUF__HTML__TAGNAME__STYLE_UC;
    }
    getBitbuf_Html_Tagname_BODY_UC() {
        return this.#BITBUF__HTML__TAGNAME__BODY_UC;
    }
    getBitbuf_Html_Tagname_MAIN_UC() {
        return this.#BITBUF__HTML__TAGNAME__MAIN_UC;
    }
    getBitbuf_Html_Tagname_FOOTER_UC() {
        return this.#BITBUF__HTML__TAGNAME__FOOTER_UC;
    }
    getBitbuf_Html_Tagname_HTML_LC() {
        return this.#BITBUF__HTML__TAGNAME__HTML_LC;
    }
    getBitbuf_Html_Tagname_HEAD_LC() {
        return this.#BITBUF__HTML__TAGNAME__HEAD_LC;
    }
    getBitbuf_Html_Tagname_TITLE_LC() {
        return this.#BITBUF__HTML__TAGNAME__TITLE_LC;
    }
    getBitbuf_Html_Tagname_META_LC() {
        return this.#BITBUF__HTML__TAGNAME__META_LC;
    }
    getBitbuf_Html_Tagname_SCRIPT_LC() {
        return this.#BITBUF__HTML__TAGNAME__SCRIPT_LC;
    }
    getBitbuf_Html_Tagname_LINK_LC() {
        return this.#BITBUF__HTML__TAGNAME__LINK_LC;
    }
    getBitbuf_Html_Tagname_STYLE_LC() {
        return this.#BITBUF__HTML__TAGNAME__STYLE_LC;
    }
    getBitbuf_Html_Tagname_BODY_LC() {
        return this.#BITBUF__HTML__TAGNAME__BODY_LC;
    }
    getBitbuf_Html_Tagname_MAIN_LC() {
        return this.#BITBUF__HTML__TAGNAME__MAIN_LC;
    }
    getBitbuf_Html_Tagname_FOOTER_LC() {
        return this.#BITBUF__HTML__TAGNAME__FOOTER_LC;
    }
}
//# sourceMappingURL=BitbufKeywords_HtmlConstants.js.map