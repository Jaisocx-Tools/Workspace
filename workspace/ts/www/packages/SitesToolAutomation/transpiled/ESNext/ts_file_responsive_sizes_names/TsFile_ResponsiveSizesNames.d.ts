import { ResponsiveDatasetConstants } from "../constants/ResponsiveDatasetConstants.js";
import { ResponsiveDatasetBase } from "../automation_base_class/ResponsiveDatasetBase.js";
import { TsFile_ResponsiveSizesNames_Interface } from "./TsFile_ResponsiveSizesNames_Interface.js";
export declare class TsFile_ResponsiveSizesNames implements TsFile_ResponsiveSizesNames_Interface {
    responsiveDatasetConstants: ResponsiveDatasetConstants;
    responsiveDatasetBase: ResponsiveDatasetBase;
    constructor();
    produceTsFileWithResponsiveSizesNames(_tsClassName: string): Promise<number>;
}
//# sourceMappingURL=TsFile_ResponsiveSizesNames.d.ts.map