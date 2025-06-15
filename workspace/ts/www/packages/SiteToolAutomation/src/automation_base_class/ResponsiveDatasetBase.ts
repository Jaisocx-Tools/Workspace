import * as fs from "node:fs";
import * as path from "node:path";
import { TextEncoder, TextDecoder } from "node:util";
import { FileWriter } from "@jaisocx/file-writer";
import { TemplateRenderer } from "@jaisocx/template-renderer";
import { CssImporter } from "@jaisocx/css-importer";
import { ResponsiveDatasetConstants } from "../constants/ResponsiveDatasetConstants.js";
import { ResponsiveDatasetBaseInterface } from "./ResponsiveDatasetBaseInterface.js";



export class ResponsiveDatasetBase implements ResponsiveDatasetBaseInterface {

  responsiveDatasetConstants: ResponsiveDatasetConstants;
  mediaAndStylesResponsiveFolderPath: string;
  datasetFilePath: string;

  dataset: object;
  datasetBitsbufs: object;
  templateMediaCssFileContent: string;
  webpackAliasName: string;
  fileWriter: FileWriter;

  textEncoder: TextEncoder;
  textDecoder: TextDecoder;
  templateRenderer: TemplateRenderer;



  constructor() {
    this.textEncoder = new TextEncoder();
    this.textDecoder = new TextDecoder();

    this.responsiveDatasetConstants = new ResponsiveDatasetConstants();

    this.mediaAndStylesResponsiveFolderPath = "";
    this.datasetFilePath = "";

    this.dataset = new Object();
    this.datasetBitsbufs = new Object();
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
      .datasetPropsToBitsbufs()
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


    await this.produceResponsiveSizesTypescriptFile( "ResponsiveSizeNamesNew" );

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



  // NOT IMPLEMENTED
  // sets the path to the new TypeScript SitesTool
  // where the produced .css files will be placed.
  setTemplateProjectPath( path: string ): ResponsiveDatasetBase {
    return this;
  }




  /**
   * @ready
  */
  setWebpackAliasName( alias: string ): ResponsiveDatasetBase {
    this.webpackAliasName = alias;

    return this;
  }




  // NOT IMPLEMENTED
  // first to implement the class prop set method,
  // later we know the resources we need on cdn for the css responsive feature of a SitesTool
  setCdnUrl( cdnUrl: string ): ResponsiveDatasetBase {
    return this;
  }



  /**
   * @ready
  */
  setMediaAndStylesResponsiveFolderPath( inFolderRelativePath: string ): ResponsiveDatasetBase {
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



  datasetPropsToBitsbufs (
    sitesTool: string
  ): ResponsiveDatasetBase {

    let sitesToolBitsbuf: Uint8Array = this.textEncoder.encode( sitesTool );

    let data: any = this.dataset["data"];

    let datasetKeys: string[] = Object.keys( data );
    let datasetPropname: string = "";
    let dataProp: any = new Object();

    for ( datasetPropname of datasetKeys ) {
      dataProp = data[datasetPropname];
      this.datasetBitsbufs[datasetPropname] = new Object();
      let dataBitsbufs: object = this.datasetBitsbufs[datasetPropname];

      dataBitsbufs["range_orderby_id"] = this.textEncoder.encode( dataProp["range_orderby_id"] );

      let dataPropWidth: object = dataProp["width"];
      let dataPropHeight: object = dataProp["height"];

      dataBitsbufs["width"] = new Object();
      dataBitsbufs["width"]["from"] = this.textEncoder.encode( "" + dataPropWidth["from"] );
      dataBitsbufs["width"]["til"] = this.textEncoder.encode( "" + dataPropWidth["til"] );

      dataBitsbufs["height"] = new Object();
      dataBitsbufs["height"]["from"] = this.textEncoder.encode( "" + dataPropHeight["from"] );
      dataBitsbufs["height"]["til"] = this.textEncoder.encode( "" + dataPropHeight["til"] );

      dataBitsbufs["art"] = this.textEncoder.encode( dataProp["art"] );
      dataBitsbufs["art_size"] = this.textEncoder.encode( dataProp["art_size"] );

      let responsiveSizeName: Uint8Array = this.responsiveDatasetConstants.getResponsiveSizeNameBitsbufsArrayByBitsbufs (
        sitesToolBitsbuf,
        dataBitsbufs["range_orderby_id"],
        dataBitsbufs["art"],
        dataBitsbufs["art_size"]
      );

      dataBitsbufs["responsiveSizeName"] = responsiveSizeName;

      let responsiveSizeNameString: string = this.textDecoder.decode( responsiveSizeName );
      dataBitsbufs["responsiveSizeNameString"] = responsiveSizeNameString;

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
    let sizes: object = {};

    // @ts-ignore
    let responsiveDatasetProp: any = new Object();
    if ( byBitsbufs === true ) {
      responsiveDatasetProp = this.datasetBitsbufs[responsiveDatasetPropName];
    } else {
      responsiveDatasetProp = this.dataset["data"][responsiveDatasetPropName];
    }

    let orientationStandard: string = responsiveDatasetProp["orientation_standard"];

    if ( orientation === orientationStandard ) {
      sizes = responsiveDatasetProp["width"];
    } else if (
      ( orientation === this.responsiveDatasetConstants.getKeywordOrientationLandscape() ) ||
      ( orientation === this.responsiveDatasetConstants.getKeywordOrientationPortrait() )
    ) {
      sizes = responsiveDatasetProp["height"];
    } else {
      throw new Error( `Orientation value supported is "landscape" | "portrait". Was set ${orientation}` );
    }

    return sizes;
  }



  getResponsiveSizeNameBitsbufsArray (
    sitesToolName: string,
    rangeOrderbyId: string,
    art: string,
    artSize: string
  ): Uint8Array[] {
    return this.responsiveDatasetConstants.getResponsiveSizeNameBitsbufsArray (
      sitesToolName,
      rangeOrderbyId,
      art,
      artSize
    );
  }



  getResponsiveSizeNameOrientedBitsbufsArray (
    sitesToolName: string,
    rangeOrderbyId: string,
    art: string,
    artSize: string,
    orientation: string
  ): Uint8Array[] {
    return this.responsiveDatasetConstants.getResponsiveSizeNameOrientedBitsbufsArray (
      sitesToolName,
      rangeOrderbyId,
      art,
      artSize,
      orientation
    );
  }



  getResponsiveSizeConstantLineBitsbufsArray (
    responsiveSizeName: string
  ): Uint8Array[] {
    return this.responsiveDatasetConstants.getResponsiveSizeConstantLineBitsbufsArray (
      responsiveSizeName
    );
  }

}

