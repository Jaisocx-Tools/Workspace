import { FileWriter } from "@jaisocx/file-writer";
import { TemplateRenderer } from "@jaisocx/template-renderer";
import { ResponsiveDatasetConstants } from "../constants/ResponsiveDatasetConstants.js";
import { ResponsiveDatasetBaseInterface } from "./ResponsiveDatasetBaseInterface.js";
export declare class ResponsiveDatasetBase implements ResponsiveDatasetBaseInterface {
    responsiveDatasetConstants: ResponsiveDatasetConstants;
    fileWriter: FileWriter;
    templateRenderer: TemplateRenderer;
    mediaAndStylesThemeFolderPath: string;
    mediaAndStylesResponsiveFolderPath: string;
    datasetFilePath: string;
    mediaQueryCssFileTemplatePath: string;
    dataset: any;
    datasetBitsbufs: any;
    templateMediaCssFileContent: string;
    webpackAliasName: string;
    templateProjectPath: string;
    sitesToolName: string;
    sitesTool_ThemeName: string;
    commandLineArgs: object;
    bitsbufSitesToolName: Uint8Array;
    bitsbufSitesTool_ThemeName: Uint8Array;
    constructor();
    setTemplateProjectPath(path: string): ResponsiveDatasetBase;
    getTemplateProjectPath(): string;
    /**
     * @ready
    */
    setWebpackAliasName(alias: string): ResponsiveDatasetBase;
    getWebpackAliasName(): string;
    setCdnUrl(_cdnUrl: string): ResponsiveDatasetBase;
    /**
     * @ready
    */
    setMediaAndStylesThemeFolderPath(inFolderRelativePath: string): ResponsiveDatasetBase;
    getMediaAndStylesThemeFolderPath(): string;
    setMediaAndStylesResponsiveFolderPath(inFolderRelativePath: string): ResponsiveDatasetBase;
    getMediaAndStylesResponsiveFolderPath(): string;
    setMediaQueryCssFileTemplatePath(path: string): ResponsiveDatasetBase;
    getMediaQueryCssFileTemplatePath(): string;
    /**
     * @ready
    */
    readDataset(inDatasetFileAbsolutePath: string): ResponsiveDatasetBase;
    /**
     * @ready
    */
    setDataset(inDataset: object): ResponsiveDatasetBase;
    setSitesToolName(name: string): ResponsiveDatasetBase;
    setSitesTool_ThemeName(themeName: string): ResponsiveDatasetBase;
    setCommandLineArgs(args: object): ResponsiveDatasetBase;
    datasetPropsToBitsbufs(sitesTool: string, sitesTool_ThemeName: string): ResponsiveDatasetBase;
    getDatasetFilePath(): string;
    /**
     * @ready
    */
    getDataset(): object;
    /**
     * @ready
     *
     * @retVal datatype { from: number, to: number }
    */
    getSizesByOrientation(responsiveDatasetPropName: string, orientation: string, byBitsbufs: boolean): object;
}
//# sourceMappingURL=ResponsiveDatasetBase.d.ts.map