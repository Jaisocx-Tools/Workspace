import { ResponsiveFilesSet } from "./ResponsiveFilesSet.js";
export interface ResponsiveFilesSetInterface {
    readTemplateMediaCssFile(inFileAbsolutePath: string): ResponsiveFilesSet;
    produceResponsiveFilesSetsSet(): Promise<number>;
    produceOneResponsiveFilesSet(themeNameBitsbuf: Uint8Array, sitesToolBitsbuf: Uint8Array, responsiveDatasetPropName: string, orientation: string, orientationBitsbuf: Uint8Array): Promise<number>;
    getTemplateDataOverridden(responsiveDatasetPropName: string, templateDataBase: any): any;
}
//# sourceMappingURL=ResponsiveFilesSetInterface.d.ts.map