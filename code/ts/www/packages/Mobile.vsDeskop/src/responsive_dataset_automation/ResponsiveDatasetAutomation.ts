import * as fs from "node:fs";
import * as path from "node:path";



import { ResponsiveDatasetAutomationConstants } from "./ResponsiveDatasetAutomationConstants.js";
import { ResponsiveDatasetAutomationInterface } from "./ResponsiveDatasetAutomationInterface.js";



export class ResponsiveDatasetAutomation implements ResponsiveDatasetAutomationInterface {

  automationConstants: ResponsiveDatasetAutomationConstants;
  mediaAndStylesResponsiveFolderPath: string;
  datasetFilePath: string;

  dataset: object;
  templateMediaCssFileContent: string;
  webpackAliasName: string;




  constructor() {
    this.automationConstants = new ResponsiveDatasetAutomationConstants();
    this.dataset = {};
  }





  /**
   * @ready
  */
  setMediaAndStylesResponsiveFolderPath( inFolderPath: string ): ResponsiveDatasetAutomation {
    this.mediaAndStylesResponsiveFolderPath = inFolderPath;

    return this;
  }


  // reads json with sizes
  /**
   * @ready
  */
  readDataset( inDatasetFileRelativePath: string ): ResponsiveDatasetAutomation {
    this.datasetFilePath = path.resolve ( 
      this.mediaAndStylesResponsiveFolderPath,
      inDatasetFileRelativePath 
    );
    const json: string = fs.readFileSync( this.datasetFilePath, "utf8" );
    this.dataset = JSON.parse( json );

    return this;
  }


  /**
   * @ready
  */
  setDataset( inDataset: object ): ResponsiveDatasetAutomation {
    this.dataset = inDataset;

    return this;
  }


  /**
   * @ready
  */
  readTemplateMediaCssFile( inFileRelativePath: string ): ResponsiveDatasetAutomation {
    const templatePath = path.resolve ( 
      this.mediaAndStylesResponsiveFolderPath,
      inFileRelativePath
    );
    this.templateMediaCssFileContent = fs.readFileSync( templatePath, "utf8" );

    return this;
  }


  /**
   * @ready
  */
  setWebpackAliasName( alias: string ): ResponsiveDatasetAutomation {
    this.webpackAliasName = alias;

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

    do in constants class array, logics like method there already 
    sets 3 variables on an array Id

    let words = method();
    words[1] = nediaRuleName;
    words[2] = mediaRuleLine;
    words[3] = mediaRuleConstantLine;


    mediaRuleName;
    mediaRuleLine;
    mediaRuleConstantLine;


    let words1 = this.templateMediaCssFileContent.split( mediaRuleName );

    let words2 = words1[1].split( mediaRuleLine );

    let words3 = words2[1].split( mediaRuleConstantLine );

    let words: string[] = [
      words1[0],
      mediaRuleName,
      words2[0],
      mediaRuleLine,
      words3[0],
      mediaRuleConstantLine,
      words3[1]
    ];

    for ( let block of words ) {
      fs.appedFileSync( fileName, block );
    }

    fd.close();


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

  
  // @import url("@jaisocx-css-clean-start-MediaAndStyles/responsive/clean-start-s-mobile-landscape.css");
  /**
   * @ready
  */
  produceMediaCssImportLine ( 
    relativeImportedFilesFolderPath: string,
    importedFileName: string, 
    webpackAliasName: string, 
  ): string {
    let words: string[] = [
      this.automationConstants.getImportUrlStart(),
      webpackAliasName,
      "/",
      relativeImportedFilesFolderPath,
      "/",
      importedFileName,
      this.automationConstants.getImportUrlEnd(),
      this.automationConstants.getN()
    ];

    let importLine: string = words.join( "" );

    return importLine;
  }


  /**
   * @ready
   */
  produceMediaName ( 
    responsiveDatasetPropName: string,
    orientation: any
  ): string {
    // @ts-ignore
    let responsiveDatasetProp: any = this.dataset.data[ responsiveDatasetPropName ];

    const words: string[] = [
      this.automationConstants.getMediaConstantNameStart(),
      this.automationConstants.getUnderscore(),
      responsiveDatasetProp["range_orderby_id"],
      this.automationConstants.getUnderscore(),
      responsiveDatasetProp["art"],
      this.automationConstants.getUnderscore(),
      responsiveDatasetProp["art_size"],
      this.automationConstants.getUnderscore(),
      orientation
    ];

    const mediaName: string = words.join( "" );

    return mediaName;
  }


  // --media_rule_name: s_56_16k_tv_horizontal;
  /**
   * @ready
   */
  produceMediaConstantNameLine ( 
    responsiveDatasetPropName: string,
    orientation: any
  ): string {

    const mediaName: string = this.produceMediaName ( 
      responsiveDatasetPropName,
      orientation
    );

    const words: string[] = [
      this.automationConstants.getCssVariablePrefix(),
      this.automationConstants.getMediaRuleName(),
      this.automationConstants.getCssVariableNameValueDelimiter(),
      mediaName,
      this.automationConstants.getCssExpressionEnd()
    ];

    const mediaNameLine: string = words.join( "" );

    return mediaNameLine;
  }


  /**
   * @ready
   */
  // @media only screen and (min-width: 786px) and (max-width: 1023px) and (orientation: landscape)
  produceMediaRule ( 
    responsiveDatasetPropName: string,
    orientation: any,
    media: any // screen | print | all
  ): string {
    
    const mediaName: string = this.produceMediaName ( 
      responsiveDatasetPropName,
      orientation
    );

    let sizes: any = this.getSizesByOrientation ( 
      responsiveDatasetPropName, 
      orientation 
    );

    let minWidth: string = sizes["from"] as string;
    let maxWidth: string = sizes["to"] as string;

   //`"@media only ${media} and (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) and (orientation: ${orientation})";`;
   let mediaLine: string = this.automationConstants.getMediaLine (
      media,
      minWidth,
      maxWidth,
      orientation
    );

    return mediaLine;
  }


  // --s_56_16k_tv_horizontal__media_rule: "@media only screen and (min-width: 786px) and (max-width: 1023px) and (orientation: landscape)";
  /**
   * @ready
  */
  produceMediaRuleConstantLine ( 
    responsiveDatasetPropName: string,
    orientation: any,
    media: any // screen | print | all
  ): string {

    const mediaName: string = this.produceMediaName ( 
      responsiveDatasetPropName,
      orientation
    );

    let sizes: any = this.getSizesByOrientation ( 
      responsiveDatasetPropName, 
      orientation 
    );

    let minWidth: string = sizes["from"] as string;
    let maxWidth: string = sizes["to"] as string;

    //`"@media only ${media} and (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) and (orientation: ${orientation})";`;
    let mediaLine: string = this.automationConstants.getMediaLine (
      media,
      minWidth,
      maxWidth,
      orientation
    );

    let words: string[] = [
      this.automationConstants.getCssVariablePrefix(),
      mediaName,
      this.automationConstants.getUnderscore(),
      this.automationConstants.getUnderscore(),
      this.automationConstants.getKeywordMediarule(),
      this.automationConstants.getCssVariableNameValueDelimiter(),

      this.automationConstants.getDoubleQuote(),
      mediaLine,
      this.automationConstants.getDoubleQuote(),
      this.automationConstants.getCssExpressionEnd()
    ];

    const mediaConstantLine: string = words.join( "" );

    return mediaConstantLine;
  }


  //
  // --s_56_16k_tv_vertical__width__from: 8641px; /* 16k TV */
  // --s_56_16k_tv_vertical__width__til: 9999px; /* 16k TV */
  //
  // --s_56_16k_tv_horizontal__width__from: 15361px; /* 16k TV */
  // --s_56_16k_tv_horizontal__width__til: 25360px; /* 16k TV */
  /**
   * @ready
  */
  produceMediaConstantLinesSet ( responsiveDatasetPropName: string ): string {

    let orientationValues: string[] = [
      this.automationConstants.getMediaRuleOrientationPortrait(),
      this.automationConstants.getMediaRuleOrientationLandscape()
    ];

    let mediaLines: string[] = [];
    let mediaLine: string = "";
    let newLine: string = this.automationConstants.getN();

    let orientation: string = "";
    let isStartValue: boolean = true;
    
    for ( orientation of orientationValues ) {
      
      for ( let i = 0; i < 2; i++ ) {
        isStartValue = ( i === 1 );
        
        mediaLine = this.produceMediaConstantLine ( 
          responsiveDatasetPropName, 
          orientation,
          isStartValue
        );

        mediaLines.push( mediaLine );
      }

      mediaLines.push( this.automationConstants.getN() );

    }

    let mediaLinesSet: string = mediaLines.join( newLine );

    return mediaLinesSet;
  }


  /**
   * @ready
   * 
   * @retVal datatype { from: number, to: number }
  */
  getSizesByOrientation (
    responsiveDatasetPropName: string,
    orientation: string
  ): object {
    let sizes: object = {};

    // @ts-ignore
    let responsiveDatasetProp: any = this.dataset.data[ responsiveDatasetPropName ];
    let orientationStandard: string = responsiveDatasetProp["orientation_standard"];

    if ( orientation === orientationStandard ) {
      sizes = responsiveDatasetProp["width"];
    } else if (
      ( orientation === this.automationConstants.getMediaRuleOrientationLandscape() ) ||
      ( orientation === this.automationConstants.getMediaRuleOrientationPortrait() )
    ) {
      sizes = responsiveDatasetProp["height"];
    } else {
      throw new Error( `Orientation value supported is "landscape" | "portrait". Was set ${orientation}` );
    }

    return sizes;
  }



  // --s_56_16k_tv_horizontal__width__til: 25360px; /* 16k TV */
  /**
   * @ready
  */
  produceMediaConstantLine ( 
    responsiveDatasetPropName: string, 
    orientation: string,
    isStartValue: boolean
  ): string {

    const mediaName: string = this.produceMediaName ( 
      responsiveDatasetPropName,
      orientation
    );

    let postfix: string = "";
    if ( isStartValue === true ) { 
      postfix = this.automationConstants.getKeywordFrom();
    } else {
      postfix = this.automationConstants.getKeywordTil();
    }

    let size: string = "";
    let sizes: any = this.getSizesByOrientation ( 
      responsiveDatasetPropName, 
      orientation 
    );

    if ( isStartValue === true ) { 
      size = (sizes["from"]) as string;
    } else {
      size = (sizes["til"]) as string;
    }

    let words: string[] = [
      this.automationConstants.getCssVariablePrefix(),
      mediaName,
      this.automationConstants.getUnderscore(),
      this.automationConstants.getUnderscore(),
      this.automationConstants.getKeywordWidth(),
      this.automationConstants.getUnderscore(),
      this.automationConstants.getUnderscore(),
      postfix,
      this.automationConstants.getCssVariableNameValueDelimiter(),
      size,
      this.automationConstants.getUnitPx(),
      this.automationConstants.getCssExpressionEnd()
    ];

    const mediaLine: string = words.join( "" );

    return mediaLine;
  }

  

  // json with sizes
  /**
   * @ready
  */
  getDataset(): object {
    return this.dataset;
  }

  /**
   * @ready
  */
  getDatasetFilePath(): string {
    return this.datasetFilePath;
  }

}









