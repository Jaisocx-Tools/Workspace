export class Preloader {
    themesPreloads = {};
    webpackAlias = "";
    webpackAliasReplace = "";
    constructor() {
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
        const method = this.htmlDocumentAppendPreloadingLinkTags.bind(this);
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", () => method(), { once: true });
        }
        else {
            method();
            // If already loaded, invoke immediately
        }
    }
    htmlDocumentAppendPreloadingLinkTags() {
        let linkTagName = "link";
        let rel = "preload";
        let as = "font";
        let crossOrigin = "anonymous";
        let themeName = "";
        let fontPathWebpack = "";
        let fontPath = "";
        let fontPathsArray = [];
        let preloads = this.themesPreloads;
        const alias = this.webpackAlias;
        const aliasReplace = this.webpackAliasReplace;
        for (themeName in preloads) {
            //@ts-ignore
            fontPathsArray = preloads[themeName];
            for (fontPathWebpack of fontPathsArray) {
                let link = document.createElement(linkTagName);
                fontPath = fontPathWebpack.replace(alias, aliasReplace);
                link.rel = rel;
                link.href = fontPath;
                link.as = as;
                // link.type = "font/woff2";
                link.crossOrigin = crossOrigin;
                document.head.appendChild(link);
            }
        }
    }
}
//# sourceMappingURL=Preloader.js.map