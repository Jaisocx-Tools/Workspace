//@ts-ignore
import * as fs from "node:fs";


//@ts-ignore
import * as path from "node:path";


import { FileWriter } from "@jaisocx/file-writer";
import { TemplateRenderer } from "@jaisocx/template-renderer";
import { ResponsiveDatasetConstants } from "../constants/ResponsiveDatasetConstants.js";
import { ResponsiveDatasetBaseInterface } from "./ResponsiveDatasetBaseInterface.js";



export class ResponsiveDatasetBase implements ResponsiveDatasetBaseInterface {

  // textEncoder: TextEncoder;
  // textDecoder: TextDecoder;
  responsiveDatasetConstants: ResponsiveDatasetConstants;
  fileWriter: FileWriter;
  templateRenderer: TemplateRenderer;

  mediaAndStylesThemeFolderPath: string;
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

  bitsbufSitesToolName: Uint8Array;
  bitsbufSitesTool_ThemeName: Uint8Array;



  constructor() {

    // this.textEncoder = new TextEncoder();
    // this.textDecoder = new TextDecoder();
    this.responsiveDatasetConstants = new ResponsiveDatasetConstants();

    this.fileWriter = new FileWriter();
    this.fileWriter
      .setDebug( false );

    this.templateRenderer = new TemplateRenderer();
    this.templateRenderer
      .setDebug( false );


    this.mediaAndStylesThemeFolderPath = "";
    this.mediaAndStylesResponsiveFolderPath = "";
    this.datasetFilePath = "";
    this.mediaQueryCssFileTemplatePath = "";

    this.dataset = new Object();
    this.datasetBitsbufs = new Object();
    this.templateMediaCssFileContent = "";
    this.webpackAliasName = "";
    this.templateProjectPath = "";

    this.sitesToolName = "";
    this.sitesTool_ThemeName = "";

    this.commandLineArgs = new Object();

    this.bitsbufSitesToolName = new Uint8Array();
    this.bitsbufSitesTool_ThemeName = new Uint8Array();
  }


  // NOT IMPLEMENTED
  // sets the path to the new TypeScript SitesTool
  // where the produced .css files will be placed.
  setTemplateProjectPath( path: string ): ResponsiveDatasetBase {
    this.templateProjectPath = path;


    return this;
  }



  getTemplateProjectPath(): string {
    return this.templateProjectPath;
  }


  /**
   * @ready
  */



  setWebpackAliasName( alias: string ): ResponsiveDatasetBase {
    this.webpackAliasName = alias;


    return this;
  }



  getWebpackAliasName(): string {
    return this.webpackAliasName;
  }


  // NOT IMPLEMENTED
  // first to implement the class prop set method,
  // later we know the resources we need on cdn for the css responsive feature of a SitesTool
  setCdnUrl( _cdnUrl: string ): ResponsiveDatasetBase {
    throw new Error( "Method setCdnUrl() was not implemented" );


    return this;
  }


  /**
   * @ready
  */



  setMediaAndStylesThemeFolderPath( inFolderRelativePath: string ): ResponsiveDatasetBase {
    this.mediaAndStylesThemeFolderPath = path.resolve(
      this.templateProjectPath,
      inFolderRelativePath
    );

    if ( fs.existsSync( this.mediaAndStylesThemeFolderPath ) === false ) {
      fs.mkdirSync(
        this.mediaAndStylesThemeFolderPath,
        { recursive: true }
      );
    }


    return this;
  }



  getMediaAndStylesThemeFolderPath(): string {
    return this.mediaAndStylesThemeFolderPath;
  }



  setMediaAndStylesResponsiveFolderPath( inFolderRelativePath: string ): ResponsiveDatasetBase {
    this.mediaAndStylesResponsiveFolderPath = path.resolve(
      this.templateProjectPath,
      inFolderRelativePath
    );

    if ( fs.existsSync( this.mediaAndStylesResponsiveFolderPath ) === false ) {
      fs.mkdirSync(
        this.mediaAndStylesResponsiveFolderPath,
        { recursive: true }
      );
    }


    return this;
  }



  getMediaAndStylesResponsiveFolderPath(): string {
    return this.mediaAndStylesResponsiveFolderPath;
  }



  setMediaQueryCssFileTemplatePath( path: string ): ResponsiveDatasetBase {
    this.mediaQueryCssFileTemplatePath = path;


    return this;
  }



  getMediaQueryCssFileTemplatePath(): string {
    return this.mediaQueryCssFileTemplatePath;
  }


  // reads json with sizes
  /**
   * @ready
  */



  readDataset( inDatasetFileAbsolutePath: string ): ResponsiveDatasetBase {
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



  setDataset( inDataset: object ): ResponsiveDatasetBase {
    this.dataset = inDataset;


    return this;
  }



  setSitesToolName( name: string ): ResponsiveDatasetBase {
    this.sitesToolName = name;

    let te: TextEncoder = this.fileWriter.textEncoder;
    this.bitsbufSitesToolName = te.encode( this.sitesToolName );


    return this;
  }



  setSitesTool_ThemeName( themeName: string ): ResponsiveDatasetBase {
    this.sitesTool_ThemeName = themeName;

    let te: TextEncoder = this.fileWriter.textEncoder;
    this.bitsbufSitesTool_ThemeName = te.encode( this.sitesTool_ThemeName );


    return this;
  }



  setCommandLineArgs( args: object ): ResponsiveDatasetBase {
    this.commandLineArgs = args;


    return this;
  }



  datasetPropsToBitsbufs (
    sitesTool: string,
    sitesTool_ThemeName: string
  ): ResponsiveDatasetBase {
    let te: TextEncoder = this.fileWriter.textEncoder;
    let zeroLenBitsbuf: Uint8Array = new Uint8Array(0);

    this.setSitesToolName( sitesTool );
    this.setSitesTool_ThemeName( sitesTool_ThemeName );


    //@ts-ignore
    let data: any = this.dataset["data"];

    let datasetKeys: string[] = Object.keys( data );
    let datasetPropname: string = "";
    let dataProp: any = new Object();

    for ( datasetPropname of datasetKeys ) {
      dataProp = data[datasetPropname];


      //@ts-ignore
      this.datasetBitsbufs[datasetPropname] = new Object();


      //@ts-ignore
      let dataBitsbufs: any = this.datasetBitsbufs[datasetPropname];

      dataBitsbufs["SitesToolName"] = this.bitsbufSitesToolName;
      dataBitsbufs["SitesTool_ThemeName"] = this.bitsbufSitesTool_ThemeName;

      dataBitsbufs["range_orderby_id"] = te.encode( dataProp["range_orderby_id"] );

      let dataPropWidth: any = dataProp["width"];
      let dataPropHeight: any = dataProp["height"];

      dataBitsbufs["width"] = new Object();
      dataBitsbufs["width"]["from"] = te.encode( "" + dataPropWidth["from"] );
      dataBitsbufs["width"]["to"] = te.encode( "" + dataPropWidth["to"] );

      dataBitsbufs["height"] = new Object();
      dataBitsbufs["height"]["from"] = te.encode( "" + dataPropHeight["from"] );
      dataBitsbufs["height"]["to"] = te.encode( "" + dataPropHeight["to"] );

      dataBitsbufs["art"] = te.encode( dataProp["art"] );
      dataBitsbufs["art_size"] = te.encode( dataProp["art_size"] );

      let responsiveSizeName_Oriented: Uint8Array[] = this.responsiveDatasetConstants
        .getResponsiveSizeNameOrientedBitsbufsArray (
          dataBitsbufs["range_orderby_id"],
          dataBitsbufs["art"],
          dataBitsbufs["art_size"],
          zeroLenBitsbuf,
          this.bitsbufSitesToolName,
          this.bitsbufSitesTool_ThemeName
        );

      let responsiveSizeName: Uint8Array[] = this.responsiveDatasetConstants
        .getResponsiveSizeName( responsiveSizeName_Oriented );


      // console.log( responsiveSizeName );
      dataBitsbufs["responsiveSizeName"] = this.fileWriter.concatUint8Arrays( responsiveSizeName );

      let responsiveSizeNameString: string = this.fileWriter.textDecoder.decode( dataBitsbufs["responsiveSizeName"] );
      dataBitsbufs["responsiveSizeNameString"] = responsiveSizeNameString;


      // console.log( responsiveSizeNameString );
    }


    return this;
  }



  getDatasetFilePath(): string {
    return this.datasetFilePath;
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
   *
   * @retVal datatype { from: number, to: number }
  */



  getSizesByOrientation (
    responsiveDatasetPropName: string,
    orientation: string,
    byBitsbufs: boolean
  ): object {
    let sizes: any = new Object();
    let heights: any = new Object();


    // @ts-ignore
    let data: any = this.dataset["data"][responsiveDatasetPropName];
    let responsiveDatasetProp: any = new Object();

    if ( byBitsbufs === true ) {
      responsiveDatasetProp = this.datasetBitsbufs[responsiveDatasetPropName];
    } else {
      responsiveDatasetProp = data;
    }

    let orientationStandard: string = data["orientation_standard"];

    if ( orientation === orientationStandard ) {
      sizes = {...responsiveDatasetProp["width"]};
      heights = responsiveDatasetProp["height"];
    } else if (
      ( orientation === this.responsiveDatasetConstants.getKeywordOrientationLandscape() ) ||
      ( orientation === this.responsiveDatasetConstants.getKeywordOrientationPortrait() )
    ) {
      sizes = {...responsiveDatasetProp["height"]};
      heights = responsiveDatasetProp["width"];
    } else {
      throw new Error( `Orientation value supported is "landscape" | "portrait". Was set ${orientation}` );
    }

    sizes["min-height"] = heights["from"];
    sizes["max-height"] = heights["to"];


    return sizes;
  }

}

