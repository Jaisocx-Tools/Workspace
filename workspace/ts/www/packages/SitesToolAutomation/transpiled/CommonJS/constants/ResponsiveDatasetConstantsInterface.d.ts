export interface ResponsiveDatasetConstantsInterface {
    getLabelLineArrayByBitsbufs(art: Uint8Array, artSize: Uint8Array): Uint8Array[];
    getCssEncommentedLineByBitsbufs(comment: Uint8Array): Uint8Array[];
    getResponsiveSizeName_withSitesToolName_ByBitsbufs(rangeOrderbyId: Uint8Array, art: Uint8Array, artSize: Uint8Array, orientation: Uint8Array, sitesToolName: Uint8Array, sitesTool_ThemeName: Uint8Array): Uint8Array[];
    getResponsiveSizeNameArrayByBitsbufs(sitesToolName: Uint8Array, rangeOrderbyId: Uint8Array, art: Uint8Array, artSize: Uint8Array, withSitesToolName: boolean): Uint8Array[];
    getResponsiveSizeNameOrientedArrayByBitsbufs(responsiveSizeName: Uint8Array, orientation: Uint8Array): Uint8Array[];
    getResponsiveSizeNameBitsbufsArray(sitesToolName: string, rangeOrderbyId: string, art: string, artSize: string): Uint8Array[];
    getResponsiveSizeNameOrientedBitsbufsArray(sitesToolName: string, rangeOrderbyId: string, art: string, artSize: string, orientation: string): Uint8Array[];
    getImportLineBitsbufsArray(urlStart: string, responsiveSizeName: string): Uint8Array[];
    getResponsiveSizeConstantLineBitsbufsArrayByBitsbufs(responsiveSizeNameOriented: Uint8Array): Uint8Array[];
    getResponsiveSizeConstantLineBitsbufsArray(responsiveSizeNameOriented: string): Uint8Array[];
    getResponsiveSizeConstantLine_size_ByBitsbufs(responsiveSizeNameOriented: Uint8Array, maxOrMin: Uint8Array, size: Uint8Array): Uint8Array[];
}
//# sourceMappingURL=ResponsiveDatasetConstantsInterface.d.ts.map