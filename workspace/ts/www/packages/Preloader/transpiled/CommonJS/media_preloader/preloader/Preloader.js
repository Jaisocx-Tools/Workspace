"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preloader = void 0;
const template_renderer_1 = require("@jaisocx/template-renderer");
// import {
//   CapsOrSmallTransformVariants,
//   CharTypeEnum,
//   JoinDelimiterVariants,
//   ParseTimeGrouppingVariants,
//   TransformVariants
// } from "@jaisocx/text";
const text_1 = require("@jaisocx/text");
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
    init(isWithStopOnLoadTimeout, inTimeoutMillis) {
        this.addDocumentLoadedEventHandler(isWithStopOnLoadTimeout, inTimeoutMillis);
    }
    // @tasks: _isWithStopOnLoadTimeout impl stop on load timeout
    addDocumentLoadedEventHandler(isWithStopOnLoadTimeout, inTimeoutMillis) {
        const methodLinksImages = this.htmlDocumentAppendPreloadingLinkTags_Images.bind(this);
        const methodLinksFonts = this.htmlDocumentAppendPreloadingLinkTags_Fonts.bind(this);
        let linkTags = new Array();
        let tmpLinkTags = new Array();
        let linkTagsNumber = 0;
        let idsOfTagsLink = new Array();
        let locOnloadFunc = () => {
            tmpLinkTags = methodLinksImages(isWithStopOnLoadTimeout);
            linkTags = [...tmpLinkTags];
            tmpLinkTags = methodLinksFonts(isWithStopOnLoadTimeout);
            linkTags = [...linkTags, ...tmpLinkTags];
            linkTagsNumber = linkTags.length;
            let i = 0;
            while (i < linkTagsNumber) {
                idsOfTagsLink.push(linkTags[i].id);
                i++;
            }
            if (isWithStopOnLoadTimeout) {
                this.applyScriptLoadingStopOnTimeout(idsOfTagsLink, inTimeoutMillis);
            }
            i = 0;
            while (i < linkTagsNumber) {
                document.head.append(linkTags[i]);
                i++;
            }
        };
        if (document.readyState !== "loading") {
            // If already loaded, invokes immediately
            locOnloadFunc();
        }
        else {
            document.addEventListener("DOMContentLoaded", () => {
                // invokes on event DOMContentLoaded
                locOnloadFunc();
            }, { once: true });
        }
    }
    htmlDocumentAppendPreloadingLinkTags_Images(isWithStopOnLoadTimeout) {
        let linkTags = this.htmlDocumentAppendPreloadingLinkTags("image", isWithStopOnLoadTimeout);
        return linkTags;
    }
    htmlDocumentAppendPreloadingLinkTags_Fonts(isWithStopOnLoadTimeout) {
        let linkTags = this.htmlDocumentAppendPreloadingLinkTags("font", isWithStopOnLoadTimeout);
        return linkTags;
    }
    htmlDocumentAppendPreloadingLinkTags(inDataType, isWithStopOnLoadTimeout) {
        let linkTags = new Array();
        //@ts-ignore
        let preloadsByDatatype = this.themesPreloads[inDataType];
        if ((preloadsByDatatype === undefined) ||
            (preloadsByDatatype === null) ||
            (Object.values(preloadsByDatatype).length === 0)) {
            return linkTags;
        }
        let linkTagName = "link";
        let rel = "preload";
        let as = inDataType;
        let linkId = "";
        let linkTagOnloadCode = this.preloaderConstantsInstance.getLinkTagOnloadCode();
        let linkTagOnerrorCode = this.preloaderConstantsInstance.getLinkTagOnerrorCode();
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
                let filenameExtension = href.substring(href.lastIndexOf(".") + 1);
                let filename = href.substring(href.lastIndexOf("/") + 1);
                let filenameToId = [themeName, filename].join("_");
                linkId = text_1.CaseConverter.snake(filenameToId);
                link.setAttribute("id", linkId);
                link.setAttribute("fetchpriority", "low");
                link.setAttribute("rel", rel);
                link.setAttribute("as", as);
                link.setAttribute("type", `${inDataType}/${filenameExtension}`);
                link.setAttribute("crossorigin", "");
                link.setAttribute("href", href);
                if (isWithStopOnLoadTimeout) {
                    link.setAttribute("onload", linkTagOnloadCode);
                }
                link.setAttribute("onerror", linkTagOnerrorCode);
                linkTags.push(link);
            }
        }
        return linkTags;
    }
    // preventing browser requests waiting and blocking when a cdn is not responding.
    extractUrlsFromHarBrowserReport(_harBrowserReportFilepath) {
        throw new Error("Not implemented");
        return [];
    }
    getScriptLoadingStopOnTimeout(idsOfLinkTags, timeoutNumberOfMilliseconds) {
        let innerHTMLof_TagScript_Array = new Array(5);
        innerHTMLof_TagScript_Array[0] = "";
        innerHTMLof_TagScript_Array[1] = this.produceLinkTagsPreloading(idsOfLinkTags);
        innerHTMLof_TagScript_Array[2] = this.preloaderConstantsInstance.getScriptLoadingStopOnTimeout();
        innerHTMLof_TagScript_Array[3] = this.produceCodeblockInvoke_ScriptLoadingStopOnTimeout(timeoutNumberOfMilliseconds);
        innerHTMLof_TagScript_Array[4] = "";
        return innerHTMLof_TagScript_Array;
    }
    applyScriptLoadingStopOnTimeout(idsOfLinkTags, timeoutNumberOfMilliseconds) {
        let innerHTMLof_TagScript_Array = this
            .getScriptLoadingStopOnTimeout(idsOfLinkTags, timeoutNumberOfMilliseconds)
            .slice(1, 4);
        let scriptSourceCode = innerHTMLof_TagScript_Array.join("");
        eval(scriptSourceCode);
        return;
    }
    addScriptLoadingStopOnTimeout(idsOfLinkTags, timeoutNumberOfMilliseconds) {
        let firstTagLink = document.head.querySelector("link");
        let innerHTMLof_TagScript_Array = this.getScriptLoadingStopOnTimeout(idsOfLinkTags, timeoutNumberOfMilliseconds);
        innerHTMLof_TagScript_Array[0] = "\n  <script>\n";
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
        let templateDataValueAsObject = idsOfLinkTags.reduce((prev, _curr, currentIndex, thisArray) => {
            let currValueOfArray = thisArray[currentIndex];
            prev[currValueOfArray] = 1;
            return prev;
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