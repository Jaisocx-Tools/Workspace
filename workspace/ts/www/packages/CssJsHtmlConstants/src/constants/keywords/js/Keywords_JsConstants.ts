


export class Keywords_JsConstants {

  #SYMBOL__QUOTE_DOUBLE: string;
  #SYMBOL__QUOTE_SINGLE: string;


  constructor() {

    this.#SYMBOL__QUOTE_DOUBLE          = "\"";
    this.#SYMBOL__QUOTE_SINGLE          = "'";
  }



  public getWebpackAliasesJsonPath(): string {
    return this.#PATH__WEBPACK_ALIASES_JSON;
  }


}


