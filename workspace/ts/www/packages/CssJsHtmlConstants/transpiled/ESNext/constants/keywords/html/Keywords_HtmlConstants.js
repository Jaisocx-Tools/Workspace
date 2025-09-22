import { SymbolConstants } from "../../symbols/SymbolConstants.js";
export class Keywords_HtmlConstants extends SymbolConstants {
    #TOKEN__HTMLDOC_STARTS;
    #TOKEN__TAG_STARTTAG_OPEN;
    #TOKEN__TAG_STARTTAG_CLOSE;
    #TOKEN__TAG_SELFOPEN_OPEN;
    #TOKEN__TAG_SELFOPEN_CLOSE;
    #TOKEN__TAG_CLOSETAG_OPEN;
    #TOKEN__TAG_CLOSETAG_CLOSE;
    #TOKEN__ATTR_NAME_VALUE_JOINER;
    #TOKEN__ATTR_OPEN;
    #TOKEN__ATTR_CLOSE;
    #TOKEN__ATTR_DELIMITER;
    #TOKEN__COMMENT_OPEN;
    #TOKEN__COMMENT_CLOSE;
    // XML RELATED
    #TOKEN__CDATA_OPEN;
    #TOKEN__CDATA_CLOSE;
    #TAGNAME__HTML_UC;
    #TAGNAME__HEAD_UC;
    #TAGNAME__TITLE_UC;
    #TAGNAME__META_UC;
    #TAGNAME__SCRIPT_UC;
    #TAGNAME__LINK_UC;
    #TAGNAME__STYLE_UC;
    #TAGNAME__BODY_UC;
    #TAGNAME__MAIN_UC;
    #TAGNAME__FOOTER_UC;
    #TAGNAME__HTML_LC;
    #TAGNAME__HEAD_LC;
    #TAGNAME__TITLE_LC;
    #TAGNAME__META_LC;
    #TAGNAME__SCRIPT_LC;
    #TAGNAME__LINK_LC;
    #TAGNAME__STYLE_LC;
    #TAGNAME__BODY_LC;
    #TAGNAME__MAIN_LC;
    #TAGNAME__FOOTER_LC;
    constructor() {
        super();
        this.#TOKEN__HTMLDOC_STARTS = "<!DOCTYPE html>";
        this.#TOKEN__TAG_STARTTAG_OPEN = this.getBraceTriangleOpen();
        this.#TOKEN__TAG_STARTTAG_CLOSE = this.getBraceTriangleClose();
        this.#TOKEN__TAG_SELFOPEN_OPEN = this.getBraceTriangleOpen();
        this.#TOKEN__TAG_SELFOPEN_CLOSE = "/>";
        this.#TOKEN__TAG_CLOSETAG_OPEN = "</";
        this.#TOKEN__TAG_CLOSETAG_CLOSE = this.getBraceTriangleClose();
        this.#TOKEN__ATTR_NAME_VALUE_JOINER = this.getEquality();
        this.#TOKEN__ATTR_OPEN = this.getQuoteDouble();
        this.#TOKEN__ATTR_CLOSE = this.getQuoteDouble();
        this.#TOKEN__ATTR_DELIMITER = this.getSymbolBackgroundColor();
        this.#TOKEN__COMMENT_OPEN = "<!--";
        this.#TOKEN__COMMENT_CLOSE = "-->";
        // XML RELATED
        this.#TOKEN__CDATA_OPEN = "<![CDATA[";
        this.#TOKEN__CDATA_CLOSE = "]]>";
        this.#TAGNAME__HTML_UC = "HTML";
        this.#TAGNAME__HEAD_UC = "HEAD";
        this.#TAGNAME__TITLE_UC = "TITLE";
        this.#TAGNAME__META_UC = "META";
        this.#TAGNAME__SCRIPT_UC = "SCRIPT";
        this.#TAGNAME__LINK_UC = "LINK";
        this.#TAGNAME__STYLE_UC = "STYLE";
        this.#TAGNAME__BODY_UC = "BODY";
        this.#TAGNAME__MAIN_UC = "MAIN";
        this.#TAGNAME__FOOTER_UC = "FOOTER";
        this.#TAGNAME__HTML_LC = "html";
        this.#TAGNAME__HEAD_LC = "head";
        this.#TAGNAME__TITLE_LC = "title";
        this.#TAGNAME__META_LC = "meta";
        this.#TAGNAME__SCRIPT_LC = "script";
        this.#TAGNAME__LINK_LC = "link";
        this.#TAGNAME__STYLE_LC = "style";
        this.#TAGNAME__BODY_LC = "body";
        this.#TAGNAME__MAIN_LC = "main";
        this.#TAGNAME__FOOTER_LC = "footer";
    }
    getHtml_Token_HtmldocStarts() {
        return this.#TOKEN__HTMLDOC_STARTS;
    }
    getHtml_Token_Tag_Starttag_Open() {
        return this.#TOKEN__TAG_STARTTAG_OPEN;
    }
    getHtml_Token_Tag_Starttag_Close() {
        return this.#TOKEN__TAG_STARTTAG_CLOSE;
    }
    getHtml_Token_Tag_Selfopen_Open() {
        return this.#TOKEN__TAG_SELFOPEN_OPEN;
    }
    getHtml_Token_Tag_Selfopen_Close() {
        return this.#TOKEN__TAG_SELFOPEN_CLOSE;
    }
    getHtml_Token_Tag_Closetag_Open() {
        return this.#TOKEN__TAG_CLOSETAG_OPEN;
    }
    getHtml_Token_Tag_Closetag_Close() {
        return this.#TOKEN__TAG_CLOSETAG_CLOSE;
    }
    getHtml_Token_Attr_NameValueJoiner() {
        return this.#TOKEN__ATTR_NAME_VALUE_JOINER;
    }
    getHtml_Token_Attr_Open() {
        return this.#TOKEN__ATTR_OPEN;
    }
    getHtml_Token_Attr_Close() {
        return this.#TOKEN__ATTR_CLOSE;
    }
    getHtml_Token_Attr_Delimiter() {
        return this.#TOKEN__ATTR_DELIMITER;
    }
    getHtml_Token_Comment_Open() {
        return this.#TOKEN__COMMENT_OPEN;
    }
    getHtml_Token_Comment_Close() {
        return this.#TOKEN__COMMENT_CLOSE;
    }
    // XML RELATED
    getHtml_Token_Cdata_Open() {
        return this.#TOKEN__CDATA_OPEN;
    }
    getHtml_Token_Cdata_Close() {
        return this.#TOKEN__CDATA_CLOSE;
    }
    getHtml_Tagname_HTML_UC() {
        return this.#TAGNAME__HTML_UC;
    }
    getHtml_Tagname_HEAD_UC() {
        return this.#TAGNAME__HEAD_UC;
    }
    getHtml_Tagname_TITLE_UC() {
        return this.#TAGNAME__TITLE_UC;
    }
    getHtml_Tagname_META_UC() {
        return this.#TAGNAME__META_UC;
    }
    getHtml_Tagname_SCRIPT_UC() {
        return this.#TAGNAME__SCRIPT_UC;
    }
    getHtml_Tagname_LINK_UC() {
        return this.#TAGNAME__LINK_UC;
    }
    getHtml_Tagname_STYLE_UC() {
        return this.#TAGNAME__STYLE_UC;
    }
    getHtml_Tagname_BODY_UC() {
        return this.#TAGNAME__BODY_UC;
    }
    getHtml_Tagname_MAIN_UC() {
        return this.#TAGNAME__MAIN_UC;
    }
    getHtml_Tagname_FOOTER_UC() {
        return this.#TAGNAME__FOOTER_UC;
    }
    getHtml_Tagname_HTML_LC() {
        return this.#TAGNAME__HTML_LC;
    }
    getHtml_Tagname_HEAD_LC() {
        return this.#TAGNAME__HEAD_LC;
    }
    getHtml_Tagname_TITLE_LC() {
        return this.#TAGNAME__TITLE_LC;
    }
    getHtml_Tagname_META_LC() {
        return this.#TAGNAME__META_LC;
    }
    getHtml_Tagname_SCRIPT_LC() {
        return this.#TAGNAME__SCRIPT_LC;
    }
    getHtml_Tagname_LINK_LC() {
        return this.#TAGNAME__LINK_LC;
    }
    getHtml_Tagname_STYLE_LC() {
        return this.#TAGNAME__STYLE_LC;
    }
    getHtml_Tagname_BODY_LC() {
        return this.#TAGNAME__BODY_LC;
    }
    getHtml_Tagname_MAIN_LC() {
        return this.#TAGNAME__MAIN_LC;
    }
    getHtml_Tagname_FOOTER_LC() {
        return this.#TAGNAME__FOOTER_LC;
    }
}
//# sourceMappingURL=Keywords_HtmlConstants.js.map