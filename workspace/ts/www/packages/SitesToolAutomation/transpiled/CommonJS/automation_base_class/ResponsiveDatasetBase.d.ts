import { FileWriter } from "@jaisocx/file-writer";
import { TemplateRenderer } from "@jaisocx/template-renderer";
import { ResponsiveDatasetConstants } from "../constants/ResponsiveDatasetConstants.js";
import { ResponsiveDatasetBaseInterface } from "./ResponsiveDatasetBaseInterface.js";
export declare class ResponsiveDatasetBase implements ResponsiveDatasetBaseInterface {
    responsiveDatasetConstants: ResponsiveDatasetConstants;
    fileWriter: FileWriter;
    templateRenderer: TemplateRenderer;
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
    datasetPropsToBitsbufs(sitesTool: string): ResponsiveDatasetBase;
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
    getResponsiveSizeNameBitsbufsArray(sitesToolName: string, rangeOrderbyId: string, art: string, artSize: string): Uint8Array[];
    getResponsiveSizeNameOrientedBitsbufsArray(sitesToolName: string, rangeOrderbyId: string, art: string, artSize: string, orientation: string): Uint8Array[];
    getImportLineBitsbufsArray(urlStart: string, responsiveSizeName: string): Uint8Array[];
    getResponsiveSizeConstantLineBitsbufsArray(responsiveSizeName: string): Uint8Array[];
}
//# sourceMappingURL=ResponsiveDatasetBase.d.ts.map