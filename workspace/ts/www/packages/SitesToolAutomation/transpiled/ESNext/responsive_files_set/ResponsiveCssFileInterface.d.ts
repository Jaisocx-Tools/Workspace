import { ResponsiveCssFile } from "./ResponsiveCssFile.js";
export interface ResponsiveCssFileInterface {
    readTemplateMediaCssFile(inFileAbsolutePath: string): ResponsiveCssFile;
    produceResponsiveCssFilesSet(): Promise<number>;
    produceOneResponsiveCssFile(sitesToolBitsbuf: Uint8Array, responsiveDatasetPropName: string, orientation: string, orientationBitsbuf: Uint8Array): Promise<number>;
    getTemplateData(sitesToolBitsbuf: Uint8Array, _responsiveDatasetPropName: string, _orientation: string, orientationBitsbuf: Uint8Array, responsiveSizeConstantName: Uint8Array, _responsiveData: any, sizes: any, _responsiveSizeName_withSitesToolName_Array: Uint8Array[], responsiveSizeNameOriented: Uint8Array): any;
}
//# sourceMappingURL=ResponsiveCssFileInterface.d.ts.map