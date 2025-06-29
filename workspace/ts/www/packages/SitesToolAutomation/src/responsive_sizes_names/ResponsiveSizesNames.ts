import * as path from "node:path";
import { TextEncoder } from "node:util";

import { ResponsiveDatasetConstants } from "../constants/ResponsiveDatasetConstants.js";
import { ResponsiveDatasetBase } from "../automation_base_class/ResponsiveDatasetBase.js";
import { ResponsiveSizesNamesInterface } from "./ResponsiveSizesNamesInterface.js";
import { FileWriter } from "@jaisocx/file-writer";



export class ResponsiveSizesNames implements ResponsiveSizesNamesInterface {

  responsiveDatasetConstants: ResponsiveDatasetConstants;
  responsiveDatasetBase: ResponsiveDatasetBase;


  constructor(
    base: ResponsiveDatasetBase,
    constants: ResponsiveDatasetConstants
  ) {
    this.responsiveDatasetConstants = constants;
    this.responsiveDatasetBase = base;
  }


  setResponsiveDatasetBase( base: ResponsiveDatasetBase ): ResponsiveSizesNames {
    this.responsiveDatasetBase = base;

    return this;
  }


  // RENAMED produceMediaConstantsCssFile( targetFileName: string ): Promise<number>;
  // SiteToolAutomation/MediaAndStyles/responsive/MediaConstants.css
  // .workspace {
  //     --style_e02_mobile_xs_portrait__width__min_width: 240px;
  //     --style_e02_mobile_xs_portrait__width__max_width: 320px;
  //
  //     --style_e02_mobile_xs_landscape__width__min_width: 320px;
  //     --style_e02_mobile_xs_landscape__width__max_width: 500px;
  //
  //   ...
  async produceCssFileWithResponsiveSizesConstants(
    targetFileBaseName: string,
    newLinesAmount: number,
    padding: number
  ): Promise<number> {
    let retVal: number = 1;
    let fw: FileWriter = this.responsiveDatasetBase.fileWriter;
    let te: TextEncoder = this.responsiveDatasetBase.fileWriter.textEncoder;

    let targetFileName: string = [ targetFileBaseName, ".css" ].join( "" );


    // @ts-ignore
    let propNames: any = Object.keys( this.responsiveDatasetBase.datasetBitsbufs );
    let data: any = new Object();
    let responsiveDatasetPropName: string = "";
    let mediaConstantLinesSet: Uint8Array[] = new Array(4) as Uint8Array[];
    let mediaConstantLinesSet_Clone: Uint8Array[] = new Array() as Uint8Array[];
    let mediaConstantLinesSet_bitsbuf: Uint8Array = new Uint8Array();
    let labelLineArray: Uint8Array[] = new Array() as Uint8Array[];
    let labelLineArray2: Uint8Array[] = new Array() as Uint8Array[];
    let labelLine: Uint8Array = new Uint8Array();
    let newLine: Uint8Array = this.responsiveDatasetConstants.getNewLineBitsbuf();

    let linesAmount: number = newLinesAmount;
    let linesAmountLast: number = 1;

    let linesDelimiter: Uint8Array = new Uint8Array(linesAmount);
    let linesDelimiterLast: Uint8Array = new Uint8Array(linesAmountLast);

    linesDelimiter.fill( newLine[0], 0, linesAmount );
    linesDelimiterLast.fill( newLine[0], 0, linesAmountLast );


    let backgroundSpace: Uint8Array = this.responsiveDatasetConstants.getBitsbufSymbolBackgroundSpace();
    let paddingBitsbuf: Uint8Array = new Uint8Array(padding);
    paddingBitsbuf.fill( backgroundSpace[0], 0, padding );


    retVal = await fw.toAddToFileInLoop_CleanupFileAndGetNewFileHandle (
      path.resolve (
        this.responsiveDatasetBase.mediaAndStylesResponsiveFolderPath,
        targetFileName
      )
    );

    let cssClassStartLine: Uint8Array = te.encode( ".workspace {\n\n" );
    retVal = await fw.appendBitsbufToFile ( cssClassStartLine );


    let propsNumber: number = propNames.length;
    let lastIterationId: number = propsNumber - 1;
    let iterationId: number = 0;

    for ( iterationId = 0; iterationId < propsNumber; iterationId++ ) {
      responsiveDatasetPropName = propNames[iterationId];
      data = this.responsiveDatasetBase.datasetBitsbufs[responsiveDatasetPropName];

      labelLineArray = this.responsiveDatasetConstants.getLabelLineArrayByBitsbufs (
        data["art"],
        data["art_size"]
      );
      labelLineArray2 = [ paddingBitsbuf, ...labelLineArray ];

      labelLine = fw.concatUint8Arrays( labelLineArray2 );
      retVal = await fw.appendBitsbufToFile ( labelLine );

      mediaConstantLinesSet = this.produceResponsiveSizesConstantsLinesSet(
        responsiveDatasetPropName,
        paddingBitsbuf
      );
      mediaConstantLinesSet_Clone = [...mediaConstantLinesSet];

      if ( iterationId === lastIterationId ) {
        linesDelimiter = linesDelimiterLast;
      }
      mediaConstantLinesSet_Clone.push( linesDelimiter );

      mediaConstantLinesSet_bitsbuf = fw.concatUint8Arrays( mediaConstantLinesSet_Clone );

      retVal = await fw.appendBitsbufToFile ( mediaConstantLinesSet_bitsbuf );
    }

    let cssClassEndLine: Uint8Array = te.encode( "}\n\n" );
    retVal = await fw.appendBitsbufToFile ( cssClassEndLine );

    retVal = await fw.filehandleClose();

    return retVal;
  }


  // The subcall for the method produceMediaConstantsCssFile()
  // for the .css file
  // SiteToolAutomation/src/ResponsiveSizeNamesNew.ts
  // --s_56_16k_tv_vertical__min_width: 8641px; /* 16k TV */
  // --s_56_16k_tv_vertical__max_width: 9999px; /* 16k TV */
  //
  // --s_56_16k_tv_horizontal__min_width: 15361px; /* 16k TV */
  // --s_56_16k_tv_horizontal__max_width: 25360px; /* 16k TV */
  produceResponsiveSizesConstantsLinesSet (
    responsiveDatasetPropName: string,
    paddingBitsbuf: Uint8Array
  ): Uint8Array[] {
    let responsiveSizesConstantLinesArray: Uint8Array[] = new Array() as Uint8Array[];
    let responsiveSizesConstantLine: Uint8Array[] = new Array();
    let responsiveSizesConstantLine_Clone: Uint8Array[] = new Array();
    let responsiveSizesConstantLine_bitsbuf: Uint8Array = new Uint8Array();


    //@ts-ignore
    let data: any = this.responsiveDatasetBase
      .datasetBitsbufs[responsiveDatasetPropName];

    let dimensions: any = new Object();


    //@ts-ignore
    let responsiveSizeName: Uint8Array = data["responsiveSizeName"];

    let maxOrMinArray: Uint8Array[] = this.responsiveDatasetConstants.getMaxOrMinArray();
    let maxOrMin: Uint8Array = new Uint8Array();

    let responsiveSizeNameOrientedArray: Uint8Array[] = new Array() as Uint8Array[];
    let responsiveSizeNameOriented: Uint8Array = new Uint8Array();

    let orientationValues: Uint8Array[] = this.responsiveDatasetConstants.getOrientationKeywordsBitsbufs();
    let orientationValuesAsStrings: string[] = this.responsiveDatasetConstants.getOrientationKeywords();
    let orientationBitsbuf: Uint8Array = new Uint8Array();
    let orientation: string = "";

    let mediaLinePos: number = 0;
    let maxOrMinId: number = 0;

    let newLine: Uint8Array = this.responsiveDatasetConstants.getNewLineBitsbuf();

    let linesAmount: number = 2;
    let linesDelimiter: Uint8Array = new Uint8Array(linesAmount);
    linesDelimiter.fill( newLine[0], 0, linesAmount );

    let sizesAsBitsbufs_true: boolean = true;
    let size: Uint8Array = new Uint8Array();
    let orientationId: number = 0;

    for ( orientationId = 0; orientationId < 2; orientationId++ ) {
      orientation = orientationValuesAsStrings[orientationId];
      orientationBitsbuf = orientationValues[orientationId];

      dimensions = this.responsiveDatasetBase.getSizesByOrientation (
        responsiveDatasetPropName,
        orientation,
        sizesAsBitsbufs_true
      );

      responsiveSizeNameOrientedArray = this.responsiveDatasetConstants
        .getResponsiveSizeNameOrientedArrayByBitsbufs (
          responsiveSizeName,
          orientationBitsbuf
        );

      responsiveSizeNameOriented = this.responsiveDatasetBase
        .fileWriter.concatUint8Arrays ( responsiveSizeNameOrientedArray );

      for ( maxOrMinId = 0; maxOrMinId < 2; maxOrMinId++ ) {
        if ( maxOrMinId === 0 ) {
          size = dimensions["from"];
        } else {
          size = dimensions["to"];
        }

        maxOrMin = maxOrMinArray[maxOrMinId];

        responsiveSizesConstantLine = this.responsiveDatasetConstants
          .getResponsiveSizeConstantLine_size_ByBitsbufs(
            responsiveSizeNameOriented,
            maxOrMin,
            size
          );
        responsiveSizesConstantLine_Clone = [ paddingBitsbuf, ...responsiveSizesConstantLine ];


        // the several new lines are set after first two lines,
        // in the middle of group of 4 lines
        if ( ( orientationId === 0 ) && ( maxOrMinId === 1 ) ) {
          responsiveSizesConstantLine_Clone.push( linesDelimiter );
        } else {
          responsiveSizesConstantLine_Clone.push( newLine );
        }

        responsiveSizesConstantLine_bitsbuf = this.responsiveDatasetBase.fileWriter
          .concatUint8Arrays( responsiveSizesConstantLine_Clone );
        responsiveSizesConstantLinesArray.push( responsiveSizesConstantLine_bitsbuf );

        mediaLinePos++;
      }
    }

    return responsiveSizesConstantLinesArray;
  }

}


