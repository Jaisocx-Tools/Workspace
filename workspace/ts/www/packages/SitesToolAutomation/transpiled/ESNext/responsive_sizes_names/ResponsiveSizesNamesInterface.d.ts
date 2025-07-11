import { ResponsiveDatasetBase } from "../automation_base_class/ResponsiveDatasetBase.js";
import { ResponsiveSizesNames } from "./ResponsiveSizesNames.js";
export interface ResponsiveSizesNamesInterface {
    setResponsiveDatasetBase(base: ResponsiveDatasetBase): ResponsiveSizesNames;
    produceCssFileWithResponsiveSizesConstants(targetFileName: string, newLinesAmount: number, padding: number): Promise<number>;
    produceResponsiveSizesConstantsLinesSet(responsiveDatasetPropName: string, paddingBitsbuf: Uint8Array): Uint8Array[];
}
//# sourceMappingURL=ResponsiveSizesNamesInterface.d.ts.map