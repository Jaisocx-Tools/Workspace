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
var _CssImporterConstants_PATH__WEBPACK_ALIASES_JSON, _CssImporterConstants_WEBPACK_ALIAS_VARIABLE_NAME_PACKAGE_ROOT, _CssImporterConstants_CSS_TOKENS;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssImporterConstants = void 0;
class CssImporterConstants {
    constructor() {
        _CssImporterConstants_PATH__WEBPACK_ALIASES_JSON.set(this, void 0);
        _CssImporterConstants_WEBPACK_ALIAS_VARIABLE_NAME_PACKAGE_ROOT.set(this, void 0);
        _CssImporterConstants_CSS_TOKENS.set(this, void 0);
        __classPrivateFieldSet(this, _CssImporterConstants_PATH__WEBPACK_ALIASES_JSON, "webpack.aliases.json", "f");
        __classPrivateFieldSet(this, _CssImporterConstants_WEBPACK_ALIAS_VARIABLE_NAME_PACKAGE_ROOT, "${packageRoot}", "f");
        __classPrivateFieldSet(this, _CssImporterConstants_CSS_TOKENS, {
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
        }, "f");
    }
    getWebpackAliasesJsonPath() {
        return __classPrivateFieldGet(this, _CssImporterConstants_PATH__WEBPACK_ALIASES_JSON, "f");
    }
    setWebpackAliasesJsonPath(inPath) {
        __classPrivateFieldSet(this, _CssImporterConstants_PATH__WEBPACK_ALIASES_JSON, inPath, "f");
        return this;
    }
    getWebpackAliasVariableNamePackageRoot() {
        return __classPrivateFieldGet(this, _CssImporterConstants_WEBPACK_ALIAS_VARIABLE_NAME_PACKAGE_ROOT, "f");
    }
    setWebpackAliasVariableNamePackageRoot(variableName) {
        __classPrivateFieldSet(this, _CssImporterConstants_WEBPACK_ALIAS_VARIABLE_NAME_PACKAGE_ROOT, variableName, "f");
        return this;
    }
    getCssTokens() {
        return __classPrivateFieldGet(this, _CssImporterConstants_CSS_TOKENS, "f");
    }
    setCssTokens(inCssTokens) {
        __classPrivateFieldSet(this, _CssImporterConstants_CSS_TOKENS, inCssTokens, "f");
        return this;
    }
    addCssToken(inCssToken) {
        __classPrivateFieldGet(this, _CssImporterConstants_CSS_TOKENS, "f")[inCssToken] = true;
        return this;
    }
    removeCssToken(inCssToken) {
        delete __classPrivateFieldGet(this, _CssImporterConstants_CSS_TOKENS, "f")[inCssToken];
        return this;
    }
    hasCssToken(inCssToken) {
        return __classPrivateFieldGet(this, _CssImporterConstants_CSS_TOKENS, "f")[inCssToken] === true;
    }
    getCssTokenNames() {
        return Object.keys(__classPrivateFieldGet(this, _CssImporterConstants_CSS_TOKENS, "f"));
    }
}
exports.CssImporterConstants = CssImporterConstants;
_CssImporterConstants_PATH__WEBPACK_ALIASES_JSON = new WeakMap(), _CssImporterConstants_WEBPACK_ALIAS_VARIABLE_NAME_PACKAGE_ROOT = new WeakMap(), _CssImporterConstants_CSS_TOKENS = new WeakMap();
//# sourceMappingURL=CssImporterConstants.js.map