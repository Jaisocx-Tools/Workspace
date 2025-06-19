import { ResponsiveDatasetConstants } from "../constants/ResponsiveDatasetConstants.js";
import { ResponsiveDatasetBase } from "../automation_base_class/ResponsiveDatasetBase.js";
import { ResponsiveTsFile_ResponsiveSizesNames_Interface } from "./ResponsiveTsFile_ResponsiveSizesNames_Interface.js";
export declare class ResponsiveTsFile_ResponsiveSizesNames implements ResponsiveTsFile_ResponsiveSizesNames_Interface {
    responsiveDatasetConstants: ResponsiveDatasetConstants;
    responsiveDatasetBase: ResponsiveDatasetBase;
    constructor();
    produceTsFileWithResponsiveSizesNames(_tsClassName: string): Promise<number>;
}
//# sourceMappingURL=ResponsiveTsFile_ResponsiveSizesNames.d.ts.map