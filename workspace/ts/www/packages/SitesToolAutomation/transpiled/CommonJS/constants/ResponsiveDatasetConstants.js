"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ResponsiveDatasetConstants_keywordResponsiveSize, _ResponsiveDatasetConstants_keywordName, _ResponsiveDatasetConstants_keywordOrientationLandscape, _ResponsiveDatasetConstants_keywordOrientationPortrait, _ResponsiveDatasetConstants_importUrlStart, _ResponsiveDatasetConstants_importUrlEnd, _ResponsiveDatasetConstants_keywordWidth, _ResponsiveDatasetConstants_keywordMin, _ResponsiveDatasetConstants_keywordMax, _ResponsiveDatasetConstants_keywordCssFileExtension, _ResponsiveDatasetConstants_unitPx, _ResponsiveDatasetConstants_cssVariablePrefix, _ResponsiveDatasetConstants_cssVariableNameValueDelimiter, _ResponsiveDatasetConstants_cssExpressionEnd, _ResponsiveDatasetConstants_symbolCommentStart, _ResponsiveDatasetConstants_symbolCommentEnd, _ResponsiveDatasetConstants_symbolBackgroundSpace, _ResponsiveDatasetConstants_symbolNewLine, _ResponsiveDatasetConstants_symbolUnderscore, _ResponsiveDatasetConstants_symbolDot, _ResponsiveDatasetConstants_symbolSlash, _ResponsiveDatasetConstants_bitsbufKeywordResponsiveSize, _ResponsiveDatasetConstants_bitsbufKeywordName, _ResponsiveDatasetConstants_bitsbufKeywordOrientationLandscape, _ResponsiveDatasetConstants_bitsbufKeywordOrientationPortrait, _ResponsiveDatasetConstants_bitsbufKeywordWidth, _ResponsiveDatasetConstants_bitsbufKeywordMin, _ResponsiveDatasetConstants_bitsbufKeywordMax, _ResponsiveDatasetConstants_bitsbufKeywordCssFileExtension, _ResponsiveDatasetConstants_bitsbufImportUrlStart, _ResponsiveDatasetConstants_bitsbufImportUrlEnd, _ResponsiveDatasetConstants_bitsbufUnitPx, _ResponsiveDatasetConstants_bitsbufCssVariableStart, _ResponsiveDatasetConstants_bitsbufCssVariableNameValueDelimiter, _ResponsiveDatasetConstants_bitsbufCssExpressionEnd, _ResponsiveDatasetConstants_bitsbufSymbolCommentStart, _ResponsiveDatasetConstants_bitsbufSymbolCommentEnd, _ResponsiveDatasetConstants_bitsbufSymbolBackgroundSpace, _ResponsiveDatasetConstants_bitsbufSymbolNewLine, _ResponsiveDatasetConstants_bitsbufSymbolUnderscore, _ResponsiveDatasetConstants_bitsbufSymbolDot, _ResponsiveDatasetConstants_bitsbufSymbolSlash, _ResponsiveDatasetConstants_labelLineArray, _ResponsiveDatasetConstants_cssEncommentedLine, _ResponsiveDatasetConstants_orientationKeywords, _ResponsiveDatasetConstants_orientationBitsbufKeywordsArray, _ResponsiveDatasetConstants_maxOrMinArray, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, _ResponsiveDatasetConstants_importLineBitsbufsArray, _ResponsiveDatasetConstants_responsiveSizeConstantNameBitsbufsArray, _ResponsiveDatasetConstants_responsiveSizeConstantNameBitsbuf, _ResponsiveDatasetConstants_responsiveSizeConstantLineMaxOrMinBitsbufsArray, _ResponsiveDatasetConstants_responsiveSizeConstantLineBitsbufsArray, _ResponsiveDatasetConstants_responsiveSizeConstantLine_size_BitsbufsArray;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsiveDatasetConstants = void 0;
const file_writer_1 = require("@jaisocx/file-writer");
class ResponsiveDatasetConstants {
    constructor() {
        _ResponsiveDatasetConstants_keywordResponsiveSize.set(this, void 0);
        _ResponsiveDatasetConstants_keywordName.set(this, void 0);
        // #keywordMediaOnly: string;
        // #keywordScreen: string;
        // #keywordPrint: string;
        // #keywordOrientation: string;
        _ResponsiveDatasetConstants_keywordOrientationLandscape.set(this, void 0);
        _ResponsiveDatasetConstants_keywordOrientationPortrait.set(this, void 0);
        // #keywordAnd: string;
        _ResponsiveDatasetConstants_importUrlStart.set(this, void 0);
        _ResponsiveDatasetConstants_importUrlEnd.set(this, void 0);
        _ResponsiveDatasetConstants_keywordWidth.set(this, void 0);
        _ResponsiveDatasetConstants_keywordMin.set(this, void 0);
        _ResponsiveDatasetConstants_keywordMax.set(this, void 0);
        _ResponsiveDatasetConstants_keywordCssFileExtension.set(this, void 0);
        // #keywordTsFileExtension: string;
        _ResponsiveDatasetConstants_unitPx.set(this, void 0);
        _ResponsiveDatasetConstants_cssVariablePrefix.set(this, void 0);
        _ResponsiveDatasetConstants_cssVariableNameValueDelimiter.set(this, void 0);
        // #cssVariableReferenceKeyword_Var: string;
        _ResponsiveDatasetConstants_cssExpressionEnd.set(this, void 0);
        // #symbolBraceRoundStart: string;
        // #symbolBraceRoundEnd: string;
        // #symbolBraceFigureStart: string;
        // #symbolBraceFigureEnd: string;
        // #symbolDoubleQuote: string;
        _ResponsiveDatasetConstants_symbolCommentStart.set(this, void 0);
        _ResponsiveDatasetConstants_symbolCommentEnd.set(this, void 0);
        _ResponsiveDatasetConstants_symbolBackgroundSpace.set(this, void 0);
        _ResponsiveDatasetConstants_symbolNewLine.set(this, void 0);
        _ResponsiveDatasetConstants_symbolUnderscore.set(this, void 0);
        // #symbolMinus: string;
        _ResponsiveDatasetConstants_symbolDot.set(this, void 0);
        _ResponsiveDatasetConstants_symbolSlash.set(this, void 0);
        _ResponsiveDatasetConstants_bitsbufKeywordResponsiveSize.set(this, void 0);
        _ResponsiveDatasetConstants_bitsbufKeywordName.set(this, void 0);
        // #bitsbufKeywordMediaOnly: Uint8Array;
        // #bitsbufKeywordScreen: Uint8Array;
        // #bitsbufKeywordPrint: Uint8Array;
        // #bitsbufKeywordOrientation: Uint8Array;
        _ResponsiveDatasetConstants_bitsbufKeywordOrientationLandscape.set(this, void 0);
        _ResponsiveDatasetConstants_bitsbufKeywordOrientationPortrait.set(this, void 0);
        // #bitsbufKeywordAnd: Uint8Array;
        _ResponsiveDatasetConstants_bitsbufKeywordWidth.set(this, void 0);
        _ResponsiveDatasetConstants_bitsbufKeywordMin.set(this, void 0);
        _ResponsiveDatasetConstants_bitsbufKeywordMax.set(this, void 0);
        _ResponsiveDatasetConstants_bitsbufKeywordCssFileExtension.set(this, void 0);
        // #bitsbufKeywordTsFileExtension: Uint8Array;
        _ResponsiveDatasetConstants_bitsbufImportUrlStart.set(this, void 0);
        _ResponsiveDatasetConstants_bitsbufImportUrlEnd.set(this, void 0);
        _ResponsiveDatasetConstants_bitsbufUnitPx.set(this, void 0);
        _ResponsiveDatasetConstants_bitsbufCssVariableStart.set(this, void 0);
        _ResponsiveDatasetConstants_bitsbufCssVariableNameValueDelimiter.set(this, void 0);
        // #bitsbufCssVariableReferenceKeyword_Var: Uint8Array;
        _ResponsiveDatasetConstants_bitsbufCssExpressionEnd.set(this, void 0);
        // #bitsbufSymbolBraceRoundStart: Uint8Array;
        // #bitsbufSymbolBraceRoundEnd: Uint8Array;
        // #bitsbufSymbolBraceFigureStart: Uint8Array;
        // #bitsbufSymbolBraceFigureEnd: Uint8Array;
        // #bitsbufSymbolDoubleQuote: Uint8Array;
        _ResponsiveDatasetConstants_bitsbufSymbolCommentStart.set(this, void 0);
        _ResponsiveDatasetConstants_bitsbufSymbolCommentEnd.set(this, void 0);
        _ResponsiveDatasetConstants_bitsbufSymbolBackgroundSpace.set(this, void 0);
        _ResponsiveDatasetConstants_bitsbufSymbolNewLine.set(this, void 0);
        _ResponsiveDatasetConstants_bitsbufSymbolUnderscore.set(this, void 0);
        // #bitsbufSymbolMinus: Uint8Array;
        _ResponsiveDatasetConstants_bitsbufSymbolDot.set(this, void 0);
        _ResponsiveDatasetConstants_bitsbufSymbolSlash.set(this, void 0);
        _ResponsiveDatasetConstants_labelLineArray.set(this, void 0);
        _ResponsiveDatasetConstants_cssEncommentedLine.set(this, void 0);
        _ResponsiveDatasetConstants_orientationKeywords.set(this, void 0);
        _ResponsiveDatasetConstants_orientationBitsbufKeywordsArray.set(this, void 0);
        _ResponsiveDatasetConstants_maxOrMinArray.set(this, void 0);
        _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray.set(this, void 0);
        _ResponsiveDatasetConstants_importLineBitsbufsArray.set(this, void 0);
        _ResponsiveDatasetConstants_responsiveSizeConstantNameBitsbufsArray.set(this, void 0);
        _ResponsiveDatasetConstants_responsiveSizeConstantNameBitsbuf.set(this, void 0);
        _ResponsiveDatasetConstants_responsiveSizeConstantLineMaxOrMinBitsbufsArray.set(this, void 0);
        _ResponsiveDatasetConstants_responsiveSizeConstantLineBitsbufsArray.set(this, void 0);
        _ResponsiveDatasetConstants_responsiveSizeConstantLine_size_BitsbufsArray.set(this, void 0);
        this.fileWriter = new file_writer_1.FileWriter();
        this.textEncoder = new TextEncoder();
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_keywordResponsiveSize, "responsive_size", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_keywordName, "name", "f");
        // this.#keywordMediaOnly = "@media only ";
        // this.#keywordScreen = "screen";
        // this.#keywordPrint = "print";
        // this.#keywordOrientation = "orientation";
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_keywordOrientationLandscape, "landscape", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_keywordOrientationPortrait, "portrait", "f");
        // this.#keywordAnd = " and ";
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_keywordWidth, "width", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_keywordMin, "min", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_keywordMax, "max", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_keywordCssFileExtension, "css", "f");
        // this.#keywordTsFileExtension = "ts";
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_importUrlStart, "@import url(\"", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_importUrlEnd, "\");", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_unitPx, "px", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_cssVariablePrefix, "--", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_cssVariableNameValueDelimiter, ": ", "f");
        // this.#cssVariableReferenceKeyword_Var = "var";
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_cssExpressionEnd, ";", "f");
        // this.#symbolBraceRoundStart = "(";
        // this.#symbolBraceRoundEnd = ")";
        // this.#symbolBraceFigureStart = "{";
        // this.#symbolBraceFigureEnd = "}";
        // this.#symbolDoubleQuote = "\"";
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_symbolCommentStart, "/*", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_symbolCommentEnd, "*/", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_symbolBackgroundSpace, " ", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_symbolNewLine, "\n", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_symbolUnderscore, "_", "f");
        // this.#symbolMinus = "-";
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_symbolDot, ".", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_symbolSlash, "/", "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_bitsbufKeywordResponsiveSize, this.textEncoder.encode(__classPrivateFieldGet(this, _ResponsiveDatasetConstants_keywordResponsiveSize, "f")), "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_bitsbufKeywordName, this.textEncoder.encode(__classPrivateFieldGet(this, _ResponsiveDatasetConstants_keywordName, "f")), "f");
        // this.#bitsbufKeywordMediaOnly = this.textEncoder.encode( this.#keywordMediaOnly );
        // this.#bitsbufKeywordScreen = this.textEncoder.encode( this.#keywordScreen );
        // this.#bitsbufKeywordPrint = this.textEncoder.encode( this.#keywordPrint );
        // this.#bitsbufKeywordOrientation = this.textEncoder.encode( this.#keywordOrientation );
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_bitsbufKeywordOrientationLandscape, this.textEncoder.encode(__classPrivateFieldGet(this, _ResponsiveDatasetConstants_keywordOrientationLandscape, "f")), "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_bitsbufKeywordOrientationPortrait, this.textEncoder.encode(__classPrivateFieldGet(this, _ResponsiveDatasetConstants_keywordOrientationPortrait, "f")), "f");
        // this.#bitsbufKeywordAnd = this.textEncoder.encode( this.#keywordAnd );
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_bitsbufKeywordWidth, this.textEncoder.encode(__classPrivateFieldGet(this, _ResponsiveDatasetConstants_keywordWidth, "f")), "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_bitsbufKeywordMin, this.textEncoder.encode(__classPrivateFieldGet(this, _ResponsiveDatasetConstants_keywordMin, "f")), "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_bitsbufKeywordMax, this.textEncoder.encode(__classPrivateFieldGet(this, _ResponsiveDatasetConstants_keywordMax, "f")), "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_bitsbufKeywordCssFileExtension, this.textEncoder.encode(__classPrivateFieldGet(this, _ResponsiveDatasetConstants_keywordCssFileExtension, "f")), "f");
        // this.#bitsbufKeywordTsFileExtension = this.textEncoder.encode( this.#keywordTsFileExtension );
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_bitsbufImportUrlStart, this.textEncoder.encode(__classPrivateFieldGet(this, _ResponsiveDatasetConstants_importUrlStart, "f")), "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_bitsbufImportUrlEnd, this.textEncoder.encode(__classPrivateFieldGet(this, _ResponsiveDatasetConstants_importUrlEnd, "f")), "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_bitsbufUnitPx, this.textEncoder.encode(__classPrivateFieldGet(this, _ResponsiveDatasetConstants_unitPx, "f")), "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_bitsbufCssVariableStart, this.textEncoder.encode(__classPrivateFieldGet(this, _ResponsiveDatasetConstants_cssVariablePrefix, "f")), "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_bitsbufCssVariableNameValueDelimiter, this.textEncoder.encode(__classPrivateFieldGet(this, _ResponsiveDatasetConstants_cssVariableNameValueDelimiter, "f")), "f");
        // this.#bitsbufCssVariableReferenceKeyword_Var = this.textEncoder.encode( this.#cssVariableReferenceKeyword_Var );
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_bitsbufCssExpressionEnd, this.textEncoder.encode(__classPrivateFieldGet(this, _ResponsiveDatasetConstants_cssExpressionEnd, "f")), "f");
        // this.#bitsbufSymbolBraceRoundStart = this.textEncoder.encode( this.#symbolBraceRoundStart );
        // this.#bitsbufSymbolBraceRoundEnd = this.textEncoder.encode( this.#symbolBraceRoundEnd );
        // this.#bitsbufSymbolBraceFigureStart = this.textEncoder.encode( this.#symbolBraceFigureStart );
        // this.#bitsbufSymbolBraceFigureEnd = this.textEncoder.encode( this.#symbolBraceFigureEnd );
        // this.#bitsbufSymbolDoubleQuote = this.textEncoder.encode( this.#symbolDoubleQuote );
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_bitsbufSymbolCommentStart, this.textEncoder.encode(__classPrivateFieldGet(this, _ResponsiveDatasetConstants_symbolCommentStart, "f")), "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_bitsbufSymbolCommentEnd, this.textEncoder.encode(__classPrivateFieldGet(this, _ResponsiveDatasetConstants_symbolCommentEnd, "f")), "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_bitsbufSymbolBackgroundSpace, this.textEncoder.encode(__classPrivateFieldGet(this, _ResponsiveDatasetConstants_symbolBackgroundSpace, "f")), "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_bitsbufSymbolNewLine, this.textEncoder.encode(__classPrivateFieldGet(this, _ResponsiveDatasetConstants_symbolNewLine, "f")), "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_bitsbufSymbolUnderscore, this.textEncoder.encode(__classPrivateFieldGet(this, _ResponsiveDatasetConstants_symbolUnderscore, "f")), "f");
        // this.#bitsbufSymbolMinus = this.textEncoder.encode( this.#symbolMinus );
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_bitsbufSymbolDot, this.textEncoder.encode(__classPrivateFieldGet(this, _ResponsiveDatasetConstants_symbolDot, "f")), "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_bitsbufSymbolSlash, this.textEncoder.encode(__classPrivateFieldGet(this, _ResponsiveDatasetConstants_symbolSlash, "f")), "f");
        // Arrays
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_labelLineArray, [], "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_cssEncommentedLine, [], "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_orientationKeywords, [], "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_orientationBitsbufKeywordsArray, [], "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_maxOrMinArray, [], "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, [], "f");
        // @import url("./style_e02_mobile_xs_portrait.css");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_importLineBitsbufsArray, [], "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_responsiveSizeConstantNameBitsbufsArray, [], "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_responsiveSizeConstantNameBitsbuf, new Uint8Array(1), "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLineMaxOrMinBitsbufsArray, [], "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLineBitsbufsArray, [], "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLine_size_BitsbufsArray, [], "f");
        this.initBitbufsArrays();
    }
    initBitbufsArrays() {
        // DATASETS
        //-------------------------------------
        // dataset: string[] = [ "portrait", "landscape" ]
        // num = 2
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_orientationKeywords, [
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_keywordOrientationPortrait, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_keywordOrientationLandscape, "f")
        ], "f");
        // dataset: Uint8Array[] = [ "portrait", "landscape" ]
        // num = 2
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_orientationBitsbufKeywordsArray, [
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordOrientationPortrait, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordOrientationLandscape, "f")
        ], "f");
        // dataset: Uint8Array[] = [ "min", "max" ]
        // num = 2
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_maxOrMinArray, [
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordMin, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordMax, "f")
        ], "f");
        // TEXTS CONCATENATIONS
        //-------------------------------------
        // --responsive_size
        // array of bitsbuffers Uint8Array[]
        // num = 2
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_responsiveSizeConstantNameBitsbufsArray, [
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufCssVariableStart, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordResponsiveSize, "f")
        ], "f");
        // --responsive_size
        // bitsbuffer Uint8Array
        // num over 3 octets
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_responsiveSizeConstantNameBitsbuf, this.fileWriter
            .concatUint8Arrays(__classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantNameBitsbufsArray, "f")), "f");
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
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_labelLineArray, [
            "padding",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolCommentStart, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolBackgroundSpace, "f"),
            "art",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolBackgroundSpace, "f"),
            "art_size",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolBackgroundSpace, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolCommentEnd, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolNewLine, "f")
        ], "f");
        // /* <comment> */\n
        // Uint8Array[]
        // num = 6
        /*
          {
            comment: 2
          }
        */
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_cssEncommentedLine, [
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolCommentStart, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolBackgroundSpace, "f"),
            "comment",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolBackgroundSpace, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolCommentEnd, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolNewLine, "f")
        ], "f");
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
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, [
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordResponsiveSize, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolUnderscore, "f"),
            "range_orderby_id",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolUnderscore, "f"),
            "art",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolUnderscore, "f"),
            "art_size",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolUnderscore, "f"),
            "orientation",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolUnderscore, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolUnderscore, "f"),
            "sites_tool_name",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolUnderscore, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolUnderscore, "f"),
            "sites_tool_theme_name"
        ], "f");
        // @import url("./d_e02_mobile_xs_portrait_CssTable2_theme_example9.css");
        // Uint8Array[]
        // num = 7
        /*
          {
            url_start: 1,
            device_size_name: 3
          }
        */
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_importLineBitsbufsArray, [
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufImportUrlStart, "f"),
            "url_start",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolSlash, "f"),
            "device_size_name",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolDot, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordCssFileExtension, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufImportUrlEnd, "f"),
            "new_line(s)"
        ], "f");
        // --responsive_size_max_width: 320px;
        // Uint8Array[]
        // num = 10
        /*
          {
            maxOrMin: 3,
            size: 7
          }
        */
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLineMaxOrMinBitsbufsArray, [
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufCssVariableStart, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordResponsiveSize, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolUnderscore, "f"),
            "maxOrMin",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolUnderscore, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordWidth, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufCssVariableNameValueDelimiter, "f"),
            "size",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufUnitPx, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufCssExpressionEnd, "f")
        ], "f");
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
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLineBitsbufsArray, [
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufCssVariableStart, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordResponsiveSize, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolUnderscore, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordName, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolUnderscore, "f"),
            "siteToolName",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufCssVariableNameValueDelimiter, "f"),
            "responsiveSizeNameOriented",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufCssExpressionEnd, "f")
        ], "f");
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
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLine_size_BitsbufsArray, [
            "padding",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufCssVariableStart, "f"),
            "responsiveSizeNameOriented",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolUnderscore, "f"),
            "max_or_min",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolUnderscore, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordWidth, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufCssVariableNameValueDelimiter, "f"),
            "size",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufUnitPx, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufCssExpressionEnd, "f"),
            "new_line"
        ], "f");
        // method finish
        return this;
    }
    // responsive_size
    setKeywordResponsiveSize(keyword) {
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_keywordResponsiveSize, keyword, "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_bitsbufKeywordResponsiveSize, this.textEncoder.encode(__classPrivateFieldGet(this, _ResponsiveDatasetConstants_keywordResponsiveSize, "f")), "f");
        return this;
    }
    // responsive_size
    getKeywordResponsiveSize() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_keywordResponsiveSize, "f");
    }
    // responsive_size
    getBitsbufKeywordResponsiveSize() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordResponsiveSize, "f");
    }
    // array of strings string[]
    // num = 2
    getOrientationKeywords() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_orientationKeywords, "f");
    }
    // array of bitsbuffers Uint8Array[]
    // num = 2
    getOrientationKeywordsBitsbufs() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_orientationBitsbufKeywordsArray, "f");
    }
    // array of bitsbuffers Uint8Array[]
    // num = 2
    getMaxOrMinArray() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_maxOrMinArray, "f");
    }
    // portrait
    getKeywordOrientationPortrait() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_keywordOrientationPortrait, "f");
    }
    // landscape
    getKeywordOrientationLandscape() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_keywordOrientationLandscape, "f");
    }
    // min
    getKeywordMin() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordMin, "f");
    }
    // max
    getKeywordMax() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordMax, "f");
    }
    // "\n"
    getNewLineBitsbuf() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolNewLine, "f");
    }
    // "/*"
    getBitsbufSymbolCommentStart() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolCommentStart, "f");
    }
    // "*/"
    getBitsbufSymbolCommentEnd() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolCommentEnd, "f");
    }
    // " "
    getBitsbufSymbolBackgroundSpace() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolBackgroundSpace, "f");
    }
    // --responsive_size
    // array of bitsbuffers Uint8Array[]
    // num = 2
    getResponsiveSizeConstantNameBitsbufsArray() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantNameBitsbufsArray, "f");
    }
    // --responsive_size
    // bitsbuffer Uint8Array
    // num over 3 octets
    getResponsiveSizeConstantNameBitsbuf() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantNameBitsbuf, "f");
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
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_labelLineArray, "f")[paddingPos] = padding;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_labelLineArray, "f")[artPos] = art;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_labelLineArray, "f")[art_sizePos] = art_size;
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_labelLineArray, "f");
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
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_cssEncommentedLine, "f")[commentPos] = comment;
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_cssEncommentedLine, "f");
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
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f")[range_orderby_idPos] = range_orderby_id;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f")[artPos] = art;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f")[art_sizePos] = art_size;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f")[orientationPos] = orientation;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f")[sites_tool_namePos] = sites_tool_name;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f")[sites_tool_theme_namePos] = sites_tool_theme_name;
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f");
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
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f")[orientationPos] = orientation;
        return this;
    }
    responsiveSizeName_setSitesToolName(sites_tool_name) {
        let sites_tool_namePos = 10;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f")[sites_tool_namePos] = sites_tool_name;
        return this;
    }
    responsiveSizeName_setSitesTool_ThemeName(sites_tool_theme_name) {
        let sites_tool_theme_namePos = 12;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f")[sites_tool_theme_namePos] = sites_tool_theme_name;
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
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_importLineBitsbufsArray, "f")[url_startPos] = url_start;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_importLineBitsbufsArray, "f")[device_size_namePos] = device_size_name;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_importLineBitsbufsArray, "f")[newLineBitsbufPos] = newLineBitsbuf;
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_importLineBitsbufsArray, "f");
    }
    importLine_setNewlineBitsbuf(newLineBitsbuf) {
        let newLineBitsbufPos = (__classPrivateFieldGet(this, _ResponsiveDatasetConstants_importLineBitsbufsArray, "f").length - 1);
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_importLineBitsbufsArray, "f")[newLineBitsbufPos] = newLineBitsbuf;
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
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLineMaxOrMinBitsbufsArray, "f")[maxOrMinPos] = isMax ? __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordMax, "f") : __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordMin, "f");
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLineMaxOrMinBitsbufsArray, "f")[sizePos] = size;
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLineMaxOrMinBitsbufsArray, "f");
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
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLineBitsbufsArray, "f")[siteToolNamePos] = siteToolName;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLineBitsbufsArray, "f")[responsiveSizeNameOrientedPos] = responsiveSizeNameOriented;
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLineBitsbufsArray, "f");
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
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLine_size_BitsbufsArray, "f")[paddingPos] = padding;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLine_size_BitsbufsArray, "f")[responsiveSizeNameOrientedPos] = responsiveSizeNameOriented;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLine_size_BitsbufsArray, "f")[max_or_minPos] = max_or_min;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLine_size_BitsbufsArray, "f")[sizePos] = size;
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLine_size_BitsbufsArray, "f");
    }
}
exports.ResponsiveDatasetConstants = ResponsiveDatasetConstants;
_ResponsiveDatasetConstants_keywordResponsiveSize = new WeakMap(), _ResponsiveDatasetConstants_keywordName = new WeakMap(), _ResponsiveDatasetConstants_keywordOrientationLandscape = new WeakMap(), _ResponsiveDatasetConstants_keywordOrientationPortrait = new WeakMap(), _ResponsiveDatasetConstants_importUrlStart = new WeakMap(), _ResponsiveDatasetConstants_importUrlEnd = new WeakMap(), _ResponsiveDatasetConstants_keywordWidth = new WeakMap(), _ResponsiveDatasetConstants_keywordMin = new WeakMap(), _ResponsiveDatasetConstants_keywordMax = new WeakMap(), _ResponsiveDatasetConstants_keywordCssFileExtension = new WeakMap(), _ResponsiveDatasetConstants_unitPx = new WeakMap(), _ResponsiveDatasetConstants_cssVariablePrefix = new WeakMap(), _ResponsiveDatasetConstants_cssVariableNameValueDelimiter = new WeakMap(), _ResponsiveDatasetConstants_cssExpressionEnd = new WeakMap(), _ResponsiveDatasetConstants_symbolCommentStart = new WeakMap(), _ResponsiveDatasetConstants_symbolCommentEnd = new WeakMap(), _ResponsiveDatasetConstants_symbolBackgroundSpace = new WeakMap(), _ResponsiveDatasetConstants_symbolNewLine = new WeakMap(), _ResponsiveDatasetConstants_symbolUnderscore = new WeakMap(), _ResponsiveDatasetConstants_symbolDot = new WeakMap(), _ResponsiveDatasetConstants_symbolSlash = new WeakMap(), _ResponsiveDatasetConstants_bitsbufKeywordResponsiveSize = new WeakMap(), _ResponsiveDatasetConstants_bitsbufKeywordName = new WeakMap(), _ResponsiveDatasetConstants_bitsbufKeywordOrientationLandscape = new WeakMap(), _ResponsiveDatasetConstants_bitsbufKeywordOrientationPortrait = new WeakMap(), _ResponsiveDatasetConstants_bitsbufKeywordWidth = new WeakMap(), _ResponsiveDatasetConstants_bitsbufKeywordMin = new WeakMap(), _ResponsiveDatasetConstants_bitsbufKeywordMax = new WeakMap(), _ResponsiveDatasetConstants_bitsbufKeywordCssFileExtension = new WeakMap(), _ResponsiveDatasetConstants_bitsbufImportUrlStart = new WeakMap(), _ResponsiveDatasetConstants_bitsbufImportUrlEnd = new WeakMap(), _ResponsiveDatasetConstants_bitsbufUnitPx = new WeakMap(), _ResponsiveDatasetConstants_bitsbufCssVariableStart = new WeakMap(), _ResponsiveDatasetConstants_bitsbufCssVariableNameValueDelimiter = new WeakMap(), _ResponsiveDatasetConstants_bitsbufCssExpressionEnd = new WeakMap(), _ResponsiveDatasetConstants_bitsbufSymbolCommentStart = new WeakMap(), _ResponsiveDatasetConstants_bitsbufSymbolCommentEnd = new WeakMap(), _ResponsiveDatasetConstants_bitsbufSymbolBackgroundSpace = new WeakMap(), _ResponsiveDatasetConstants_bitsbufSymbolNewLine = new WeakMap(), _ResponsiveDatasetConstants_bitsbufSymbolUnderscore = new WeakMap(), _ResponsiveDatasetConstants_bitsbufSymbolDot = new WeakMap(), _ResponsiveDatasetConstants_bitsbufSymbolSlash = new WeakMap(), _ResponsiveDatasetConstants_labelLineArray = new WeakMap(), _ResponsiveDatasetConstants_cssEncommentedLine = new WeakMap(), _ResponsiveDatasetConstants_orientationKeywords = new WeakMap(), _ResponsiveDatasetConstants_orientationBitsbufKeywordsArray = new WeakMap(), _ResponsiveDatasetConstants_maxOrMinArray = new WeakMap(), _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray = new WeakMap(), _ResponsiveDatasetConstants_importLineBitsbufsArray = new WeakMap(), _ResponsiveDatasetConstants_responsiveSizeConstantNameBitsbufsArray = new WeakMap(), _ResponsiveDatasetConstants_responsiveSizeConstantNameBitsbuf = new WeakMap(), _ResponsiveDatasetConstants_responsiveSizeConstantLineMaxOrMinBitsbufsArray = new WeakMap(), _ResponsiveDatasetConstants_responsiveSizeConstantLineBitsbufsArray = new WeakMap(), _ResponsiveDatasetConstants_responsiveSizeConstantLine_size_BitsbufsArray = new WeakMap();
//# sourceMappingURL=ResponsiveDatasetConstants.js.map