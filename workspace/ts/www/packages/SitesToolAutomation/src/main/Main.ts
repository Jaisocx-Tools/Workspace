//@ts-ignore
import * as fs from "node:fs";


//@ts-ignore
import * as path from "node:path";


import { ResponsiveDatasetConstants } from "../constants/ResponsiveDatasetConstants.js";
import { ResponsiveSizesNames } from "../responsive_sizes_names/ResponsiveSizesNames.js";
import { ResponsiveFilesSet } from "../responsive_files_set/ResponsiveFilesSet.js";
import { ResponsiveImports } from "../responsive_imports/ResponsiveImports.js";


// import { ResponsiveTsFile_ResponsiveSizesNames } from "../ts_file_with_sizes_names/ResponsiveTsFile_ResponsiveSizesNames.js";
import { ResponsiveDatasetBase } from "../automation_base_class/ResponsiveDatasetBase.js";



export class Main {
  pathToJsonDatasetForResponsiveSizes: string;

  #keywordResponsiveSize: string = "";
  #fileBaseName_responsiveSizesConstants: string;
  #fileBaseName_CssImports: string;

  responsiveDatasetConstants: ResponsiveDatasetConstants;
  responsiveDatasetBase: ResponsiveDatasetBase;
  responsiveCssFile: ResponsiveFilesSet;
  responsiveCssFileWithResponsiveSizes: ResponsiveSizesNames;
  responsiveImports: ResponsiveImports;


  // responsiveTsFile_ResponsiveSizesNames: ResponsiveTsFile_ResponsiveSizesNames;
  constructor() {
    this.pathToJsonDatasetForResponsiveSizes = "data/ResponsiveSizes/ResponsiveSizes.json";

    this.#keywordResponsiveSize = "responsive_size";
    this.#fileBaseName_responsiveSizesConstants = "Constants";
    this.#fileBaseName_CssImports = "CssImports";

    this.responsiveDatasetConstants = new ResponsiveDatasetConstants();
    this.responsiveDatasetBase = new ResponsiveDatasetBase();
    this.responsiveCssFile = new ResponsiveFilesSet( this.responsiveDatasetBase, this.responsiveDatasetConstants );
    this.responsiveCssFileWithResponsiveSizes = new ResponsiveSizesNames( this.responsiveDatasetBase, this.responsiveDatasetConstants );
    this.responsiveImports = new ResponsiveImports( this.responsiveDatasetBase, this.responsiveDatasetConstants );


    // this.responsiveTsFile_ResponsiveSizesNames = new ResponsiveTsFile_ResponsiveSizesNames();
  }


  // the central main method to produce .css files and for them the datasets, texts and names and .css files names.
  // cssOrJsTool: "css" | "js"
  async run (
    commandLineArgs: any
  ): Promise<number> {
    commandLineArgs["withSizesCssConstants"] = ( commandLineArgs["withSizesCssConstants"] === "true" );
    commandLineArgs["withConstantsImportLine"] = ( commandLineArgs["withConstantsImportLine"] === "true" );


    this.#keywordResponsiveSize = commandLineArgs["keywordResponsiveSize"];
    this.responsiveDatasetConstants.setKeywordResponsiveSize( this.#keywordResponsiveSize );
    this.responsiveDatasetConstants.initBitbufsArrays();


    this.responsiveDatasetBase.setCommandLineArgs( commandLineArgs );
    this.responsiveDatasetBase.setSitesTool_ThemeName( commandLineArgs["sitesTool_ThemeName"] );
    this.responsiveDatasetBase.setSitesToolName( commandLineArgs["sitesToolName"] );

    if ( this.responsiveDatasetBase.templateProjectPath.length === 0 ) {
      this.responsiveDatasetBase.templateProjectPath = path.resolve(
        "../../",
        "sites_tools", (
          commandLineArgs["cssOrJsTool"] + "_tools" ),
        commandLineArgs["sitesToolName"]
      );
    }

    if ( fs.existsSync( this.responsiveDatasetBase.templateProjectPath ) === false ) {
      fs.mkdirSync(
        this.responsiveDatasetBase.templateProjectPath,
        { recursive: true }
      );
    }

    if ( this.responsiveDatasetBase.webpackAliasName.length === 0 ) {
      this.responsiveDatasetBase.webpackAliasName = [ "@", commandLineArgs["sitesToolName"], "_", "MediaAndStyles" ].join( "" );
    }

    this.responsiveDatasetBase
      .readDataset( this.pathToJsonDatasetForResponsiveSizes )
      .datasetPropsToBitsbufs( commandLineArgs["sitesToolName"] )
      .setMediaAndStylesResponsiveFolderPath( [ "MediaAndStyles", "/", "themes", "/", commandLineArgs["sitesTool_ThemeName"] ].join("") )
      .setMediaQueryCssFileTemplatePath( commandLineArgs["templatePath"] );


    // console.log( this.responsiveDatasetBase.dataset );
    let retVal: number = 0;
    let newLinesAmount: number = 3;
    let padding: number = 2;


    // CSS FILES SET, MEDIA QUERIES
    // ---------------------------------------------
    this.responsiveCssFile.readTemplateMediaCssFile( this.responsiveDatasetBase.mediaQueryCssFileTemplatePath );
    retVal = await this.responsiveCssFile.produceResponsiveFilesSetsSet();


    // CSS FILE WITH CONSTANTS OF RESPONSIVE SIZES
    // ---------------------------------------------
    let fileBaseName_responsiveSizesConstants: string = "";

    if ( commandLineArgs["withSizesCssConstants"] === true ) {
      fileBaseName_responsiveSizesConstants = [
        this.#keywordResponsiveSize,
        "_a02_",
        this.#fileBaseName_responsiveSizesConstants
      ].join( "" );


      //@ts-ignore
      retVal = await this.responsiveCssFileWithResponsiveSizes.produceCssFileWithResponsiveSizesConstants (
        fileBaseName_responsiveSizesConstants,
        newLinesAmount,
        padding
      );
    }


    // CSS IMPORTS
    // ---------------------------------------------
    let withConstantsImportLine: boolean = ( commandLineArgs["withSizesCssConstants"] && commandLineArgs["withConstantsImportLine"] );

    let isWebpackAliased_true: boolean = true;
    let filename: string = [
      this.#keywordResponsiveSize,
      "_a03_",
      this.#fileBaseName_CssImports,
      "_",
      commandLineArgs["sitesToolName"],
      "_",
      "Webpack",
      ".css"
    ].join( "" );

    retVal = await this.responsiveImports.produceImportsCssFileWithResponsiveFilesSetsSet (


      // ResponsiveSizesCssImports_Webpack.css
      filename,
      this.responsiveDatasetBase.mediaAndStylesResponsiveFolderPath,
      fileBaseName_responsiveSizesConstants,
      isWebpackAliased_true,
      withConstantsImportLine
    );

    let isWebpackAliased_false: boolean = false;
    filename = [
      this.#keywordResponsiveSize,
      "_a03_",
      this.#fileBaseName_CssImports,
      "_",
      commandLineArgs["sitesToolName"],
      "_",
      "Relative",
      ".css"
    ].join( "" );

    retVal = await this.responsiveImports.produceImportsCssFileWithResponsiveFilesSetsSet (


      // ResponsiveSizesCssImports_Relative.css
      filename,
      this.responsiveDatasetBase.mediaAndStylesResponsiveFolderPath,
      fileBaseName_responsiveSizesConstants,
      isWebpackAliased_false,
      withConstantsImportLine
    );

    return retVal;


    // TS CLASS
    // ---------------------------------------------
    // retVal = await this.responsiveTsFile_ResponsiveSizesNames
    //   .produceTsFileWithResponsiveSizesNames( "ResponsiveSizesConstants" );
  }

}




