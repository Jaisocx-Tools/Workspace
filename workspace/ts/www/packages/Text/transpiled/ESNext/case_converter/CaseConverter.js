/**
 * Quick usage examples
 *
 * const cc = new CaseConverter();
 * cc.toCamel('  parse XML HTTP request  '); // => 'parseXmlHttpRequest'
 * cc.toSnake('Make HTTP/2 GREAT-again!');   // => 'make_http_2_great_again'
 * CaseConverter.constant('fooBarBaz');      // => 'FOO_BAR_BAZ'
 * CaseConverter.title('a tale of two cities'); // => 'A Tale of Two Cities'
*/
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
export var CapsOrSmallTransformVariants;
(function (CapsOrSmallTransformVariants) {
    CapsOrSmallTransformVariants[CapsOrSmallTransformVariants["caps"] = 1] = "caps";
    CapsOrSmallTransformVariants[CapsOrSmallTransformVariants["small"] = 2] = "small";
    CapsOrSmallTransformVariants[CapsOrSmallTransformVariants["firstCaps"] = 3] = "firstCaps";
    CapsOrSmallTransformVariants[CapsOrSmallTransformVariants["asIs"] = 4] = "asIs";
})(CapsOrSmallTransformVariants || (CapsOrSmallTransformVariants = {}));
// char type enum
export var CharTypeEnum;
(function (CharTypeEnum) {
    CharTypeEnum[CharTypeEnum["caps"] = 1] = "caps";
    CharTypeEnum[CharTypeEnum["small"] = 2] = "small";
    CharTypeEnum[CharTypeEnum["num"] = 3] = "num";
    CharTypeEnum[CharTypeEnum["omitted"] = 4] = "omitted";
})(CharTypeEnum || (CharTypeEnum = {}));
export class DataRecordMatches {
    groups_positions;
    prev_CharTypeEnum;
    current_CharTypeEnum;
    currentGroupOfCharType_charsAmount;
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
export class CaseConverter {
    _debug;
    #symbolZero;
    #symbolNine;
    #symbolA;
    #symbolZ;
    #symbolAlower;
    #symbolZlower;
    rangeNumLatin;
    rangesANumLatin;
    rangesUC;
    rangesLC;
    parseTimeGrouppingVariants;
    transformVariants;
    static clsInstance;
    constructor() {
        this._debug = false;
        this.#symbolZero = 48;
        this.#symbolNine = 57;
        this.#symbolA = 65;
        this.#symbolZ = 90;
        this.#symbolAlower = 97;
        this.#symbolZlower = 122;
        this.rangeNumLatin = [
            [this.#symbolZero, this.#symbolNine]
        ];
        this.rangesANumLatin = [
            [this.#symbolZero, this.#symbolNine],
            [this.#symbolA, this.#symbolZ],
            [this.#symbolAlower, this.#symbolZlower]
        ];
        this.rangesUC = [
            [this.#symbolA, this.#symbolZ]
        ];
        this.rangesLC = [
            [this.#symbolAlower, this.#symbolZlower]
        ];
        this.parseTimeGrouppingVariants = new Object();
        this.parseTimeGrouppingVariants.UcLcGroups = true;
        this.parseTimeGrouppingVariants.firstCapsGroups = true;
        this.parseTimeGrouppingVariants.numGrups = true;
        this.transformVariants = new Object();
        this.transformVariants.delimiter = "_";
        this.transformVariants.UcLcTransform = CapsOrSmallTransformVariants.asIs;
    }
    static getInstance() {
        if (CaseConverter.clsInstance === null) {
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
    static title(inText) {
        return CaseConverter.getInstance().toTitle(inText);
    }
    static sentence(inText) {
        return CaseConverter.getInstance().toSentence(inText);
    }
    static dot(inText) {
        return CaseConverter.getInstance().toDelimited(inText, ".", CapsOrSmallTransformVariants.small, CapsOrSmallTransformVariants.firstCaps);
    }
    static path(inText) {
        return CaseConverter.getInstance().toAsPath(inText);
    }
    static train(inText) {
        return CaseConverter.getInstance().toTrain(inText);
    }
    /** Instance methods */
    toCamel(inText) {
        return this.toDelimited(inText, "", CapsOrSmallTransformVariants.small, CapsOrSmallTransformVariants.firstCaps);
    }
    toPascal(inText) {
        return this.toDelimited(inText, "", CapsOrSmallTransformVariants.firstCaps, CapsOrSmallTransformVariants.firstCaps);
    }
    toSnake(inText) {
        return this.toDelimited(inText, "_", CapsOrSmallTransformVariants.small, CapsOrSmallTransformVariants.small);
    }
    toKebab(inText) {
        return this.toDelimited(inText, "-", CapsOrSmallTransformVariants.small, CapsOrSmallTransformVariants.small);
    }
    toConstant(inText) {
        return this.toDelimited(inText, "_", CapsOrSmallTransformVariants.caps, CapsOrSmallTransformVariants.caps);
    }
    toTitle(inText) {
        const SMALL = new Set([
            "a", "an", "and", "as", "at", "but", "by", "for", "in", "nor", "of", "on", "or", "per", "the", "to", "vs", "via"
        ]);
        const toks = this.parse(inText, this.parseTimeGrouppingVariants);
        return toks.map((t, i) => {
            const lower = t.toLowerCase();
            if (i !== 0 && i !== toks.length - 1 && SMALL.has(lower))
                return lower;
            return this.toFirstCap(t);
        }).join(" ");
    }
    toSentence(inText) {
        return this.toDelimited(inText, " ", CapsOrSmallTransformVariants.firstCaps, CapsOrSmallTransformVariants.small);
    }
    toTrain(inText) {
        return this.toDelimited(inText, "-", CapsOrSmallTransformVariants.firstCaps, CapsOrSmallTransformVariants.firstCaps);
    }
    toAsPath(inText) {
        return this.toDelimited(inText, "/", CapsOrSmallTransformVariants.small, CapsOrSmallTransformVariants.small);
    }
    toUC(inText) {
        let locText = inText;
        if ((!locText) || (locText.length === 0)) {
            return "";
        }
        let retVal_transformed = locText.toLowerCase();
        return retVal_transformed;
    }
    toFirstCap(inText) {
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
    toDelimited(inText, delimiter, capsOrSmallFirst_TransformVariants, capsOrSmallOther_TransformVariants) {
        let locParsedText = this.parse(inText, this.parseTimeGrouppingVariants);
        let transformationFunc = null;
        let inTransformFirstFunc = transformationFunc;
        let inTransformFunc = transformationFunc;
        let transformResolvingObject = {
            [CapsOrSmallTransformVariants.caps]: this.toUC,
            [CapsOrSmallTransformVariants.firstCaps]: this.toFirstCap,
            [CapsOrSmallTransformVariants.small]: this.toLC
        };
        inTransformFirstFunc = transformResolvingObject[capsOrSmallFirst_TransformVariants].bind(this);
        inTransformFunc = transformResolvingObject[capsOrSmallOther_TransformVariants].bind(this);
        // if ( capsOrSmallOther_TransformVariants === CapsOrSmallTransformVariants.caps ) {
        //   inTransformFunc = transformResolvingObject[ capsOrSmallOther_TransformVariants ].bind( this );
        // } else if ( capsOrSmallOther_TransformVariants === CapsOrSmallTransformVariants.firstCaps ) {
        //   inTransformFunc = this.toFirstCap.bind( this );
        // } else if ( capsOrSmallOther_TransformVariants === CapsOrSmallTransformVariants.small ) {
        //   inTransformFunc = this.toLC.bind( this );
        // }
        let locTransformedTexts = this.transform(locParsedText, inTransformFirstFunc, inTransformFunc);
        return locTransformedTexts.join(delimiter);
    }
    transform(inp, inTransformFirstFunc, inTransformFunc) {
        let locTextsArray = inp;
        let inpLength = inp.length;
        let retVal_transformed = new Array(inpLength);
        let locTextItemId = 0;
        let locTextItem_AsIs = "";
        let locItem_transformed = "";
        let secureCounter = 1;
        let secureMaxCounter = 124;
        let locIsTextItemFirst = true;
        let locTransformFunc = inTransformFirstFunc;
        marker1: while (locTextItemId < inpLength) {
            secureCounter++;
            if (secureCounter > secureMaxCounter) {
                locTextItemId = (inpLength + 4);
                secureCounter = (secureMaxCounter + 4);
                break marker1;
            }
            locTextItem_AsIs = locTextsArray[locTextItemId];
            if (locTransformFunc !== null) {
                locItem_transformed = locTransformFunc(locTextItem_AsIs);
                retVal_transformed[locTextItemId] = locItem_transformed;
            }
            else {
                retVal_transformed[locTextItemId] = locTextItem_AsIs;
            }
            if (locIsTextItemFirst === true) {
                locTransformFunc = inTransformFunc;
                locIsTextItemFirst = false;
            }
            locTextItemId++;
        }
        return retVal_transformed;
    }
    tasksParseTimeDataRecord(inOutDataRecord, charPos) {
        let groupCharsNumber = 0;
        let groupsMultidimPosArray = inOutDataRecord.groups_positions;
        let groupArraysLen = groupsMultidimPosArray.length;
        let groupArraysLastId = (groupArraysLen - 1);
        if (inOutDataRecord.prev_CharTypeEnum === inOutDataRecord.current_CharTypeEnum) {
            groupCharsNumber = inOutDataRecord.currentGroupOfCharType_charsAmount;
            inOutDataRecord.currentGroupOfCharType_charsAmount = (groupCharsNumber + 1);
            groupsMultidimPosArray[groupArraysLastId][1] = charPos;
        }
        else {
            inOutDataRecord.currentGroupOfCharType_charsAmount = 1;
            let groupPositionsArray = new Array(3);
            groupPositionsArray[0] = charPos;
            groupPositionsArray[1] = charPos;
            groupPositionsArray[2] = inOutDataRecord.current_CharTypeEnum;
            groupsMultidimPosArray.push(groupPositionsArray);
        }
    }
    parse(inp, _grouppingVariants) {
        let retVal_splitted = new Array();
        let parseTimeDataRecord = new DataRecordMatches();
        let bitsbuf = (new TextEncoder()).encode(inp);
        let inpLength = bitsbuf.byteLength;
        let bitsbufReplaced = new Uint8Array(inpLength);
        let aChar = 0;
        let charPos = 0;
        let isNum_aChar = true;
        let isAlphaNum_aChar = true;
        let is_UC_aChar = true;
        let is_LC_aChar = true;
        let char_BACKGROUND_SPACE = (" ").charCodeAt(0);
        let groupsMultidimPosArray = new Array(0);
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
            aChar = bitsbuf[charPos];
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
            // if ( this._debug === true ) {
            //   console.log (
            //     "charCodeAt",
            //     inp.charAt( charPos ),
            //     charPos,
            //     aChar,
            //     isAlphaNum_aChar
            //   );
            // }
            if (isAlphaNum_aChar === true) {
                //@ts-ignore
                bitsbufReplaced.set([aChar], charPos);
            }
            else {
                //@ts-ignore
                bitsbufReplaced.set([char_BACKGROUND_SPACE], charPos);
            }
            charPos++;
        }
        let buf = new Uint8Array(0);
        secureCounter = 1;
        // let backgroundSpacePos: number = 0;
        groupsMultidimPosArray = parseTimeDataRecord.groups_positions;
        let groupsArrayLen = groupsMultidimPosArray.length;
        let groupOfChars_Id = 0;
        let charPosStart = 0;
        let charPosFinish = 0;
        secureCounter = 1;
        secureMaxCounter = 62;
        let groupPositionsArray = new Array(3);
        marker2: while (groupOfChars_Id < groupsArrayLen) {
            // start secure check
            secureCounter++;
            if (secureCounter > secureMaxCounter) {
                groupOfChars_Id = (groupsArrayLen + 4);
                secureCounter = (secureMaxCounter + 4);
                break marker2;
            }
            // end secure check
            // get start and end pos of chars in the current group of similar chars
            groupPositionsArray = groupsMultidimPosArray[groupOfChars_Id];
            if (groupPositionsArray[3] === CharTypeEnum.omitted) {
                groupOfChars_Id++;
                continue marker2;
            }
            charPosStart = groupPositionsArray[0];
            charPosFinish = groupPositionsArray[1];
            // obtained array of chars of the current group
            buf = bitsbufReplaced.slice(charPosStart, (charPosFinish + 1));
            // pushed group of chars as text to the result array
            retVal_splitted.push((new TextDecoder()).decode(buf));
            groupOfChars_Id++;
        }
        // if ( this._debug === true ) {
        console.log({
            retVal_splitted,
            groupsMultidimPosArray
        });
        // }
        return retVal_splitted;
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
            if (this._debug === true) {
                console.log("matchingRanges", {
                    inRanges,
                    aRange,
                    aNum,
                    less: (aRange[0] <= aNum),
                    more: (aNum <= aRange[1]),
                    retVal_didMatch
                });
            }
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
//# sourceMappingURL=CaseConverter.js.map