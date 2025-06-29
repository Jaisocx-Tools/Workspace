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
            "sites_tool_name"
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
            .concatUint8Arrays(this.#responsiveSizeConstantNameBitsbufsArray);
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
    getOrientationKeywords() {
        return this.#orientationKeywords;
    }
    getOrientationKeywordsBitsbufs() {
        return this.#orientationBitsbufKeywordsArray;
    }
    getMaxOrMinArray() {
        return this.#maxOrMinArray;
    }
    getKeywordOrientationPortrait() {
        return this.#keywordOrientationPortrait;
    }
    getKeywordOrientationLandscape() {
        return this.#keywordOrientationLandscape;
    }
    getKeywordMin() {
        return this.#bitsbufKeywordMin;
    }
    getKeywordMax() {
        return this.#bitsbufKeywordMax;
    }
    getNewLineBitsbuf() {
        return this.#bitsbufSymbolNewLine;
    }
    getBitsbufSymbolCommentStart() {
        return this.#bitsbufSymbolCommentStart;
    }
    getBitsbufSymbolCommentEnd() {
        return this.#bitsbufSymbolCommentEnd;
    }
    getBitsbufSymbolBackgroundSpace() {
        return this.#bitsbufSymbolBackgroundSpace;
    }
    getResponsiveSizeConstantNameBitsbuf() {
        return this.#responsiveSizeConstantNameBitsbuf;
    }
    getResponsiveSizeConstantLineMaxOrMinBitsbufsArray(size, isMax) {
        let maxOrMinPos = 3;
        let sizePos = 7;
        this.#responsiveSizeConstantLineMaxOrMinBitsbufsArray[maxOrMinPos] = isMax ? this.#bitsbufKeywordMax : this.#bitsbufKeywordMin;
        this.#responsiveSizeConstantLineMaxOrMinBitsbufsArray[sizePos] = size;
        return this.#responsiveSizeConstantLineMaxOrMinBitsbufsArray;
    }
    getResponsiveSizeConstantLineMaxOrMinBitsbufsArray_SitesTool(size, isMax) {
        let maxOrMinPos = 3;
        let sizePos = 7;
        this.#responsiveSizeConstantLineMaxOrMinBitsbufsArray[maxOrMinPos] = isMax ? this.#bitsbufKeywordMax : this.#bitsbufKeywordMin;
        this.#responsiveSizeConstantLineMaxOrMinBitsbufsArray[sizePos] = size;
        return this.#responsiveSizeConstantLineMaxOrMinBitsbufsArray;
    }
    getLabelLineArrayByBitsbufs(art, artSize) {
        let artPos = 2;
        let artSizePos = 4;
        this.#labelLineArray[artPos] = art;
        this.#labelLineArray[artSizePos] = artSize;
        return this.#labelLineArray;
    }
    getCssEncommentedLineByBitsbufs(comment) {
        let commentPos = 2;
        this.#cssEncommentedLine[commentPos] = comment;
        return this.#cssEncommentedLine;
    }
    getResponsiveSizeName_withSitesToolName_ByBitsbufs(rangeOrderbyId, art, artSize, orientation, sitesToolName) {
        let rangeOrderbyIdPos = 2;
        let artPos = 4;
        let artSizePos = 6;
        let orientationPos = 8;
        let sitesToolNamePos = 10;
        this.#responsiveSizeNameOrientedBitsbufsArray[rangeOrderbyIdPos] = rangeOrderbyId;
        this.#responsiveSizeNameOrientedBitsbufsArray[artPos] = art;
        this.#responsiveSizeNameOrientedBitsbufsArray[artSizePos] = artSize;
        this.#responsiveSizeNameOrientedBitsbufsArray[orientationPos] = orientation;
        this.#responsiveSizeNameOrientedBitsbufsArray[sitesToolNamePos] = sitesToolName;
        return this.#responsiveSizeNameOrientedBitsbufsArray;
    }
    getResponsiveSizeNameArrayByBitsbufs(sitesToolName, rangeOrderbyId, art, artSize, withSitesToolName) {
        let rangeOrderbyIdPos = 2;
        let artPos = 4;
        let artSizePos = 6;
        let sitesToolNamePos = 10;
        let filteringNumber = 11;
        if (withSitesToolName) {
            filteringNumber = 9;
        }
        this.#responsiveSizeNameOrientedBitsbufsArray[rangeOrderbyIdPos] = rangeOrderbyId;
        this.#responsiveSizeNameOrientedBitsbufsArray[artPos] = art;
        this.#responsiveSizeNameOrientedBitsbufsArray[artSizePos] = artSize;
        this.#responsiveSizeNameOrientedBitsbufsArray[sitesToolNamePos] = sitesToolName;
        let responsiveSizesNamesMultiArray = this.#responsiveSizeNameOrientedBitsbufsArray
            .filter((_value, index) => {
            return ((index < 7) || (index > filteringNumber));
        });
        return responsiveSizesNamesMultiArray;
    }
    getResponsiveSizeNameOrientedArrayByBitsbufs(responsiveSizeName, orientation) {
        let responsiveSizeNameOrientedArray = [
            responsiveSizeName,
            this.#bitsbufSymbolUnderscore,
            orientation
        ];
        return responsiveSizeNameOrientedArray;
    }
    getResponsiveSizeNameBitsbufsArray(sitesToolName, rangeOrderbyId, art, artSize) {
        return this.getResponsiveSizeNameOrientedBitsbufsArray(sitesToolName, rangeOrderbyId, art, artSize, "").filter((_value, index) => {
            return ((index < 7) || (index > 9));
        });
    }
    getResponsiveSizeNameOrientedBitsbufsArray(sitesToolName, rangeOrderbyId, art, artSize, orientation) {
        let rangeOrderbyIdPos = 2;
        let artPos = 4;
        let artSizePos = 6;
        let orientationPos = 8;
        let sitesToolNamePos = 10;
        this.#responsiveSizeNameOrientedBitsbufsArray[rangeOrderbyIdPos] = this.textEncoder.encode(rangeOrderbyId);
        this.#responsiveSizeNameOrientedBitsbufsArray[artPos] = this.textEncoder.encode(art);
        this.#responsiveSizeNameOrientedBitsbufsArray[artSizePos] = this.textEncoder.encode(artSize);
        this.#responsiveSizeNameOrientedBitsbufsArray[sitesToolNamePos] = this.textEncoder.encode(sitesToolName);
        if (orientation.length === 0) {
            this.#responsiveSizeNameOrientedBitsbufsArray[orientationPos] = new Uint8Array(0);
        }
        else {
            this.#responsiveSizeNameOrientedBitsbufsArray[orientationPos] = this.textEncoder.encode(orientation);
        }
        return this.#responsiveSizeNameOrientedBitsbufsArray;
    }
    getImportLineBitsbufsArray(urlStart, responsiveSizeNameOriented) {
        let urlStartPos = 1;
        let responsiveSizeNamePos = 3;
        this.#importLineBitsbufsArray[urlStartPos] = this.textEncoder.encode(urlStart);
        this.#importLineBitsbufsArray[responsiveSizeNamePos] = this.textEncoder.encode(responsiveSizeNameOriented);
        return this.#importLineBitsbufsArray;
    }
    getImportLineBitsbufsArrayByBitsbufs(urlStart, responsiveSizeNameOriented) {
        let urlStartPos = 1;
        let responsiveSizeNamePos = 3;
        this.#importLineBitsbufsArray[urlStartPos] = urlStart;
        this.#importLineBitsbufsArray[responsiveSizeNamePos] = responsiveSizeNameOriented;
        return this.#importLineBitsbufsArray;
    }
    getResponsiveSizeConstantLineBitsbufsArrayByBitsbufs(responsiveSizeNameOriented) {
        let responsiveSizeNamePos = 5;
        this.#responsiveSizeConstantLineBitsbufsArray[responsiveSizeNamePos] = (responsiveSizeNameOriented);
        return this.#responsiveSizeConstantLineBitsbufsArray;
    }
    getResponsiveSizeConstantLineBitsbufsArray(responsiveSizeNameOriented) {
        let responsiveSizeNamePos = 4;
        this.#responsiveSizeConstantLineBitsbufsArray[responsiveSizeNamePos] = this.textEncoder.encode(responsiveSizeNameOriented);
        return this.#responsiveSizeConstantLineBitsbufsArray;
    }
    getResponsiveSizeConstantLine_size_ByBitsbufs(responsiveSizeNameOriented, maxOrMin, size) {
        let responsiveSizeNamePos = 1;
        let maxOrMinPos = 3;
        let sizePos = 7;
        this.#responsiveSizeConstantLine_size_BitsbufsArray[responsiveSizeNamePos] = responsiveSizeNameOriented;
        this.#responsiveSizeConstantLine_size_BitsbufsArray[maxOrMinPos] = maxOrMin;
        this.#responsiveSizeConstantLine_size_BitsbufsArray[sizePos] = size;
        return this.#responsiveSizeConstantLine_size_BitsbufsArray;
    }
}
//# sourceMappingURL=ResponsiveDatasetConstants.js.map