import { ResponsiveDatasetAutomationConstants } from "./ResponsiveDatasetAutomationConstants.js";
import { ResponsiveDatasetAutomationInterface } from "./ResponsiveDatasetAutomationInterface.js";
export declare class ResponsiveDatasetAutomation implements ResponsiveDatasetAutomationInterface {
    automationConstants: ResponsiveDatasetAutomationConstants;
    mediaAndStylesResponsiveFolderPath: string;
    datasetFilePath: string;
    dataset: object;
    templateMediaCssFileContent: string;
    webpackAliasName: string;
    constructor();
    /**
     * @ready
    */
    setMediaAndStylesResponsiveFolderPath(inFolderPath: string): ResponsiveDatasetAutomation;
    /**
     * @ready
    */
    readDataset(inDatasetFileRelativePath: string): ResponsiveDatasetAutomation;
    /**
     * @ready
    */
    setDataset(inDataset: object): ResponsiveDatasetAutomation;
    /**
     * @ready
    */
    readTemplateMediaCssFile(inFileRelativePath: string): ResponsiveDatasetAutomation;
    /**
     * @ready
    */
    setWebpackAliasName(alias: string): ResponsiveDatasetAutomation;
    produceMediaConstantsCssFile(fileName: string): ResponsiveDatasetAutomation;
    produceMediaCssFilesSet(): ResponsiveDatasetAutomation;
    produceMediaCssFile(responsiveDatasetPropName: string, fileName: string): ResponsiveDatasetAutomation;
    produceMediaCssImportsCssFile(fileName: string, webpackAliased: boolean): ResponsiveDatasetAutomation;
    /**
     * @ready
    */
    produceMediaCssImportLine(relativeImportedFilesFolderPath: string, importedFileName: string, webpackAliasName: string): string;
    /**
     * @ready
     */
    produceMediaName(responsiveDatasetPropName: string, orientation: any): string;
    /**
     * @ready
     */
    produceMediaConstantNameLine(responsiveDatasetPropName: string, orientation: any): string;
    /**
     * @ready
     */
    produceMediaRule(responsiveDatasetPropName: string, orientation: any, media: any): string;
    /**
     * @ready
    */
    produceMediaRuleConstantLine(responsiveDatasetPropName: string, orientation: any, media: any): string;
    /**
     * @ready
    */
    produceMediaConstantLinesSet(responsiveDatasetPropName: string): string;
    /**
     * @ready
     *
     * @retVal datatype { from: number, to: number }
    */
    getSizesByOrientation(responsiveDatasetPropName: string, orientation: string): object;
    /**
     * @ready
    */
    produceMediaConstantLine(responsiveDatasetPropName: string, orientation: string, isStartValue: boolean): string;
    /**
     * @ready
    */
    getDataset(): object;
    /**
     * @ready
    */
    getDatasetFilePath(): string;
}
//# sourceMappingURL=ResponsiveDatasetAutomation.d.ts.map