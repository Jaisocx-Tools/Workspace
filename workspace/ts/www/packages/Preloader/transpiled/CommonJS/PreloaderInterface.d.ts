export interface PreloaderInterface {
    setThemesPreloads(preloads: object): PreloaderInterface;
    setWebpackAlias(alias: string): PreloaderInterface;
    setWebpackAliasReplace(alias: string): PreloaderInterface;
    init(): void;
    addDocumentLoadedEventHandler(): void;
    htmlDocumentAppendPreloadingLinkTags_Images(): void;
    htmlDocumentAppendPreloadingLinkTags_Fonts(): void;
    htmlDocumentAppendPreloadingLinkTags(inDataType: string): void;
}
//# sourceMappingURL=PreloaderInterface.d.ts.map