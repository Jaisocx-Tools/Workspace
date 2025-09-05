"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preloader = void 0;
const template_renderer_1 = require("@jaisocx/template-renderer");
const PreloaderConstants_js_1 = require("../media_preloader_constants/PreloaderConstants.js");
class Preloader {
    constructor() {
        this.preloaderConstantsInstance = new PreloaderConstants_js_1.PreloaderConstants();
        this.templateRenderer = new template_renderer_1.TemplateRenderer();
        this.themesPreloads = {};
        this.webpackAlias = "";
        this.webpackAliasReplace = "";
    }
    setThemesPreloads(preloads) {
        this.themesPreloads = preloads;
        return this;
    }
    setWebpackAlias(alias) {
        this.webpackAlias = alias;
        return this;
    }
    setWebpackAliasReplace(alias) {
        this.webpackAliasReplace = alias;
        return this;
    }
    init(isWithStopOnLoadTimeout = true) {
        this.addDocumentLoadedEventHandler(isWithStopOnLoadTimeout);
    }
    // @tasks: _isWithStopOnLoadTimeout impl stop on load timeout
    addDocumentLoadedEventHandler(_isWithStopOnLoadTimeout = true) {
        const methodLinksImages = this.htmlDocumentAppendPreloadingLinkTags_Images.bind(this);
        const methodLinksFonts = this.htmlDocumentAppendPreloadingLinkTags_Fonts.bind(this);
        if (document.readyState !== "loading") {
            // If already loaded, invokes immediately
            methodLinksImages();
            methodLinksFonts();
        }
        else {
            document.addEventListener("DOMContentLoaded", () => {
                methodLinksImages();
                methodLinksFonts();
            }, { once: true });
        }
    }
    htmlDocumentAppendPreloadingLinkTags_Images() {
        return this.htmlDocumentAppendPreloadingLinkTags("image");
    }
    htmlDocumentAppendPreloadingLinkTags_Fonts() {
        return this.htmlDocumentAppendPreloadingLinkTags("font");
    }
    htmlDocumentAppendPreloadingLinkTags(inDataType) {
        let idsOf_LinkTags = new Array();
        //@ts-ignore
        let preloadsByDatatype = this.themesPreloads[inDataType];
        if ((preloadsByDatatype === undefined) ||
            (preloadsByDatatype === null) ||
            (Object.values(preloadsByDatatype).length === 0)) {
            return idsOf_LinkTags;
        }
        let linkTagName = "link";
        let rel = "preload";
        let as = inDataType;
        let themeName = "";
        let webpackAliasedURL = "";
        let href = "";
        let urls = [];
        const alias = this.webpackAlias;
        const aliasReplace = this.webpackAliasReplace;
        const toReplaceWebpackAlias = ((alias !== undefined) && (alias !== null) && (alias.length !== 0));
        for (themeName in preloadsByDatatype) {
            //@ts-ignore
            urls = preloadsByDatatype[themeName];
            if (urls.length === 0) {
                continue;
            }
            for (webpackAliasedURL of urls) {
                let link = document.createElement(linkTagName);
                if (toReplaceWebpackAlias === true) {
                    href = webpackAliasedURL.replace(alias, aliasReplace);
                }
                else {
                    href = webpackAliasedURL;
                }
                // link.type = "font/woff2";
                link.as = as;
                link.href = href;
                link.rel = rel;
                document.head.append(link);
            }
        }
        return idsOf_LinkTags;
    }
    // preventing browser requests waiting and blocking when a cdn is not responding.
    extractUrlsFromHarBrowserReport(_harBrowserReportFilepath) {
        throw new Error("Not implemented");
        return [];
    }
    addScriptLoadingStopOnTimeout(idsOfLinkTags, timeoutNumberOfMilliseconds) {
        // let tagScript: HTMLScriptElement = document.createElement( "SCRIPT" ) as HTMLScriptElement;
        let firstTagLink = document.head.querySelector("link");
        let innerHTMLof_TagScript_Array = new Array(5);
        innerHTMLof_TagScript_Array[0] = "\n  <script>\n";
        innerHTMLof_TagScript_Array[1] = this.produceLinkTagsPreloading(idsOfLinkTags);
        innerHTMLof_TagScript_Array[2] = this.preloaderConstantsInstance.getScriptLoadingStopOnTimeout();
        innerHTMLof_TagScript_Array[3] = this.produceCodeblockInvoke_ScriptLoadingStopOnTimeout(timeoutNumberOfMilliseconds);
        innerHTMLof_TagScript_Array[4] = "\n  </script>\n";
        let tagScriptOuterHTML = innerHTMLof_TagScript_Array.join("");
        if (firstTagLink === null) {
            document.head.insertAdjacentHTML("afterbegin", tagScriptOuterHTML);
        }
        else {
            firstTagLink.insertAdjacentHTML("beforebegin", tagScriptOuterHTML);
        }
        return;
    }
    produceLinkTagsPreloading(idsOfLinkTags) {
        //@ts-ignore
        let trDataRecord = this.templateRenderer.addNewDataRecord();
        let templateText = this.preloaderConstantsInstance.getLinkTagsPreloading();
        this.templateRenderer.setTemplate(templateText);
        let inOutArgof_reduceMethod = new Object();
        let templateDataValueAsObject = idsOfLinkTags.reduce((_prev, curr, currentIndex, thisArray) => {
            let currValueOfArray = thisArray[currentIndex];
            curr[currValueOfArray] = 1;
        }, inOutArgof_reduceMethod);
        let templateDataValueAsText = JSON.stringify(templateDataValueAsObject, null, 2);
        let templateData = { "idsObjectOf_LinkTagsPreloading": templateDataValueAsText };
        this.templateRenderer.setData(templateData);
        let textof_varLinkTagsPreloading = this.templateRenderer.render();
        return textof_varLinkTagsPreloading;
    }
    produceScriptLoadingStopOnTimeout() {
        let textof_ScriptLoadingStopOnTimeout = this.preloaderConstantsInstance.getScriptLoadingStopOnTimeout();
        return textof_ScriptLoadingStopOnTimeout;
    }
    produceCodeblockInvoke_ScriptLoadingStopOnTimeout(timeoutNumberOfMilliseconds) {
        //@ts-ignore
        let trDataRecord = this.templateRenderer.addNewDataRecord();
        let templateText = this.preloaderConstantsInstance.getCodeblockInvoke_ScriptLoadingStopOnTimeout();
        this.templateRenderer.setTemplate(templateText);
        let templateData = { "timeoutNumberOfMilliseconds": timeoutNumberOfMilliseconds };
        this.templateRenderer.setData(templateData);
        let textof_ScriptLoadingStopOnTimeout = this.templateRenderer.render();
        return textof_ScriptLoadingStopOnTimeout;
    }
}
exports.Preloader = Preloader;
//# sourceMappingURL=Preloader.js.map