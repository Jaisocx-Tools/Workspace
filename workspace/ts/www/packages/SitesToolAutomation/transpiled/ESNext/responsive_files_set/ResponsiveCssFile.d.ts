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
    getTemplateDataOverridden(responsiveDatasetPropName: string, templateDataBase: any): any;
}
//# sourceMappingURL=ResponsiveCssFile.d.ts.map