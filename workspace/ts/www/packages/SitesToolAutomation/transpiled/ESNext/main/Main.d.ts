import { ResponsiveDatasetConstants } from "../constants/ResponsiveDatasetConstants.js";
import { ResponsiveSizesNames } from "../responsive_sizes_names/ResponsiveSizesNames.js";
import { ResponsiveFilesSet } from "../responsive_files_set/ResponsiveFilesSet.js";
import { ResponsiveImports } from "../responsive_imports/ResponsiveImports.js";
import { ResponsiveDatasetBase } from "../automation_base_class/ResponsiveDatasetBase.js";
export declare class Main {
    #private;
    pathToJsonDatasetForResponsiveSizes: string;
    responsiveDatasetConstants: ResponsiveDatasetConstants;
    responsiveDatasetBase: ResponsiveDatasetBase;
    responsiveCssFile: ResponsiveFilesSet;
    responsiveCssFileWithResponsiveSizes: ResponsiveSizesNames;
    responsiveImports: ResponsiveImports;
    constructor();
    run(commandLineArgs: any): Promise<number>;
}
//# sourceMappingURL=Main.d.ts.map