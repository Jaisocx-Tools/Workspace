import * as fs from "node:fs";
import * as path from "node:path";

import { ResponsiveDatasetConstants } from "./ResponsiveDatasetConstants.js";
import { ResponsiveDatasetBase } from "./ResponsiveDatasetBase.js";
import { ResponsiveCssFileWithDevicesSizesInterface } from "./ResponsiveCssFileWithDevicesSizesInterface.js";



export class ResponsiveCssFileWithDevicesSizes implements ResponsiveCssFileWithDevicesSizesInterface {

  responsiveDatasetConstants: ResponsiveDatasetConstants;
  responsiveDatasetBase: ResponsiveDatasetBase;



  constructor() {
    this.responsiveDatasetConstants = new ResponsiveDatasetConstants();
    this.responsiveDatasetBase = new ResponsiveDatasetBase();
  }



  // RENAMED produceMediaConstantsCssFile( targetFileName: string ): Promise<number>;
  // Mobile.vsDesktop/MediaAndStyles/responsive/MediaConstants.css
  // .workspace {
  //     --style_e02_mobile_xs_portrait__width__min_width: 240px;
  //     --style_e02_mobile_xs_portrait__width__max_width: 320px;
  //
  //     --style_e02_mobile_xs_landscape__width__min_width: 320px;
  //     --style_e02_mobile_xs_landscape__width__max_width: 500px;
  //
  //   ...
  async produceCssFileWithDevicesSizesConstants( targetFileName: string ): Promise<number> {
    // @ts-ignore
    let propNames: any = Object.keys( this.dataset.data );
    let responsiveDatasetPropName: string = "";
    let mediaConstantLinesSet: Uint8Array[][] = new Array() as Uint8Array[][];

    await this.responsiveDatasetBase.fileWriter.toAddToFileInLoop_CleanupFileAndGetNewFileHandle (
      path.resolve(
        this.responsiveDatasetBase.mediaAndStylesResponsiveFolderPath,
        targetFileName )
    );

    let cssClassStartLine: Uint8Array = this.responsiveDatasetBase.textEncoder.encode( ".workspace {\n\n" );
    await this.responsiveDatasetBase.fileWriter.appendBitsbufToFile ( cssClassStartLine );

    let i = 0;
    let propsNumber: number = propNames.length;
    for ( i = 0; i < propsNumber; i++ ) {
      responsiveDatasetPropName = propNames[i];
      mediaConstantLinesSet = this.produceDevicesSizesConstantsLinesSet( responsiveDatasetPropName );
      await this.responsiveDatasetBase.fileWriter.appendMixedArrayToFile ( mediaConstantLinesSet );
    }

    let cssClassEndLine: Uint8Array = this.responsiveDatasetBase.textEncoder.encode( "}\n" );
    await this.responsiveDatasetBase.fileWriter.appendBitsbufToFile ( cssClassEndLine );

    await this.responsiveDatasetBase.fileWriter.filehandleClose();

    return 1;
  }



  // The subcall for the method produceMediaConstantsCssFile()
  // for the .css file
  // Mobile.vsDesktop/src/MediaruleNamesNew.ts
  // --s_56_16k_tv_vertical__min_width: 8641px; /* 16k TV */
  // --s_56_16k_tv_vertical__max_width: 9999px; /* 16k TV */
  //
  // --s_56_16k_tv_horizontal__min_width: 15361px; /* 16k TV */
  // --s_56_16k_tv_horizontal__max_width: 25360px; /* 16k TV */
  produceDevicesSizesConstantsLinesSet ( responsiveDatasetPropName: string ): Uint8Array[][] {

    let devicesSizesConstantLinesArray: Uint8Array[][] = new Array(4) as Uint8Array[][];
    let devicesSizesConstantLine: Uint8Array[] = new Array();
    let newLine: Uint8Array = this.responsiveDatasetConstants.getNewLineBitsbuf();

    let deviceSizeNameOriented: Uint8Array = this.responsiveDatasetBase
        .datasetBitsbufs[responsiveDatasetPropName]["deviceSizeName"];

    let orientationValues: Uint8Array[] = this.responsiveDatasetConstants.getOrientationKeywordsBitsbufs();
    let orientation: Uint8Array = new Uint8Array();
    let isStartValue: boolean = true;

    let mediaLinePos: number = 0;
    for ( orientation of orientationValues ) {

      for ( let i = 1; i < 3; i++ ) {
        isStartValue = ( i === 1 );

        devicesSizesConstantLine = this.responsiveDatasetConstants
            .getDeviceSizeConstantLine_size_BitsbufsArrayByBitsbufs (
              deviceSizeNameOriented,
              orientation
            );
        devicesSizesConstantLine.push(newLine);

        if ( isStartValue === false ) {
          devicesSizesConstantLine.push( newLine );
        }

        devicesSizesConstantLinesArray[mediaLinePos] = devicesSizesConstantLine;

        mediaLinePos++;

      }
    }

    devicesSizesConstantLinesArray[3].push( newLine );
    devicesSizesConstantLinesArray[3].push( newLine );

    return devicesSizesConstantLinesArray;
  }

}


