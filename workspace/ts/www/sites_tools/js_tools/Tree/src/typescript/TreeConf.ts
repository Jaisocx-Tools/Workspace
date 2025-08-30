export class TreeConf {
  NODE_ICON__SRC: any;
  NODE_LABEL__TEXT: any;
  SUBTREE: any;
  NODE__ID: any;
  NODE__HOLDER_ID: any;
  NODE__PATH: any;
  NODE__ORDER: any;
  NODE__HYPERLINK: any;
  NODE__OPENED: any;
  NODE__CSS_CLASS_NAME: any;
  NODE__ART: any;



  constructor() {
    this.NODE_ICON__SRC = "icon";
    this.NODE_LABEL__TEXT = "label";
    this.SUBTREE = "subtree";

    this.NODE__ID = "id";
    this.NODE__HOLDER_ID = "holderId";
    this.NODE__PATH = "PATH";
    this.NODE__ORDER = "order";

    this.NODE__HYPERLINK = "href";
    this.NODE__OPENED = "opened";
    this.NODE__CSS_CLASS_NAME = "cssClassName";
    this.NODE__ART = "art";
  }
}
