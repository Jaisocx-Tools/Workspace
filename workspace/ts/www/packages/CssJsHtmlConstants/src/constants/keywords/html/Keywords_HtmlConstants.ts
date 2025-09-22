import { SymbolConstants } from "../../symbols/SymbolConstants.js";



export class Keywords_HtmlConstants extends SymbolConstants {

  #TOKEN__HTMLDOC_STARTS:                       string;

  #TOKEN__TAG_STARTTAG_OPEN:                    string;
  #TOKEN__TAG_STARTTAG_CLOSE:                   string;

  #TOKEN__TAG_SELFOPEN_OPEN:                    string;
  #TOKEN__TAG_SELFOPEN_CLOSE:                   string;

  #TOKEN__TAG_CLOSETAG_OPEN:                    string;
  #TOKEN__TAG_CLOSETAG_CLOSE:                   string;

  #TOKEN__ATTR_NAME_VALUE_JOINER:               string;
  #TOKEN__ATTR_OPEN:                            string;
  #TOKEN__ATTR_CLOSE:                           string;
  #TOKEN__ATTR_DELIMITER:                       string;

  #TOKEN__COMMENT_OPEN:                         string;
  #TOKEN__COMMENT_CLOSE:                        string;


  // XML RELATED
  #TOKEN__CDATA_OPEN:                           string;
  #TOKEN__CDATA_CLOSE:                          string;

  #TAGNAME__HTML_UC:                            string;
  #TAGNAME__HEAD_UC:                            string;
  #TAGNAME__TITLE_UC:                           string;
  #TAGNAME__META_UC:                            string;
  #TAGNAME__SCRIPT_UC:                          string;
  #TAGNAME__LINK_UC:                            string;
  #TAGNAME__STYLE_UC:                           string;
  #TAGNAME__BODY_UC:                            string;
  #TAGNAME__MAIN_UC:                            string;
  #TAGNAME__FOOTER_UC:                          string;

  #TAGNAME__HTML_LC:                            string;
  #TAGNAME__HEAD_LC:                            string;
  #TAGNAME__TITLE_LC:                           string;
  #TAGNAME__META_LC:                            string;
  #TAGNAME__SCRIPT_LC:                          string;
  #TAGNAME__LINK_LC:                            string;
  #TAGNAME__STYLE_LC:                           string;
  #TAGNAME__BODY_LC:                            string;
  #TAGNAME__MAIN_LC:                            string;
  #TAGNAME__FOOTER_LC:                          string;



  constructor() {
    super();

    this.#TOKEN__HTMLDOC_STARTS                  = "<!DOCTYPE html>";

    this.#TOKEN__TAG_STARTTAG_OPEN               = this.getBraceTriangleOpen();
    this.#TOKEN__TAG_STARTTAG_CLOSE              = this.getBraceTriangleClose();

    this.#TOKEN__TAG_SELFOPEN_OPEN               = this.getBraceTriangleOpen();
    this.#TOKEN__TAG_SELFOPEN_CLOSE              = "/>";

    this.#TOKEN__TAG_CLOSETAG_OPEN               = "</";
    this.#TOKEN__TAG_CLOSETAG_CLOSE              = this.getBraceTriangleClose();

    this.#TOKEN__ATTR_NAME_VALUE_JOINER          = this.getEquality();
    this.#TOKEN__ATTR_OPEN                       = this.getQuoteDouble();
    this.#TOKEN__ATTR_CLOSE                      = this.getQuoteDouble();
    this.#TOKEN__ATTR_DELIMITER                  = this.getSymbolBackgroundColor();

    this.#TOKEN__COMMENT_OPEN                    = "<!--";
    this.#TOKEN__COMMENT_CLOSE                   = "-->";


    // XML RELATED
    this.#TOKEN__CDATA_OPEN                      = "<![CDATA[";
    this.#TOKEN__CDATA_CLOSE                     = "]]>";

    this.#TAGNAME__HTML_UC                       = "HTML";
    this.#TAGNAME__HEAD_UC                       = "HEAD";
    this.#TAGNAME__TITLE_UC                      = "TITLE";
    this.#TAGNAME__META_UC                       = "META";
    this.#TAGNAME__SCRIPT_UC                     = "SCRIPT";
    this.#TAGNAME__LINK_UC                       = "LINK";
    this.#TAGNAME__STYLE_UC                      = "STYLE";
    this.#TAGNAME__BODY_UC                       = "BODY";
    this.#TAGNAME__MAIN_UC                       = "MAIN";
    this.#TAGNAME__FOOTER_UC                     = "FOOTER";

    this.#TAGNAME__HTML_LC                       = "html";
    this.#TAGNAME__HEAD_LC                       = "head";
    this.#TAGNAME__TITLE_LC                      = "title";
    this.#TAGNAME__META_LC                       = "meta";
    this.#TAGNAME__SCRIPT_LC                     = "script";
    this.#TAGNAME__LINK_LC                       = "link";
    this.#TAGNAME__STYLE_LC                      = "style";
    this.#TAGNAME__BODY_LC                       = "body";
    this.#TAGNAME__MAIN_LC                       = "main";
    this.#TAGNAME__FOOTER_LC                     = "footer";

  }



  public getHtml_Token_HtmldocStarts():         string {
    return this.#TOKEN__HTMLDOC_STARTS; }



  public getHtml_Token_Tag_Starttag_Open():     string {
    return this.#TOKEN__TAG_STARTTAG_OPEN; }



  public getHtml_Token_Tag_Starttag_Close():    string {
    return this.#TOKEN__TAG_STARTTAG_CLOSE; }



  public getHtml_Token_Tag_Selfopen_Open():     string {
    return this.#TOKEN__TAG_SELFOPEN_OPEN; }



  public getHtml_Token_Tag_Selfopen_Close():    string {
    return this.#TOKEN__TAG_SELFOPEN_CLOSE; }



  public getHtml_Token_Tag_Closetag_Open():     string {
    return this.#TOKEN__TAG_CLOSETAG_OPEN; }



  public getHtml_Token_Tag_Closetag_Close():    string {
    return this.#TOKEN__TAG_CLOSETAG_CLOSE; }



  public getHtml_Token_Attr_NameValueJoiner():  string {
    return this.#TOKEN__ATTR_NAME_VALUE_JOINER; }



  public getHtml_Token_Attr_Open():             string {
    return this.#TOKEN__ATTR_OPEN; }



  public getHtml_Token_Attr_Close():            string {
    return this.#TOKEN__ATTR_CLOSE; }



  public getHtml_Token_Attr_Delimiter():        string {
    return this.#TOKEN__ATTR_DELIMITER; }



  public getHtml_Token_Comment_Open():          string {
    return this.#TOKEN__COMMENT_OPEN; }



  public getHtml_Token_Comment_Close():         string {
    return this.#TOKEN__COMMENT_CLOSE; }


  // XML RELATED
  public getHtml_Token_Cdata_Open():            string {
    return this.#TOKEN__CDATA_OPEN; }



  public getHtml_Token_Cdata_Close():           string {
    return this.#TOKEN__CDATA_CLOSE; }



  public getHtml_Tagname_HTML_UC():             string {
    return this.#TAGNAME__HTML_UC; }



  public getHtml_Tagname_HEAD_UC():             string {
    return this.#TAGNAME__HEAD_UC; }



  public getHtml_Tagname_TITLE_UC():            string {
    return this.#TAGNAME__TITLE_UC; }



  public getHtml_Tagname_META_UC():             string {
    return this.#TAGNAME__META_UC; }



  public getHtml_Tagname_SCRIPT_UC():           string {
    return this.#TAGNAME__SCRIPT_UC; }



  public getHtml_Tagname_LINK_UC():             string {
    return this.#TAGNAME__LINK_UC; }



  public getHtml_Tagname_STYLE_UC():            string {
    return this.#TAGNAME__STYLE_UC; }



  public getHtml_Tagname_BODY_UC():             string {
    return this.#TAGNAME__BODY_UC; }



  public getHtml_Tagname_MAIN_UC():             string {
    return this.#TAGNAME__MAIN_UC; }



  public getHtml_Tagname_FOOTER_UC():           string {
    return this.#TAGNAME__FOOTER_UC; }



  public getHtml_Tagname_HTML_LC():             string {
    return this.#TAGNAME__HTML_LC; }



  public getHtml_Tagname_HEAD_LC():             string {
    return this.#TAGNAME__HEAD_LC; }



  public getHtml_Tagname_TITLE_LC():            string {
    return this.#TAGNAME__TITLE_LC; }



  public getHtml_Tagname_META_LC():             string {
    return this.#TAGNAME__META_LC; }



  public getHtml_Tagname_SCRIPT_LC():           string {
    return this.#TAGNAME__SCRIPT_LC; }



  public getHtml_Tagname_LINK_LC():             string {
    return this.#TAGNAME__LINK_LC; }



  public getHtml_Tagname_STYLE_LC():            string {
    return this.#TAGNAME__STYLE_LC; }



  public getHtml_Tagname_BODY_LC():             string {
    return this.#TAGNAME__BODY_LC; }



  public getHtml_Tagname_MAIN_LC():             string {
    return this.#TAGNAME__MAIN_LC; }



  public getHtml_Tagname_FOOTER_LC():           string {
    return this.#TAGNAME__FOOTER_LC; }

}

