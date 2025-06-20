import { FileWriter } from "@jaisocx/file-writer";
import { ResponsiveDatasetConstantsInterface } from "./ResponsiveDatasetConstantsInterface.js";
export declare class ResponsiveDatasetConstants implements ResponsiveDatasetConstantsInterface {
    #private;
    fileWriter: FileWriter;
    textEncoder: TextEncoder;
    constructor();
    getOrientationKeywords(): string[];
    getOrientationKeywordsBitsbufs(): Uint8Array[];
    getMaxOrMinArray(): Uint8Array[];
    getKeywordOrientationPortrait(): string;
    getKeywordOrientationLandscape(): string;
    getKeywordMin(): Uint8Array;
    getKeywordMax(): Uint8Array;
    getNewLineBitsbuf(): Uint8Array;
    getBitsbufSymbolCommentStart(): Uint8Array;
    getBitsbufSymbolCommentEnd(): Uint8Array;
    getBitsbufSymbolBackgroundSpace(): Uint8Array;
    getResponsiveSizeConstantNameBitsbuf(): Uint8Array;
    getResponsiveSizeConstantLineMaxOrMinBitsbufsArray(size: Uint8Array, isMax: boolean): Uint8Array[];
    getResponsiveSizeConstantLineMaxOrMinBitsbufsArray_SitesTool(size: Uint8Array, isMax: boolean): Uint8Array[];
    getLabelLineArrayByBitsbufs(art: Uint8Array, artSize: Uint8Array): Uint8Array[];
    getCssEncommentedLineByBitsbufs(comment: Uint8Array): Uint8Array[];
    getResponsiveSizeName_withSitesToolName_ByBitsbufs(rangeOrderbyId: Uint8Array, art: Uint8Array, artSize: Uint8Array, orientation: Uint8Array, sitesToolName: Uint8Array): Uint8Array[];
    getResponsiveSizeNameArrayByBitsbufs(sitesToolName: Uint8Array, rangeOrderbyId: Uint8Array, art: Uint8Array, artSize: Uint8Array, withSitesToolName: boolean): Uint8Array[];
    getResponsiveSizeNameOrientedArrayByBitsbufs(responsiveSizeName: Uint8Array, orientation: Uint8Array): Uint8Array[];
    getResponsiveSizeNameBitsbufsArray(sitesToolName: string, rangeOrderbyId: string, art: string, artSize: string): Uint8Array[];
    getResponsiveSizeNameOrientedBitsbufsArray(sitesToolName: string, rangeOrderbyId: string, art: string, artSize: string, orientation: string): Uint8Array[];
    getImportLineBitsbufsArray(urlStart: string, responsiveSizeNameOriented: string): Uint8Array[];
    getImportLineBitsbufsArrayByBitsbufs(urlStart: Uint8Array, responsiveSizeNameOriented: Uint8Array): Uint8Array[];
    getResponsiveSizeConstantLineBitsbufsArrayByBitsbufs(responsiveSizeNameOriented: Uint8Array): Uint8Array[];
    getResponsiveSizeConstantLineBitsbufsArray(responsiveSizeNameOriented: string): Uint8Array[];
    getResponsiveSizeConstantLine_size_ByBitsbufs(responsiveSizeNameOriented: Uint8Array, maxOrMin: Uint8Array, size: Uint8Array): Uint8Array[];
}
//# sourceMappingURL=ResponsiveDatasetConstants.d.ts.map