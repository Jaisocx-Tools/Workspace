export class ScriptsChainedLoader {
    _SYMBOL_ZEROLEN_CHAR;
    _SYMBOL_UNDERSCRORE_CHAR;
    #confKey__scripts;
    #confKey__node_modules;
    #confKey__npm_namespace;
    #path_SimpleBuild;
    #tagname_script;
    #scriptAttr_data;
    #scriptAttr_scriptId;
    #scriptAttr_npmPackageId;
    #scriptAttr_src;
    #npmNamespace;
    _debug;
    constructor() {
        this._SYMBOL_ZEROLEN_CHAR = "";
        this._SYMBOL_UNDERSCRORE_CHAR = "_";
        this.#confKey__scripts = "scripts";
        this.#confKey__node_modules = "node_modules";
        this.#confKey__npm_namespace = "npm_namespace";
        this.#path_SimpleBuild = "transpiled/Simple/";
        this.#tagname_script = "script";
        this.#scriptAttr_data = "data-scripts_data_object";
        this.#scriptAttr_scriptId = "data-script_id";
        this.#scriptAttr_npmPackageId = "data-npmpackage_id";
        this.#scriptAttr_src = "src";
        this.#npmNamespace = "@jaisocx";
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
            scriptsArray = scriptsObject[this.#confKey__scripts];
            isWithFallbackSrc = scriptsObject[this.#confKey__node_modules];
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
        let npmPackagesNames = Object.keys(scriptsDataObject);
        let npmPackageName = npmPackagesNames[npmPackageId];
        let scriptsObject = scriptsDataObject[npmPackageName];
        let scriptsArray = scriptsObject[this.#confKey__scripts];
        let isInNodeModules = scriptsObject[this.#confKey__node_modules];
        let isWithFallbackSrc = isInNodeModules;
        let locNpmNamespace = scriptsObject[this.#confKey__npm_namespace] ?? this.#npmNamespace;
        let jsFilepath = scriptsArray[scriptId];
        let scriptSrc = this._SYMBOL_ZEROLEN_CHAR;
        let fallbackScriptSrc = this._SYMBOL_ZEROLEN_CHAR;
        let dynamicPathArrayId = 0;
        let scriptSrcArray = [
            "< dynamicPathArrayId >",
            npmPackageName,
            "/",
            this.#path_SimpleBuild,
            jsFilepath,
            ".js"
        ];
        if (isInNodeModules) {
            scriptSrcArray[dynamicPathArrayId] = ["node_modules/", locNpmNamespace, "/"].join("");
            scriptSrc = scriptSrcArray.join(this._SYMBOL_ZEROLEN_CHAR);
        }
        else {
            scriptSrc = scriptSrcArray.slice(3).join(this._SYMBOL_ZEROLEN_CHAR);
        }
        let tagScriptCreated = document.createElement(this.#tagname_script);
        tagScriptCreated.setAttribute(this.#scriptAttr_data, JSON.stringify(scriptsDataObject));
        tagScriptCreated.setAttribute(this.#scriptAttr_scriptId, (this._SYMBOL_ZEROLEN_CHAR + scriptId));
        tagScriptCreated.setAttribute(this.#scriptAttr_npmPackageId, (this._SYMBOL_ZEROLEN_CHAR + npmPackageId));
        let jsFileReplaced = jsFilepath.replaceAll("/", "_");
        let numIsFallback = (isFallback && isWithFallbackSrc) ? 1 : 0;
        let dateNow = Date.now();
        let tagScriptId = [
            this.#tagname_script,
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
        if (isFallback) {
            scriptSrcArray[dynamicPathArrayId] = "../";
            fallbackScriptSrc = scriptSrcArray.join(this._SYMBOL_ZEROLEN_CHAR);
        }
        let locOnloadFunc = () => {
            scriptLoaderInstance.scriptOnload(scriptLoaderInstance, tagScript);
        };
        tagScript.onload = locOnloadFunc.bind(tagScript);
        try {
            if (isFallback) {
                tagScript.setAttribute(this.#scriptAttr_src, fallbackScriptSrc);
            }
            else {
                tagScript.setAttribute(this.#scriptAttr_src, scriptSrc);
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
        attributeValue = currentTagScript.getAttribute(this.#scriptAttr_data);
        if (attributeValue !== null && attributeValue.length !== 0) {
            scriptsDataObject = JSON.parse(attributeValue);
        }
        attributeValue = currentTagScript.getAttribute(this.#scriptAttr_scriptId);
        if (attributeValue !== null && attributeValue.length !== 0) {
            scriptId = +attributeValue;
        }
        attributeValue = currentTagScript.getAttribute(this.#scriptAttr_npmPackageId);
        if (attributeValue !== null && attributeValue.length !== 0) {
            npmPackageId = +attributeValue;
        }
        currentTagScript.removeAttribute(this.#scriptAttr_data);
        let npmPackagesNames = Object.keys(scriptsDataObject);
        let npmPackagesNumber = npmPackagesNames.length;
        let npmPackageName = npmPackagesNames[npmPackageId];
        let scriptsObject = scriptsDataObject[npmPackageName];
        let scriptsArray = scriptsObject[this.#confKey__scripts];
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
        attributeValue = currentTagScript.getAttribute(this.#scriptAttr_data);
        if (attributeValue !== null && attributeValue.length !== 0) {
            scriptsDataObject = JSON.parse(attributeValue);
        }
        attributeValue = currentTagScript.getAttribute(this.#scriptAttr_scriptId);
        if (attributeValue !== null && attributeValue.length !== 0) {
            scriptId = +attributeValue;
        }
        attributeValue = currentTagScript.getAttribute(this.#scriptAttr_npmPackageId);
        if (attributeValue !== null && attributeValue.length !== 0) {
            npmPackageId = +attributeValue;
        }
        currentTagScript.removeAttribute(this.#scriptAttr_data);
        let isFallback_true = true;
        scriptLoaderInstance.loadOneScript(scriptLoaderInstance, scriptsDataObject, npmPackageId, scriptId, hasNext, isFallback_true);
        currentTagScript.remove();
    }
}
//# sourceMappingURL=ScriptsChainedLoader.js.map