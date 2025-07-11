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
//# sourceMappingURL=ResponsiveDatasetBaseInterface.d.ts.map