import { TemplateRenderer } from "@jaisocx/template-renderer";
import { PreloaderConstantsInterface } from "../media_preloader_constants/PreloaderConstantsInterface.js";
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
    init(inTimeoutMillis: number, isWithStopOnLoadTimeout: boolean): void;
    addDocumentLoadedEventHandler(inTimeoutMillis: number, isWithStopOnLoadTimeout: boolean): void;
    preload(inTimeoutMillis: number, isWithStopOnLoadTimeout: boolean): void;
    htmlDocumentAppendPreloadingLinkTags_Images(isWithStopOnLoadTimeout: boolean): HTMLLinkElement[];
    htmlDocumentAppendPreloadingLinkTags_Fonts(isWithStopOnLoadTimeout: boolean): HTMLLinkElement[];
    htmlDocumentAppendPreloadingLinkTags(inDataType: string, isWithStopOnLoadTimeout: boolean): HTMLLinkElement[];
    extractUrlsFromHarBrowserReport(_harBrowserReportFilepath: string): string[];
    getScriptLoadingStopOnTimeout(idsOfLinkTags: string[], timeoutNumberOfMilliseconds: number): string[];
    applyScriptLoadingStopOnTimeout(idsOfLinkTags: string[], timeoutNumberOfMilliseconds: number): void;
    addScriptLoadingStopOnTimeout(idsOfLinkTags: string[], timeoutNumberOfMilliseconds: number): void;
    produceLinkTagsPreloading(idsOfLinkTags: string[]): string;
    produceScriptLoadingStopOnTimeout(): string;
    produceCodeblockInvoke_ScriptLoadingStopOnTimeout(timeoutNumberOfMilliseconds: number): string;
}
//# sourceMappingURL=Preloader.d.ts.map