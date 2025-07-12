import { FileWriter } from "@jaisocx/file-writer";
import { ResponsiveDatasetConstantsInterface } from "./ResponsiveDatasetConstantsInterface.js";
export declare class ResponsiveDatasetConstants implements ResponsiveDatasetConstantsInterface {
    #private;
    fileWriter: FileWriter;
    textEncoder: TextEncoder;
    constructor();
    initBitbufsArrays(): ResponsiveDatasetConstants;
    setKeywordResponsiveSize(keyword: string): ResponsiveDatasetConstants;
    getKeywordResponsiveSize(): string;
    getBitsbufKeywordResponsiveSize(): Uint8Array;
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
    getResponsiveSizeConstantNameBitsbufsArray(): Uint8Array[];
    getResponsiveSizeConstantNameBitsbuf(): Uint8Array;
    getLabelLineArray(padding: Uint8Array, art: Uint8Array, art_size: Uint8Array): Uint8Array[];
    getCssEncommentedLine(comment: Uint8Array): Uint8Array[];
    getResponsiveSizeNameOrientedBitsbufsArray(range_orderby_id: Uint8Array, art: Uint8Array, art_size: Uint8Array, orientation: Uint8Array, sites_tool_name: Uint8Array, sites_tool_theme_name: Uint8Array): Uint8Array[];
    getResponsiveSizeName(responsiveSizeNameOriented: Uint8Array[]): Uint8Array[];
    getResponsiveSizeNameOriented(responsiveSizeNameOriented: Uint8Array[]): Uint8Array[];
    responsiveSizeName_setOrientation(orientation: Uint8Array): ResponsiveDatasetConstants;
    responsiveSizeName_setSitesToolName(sites_tool_name: Uint8Array): ResponsiveDatasetConstants;
    responsiveSizeName_setSitesTool_ThemeName(sites_tool_theme_name: Uint8Array): ResponsiveDatasetConstants;
    getImportLineBitsbufsArray(url_start: Uint8Array, device_size_name: Uint8Array, newLineBitsbuf: Uint8Array): Uint8Array[];
    importLine_setNewlineBitsbuf(newLineBitsbuf: Uint8Array): ResponsiveDatasetConstants;
    getResponsiveSizeConstantLineMaxOrMinBitsbufsArray(size: Uint8Array, isMax: boolean): Uint8Array[];
    getResponsiveSizeConstantLineBitsbufsArray(siteToolName: Uint8Array, responsiveSizeNameOriented: Uint8Array): Uint8Array[];
    getResponsiveSizeConstantLine_size_BitsbufsArray(padding: Uint8Array, responsiveSizeNameOriented: Uint8Array, max_or_min: Uint8Array, size: Uint8Array): Uint8Array[];
}
//# sourceMappingURL=ResponsiveDatasetConstants.d.ts.map