import { ResponsiveDatasetConstants } from "../constants/ResponsiveDatasetConstants.js";
import { ResponsiveCssFileWithResponsiveSizes } from "../css_file_with_sizes_names/ResponsiveCssFileWithResponsiveSizes.js";
import { ResponsiveCssFile } from "../responsive_files_set/ResponsiveCssFile.js";
import { ResponsiveImports } from "../css_imports_file/ResponsiveImports.js";
import { ResponsiveDatasetBase } from "../automation_base_class/ResponsiveDatasetBase.js";
export declare class Main {
    #private;
    pathToJsonDatasetForResponsiveSizes: string;
    mediaQueryCssFileTemplatePath: string;
    responsiveDatasetConstants: ResponsiveDatasetConstants;
    responsiveDatasetBase: ResponsiveDatasetBase;
    responsiveCssFile: ResponsiveCssFile;
    responsiveCssFileWithResponsiveSizes: ResponsiveCssFileWithResponsiveSizes;
    responsiveImports: ResponsiveImports;
    constructor();
    run(sitesToolName: string, cssOrJsTool: string, withCssConstantsFile: boolean, withConstantsImportLine: boolean): Promise<number>;
}
//# sourceMappingURL=Main.d.ts.map