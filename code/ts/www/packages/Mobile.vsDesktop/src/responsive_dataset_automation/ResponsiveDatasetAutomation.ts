import * as fs from "node:fs";
import * as path from "node:path";
import { TextEncoder, TextDecoder } from "node:util";
import { FileWriter } from "@jaisocx/file-writer";
import { TemplateRenderer } from "@jaisocx/template-renderer";
import { CssImporter } from "@jaisocx/css-importer";


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


  async run (
    pathToJsonDatasetForResponsiveSizes: string,
    responsiveTemplateFilePath: string,
    subfolderName: string,
    responsiveMediaQueriesFilesPrefix: string,
    mediaConstantsFileName: string,
    webpackAliasName: string
  ): Promise<number> {

    this
      .readDataset( pathToJsonDatasetForResponsiveSizes )
      .readTemplateMediaCssFile( responsiveTemplateFilePath )
      .setWebpackAliasName( webpackAliasName )
      .setMediaAndStylesResponsiveFolderPath( [ "MediaAndStyles", "/", subfolderName ].join("") );

    await this.produceMediaConstantsCssFile( mediaConstantsFileName );
    await this.produceMediaCssFilesSet( responsiveMediaQueriesFilesPrefix );

    let isWebpackAliased_true: boolean = true;
    await this.produceMediaCssImportsCssFile ( 
      "MediaCssImports_Webpack.css",
      subfolderName,
      mediaConstantsFileName,
      responsiveMediaQueriesFilesPrefix,
      isWebpackAliased_true
    );

    let isWebpackAliased_false: boolean = false;
    await this.produceMediaCssImportsCssFile ( 
      "MediaCssImports.css",
      "",
      mediaConstantsFileName,
      responsiveMediaQueriesFilesPrefix,
      isWebpackAliased_false
    );

    
    await this.produceMediaRulesTypescriptFile( "MediaruleNamesNew" );

    let packagePath: string = path.resolve(
      this.mediaAndStylesResponsiveFolderPath, 
      "../../");


    let cssImporter: CssImporter = new CssImporter();
    let cssImporterBuilt: number = await cssImporter
      .setPackagePath( packagePath )
      .setCssFilePath( path.resolve( 
        packagePath,
        "MediaAndStyles",
        "clean-start-main-webpack.css" ) )
      .setCssTargetFilePath( path.resolve( 
        packagePath,
        "MediaAndStyles",
        "clean-start-main-pack.css" ) )
      .build();

    return cssImporterBuilt;
  }




  /**
   * @ready
  */
  setMediaAndStylesResponsiveFolderPath( inFolderRelativePath: string ): ResponsiveDatasetAutomation {
    this.mediaAndStylesResponsiveFolderPath = inFolderRelativePath;

    if ( fs.existsSync( inFolderRelativePath ) === false ) {
      fs.mkdirSync( inFolderRelativePath );
    }

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
 


  async produceMediaRulesTypescriptFile ( 
    tsClassName: string 
  ): Promise<number> {

    // @ts-ignore
    let propNames: any = Object.keys( this.dataset.data );
    let responsiveDatasetPropName: string = "";
    let targetFileName: string = [ tsClassName, ".ts" ].join("");
    
    let packagePath: string = path.resolve ( 
      this.mediaAndStylesResponsiveFolderPath, 
      "../../"
    );
    
    let targetFilePath: string = path.resolve ( 
      packagePath,
      "src/",
      targetFileName 
    );

    let fileWriterRetval: number = await this.fileWriter.toAddToFileInLoop_CleanupFileAndGetNewFileHandle (
      targetFilePath
    );

    let i = 0;
    let propsNumber: number = propNames.length;


    let textBlocks: string[] = [
      "export class ",
      tsClassName,
      " {\n\n"
    ];

    let tsClassContentBitsbufs: Uint8Array[] = new Array() as Uint8Array[];
    tsClassContentBitsbufs.push( this.textEncoder.encode ( textBlocks.join("") ) );


    let fieldLine: string[] = [
      "  readonly #",
      "1",
      ": string = ",
      "\"",
      "4",
      "\";\n"
    ];
    let fieldLineMediaNamePos_1: number = 1;
    let fieldLineMediaNamePos_3: number = 4;
    let fieldLineBitsbufs: Uint8Array[] = new Array( fieldLine.length ) as Uint8Array[];
    let len: number = this.automationConstants.textArrayToUnt8Arrays ( 
      // @ts-ignore
      fieldLine,
      fieldLineBitsbufs
    );

    let method: string[] = [
      "  get",
      "1",
      "(): string {\n",
      "    return this.#",
      "4",
      ";\n",
      "  }\n\n"
    ];
    let methodBitsbufs: Uint8Array[] = new Array( method.length ) as Uint8Array[];
    len = this.automationConstants.textArrayToUnt8Arrays ( 
      // @ts-ignore
      method,
      methodBitsbufs
    );
    console.log( len );
    fileWriterRetval = await this.fileWriter.appendMixedArrayToFile ( tsClassContentBitsbufs );

    let mediaName: string = "";
    let mediaNameBitsbuf: Uint8Array = new Uint8Array();
    let mediaNameUcFirstPos: number = 1;
    let mediaNameUcFirstBitsbuf: Uint8Array = new Uint8Array();
    let mediaNamePos: number = 4;

    
    // textBlocks.push( tsClassEndLine );

    let orientationKeywords: string[] = this.automationConstants.getOrientationKeywords();
    let orientationKeywordId: number = 0;
    let propnameId: number = 0;
    let orientation: string = "";

    let iterationsNumber: number = ( propsNumber << 1 );
    let mediaNamesBitsbufs: Uint8Array[] = new Array( iterationsNumber ) as Uint8Array[];
    tsClassContentBitsbufs = new Array( iterationsNumber ) as Uint8Array[];
    for ( i = 0; i < iterationsNumber; i++ ) {

      if ( orientationKeywordId === 2 ) {
        orientationKeywordId = 0;
        propnameId++;
      }

      responsiveDatasetPropName = propNames[propnameId];
      orientation = orientationKeywords[orientationKeywordId];

      mediaName = this.produceMediaName ( 
        responsiveDatasetPropName,
        orientation
      );

      mediaNameBitsbuf = this.textEncoder.encode( mediaName );

      mediaNamesBitsbufs[i] = mediaNameBitsbuf;
      fieldLineBitsbufs[fieldLineMediaNamePos_1] = mediaNameBitsbuf;
      fieldLineBitsbufs[fieldLineMediaNamePos_3] = mediaNameBitsbuf;

      tsClassContentBitsbufs[i] = this.fileWriter.concatUint8Arrays( fieldLineBitsbufs );

      orientationKeywordId++;
    }
    fileWriterRetval = await this.fileWriter.appendMixedArrayToFile ( tsClassContentBitsbufs );

    let mediaNameUcFirstChar: number = "S".charCodeAt(0);
    tsClassContentBitsbufs = new Array( iterationsNumber ) as Uint8Array[];
    for ( i = 0; i < iterationsNumber; i++ ) {
      mediaNameUcFirstBitsbuf = mediaNamesBitsbufs[i];
      mediaNameUcFirstBitsbuf[0] = mediaNameUcFirstChar;

      methodBitsbufs[mediaNameUcFirstPos] = mediaNameUcFirstBitsbuf;
      methodBitsbufs[mediaNamePos] = mediaNameBitsbuf;

      tsClassContentBitsbufs[i] = this.fileWriter.concatUint8Arrays( methodBitsbufs );
    }
    let tsClassEndLine: Uint8Array = this.textEncoder.encode( "}\n\n\n" );

    fileWriterRetval = await this.fileWriter.appendMixedArrayToFile ( tsClassContentBitsbufs );
    tsClassContentBitsbufs = new Array() as Uint8Array[];

    fileWriterRetval = await this.fileWriter.appendBitsbufToFile ( tsClassEndLine );

    fileWriterRetval = await this.fileWriter.filehandleClose();

    return fileWriterRetval;
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

    let cssClassStartLine: Uint8Array = this.textEncoder.encode( ".workspace {\n\n" );
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
          "mediaRuleConstanLine": "",
          "mediaRuleVariable_WidthFrom": "",
          "mediaRuleVariable_WidthTil": ""
        }
      )
      .getActiveDataRecordId();

    this.templateRenderer.optimize( templateRendererDataRecordId );

    let mediaRetVal: number = 0;
    for ( responsiveDatasetPropName of propNames ) {

      for ( orientation of orientationKeywords ) {

        mediaRetVal = await this.produceMediaCssFile (
          filenamePrefix,
          responsiveDatasetPropName,
          orientation
        );

      }

    }


    return mediaRetVal;
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

    let postfix: Uint8Array = this.automationConstants.getBitsbufKeywordFrom();
    let mediaRuleVariable_WidthFromArray: Uint8Array[] = this.automationConstants.getMediaRuleVariable_Width_Updated (
      mediaName,
      postfix
    );
    let mediaRuleVariable_WidthFrom: Uint8Array = this.fileWriter.concatUint8Arrays( mediaRuleVariable_WidthFromArray );


    postfix = this.automationConstants.getBitsbufKeywordTil();
    let mediaRuleVariable_WidthTilArray: Uint8Array[] = this.automationConstants.getMediaRuleVariable_Width_Updated (
      mediaName,
      postfix
    );
    let mediaRuleVariable_WidthTil: Uint8Array = this.fileWriter.concatUint8Arrays( mediaRuleVariable_WidthTilArray );


    let templateData: any = {
      "mediaName": mediaName,
      "mediaRuleLine": mediaRuleLine,
      "mediaRuleConstanLine": mediaRuleConstanLine,
      "mediaRuleVariable_WidthFrom": mediaRuleVariable_WidthFrom,
      "mediaRuleVariable_WidthTil": mediaRuleVariable_WidthTil
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


    let retVal: number = 0;
    retVal = await this.fileWriter.toAddToFileInLoop_CleanupFileAndGetNewFileHandle( mediaCssFilePath );
    retVal = await this.fileWriter.appendFlatArrayToFile( content );
    retVal = await this.fileWriter.filehandleClose();
    

    return retVal;
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
    mediaConstantsFileName: string,
    importedFilenamePrefix: string,
    webpackAliased: boolean
  ): Promise<number> {

    // @ts-ignore
    let data: any = this.dataset.data;

    let targetFilePath: string = path.resolve ( 
      this.mediaAndStylesResponsiveFolderPath, 
      targetFileName );

    let fileWriterRetVal: number = await this.fileWriter.toAddToFileInLoop_CleanupFileAndGetNewFileHandle (
      targetFilePath
    );

    let importedFileName: string = "";
    let webpackAliasName: string = "";
    let mediaCssImportLine: string = "";

    if ( webpackAliased === true ) {
      webpackAliasName = this.webpackAliasName;
    } else {
      webpackAliasName = ".";
    }

    importedFileName = mediaConstantsFileName;
  
    mediaCssImportLine = this.produceMediaCssImportLine (
      relativeImportedFilesFolderPath,
      importedFileName,
      webpackAliasName
    );

    fileWriterRetVal = await this.fileWriter.appendTextToFile (
      ( mediaCssImportLine + "\n" )
    );

    fileWriterRetVal = await this.loopMediaCssImportsCssFile(
      data,
      importedFilenamePrefix,
      relativeImportedFilesFolderPath,
      webpackAliased
    );

    fileWriterRetVal = await this.fileWriter.appendTextToFile("\n\n");

    fileWriterRetVal = await this.fileWriter.filehandleClose();

    return fileWriterRetVal;
  }


  async loopMediaCssImportsCssFile(
    data: any,
    importedFilenamePrefix: string,
    relativeImportedFilesFolderPath: string,
    webpackAliased: boolean
  ): Promise<number> {

    let importedFileName: string = "";
    let webpackAliasName: string = "";
    let mediaName: string = "";
    let mediaCssImportLine: string = "";

    if ( webpackAliased === true ) {
      webpackAliasName = this.webpackAliasName;
    } else {
      webpackAliasName = ".";
    }

    let orientationKeywords: string[] = this.automationConstants.getOrientationKeywords();

    let written: number = 0;
    for ( let responsiveDatasetPropName in data ) {

      for ( let orientation of orientationKeywords ) {

        mediaName = this.produceMediaName (
          responsiveDatasetPropName,
          orientation
        );

        importedFileName = [importedFilenamePrefix, mediaName, ".css"].join("");
  
        mediaCssImportLine = this.produceMediaCssImportLine (
          relativeImportedFilesFolderPath,
          importedFileName,
          webpackAliasName
        );

        written = await this.fileWriter.appendTextToFile (
          mediaCssImportLine
        );

      }

    }

    return written;
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

    let relativePath: string = "";
    if ( relativeImportedFilesFolderPath && relativeImportedFilesFolderPath.length !== 0 ) {
      relativePath = [ relativeImportedFilesFolderPath, "/" ].join("");
    }

    let words: string[] = [
      this.automationConstants.getImportUrlStart(),
      webpackAliasName,
      "/",
      relativePath,
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









