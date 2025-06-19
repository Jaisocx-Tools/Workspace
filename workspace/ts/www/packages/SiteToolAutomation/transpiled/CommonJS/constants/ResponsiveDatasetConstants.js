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
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_labelLineArray, [
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolCommentStart, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolBackgroundSpace, "f"),
            "art",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolBackgroundSpace, "f"),
            "art_size",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolBackgroundSpace, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolCommentEnd, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolNewLine, "f")
        ], "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_cssEncommentedLine, [
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolCommentStart, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolBackgroundSpace, "f"),
            "comment",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolBackgroundSpace, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolCommentEnd, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolNewLine, "f")
        ], "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_orientationKeywords, [
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_keywordOrientationPortrait, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_keywordOrientationLandscape, "f"),
        ], "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_orientationBitsbufKeywordsArray, [
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordOrientationPortrait, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordOrientationLandscape, "f"),
        ], "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_maxOrMinArray, [
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordMin, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordMax, "f")
        ], "f");
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
            "sites_tool_name",
        ], "f");
        // @import url("./style_e02_mobile_xs_portrait.css");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_importLineBitsbufsArray, [
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufImportUrlStart, "f"),
            "url_start",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolSlash, "f"),
            "device_size_name",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolDot, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordCssFileExtension, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufImportUrlEnd, "f")
        ], "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_responsiveSizeConstantNameBitsbufsArray, [
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufCssVariableStart, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordResponsiveSize, "f")
        ], "f");
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_responsiveSizeConstantNameBitsbuf, this.fileWriter
            .concatUint8Arrays(__classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantNameBitsbufsArray, "f")), "f");
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
        __classPrivateFieldSet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLine_size_BitsbufsArray, [
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufCssVariableStart, "f"),
            "responsiveSizeNameOriented",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolUnderscore, "f"),
            "max_or_min",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolUnderscore, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordWidth, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufCssVariableNameValueDelimiter, "f"),
            "size",
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufUnitPx, "f"),
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufCssExpressionEnd, "f")
        ], "f");
    }
    getOrientationKeywords() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_orientationKeywords, "f");
    }
    getOrientationKeywordsBitsbufs() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_orientationBitsbufKeywordsArray, "f");
    }
    getMaxOrMinArray() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_maxOrMinArray, "f");
    }
    getKeywordOrientationPortrait() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_keywordOrientationPortrait, "f");
    }
    getKeywordOrientationLandscape() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_keywordOrientationLandscape, "f");
    }
    getKeywordMin() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordMin, "f");
    }
    getKeywordMax() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordMax, "f");
    }
    getNewLineBitsbuf() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolNewLine, "f");
    }
    getBitsbufSymbolCommentStart() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolCommentStart, "f");
    }
    getBitsbufSymbolCommentEnd() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolCommentEnd, "f");
    }
    getBitsbufSymbolBackgroundSpace() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolBackgroundSpace, "f");
    }
    getResponsiveSizeConstantNameBitsbuf() {
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantNameBitsbuf, "f");
    }
    getResponsiveSizeConstantLineMaxOrMinBitsbufsArray(size, isMax) {
        let maxOrMinPos = 3;
        let sizePos = 7;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLineMaxOrMinBitsbufsArray, "f")[maxOrMinPos] = isMax ? __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordMax, "f") : __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordMin, "f");
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLineMaxOrMinBitsbufsArray, "f")[sizePos] = size;
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLineMaxOrMinBitsbufsArray, "f");
    }
    getResponsiveSizeConstantLineMaxOrMinBitsbufsArray_SitesTool(size, isMax) {
        let maxOrMinPos = 3;
        let sizePos = 7;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLineMaxOrMinBitsbufsArray, "f")[maxOrMinPos] = isMax ? __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordMax, "f") : __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufKeywordMin, "f");
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLineMaxOrMinBitsbufsArray, "f")[sizePos] = size;
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLineMaxOrMinBitsbufsArray, "f");
    }
    getLabelLineArrayByBitsbufs(art, artSize) {
        let artPos = 2;
        let artSizePos = 4;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_labelLineArray, "f")[artPos] = art;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_labelLineArray, "f")[artSizePos] = artSize;
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_labelLineArray, "f");
    }
    getCssEncommentedLineByBitsbufs(comment) {
        let commentPos = 2;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_cssEncommentedLine, "f")[commentPos] = comment;
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_cssEncommentedLine, "f");
    }
    getResponsiveSizeName_withSitesToolName_ByBitsbufs(rangeOrderbyId, art, artSize, orientation, sitesToolName) {
        let rangeOrderbyIdPos = 2;
        let artPos = 4;
        let artSizePos = 6;
        let orientationPos = 8;
        let sitesToolNamePos = 10;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f")[rangeOrderbyIdPos] = rangeOrderbyId;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f")[artPos] = art;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f")[artSizePos] = artSize;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f")[orientationPos] = orientation;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f")[sitesToolNamePos] = sitesToolName;
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f");
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
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f")[rangeOrderbyIdPos] = rangeOrderbyId;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f")[artPos] = art;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f")[artSizePos] = artSize;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f")[sitesToolNamePos] = sitesToolName;
        let responsiveSizesNamesMultiArray = __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f")
            .filter((_value, index) => {
            return ((index < 7) || (index > filteringNumber));
        });
        return responsiveSizesNamesMultiArray;
    }
    getResponsiveSizeNameOrientedArrayByBitsbufs(responsiveSizeName, orientation) {
        let responsiveSizeNameOrientedArray = [
            responsiveSizeName,
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_bitsbufSymbolUnderscore, "f"),
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
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f")[rangeOrderbyIdPos] = this.textEncoder.encode(rangeOrderbyId);
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f")[artPos] = this.textEncoder.encode(art);
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f")[artSizePos] = this.textEncoder.encode(artSize);
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f")[sitesToolNamePos] = this.textEncoder.encode(sitesToolName);
        if (orientation.length === 0) {
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f")[orientationPos] = new Uint8Array(0);
        }
        else {
            __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f")[orientationPos] = this.textEncoder.encode(orientation);
        }
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray, "f");
    }
    getImportLineBitsbufsArray(urlStart, responsiveSizeNameOriented) {
        let urlStartPos = 1;
        let responsiveSizeNamePos = 3;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_importLineBitsbufsArray, "f")[urlStartPos] = this.textEncoder.encode(urlStart);
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_importLineBitsbufsArray, "f")[responsiveSizeNamePos] = this.textEncoder.encode(responsiveSizeNameOriented);
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_importLineBitsbufsArray, "f");
    }
    getImportLineBitsbufsArrayByBitsbufs(urlStart, responsiveSizeNameOriented) {
        let urlStartPos = 1;
        let responsiveSizeNamePos = 3;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_importLineBitsbufsArray, "f")[urlStartPos] = urlStart;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_importLineBitsbufsArray, "f")[responsiveSizeNamePos] = responsiveSizeNameOriented;
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_importLineBitsbufsArray, "f");
    }
    getResponsiveSizeConstantLineBitsbufsArrayByBitsbufs(responsiveSizeNameOriented) {
        let responsiveSizeNamePos = 5;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLineBitsbufsArray, "f")[responsiveSizeNamePos] = (responsiveSizeNameOriented);
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLineBitsbufsArray, "f");
    }
    getResponsiveSizeConstantLineBitsbufsArray(responsiveSizeNameOriented) {
        let responsiveSizeNamePos = 4;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLineBitsbufsArray, "f")[responsiveSizeNamePos] = this.textEncoder.encode(responsiveSizeNameOriented);
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLineBitsbufsArray, "f");
    }
    getResponsiveSizeConstantLine_size_ByBitsbufs(responsiveSizeNameOriented, maxOrMin, size) {
        let responsiveSizeNamePos = 1;
        let maxOrMinPos = 3;
        let sizePos = 7;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLine_size_BitsbufsArray, "f")[responsiveSizeNamePos] = responsiveSizeNameOriented;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLine_size_BitsbufsArray, "f")[maxOrMinPos] = maxOrMin;
        __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLine_size_BitsbufsArray, "f")[sizePos] = size;
        return __classPrivateFieldGet(this, _ResponsiveDatasetConstants_responsiveSizeConstantLine_size_BitsbufsArray, "f");
    }
}
exports.ResponsiveDatasetConstants = ResponsiveDatasetConstants;
_ResponsiveDatasetConstants_keywordResponsiveSize = new WeakMap(), _ResponsiveDatasetConstants_keywordName = new WeakMap(), _ResponsiveDatasetConstants_keywordOrientationLandscape = new WeakMap(), _ResponsiveDatasetConstants_keywordOrientationPortrait = new WeakMap(), _ResponsiveDatasetConstants_importUrlStart = new WeakMap(), _ResponsiveDatasetConstants_importUrlEnd = new WeakMap(), _ResponsiveDatasetConstants_keywordWidth = new WeakMap(), _ResponsiveDatasetConstants_keywordMin = new WeakMap(), _ResponsiveDatasetConstants_keywordMax = new WeakMap(), _ResponsiveDatasetConstants_keywordCssFileExtension = new WeakMap(), _ResponsiveDatasetConstants_unitPx = new WeakMap(), _ResponsiveDatasetConstants_cssVariablePrefix = new WeakMap(), _ResponsiveDatasetConstants_cssVariableNameValueDelimiter = new WeakMap(), _ResponsiveDatasetConstants_cssExpressionEnd = new WeakMap(), _ResponsiveDatasetConstants_symbolCommentStart = new WeakMap(), _ResponsiveDatasetConstants_symbolCommentEnd = new WeakMap(), _ResponsiveDatasetConstants_symbolBackgroundSpace = new WeakMap(), _ResponsiveDatasetConstants_symbolNewLine = new WeakMap(), _ResponsiveDatasetConstants_symbolUnderscore = new WeakMap(), _ResponsiveDatasetConstants_symbolDot = new WeakMap(), _ResponsiveDatasetConstants_symbolSlash = new WeakMap(), _ResponsiveDatasetConstants_bitsbufKeywordResponsiveSize = new WeakMap(), _ResponsiveDatasetConstants_bitsbufKeywordName = new WeakMap(), _ResponsiveDatasetConstants_bitsbufKeywordOrientationLandscape = new WeakMap(), _ResponsiveDatasetConstants_bitsbufKeywordOrientationPortrait = new WeakMap(), _ResponsiveDatasetConstants_bitsbufKeywordWidth = new WeakMap(), _ResponsiveDatasetConstants_bitsbufKeywordMin = new WeakMap(), _ResponsiveDatasetConstants_bitsbufKeywordMax = new WeakMap(), _ResponsiveDatasetConstants_bitsbufKeywordCssFileExtension = new WeakMap(), _ResponsiveDatasetConstants_bitsbufImportUrlStart = new WeakMap(), _ResponsiveDatasetConstants_bitsbufImportUrlEnd = new WeakMap(), _ResponsiveDatasetConstants_bitsbufUnitPx = new WeakMap(), _ResponsiveDatasetConstants_bitsbufCssVariableStart = new WeakMap(), _ResponsiveDatasetConstants_bitsbufCssVariableNameValueDelimiter = new WeakMap(), _ResponsiveDatasetConstants_bitsbufCssExpressionEnd = new WeakMap(), _ResponsiveDatasetConstants_bitsbufSymbolCommentStart = new WeakMap(), _ResponsiveDatasetConstants_bitsbufSymbolCommentEnd = new WeakMap(), _ResponsiveDatasetConstants_bitsbufSymbolBackgroundSpace = new WeakMap(), _ResponsiveDatasetConstants_bitsbufSymbolNewLine = new WeakMap(), _ResponsiveDatasetConstants_bitsbufSymbolUnderscore = new WeakMap(), _ResponsiveDatasetConstants_bitsbufSymbolDot = new WeakMap(), _ResponsiveDatasetConstants_bitsbufSymbolSlash = new WeakMap(), _ResponsiveDatasetConstants_labelLineArray = new WeakMap(), _ResponsiveDatasetConstants_cssEncommentedLine = new WeakMap(), _ResponsiveDatasetConstants_orientationKeywords = new WeakMap(), _ResponsiveDatasetConstants_orientationBitsbufKeywordsArray = new WeakMap(), _ResponsiveDatasetConstants_maxOrMinArray = new WeakMap(), _ResponsiveDatasetConstants_responsiveSizeNameOrientedBitsbufsArray = new WeakMap(), _ResponsiveDatasetConstants_importLineBitsbufsArray = new WeakMap(), _ResponsiveDatasetConstants_responsiveSizeConstantNameBitsbufsArray = new WeakMap(), _ResponsiveDatasetConstants_responsiveSizeConstantNameBitsbuf = new WeakMap(), _ResponsiveDatasetConstants_responsiveSizeConstantLineMaxOrMinBitsbufsArray = new WeakMap(), _ResponsiveDatasetConstants_responsiveSizeConstantLineBitsbufsArray = new WeakMap(), _ResponsiveDatasetConstants_responsiveSizeConstantLine_size_BitsbufsArray = new WeakMap();
//# sourceMappingURL=ResponsiveDatasetConstants.js.map