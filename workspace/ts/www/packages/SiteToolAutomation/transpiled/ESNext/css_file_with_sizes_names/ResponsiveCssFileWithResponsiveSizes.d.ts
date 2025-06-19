import { ResponsiveDatasetConstants } from "../constants/ResponsiveDatasetConstants.js";
import { ResponsiveDatasetBase } from "../automation_base_class/ResponsiveDatasetBase.js";
import { ResponsiveCssFileWithResponsiveSizesInterface } from "./ResponsiveCssFileWithResponsiveSizesInterface.js";
export declare class ResponsiveCssFileWithResponsiveSizes implements ResponsiveCssFileWithResponsiveSizesInterface {
    responsiveDatasetConstants: ResponsiveDatasetConstants;
    responsiveDatasetBase: ResponsiveDatasetBase;
    constructor(base: ResponsiveDatasetBase, constants: ResponsiveDatasetConstants);
    setResponsiveDatasetBase(base: ResponsiveDatasetBase): ResponsiveCssFileWithResponsiveSizes;
    produceCssFileWithResponsiveSizesConstants(targetFileBaseName: string, newLinesAmount: number, padding: number): Promise<number>;
    produceResponsiveSizesConstantsLinesSet(responsiveDatasetPropName: string, paddingBitsbuf: Uint8Array): Uint8Array[];
}
//# sourceMappingURL=ResponsiveCssFileWithResponsiveSizes.d.ts.map