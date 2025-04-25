import { ResponsiveDatasetAutomation } from "./ResponsiveDatasetAutomation.js";



export interface ResponsiveDatasetAutomationInterface {
  
  // reads json with sizes
  readDataset( datasetFilePath: any ): ResponsiveDatasetAutomation
  setDataset( dataset: any ): ResponsiveDatasetAutomation; // this

  setMediaAndStylesResponsiveFolderPath( folderPath: string ): ResponsiveDatasetAutomation; // this
  readTemplateMediaCssFile( filePath: string ): ResponsiveDatasetAutomation; // this
  setWebpackAliasName( alias: string ): ResponsiveDatasetAutomation; // this 


  
  // :root {
  //
  //   Extra Small Mobile (XS)
  //   --screen-xs-mobile-portrait-from: 3px;
  //   --screen-xs-mobile-portrait-til: 320px;
  //
  //   --screen-xs-mobile-landscape-til: 568px; 
  //   --screen-xs-mobile-landscape-from: 569px; 
  //
  //
  //   Small Mobile (S)
  //   --screen-s-mobile-portrait-from: 321px; 
  //   ...
  produceMediaConstantsCssFile( fileName: string ): Promise<number>; // this



  produceMediaCssFilesSet( filenamePrefix: string ): Promise<number>; // this

  produceMediaCssFile ( 
    filenamePrefix: string,
    responsiveDatasetPropName: string, 
    fileName: string 
  ): Promise<number>; // this



  // writes this file:
  // @import url("@jaisocx-css-clean-start-MediaAndStyles/responsive/clean-start-xs-mobile-landscape.css");
  // @import url("@jaisocx-css-clean-start-MediaAndStyles/responsive/clean-start-xs-mobile-portrait.css");
  //   
  // @import url("@jaisocx-css-clean-start-MediaAndStyles/responsive/clean-start-s-mobile-landscape.css");
  // ...  
  produceMediaCssImportsCssFile ( 
    targetFileName: string,
    relativeImportedFilesFolderPath: string,
    mediaConstantsFileName: string,
    importedFilenamePrefix: string,
    webpackAliased: boolean
  ): Promise<number>; // this



  // --media_rule_name: s_56_16k_tv_horizontal;
  produceMediaConstantNameLine ( 
    responsiveDatasetPropName: string,
    orientation: any
  ): Uint8Array[];


  // @media only screen and (min-width: 786px) and (max-width: 1023px) and (orientation: landscape)
  produceMediaRule ( 
    responsiveDatasetPropName: string,
    orientation: any,
    media: any // screen | print | all
  ): Uint8Array[];


  // --s_56_16k_tv_horizontal__media_rule: "@media only screen and (min-width: 786px) and (max-width: 1023px) and (orientation: landscape)";
  produceMediaRuleConstantLine ( 
    constantName: any,
    responsiveDatasetPropName: string,
    orientation: any,
    media: any // screen | print | all
  ): (Uint8Array|Uint8Array[])[];


  //
  // --s_56_16k_tv_vertical__width__from: 8641px; /* 16k TV */
  // --s_56_16k_tv_vertical__width__til: 9999px; /* 16k TV */
  //
  // --s_56_16k_tv_horizontal__width__from: 15361px; /* 16k TV */
  // --s_56_16k_tv_horizontal__width__til: 25360px; /* 16k TV */
  produceMediaConstantLinesSet ( responsiveDatasetPropName: string ): Uint8Array[][]; // this


  // --s_56_16k_tv_horizontal__width__til: 25360px; /* 16k TV */
  produceMediaConstantLine ( 
    responsiveDatasetPropName: string, 
    orientation: string,
    isStartValue: boolean 
  ): Uint8Array[]; // this
  

  // @import url("@jaisocx-css-clean-start-MediaAndStyles/responsive/clean-start-s-mobile-landscape.css");
  produceMediaCssImportLine ( 
    relativeImportedFilesFolderPath: string,
    importedFileName: string, 
    webpackAliasName: string, 
  ): string; // the line in the imports file.


  // json with sizes
  getDataset(): object;
  getDatasetFilePath(): string;

}









