import { TextEncoder } from "util";
import { Keywords_HtmlConstants } from "./Keywords_HtmlConstants.js";



export class BitbufKeywords_HtmlConstants extends Keywords_HtmlConstants {

  _textEncoder: TextEncoder;

  #BITBUF__HTML__TOKEN__HTMLDOC_STARTS:                       Uint8Array;

  #BITBUF__HTML__TOKEN__TAG_STARTTAG_OPEN:                    Uint8Array;
  #BITBUF__HTML__TOKEN__TAG_STARTTAG_CLOSE:                   Uint8Array;

  #BITBUF__HTML__TOKEN__TAG_SELFOPEN_OPEN:                    Uint8Array;
  #BITBUF__HTML__TOKEN__TAG_SELFOPEN_CLOSE:                   Uint8Array;

  #BITBUF__HTML__TOKEN__TAG_CLOSETAG_OPEN:                    Uint8Array;
  #BITBUF__HTML__TOKEN__TAG_CLOSETAG_CLOSE:                   Uint8Array;

  #BITBUF__HTML__TOKEN__ATTR_NAME_VALUE_JOINER:               Uint8Array;
  #BITBUF__HTML__TOKEN__ATTR_OPEN:                            Uint8Array;
  #BITBUF__HTML__TOKEN__ATTR_CLOSE:                           Uint8Array;
  #BITBUF__HTML__TOKEN__ATTR_DELIMITER:                       Uint8Array;

  #BITBUF__HTML__TOKEN__COMMENT_OPEN:                         Uint8Array;
  #BITBUF__HTML__TOKEN__COMMENT_CLOSE:                        Uint8Array;


  // XML RELATED
  #BITBUF__HTML__TOKEN__CDATA_OPEN:                           Uint8Array;
  #BITBUF__HTML__TOKEN__CDATA_CLOSE:                          Uint8Array;

  #BITBUF__HTML__TAGNAME__HTML_UC:                            Uint8Array;
  #BITBUF__HTML__TAGNAME__HEAD_UC:                            Uint8Array;
  #BITBUF__HTML__TAGNAME__TITLE_UC:                           Uint8Array;
  #BITBUF__HTML__TAGNAME__META_UC:                            Uint8Array;
  #BITBUF__HTML__TAGNAME__SCRIPT_UC:                          Uint8Array;
  #BITBUF__HTML__TAGNAME__LINK_UC:                            Uint8Array;
  #BITBUF__HTML__TAGNAME__STYLE_UC:                           Uint8Array;
  #BITBUF__HTML__TAGNAME__BODY_UC:                            Uint8Array;
  #BITBUF__HTML__TAGNAME__MAIN_UC:                            Uint8Array;
  #BITBUF__HTML__TAGNAME__FOOTER_UC:                          Uint8Array;

  #BITBUF__HTML__TAGNAME__HTML_LC:                            Uint8Array;
  #BITBUF__HTML__TAGNAME__HEAD_LC:                            Uint8Array;
  #BITBUF__HTML__TAGNAME__TITLE_LC:                           Uint8Array;
  #BITBUF__HTML__TAGNAME__META_LC:                            Uint8Array;
  #BITBUF__HTML__TAGNAME__SCRIPT_LC:                          Uint8Array;
  #BITBUF__HTML__TAGNAME__LINK_LC:                            Uint8Array;
  #BITBUF__HTML__TAGNAME__STYLE_LC:                           Uint8Array;
  #BITBUF__HTML__TAGNAME__BODY_LC:                            Uint8Array;
  #BITBUF__HTML__TAGNAME__MAIN_LC:                            Uint8Array;
  #BITBUF__HTML__TAGNAME__FOOTER_LC:                          Uint8Array;



  constructor() {
    super();

    this._textEncoder = new TextEncoder();

    this.#BITBUF__HTML__TOKEN__HTMLDOC_STARTS                  = this._textEncoder.encode( this.getHtml_Token_HtmldocStarts() );

    this.#BITBUF__HTML__TOKEN__TAG_STARTTAG_OPEN               = this._textEncoder.encode( this.getHtml_Token_Tag_Starttag_Open() );
    this.#BITBUF__HTML__TOKEN__TAG_STARTTAG_CLOSE              = this._textEncoder.encode( this.getHtml_Token_Tag_Starttag_Close() );

    this.#BITBUF__HTML__TOKEN__TAG_SELFOPEN_OPEN               = this._textEncoder.encode( this.getHtml_Token_Tag_Selfopen_Open() );
    this.#BITBUF__HTML__TOKEN__TAG_SELFOPEN_CLOSE              = this._textEncoder.encode( this.getHtml_Token_Tag_Selfopen_Close() );

    this.#BITBUF__HTML__TOKEN__TAG_CLOSETAG_OPEN               = this._textEncoder.encode( this.getHtml_Token_Tag_Closetag_Open() );
    this.#BITBUF__HTML__TOKEN__TAG_CLOSETAG_CLOSE              = this._textEncoder.encode( this.getHtml_Token_Tag_Closetag_Close() );

    this.#BITBUF__HTML__TOKEN__ATTR_NAME_VALUE_JOINER          = this._textEncoder.encode( this.getHtml_Token_Attr_NameValueJoiner() );
    this.#BITBUF__HTML__TOKEN__ATTR_OPEN                       = this._textEncoder.encode( this.getHtml_Token_Attr_Open() );
    this.#BITBUF__HTML__TOKEN__ATTR_CLOSE                      = this._textEncoder.encode( this.getHtml_Token_Attr_Close() );
    this.#BITBUF__HTML__TOKEN__ATTR_DELIMITER                  = this._textEncoder.encode( this.getHtml_Token_Attr_Delimiter() );

    this.#BITBUF__HTML__TOKEN__COMMENT_OPEN                    = this._textEncoder.encode( this.getHtml_Token_Comment_Open() );
    this.#BITBUF__HTML__TOKEN__COMMENT_CLOSE                   = this._textEncoder.encode( this.getHtml_Token_Comment_Close() );


    // XML RELATED
    this.#BITBUF__HTML__TOKEN__CDATA_OPEN                      = this._textEncoder.encode( this.getHtml_Token_Cdata_Open() );
    this.#BITBUF__HTML__TOKEN__CDATA_CLOSE                     = this._textEncoder.encode( this.getHtml_Token_Cdata_Close() );

    this.#BITBUF__HTML__TAGNAME__HTML_UC                       = this._textEncoder.encode( this.getHtml_Tagname_HTML_UC() );
    this.#BITBUF__HTML__TAGNAME__HEAD_UC                       = this._textEncoder.encode( this.getHtml_Tagname_HEAD_UC() );
    this.#BITBUF__HTML__TAGNAME__TITLE_UC                      = this._textEncoder.encode( this.getHtml_Tagname_TITLE_UC() );
    this.#BITBUF__HTML__TAGNAME__META_UC                       = this._textEncoder.encode( this.getHtml_Tagname_META_UC() );
    this.#BITBUF__HTML__TAGNAME__SCRIPT_UC                     = this._textEncoder.encode( this.getHtml_Tagname_SCRIPT_UC() );
    this.#BITBUF__HTML__TAGNAME__LINK_UC                       = this._textEncoder.encode( this.getHtml_Tagname_LINK_UC() );
    this.#BITBUF__HTML__TAGNAME__STYLE_UC                      = this._textEncoder.encode( this.getHtml_Tagname_STYLE_UC() );
    this.#BITBUF__HTML__TAGNAME__BODY_UC                       = this._textEncoder.encode( this.getHtml_Tagname_BODY_UC() );
    this.#BITBUF__HTML__TAGNAME__MAIN_UC                       = this._textEncoder.encode( this.getHtml_Tagname_MAIN_UC() );
    this.#BITBUF__HTML__TAGNAME__FOOTER_UC                     = this._textEncoder.encode( this.getHtml_Tagname_FOOTER_UC() );

    this.#BITBUF__HTML__TAGNAME__HTML_LC                       = this._textEncoder.encode( this.getHtml_Tagname_HTML_LC() );
    this.#BITBUF__HTML__TAGNAME__HEAD_LC                       = this._textEncoder.encode( this.getHtml_Tagname_HEAD_LC() );
    this.#BITBUF__HTML__TAGNAME__TITLE_LC                      = this._textEncoder.encode( this.getHtml_Tagname_TITLE_LC() );
    this.#BITBUF__HTML__TAGNAME__META_LC                       = this._textEncoder.encode( this.getHtml_Tagname_META_LC() );
    this.#BITBUF__HTML__TAGNAME__SCRIPT_LC                     = this._textEncoder.encode( this.getHtml_Tagname_SCRIPT_LC() );
    this.#BITBUF__HTML__TAGNAME__LINK_LC                       = this._textEncoder.encode( this.getHtml_Tagname_LINK_LC() );
    this.#BITBUF__HTML__TAGNAME__STYLE_LC                      = this._textEncoder.encode( this.getHtml_Tagname_STYLE_LC() );
    this.#BITBUF__HTML__TAGNAME__BODY_LC                       = this._textEncoder.encode( this.getHtml_Tagname_BODY_LC() );
    this.#BITBUF__HTML__TAGNAME__MAIN_LC                       = this._textEncoder.encode( this.getHtml_Tagname_MAIN_LC() );
    this.#BITBUF__HTML__TAGNAME__FOOTER_LC                     = this._textEncoder.encode( this.getHtml_Tagname_FOOTER_LC() );

  }



  public getBitbuf_Html_Token_HtmldocStarts():         Uint8Array {
    return this.#BITBUF__HTML__TOKEN__HTMLDOC_STARTS; }



  public getBitbuf_Html_Token_Tag_Starttag_Open():     Uint8Array {
    return this.#BITBUF__HTML__TOKEN__TAG_STARTTAG_OPEN; }



  public getBitbuf_Html_Token_Tag_Starttag_Close():    Uint8Array {
    return this.#BITBUF__HTML__TOKEN__TAG_STARTTAG_CLOSE; }



  public getBitbuf_Html_Token_Tag_Selfopen_Open():     Uint8Array {
    return this.#BITBUF__HTML__TOKEN__TAG_SELFOPEN_OPEN; }



  public getBitbuf_Html_Token_Tag_Selfopen_Close():    Uint8Array {
    return this.#BITBUF__HTML__TOKEN__TAG_SELFOPEN_CLOSE; }



  public getBitbuf_Html_Token_Tag_Closetag_Open():     Uint8Array {
    return this.#BITBUF__HTML__TOKEN__TAG_CLOSETAG_OPEN; }



  public getBitbuf_Html_Token_Tag_Closetag_Close():    Uint8Array {
    return this.#BITBUF__HTML__TOKEN__TAG_CLOSETAG_CLOSE; }



  public getBitbuf_Html_Token_Attr_NameValueJoiner():  Uint8Array {
    return this.#BITBUF__HTML__TOKEN__ATTR_NAME_VALUE_JOINER; }



  public getBitbuf_Html_Token_Attr_Open():             Uint8Array {
    return this.#BITBUF__HTML__TOKEN__ATTR_OPEN; }



  public getBitbuf_Html_Token_Attr_Close():            Uint8Array {
    return this.#BITBUF__HTML__TOKEN__ATTR_CLOSE; }



  public getBitbuf_Html_Token_Attr_Delimiter():        Uint8Array {
    return this.#BITBUF__HTML__TOKEN__ATTR_DELIMITER; }



  public getBitbuf_Html_Token_Comment_Open():          Uint8Array {
    return this.#BITBUF__HTML__TOKEN__COMMENT_OPEN; }



  public getBitbuf_Html_Token_Comment_Close():         Uint8Array {
    return this.#BITBUF__HTML__TOKEN__COMMENT_CLOSE; }


  // XML RELATED
  public getBitbuf_Html_Token_Cdata_Open():            Uint8Array {
    return this.#BITBUF__HTML__TOKEN__CDATA_OPEN; }



  public getBitbuf_Html_Token_Cdata_Close():           Uint8Array {
    return this.#BITBUF__HTML__TOKEN__CDATA_CLOSE; }



  public getBitbuf_Html_Tagname_HTML_UC():             Uint8Array {
    return this.#BITBUF__HTML__TAGNAME__HTML_UC; }



  public getBitbuf_Html_Tagname_HEAD_UC():             Uint8Array {
    return this.#BITBUF__HTML__TAGNAME__HEAD_UC; }



  public getBitbuf_Html_Tagname_TITLE_UC():            Uint8Array {
    return this.#BITBUF__HTML__TAGNAME__TITLE_UC; }



  public getBitbuf_Html_Tagname_META_UC():             Uint8Array {
    return this.#BITBUF__HTML__TAGNAME__META_UC; }



  public getBitbuf_Html_Tagname_SCRIPT_UC():           Uint8Array {
    return this.#BITBUF__HTML__TAGNAME__SCRIPT_UC; }



  public getBitbuf_Html_Tagname_LINK_UC():             Uint8Array {
    return this.#BITBUF__HTML__TAGNAME__LINK_UC; }



  public getBitbuf_Html_Tagname_STYLE_UC():            Uint8Array {
    return this.#BITBUF__HTML__TAGNAME__STYLE_UC; }



  public getBitbuf_Html_Tagname_BODY_UC():             Uint8Array {
    return this.#BITBUF__HTML__TAGNAME__BODY_UC; }



  public getBitbuf_Html_Tagname_MAIN_UC():             Uint8Array {
    return this.#BITBUF__HTML__TAGNAME__MAIN_UC; }



  public getBitbuf_Html_Tagname_FOOTER_UC():           Uint8Array {
    return this.#BITBUF__HTML__TAGNAME__FOOTER_UC; }



  public getBitbuf_Html_Tagname_HTML_LC():             Uint8Array {
    return this.#BITBUF__HTML__TAGNAME__HTML_LC; }



  public getBitbuf_Html_Tagname_HEAD_LC():             Uint8Array {
    return this.#BITBUF__HTML__TAGNAME__HEAD_LC; }



  public getBitbuf_Html_Tagname_TITLE_LC():            Uint8Array {
    return this.#BITBUF__HTML__TAGNAME__TITLE_LC; }



  public getBitbuf_Html_Tagname_META_LC():             Uint8Array {
    return this.#BITBUF__HTML__TAGNAME__META_LC; }



  public getBitbuf_Html_Tagname_SCRIPT_LC():           Uint8Array {
    return this.#BITBUF__HTML__TAGNAME__SCRIPT_LC; }



  public getBitbuf_Html_Tagname_LINK_LC():             Uint8Array {
    return this.#BITBUF__HTML__TAGNAME__LINK_LC; }



  public getBitbuf_Html_Tagname_STYLE_LC():            Uint8Array {
    return this.#BITBUF__HTML__TAGNAME__STYLE_LC; }



  public getBitbuf_Html_Tagname_BODY_LC():             Uint8Array {
    return this.#BITBUF__HTML__TAGNAME__BODY_LC; }



  public getBitbuf_Html_Tagname_MAIN_LC():             Uint8Array {
    return this.#BITBUF__HTML__TAGNAME__MAIN_LC; }



  public getBitbuf_Html_Tagname_FOOTER_LC():           Uint8Array {
    return this.#BITBUF__HTML__TAGNAME__FOOTER_LC; }

}

