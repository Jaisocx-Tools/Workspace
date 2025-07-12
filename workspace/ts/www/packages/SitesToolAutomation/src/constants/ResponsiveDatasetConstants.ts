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


    // Arrays
    this.#labelLineArray = [];
    this.#cssEncommentedLine = [];
    this.#orientationKeywords = [];
    this.#orientationBitsbufKeywordsArray = [];
    this.#maxOrMinArray = [];
    this.#responsiveSizeNameOrientedBitsbufsArray = [];


    // @import url("./style_e02_mobile_xs_portrait.css");
    this.#importLineBitsbufsArray = [];
    this.#responsiveSizeConstantNameBitsbufsArray = [];
    this.#responsiveSizeConstantNameBitsbuf = new Uint8Array(1);
    this.#responsiveSizeConstantLineMaxOrMinBitsbufsArray = [];
    this.#responsiveSizeConstantLineBitsbufsArray = [];
    this.#responsiveSizeConstantLine_size_BitsbufsArray = [];


    this.initBitbufsArrays();
  }



  initBitbufsArrays(): ResponsiveDatasetConstants {

    // DATASETS
    //-------------------------------------
    // dataset: string[] = [ "portrait", "landscape" ]
    // num = 2
    this.#orientationKeywords = [
      this.#keywordOrientationPortrait,
      this.#keywordOrientationLandscape
    ];


    // dataset: Uint8Array[] = [ "portrait", "landscape" ]
    // num = 2
    this.#orientationBitsbufKeywordsArray = [
      this.#bitsbufKeywordOrientationPortrait,
      this.#bitsbufKeywordOrientationLandscape
    ];


    // dataset: Uint8Array[] = [ "min", "max" ]
    // num = 2
    this.#maxOrMinArray = [
      this.#bitsbufKeywordMin,
      this.#bitsbufKeywordMax
    ];


    // TEXTS CONCATENATIONS
    //-------------------------------------
    // --responsive_size
    // array of bitsbuffers Uint8Array[]
    // num = 2
    this.#responsiveSizeConstantNameBitsbufsArray = [
      this.#bitsbufCssVariableStart,
      this.#bitsbufKeywordResponsiveSize
    ];


    // --responsive_size
    // bitsbuffer Uint8Array
    // num over 3 octets
    this.#responsiveSizeConstantNameBitsbuf = this.fileWriter
      .concatUint8Arrays( this.#responsiveSizeConstantNameBitsbufsArray as Uint8Array[] );


    // "    /* mobile s */\n"
    // Uint8Array[]
    // num = 9
    /*
      {
        padding: 0,
        art: 3,
        art_size: 5
      }
    */
    this.#labelLineArray = [
      "padding",
      this.#bitsbufSymbolCommentStart,
      this.#bitsbufSymbolBackgroundSpace,
      "art",
      this.#bitsbufSymbolBackgroundSpace,
      "art_size",
      this.#bitsbufSymbolBackgroundSpace,
      this.#bitsbufSymbolCommentEnd,
      this.#bitsbufSymbolNewLine
    ];


    // /* <comment> */\n
    // Uint8Array[]
    // num = 6
    /*
      {
        comment: 2
      }
    */
    this.#cssEncommentedLine = [
      this.#bitsbufSymbolCommentStart,
      this.#bitsbufSymbolBackgroundSpace,
      "comment",
      this.#bitsbufSymbolBackgroundSpace,
      this.#bitsbufSymbolCommentEnd,
      this.#bitsbufSymbolNewLine
    ];


    // responsive_size_h03_tablet_sm_portrait_CssCleanStart_theme_base
    // Uint8Array[]
    // num = 13
    /*
      {
        range_orderby_id: 2,
        art: 4,
        art_size: 6,
        orientation: 8,
        sites_tool_name: 10,
        sites_tool_theme_name: 12
      }
    */
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
      this.#bitsbufSymbolUnderscore,
      "sites_tool_name",
      this.#bitsbufSymbolUnderscore,
      this.#bitsbufSymbolUnderscore,
      "sites_tool_theme_name"
    ];


    // @import url("./d_e02_mobile_xs_portrait_CssTable2_theme_example9.css");
    // Uint8Array[]
    // num = 7
    /*
      {
        url_start: 1,
        device_size_name: 3
      }
    */
    this.#importLineBitsbufsArray = [
      this.#bitsbufImportUrlStart,
      "url_start",
      this.#bitsbufSymbolSlash,
      "device_size_name",
      this.#bitsbufSymbolDot,
      this.#bitsbufKeywordCssFileExtension,
      this.#bitsbufImportUrlEnd,
      "new_line(s)"
    ];


    // --responsive_size_max_width: 320px;
    // Uint8Array[]
    // num = 10
    /*
      {
        maxOrMin: 3,
        size: 7
      }
    */
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


    // --responsive_size_name_CssCleanStart: d_e02_mobile_xs_portrait;
    // --d_CssTable2_theme_example9: d_e04_mobile_s_portrait_CssTable2_theme_example9;
    // Uint8Array[]
    // num = 9
    /*
      {
        siteToolName: 5,
        responsiveSizeNameOriented: 7
      }
    */
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


    // "    --d_e04_mobile_s_portrait_max_width: 320px;"
    // Uint8Array[]
    // num = 11
    /* not ready
      {
        padding: 0,
        responsiveSizeNameOriented: 2,
        max_or_min: 4,
        size: 8
      }
    */
    this.#responsiveSizeConstantLine_size_BitsbufsArray = [
      "padding",
      this.#bitsbufCssVariableStart,
      "responsiveSizeNameOriented",
      this.#bitsbufSymbolUnderscore,
      "max_or_min",
      this.#bitsbufSymbolUnderscore,
      this.#bitsbufKeywordWidth,
      this.#bitsbufCssVariableNameValueDelimiter,
      "size",
      this.#bitsbufUnitPx,
      this.#bitsbufCssExpressionEnd,
      "new_line"
    ];


    // method finish
    return this;
  }


  // responsive_size
  setKeywordResponsiveSize( keyword: string ): ResponsiveDatasetConstants {
    this.#keywordResponsiveSize = keyword;
    this.#bitsbufKeywordResponsiveSize = this.textEncoder.encode( this.#keywordResponsiveSize );


    return this;
  }


  // responsive_size
  getKeywordResponsiveSize(): string {
    return this.#keywordResponsiveSize;
  }


  // responsive_size
  getBitsbufKeywordResponsiveSize(): Uint8Array {
    return this.#bitsbufKeywordResponsiveSize;
  }


  // array of strings string[]
  // num = 2
  getOrientationKeywords(): string[] {
    return this.#orientationKeywords;
  }


  // array of bitsbuffers Uint8Array[]
  // num = 2
  getOrientationKeywordsBitsbufs(): Uint8Array[] {
    return this.#orientationBitsbufKeywordsArray;
  }


  // array of bitsbuffers Uint8Array[]
  // num = 2
  getMaxOrMinArray(): Uint8Array[] {
    return this.#maxOrMinArray;
  }


  // portrait
  getKeywordOrientationPortrait(): string {
    return this.#keywordOrientationPortrait;
  }


  // landscape
  getKeywordOrientationLandscape(): string {
    return this.#keywordOrientationLandscape;
  }


  // min
  getKeywordMin(): Uint8Array {
    return this.#bitsbufKeywordMin;
  }


  // max
  getKeywordMax(): Uint8Array {
    return this.#bitsbufKeywordMax;
  }


  // "\n"
  getNewLineBitsbuf(): Uint8Array {
    return this.#bitsbufSymbolNewLine;
  }


  // "/*"
  getBitsbufSymbolCommentStart(): Uint8Array {
    return this.#bitsbufSymbolCommentStart;
  }


  // "*/"
  getBitsbufSymbolCommentEnd(): Uint8Array {
    return this.#bitsbufSymbolCommentEnd;
  }


  // " "
  getBitsbufSymbolBackgroundSpace(): Uint8Array {
    return this.#bitsbufSymbolBackgroundSpace;
  }


  // --responsive_size
  // array of bitsbuffers Uint8Array[]
  // num = 2
  getResponsiveSizeConstantNameBitsbufsArray(): Uint8Array[] {
    return this.#responsiveSizeConstantNameBitsbufsArray as Uint8Array[];
  }


  // --responsive_size
  // bitsbuffer Uint8Array
  // num over 3 octets
  getResponsiveSizeConstantNameBitsbuf(): Uint8Array {
    return this.#responsiveSizeConstantNameBitsbuf;
  }


  // "    /* mobile s */\n"
  // Uint8Array[]
  // num = 9
  /*
    {
      padding: 0,
      art: 3,
      art_size: 5
    }
  */



  getLabelLineArray (
    padding: Uint8Array,
    art: Uint8Array,
    art_size: Uint8Array
  ): Uint8Array[] {
    let paddingPos: number = 0;
    let artPos: number = 3;
    let art_sizePos: number = 5;

    this.#labelLineArray[paddingPos] = padding;
    this.#labelLineArray[artPos] = art;
    this.#labelLineArray[art_sizePos] = art_size;


    return this.#labelLineArray as Uint8Array[];
  }


  // /* <comment> */\n
  // Uint8Array[]
  // num = 6
  /*
    {
      comment: 2
    }
  */



  getCssEncommentedLine (
    comment: Uint8Array
  ): Uint8Array[] {
    let commentPos: number = 2;

    this.#cssEncommentedLine[commentPos] = comment;


    return this.#cssEncommentedLine as Uint8Array[];
  }


  // responsive_size_h03_tablet_sm_portrait_CssCleanStart_theme_base
  // Uint8Array[]
  // num = 13
  /*
    {
      range_orderby_id: 2,
      art: 4,
      art_size: 6,
      orientation: 8,
      sites_tool_name: 10,
      sites_tool_theme_name: 12
    }
  */



  getResponsiveSizeNameOrientedBitsbufsArray (
    range_orderby_id: Uint8Array,
    art: Uint8Array,
    art_size: Uint8Array,
    orientation: Uint8Array,
    sites_tool_name: Uint8Array,
    sites_tool_theme_name: Uint8Array
  ): Uint8Array[] {
    let range_orderby_idPos: number = 2;
    let artPos: number = 4;
    let art_sizePos: number = 6;
    let orientationPos: number = 8;
    let sites_tool_namePos: number = 11;
    let sites_tool_theme_namePos: number = 14;

    this.#responsiveSizeNameOrientedBitsbufsArray[range_orderby_idPos] = range_orderby_id;
    this.#responsiveSizeNameOrientedBitsbufsArray[artPos] = art;
    this.#responsiveSizeNameOrientedBitsbufsArray[art_sizePos] = art_size;
    this.#responsiveSizeNameOrientedBitsbufsArray[orientationPos] = orientation;
    this.#responsiveSizeNameOrientedBitsbufsArray[sites_tool_namePos] = sites_tool_name;
    this.#responsiveSizeNameOrientedBitsbufsArray[sites_tool_theme_namePos] = sites_tool_theme_name;


    return this.#responsiveSizeNameOrientedBitsbufsArray as Uint8Array[];
  }


  // arg returned by method getResponsiveSizeNameOrientedBitsbufsArray( ... )
  getResponsiveSizeName( responsiveSizeNameOriented: Uint8Array[] ): Uint8Array[] {
    return responsiveSizeNameOriented.slice( 0, 7 ) as Uint8Array[];
  }


  // arg returned by method getResponsiveSizeNameOrientedBitsbufsArray( ... )
  getResponsiveSizeNameOriented( responsiveSizeNameOriented: Uint8Array[] ): Uint8Array[] {
    return responsiveSizeNameOriented.slice( 0, 9 ) as Uint8Array[];
  }



  responsiveSizeName_setOrientation( orientation: Uint8Array ): ResponsiveDatasetConstants {
    let orientationPos: number = 8;

    this.#responsiveSizeNameOrientedBitsbufsArray[orientationPos] = orientation;


    return this;
  }



  responsiveSizeName_setSitesToolName( sites_tool_name: Uint8Array ): ResponsiveDatasetConstants {
    let sites_tool_namePos: number = 10;

    this.#responsiveSizeNameOrientedBitsbufsArray[sites_tool_namePos] = sites_tool_name;


    return this;
  }



  responsiveSizeName_setSitesTool_ThemeName( sites_tool_theme_name: Uint8Array ): ResponsiveDatasetConstants {
    let sites_tool_theme_namePos: number = 12;

    this.#responsiveSizeNameOrientedBitsbufsArray[sites_tool_theme_namePos] = sites_tool_theme_name;


    return this;
  }


  // @import url("./d_e02_mobile_xs_portrait_CssTable2_theme_example9.css");
  // Uint8Array[]
  // num = 8
  /*
    {
      url_start: 1,
      device_size_name: 3,
      newLineBitsbuf: 7
    }
  */



  getImportLineBitsbufsArray (
    url_start: Uint8Array,
    device_size_name: Uint8Array,
    newLineBitsbuf: Uint8Array
  ): Uint8Array[] {
    let url_startPos: number = 1;
    let device_size_namePos: number = 3;
    let newLineBitsbufPos: number = 7;

    this.#importLineBitsbufsArray[url_startPos] = url_start;
    this.#importLineBitsbufsArray[device_size_namePos] = device_size_name;
    this.#importLineBitsbufsArray[newLineBitsbufPos] = newLineBitsbuf;


    return this.#importLineBitsbufsArray as Uint8Array[];
  }



  importLine_setNewlineBitsbuf( newLineBitsbuf: Uint8Array ): ResponsiveDatasetConstants {
    let newLineBitsbufPos = ( this.#importLineBitsbufsArray.length - 1 );
    this.#importLineBitsbufsArray[newLineBitsbufPos] = newLineBitsbuf;


    return this;
  }


  // --responsive_size_max_width: 320px;
  // Uint8Array[]
  // num = 10
  /*
    {
      maxOrMin: 3,
      size: 7
    }
  */



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


  // getResponsiveSizeConstantLineMaxOrMinBitsbufsArray_SitesTool (
  //   size: Uint8Array,
  //   isMax: boolean
  // ): Uint8Array[] {
  //   let maxOrMinPos: number = 3;
  //   let sizePos: number = 7;
  //   this.#responsiveSizeConstantLineMaxOrMinBitsbufsArray[maxOrMinPos] = isMax ? this.#bitsbufKeywordMax : this.#bitsbufKeywordMin;
  //   this.#responsiveSizeConstantLineMaxOrMinBitsbufsArray[sizePos] = size;
  //   return this.#responsiveSizeConstantLineMaxOrMinBitsbufsArray as Uint8Array[];
  // }
  // --responsive_size_name_CssCleanStart: d_e02_mobile_xs_portrait;
  // --d_CssTable2_theme_example9: d_e04_mobile_s_portrait_CssTable2_theme_example9;
  // Uint8Array[]
  // num = 9
  /*
    {
      siteToolName: 5,
      responsiveSizeNameOriented: 7
    }
  */



  getResponsiveSizeConstantLineBitsbufsArray (
    siteToolName: Uint8Array,
    responsiveSizeNameOriented: Uint8Array
  ): Uint8Array[] {
    let siteToolNamePos: number = 5;
    let responsiveSizeNameOrientedPos: number = 7;

    this.#responsiveSizeConstantLineBitsbufsArray[siteToolNamePos] = siteToolName;
    this.#responsiveSizeConstantLineBitsbufsArray[responsiveSizeNameOrientedPos] = responsiveSizeNameOriented;


    return this.#responsiveSizeConstantLineBitsbufsArray as Uint8Array[];
  }


  // "    --d_e04_mobile_s_portrait_max_width: 320px;"
  // Uint8Array[]
  // num = 11
  /*
    {
      padding: 0,
      responsiveSizeNameOriented: 2,
      max_or_min: 4,
      size: 8
    }
  */



  getResponsiveSizeConstantLine_size_BitsbufsArray (
    padding: Uint8Array,
    responsiveSizeNameOriented: Uint8Array,
    max_or_min: Uint8Array,
    size: Uint8Array
  ): Uint8Array[] {
    let paddingPos: number = 0;
    let responsiveSizeNameOrientedPos: number = 2;
    let max_or_minPos: number = 4;
    let sizePos: number = 8;

    this.#responsiveSizeConstantLine_size_BitsbufsArray[paddingPos] = padding;
    this.#responsiveSizeConstantLine_size_BitsbufsArray[responsiveSizeNameOrientedPos] = responsiveSizeNameOriented;
    this.#responsiveSizeConstantLine_size_BitsbufsArray[max_or_minPos] = max_or_min;
    this.#responsiveSizeConstantLine_size_BitsbufsArray[sizePos] = size;


    return this.#responsiveSizeConstantLine_size_BitsbufsArray as Uint8Array[];
  }

}






