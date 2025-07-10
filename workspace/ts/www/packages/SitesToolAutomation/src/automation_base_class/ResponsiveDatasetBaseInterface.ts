import { ResponsiveDatasetBase } from "./ResponsiveDatasetBase.js";



export interface ResponsiveDatasetBaseInterface {

  // NOT IMPLEMENTED
  // sets the path to the new TypeScript SitesTool
  // where the produced .css files will be placed.
  setTemplateProjectPath( path: string ): ResponsiveDatasetBase;


  // for the .css file for the webpack feature,
  // the webpackAlias will be applied, set in this method:
  // SiteToolAutomation/webpack.aliases.json
  setWebpackAliasName( alias: string ): ResponsiveDatasetBase;


  // NOT IMPLEMENTED
  // first to implement the class prop set method,
  // later we know the resources we need on cdn for the css responsive feature of a SitesTool
  setCdnUrl( cdnUrl: string ): ResponsiveDatasetBase;


  // for example, workspace/ts/www/packages/SiteToolAutomation/MediaAndStyles/responsive
  //    when the MediaAndStyles/responsive folder is not there, then this folder will be created.
  setMediaAndStylesResponsiveFolderPath( inFolderRelativePath: string ): ResponsiveDatasetBase;


  setMediaQueryCssFileTemplatePath( path: string ): ResponsiveDatasetBase;


  getMediaQueryCssFileTemplatePath(): string;


  // the fest path in this npm package: SiteToolAutomation/data/ResponsiveSizes/ResponsiveSizes.json
  // this method sets the path to the json dataset with sizes,
  // parses json file contents to the Javascrpt object
  // and sets to this class prop "this.data"
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
  readDataset( inDatasetFileAbsolutePath: string ): ResponsiveDatasetBase;


  // this methods sets the json dataset as JavaScript object to this.data prop of this class.
  // the faster method than read Dataset(), since redDataset() sets the path, reads the .json file and parses .json file content.
  setDataset( inDataset: object ): ResponsiveDatasetBase;



  datasetPropsToBitsbufs (
    sitesTool: string,
    sitesTool_ThemeName: string
  ): ResponsiveDatasetBase;



  getDatasetFilePath(): string;


  // json with sizes
  /**
   * @ready
  */
  getDataset(): object;


  /**
   * @ready
   *
   * @retVal datatype { from: number, to: number }
  */
  getSizesByOrientation (
    responsiveDatasetPropName: string,
    orientation: string,
    byBitsbufs: boolean
  ): object;

}



