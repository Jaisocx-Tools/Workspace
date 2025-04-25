import { TextEncoder, TextDecoder } from "node:util";
import { FileWriter } from "@jaisocx/file-writer";
import { TemplateRenderer } from "@jaisocx/template-renderer";
import { ResponsiveDatasetAutomationConstants } from "./ResponsiveDatasetAutomationConstants.js";
import { ResponsiveDatasetAutomationInterface } from "./ResponsiveDatasetAutomationInterface.js";
export declare class ResponsiveDatasetAutomation implements ResponsiveDatasetAutomationInterface {
    automationConstants: ResponsiveDatasetAutomationConstants;
    mediaAndStylesResponsiveFolderPath: string;
    datasetFilePath: string;
    dataset: object;
    templateMediaCssFileContent: string;
    webpackAliasName: string;
    fileWriter: FileWriter;
    textEncoder: TextEncoder;
    textDecoder: TextDecoder;
    templateRenderer: TemplateRenderer;
    constructor();
    timestampsLogNs<T extends (...args: any[]) => any>(fn: T, label?: string, logTimestamp?: boolean): (...args: Parameters<T>) => ReturnType<T>;
    /**
     * @ready
    */
    setMediaAndStylesResponsiveFolderPath(inFolderPath: string): ResponsiveDatasetAutomation;
    /**
     * @ready
    */
    readDataset(inDatasetFileAbsolutePath: string): ResponsiveDatasetAutomation;
    /**
     * @ready
    */
    setDataset(inDataset: object): ResponsiveDatasetAutomation;
    /**
     * @ready
    */
    readTemplateMediaCssFile(inFileAbsolutePath: string): ResponsiveDatasetAutomation;
    /**
     * @ready
    */
    setWebpackAliasName(alias: string): ResponsiveDatasetAutomation;
    /**
     * @ready
    */
    produceMediaConstantsCssFile(targetFileName: string): Promise<number>;
    /**
     * @ready
    */
    produceMediaCssFilesSet(filenamePrefix: string): Promise<number>;
    /**
     * @ready
     */
    produceMediaCssFile(filenamePrefix: string, responsiveDatasetPropName: string, orientation: string): Promise<number>;
    /**
     * @ready
     */
    produceMediaCssImportsCssFile(targetFileName: string, relativeImportedFilesFolderPath: string, importedFilenamePrefix: string, webpackAliased: boolean): Promise<number>;
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
    produceMediaConstantNameLine(responsiveDatasetPropName: string, orientation: any): Uint8Array[];
    /**
     * @ready
     */
    produceMediaRule(responsiveDatasetPropName: string, orientation: any, media: any): Uint8Array[];
    /**
     * @ready
    */
    produceMediaRuleConstantLine(responsiveDatasetPropName: string, orientation: any, media: any): (Uint8Array | Uint8Array[])[];
    /**
     * @ready
    */
    produceMediaConstantLinesSet(responsiveDatasetPropName: string): Uint8Array[][];
    /**
     * @ready
     *
     * @retVal datatype { from: number, to: number }
    */
    getSizesByOrientation(responsiveDatasetPropName: string, orientation: string): object;
    /**
     * @ready
    */
    produceMediaConstantLine(responsiveDatasetPropName: string, orientation: string, isStartValue: boolean): Uint8Array[];
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