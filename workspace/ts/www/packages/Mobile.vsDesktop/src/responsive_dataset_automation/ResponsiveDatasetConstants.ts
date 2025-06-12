import { FileWriter } from "@jaisocx/file-writer";
import { ResponsiveDatasetConstantsInterface } from "./ResponsiveDatasetConstantsInterface.js"



export class ResponsiveDatasetConstants implements ResponsiveDatasetConstantsInterface {

  textEncoder: TextEncoder;
  fileWriter: FileWriter;

  #keywordDeviceSize: string;
  #keywordName: string;

  #keywordMediaOnly: string;
  #keywordScreen: string;
  #keywordPrint: string;
  #keywordOrientation: string;
  #keywordOrientationLandscape: string;
  #keywordOrientationPortrait: string;

  #keywordAnd: string;

  #importUrlStart: string;
  #importUrlEnd: string;

  #keywordWidth: string;
  #keywordMin: string;
  #keywordMax: string;
  #keywordCssFileExtension: string;
  #keywordTsFileExtension: string;

  #unitPx: string;

  #cssVariablePrefix: string;
  #cssVariableNameValueDelimiter: string;
  #cssVariableReferenceKeyword_Var: string;
  #cssExpressionEnd: string;

  #symbolBraceRoundStart: string;
  #symbolBraceRoundEnd: string;
  #symbolBraceFigureStart: string;
  #symbolBraceFigureEnd: string;
  #symbolDoubleQuote: string;
  #symbolCommentStart: string;
  #symbolCommentEnd: string;
  #symbolBackgroundSpace: string;
  #symbolNewLine: string;
  #symbolUnderscore: string;
  #symbolMinus: string;
  #symbolDot: string;



  #bitsbufKeywordDeviceSize: Uint8Array;
  #bitsbufKeywordName: Uint8Array;

  #bitsbufKeywordMediaOnly: Uint8Array;
  #bitsbufKeywordScreen: Uint8Array;
  #bitsbufKeywordPrint: Uint8Array;
  #bitsbufKeywordOrientation: Uint8Array;
  #bitsbufKeywordOrientationLandscape: Uint8Array;
  #bitsbufKeywordOrientationPortrait: Uint8Array;
  #bitsbufKeywordAnd: Uint8Array;
  #bitsbufKeywordWidth: Uint8Array;
  #bitsbufKeywordMin: Uint8Array;
  #bitsbufKeywordMax: Uint8Array;
  #bitsbufKeywordCssFileExtension: Uint8Array;
  #bitsbufKeywordTsFileExtension: Uint8Array;

  #bitsbufImportUrlStart: Uint8Array;
  #bitsbufImportUrlEnd: Uint8Array;

  #bitsbufUnitPx: Uint8Array;

  #bitsbufCssVariableStart: Uint8Array;
  #bitsbufCssVariableNameValueDelimiter: Uint8Array;
  #bitsbufCssVariableReferenceKeyword_Var: Uint8Array;
  #bitsbufCssExpressionEnd: Uint8Array;

  #bitsbufSymbolBraceRoundStart: Uint8Array;
  #bitsbufSymbolBraceRoundEnd: Uint8Array;
  #bitsbufSymbolBraceFigureStart: Uint8Array;
  #bitsbufSymbolBraceFigureEnd: Uint8Array;
  #bitsbufSymbolDoubleQuote: Uint8Array;
  #bitsbufSymbolCommentStart: Uint8Array;
  #bitsbufSymbolCommentEnd: Uint8Array;
  #bitsbufSymbolBackgroundSpace: Uint8Array;
  #bitsbufSymbolNewLine: Uint8Array;
  #bitsbufSymbolUnderscore: Uint8Array;
  #bitsbufSymbolMinus: Uint8Array;
  #bitsbufSymbolDot: Uint8Array;

  #orientationKeywords: string[];
  #orientationBitsbufKeywordsArray: Uint8Array[];

  #deviceSizeNameOrientedBitsbufsArray: (Uint8Array|string)[];

  #importLineBitsbufsArray: (Uint8Array|string)[];
  #deviceSizeConstantLineBitsbufsArray: (Uint8Array|string)[];
  #deviceSizeConstantLine_size_BitsbufsArray: (Uint8Array|string)[];


// --device_size_name: style_e02_mobile_xs_portrait;
// --device_size_min_width: var(--mobileVsDesktop__tooltip_e02_mobile_xs_portrait__min_width);



// DevicesSizesNames
// DevicesSizesConstants



  constructor() {
    this.textEncoder = new TextEncoder();

    this.#keywordDeviceSize = "device_size";
    this.#keywordName = "name";

    this.#keywordMediaOnly = "@media only ";
    this.#keywordScreen = "screen";
    this.#keywordPrint = "print";
    this.#keywordOrientation = "orientation";
    this.#keywordOrientationLandscape = "landscape";
    this.#keywordOrientationPortrait = "portrait";
    this.#keywordAnd = " and ";
    this.#keywordWidth = "width";
    this.#keywordMin = "min";
    this.#keywordMax = "max";
    this.#keywordCssFileExtension = "css";
    this.#keywordTsFileExtension = "ts";

    this.#importUrlStart = "@import url(\"";
    this.#importUrlEnd = "\");";

    this.#unitPx = "px";

    this.#cssVariablePrefix = "--";
    this.#cssVariableNameValueDelimiter = ": ";
    this.#cssVariableReferenceKeyword_Var = "var";
    this.#cssExpressionEnd = ";";

    this.#symbolBraceRoundStart = "(";
    this.#symbolBraceRoundEnd = ")";
    this.#symbolBraceFigureStart = "{";
    this.#symbolBraceFigureEnd = "}";
    this.#symbolDoubleQuote = "\"";
    this.#symbolCommentStart = "/*";
    this.#symbolCommentEnd = "*/";
    this.#symbolBackgroundSpace = " ";
    this.#symbolNewLine = "\n";
    this.#symbolUnderscore = "_";
    this.#symbolMinus = "-";
    this.#symbolDot = ".";



    this.#bitsbufKeywordDeviceSize = this.textEncoder.encode( this.#keywordDeviceSize );
    this.#bitsbufKeywordName = this.textEncoder.encode( this.#keywordName );

    this.#bitsbufKeywordMediaOnly = this.textEncoder.encode( this.#keywordMediaOnly );
    this.#bitsbufKeywordScreen = this.textEncoder.encode( this.#keywordScreen );
    this.#bitsbufKeywordPrint = this.textEncoder.encode( this.#keywordPrint );
    this.#bitsbufKeywordOrientation = this.textEncoder.encode( this.#keywordOrientation );
    this.#bitsbufKeywordOrientationLandscape = this.textEncoder.encode( this.#keywordOrientationLandscape );
    this.#bitsbufKeywordOrientationPortrait = this.textEncoder.encode( this.#keywordOrientationPortrait );
    this.#bitsbufKeywordAnd = this.textEncoder.encode( this.#keywordAnd );
    this.#bitsbufKeywordWidth = this.textEncoder.encode( this.#keywordWidth );
    this.#bitsbufKeywordMin = this.textEncoder.encode( this.#keywordMin );
    this.#bitsbufKeywordMax = this.textEncoder.encode( this.#keywordMax );
    this.#bitsbufKeywordCssFileExtension = this.textEncoder.encode( this.#keywordCssFileExtension );
    this.#bitsbufKeywordTsFileExtension = this.textEncoder.encode( this.#keywordTsFileExtension );

    this.#bitsbufImportUrlStart = this.textEncoder.encode( this.#importUrlStart );
    this.#bitsbufImportUrlEnd = this.textEncoder.encode( this.#importUrlEnd );

    this.#bitsbufUnitPx = this.textEncoder.encode( this.#unitPx );

    this.#bitsbufCssVariableStart = this.textEncoder.encode( this.#cssVariablePrefix );
    this.#bitsbufCssVariableNameValueDelimiter = this.textEncoder.encode( this.#cssVariableNameValueDelimiter );
    this.#bitsbufCssVariableReferenceKeyword_Var = this.textEncoder.encode( this.#cssVariableReferenceKeyword_Var );
    this.#bitsbufCssExpressionEnd = this.textEncoder.encode( this.#cssExpressionEnd );

    this.#bitsbufSymbolBraceRoundStart = this.textEncoder.encode( this.#symbolBraceRoundStart );
    this.#bitsbufSymbolBraceRoundEnd = this.textEncoder.encode( this.#symbolBraceRoundEnd );
    this.#bitsbufSymbolBraceFigureStart = this.textEncoder.encode( this.#symbolBraceFigureStart );
    this.#bitsbufSymbolBraceFigureEnd = this.textEncoder.encode( this.#symbolBraceFigureEnd );
    this.#bitsbufSymbolDoubleQuote = this.textEncoder.encode( this.#symbolDoubleQuote );
    this.#bitsbufSymbolCommentStart = this.textEncoder.encode( this.#symbolCommentStart );
    this.#bitsbufSymbolCommentEnd = this.textEncoder.encode( this.#symbolCommentEnd );
    this.#bitsbufSymbolBackgroundSpace = this.textEncoder.encode( this.#symbolBackgroundSpace );
    this.#bitsbufSymbolNewLine = this.textEncoder.encode( this.#symbolNewLine );
    this.#bitsbufSymbolUnderscore = this.textEncoder.encode( this.#symbolUnderscore );
    this.#bitsbufSymbolMinus = this.textEncoder.encode( this.#symbolMinus );
    this.#bitsbufSymbolDot = this.textEncoder.encode( this.#symbolDot );


    this.#orientationKeywords = [
      this.#keywordOrientationLandscape,
      this.#keywordOrientationPortrait
    ];


    this.#orientationBitsbufKeywordsArray = [
      this.#bitsbufKeywordOrientationLandscape,
      this.#bitsbufKeywordOrientationPortrait
    ];



    this.#deviceSizeNameOrientedBitsbufsArray = [
      "sites_tool_name",
      this.#bitsbufSymbolUnderscore,
      "range_orderby_id",
      this.#bitsbufSymbolUnderscore,
      "art",
      this.#bitsbufSymbolUnderscore,
      "art_size",
      this.#bitsbufSymbolUnderscore,
      "orientation"
    ];



    // @import url("./style_e02_mobile_xs_portrait.css");
    this.#importLineBitsbufsArray = [
      this.#bitsbufImportUrlStart,
      "url_start",
      this.#bitsbufSymbolDot,
      "device_size_name",
      this.#bitsbufSymbolDot,
      this.#bitsbufKeywordCssFileExtension,
      this.#bitsbufImportUrlEnd
    ];



    this.#deviceSizeConstantLineBitsbufsArray = [
      this.#bitsbufCssVariableStart,
      this.#bitsbufKeywordDeviceSize,
      this.#bitsbufKeywordName,
      this.#bitsbufCssVariableNameValueDelimiter,
      "deviceSizeNameOriented",
      this.#bitsbufCssExpressionEnd
    ];



    this.#deviceSizeConstantLine_size_BitsbufsArray = [
      this.#bitsbufCssVariableStart,
      this.#bitsbufKeywordDeviceSize,
      this.#bitsbufKeywordName,
      this.#bitsbufSymbolUnderscore,
      this.#bitsbufSymbolUnderscore,
      "max_or_min",
      this.#bitsbufSymbolUnderscore,
      this.#bitsbufKeywordWidth,
      this.#bitsbufCssVariableNameValueDelimiter,
      "deviceSizeNameOriented",
      this.#bitsbufSymbolUnderscore,
      this.#bitsbufSymbolUnderscore,
      "max_or_min",
      this.#bitsbufCssExpressionEnd
    ];

  }


  getOrientationKeywords(): string[] {
    return this.#orientationKeywords;
  }


  getOrientationKeywordsBitsbufs(): Uint8Array[] {
    return this.#orientationBitsbufKeywordsArray;
  }


  getKeywordOrientationPortrait(): string {
    return this.#keywordOrientationPortrait;
  }


  getKeywordOrientationLandscape(): string {
    return this.#keywordOrientationLandscape;
  }


  getKeywordMin(): Uint8Array {
    return this.#bitsbufKeywordMin;
  }


  getKeywordMax(): Uint8Array {
    return this.#bitsbufKeywordMax;
  }


  getNewLineBitsbuf(): Uint8Array {
    return this.#bitsbufSymbolNewLine;
  }


  getDeviceSizeNameBitsbufsArrayByBitsbufs (
    sitesToolName: Uint8Array,
    rangeOrderbyId: Uint8Array,
    art: Uint8Array,
    artSize: Uint8Array
  ): Uint8Array {
    let sitesToolNamePos: number = 0;
    let rangeOrderbyIdPos: number = 2;
    let artPos: number = 4;
    let artSizePos: number = 6;

    this.#deviceSizeNameOrientedBitsbufsArray[sitesToolNamePos] = sitesToolName;
    this.#deviceSizeNameOrientedBitsbufsArray[rangeOrderbyIdPos] = rangeOrderbyId;
    this.#deviceSizeNameOrientedBitsbufsArray[artPos] = art;
    this.#deviceSizeNameOrientedBitsbufsArray[artSizePos] = artSize;

    let devicesSizesNamesMultiArray: Uint8Array[] = ( this.#deviceSizeNameOrientedBitsbufsArray as Uint8Array[] ).slice( 0, 6);
    let devicesSizesNamesArray: Uint8Array = this.fileWriter.concatUint8Arrays( devicesSizesNamesMultiArray );

    return devicesSizesNamesArray;
  }


  getDeviceSizeNameBitsbufsOrientedArrayByBitsbufs (
    deviceSizeName: Uint8Array,
    orientation: Uint8Array
  ): Uint8Array {

    let deviceSizeNameOrientedArray: Uint8Array[] = [
      deviceSizeName,
      this.#bitsbufSymbolUnderscore,
      orientation
    ];

    let deviceSizeNameOriented: Uint8Array = this.fileWriter.concatUint8Arrays( deviceSizeNameOrientedArray );

    return deviceSizeNameOriented;
  }



  getDeviceSizeNameBitsbufsArray (
    sitesToolName: string,
    rangeOrderbyId: string,
    art: string,
    artSize: string
  ): Uint8Array[] {
    return this.getDeviceSizeNameOrientedBitsbufsArray (
      sitesToolName,
      rangeOrderbyId,
      art,
      artSize,
      ""
    ).slice(0, 6);
  }



  getDeviceSizeNameOrientedBitsbufsArray (
    sitesToolName: string,
    rangeOrderbyId: string,
    art: string,
    artSize: string,
    orientation: string
  ): Uint8Array[] {

    let sitesToolNamePos: number = 0;
    let rangeOrderbyIdPos: number = 2;
    let artPos: number = 4;
    let artSizePos: number = 6;
    let orientationPos: number = 8;

    this.#deviceSizeNameOrientedBitsbufsArray[sitesToolNamePos] = this.textEncoder.encode( sitesToolName );
    this.#deviceSizeNameOrientedBitsbufsArray[rangeOrderbyIdPos] = this.textEncoder.encode( rangeOrderbyId );
    this.#deviceSizeNameOrientedBitsbufsArray[artPos] = this.textEncoder.encode( art );
    this.#deviceSizeNameOrientedBitsbufsArray[artSizePos] = this.textEncoder.encode( artSize );

    if ( orientation.length !== 0 ) {
      this.#deviceSizeNameOrientedBitsbufsArray[orientationPos] = this.textEncoder.encode( orientation );
    }

    return this.#deviceSizeNameOrientedBitsbufsArray as Uint8Array[];
  }



  getImportLineBitsbufsArray (
    urlStart: string,
    deviceSizeNameOriented: string
  ): Uint8Array[] {
    let urlStartPos: number = 1;
    let deviceSizeNamePos: number = 3;

    this.#importLineBitsbufsArray[urlStartPos] = this.textEncoder.encode( urlStart );
    this.#importLineBitsbufsArray[deviceSizeNamePos] = this.textEncoder.encode( deviceSizeNameOriented );

    return this.#importLineBitsbufsArray as Uint8Array[];
  }



  getImportLineBitsbufsArrayByBitsbufs (
    urlStart: Uint8Array,
    deviceSizeNameOriented: Uint8Array
  ): Uint8Array[] {
    let urlStartPos: number = 1;
    let deviceSizeNamePos: number = 3;

    this.#importLineBitsbufsArray[urlStartPos] = urlStart;
    this.#importLineBitsbufsArray[deviceSizeNamePos] = deviceSizeNameOriented;

    return this.#importLineBitsbufsArray as Uint8Array[];
  }



  getDeviceSizeConstantLineBitsbufsArrayByBitsbufs (
    deviceSizeNameOriented: Uint8Array
  ): Uint8Array[] {
    let deviceSizeNamePos: number = 4;

    this.#deviceSizeConstantLineBitsbufsArray[deviceSizeNamePos] = ( deviceSizeNameOriented );

    return this.#deviceSizeConstantLineBitsbufsArray as Uint8Array[];
  }



  getDeviceSizeConstantLineBitsbufsArray (
    deviceSizeNameOriented: string
  ): Uint8Array[] {
    let deviceSizeNamePos: number = 4;

    this.#deviceSizeConstantLineBitsbufsArray[deviceSizeNamePos] = this.textEncoder.encode( deviceSizeNameOriented );

    return this.#deviceSizeConstantLineBitsbufsArray as Uint8Array[];
  }



  getDeviceSizeConstantLine_size_BitsbufsArrayByBitsbufs (
    deviceSizeNameOriented: Uint8Array,
    maxOrMin: Uint8Array
  ): Uint8Array[] {

    let maxOrMinPos: number = 5;
    let deviceSizeNamePos: number = 9;

    this.#deviceSizeConstantLine_size_BitsbufsArray[maxOrMinPos] = maxOrMin;
    this.#deviceSizeConstantLine_size_BitsbufsArray[deviceSizeNamePos] = deviceSizeNameOriented;

    maxOrMinPos = 12;
    this.#deviceSizeConstantLine_size_BitsbufsArray[maxOrMinPos] = maxOrMin;

    return this.#deviceSizeConstantLine_size_BitsbufsArray as Uint8Array[];
  }

}


