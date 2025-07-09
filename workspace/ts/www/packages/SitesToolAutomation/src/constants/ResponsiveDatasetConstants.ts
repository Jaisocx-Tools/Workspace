import { FileWriter } from "@jaisocx/file-writer";

import { ResponsiveDatasetConstantsInterface } from "./ResponsiveDatasetConstantsInterface.js";



export class ResponsiveDatasetConstants implements ResponsiveDatasetConstantsInterface {
  fileWriter: FileWriter;
  textEncoder: TextEncoder;

  #keywordResponsiveSize: string;
  #keywordName: string;


  // #keywordMediaOnly: string;
  // #keywordScreen: string;
  // #keywordPrint: string;
  // #keywordOrientation: string;
  #keywordOrientationLandscape: string;
  #keywordOrientationPortrait: string;


  // #keywordAnd: string;

  #importUrlStart: string;
  #importUrlEnd: string;

  #keywordWidth: string;
  #keywordMin: string;
  #keywordMax: string;
  #keywordCssFileExtension: string;


  // #keywordTsFileExtension: string;

  #unitPx: string;

  #cssVariablePrefix: string;
  #cssVariableNameValueDelimiter: string;


  // #cssVariableReferenceKeyword_Var: string;
  #cssExpressionEnd: string;


  // #symbolBraceRoundStart: string;
  // #symbolBraceRoundEnd: string;
  // #symbolBraceFigureStart: string;
  // #symbolBraceFigureEnd: string;
  // #symbolDoubleQuote: string;
  #symbolCommentStart: string;
  #symbolCommentEnd: string;
  #symbolBackgroundSpace: string;
  #symbolNewLine: string;
  #symbolUnderscore: string;


  // #symbolMinus: string;
  #symbolDot: string;
  #symbolSlash: string;



  #bitsbufKeywordResponsiveSize: Uint8Array;
  #bitsbufKeywordName: Uint8Array;


  // #bitsbufKeywordMediaOnly: Uint8Array;
  // #bitsbufKeywordScreen: Uint8Array;
  // #bitsbufKeywordPrint: Uint8Array;
  // #bitsbufKeywordOrientation: Uint8Array;
  #bitsbufKeywordOrientationLandscape: Uint8Array;
  #bitsbufKeywordOrientationPortrait: Uint8Array;


  // #bitsbufKeywordAnd: Uint8Array;
  #bitsbufKeywordWidth: Uint8Array;
  #bitsbufKeywordMin: Uint8Array;
  #bitsbufKeywordMax: Uint8Array;
  #bitsbufKeywordCssFileExtension: Uint8Array;


  // #bitsbufKeywordTsFileExtension: Uint8Array;

  #bitsbufImportUrlStart: Uint8Array;
  #bitsbufImportUrlEnd: Uint8Array;

  #bitsbufUnitPx: Uint8Array;

  #bitsbufCssVariableStart: Uint8Array;
  #bitsbufCssVariableNameValueDelimiter: Uint8Array;


  // #bitsbufCssVariableReferenceKeyword_Var: Uint8Array;
  #bitsbufCssExpressionEnd: Uint8Array;


  // #bitsbufSymbolBraceRoundStart: Uint8Array;
  // #bitsbufSymbolBraceRoundEnd: Uint8Array;
  // #bitsbufSymbolBraceFigureStart: Uint8Array;
  // #bitsbufSymbolBraceFigureEnd: Uint8Array;
  // #bitsbufSymbolDoubleQuote: Uint8Array;
  #bitsbufSymbolCommentStart: Uint8Array;
  #bitsbufSymbolCommentEnd: Uint8Array;
  #bitsbufSymbolBackgroundSpace: Uint8Array;
  #bitsbufSymbolNewLine: Uint8Array;
  #bitsbufSymbolUnderscore: Uint8Array;


  // #bitsbufSymbolMinus: Uint8Array;
  #bitsbufSymbolDot: Uint8Array;
  #bitsbufSymbolSlash: Uint8Array;

  #labelLineArray: (Uint8Array|string)[];
  #cssEncommentedLine: (Uint8Array|string)[];
  #orientationKeywords: string[];
  #orientationBitsbufKeywordsArray: Uint8Array[];
  #maxOrMinArray: Uint8Array[];

  #responsiveSizeNameOrientedBitsbufsArray: (Uint8Array|string)[];

  #importLineBitsbufsArray: (Uint8Array|string)[];

  #responsiveSizeConstantNameBitsbufsArray: (Uint8Array|string)[];
  #responsiveSizeConstantNameBitsbuf: Uint8Array;
  #responsiveSizeConstantLineMaxOrMinBitsbufsArray: (Uint8Array|string)[];
  #responsiveSizeConstantLineBitsbufsArray: (Uint8Array|string)[];
  #responsiveSizeConstantLine_size_BitsbufsArray: (Uint8Array|string)[];


  constructor() {
    this.fileWriter = new FileWriter();
    this.textEncoder = new TextEncoder();

    this.#keywordResponsiveSize = "responsive_size";
    this.#keywordName = "name";


    // this.#keywordMediaOnly = "@media only ";
    // this.#keywordScreen = "screen";
    // this.#keywordPrint = "print";
    // this.#keywordOrientation = "orientation";
    this.#keywordOrientationLandscape = "landscape";
    this.#keywordOrientationPortrait = "portrait";


    // this.#keywordAnd = " and ";
    this.#keywordWidth = "width";
    this.#keywordMin = "min";
    this.#keywordMax = "max";
    this.#keywordCssFileExtension = "css";


    // this.#keywordTsFileExtension = "ts";
    this.#importUrlStart = "@import url(\"";
    this.#importUrlEnd = "\");";

    this.#unitPx = "px";

    this.#cssVariablePrefix = "--";
    this.#cssVariableNameValueDelimiter = ": ";


    // this.#cssVariableReferenceKeyword_Var = "var";
    this.#cssExpressionEnd = ";";


    // this.#symbolBraceRoundStart = "(";
    // this.#symbolBraceRoundEnd = ")";
    // this.#symbolBraceFigureStart = "{";
    // this.#symbolBraceFigureEnd = "}";
    // this.#symbolDoubleQuote = "\"";
    this.#symbolCommentStart = "/*";
    this.#symbolCommentEnd = "*/";
    this.#symbolBackgroundSpace = " ";
    this.#symbolNewLine = "\n";
    this.#symbolUnderscore = "_";


    // this.#symbolMinus = "-";
    this.#symbolDot = ".";
    this.#symbolSlash = "/";


    this.#bitsbufKeywordResponsiveSize = this.textEncoder.encode( this.#keywordResponsiveSize );
    this.#bitsbufKeywordName = this.textEncoder.encode( this.#keywordName );


    // this.#bitsbufKeywordMediaOnly = this.textEncoder.encode( this.#keywordMediaOnly );
    // this.#bitsbufKeywordScreen = this.textEncoder.encode( this.#keywordScreen );
    // this.#bitsbufKeywordPrint = this.textEncoder.encode( this.#keywordPrint );
    // this.#bitsbufKeywordOrientation = this.textEncoder.encode( this.#keywordOrientation );
    this.#bitsbufKeywordOrientationLandscape = this.textEncoder.encode( this.#keywordOrientationLandscape );
    this.#bitsbufKeywordOrientationPortrait = this.textEncoder.encode( this.#keywordOrientationPortrait );


    // this.#bitsbufKeywordAnd = this.textEncoder.encode( this.#keywordAnd );
    this.#bitsbufKeywordWidth = this.textEncoder.encode( this.#keywordWidth );
    this.#bitsbufKeywordMin = this.textEncoder.encode( this.#keywordMin );
    this.#bitsbufKeywordMax = this.textEncoder.encode( this.#keywordMax );
    this.#bitsbufKeywordCssFileExtension = this.textEncoder.encode( this.#keywordCssFileExtension );


    // this.#bitsbufKeywordTsFileExtension = this.textEncoder.encode( this.#keywordTsFileExtension );
    this.#bitsbufImportUrlStart = this.textEncoder.encode( this.#importUrlStart );
    this.#bitsbufImportUrlEnd = this.textEncoder.encode( this.#importUrlEnd );

    this.#bitsbufUnitPx = this.textEncoder.encode( this.#unitPx );

    this.#bitsbufCssVariableStart = this.textEncoder.encode( this.#cssVariablePrefix );
    this.#bitsbufCssVariableNameValueDelimiter = this.textEncoder.encode( this.#cssVariableNameValueDelimiter );


    // this.#bitsbufCssVariableReferenceKeyword_Var = this.textEncoder.encode( this.#cssVariableReferenceKeyword_Var );
    this.#bitsbufCssExpressionEnd = this.textEncoder.encode( this.#cssExpressionEnd );


    // this.#bitsbufSymbolBraceRoundStart = this.textEncoder.encode( this.#symbolBraceRoundStart );
    // this.#bitsbufSymbolBraceRoundEnd = this.textEncoder.encode( this.#symbolBraceRoundEnd );
    // this.#bitsbufSymbolBraceFigureStart = this.textEncoder.encode( this.#symbolBraceFigureStart );
    // this.#bitsbufSymbolBraceFigureEnd = this.textEncoder.encode( this.#symbolBraceFigureEnd );
    // this.#bitsbufSymbolDoubleQuote = this.textEncoder.encode( this.#symbolDoubleQuote );
    this.#bitsbufSymbolCommentStart = this.textEncoder.encode( this.#symbolCommentStart );
    this.#bitsbufSymbolCommentEnd = this.textEncoder.encode( this.#symbolCommentEnd );
    this.#bitsbufSymbolBackgroundSpace = this.textEncoder.encode( this.#symbolBackgroundSpace );
    this.#bitsbufSymbolNewLine = this.textEncoder.encode( this.#symbolNewLine );
    this.#bitsbufSymbolUnderscore = this.textEncoder.encode( this.#symbolUnderscore );


    // this.#bitsbufSymbolMinus = this.textEncoder.encode( this.#symbolMinus );
    this.#bitsbufSymbolDot = this.textEncoder.encode( this.#symbolDot );
    this.#bitsbufSymbolSlash = this.textEncoder.encode( this.#symbolSlash );


    this.#labelLineArray = [
      this.#bitsbufSymbolCommentStart,
      this.#bitsbufSymbolBackgroundSpace,
      "art",
      this.#bitsbufSymbolBackgroundSpace,
      "art_size",
      this.#bitsbufSymbolBackgroundSpace,
      this.#bitsbufSymbolCommentEnd,
      this.#bitsbufSymbolNewLine
    ];


    this.#cssEncommentedLine = [
      this.#bitsbufSymbolCommentStart,
      this.#bitsbufSymbolBackgroundSpace,
      "comment",
      this.#bitsbufSymbolBackgroundSpace,
      this.#bitsbufSymbolCommentEnd,
      this.#bitsbufSymbolNewLine
    ];


    this.#orientationKeywords = [
      this.#keywordOrientationPortrait,
      this.#keywordOrientationLandscape
    ];


    this.#orientationBitsbufKeywordsArray = [
      this.#bitsbufKeywordOrientationPortrait,
      this.#bitsbufKeywordOrientationLandscape
    ];


    this.#maxOrMinArray = [
      this.#bitsbufKeywordMin,
      this.#bitsbufKeywordMax
    ];


    this.#responsiveSizeNameOrientedBitsbufsArray = [
      this.#bitsbufKeywordResponsiveSize,
      this.#bitsbufSymbolUnderscore,
      "range_orderby_id",
      this.#bitsbufSymbolUnderscore,
      "art",
      this.#bitsbufSymbolUnderscore,
      "art_size",
      this.#bitsbufSymbolUnderscore,
      "orientation",
      this.#bitsbufSymbolUnderscore,
      "sites_tool_name",
      this.#bitsbufSymbolUnderscore,
      "sites_tool_theme_name",
    ];


    // @import url("./style_e02_mobile_xs_portrait.css");
    this.#importLineBitsbufsArray = [
      this.#bitsbufImportUrlStart,
      "url_start",
      this.#bitsbufSymbolSlash,
      "device_size_name",
      this.#bitsbufSymbolDot,
      this.#bitsbufKeywordCssFileExtension,
      this.#bitsbufImportUrlEnd
    ];


    this.#responsiveSizeConstantNameBitsbufsArray = [
      this.#bitsbufCssVariableStart,
      this.#bitsbufKeywordResponsiveSize
    ];

    this.#responsiveSizeConstantNameBitsbuf = this.fileWriter
      .concatUint8Arrays( this.#responsiveSizeConstantNameBitsbufsArray as Uint8Array[] );


    this.#responsiveSizeConstantLineMaxOrMinBitsbufsArray = [
      this.#bitsbufCssVariableStart,
      this.#bitsbufKeywordResponsiveSize,
      this.#bitsbufSymbolUnderscore,
      "maxOrMin",
      this.#bitsbufSymbolUnderscore,
      this.#bitsbufKeywordWidth,
      this.#bitsbufCssVariableNameValueDelimiter,
      "size",
      this.#bitsbufUnitPx,
      this.#bitsbufCssExpressionEnd
    ];


    this.#responsiveSizeConstantLineBitsbufsArray = [
      this.#bitsbufCssVariableStart,
      this.#bitsbufKeywordResponsiveSize,
      this.#bitsbufSymbolUnderscore,
      this.#bitsbufKeywordName,
      this.#bitsbufSymbolUnderscore,
      "siteToolName",
      this.#bitsbufCssVariableNameValueDelimiter,
      "responsiveSizeNameOriented",
      this.#bitsbufCssExpressionEnd
    ];


    this.#responsiveSizeConstantLine_size_BitsbufsArray = [
      this.#bitsbufCssVariableStart,
      "responsiveSizeNameOriented",
      this.#bitsbufSymbolUnderscore,
      "max_or_min",
      this.#bitsbufSymbolUnderscore,
      this.#bitsbufKeywordWidth,
      this.#bitsbufCssVariableNameValueDelimiter,
      "size",
      this.#bitsbufUnitPx,
      this.#bitsbufCssExpressionEnd
    ];

  }


  getOrientationKeywords(): string[] {
    return this.#orientationKeywords;
  }


  getOrientationKeywordsBitsbufs(): Uint8Array[] {
    return this.#orientationBitsbufKeywordsArray;
  }


  getMaxOrMinArray(): Uint8Array[] {
    return this.#maxOrMinArray;
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


  getBitsbufSymbolCommentStart(): Uint8Array {
    return this.#bitsbufSymbolCommentStart;
  }


  getBitsbufSymbolCommentEnd(): Uint8Array {
    return this.#bitsbufSymbolCommentEnd;
  }


  getBitsbufSymbolBackgroundSpace(): Uint8Array {
    return this.#bitsbufSymbolBackgroundSpace;
  }


  getResponsiveSizeConstantNameBitsbuf(): Uint8Array {
    return this.#responsiveSizeConstantNameBitsbuf;
  }


  getResponsiveSizeConstantLineMaxOrMinBitsbufsArray (
    size: Uint8Array,
    isMax: boolean
  ): Uint8Array[] {
    let maxOrMinPos: number = 3;
    let sizePos: number = 7;

    this.#responsiveSizeConstantLineMaxOrMinBitsbufsArray[maxOrMinPos] = isMax ? this.#bitsbufKeywordMax : this.#bitsbufKeywordMin;
    this.#responsiveSizeConstantLineMaxOrMinBitsbufsArray[sizePos] = size;

    return this.#responsiveSizeConstantLineMaxOrMinBitsbufsArray as Uint8Array[];
  }


  getResponsiveSizeConstantLineMaxOrMinBitsbufsArray_SitesTool (
    size: Uint8Array,
    isMax: boolean
  ): Uint8Array[] {
    let maxOrMinPos: number = 3;
    let sizePos: number = 7;

    this.#responsiveSizeConstantLineMaxOrMinBitsbufsArray[maxOrMinPos] = isMax ? this.#bitsbufKeywordMax : this.#bitsbufKeywordMin;
    this.#responsiveSizeConstantLineMaxOrMinBitsbufsArray[sizePos] = size;

    return this.#responsiveSizeConstantLineMaxOrMinBitsbufsArray as Uint8Array[];
  }


  getLabelLineArrayByBitsbufs (
    art: Uint8Array,
    artSize: Uint8Array
  ): Uint8Array[] {
    let artPos: number = 2;
    let artSizePos: number = 4;

    this.#labelLineArray[artPos] = art;
    this.#labelLineArray[artSizePos] = artSize;

    return this.#labelLineArray as Uint8Array[];
  }


  getCssEncommentedLineByBitsbufs (
    comment: Uint8Array
  ): Uint8Array[] {
    let commentPos: number = 2;

    this.#cssEncommentedLine[commentPos] = comment;

    return this.#cssEncommentedLine as Uint8Array[];
  }


  getResponsiveSizeName_withSitesToolName_ByBitsbufs (
    rangeOrderbyId: Uint8Array,
    art: Uint8Array,
    artSize: Uint8Array,
    orientation: Uint8Array,
    sitesToolName: Uint8Array,
    sitesTool_ThemeName: Uint8Array
  ): Uint8Array[] {
    let rangeOrderbyIdPos: number = 2;
    let artPos: number = 4;
    let artSizePos: number = 6;
    let orientationPos: number = 8;
    let sitesToolNamePos: number = 10;
    let sitesTool_ThemeNamePos: number = 12;


    this.#responsiveSizeNameOrientedBitsbufsArray[rangeOrderbyIdPos] = rangeOrderbyId;
    this.#responsiveSizeNameOrientedBitsbufsArray[artPos] = art;
    this.#responsiveSizeNameOrientedBitsbufsArray[artSizePos] = artSize;
    this.#responsiveSizeNameOrientedBitsbufsArray[orientationPos] = orientation;
    this.#responsiveSizeNameOrientedBitsbufsArray[sitesToolNamePos] = sitesToolName;
    this.#responsiveSizeNameOrientedBitsbufsArray[sitesTool_ThemeNamePos] = sitesTool_ThemeName;

    return this.#responsiveSizeNameOrientedBitsbufsArray as Uint8Array[];
  }


  getResponsiveSizeNameArrayByBitsbufs (
    sitesToolName: Uint8Array,
    rangeOrderbyId: Uint8Array,
    art: Uint8Array,
    artSize: Uint8Array,
    withSitesToolName: boolean
  ): Uint8Array[] {
    let rangeOrderbyIdPos: number = 2;
    let artPos: number = 4;
    let artSizePos: number = 6;
    let sitesToolNamePos: number = 10;

    let filteringNumber: number = 11;

    if ( withSitesToolName ) {
      filteringNumber = 9;
    }

    this.#responsiveSizeNameOrientedBitsbufsArray[rangeOrderbyIdPos] = rangeOrderbyId;
    this.#responsiveSizeNameOrientedBitsbufsArray[artPos] = art;
    this.#responsiveSizeNameOrientedBitsbufsArray[artSizePos] = artSize;
    this.#responsiveSizeNameOrientedBitsbufsArray[sitesToolNamePos] = sitesToolName;

    let responsiveSizesNamesMultiArray: Uint8Array[] = this.#responsiveSizeNameOrientedBitsbufsArray
      .filter(
        (_value: any, index: number) => {
          return ( ( index < 7 ) || ( index > filteringNumber ) );
        }) as Uint8Array[];

    return responsiveSizesNamesMultiArray;
  }


  getResponsiveSizeNameOrientedArrayByBitsbufs (
    responsiveSizeName: Uint8Array,
    orientation: Uint8Array
  ): Uint8Array[] {
    let responsiveSizeNameOrientedArray: Uint8Array[] = [
      responsiveSizeName,
      this.#bitsbufSymbolUnderscore,
      orientation
    ];

    return responsiveSizeNameOrientedArray;
  }


  getResponsiveSizeNameBitsbufsArray (
    sitesToolName: string,
    rangeOrderbyId: string,
    art: string,
    artSize: string
  ): Uint8Array[] {
    return this.getResponsiveSizeNameOrientedBitsbufsArray (
      sitesToolName,
      rangeOrderbyId,
      art,
      artSize,
      ""
    ).filter(
      (_value: any, index: number) => {
        return ( ( index < 7 ) || ( index > 9 ) );
      }) as Uint8Array[];
  }


  getResponsiveSizeNameOrientedBitsbufsArray (
    sitesToolName: string,
    rangeOrderbyId: string,
    art: string,
    artSize: string,
    orientation: string
  ): Uint8Array[] {
    let rangeOrderbyIdPos: number = 2;
    let artPos: number = 4;
    let artSizePos: number = 6;
    let orientationPos: number = 8;
    let sitesToolNamePos: number = 10;

    this.#responsiveSizeNameOrientedBitsbufsArray[rangeOrderbyIdPos] = this.textEncoder.encode( rangeOrderbyId );
    this.#responsiveSizeNameOrientedBitsbufsArray[artPos] = this.textEncoder.encode( art );
    this.#responsiveSizeNameOrientedBitsbufsArray[artSizePos] = this.textEncoder.encode( artSize );
    this.#responsiveSizeNameOrientedBitsbufsArray[sitesToolNamePos] = this.textEncoder.encode( sitesToolName );

    if ( orientation.length === 0 ) {
      this.#responsiveSizeNameOrientedBitsbufsArray[orientationPos] = new Uint8Array(0);
    } else {
      this.#responsiveSizeNameOrientedBitsbufsArray[orientationPos] = this.textEncoder.encode( orientation );
    }

    return this.#responsiveSizeNameOrientedBitsbufsArray as Uint8Array[];
  }


  getImportLineBitsbufsArray (
    urlStart: string,
    responsiveSizeNameOriented: string
  ): Uint8Array[] {
    let urlStartPos: number = 1;
    let responsiveSizeNamePos: number = 3;

    this.#importLineBitsbufsArray[urlStartPos] = this.textEncoder.encode( urlStart );
    this.#importLineBitsbufsArray[responsiveSizeNamePos] = this.textEncoder.encode( responsiveSizeNameOriented );

    return this.#importLineBitsbufsArray as Uint8Array[];
  }


  getImportLineBitsbufsArrayByBitsbufs (
    urlStart: Uint8Array,
    responsiveSizeNameOriented: Uint8Array
  ): Uint8Array[] {
    let urlStartPos: number = 1;
    let responsiveSizeNamePos: number = 3;

    this.#importLineBitsbufsArray[urlStartPos] = urlStart;
    this.#importLineBitsbufsArray[responsiveSizeNamePos] = responsiveSizeNameOriented;

    return this.#importLineBitsbufsArray as Uint8Array[];
  }


  getResponsiveSizeConstantLineBitsbufsArrayByBitsbufs (
    responsiveSizeNameOriented: Uint8Array
  ): Uint8Array[] {
    let responsiveSizeNamePos: number = 5;

    this.#responsiveSizeConstantLineBitsbufsArray[responsiveSizeNamePos] = ( responsiveSizeNameOriented );

    return this.#responsiveSizeConstantLineBitsbufsArray as Uint8Array[];
  }


  getResponsiveSizeConstantLineBitsbufsArray (
    responsiveSizeNameOriented: string
  ): Uint8Array[] {
    let responsiveSizeNamePos: number = 4;

    this.#responsiveSizeConstantLineBitsbufsArray[responsiveSizeNamePos] = this.textEncoder.encode( responsiveSizeNameOriented );

    return this.#responsiveSizeConstantLineBitsbufsArray as Uint8Array[];
  }


  getResponsiveSizeConstantLine_size_ByBitsbufs (
    responsiveSizeNameOriented: Uint8Array,
    maxOrMin: Uint8Array,
    size: Uint8Array
  ): Uint8Array[] {
    let responsiveSizeNamePos: number = 1;
    let maxOrMinPos: number = 3;
    let sizePos: number = 7;

    this.#responsiveSizeConstantLine_size_BitsbufsArray[responsiveSizeNamePos] = responsiveSizeNameOriented;
    this.#responsiveSizeConstantLine_size_BitsbufsArray[maxOrMinPos] = maxOrMin;
    this.#responsiveSizeConstantLine_size_BitsbufsArray[sizePos] = size;

    return this.#responsiveSizeConstantLine_size_BitsbufsArray as Uint8Array[];
  }

}


