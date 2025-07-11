import { TemplateRenderer } from "@jaisocx/template-renderer";
import { ResponsiveDatasetConstants } from "../constants/ResponsiveDatasetConstants.js";
import { ResponsiveDatasetBase } from "../automation_base_class/ResponsiveDatasetBase.js";
import { ResponsiveFilesSetInterface } from "./ResponsiveFilesSetInterface.js";
export declare class ResponsiveFilesSet implements ResponsiveFilesSetInterface {
    templateRenderer: TemplateRenderer;
    responsiveDatasetConstants: ResponsiveDatasetConstants;
    responsiveDatasetBase: ResponsiveDatasetBase;
    mediaQueryCssFileContent: string;
    constructor(base: ResponsiveDatasetBase, constants: ResponsiveDatasetConstants);
    readTemplateMediaCssFile(mediaQueryCssFileTemplatePath: string): ResponsiveFilesSet;
    produceResponsiveFilesSetsSet(): Promise<number>;
    produceOneResponsiveFilesSet(themeNameBitsbuf: Uint8Array, sitesToolBitsbuf: Uint8Array, responsiveDatasetPropName: string, orientation: string, orientationBitsbuf: Uint8Array): Promise<number>;
    getTemplateDataOverridden(_responsiveDatasetPropName: string, templateDataBase: any): any;
}
//# sourceMappingURL=ResponsiveFilesSet.d.ts.map