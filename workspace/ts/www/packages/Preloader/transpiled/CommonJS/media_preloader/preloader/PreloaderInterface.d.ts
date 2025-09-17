export interface PreloaderInterface {
    setThemesPreloads(preloads: object): PreloaderInterface;
    setWebpackAlias(alias: string): PreloaderInterface;
    setWebpackAliasReplace(alias: string): PreloaderInterface;
    init(inTimeoutMillis: number, isWithStopOnLoadTimeout: boolean): void;
    addDocumentLoadedEventHandler(inTimeoutMillis: number, isWithStopOnLoadTimeout: boolean): void;
    preload(inTimeoutMillis: number, isWithStopOnLoadTimeout: boolean): void;
    htmlDocumentAppendPreloadingLinkTags_Images(isWithStopOnLoadTimeout: boolean): HTMLLinkElement[];
    htmlDocumentAppendPreloadingLinkTags_Fonts(isWithStopOnLoadTimeout: boolean): HTMLLinkElement[];
    htmlDocumentAppendPreloadingLinkTags(inDataType: string, isWithStopOnLoadTimeout: boolean): HTMLLinkElement[];
    extractUrlsFromHarBrowserReport(harBrowserReportFilepath: string): string[];
    getScriptLoadingStopOnTimeout(idsOfLinkTags: string[], timeoutNumberOfMilliseconds: number): string[];
    applyScriptLoadingStopOnTimeout(idsOfLinkTags: string[], timeoutNumberOfMilliseconds: number): void;
    addScriptLoadingStopOnTimeout(idsOfLinkTags: string[], timeoutNumberOfMilliseconds: number): void;
    produceLinkTagsPreloading(idsOfLinkTags: string[]): string;
    produceScriptLoadingStopOnTimeout(): string;
    produceCodeblockInvoke_ScriptLoadingStopOnTimeout(timeoutNumberOfMilliseconds: number): string;
}
//# sourceMappingURL=PreloaderInterface.d.ts.map