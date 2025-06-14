import { ResponsiveDatasetAutomation } from "./ResponsiveDatasetAutomation.js";
export interface ResponsiveDatasetAutomationInterface {
    readDataset(datasetFilePath: any): ResponsiveDatasetAutomation;
    setDataset(dataset: any): ResponsiveDatasetAutomation;
    setMediaAndStylesResponsiveFolderPath(folderPath: string): ResponsiveDatasetAutomation;
    readTemplateMediaCssFile(filePath: string): ResponsiveDatasetAutomation;
    setWebpackAliasName(alias: string): ResponsiveDatasetAutomation;
    produceMediaConstantsCssFile(fileName: string): Promise<number>;
    produceMediaCssFilesSet(filenamePrefix: string): Promise<number>;
    produceMediaCssFile(filenamePrefix: string, responsiveDatasetPropName: string, fileName: string): Promise<number>;
    produceMediaCssImportsCssFile(targetFileName: string, relativeImportedFilesFolderPath: string, mediaConstantsFileName: string, importedFilenamePrefix: string, webpackAliased: boolean): Promise<number>;
    produceMediaConstantNameLine(responsiveDatasetPropName: string, orientation: any): Uint8Array[];
    produceResponsiveSize(responsiveDatasetPropName: string, orientation: any, media: any): Uint8Array[];
    produceResponsiveSizeConstantLine(constantName: any, responsiveDatasetPropName: string, orientation: any, media: any): (Uint8Array | Uint8Array[])[];
    produceMediaConstantLinesSet(responsiveDatasetPropName: string): Uint8Array[][];
    produceMediaConstantLine(responsiveDatasetPropName: string, orientation: string, isStartValue: boolean): Uint8Array[];
    produceMediaCssImportLine(relativeImportedFilesFolderPath: string, importedFileName: string, webpackAliasName: string): string;
    getDataset(): object;
    getDatasetFilePath(): string;
}
//# sourceMappingURL=ResponsiveDatasetAutomationInterface.d.ts.map