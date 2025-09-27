export class CssImporterConstants {

  #PATH__WEBPACK_ALIASES_JSON: string;
  #WEBPACK_ALIAS_VARIABLE_NAME_PACKAGE_ROOT: string;

  #CSS_TOKENS: any;



  constructor() {
    this.#PATH__WEBPACK_ALIASES_JSON = "webpack.aliases.json";
    this.#WEBPACK_ALIAS_VARIABLE_NAME_PACKAGE_ROOT = "${packageRoot}";

    this.#CSS_TOKENS = {
      "comment": {
        "setBegin": [
          "/*"
        ],
        "setEnd": [
          "*/"
        ]
      },
      "import": {
        "setBegin": [
          "@import",
          "url",
          "("
        ],
        "setEnd": [
          ")",
          ";"
        ]
      }
    };
  }



  public getWebpackAliasesJsonPath(): string {
    return this.#PATH__WEBPACK_ALIASES_JSON;
  }



  public setWebpackAliasesJsonPath( inPath: string ): CssImporterConstants {
    this.#PATH__WEBPACK_ALIASES_JSON = inPath;


    return this;
  }



  public getWebpackAliasVariableNamePackageRoot(): string {
    return this.#WEBPACK_ALIAS_VARIABLE_NAME_PACKAGE_ROOT;
  }



  public setWebpackAliasVariableNamePackageRoot( variableName: string ): CssImporterConstants {
    this.#WEBPACK_ALIAS_VARIABLE_NAME_PACKAGE_ROOT = variableName;


    return this;
  }



  public getCssTokens(): any {
    return this.#CSS_TOKENS;
  }



  public setCssTokens( inCssTokens: any ): CssImporterConstants {
    this.#CSS_TOKENS = inCssTokens;


    return this;
  }



  public addCssToken( inCssToken: string ): CssImporterConstants {
    this.#CSS_TOKENS[ inCssToken ] = true;


    return this;
  }



  public removeCssToken( inCssToken: string ): CssImporterConstants {
    delete this.#CSS_TOKENS[ inCssToken ];


    return this;
  }



  public hasCssToken( inCssToken: string ): boolean {
    return this.#CSS_TOKENS[ inCssToken ] === true;
  }



  public getCssTokenNames(): string[] {
    return Object.keys( this.#CSS_TOKENS );
  }

}


