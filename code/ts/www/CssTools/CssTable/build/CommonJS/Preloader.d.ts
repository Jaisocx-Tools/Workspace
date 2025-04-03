export declare class Preloader {
    themesPreloads: object;
    webpackAlias: string;
    webpackAliasReplace: string;
    constructor();
    setThemesPreloads(preloads: object): this;
    setWebpackAlias(alias: string): this;
    setWebpackAliasReplace(alias: string): this;
    init(): void;
    addDocumentLoadedEventHandler(): void;
    htmlDocumentAppendPreloadingLinkTags(): void;
}
//# sourceMappingURL=Preloader.d.ts.map