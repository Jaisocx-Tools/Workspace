"use strict";
/**
 * Quick usage examples
 *
 * const cc = new CaseConverter();
 * cc.toCamel('  parse XML HTTP request  '); // => 'parseXmlHttpRequest'
 * cc.toSnake('Make HTTP/2 GREAT-again!');   // => 'make_http_2_great_again'
 * CaseConverter.constant('fooBarBaz');      // => 'FOO_BAR_BAZ'
 * CaseConverter.title('a tale of two cities'); // => 'A Tale of Two Cities'
*/
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
var _CaseConverter_symbolZero, _CaseConverter_symbolNine, _CaseConverter_symbolA, _CaseConverter_symbolZ, _CaseConverter_symbolAlower, _CaseConverter_symbolZlower;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseConverter = exports.DataRecordMatches = exports.JoinDelimiterVariants = exports.CharTypeEnum = exports.CapsOrSmallTransformVariants = void 0;
/*
  transformations variants:
    . by delimiter:
        with delimiter
        without delimiter
    . letter case
        as is
        to caps
        to small
        first cap
    . first letter case other
    . UC/LC chars groups separate
    . number groups separate
    extended Latin chars replace with similar base chars no separate group
*/
var CapsOrSmallTransformVariants;
(function (CapsOrSmallTransformVariants) {
    CapsOrSmallTransformVariants[CapsOrSmallTransformVariants["caps"] = 1] = "caps";
    CapsOrSmallTransformVariants[CapsOrSmallTransformVariants["small"] = 2] = "small";
    CapsOrSmallTransformVariants[CapsOrSmallTransformVariants["firstCapsAndSmall"] = 3] = "firstCapsAndSmall";
    CapsOrSmallTransformVariants[CapsOrSmallTransformVariants["firstCapsAsIs"] = 4] = "firstCapsAsIs";
    CapsOrSmallTransformVariants[CapsOrSmallTransformVariants["asIs"] = 5] = "asIs";
})(CapsOrSmallTransformVariants || (exports.CapsOrSmallTransformVariants = CapsOrSmallTransformVariants = {}));
// char type enum
var CharTypeEnum;
(function (CharTypeEnum) {
    CharTypeEnum[CharTypeEnum["caps"] = 1] = "caps";
    CharTypeEnum[CharTypeEnum["small"] = 2] = "small";
    CharTypeEnum[CharTypeEnum["num"] = 3] = "num";
    CharTypeEnum[CharTypeEnum["omitted"] = 4] = "omitted";
    CharTypeEnum[CharTypeEnum["delimiter"] = 5] = "delimiter";
})(CharTypeEnum || (exports.CharTypeEnum = CharTypeEnum = {}));
var JoinDelimiterVariants;
(function (JoinDelimiterVariants) {
    JoinDelimiterVariants[JoinDelimiterVariants["everyGroup"] = 3] = "everyGroup";
    JoinDelimiterVariants[JoinDelimiterVariants["beforeNumbersNoDelimiter"] = 4] = "beforeNumbersNoDelimiter";
    JoinDelimiterVariants[JoinDelimiterVariants["afterNumbersNoDelimiter"] = 5] = "afterNumbersNoDelimiter";
    JoinDelimiterVariants[JoinDelimiterVariants["neverNumbersDelimiter"] = 6] = "neverNumbersDelimiter";
    JoinDelimiterVariants[JoinDelimiterVariants["delimitersReplaced"] = 7] = "delimitersReplaced";
})(JoinDelimiterVariants || (exports.JoinDelimiterVariants = JoinDelimiterVariants = {}));
class DataRecordMatches {
    // groupNumber_positions:       number[][];
    // groupCaps_positions:         number[][];
    // groupSmall_positions:        number[][];
    // groupFirstCap_positions:     number[][];
    // groupOmittedChars_positions: number[][];
    // wasNumber: boolean;
    // isNumber:  boolean;
    // groupNumber_length: number;
    // wasCaps:   boolean;
    // isCaps:    boolean;
    // wasSmall:  boolean;
    // isSmall:   boolean;
    // wasOmitted: boolean;
    // isOmitted: boolean;
    // groupSameCase_length: number;
    // groupOmittedChars_length: number;
    constructor() {
        this.groups_positions = new Array();
        this.prev_CharTypeEnum = 0;
        this.current_CharTypeEnum = 0;
        this.currentGroupOfCharType_charsAmount = 0;
        // this.groupNumber_positions     = new Array() as number[][];
        // this.groupCaps_positions       = new Array() as number[][];
        // this.groupSmall_positions      = new Array() as number[][];
        // this.groupFirstCap_positions   = new Array() as number[][];
        // this.groupOmittedChars_positions = new Array() as number[][];
        // this.wasNumber  = false;
        // this.isNumber   = false;
        // this.groupNumber_length = 0;
        // this.wasCaps    = false;
        // this.isCaps     = false;
        // this.wasSmall   = false;
        // this.isSmall    = false;
        // this.wasOmitted = false;
        // this.isOmitted  = false;
        // this.groupSameCase_length = 0;
        // this.groupOmittedChars_length = 0;
    }
}
exports.DataRecordMatches = DataRecordMatches;
class CaseConverter {
    constructor() {
        _CaseConverter_symbolZero.set(this, void 0);
        _CaseConverter_symbolNine.set(this, void 0);
        _CaseConverter_symbolA.set(this, void 0);
        _CaseConverter_symbolZ.set(this, void 0);
        _CaseConverter_symbolAlower.set(this, void 0);
        _CaseConverter_symbolZlower.set(this, void 0);
        this._debug = false;
        __classPrivateFieldSet(this, _CaseConverter_symbolZero, 48, "f");
        __classPrivateFieldSet(this, _CaseConverter_symbolNine, 57, "f");
        __classPrivateFieldSet(this, _CaseConverter_symbolA, 65, "f");
        __classPrivateFieldSet(this, _CaseConverter_symbolZ, 90, "f");
        __classPrivateFieldSet(this, _CaseConverter_symbolAlower, 97, "f");
        __classPrivateFieldSet(this, _CaseConverter_symbolZlower, 122, "f");
        this.rangeNumLatin = [
            [__classPrivateFieldGet(this, _CaseConverter_symbolZero, "f"), __classPrivateFieldGet(this, _CaseConverter_symbolNine, "f")]
        ];
        this.rangesANumLatin = [
            [__classPrivateFieldGet(this, _CaseConverter_symbolZero, "f"), __classPrivateFieldGet(this, _CaseConverter_symbolNine, "f")],
            [__classPrivateFieldGet(this, _CaseConverter_symbolA, "f"), __classPrivateFieldGet(this, _CaseConverter_symbolZ, "f")],
            [__classPrivateFieldGet(this, _CaseConverter_symbolAlower, "f"), __classPrivateFieldGet(this, _CaseConverter_symbolZlower, "f")]
        ];
        this.rangesUC = [
            [__classPrivateFieldGet(this, _CaseConverter_symbolA, "f"), __classPrivateFieldGet(this, _CaseConverter_symbolZ, "f")]
        ];
        this.rangesLC = [
            [__classPrivateFieldGet(this, _CaseConverter_symbolAlower, "f"), __classPrivateFieldGet(this, _CaseConverter_symbolZlower, "f")]
        ];
    }
    static getInstance() {
        if (CaseConverter.clsInstance === false) {
            CaseConverter.clsInstance = new CaseConverter();
        }
        return CaseConverter.clsInstance;
    }
    setDebug(inDebug) {
        this._debug = inDebug;
        return this;
    }
    /** Core public API (static convenience) */
    static camel(inText) {
        return CaseConverter.getInstance().toCamel(inText);
    }
    static pascal(inText) {
        return CaseConverter.getInstance().toPascal(inText);
    }
    static snake(inText) {
        return CaseConverter.getInstance().toSnake(inText);
    }
    static kebab(inText) {
        return CaseConverter.getInstance().toKebab(inText);
    }
    static constant(inText) {
        return CaseConverter.getInstance().toConstant(inText);
    }
    // static title( inText: string ): string {
    //   return CaseConverter.getInstance().toTitle( inText );
    // }
    static sentence(inText) {
        return CaseConverter.getInstance().toSentence(inText);
    }
    static dot(inText) {
        return CaseConverter.getInstance().toDelimited(inText, ".", CapsOrSmallTransformVariants.small, CapsOrSmallTransformVariants.small, JoinDelimiterVariants.everyGroup);
    }
    static path(inText) {
        return CaseConverter.getInstance().toAsPath(inText);
    }
    static train(inText) {
        return CaseConverter.getInstance().toTrain(inText);
    }
    /** Instance methods */
    toCamel(inText) {
        return this.toDelimited(inText, "", CapsOrSmallTransformVariants.small, CapsOrSmallTransformVariants.firstCapsAndSmall, JoinDelimiterVariants.delimitersReplaced);
    }
    toPascal(inText) {
        return this.toDelimited(inText, "", CapsOrSmallTransformVariants.firstCapsAndSmall, CapsOrSmallTransformVariants.firstCapsAndSmall, JoinDelimiterVariants.delimitersReplaced);
    }
    toSnake(inText) {
        return this.toDelimited(inText, "_", CapsOrSmallTransformVariants.small, CapsOrSmallTransformVariants.small, JoinDelimiterVariants.everyGroup);
    }
    toKebab(inText) {
        return this.toDelimited(inText, "-", CapsOrSmallTransformVariants.small, CapsOrSmallTransformVariants.small, JoinDelimiterVariants.beforeNumbersNoDelimiter);
    }
    toConstant(inText) {
        return this.toDelimited(inText, "_", CapsOrSmallTransformVariants.caps, CapsOrSmallTransformVariants.caps, JoinDelimiterVariants.everyGroup);
    }
    // title ( inText: string ): string {
    //   const SMALL = new Set([
    //     "a","an","and","as","at","but","by","for","in","nor","of","on","or","per","the","to","vs","via"
    //   ]);
    //   const toks = this.parse(
    //     inText,
    //     this.parseTimeGrouppingVariants
    //   );
    //   return toks.map((t, i) => {
    //     const lower = t.toLowerCase();
    //     if (i !== 0 && i !== toks.length - 1 && SMALL.has(lower))
    //       return lower;
    //     return this.toFirstCap(t);
    //   }).join(" ");
    // }
    toSentence(inText) {
        return this.toDelimited(inText, " ", CapsOrSmallTransformVariants.firstCapsAndSmall, CapsOrSmallTransformVariants.small, JoinDelimiterVariants.everyGroup);
    }
    toTrain(inText) {
        return this.toDelimited(inText, "-", CapsOrSmallTransformVariants.firstCapsAndSmall, CapsOrSmallTransformVariants.firstCapsAndSmall, JoinDelimiterVariants.everyGroup);
    }
    toAsPath(inText) {
        return this.toDelimited(inText, "/", CapsOrSmallTransformVariants.small, CapsOrSmallTransformVariants.small, JoinDelimiterVariants.delimitersReplaced);
    }
    toUC(inText) {
        let locText = inText;
        if ((!locText) || (locText.length === 0)) {
            return "";
        }
        let retVal_transformed = locText.toUpperCase();
        return retVal_transformed;
    }
    toFirstCapsAndSmall(inText) {
        let locText = inText;
        let locTextLC = this.toLC(locText);
        let retVal_transformed = this.toFirstCapsAsIs(locTextLC);
        return retVal_transformed;
    }
    toFirstCapsAsIs(inText) {
        let locText = inText;
        if ((!locText) || (locText.length === 0)) {
            return "";
        }
        let locTextLen = locText.length;
        let firstCharCap = locText.charAt(0).toUpperCase();
        let locTextAfterFirstChar = locText.slice(1, locTextLen);
        let retVal_transformed = (firstCharCap + locTextAfterFirstChar);
        return retVal_transformed;
    }
    toLC(inText) {
        let locText = inText;
        if ((!locText) || (locText.length === 0)) {
            return "";
        }
        let retVal_transformed = locText.toLowerCase();
        return retVal_transformed;
    }
    toDelimited(inText, delimiter, capsOrSmallFirst_TransformVariants, capsOrSmallOther_TransformVariants, joinDelimiterVariant) {
        let locBitsbufBeingTransformed = (new TextEncoder()).encode(inText);
        let locParsedDataRecords = this.parseBitsbuf(locBitsbufBeingTransformed);
        let locTransformedDataRecords = this.transformDataRecords(locParsedDataRecords, joinDelimiterVariant);
        console.log({ locTransformedDataRecords });
        let locTransformFirstFunc = false;
        let locTransformFunc = false;
        let transformResolvingObject = {
            [CapsOrSmallTransformVariants.caps]: this.toUC,
            [CapsOrSmallTransformVariants.small]: this.toLC,
            [CapsOrSmallTransformVariants.firstCapsAndSmall]: this.toFirstCapsAndSmall,
            [CapsOrSmallTransformVariants.firstCapsAsIs]: this.toFirstCapsAsIs,
            [CapsOrSmallTransformVariants.asIs]: false
        };
        let valueTransformFirst_ResolvingObject = false;
        let valueTransformOther_ResolvingObject = false;
        valueTransformFirst_ResolvingObject = transformResolvingObject[capsOrSmallFirst_TransformVariants];
        if (valueTransformFirst_ResolvingObject !== false) {
            locTransformFirstFunc = valueTransformFirst_ResolvingObject.bind(this);
        }
        valueTransformOther_ResolvingObject = transformResolvingObject[capsOrSmallOther_TransformVariants];
        if (valueTransformOther_ResolvingObject !== false) {
            locTransformFunc = valueTransformOther_ResolvingObject.bind(this);
        }
        let locTransformedTexts = this.transformBitsbuf(locBitsbufBeingTransformed, locTransformedDataRecords, delimiter, locTransformFirstFunc, locTransformFunc);
        let retValTransformedText = locTransformedTexts.join("");
        if (this._debug === true) {
            console.log({ "in": inText,
                "ret": retValTransformedText });
        }
        return retValTransformedText;
    }
    transformBitsbuf(inMarkedBitsbuf, afterTransform_parseTimeDataRecord, delimiter, inTransformFirstFunc, inTransformFunc) {
        let retVal_transformed = new Array();
        let locTextDecoder = new TextDecoder();
        let locTmpBitsbuf = new Uint8Array(0);
        let groupsMultidimPosArray = afterTransform_parseTimeDataRecord.groups_positions;
        let groupsArrayLen = groupsMultidimPosArray.length;
        let locTmpGroupRanges = new Array(3);
        let locCurrentCharsGroupType = 0;
        let groupOfChars_Id = 0;
        let charPosStart = 0;
        let charPosFinish = 0;
        let secureCounter = 1;
        let secureMaxCounter = 62;
        let locIsDelimiter = ((delimiter !== undefined) && (delimiter !== null) && (delimiter.length !== 0));
        let locTextItem_AsIs = "";
        let locTextItem_Transformed = "";
        let locTransformFunc = inTransformFirstFunc;
        let locIsTextItemFirst = true;
        markerTB: while (groupOfChars_Id < groupsArrayLen) {
            // start secure check
            secureCounter++;
            if (secureCounter > secureMaxCounter) {
                groupOfChars_Id = (groupsArrayLen + 4);
                secureCounter = (secureMaxCounter + 4);
                break markerTB;
            }
            // end secure check
            // get start and end pos of chars in the current group of similar chars
            locTmpGroupRanges = groupsMultidimPosArray[groupOfChars_Id];
            locCurrentCharsGroupType = locTmpGroupRanges[2];
            if (locCurrentCharsGroupType === CharTypeEnum.delimiter) {
                if ((locIsDelimiter === true) && (groupOfChars_Id !== 0)) {
                    retVal_transformed.push(delimiter);
                }
                groupOfChars_Id++;
                continue markerTB;
            }
            charPosStart = locTmpGroupRanges[0];
            charPosFinish = locTmpGroupRanges[1];
            // obtained array of chars of the current group
            locTmpBitsbuf = inMarkedBitsbuf.slice(charPosStart, (charPosFinish + 1));
            // converted to string
            locTextItem_AsIs = locTextDecoder.decode(locTmpBitsbuf);
            // pushed group of chars as text to the result array
            if (locTransformFunc === false) {
                retVal_transformed.push(locTextItem_AsIs);
            }
            else {
                locTextItem_Transformed = locTransformFunc(locTextItem_AsIs);
                retVal_transformed.push(locTextItem_Transformed);
            }
            if (locIsTextItemFirst === true) {
                locTransformFunc = inTransformFunc;
                locIsTextItemFirst = false;
            }
            groupOfChars_Id++;
        }
        if (this._debug === true) {
            console.log({
                retVal_transformed,
                groupsMultidimPosArray
            });
        }
        return retVal_transformed;
    }
    transformDataRecords(inParseTimeDataRecord, joinDelimiterVariant) {
        let transformedDataRecods = new DataRecordMatches();
        let groupsMultidimPosArray = inParseTimeDataRecord.groups_positions;
        let groupsArrayLen = groupsMultidimPosArray.length;
        let locTmpGroupRanges = new Array(3);
        let groupOfChars_Id = 0;
        let previousGroupOfChars_Id = 0;
        let nextGroupOfChars_Id = 0;
        let locCurrentCharsGroupType = 0;
        let locPreviousCharsGroupType = 0;
        let locNextCharsGroupType = 0;
        transformedDataRecods.groups_positions = new Array();
        let transformedGroupsMultidimPosArray = transformedDataRecods.groups_positions;
        let locTmp_ofTypeDelimiter_TransformedGroupRanges = new Array(3);
        let locTmp_ofTypeCurrent_TransformedGroupRanges = new Array(3);
        let secureCounter = 1;
        let secureMaxCounter = 62;
        locTmp_ofTypeDelimiter_TransformedGroupRanges[0] = (-1);
        locTmp_ofTypeDelimiter_TransformedGroupRanges[1] = (-1);
        locTmp_ofTypeDelimiter_TransformedGroupRanges[2] = CharTypeEnum.delimiter;
        markerJ: while (groupOfChars_Id < groupsArrayLen) {
            // start secure check
            secureCounter++;
            if (secureCounter > secureMaxCounter) {
                groupOfChars_Id = (groupsArrayLen + 4);
                secureCounter = (secureMaxCounter + 4);
                break markerJ;
            }
            locTmpGroupRanges = groupsMultidimPosArray[groupOfChars_Id];
            previousGroupOfChars_Id = (groupOfChars_Id - 1);
            nextGroupOfChars_Id = (groupOfChars_Id + 1);
            locCurrentCharsGroupType = locTmpGroupRanges[2];
            if (groupOfChars_Id !== 0) {
                locPreviousCharsGroupType = groupsMultidimPosArray[previousGroupOfChars_Id][2];
            }
            else {
                locPreviousCharsGroupType = 0;
            }
            if (nextGroupOfChars_Id < groupsArrayLen) {
                locNextCharsGroupType = groupsMultidimPosArray[nextGroupOfChars_Id][2];
            }
            else {
                locNextCharsGroupType = 0;
            }
            locTmp_ofTypeCurrent_TransformedGroupRanges = [...locTmpGroupRanges];
            if ((locPreviousCharsGroupType === CharTypeEnum.omitted) &&
                (locCurrentCharsGroupType === CharTypeEnum.omitted)) {
                groupOfChars_Id++;
                continue markerJ;
            }
            if (locCurrentCharsGroupType === CharTypeEnum.omitted) {
                transformedGroupsMultidimPosArray.push(locTmp_ofTypeDelimiter_TransformedGroupRanges);
                groupOfChars_Id++;
                continue markerJ;
            }
            let transformedArrayLength = transformedGroupsMultidimPosArray.length;
            let transformedCharsGroup_DataRecord_lastId = (transformedArrayLength - 1);
            let lastTransformedCharsGroup_charType = 0;
            if (transformedCharsGroup_DataRecord_lastId >= 0) {
                lastTransformedCharsGroup_charType = transformedGroupsMultidimPosArray[transformedCharsGroup_DataRecord_lastId][2];
            }
            if ((locCurrentCharsGroupType === CharTypeEnum.caps) &&
                (locNextCharsGroupType === CharTypeEnum.small)) {
                let currentCapsGroupStartPos = locTmp_ofTypeCurrent_TransformedGroupRanges[0];
                let currentCapsGroupEndPos = locTmp_ofTypeCurrent_TransformedGroupRanges[1];
                let currentCapsGroupCharsNumber = ((currentCapsGroupEndPos - currentCapsGroupStartPos) + 1);
                let nextCharsGroup = groupsMultidimPosArray[nextGroupOfChars_Id];
                let nextSmallGroupStartPos = nextCharsGroup[0];
                nextSmallGroupStartPos--;
                groupsMultidimPosArray[nextGroupOfChars_Id][0] = nextSmallGroupStartPos;
                if (currentCapsGroupCharsNumber === 1) {
                    // if ( locPreviousCharsGroupType === CharTypeEnum.omitted ) {
                    // }
                    // else {
                    // }
                    groupsMultidimPosArray[groupOfChars_Id][2] = CharTypeEnum.omitted;
                }
                else {
                    currentCapsGroupEndPos--;
                    locTmp_ofTypeCurrent_TransformedGroupRanges[1] = currentCapsGroupEndPos;
                    transformedGroupsMultidimPosArray.push(locTmp_ofTypeCurrent_TransformedGroupRanges);
                }
                groupOfChars_Id++;
                continue markerJ;
            }
            transformedCharsGroup_DataRecord_lastId = (transformedArrayLength - 1);
            if (transformedCharsGroup_DataRecord_lastId >= 0) {
                lastTransformedCharsGroup_charType = transformedGroupsMultidimPosArray[transformedCharsGroup_DataRecord_lastId][2];
            }
            if ((locPreviousCharsGroupType === CharTypeEnum.omitted) && (lastTransformedCharsGroup_charType === CharTypeEnum.delimiter)) {
                transformedGroupsMultidimPosArray.push(locTmp_ofTypeCurrent_TransformedGroupRanges);
                groupOfChars_Id++;
                continue markerJ;
            }
            if (joinDelimiterVariant === JoinDelimiterVariants.everyGroup) {
                transformedGroupsMultidimPosArray.push(locTmp_ofTypeDelimiter_TransformedGroupRanges);
            }
            else if (joinDelimiterVariant === JoinDelimiterVariants.beforeNumbersNoDelimiter) {
                if (locCurrentCharsGroupType !== CharTypeEnum.num) {
                    transformedGroupsMultidimPosArray.push(locTmp_ofTypeDelimiter_TransformedGroupRanges);
                }
            }
            else if (joinDelimiterVariant === JoinDelimiterVariants.afterNumbersNoDelimiter) {
                if ((locPreviousCharsGroupType !== CharTypeEnum.num)) {
                    transformedGroupsMultidimPosArray.push(locTmp_ofTypeDelimiter_TransformedGroupRanges);
                }
            }
            else if (joinDelimiterVariant === JoinDelimiterVariants.neverNumbersDelimiter) {
                if ((locPreviousCharsGroupType !== CharTypeEnum.num) && (locCurrentCharsGroupType !== CharTypeEnum.num)) {
                    transformedGroupsMultidimPosArray.push(locTmp_ofTypeDelimiter_TransformedGroupRanges);
                }
            }
            transformedGroupsMultidimPosArray.push(locTmp_ofTypeCurrent_TransformedGroupRanges);
            groupOfChars_Id++;
        }
        return transformedDataRecods;
    }
    parseBitsbuf(inBitsbuf) {
        // let retVal_splitted: string[] = new Array() as string[];
        let parseTimeDataRecord = new DataRecordMatches();
        // let bitsbuf: Uint8Array = ( new TextEncoder() ).encode ( inp );
        let inpLength = inBitsbuf.byteLength;
        // let bitsbufReplaced: Uint8Array = new Uint8Array( inpLength );
        let aChar = 0;
        let charPos = 0;
        let isNum_aChar = true;
        let isAlphaNum_aChar = true;
        let is_UC_aChar = true;
        let is_LC_aChar = true;
        // let char_BACKGROUND_SPACE: number = (" ").charCodeAt(0);
        // let groupsMultidimPosArray: number[][] = new Array(0) as number[][];
        // let groupPositionsArray: number[] = new Array(3) as number[];
        let secureCounter = 1;
        let secureMaxCounter = 256;
        marker1: while (charPos < inpLength) {
            secureCounter++;
            if (secureCounter > secureMaxCounter) {
                charPos = (inpLength + 128);
                secureCounter = (secureMaxCounter + 128);
                break marker1;
            }
            parseTimeDataRecord.prev_CharTypeEnum = parseTimeDataRecord.current_CharTypeEnum;
            parseTimeDataRecord.current_CharTypeEnum = 0;
            aChar = inBitsbuf[charPos];
            isAlphaNum_aChar = this.isAlphaNumLatin(aChar);
            isNum_aChar = this.isNumLatin(aChar);
            is_UC_aChar = this.isUC(aChar);
            is_LC_aChar = this.isLC(aChar);
            // isAlphaNum_aChar = ( parseTimeDataRecord.isNumber || parseTimeDataRecord.isCaps || parseTimeDataRecord.isSmall );
            if (isNum_aChar) {
                parseTimeDataRecord.current_CharTypeEnum = CharTypeEnum.num;
            }
            else if (is_UC_aChar) {
                parseTimeDataRecord.current_CharTypeEnum = CharTypeEnum.caps;
            }
            else if (is_LC_aChar) {
                parseTimeDataRecord.current_CharTypeEnum = CharTypeEnum.small;
            }
            else if (isAlphaNum_aChar === false) {
                parseTimeDataRecord.current_CharTypeEnum = CharTypeEnum.omitted;
            }
            this.tasksParseTimeDataRecord(parseTimeDataRecord, charPos);
            charPos++;
        }
        return parseTimeDataRecord;
    }
    tasksParseTimeDataRecord(inOutDataRecord, charPos) {
        let groupCharsNumber = 0;
        let groupsMultidimPosArray = inOutDataRecord.groups_positions;
        let groupPositionsArray = new Array(3);
        let groupArraysLen = groupsMultidimPosArray.length;
        let groupArraysLastId = (groupArraysLen - 1);
        if (inOutDataRecord.prev_CharTypeEnum === inOutDataRecord.current_CharTypeEnum) {
            groupCharsNumber = inOutDataRecord.currentGroupOfCharType_charsAmount;
            inOutDataRecord.currentGroupOfCharType_charsAmount = (groupCharsNumber + 1);
            groupsMultidimPosArray[groupArraysLastId][1] = charPos;
        }
        else {
            inOutDataRecord.currentGroupOfCharType_charsAmount = 1;
            groupPositionsArray[0] = charPos;
            groupPositionsArray[1] = charPos;
            groupPositionsArray[2] = inOutDataRecord.current_CharTypeEnum;
            groupsMultidimPosArray.push(groupPositionsArray);
        }
    }
    matchesRanges(aNum, inRanges) {
        let retVal_didMatch = true;
        let numRanges = inRanges.length;
        let rangeId = 0;
        let aRange = new Array(0);
        let secureCounter = 1;
        let secureMaxCounter = 28;
        marker1: while (rangeId < numRanges) {
            secureCounter++;
            if (secureCounter > secureMaxCounter) {
                rangeId = (numRanges + 128);
                secureCounter = (secureMaxCounter + 128);
                break marker1;
            }
            aRange = inRanges[rangeId];
            retVal_didMatch = ((aRange[0] <= aNum) && (aNum <= aRange[1]));
            // if ( this._debug === true ) {
            //   console.log (
            //     "matchingRanges",
            //     {
            //       inRanges,
            //       aRange,
            //       aNum,
            //       less: ( aRange[0] <= aNum ),
            //       more: ( aNum <= aRange[1] ),
            //       retVal_didMatch
            //     }
            //   );
            // }
            if (retVal_didMatch === true) {
                rangeId = (numRanges + 128);
                secureCounter = (secureMaxCounter + 128);
                break marker1;
            }
            rangeId++;
        }
        return retVal_didMatch;
    }
    getCharTypeEnum(charCode) {
        let charGroupType = 0;
        let isOfCharType = true;
        let charTypeDetectionMethods = {
            [CharTypeEnum.caps]: this.isUC,
            [CharTypeEnum.small]: this.isLC,
            [CharTypeEnum.num]: this.isNumLatin,
            [CharTypeEnum.omitted]: this.isAlphaNumLatin
        };
        let i = 0;
        let mKey = 0;
        let m = null;
        let methodsKeys = Object.keys(charTypeDetectionMethods);
        let methodsNumber = methodsKeys.length;
        let secureCounter = 1;
        let secureMaxCounter = 28;
        marker1: while (i < methodsNumber) {
            secureCounter++;
            if (secureCounter > secureMaxCounter) {
                i = (methodsNumber + 4);
                secureCounter = (secureMaxCounter + 4);
                break marker1;
            }
            mKey = methodsKeys[i];
            m = charTypeDetectionMethods[mKey];
            //@ts-ignore
            isOfCharType = m.call(this, charCode);
            if (isOfCharType) {
                i = (methodsNumber + 4);
                secureCounter = (secureMaxCounter + 4);
                break marker1;
            }
            i++;
        }
        return charGroupType;
    }
    isNumLatin(charCode) {
        let retVal_didMatch = true;
        retVal_didMatch = this.matchesRanges(charCode, this.rangeNumLatin);
        return retVal_didMatch;
    }
    isAlphaNumLatin(charCode) {
        let retVal_didMatch = true;
        retVal_didMatch = this.matchesRanges(charCode, this.rangesANumLatin);
        return retVal_didMatch;
    }
    isUC(charCode) {
        let retVal_didMatch = true;
        retVal_didMatch = this.matchesRanges(charCode, this.rangesUC);
        return retVal_didMatch;
    }
    isLC(charCode) {
        let retVal_didMatch = true;
        retVal_didMatch = this.matchesRanges(charCode, this.rangesLC);
        return retVal_didMatch;
    }
}
exports.CaseConverter = CaseConverter;
_CaseConverter_symbolZero = new WeakMap(), _CaseConverter_symbolNine = new WeakMap(), _CaseConverter_symbolA = new WeakMap(), _CaseConverter_symbolZ = new WeakMap(), _CaseConverter_symbolAlower = new WeakMap(), _CaseConverter_symbolZlower = new WeakMap();
CaseConverter.clsInstance = false;
//# sourceMappingURL=CaseConverter.js.map