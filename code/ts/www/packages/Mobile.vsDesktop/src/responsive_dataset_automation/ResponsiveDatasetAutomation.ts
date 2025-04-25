import * as fs from "node:fs";
import * as path from "node:path";
import { Buffer } from "node:buffer";
import { FileHandle } from "node:fs/promises";
import { TextEncoder, TextDecoder } from "node:util";
import { FileWriter } from "@jaisocx/file-writer";
import { TemplateRenderer } from "@jaisocx/template-renderer";


import { ResponsiveDatasetAutomationConstants } from "./ResponsiveDatasetAutomationConstants.js";
import { ResponsiveDatasetAutomationInterface } from "./ResponsiveDatasetAutomationInterface.js";



export class ResponsiveDatasetAutomation implements ResponsiveDatasetAutomationInterface {

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


  constructor() {
    this.textEncoder = new TextEncoder();
    this.textDecoder = new TextDecoder();

    this.automationConstants = new ResponsiveDatasetAutomationConstants();
    this.automationConstants.textsToBitsbufs();

    this.mediaAndStylesResponsiveFolderPath = "";
    this.datasetFilePath = "";

    this.dataset = {};
    this.templateMediaCssFileContent = "";
    this.webpackAliasName = "";
    this.fileWriter = new FileWriter();
    this.fileWriter
      .setDebug( false );

    this.templateRenderer = new TemplateRenderer();
    this.templateRenderer
      .setDebug( false );

  }



  timestampsLogNs<T extends (...args: any[]) => any>(
    fn: T,
    label: string = "Function",
    logTimestamp: boolean = true
  ): (...args: Parameters<T>) => ReturnType<T> {
    return (...args: Parameters<T>) => {

      let logTime: CallableFunction = ( startTimestampNs: BigInt, logMessage: string, log: boolean ): BigInt => {
        const endTimestampNs: BigInt = process.hrtime.bigint();

        // @ts-ignore
        const interval: BigInt = BigInt( endTimestampNs - startTimestampNs );

        if ( log === true ) {
          console.log(`${logMessage}: ${interval} ns`);
        }

        return interval;
      };



      const start: BigInt = process.hrtime.bigint();
  
      const result: any = fn(...args);
  
      // Handle async functions
      if (result instanceof Promise) {

        return result.then(res => {
          logTime( start, label, logTimestamp );
          return result;
        }) as ReturnType<T>;

      }
  
      logTime( start, label, logTimestamp );
      return result;
    };
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
  readDataset( inDatasetFileAbsolutePath: string ): ResponsiveDatasetAutomation {
    this.datasetFilePath = inDatasetFileAbsolutePath;
    const json: string = fs.readFileSync( 
      this.datasetFilePath, 
      "utf8" );
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
  readTemplateMediaCssFile( inFileAbsolutePath: string ): ResponsiveDatasetAutomation {
    const templatePath = inFileAbsolutePath;
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
 

  
  /**
   * @ready
  */
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
  async produceMediaConstantsCssFile( targetFileName: string ): Promise<number> {
    // @ts-ignore
    let propNames: any = Object.keys( this.dataset.data );
    let responsiveDatasetPropName: string = "";
    let mediaConstantLinesSet: Uint8Array[][] = new Array() as Uint8Array[][];

    await this.fileWriter.toAddToFileInLoop_CleanupFileAndGetNewFileHandle (
      path.resolve( 
        this.mediaAndStylesResponsiveFolderPath, 
        targetFileName )
    );

    let cssClassStartLine: Uint8Array = this.textEncoder.encode( ".workspace {\n" );
    await this.fileWriter.appendBitsbufToFile ( cssClassStartLine );

    let i = 0;
    let propsNumber: number = propNames.length;
    for ( i = 0; i < propsNumber; i++ ) {
      responsiveDatasetPropName = propNames[i];
      mediaConstantLinesSet = this.produceMediaConstantLinesSet( responsiveDatasetPropName );
      await this.fileWriter.appendMixedArrayToFile ( mediaConstantLinesSet );
    }

    let cssClassEndLine: Uint8Array = this.textEncoder.encode( "}\n" );
    await this.fileWriter.appendBitsbufToFile ( cssClassEndLine );

    await this.fileWriter.filehandleClose();

    return 1;
  }


  /**
   * @ready
  */
  async produceMediaCssFilesSet (
    filenamePrefix: string
  ): Promise<number> {

    // @ts-ignore
    let propNames: any = Object.keys( this.dataset.data );
    let responsiveDatasetPropName: string = "";
    let orientationKeywords: string[] = this.automationConstants.getOrientationKeywords();
    let orientation: string = "";

    let templateRendererDataRecordId: number = this.templateRenderer
      .setTemplate( this.templateMediaCssFileContent )
      .setData ( 
        {
          "mediaName": "",
          "mediaRuleLine": "",
          "mediaRuleConstanLine": ""
        }
      )
      .getActiveDataRecordId();

    this.timestampsLogNs (
      this.templateRenderer.optimize.bind(this.templateRenderer),
      "TemplateRenderer.optimize()",
      true
    )( templateRendererDataRecordId );



    main: for ( responsiveDatasetPropName of propNames ) {

      for ( orientation of orientationKeywords ) {

        await this.produceMediaCssFile (
          filenamePrefix,
          responsiveDatasetPropName,
          orientation
        );

        break main;

      }

    }


    return 1;
  }


  /**
   * @ready
   */
  async produceMediaCssFile ( 
    filenamePrefix: string,
    responsiveDatasetPropName: string, 
    orientation: string
  ): Promise<number> {

    let mediaNameText: string = this.produceMediaName (
      responsiveDatasetPropName,
      orientation
    );

    let mediaRuleLinesArray: Uint8Array[] = this.produceMediaRule ( 
      responsiveDatasetPropName,
      orientation,
      this.automationConstants.getMediaRuleScreen()
    );

    let mediaRuleConstanLinesArray: Uint8Array[] = this.produceMediaConstantNameLine (
      responsiveDatasetPropName,
      orientation
    );


    let mediaName: Uint8Array = this.textEncoder.encode( mediaNameText );
    let mediaRuleLine: Uint8Array = this.fileWriter.concatUint8Arrays( mediaRuleLinesArray );
    let mediaRuleConstanLine: Uint8Array = this.fileWriter.concatUint8Arrays( mediaRuleConstanLinesArray );


    // temp for debugging
    // let mediaRuleLineText: string = this.textDecoder.decode ( this.fileWriter.concatUint8Arrays( mediaRuleLine ) );
    // let mediaRuleConstanLineText: string = this.textDecoder.decode ( this.fileWriter.concatUint8Arrays( mediaRuleConstanLine ) );


    let templateData: any = {
      "mediaName": mediaName,
      "mediaRuleLine": mediaRuleLine,
      "mediaRuleConstanLine": mediaRuleConstanLine
    };

    // temp for debugging
    // let templateData: any = {
    //   "mediaName": mediaNameText,
    //   "mediaRuleLine": mediaRuleLineText,
    //   "mediaRuleConstanLine": mediaRuleConstanLineText
    // };

    this.templateRenderer
      .setData( templateData );
    
    let templateRendererDataRecordId: number = this.templateRenderer.getActiveDataRecordId();

    let content: Uint8Array[] = this.templateRenderer.renderOptimizedDataBitsbufs ( 
      templateRendererDataRecordId,
      templateData
    );
    
    // temp for debugging
    // @ts-ignore
    // let contentText: string = this.templateRenderer.renderOptimizedToString ( 
    //   templateRendererDataRecordId,
    //   templateData
    // );

    let fileName: string = [filenamePrefix, mediaNameText, ".css"].join("");

    let mediaCssFilePath: string = path.resolve ( 
      this.mediaAndStylesResponsiveFolderPath,
      fileName 
    );


    let opened: number = await this.fileWriter.toAddToFileInLoop_CleanupFileAndGetNewFileHandle( mediaCssFilePath );
    let written: number = await this.fileWriter.appendFlatArrayToFile( content );
    let closed: number = await this.fileWriter.filehandleClose();
    

    return written;
  }




  /**
   * @ready
   */
  // writes this file:
  // @import url("@jaisocx-css-clean-start-MediaAndStyles/responsive/clean-start-xs-mobile-landscape.css");
  // @import url("@jaisocx-css-clean-start-MediaAndStyles/responsive/clean-start-xs-mobile-portrait.css");
  //   
  // @import url("@jaisocx-css-clean-start-MediaAndStyles/responsive/clean-start-s-mobile-landscape.css");
  // ...  
  async produceMediaCssImportsCssFile ( 
    targetFileName: string,
    relativeImportedFilesFolderPath: string,
    importedFilenamePrefix: string,
    webpackAliased: boolean
  ): Promise<number> {

    // @ts-ignore
    let data: any = this.dataset.data;

    let importedFileName: string = "";
    let webpackAliasName: string = "";
    let mediaName: string = "";
    let mediaCssImportLine: string = "";

    if ( webpackAliased === true ) {
      webpackAliasName = this.webpackAliasName;
    }

    let orientationKeywords: string[] = this.automationConstants.getOrientationKeywords();

    await this.fileWriter.toAddToFileInLoop_CleanupFileAndGetNewFileHandle (
      path.resolve( 
        this.mediaAndStylesResponsiveFolderPath, 
        targetFileName )
    );

    for ( let responsiveDatasetPropName in data ) {

      for ( let orientation of orientationKeywords ) {

        mediaName = this.produceMediaName (
          responsiveDatasetPropName,
          orientation
        );

        importedFileName = `${importedFilenamePrefix}${mediaName}.css`;
  
        mediaCssImportLine = this.produceMediaCssImportLine (
          relativeImportedFilesFolderPath,
          importedFileName,
          webpackAliasName
        );

        await this.fileWriter.appendTextToFile (
          mediaCssImportLine
        );

      }

    }

    await this.fileWriter.filehandleClose();

    return 1;
  }


  // @import url("@jaisocx-css-clean-start-MediaAndStyles/responsive/clean-start-s-mobile-landscape.css");
  /**
   * @ready
  */
  produceMediaCssImportLine ( 
    relativeImportedFilesFolderPath: string,
    importedFileName: string, 
    webpackAliasName: string 
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
  ): Uint8Array[] {

    const mediaName: string = this.produceMediaName ( 
      responsiveDatasetPropName,
      orientation
    );

    let mediaConstantNameLine: Uint8Array[] = this.automationConstants.getMediaConstantNameLineUpdated( mediaName );

    return [...mediaConstantNameLine];
  }


  /**
   * @ready
   */
  // @media only screen and (min-width: 786px) and (max-width: 1023px) and (orientation: landscape)
  produceMediaRule ( 
    responsiveDatasetPropName: string,
    orientation: any,
    media: any // screen | print | all
  ): Uint8Array[] {
    
    let sizes: any = this.getSizesByOrientation ( 
      responsiveDatasetPropName, 
      orientation 
    );

    let minWidth: string = (new Number(sizes["from"])).toString();
    let maxWidth: string = (new Number(sizes["til"])).toString();

    //`"@media only ${media} and (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) and (orientation: ${orientation})";`;
    let mediaLine: Uint8Array[] = this.automationConstants.getMediaLineUpdated (
      media,
      minWidth,
      maxWidth,
      orientation
    );

    return [...mediaLine];
  }


  // --s_56_16k_tv_horizontal__media_rule: "@media only screen and (min-width: 786px) and (max-width: 1023px) and (orientation: landscape)";
  /**
   * @ready
  */
  produceMediaRuleConstantLine ( 
    responsiveDatasetPropName: string,
    orientation: any,
    media: any // screen | print | all
  ): (Uint8Array|Uint8Array[])[] {

    const mediaName: string = this.produceMediaName ( 
      responsiveDatasetPropName,
      orientation
    );

    let sizes: any = this.getSizesByOrientation ( 
      responsiveDatasetPropName, 
      orientation 
    );

    let minWidth: string = sizes["from"] as string;
    let maxWidth: string = sizes["til"] as string;

    //`"@media only ${media} and (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) and (orientation: ${orientation})";`;
    let mediaLine: Uint8Array[] = this.automationConstants.getMediaLineUpdated (
      media,
      minWidth,
      maxWidth,
      orientation
    );

    let mediaRuleConstantLine: (Uint8Array|Uint8Array[])[] = this.automationConstants.getMediaRuleConstantLineUpdated (
      mediaName,
      mediaLine
    );

    return [...mediaRuleConstantLine];
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
  produceMediaConstantLinesSet ( responsiveDatasetPropName: string ): Uint8Array[][] {

    let orientationValues: string[] = this.automationConstants.getOrientationKeywords();

    let mediaLines: Uint8Array[][] = new Array(4) as Uint8Array[][];
    let mediaLine: Uint8Array[] = new Array();
    let newLine: Uint8Array = this.automationConstants.getBitsbufN();

    let orientation: string = "";
    let isStartValue: boolean = true;
    
    let mediaLinePos: number = 0;
    for ( orientation of orientationValues ) {
      
      for ( let i = 1; i < 3; i++ ) {
        isStartValue = ( i === 1 );
        
        mediaLine = this.produceMediaConstantLine ( 
          responsiveDatasetPropName, 
          orientation,
          isStartValue
        );
        mediaLine.push(newLine);

        mediaLines[mediaLinePos] = mediaLine;

        mediaLinePos++;
        
      }
    }

    mediaLines[3].push(newLine);

    return mediaLines;
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
  ): Uint8Array[] {

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

    size = (new Number(sizes[postfix])).toString();


    let mediaConstantLine: Uint8Array[] = this.automationConstants.getMediaConstantLineUpdated (
      mediaName,
      postfix,
      size
    );

    //if ( this.debug === true ) {
    let mediaConstantLineText: string = this.textDecoder.decode( this.fileWriter.concatUint8Arrays(mediaConstantLine) );
    console.info( mediaConstantLineText );
    //}

    return [...mediaConstantLine];
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









