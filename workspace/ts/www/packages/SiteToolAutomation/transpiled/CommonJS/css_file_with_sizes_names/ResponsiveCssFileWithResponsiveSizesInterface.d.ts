import { ResponsiveDatasetBase } from "../automation_base_class/ResponsiveDatasetBase.js";
import { ResponsiveCssFileWithResponsiveSizes } from "./ResponsiveCssFileWithResponsiveSizes.js";
export interface ResponsiveCssFileWithResponsiveSizesInterface {
    setResponsiveDatasetBase(base: ResponsiveDatasetBase): ResponsiveCssFileWithResponsiveSizes;
    produceCssFileWithResponsiveSizesConstants(targetFileName: string, newLinesAmount: number, padding: number): Promise<number>;
    produceResponsiveSizesConstantsLinesSet(responsiveDatasetPropName: string, paddingBitsbuf: Uint8Array): Uint8Array[];
}
//# sourceMappingURL=ResponsiveCssFileWithResponsiveSizesInterface.d.ts.map