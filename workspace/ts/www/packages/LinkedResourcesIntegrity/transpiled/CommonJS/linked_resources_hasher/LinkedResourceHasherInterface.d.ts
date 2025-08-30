export interface LinkedResourceHasherInterface {
    preloadedResourceIntegrityProduce(filePath: string, algo: string): string;
    linkPreloaderProduce(href: string, path: string, rel: string, as: string, fetchpriority: string, prettified: boolean): string;
}
//# sourceMappingURL=LinkedResourceHasherInterface.d.ts.map