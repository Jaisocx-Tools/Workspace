import { ResponsiveDatasetAutomation } from "./ResponsiveDatasetAutomation.js";
export interface ResponsiveDatasetAutomationInterface {
    readDataset(datasetFilePath: any): ResponsiveDatasetAutomation;
    setDataset(dataset: any): ResponsiveDatasetAutomation;
    setMediaAndStylesResponsiveFolderPath(folderPath: string): ResponsiveDatasetAutomation;
    readTemplateMediaCssFile(filePath: string): ResponsiveDatasetAutomation;
    setWebpackAliasName(alias: string): ResponsiveDatasetAutomation;
    produceMediaConstantsCssFile(fileName: string): ResponsiveDatasetAutomation;
    produceMediaCssFilesSet(): ResponsiveDatasetAutomation;
    produceMediaCssFile(responsiveDatasetPropName: string, fileName: string): ResponsiveDatasetAutomation;
    produceMediaCssImportsCssFile(fileName: string, webpackAliased: boolean): ResponsiveDatasetAutomation;
    produceMediaConstantNameLine(responsiveDatasetPropName: string, orientation: any): string;
    produceMediaRule(responsiveDatasetPropName: string, orientation: any, media: any): string;
    produceMediaRuleConstantLine(constantName: any, responsiveDatasetPropName: string, orientation: any, media: any): string;
    produceMediaConstantLinesSet(responsiveDatasetPropName: string): string;
    produceMediaConstantLine(responsiveDatasetPropName: string, orientation: string, isStartValue: boolean): string;
    produceMediaCssImportLine(relativeImportedFilesFolderPath: string, importedFileName: string, webpackAliasName: string): string;
    getDataset(): object;
    getDatasetFilePath(): string;
}
//# sourceMappingURL=ResponsiveDatasetAutomationInterface.d.ts.map