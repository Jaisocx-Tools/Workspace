import { PreloaderInterface } from "./PreloaderInterface.js";
export declare class Preloader {
    themesPreloads: object;
    webpackAlias: string;
    webpackAliasReplace: string;
    constructor();
    setThemesPreloads(preloads: object): PreloaderInterface;
    setWebpackAlias(alias: string): PreloaderInterface;
    setWebpackAliasReplace(alias: string): PreloaderInterface;
    init(): void;
    addDocumentLoadedEventHandler(): void;
    htmlDocumentAppendPreloadingLinkTags_Images(): void;
    htmlDocumentAppendPreloadingLinkTags_Fonts(): void;
    htmlDocumentAppendPreloadingLinkTags(inDataType: string): void;
}
//# sourceMappingURL=Preloader.d.ts.map