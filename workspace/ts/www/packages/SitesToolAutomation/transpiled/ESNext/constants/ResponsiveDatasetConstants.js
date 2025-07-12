import { FileWriter } from "@jaisocx/file-writer";
export class ResponsiveDatasetConstants {
    fileWriter;
    textEncoder;
    #keywordResponsiveSize;
    #keywordName;
    // #keywordMediaOnly: string;
    // #keywordScreen: string;
    // #keywordPrint: string;
    // #keywordOrientation: string;
    #keywordOrientationLandscape;
    #keywordOrientationPortrait;
    // #keywordAnd: string;
    #importUrlStart;
    #importUrlEnd;
    #keywordWidth;
    #keywordMin;
    #keywordMax;
    #keywordCssFileExtension;
    // #keywordTsFileExtension: string;
    #unitPx;
    #cssVariablePrefix;
    #cssVariableNameValueDelimiter;
    // #cssVariableReferenceKeyword_Var: string;
    #cssExpressionEnd;
    // #symbolBraceRoundStart: string;
    // #symbolBraceRoundEnd: string;
    // #symbolBraceFigureStart: string;
    // #symbolBraceFigureEnd: string;
    // #symbolDoubleQuote: string;
    #symbolCommentStart;
    #symbolCommentEnd;
    #symbolBackgroundSpace;
    #symbolNewLine;
    #symbolUnderscore;
    // #symbolMinus: string;
    #symbolDot;
    #symbolSlash;
    #bitsbufKeywordResponsiveSize;
    #bitsbufKeywordName;
    // #bitsbufKeywordMediaOnly: Uint8Array;
    // #bitsbufKeywordScreen: Uint8Array;
    // #bitsbufKeywordPrint: Uint8Array;
    // #bitsbufKeywordOrientation: Uint8Array;
    #bitsbufKeywordOrientationLandscape;
    #bitsbufKeywordOrientationPortrait;
    // #bitsbufKeywordAnd: Uint8Array;
    #bitsbufKeywordWidth;
    #bitsbufKeywordMin;
    #bitsbufKeywordMax;
    #bitsbufKeywordCssFileExtension;
    // #bitsbufKeywordTsFileExtension: Uint8Array;
    #bitsbufImportUrlStart;
    #bitsbufImportUrlEnd;
    #bitsbufUnitPx;
    #bitsbufCssVariableStart;
    #bitsbufCssVariableNameValueDelimiter;
    // #bitsbufCssVariableReferenceKeyword_Var: Uint8Array;
    #bitsbufCssExpressionEnd;
    // #bitsbufSymbolBraceRoundStart: Uint8Array;
    // #bitsbufSymbolBraceRoundEnd: Uint8Array;
    // #bitsbufSymbolBraceFigureStart: Uint8Array;
    // #bitsbufSymbolBraceFigureEnd: Uint8Array;
    // #bitsbufSymbolDoubleQuote: Uint8Array;
    #bitsbufSymbolCommentStart;
    #bitsbufSymbolCommentEnd;
    #bitsbufSymbolBackgroundSpace;
    #bitsbufSymbolNewLine;
    #bitsbufSymbolUnderscore;
    // #bitsbufSymbolMinus: Uint8Array;
    #bitsbufSymbolDot;
    #bitsbufSymbolSlash;
    #labelLineArray;
    #cssEncommentedLine;
    #orientationKeywords;
    #orientationBitsbufKeywordsArray;
    #maxOrMinArray;
    #responsiveSizeNameOrientedBitsbufsArray;
    #importLineBitsbufsArray;
    #responsiveSizeConstantNameBitsbufsArray;
    #responsiveSizeConstantNameBitsbuf;
    #responsiveSizeConstantLineMaxOrMinBitsbufsArray;
    #responsiveSizeConstantLineBitsbufsArray;
    #responsiveSizeConstantLine_size_BitsbufsArray;
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
        this.#bitsbufKeywordResponsiveSize = this.textEncoder.encode(this.#keywordResponsiveSize);
        this.#bitsbufKeywordName = this.textEncoder.encode(this.#keywordName);
        // this.#bitsbufKeywordMediaOnly = this.textEncoder.encode( this.#keywordMediaOnly );
        // this.#bitsbufKeywordScreen = this.textEncoder.encode( this.#keywordScreen );
        // this.#bitsbufKeywordPrint = this.textEncoder.encode( this.#keywordPrint );
        // this.#bitsbufKeywordOrientation = this.textEncoder.encode( this.#keywordOrientation );
        this.#bitsbufKeywordOrientationLandscape = this.textEncoder.encode(this.#keywordOrientationLandscape);
        this.#bitsbufKeywordOrientationPortrait = this.textEncoder.encode(this.#keywordOrientationPortrait);
        // this.#bitsbufKeywordAnd = this.textEncoder.encode( this.#keywordAnd );
        this.#bitsbufKeywordWidth = this.textEncoder.encode(this.#keywordWidth);
        this.#bitsbufKeywordMin = this.textEncoder.encode(this.#keywordMin);
        this.#bitsbufKeywordMax = this.textEncoder.encode(this.#keywordMax);
        this.#bitsbufKeywordCssFileExtension = this.textEncoder.encode(this.#keywordCssFileExtension);
        // this.#bitsbufKeywordTsFileExtension = this.textEncoder.encode( this.#keywordTsFileExtension );
        this.#bitsbufImportUrlStart = this.textEncoder.encode(this.#importUrlStart);
        this.#bitsbufImportUrlEnd = this.textEncoder.encode(this.#importUrlEnd);
        this.#bitsbufUnitPx = this.textEncoder.encode(this.#unitPx);
        this.#bitsbufCssVariableStart = this.textEncoder.encode(this.#cssVariablePrefix);
        this.#bitsbufCssVariableNameValueDelimiter = this.textEncoder.encode(this.#cssVariableNameValueDelimiter);
        // this.#bitsbufCssVariableReferenceKeyword_Var = this.textEncoder.encode( this.#cssVariableReferenceKeyword_Var );
        this.#bitsbufCssExpressionEnd = this.textEncoder.encode(this.#cssExpressionEnd);
        // this.#bitsbufSymbolBraceRoundStart = this.textEncoder.encode( this.#symbolBraceRoundStart );
        // this.#bitsbufSymbolBraceRoundEnd = this.textEncoder.encode( this.#symbolBraceRoundEnd );
        // this.#bitsbufSymbolBraceFigureStart = this.textEncoder.encode( this.#symbolBraceFigureStart );
        // this.#bitsbufSymbolBraceFigureEnd = this.textEncoder.encode( this.#symbolBraceFigureEnd );
        // this.#bitsbufSymbolDoubleQuote = this.textEncoder.encode( this.#symbolDoubleQuote );
        this.#bitsbufSymbolCommentStart = this.textEncoder.encode(this.#symbolCommentStart);
        this.#bitsbufSymbolCommentEnd = this.textEncoder.encode(this.#symbolCommentEnd);
        this.#bitsbufSymbolBackgroundSpace = this.textEncoder.encode(this.#symbolBackgroundSpace);
        this.#bitsbufSymbolNewLine = this.textEncoder.encode(this.#symbolNewLine);
        this.#bitsbufSymbolUnderscore = this.textEncoder.encode(this.#symbolUnderscore);
        // this.#bitsbufSymbolMinus = this.textEncoder.encode( this.#symbolMinus );
        this.#bitsbufSymbolDot = this.textEncoder.encode(this.#symbolDot);
        this.#bitsbufSymbolSlash = this.textEncoder.encode(this.#symbolSlash);
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
    initBitbufsArrays() {
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
            .concatUint8Arrays(this.#responsiveSizeConstantNameBitsbufsArray);
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
    setKeywordResponsiveSize(keyword) {
        this.#keywordResponsiveSize = keyword;
        this.#bitsbufKeywordResponsiveSize = this.textEncoder.encode(this.#keywordResponsiveSize);
        return this;
    }
    // responsive_size
    getKeywordResponsiveSize() {
        return this.#keywordResponsiveSize;
    }
    // responsive_size
    getBitsbufKeywordResponsiveSize() {
        return this.#bitsbufKeywordResponsiveSize;
    }
    // array of strings string[]
    // num = 2
    getOrientationKeywords() {
        return this.#orientationKeywords;
    }
    // array of bitsbuffers Uint8Array[]
    // num = 2
    getOrientationKeywordsBitsbufs() {
        return this.#orientationBitsbufKeywordsArray;
    }
    // array of bitsbuffers Uint8Array[]
    // num = 2
    getMaxOrMinArray() {
        return this.#maxOrMinArray;
    }
    // portrait
    getKeywordOrientationPortrait() {
        return this.#keywordOrientationPortrait;
    }
    // landscape
    getKeywordOrientationLandscape() {
        return this.#keywordOrientationLandscape;
    }
    // min
    getKeywordMin() {
        return this.#bitsbufKeywordMin;
    }
    // max
    getKeywordMax() {
        return this.#bitsbufKeywordMax;
    }
    // "\n"
    getNewLineBitsbuf() {
        return this.#bitsbufSymbolNewLine;
    }
    // "/*"
    getBitsbufSymbolCommentStart() {
        return this.#bitsbufSymbolCommentStart;
    }
    // "*/"
    getBitsbufSymbolCommentEnd() {
        return this.#bitsbufSymbolCommentEnd;
    }
    // " "
    getBitsbufSymbolBackgroundSpace() {
        return this.#bitsbufSymbolBackgroundSpace;
    }
    // --responsive_size
    // array of bitsbuffers Uint8Array[]
    // num = 2
    getResponsiveSizeConstantNameBitsbufsArray() {
        return this.#responsiveSizeConstantNameBitsbufsArray;
    }
    // --responsive_size
    // bitsbuffer Uint8Array
    // num over 3 octets
    getResponsiveSizeConstantNameBitsbuf() {
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
    getLabelLineArray(padding, art, art_size) {
        let paddingPos = 0;
        let artPos = 3;
        let art_sizePos = 5;
        this.#labelLineArray[paddingPos] = padding;
        this.#labelLineArray[artPos] = art;
        this.#labelLineArray[art_sizePos] = art_size;
        return this.#labelLineArray;
    }
    // /* <comment> */\n
    // Uint8Array[]
    // num = 6
    /*
      {
        comment: 2
      }
    */
    getCssEncommentedLine(comment) {
        let commentPos = 2;
        this.#cssEncommentedLine[commentPos] = comment;
        return this.#cssEncommentedLine;
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
    getResponsiveSizeNameOrientedBitsbufsArray(range_orderby_id, art, art_size, orientation, sites_tool_name, sites_tool_theme_name) {
        let range_orderby_idPos = 2;
        let artPos = 4;
        let art_sizePos = 6;
        let orientationPos = 8;
        let sites_tool_namePos = 11;
        let sites_tool_theme_namePos = 14;
        this.#responsiveSizeNameOrientedBitsbufsArray[range_orderby_idPos] = range_orderby_id;
        this.#responsiveSizeNameOrientedBitsbufsArray[artPos] = art;
        this.#responsiveSizeNameOrientedBitsbufsArray[art_sizePos] = art_size;
        this.#responsiveSizeNameOrientedBitsbufsArray[orientationPos] = orientation;
        this.#responsiveSizeNameOrientedBitsbufsArray[sites_tool_namePos] = sites_tool_name;
        this.#responsiveSizeNameOrientedBitsbufsArray[sites_tool_theme_namePos] = sites_tool_theme_name;
        return this.#responsiveSizeNameOrientedBitsbufsArray;
    }
    // arg returned by method getResponsiveSizeNameOrientedBitsbufsArray( ... )
    getResponsiveSizeName(responsiveSizeNameOriented) {
        return responsiveSizeNameOriented.slice(0, 7);
    }
    // arg returned by method getResponsiveSizeNameOrientedBitsbufsArray( ... )
    getResponsiveSizeNameOriented(responsiveSizeNameOriented) {
        return responsiveSizeNameOriented.slice(0, 9);
    }
    responsiveSizeName_setOrientation(orientation) {
        let orientationPos = 8;
        this.#responsiveSizeNameOrientedBitsbufsArray[orientationPos] = orientation;
        return this;
    }
    responsiveSizeName_setSitesToolName(sites_tool_name) {
        let sites_tool_namePos = 10;
        this.#responsiveSizeNameOrientedBitsbufsArray[sites_tool_namePos] = sites_tool_name;
        return this;
    }
    responsiveSizeName_setSitesTool_ThemeName(sites_tool_theme_name) {
        let sites_tool_theme_namePos = 12;
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
    getImportLineBitsbufsArray(url_start, device_size_name, newLineBitsbuf) {
        let url_startPos = 1;
        let device_size_namePos = 3;
        let newLineBitsbufPos = 7;
        this.#importLineBitsbufsArray[url_startPos] = url_start;
        this.#importLineBitsbufsArray[device_size_namePos] = device_size_name;
        this.#importLineBitsbufsArray[newLineBitsbufPos] = newLineBitsbuf;
        return this.#importLineBitsbufsArray;
    }
    importLine_setNewlineBitsbuf(newLineBitsbuf) {
        let newLineBitsbufPos = (this.#importLineBitsbufsArray.length - 1);
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
    getResponsiveSizeConstantLineMaxOrMinBitsbufsArray(size, isMax) {
        let maxOrMinPos = 3;
        let sizePos = 7;
        this.#responsiveSizeConstantLineMaxOrMinBitsbufsArray[maxOrMinPos] = isMax ? this.#bitsbufKeywordMax : this.#bitsbufKeywordMin;
        this.#responsiveSizeConstantLineMaxOrMinBitsbufsArray[sizePos] = size;
        return this.#responsiveSizeConstantLineMaxOrMinBitsbufsArray;
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
    getResponsiveSizeConstantLineBitsbufsArray(siteToolName, responsiveSizeNameOriented) {
        let siteToolNamePos = 5;
        let responsiveSizeNameOrientedPos = 7;
        this.#responsiveSizeConstantLineBitsbufsArray[siteToolNamePos] = siteToolName;
        this.#responsiveSizeConstantLineBitsbufsArray[responsiveSizeNameOrientedPos] = responsiveSizeNameOriented;
        return this.#responsiveSizeConstantLineBitsbufsArray;
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
    getResponsiveSizeConstantLine_size_BitsbufsArray(padding, responsiveSizeNameOriented, max_or_min, size) {
        let paddingPos = 0;
        let responsiveSizeNameOrientedPos = 2;
        let max_or_minPos = 4;
        let sizePos = 8;
        this.#responsiveSizeConstantLine_size_BitsbufsArray[paddingPos] = padding;
        this.#responsiveSizeConstantLine_size_BitsbufsArray[responsiveSizeNameOrientedPos] = responsiveSizeNameOriented;
        this.#responsiveSizeConstantLine_size_BitsbufsArray[max_or_minPos] = max_or_min;
        this.#responsiveSizeConstantLine_size_BitsbufsArray[sizePos] = size;
        return this.#responsiveSizeConstantLine_size_BitsbufsArray;
    }
}
//# sourceMappingURL=ResponsiveDatasetConstants.js.map