import * as path from "node:path";

import { ResponsiveDatasetConstants } from "../constants/ResponsiveDatasetConstants.js";
import { ResponsiveDatasetBase } from "../automation_base_class/ResponsiveDatasetBase.js";
import { ResponsiveImportsInterface } from "./ResponsiveImportsInterface.js";
import { FileWriter } from "@jaisocx/file-writer";



export class ResponsiveImports implements ResponsiveImportsInterface {

  responsiveDatasetConstants: ResponsiveDatasetConstants;
  responsiveDatasetBase: ResponsiveDatasetBase;



  constructor( base: ResponsiveDatasetBase, constants: ResponsiveDatasetConstants ) {
    this.responsiveDatasetConstants = constants;
    this.responsiveDatasetBase = base;
  }



  // RENAMED produceMediaCssImportsCssFile
  // .css file with @import url every .css file from the methods above with media queries, for every size one .css file
  // in the folder
  // SiteToolAutomation/MediaAndStyles/responsive
  //    MediaCssImports.css
  //    MediaCssImports_Webpack.css
  //    MediaCssImports_CDN.css
  // lines like this:
  // one .css file with constants for sizes:
  //    @import url("./MediaConstants.css");
  // and other .css files, every same tamplate for media queries.
  //    @import url("./style_e02_mobile_xs_portrait.css");
  //    @import url("./style_e02_mobile_xs_landscape.css");
  //    @import url("./style_e04_mobile_s_portrait.css");
  //    ...
  //    ...
  async produceImportsCssFileWithResponsiveCssFilesSet (
    targetFileName: string,
    relativeImportedFilesFolderPath: string,
    importedCssFileWithSizesNames_FileBaseName: string,
    webpackAliased: boolean,
    withConstantsImportLine: boolean
  ): Promise<number> {
    let fw: FileWriter = this.responsiveDatasetBase.fileWriter;
    let te: TextEncoder = this.responsiveDatasetBase.fileWriter.textEncoder;

    // @ts-ignore
    let data: any = this.responsiveDatasetBase.datasetBitsbufs;

    let targetFilePath: string = path.resolve (
      relativeImportedFilesFolderPath,
      targetFileName );

    let fileWriterRetVal: number = await fw.toAddToFileInLoop_CleanupFileAndGetNewFileHandle (
      targetFilePath
    );


    let commentText = "";
    let urlStart: string = "";

    if ( webpackAliased === true ) {
      commentText = "Webpack build css imports";
      urlStart = [this.responsiveDatasetBase.webpackAliasName, "/", "themes", "/", "theme_base"].join( "" );
    } else {
      commentText = "Relative urls css imports";
      urlStart = ".";
    }

    let newLineBitsbuf: Uint8Array = this.responsiveDatasetConstants.getNewLineBitsbuf();
    let linesDelimiter: Uint8Array = new Uint8Array(2);
    linesDelimiter.fill( (newLineBitsbuf.at(0) as number), 0, 2 );

    // the first line is written in the imports css file
    let commentBitsbuf: Uint8Array = te.encode( commentText );
    let firstLineEncommentedArray: Uint8Array[] = this.responsiveDatasetConstants.getCssEncommentedLineByBitsbufs( commentBitsbuf );
    let firstLineEncommentedArray_Clone: Uint8Array[] = [...firstLineEncommentedArray];
    firstLineEncommentedArray_Clone.push( linesDelimiter );
    let firstLineEncommented: Uint8Array = fw.concatUint8Arrays ( firstLineEncommentedArray_Clone );
    fileWriterRetVal = await fw.appendBitsbufToFile( firstLineEncommented );



    let bitsbufUrlStart: Uint8Array = te.encode( urlStart );

    if ( withConstantsImportLine === true ) {
      let bitsbufImportedCssFileWithSizesNames_FileBaseName: Uint8Array = te.encode( importedCssFileWithSizesNames_FileBaseName );

      // gets the bitsbuf of the first import line with css file with responsive sizes names
      let cssImportLine_fileWithSizesNames: Uint8Array[] = this.responsiveDatasetConstants.getImportLineBitsbufsArrayByBitsbufs (
        bitsbufUrlStart,
        bitsbufImportedCssFileWithSizesNames_FileBaseName
      );

      // adds 4 new line chars linesDelimiter bitsbuf to the import line array of bitsbufs.
      let cssImportLine_fileWithSizesNames_Clone: Uint8Array[] = [...cssImportLine_fileWithSizesNames];
      cssImportLine_fileWithSizesNames_Clone.push( linesDelimiter );

      fileWriterRetVal = await fw.appendFlatArrayToFile ( cssImportLine_fileWithSizesNames_Clone );
    }



    // css import lines for every css file with media queries for every responsive size is written to the imports css file
    fileWriterRetVal = await this.produceImportsLinesSet_ForResponsiveCssFilesSet (
      data,
      bitsbufUrlStart
    );

    // adds one new line at the end of the file
    fileWriterRetVal = await fw.appendBitsbufToFile( linesDelimiter );

    // file writer closes the css imports file
    fileWriterRetVal = await fw.filehandleClose();



    return fileWriterRetVal;
  }



  // the subcall for the method above, the produceMediaCssImportsCssFile()
  // iterates every .json data record with sizes,
  // produces .css files names with media queries like
  //    responsive/style_e02_mobile_xs_portrait.css
  // from the method
  //    produceMediaCssFile()
  // and adds the import lines for every of these .css files like this:
  //    @import url("./style_e02_mobile_xs_portrait.css");
  // or
  //    @import url("@jaisocx-css-clean-start-MediaAndStyles/style_e02_mobile_xs_portrait.css");
  // not implemented with cdn, and don't know for now, whether needed, it seems for the css-clean-start theme or a SitesTool theme for sure.
  // for example:
  //    @import url("https://cdn.brightday.email/Media.vsDesktop/responsive/style_e02_mobile_xs_portrait.css");
  async produceImportsLinesSet_ForResponsiveCssFilesSet (
    data: any,
    bitsbufUrlStart: Uint8Array
  ): Promise<number> {
    let fw: FileWriter = this.responsiveDatasetBase.fileWriter;
    let sitesToolName: string = this.responsiveDatasetBase.sitesToolName;
    let sitesToolNameBitsbuf: Uint8Array = fw.textEncoder.encode ( sitesToolName );

    let newLineBitsbuf: Uint8Array = this.responsiveDatasetConstants.getNewLineBitsbuf();

    let responsiveSizeName_withSitesToolName_Array: Uint8Array[] = new Array() as Uint8Array[];
    let responsiveSizeName_withSitesToolName: Uint8Array = new Uint8Array();
    let cssImportLine: Uint8Array[] = new Array();
    let cssImportLineClone: Uint8Array[] = new Array();
    let bitsbufCssImportLine: Uint8Array = new Uint8Array();
    let linesDelimiter: Uint8Array = new Uint8Array(3);
    linesDelimiter.fill( (newLineBitsbuf.at(0) as number), 0, 3 );


    let orientationKeywords: Uint8Array[] = this.responsiveDatasetConstants.getOrientationKeywordsBitsbufs();
    let orientationBitsbuf: Uint8Array = new Uint8Array();

    let labelLineArray: Uint8Array[] = new Array() as Uint8Array[];
    let labelLine: Uint8Array = new Uint8Array();

    let written: number = 0;
    let orientationKeywordId: number = 0;
    let responsiveSizeDataNames: string[] = Object.keys( data );
    let responsiveDatasetLength: number = responsiveSizeDataNames.length;
    let responsiveSizeDataId: number = 0;
    let responsiveSizeDataLastId: number = ( responsiveDatasetLength - 1 );
    let responsiveDatasetPropName: string = "";
    let responsiveSizeData: any = new Object();
    for ( responsiveSizeDataId = 0; responsiveSizeDataId < responsiveDatasetLength; responsiveSizeDataId++ ) {
      responsiveDatasetPropName = responsiveSizeDataNames[responsiveSizeDataId];
      responsiveSizeData = data[responsiveDatasetPropName];

      labelLineArray = this.responsiveDatasetConstants.getLabelLineArrayByBitsbufs (
        responsiveSizeData["art"],
        responsiveSizeData["art_size"],
      );

      labelLine = fw.concatUint8Arrays( labelLineArray );
      written = await fw.appendBitsbufToFile ( labelLine );

      for ( orientationKeywordId = 0; orientationKeywordId < 2; orientationKeywordId++ ) {

        orientationBitsbuf = orientationKeywords[orientationKeywordId];

        responsiveSizeName_withSitesToolName_Array = this.responsiveDatasetConstants
          .getResponsiveSizeName_withSitesToolName_ByBitsbufs (
            responsiveSizeData["range_orderby_id"],
            responsiveSizeData["art"],
            responsiveSizeData["art_size"],
            orientationBitsbuf,
            sitesToolNameBitsbuf
          );

        responsiveSizeName_withSitesToolName = this.responsiveDatasetBase
            .fileWriter.concatUint8Arrays ( responsiveSizeName_withSitesToolName_Array );

        cssImportLine = this.responsiveDatasetConstants.getImportLineBitsbufsArrayByBitsbufs (
          bitsbufUrlStart,
          responsiveSizeName_withSitesToolName
        );

        cssImportLineClone = [...cssImportLine];

        if ( responsiveSizeDataId === responsiveSizeDataLastId ) {
          cssImportLineClone.push( newLineBitsbuf );
        } else if ( orientationKeywordId === 1 ) {
          cssImportLineClone.push( linesDelimiter );
        } else {
          cssImportLineClone.push( newLineBitsbuf );
        }

        bitsbufCssImportLine = fw.concatUint8Arrays( cssImportLineClone );
        written = await fw.appendBitsbufToFile (
          bitsbufCssImportLine
        );

      }

    }

    return written;
  }

}



