import { ResponsiveDatasetConstants } from "../constants/ResponsiveDatasetConstants.js";
import { ResponsiveDatasetBase } from "../automation_base_class/ResponsiveDatasetBase.js";
import { ResponsiveImportsInterface } from "./ResponsiveImportsInterface.js";
export declare class ResponsiveImports implements ResponsiveImportsInterface {
    responsiveDatasetConstants: ResponsiveDatasetConstants;
    responsiveDatasetBase: ResponsiveDatasetBase;
    constructor(base: ResponsiveDatasetBase, constants: ResponsiveDatasetConstants);
    produceImportsCssFileWithResponsiveFilesSetsSet(targetFileName: string, relativeImportedFilesFolderPath: string, webpackAliased: boolean): Promise<number>;
    produceImportsLinesSet_ForResponsiveFilesSetsSet(data: any, bitsbufUrlStart: Uint8Array): Promise<number>;
}
//# sourceMappingURL=ResponsiveImports.d.ts.map