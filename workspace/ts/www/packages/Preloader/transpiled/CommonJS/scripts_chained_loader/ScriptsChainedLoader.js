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
var _ScriptsChainedLoader_confKey__scripts, _ScriptsChainedLoader_confKey__node_modules, _ScriptsChainedLoader_confKey__npm_namespace, _ScriptsChainedLoader_path_SimpleBuild, _ScriptsChainedLoader_tagname_script, _ScriptsChainedLoader_scriptAttr_data, _ScriptsChainedLoader_scriptAttr_scriptId, _ScriptsChainedLoader_scriptAttr_npmPackageId, _ScriptsChainedLoader_scriptAttr_src, _ScriptsChainedLoader_npmNamespace, _ScriptsChainedLoader_scriptSrcArray, _ScriptsChainedLoader_offset_dynamicPathArrayId_ScriptSrcArray, _ScriptsChainedLoader_offset_npmPackageName_ScriptSrcArray, _ScriptsChainedLoader_offset_jsFilepath_ScriptSrcArray;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptsChainedLoader = void 0;
class ScriptsChainedLoader {
    constructor() {
        _ScriptsChainedLoader_confKey__scripts.set(this, void 0);
        _ScriptsChainedLoader_confKey__node_modules.set(this, void 0);
        _ScriptsChainedLoader_confKey__npm_namespace.set(this, void 0);
        _ScriptsChainedLoader_path_SimpleBuild.set(this, void 0);
        _ScriptsChainedLoader_tagname_script.set(this, void 0);
        _ScriptsChainedLoader_scriptAttr_data.set(this, void 0);
        _ScriptsChainedLoader_scriptAttr_scriptId.set(this, void 0);
        _ScriptsChainedLoader_scriptAttr_npmPackageId.set(this, void 0);
        _ScriptsChainedLoader_scriptAttr_src.set(this, void 0);
        _ScriptsChainedLoader_npmNamespace.set(this, void 0);
        _ScriptsChainedLoader_scriptSrcArray.set(this, void 0);
        _ScriptsChainedLoader_offset_dynamicPathArrayId_ScriptSrcArray.set(this, void 0);
        _ScriptsChainedLoader_offset_npmPackageName_ScriptSrcArray.set(this, void 0);
        _ScriptsChainedLoader_offset_jsFilepath_ScriptSrcArray.set(this, void 0);
        this._SYMBOL_ZEROLEN_CHAR = "";
        this._SYMBOL_UNDERSCRORE_CHAR = "_";
        __classPrivateFieldSet(this, _ScriptsChainedLoader_confKey__scripts, "scripts", "f");
        __classPrivateFieldSet(this, _ScriptsChainedLoader_confKey__node_modules, "node_modules", "f");
        __classPrivateFieldSet(this, _ScriptsChainedLoader_confKey__npm_namespace, "npm_namespace", "f");
        __classPrivateFieldSet(this, _ScriptsChainedLoader_path_SimpleBuild, "transpiled/Simple/", "f");
        __classPrivateFieldSet(this, _ScriptsChainedLoader_tagname_script, "script", "f");
        __classPrivateFieldSet(this, _ScriptsChainedLoader_scriptAttr_data, "data-scripts_data_object", "f");
        __classPrivateFieldSet(this, _ScriptsChainedLoader_scriptAttr_scriptId, "data-script_id", "f");
        __classPrivateFieldSet(this, _ScriptsChainedLoader_scriptAttr_npmPackageId, "data-npmpackage_id", "f");
        __classPrivateFieldSet(this, _ScriptsChainedLoader_scriptAttr_src, "src", "f");
        __classPrivateFieldSet(this, _ScriptsChainedLoader_npmNamespace, "@jaisocx", "f");
        __classPrivateFieldSet(this, _ScriptsChainedLoader_scriptSrcArray, [
            "< dynamicPathArrayId >",
            "< npmPackageName >",
            "/",
            __classPrivateFieldGet(this, _ScriptsChainedLoader_path_SimpleBuild, "f"),
            "< jsFilepath >",
            ".js"
        ], "f");
        __classPrivateFieldSet(this, _ScriptsChainedLoader_offset_dynamicPathArrayId_ScriptSrcArray, 0, "f");
        __classPrivateFieldSet(this, _ScriptsChainedLoader_offset_npmPackageName_ScriptSrcArray, 1, "f");
        __classPrivateFieldSet(this, _ScriptsChainedLoader_offset_jsFilepath_ScriptSrcArray, 4, "f");
        this._debug = false;
    }
    setDebug(inDebug) {
        this._debug = inDebug;
        return this;
    }
    onload() {
        if (this._debug === true) {
            console.info("ScriptsChainedLoader onload() event handler was not set.");
        }
    }
    load(scriptsDataObject, chained) {
        let scriptLoaderInstance = this;
        let npmPackageId = 0;
        let scriptId = 0;
        let hasNext_true = true;
        let isFallback_false = false;
        if (chained) {
            this.loadOneScript(scriptLoaderInstance, scriptsDataObject, npmPackageId, scriptId, hasNext_true, isFallback_false);
            return;
        }
        let scriptsObject = new Object();
        let scriptsArray = new Array();
        let npmPackageName = this._SYMBOL_ZEROLEN_CHAR;
        let isWithFallbackSrc = true;
        let npmPackagesNames = Object.keys(scriptsDataObject);
        let npmPackagesNumber = npmPackagesNames.length;
        let hasNext = true;
        let scriptsNumber = 0;
        let npmpackageSecureCounter = 1;
        let scriptSecureCounter = 1;
        let npmpackageSecureMaxCounter = 20;
        let scriptSecureMaxCounter = 20;
        hasNext = false;
        toLabelA: while (npmPackageId < npmPackagesNumber) {
            npmpackageSecureCounter++;
            if (npmpackageSecureCounter >= npmpackageSecureMaxCounter) {
                break toLabelA;
            }
            npmPackageName = npmPackagesNames[npmPackageId];
            scriptsObject = scriptsDataObject[npmPackageName];
            scriptsArray = scriptsObject[__classPrivateFieldGet(this, _ScriptsChainedLoader_confKey__scripts, "f")];
            isWithFallbackSrc = scriptsObject[__classPrivateFieldGet(this, _ScriptsChainedLoader_confKey__node_modules, "f")];
            scriptsNumber = scriptsArray.length;
            scriptId = 0;
            scriptSecureCounter = 1;
            toLabelB: while (scriptId < scriptsNumber) {
                scriptSecureCounter++;
                if (scriptSecureCounter >= scriptSecureMaxCounter) {
                    break toLabelB;
                }
                this.loadOneScript(scriptLoaderInstance, scriptsDataObject, npmPackageId, scriptId, hasNext, isWithFallbackSrc);
                scriptId++;
            }
            npmPackageId++;
        }
    }
    loadOneScript(scriptLoaderInstance, scriptsDataObject, npmPackageId, scriptId, _hasNext, isFallback) {
        var _a;
        let npmPackagesNames = Object.keys(scriptsDataObject);
        let npmPackageName = npmPackagesNames[npmPackageId];
        let scriptsObject = scriptsDataObject[npmPackageName];
        let scriptsArray = scriptsObject[__classPrivateFieldGet(this, _ScriptsChainedLoader_confKey__scripts, "f")];
        let isInNodeModules = (scriptsObject[__classPrivateFieldGet(this, _ScriptsChainedLoader_confKey__node_modules, "f")] === true);
        let isWithFallbackSrc = isInNodeModules;
        let locNpmNamespace = (_a = scriptsObject[__classPrivateFieldGet(this, _ScriptsChainedLoader_confKey__npm_namespace, "f")]) !== null && _a !== void 0 ? _a : __classPrivateFieldGet(this, _ScriptsChainedLoader_npmNamespace, "f");
        let jsFilepath = scriptsArray[scriptId];
        let scriptSrc = this._SYMBOL_ZEROLEN_CHAR;
        let fallbackScriptSrc = this._SYMBOL_ZEROLEN_CHAR;
        let offset_dynamicPathArrayId = __classPrivateFieldGet(this, _ScriptsChainedLoader_offset_dynamicPathArrayId_ScriptSrcArray, "f");
        let offset_npmPackageName = __classPrivateFieldGet(this, _ScriptsChainedLoader_offset_npmPackageName_ScriptSrcArray, "f");
        let offset_jsFilepath = __classPrivateFieldGet(this, _ScriptsChainedLoader_offset_jsFilepath_ScriptSrcArray, "f");
        // the more efficient workaround, building strings, than simultaneous .replace() or the simultaneous concatenation:
        // the array building url or fallback url
        // obtains 3 values on array offsets,
        // in order to join to url of datatype string later.
        if ((isInNodeModules === true) && (isFallback === true)) {
            __classPrivateFieldGet(this, _ScriptsChainedLoader_scriptSrcArray, "f")[offset_dynamicPathArrayId] = "../";
        }
        else if ((isInNodeModules === true) && (isFallback === false)) {
            __classPrivateFieldGet(this, _ScriptsChainedLoader_scriptSrcArray, "f")[offset_dynamicPathArrayId] = ["node_modules/", locNpmNamespace, "/"].join("");
        }
        __classPrivateFieldGet(this, _ScriptsChainedLoader_scriptSrcArray, "f")[offset_npmPackageName] = npmPackageName;
        __classPrivateFieldGet(this, _ScriptsChainedLoader_scriptSrcArray, "f")[offset_jsFilepath] = jsFilepath;
        let locScriptSrcArray = __classPrivateFieldGet(this, _ScriptsChainedLoader_scriptSrcArray, "f");
        if (isInNodeModules === false) {
            locScriptSrcArray = __classPrivateFieldGet(this, _ScriptsChainedLoader_scriptSrcArray, "f").slice(3);
        }
        // the url or fallback url
        // is joined from the array of strings,
        // having set values on offsets before.
        scriptSrc = locScriptSrcArray.join(this._SYMBOL_ZEROLEN_CHAR);
        if (isInNodeModules && isFallback) {
            fallbackScriptSrc = scriptSrc;
        }
        let tagScriptCreated = document.createElement(__classPrivateFieldGet(this, _ScriptsChainedLoader_tagname_script, "f"));
        tagScriptCreated.setAttribute(__classPrivateFieldGet(this, _ScriptsChainedLoader_scriptAttr_data, "f"), JSON.stringify(scriptsDataObject));
        tagScriptCreated.setAttribute(__classPrivateFieldGet(this, _ScriptsChainedLoader_scriptAttr_scriptId, "f"), (this._SYMBOL_ZEROLEN_CHAR + scriptId));
        tagScriptCreated.setAttribute(__classPrivateFieldGet(this, _ScriptsChainedLoader_scriptAttr_npmPackageId, "f"), (this._SYMBOL_ZEROLEN_CHAR + npmPackageId));
        let jsFileReplaced = jsFilepath.replaceAll("/", "_");
        let numIsFallback = (isFallback && isWithFallbackSrc) ? 1 : 0;
        let dateNow = Date.now();
        let tagScriptId = [
            __classPrivateFieldGet(this, _ScriptsChainedLoader_tagname_script, "f"),
            npmPackageName,
            jsFileReplaced,
            numIsFallback,
            dateNow
        ].join(this._SYMBOL_UNDERSCRORE_CHAR);
        tagScriptCreated.id = tagScriptId;
        document.body.append(tagScriptCreated);
        let tagScript = document.getElementById(tagScriptId);
        if (isFallback === false && isWithFallbackSrc) {
            let locOnerrorFunc = () => {
                scriptLoaderInstance.scriptOnerror(scriptLoaderInstance, tagScript);
            };
            tagScript.onerror = locOnerrorFunc.bind(tagScript);
        }
        let locOnloadFunc = () => {
            scriptLoaderInstance.scriptOnload(scriptLoaderInstance, tagScript);
        };
        tagScript.onload = locOnloadFunc.bind(tagScript);
        try {
            if (isInNodeModules && isFallback) {
                tagScript.setAttribute(__classPrivateFieldGet(this, _ScriptsChainedLoader_scriptAttr_src, "f"), fallbackScriptSrc);
            }
            else {
                tagScript.setAttribute(__classPrivateFieldGet(this, _ScriptsChainedLoader_scriptAttr_src, "f"), scriptSrc);
            }
        }
        catch (e) { }
    }
    scriptOnload(scriptLoaderInstance, currentTagScript) {
        let scriptsDataObject = new Object();
        let scriptId = 0;
        let npmPackageId = 0;
        let hasNext = true;
        let attributeValue = this._SYMBOL_ZEROLEN_CHAR;
        attributeValue = currentTagScript.getAttribute(__classPrivateFieldGet(this, _ScriptsChainedLoader_scriptAttr_data, "f"));
        if (attributeValue !== null && attributeValue.length !== 0) {
            scriptsDataObject = JSON.parse(attributeValue);
        }
        attributeValue = currentTagScript.getAttribute(__classPrivateFieldGet(this, _ScriptsChainedLoader_scriptAttr_scriptId, "f"));
        if (attributeValue !== null && attributeValue.length !== 0) {
            scriptId = +attributeValue;
        }
        attributeValue = currentTagScript.getAttribute(__classPrivateFieldGet(this, _ScriptsChainedLoader_scriptAttr_npmPackageId, "f"));
        if (attributeValue !== null && attributeValue.length !== 0) {
            npmPackageId = +attributeValue;
        }
        currentTagScript.removeAttribute(__classPrivateFieldGet(this, _ScriptsChainedLoader_scriptAttr_data, "f"));
        let npmPackagesNames = Object.keys(scriptsDataObject);
        let npmPackagesNumber = npmPackagesNames.length;
        let npmPackageName = npmPackagesNames[npmPackageId];
        let scriptsObject = scriptsDataObject[npmPackageName];
        let scriptsArray = scriptsObject[__classPrivateFieldGet(this, _ScriptsChainedLoader_confKey__scripts, "f")];
        let scriptsNumber = scriptsArray.length;
        let nextNpmPackageId = npmPackageId;
        let nextScriptId = (scriptId + 1);
        if (nextScriptId >= scriptsNumber) {
            nextNpmPackageId = (npmPackageId + 1);
            nextScriptId = 0;
        }
        if (nextNpmPackageId >= npmPackagesNumber) {
            hasNext = false;
        }
        if (hasNext === false) {
            scriptLoaderInstance.onload();
            return;
        }
        scriptLoaderInstance.loadOneScript(scriptLoaderInstance, scriptsDataObject, nextNpmPackageId, nextScriptId, hasNext, false);
    }
    scriptOnerror(scriptLoaderInstance, currentTagScript) {
        let scriptsDataObject = new Object();
        let scriptId = 0;
        let npmPackageId = 0;
        let hasNext = true;
        let attributeValue = this._SYMBOL_ZEROLEN_CHAR;
        attributeValue = currentTagScript.getAttribute(__classPrivateFieldGet(this, _ScriptsChainedLoader_scriptAttr_data, "f"));
        if (attributeValue !== null && attributeValue.length !== 0) {
            scriptsDataObject = JSON.parse(attributeValue);
        }
        attributeValue = currentTagScript.getAttribute(__classPrivateFieldGet(this, _ScriptsChainedLoader_scriptAttr_scriptId, "f"));
        if (attributeValue !== null && attributeValue.length !== 0) {
            scriptId = +attributeValue;
        }
        attributeValue = currentTagScript.getAttribute(__classPrivateFieldGet(this, _ScriptsChainedLoader_scriptAttr_npmPackageId, "f"));
        if (attributeValue !== null && attributeValue.length !== 0) {
            npmPackageId = +attributeValue;
        }
        currentTagScript.removeAttribute(__classPrivateFieldGet(this, _ScriptsChainedLoader_scriptAttr_data, "f"));
        let isFallback_true = true;
        scriptLoaderInstance.loadOneScript(scriptLoaderInstance, scriptsDataObject, npmPackageId, scriptId, hasNext, isFallback_true);
        currentTagScript.remove();
    }
}
exports.ScriptsChainedLoader = ScriptsChainedLoader;
_ScriptsChainedLoader_confKey__scripts = new WeakMap(), _ScriptsChainedLoader_confKey__node_modules = new WeakMap(), _ScriptsChainedLoader_confKey__npm_namespace = new WeakMap(), _ScriptsChainedLoader_path_SimpleBuild = new WeakMap(), _ScriptsChainedLoader_tagname_script = new WeakMap(), _ScriptsChainedLoader_scriptAttr_data = new WeakMap(), _ScriptsChainedLoader_scriptAttr_scriptId = new WeakMap(), _ScriptsChainedLoader_scriptAttr_npmPackageId = new WeakMap(), _ScriptsChainedLoader_scriptAttr_src = new WeakMap(), _ScriptsChainedLoader_npmNamespace = new WeakMap(), _ScriptsChainedLoader_scriptSrcArray = new WeakMap(), _ScriptsChainedLoader_offset_dynamicPathArrayId_ScriptSrcArray = new WeakMap(), _ScriptsChainedLoader_offset_npmPackageName_ScriptSrcArray = new WeakMap(), _ScriptsChainedLoader_offset_jsFilepath_ScriptSrcArray = new WeakMap();
//# sourceMappingURL=ScriptsChainedLoader.js.map