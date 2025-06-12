import * as fs from "node:fs";
import * as path from "node:path";



import { ResponsiveDatasetConstants } from "./ResponsiveDatasetConstants.js";
import { ResponsiveDatasetBase } from "./ResponsiveDatasetBase.js";
import { ResponsiveImportsInterface } from "./ResponsiveImportsInterface.js";



export class ResponsiveImports implements ResponsiveImportsInterface {

  responsiveDatasetConstants: ResponsiveDatasetConstants;
  responsiveDatasetBase: ResponsiveDatasetBase;



  constructor() {
    this.responsiveDatasetConstants = new ResponsiveDatasetConstants();
    this.responsiveDatasetBase = new ResponsiveDatasetBase();
  }



  // RENAMED produceMediaCssImportsCssFile
  // .css file with @import url every .css file from the methods above with media queries, for every size one .css file
  // in the folder
  // Mobile.vsDesktop/MediaAndStyles/responsive
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
    mediaConstantsFileName: string,
    importedFilenamePrefix: string,
    webpackAliased: boolean
  ): Promise<number> {

    // @ts-ignore
    let data: any = this.dataset.data;

    let targetFilePath: string = path.resolve (
      this.responsiveDatasetBase.mediaAndStylesResponsiveFolderPath,
      targetFileName );

    let fileWriterRetVal: number = await this.responsiveDatasetBase.fileWriter.toAddToFileInLoop_CleanupFileAndGetNewFileHandle (
      targetFilePath
    );

    let importedFileName: string = "";
    let webpackAliasName: string = "";
    let mediaCssImportLine: string = "";

    if ( webpackAliased === true ) {
      webpackAliasName = this.responsiveDatasetBase.webpackAliasName;
    } else {
      webpackAliasName = ".";
    }

    importedFileName = mediaConstantsFileName;

    mediaCssImportLine = this.produceMediaCssImportLine (
      relativeImportedFilesFolderPath,
      importedFileName,
      webpackAliasName
    );

    fileWriterRetVal = await this.responsiveDatasetBase.fileWriter.appendTextToFile (
      ( mediaCssImportLine + "\n" )
    );

    fileWriterRetVal = await this.produceImportsLinesSet_ForResponsiveCssFilesSet (
      data,
      webpackAliased
    );

    fileWriterRetVal = await this.responsiveDatasetBase.fileWriter.appendTextToFile("\n\n");

    fileWriterRetVal = await this.responsiveDatasetBase.fileWriter.filehandleClose();

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
    webpackAliased: boolean
  ): Promise<number> {

    let importedFileName: string = "";
    let urlStart: string = "";
    let urlStartBitsbuf: Uint8Array = new Uint8Array();
    let deviceSizeNameOriented: Uint8Array = new Uint8Array();
    let cssImportLine: Uint8Array[] = new Array();

    if ( webpackAliased === true ) {
      urlStart = this.responsiveDatasetBase.webpackAliasName;
    } else {
      urlStart = ".";
    }

    urlStartBitsbuf = this.responsiveDatasetBase.textEncoder.encode( urlStart )

    let orientationKeywords: Uint8Array[] = this.responsiveDatasetConstants.getOrientationKeywordsBitsbufs();
    let orientation: Uint8Array = new Uint8Array();

    let written: number = 0;
    for ( let responsiveDatasetPropName in data ) {

      for ( orientation of orientationKeywords ) {

        deviceSizeNameOriented = this.responsiveDatasetConstants
            .getDeviceSizeNameBitsbufsOrientedArrayByBitsbufs (
              data[responsiveDatasetPropName]["deviceSizeName"],
              orientation
            );

        importedFileName = [deviceSizeNameOriented, ".css"].join("");

        cssImportLine = this.responsiveDatasetConstants.getImportLineBitsbufsArrayByBitsbufs (
          urlStartBitsbuf,
          deviceSizeNameOriented
        );

        written = await this.responsiveDatasetBase.fileWriter.appendFlatArrayToFile (
          cssImportLine
        );

      }

    }

    return written;
  }



  getImportLineBitsbufsArray (
    urlStart: string,
    deviceSizeName: string
  ): Uint8Array[] {
    return this.responsiveDatasetConstants.getImportLineBitsbufsArray (
      urlStart,
      deviceSizeName
    );
  }

}



