import { ResponsiveCssFile } from "./ResponsiveCssFile.js";
export interface ResponsiveCssFileInterface {
    readTemplateMediaCssFile(inFileAbsolutePath: string): ResponsiveCssFile;
    produceResponsiveCssFilesSet(): Promise<number>;
    produceOneResponsiveCssFile(sitesToolBitsbuf: Uint8Array, responsiveDatasetPropName: string, orientation: string, orientationBitsbuf: Uint8Array): Promise<number>;
    getTemplateDataOverridden(responsiveDatasetPropName: string, templateDataBase: any): any;
}
//# sourceMappingURL=ResponsiveCssFileInterface.d.ts.map