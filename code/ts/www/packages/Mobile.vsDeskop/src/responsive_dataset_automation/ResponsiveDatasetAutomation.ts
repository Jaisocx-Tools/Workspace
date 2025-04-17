import { ResponsiveDatasetAutomationConstants } from "./ResponsiveDatasetAutomationConstants.js";
import { ResponsiveDatasetAutomationInterface } from "./ResponsiveDatasetAutomationInterface.js";



export class ResponsiveDatasetAutomation implements ResponsiveDatasetAutomationInterface {
  
  // reads json with sizes
  readDataset( datasetFilePath: any ): ResponsiveDatasetAutomation {
    return this;
  }
  setDataset( dataset: any ): ResponsiveDatasetAutomation {
    return this;
  }


  setMediaAndStylesResponsiveFolderPath( folderPath: string ): ResponsiveDatasetAutomation {
    return this;
  }

  readTemplateMediaCssFile( filePath: string ): ResponsiveDatasetAutomation {
    return this;
  }

  setWebpackAliasName( alias: string ): ResponsiveDatasetAutomation {
    return this;
  }
 


  
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
  produceMediaConstantsCssFile( fileName: string ): ResponsiveDatasetAutomation {
    return this;
  }




  produceMediaCssFilesSet(): ResponsiveDatasetAutomation {
    return this;
  }


  produceMediaCssFile ( 
    responsiveDatasetPropName: string, 
    fileName: string 
  ): ResponsiveDatasetAutomation {
    return this;
  }




  // writes this file:
  // @import url("@jaisocx-css-clean-start-MediaAndStyles/responsive/clean-start-xs-mobile-landscape.css");
  // @import url("@jaisocx-css-clean-start-MediaAndStyles/responsive/clean-start-xs-mobile-portrait.css");
  //   
  // @import url("@jaisocx-css-clean-start-MediaAndStyles/responsive/clean-start-s-mobile-landscape.css");
  // ...  
  produceMediaCssImportsCssFile( 
    fileName: string,
    webpackAliased: boolean
  ): ResponsiveDatasetAutomation {
    return this;
  }




  // --media_rule_name: s_56_16k_tv_horizontal;
  produceMediaConstantNameLine ( 
    responsiveDatasetPropName: string,
    orientation: any
  ): string {
    return "";
  }


  // @media only screen and (min-width: 786px) and (max-width: 1023px) and (orientation: landscape)
  produceMediaRule ( 
    responsiveDatasetPropName: string,
    orientation: any,
    media: any // screen | print | all
  ): string {
    return "";
  }


  // --s_56_16k_tv_horizontal__media_rule: "@media only screen and (min-width: 786px) and (max-width: 1023px) and (orientation: landscape)";
  produceMediaRuleConstantLine ( 
    constantName: any,
    responsiveDatasetPropName: string,
    orientation: any,
    media: any // screen | print | all
  ): string {
    return "";
  }


  //
  // --s_56_16k_tv_vertical__width__from: 8641px; /* 16k TV */
  // --s_56_16k_tv_vertical__width__til: 9999px; /* 16k TV */
  //
  // --s_56_16k_tv_horizontal__width__from: 15361px; /* 16k TV */
  // --s_56_16k_tv_horizontal__width__til: 25360px; /* 16k TV */
  produceMediaConstantLinesSet ( responsiveDatasetPropName: string ): string {
    return "";
  }



  // --s_56_16k_tv_horizontal__width__til: 25360px; /* 16k TV */
  produceMediaConstantLine ( 
    responsiveDatasetPropName: string, 
    orientation: string 
  ): string {
    return "";
  }

  

  // @import url("@jaisocx-css-clean-start-MediaAndStyles/responsive/clean-start-s-mobile-landscape.css");
  produceMediaCssImportLine ( 
    relativeImportedFilesFolderPath: string,
    importedFileName: string, 
    webpackAliasName: string, 
  ): string {
    return "";
  }


  // json with sizes
  getDataset(): object {
    return {};
  }
  getDatasetFilePath(): string {
    return "";
  }

}









