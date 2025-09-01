import { TemplateRenderer } from "@jaisocx/template-renderer";
import { PreloaderConstantsInterface } from "./PreloaderConstantsInterface.js";
import { PreloaderInterface } from "./PreloaderInterface.js";
export declare class Preloader implements PreloaderInterface {
    preloaderConstantsInstance: PreloaderConstantsInterface;
    templateRenderer: TemplateRenderer;
    themesPreloads: object;
    webpackAlias: string;
    webpackAliasReplace: string;
    constructor();
    setThemesPreloads(preloads: object): PreloaderInterface;
    setWebpackAlias(alias: string): PreloaderInterface;
    setWebpackAliasReplace(alias: string): PreloaderInterface;
    init(isWithStopOnLoadTimeout?: boolean): void;
    addDocumentLoadedEventHandler(isWithStopOnLoadTimeout?: boolean): void;
    htmlDocumentAppendPreloadingLinkTags_Images(): string[];
    htmlDocumentAppendPreloadingLinkTags_Fonts(): string[];
    htmlDocumentAppendPreloadingLinkTags(inDataType: string): string[];
    extractUrlsFromHarBrowserReport(harBrowserReportFilepath: string): string[];
    addScriptLoadingStopOnTimeout(idsOfLinkTags: string[], timeoutNumberOfMilliseconds: number): void;
    produceLinkTagsPreloading(idsOfLinkTags: string[]): string;
    produceScriptLoadingStopOnTimeout(): string;
    produceCodeblockInvoke_ScriptLoadingStopOnTimeout(timeoutNumberOfMilliseconds: number): string;
}
//# sourceMappingURL=Preloader.d.ts.map