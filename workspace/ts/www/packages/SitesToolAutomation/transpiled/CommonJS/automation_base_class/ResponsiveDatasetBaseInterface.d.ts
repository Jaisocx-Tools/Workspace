import { ResponsiveDatasetBase } from "./ResponsiveDatasetBase.js";
export interface ResponsiveDatasetBaseInterface {
    setTemplateProjectPath(path: string): ResponsiveDatasetBase;
    setWebpackAliasName(alias: string): ResponsiveDatasetBase;
    setCdnUrl(cdnUrl: string): ResponsiveDatasetBase;
    setMediaAndStylesResponsiveFolderPath(inFolderRelativePath: string): ResponsiveDatasetBase;
    setMediaQueryCssFileTemplatePath(path: string): ResponsiveDatasetBase;
    getMediaQueryCssFileTemplatePath(): string;
    /**
      ...
      "data": {
        "mobile_xs": {
          "range_orderby_id": "e02",
          "width": {
            "min_width": 240,
            "max_width": 320
          },
          "height": {
            "min_width": 320,
            ...
    */
    readDataset(inDatasetFileAbsolutePath: string): ResponsiveDatasetBase;
    setDataset(inDataset: object): ResponsiveDatasetBase;
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
//# sourceMappingURL=ResponsiveDatasetBaseInterface.d.ts.map