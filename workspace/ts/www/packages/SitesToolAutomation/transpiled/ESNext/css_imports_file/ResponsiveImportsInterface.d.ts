export interface ResponsiveImportsInterface {
    produceImportsCssFileWithResponsiveCssFilesSet(targetFileName: string, relativeImportedFilesFolderPath: string, cssFileWithSizesNames_FileBaseName: string, webpackAliased: boolean, withConstantsImportLine: boolean): Promise<number>;
    produceImportsLinesSet_ForResponsiveCssFilesSet(data: any, bitsbufUrlStart: Uint8Array): Promise<number>;
}
//# sourceMappingURL=ResponsiveImportsInterface.d.ts.map