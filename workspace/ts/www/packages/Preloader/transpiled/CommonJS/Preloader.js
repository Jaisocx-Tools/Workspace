"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preloader = void 0;
class Preloader {
    constructor() {
        this.themesPreloads = {};
        this.webpackAlias = "";
        this.webpackAliasReplace = "";
        this.themesPreloads = {};
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
    init() {
        this.addDocumentLoadedEventHandler();
    }
    addDocumentLoadedEventHandler() {
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
        this.htmlDocumentAppendPreloadingLinkTags("image");
    }
    htmlDocumentAppendPreloadingLinkTags_Fonts() {
        this.htmlDocumentAppendPreloadingLinkTags("font");
    }
    htmlDocumentAppendPreloadingLinkTags(inDataType) {
        //@ts-ignore
        let preloadsByDatatype = this.themesPreloads[inDataType];
        if ((preloadsByDatatype === undefined) ||
            (preloadsByDatatype === null) ||
            (Object.values(preloadsByDatatype).length === 0)) {
            return;
        }
        let linkTagName = "link";
        let rel = "preload";
        let as = inDataType;
        let crossOrigin = "anonimous";
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
                link.crossOrigin = crossOrigin;
                document.head.append(link);
            }
        }
    }
}
exports.Preloader = Preloader;
//# sourceMappingURL=Preloader.js.map