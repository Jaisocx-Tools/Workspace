export class CssImporterConstants {
    #PATH__WEBPACK_ALIASES_JSON;
    #WEBPACK_ALIAS_VARIABLE_NAME_PACKAGE_ROOT;
    #CSS_TOKENS;
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
    getWebpackAliasesJsonPath() {
        return this.#PATH__WEBPACK_ALIASES_JSON;
    }
    setWebpackAliasesJsonPath(inPath) {
        this.#PATH__WEBPACK_ALIASES_JSON = inPath;
        return this;
    }
    getWebpackAliasVariableNamePackageRoot() {
        return this.#WEBPACK_ALIAS_VARIABLE_NAME_PACKAGE_ROOT;
    }
    setWebpackAliasVariableNamePackageRoot(variableName) {
        this.#WEBPACK_ALIAS_VARIABLE_NAME_PACKAGE_ROOT = variableName;
        return this;
    }
    getCssTokens() {
        return this.#CSS_TOKENS;
    }
    setCssTokens(inCssTokens) {
        this.#CSS_TOKENS = inCssTokens;
        return this;
    }
    addCssToken(inCssToken) {
        this.#CSS_TOKENS[inCssToken] = true;
        return this;
    }
    removeCssToken(inCssToken) {
        delete this.#CSS_TOKENS[inCssToken];
        return this;
    }
    hasCssToken(inCssToken) {
        return this.#CSS_TOKENS[inCssToken] === true;
    }
    getCssTokenNames() {
        return Object.keys(this.#CSS_TOKENS);
    }
}
//# sourceMappingURL=CssImporterConstants.js.map