import { TemplateRenderer } from "@jaisocx/template-renderer";
import { ResponsiveDatasetConstants } from "../constants/ResponsiveDatasetConstants.js";
import { ResponsiveDatasetBase } from "../automation_base_class/ResponsiveDatasetBase.js";
import { ResponsiveCssFileInterface } from "./ResponsiveCssFileInterface.js";
export declare class ResponsiveCssFile implements ResponsiveCssFileInterface {
    templateRenderer: TemplateRenderer;
    responsiveDatasetConstants: ResponsiveDatasetConstants;
    responsiveDatasetBase: ResponsiveDatasetBase;
    mediaQueryCssFileContent: string;
    constructor(base: ResponsiveDatasetBase, constants: ResponsiveDatasetConstants);
    readTemplateMediaCssFile(mediaQueryCssFileTemplatePath: string): ResponsiveCssFile;
    produceResponsiveCssFilesSet(): Promise<number>;
    produceOneResponsiveCssFile(sitesToolBitsbuf: Uint8Array, responsiveDatasetPropName: string, orientation: string, orientationBitsbuf: Uint8Array): Promise<number>;
    getTemplateData(sitesToolBitsbuf: Uint8Array, _responsiveDatasetPropName: string, _orientation: string, orientationBitsbuf: Uint8Array, responsiveSizeConstantName: Uint8Array, _responsiveData: any, sizes: any, _responsiveSizeName_withSitesToolName_Array: Uint8Array[], responsiveSizeNameOriented: Uint8Array): any;
}
//# sourceMappingURL=ResponsiveCssFile.d.ts.map