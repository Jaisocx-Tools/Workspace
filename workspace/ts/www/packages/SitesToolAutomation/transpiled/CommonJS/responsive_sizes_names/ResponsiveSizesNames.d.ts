import { ResponsiveDatasetConstants } from "../constants/ResponsiveDatasetConstants.js";
import { ResponsiveDatasetBase } from "../automation_base_class/ResponsiveDatasetBase.js";
import { ResponsiveSizesNamesInterface } from "./ResponsiveSizesNamesInterface.js";
export declare class ResponsiveSizesNames implements ResponsiveSizesNamesInterface {
    responsiveDatasetConstants: ResponsiveDatasetConstants;
    responsiveDatasetBase: ResponsiveDatasetBase;
    constructor(base: ResponsiveDatasetBase, constants: ResponsiveDatasetConstants);
    setResponsiveDatasetBase(base: ResponsiveDatasetBase): ResponsiveSizesNames;
    produceCssFileWithResponsiveSizesConstants(fileBaseName: string, newLinesAmount: number, padding: number): Promise<number>;
    produceResponsiveSizesConstantsLinesSet(responsiveDatasetPropName: string, paddingBitsbuf: Uint8Array): Uint8Array[];
}
//# sourceMappingURL=ResponsiveSizesNames.d.ts.map