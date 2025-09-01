export interface PreloaderInterface {
    setThemesPreloads(preloads: object): PreloaderInterface;
    setWebpackAlias(alias: string): PreloaderInterface;
    setWebpackAliasReplace(alias: string): PreloaderInterface;
    init(isWithStopOnLoadTimeout: boolean): void;
    addDocumentLoadedEventHandler(isWithStopOnLoadTimeout: boolean): void;
    htmlDocumentAppendPreloadingLinkTags_Images(): string[];
    htmlDocumentAppendPreloadingLinkTags_Fonts(): string[];
    htmlDocumentAppendPreloadingLinkTags(inDataType: string): string[];
    extractUrlsFromHarBrowserReport(harBrowserReportFilepath: string): string[];
    addScriptLoadingStopOnTimeout(idsOfLinkTags: string[], timeoutNumberOfMilliseconds: number): void;
    produceLinkTagsPreloading(idsOfLinkTags: string[]): string;
    produceScriptLoadingStopOnTimeout(): string;
    produceCodeblockInvoke_ScriptLoadingStopOnTimeout(timeoutNumberOfMilliseconds: number): string;
}
//# sourceMappingURL=PreloaderInterface.d.ts.map