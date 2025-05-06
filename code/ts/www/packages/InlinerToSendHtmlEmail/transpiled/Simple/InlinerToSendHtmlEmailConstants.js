class InlinerToSendHtmlEmailConstants {
  stylesPropsDefaults;
  tagsStylesDefaults;
  stylesPropsToCheck;
  inheritingProps;
  allowedTags;
  renamedTags;

  constructor() {
    this.stylesPropsDefaults = {
      "padding": ["0", "0px", "0 0 0 0"], // TODO: H1-H6 and other tags, having default padding and margin values not zero.
      "padding-top": ["0px", "0"], // TODO: H1-H6 and other tags, having default padding and margin values not zero.
      "padding-right": ["0px", "0"], // TODO: H1-H6 and other tags, having default padding and margin values not zero.
      "padding-left": ["0px", "0"], // TODO: H1-H6 and other tags, having default padding and margin values not zero.
      "padding-bottom": ["0px", "0"], // TODO: H1-H6 and other tags, having default padding and margin values not zero.
      "margin": ["0", "0px", "0 0 0 0"],
      "margin-top": ["0px", "0"],
      "margin-right": ["0px", "0"],
      "margin-left": ["0px", "0"],
      "margin-bottom": ["0px", "0"],
      "background": ["transparent"],
      "all": ["unset"]
    };
    this.tagsStylesDefaults = {
      "DIV": {
        "display": "block"
      }
    };
    // styles, applicable, not stripped out by most webmail sites.
    this.stylesPropsToCheck = [
      "position",
      "display",
      "box-sizing",
      "overflow",
      "overflow-x",
      "overflow-y",
      "padding",
      "padding-top",
      "padding-right",
      "padding-left",
      "padding-bottom",
      "margin",
      "margin-top",
      "margin-right",
      "margin-left",
      "margin-bottom",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "flex-grow",
      "align-items",
      "justify-content",
      "background",
      "color",
      "font-family",
      "font-size",
      "font-weight",
      "line-height",
      "white-space",
      "word-break",
      "line-break",
      "border",
      "border-top",
      "border-right",
      "border-left",
      "border-bottom",
      "border-radius"
    ];
    this.inheritingProps = [
      "color",
      "font-family",
      "font-size",
      "font-weight",
      "line-height",
      "white-space",
      "word-break",
      "line-break"
    ];
    // tags, You wish to add when the inline-styles html is produced, to send via email.
    this.allowedTags = [
      "HTML",
      "BODY",
      "MAIN",
      "H1",
      "DIV",
      "SPAN",
      "IMG"
    ];
    this.renamedTags = [
      "HTML",
      "BODY",
      "MAIN"
    ];
  }
} 


