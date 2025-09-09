
/**
 * Quick usage examples
 *
 * const cc = new CaseConverter();
 * cc.toCamel('  parse XML HTTP request  '); // => 'parseXmlHttpRequest'
 * cc.toSnake('Make HTTP/2 GREAT-again!');   // => 'make_http_2_great_again'
 * CaseConverter.constant('fooBarBaz');      // => 'FOO_BAR_BAZ'
 * CaseConverter.title('a tale of two cities'); // => 'A Tale of Two Cities'
*/


/**
 * CaseConverter — robust text case transformations in TypeScript
 *
 * Features
 * - Handles camelCase/PascalCase/snake_case/kebab-case/CONSTANT_CASE/Train-Case/dot.case/path/case
*/


// import {
//   ICapsOrSmallTransformVariants,
//   ICharTypeEnum,
//   IJoinDelimiterVariants,
//   IParseTimeGrouppingVariants,
//   ITransformVariants
// } from "./types/CaseConverterTypes.js";

import { DataRecordMatches } from "./types/DataRecordMatches.js";
import { CaseConverterConstants } from "./case_converter_constants/CaseConverterConstants.js";
import { CaseConverterInterface } from "./CaseConverterInterface.js";



export class CaseConverter implements CaseConverterInterface {

  _debug: boolean;

  #symbolZero: number;
  #symbolNine: number;
  #symbolA: number;
  #symbolZ: number;
  #symbolAlower: number;
  #symbolZlower: number;

  protected rangeNumLatin: number[][];
  protected rangesANumLatin: number[][];
  protected rangesUC: number[][];
  protected rangesLC: number[][];

  static clsInstance: CaseConverterInterface|false = false;



  constructor() {
    this._debug = false;


    this.#symbolZero = 48;
    this.#symbolNine = 57;
    this.#symbolA = 65;
    this.#symbolZ = 90;
    this.#symbolAlower = 97;
    this.#symbolZlower = 122;

    this.rangeNumLatin = [
      [ this.#symbolZero, this.#symbolNine ]
    ];

    this.rangesANumLatin = [
      [ this.#symbolZero, this.#symbolNine ],
      [ this.#symbolA, this.#symbolZ ],
      [ this.#symbolAlower, this.#symbolZlower ]
    ];

    this.rangesUC = [
      [ this.#symbolA, this.#symbolZ ]
    ];

    this.rangesLC = [
      [ this.#symbolAlower, this.#symbolZlower ]
    ];

  }



  public static getInstance(): CaseConverterInterface {
    if ( CaseConverter.clsInstance === false ) {
      CaseConverter.clsInstance = new CaseConverter();
    }


    return CaseConverter.clsInstance;
  }



  public setDebug( inDebug: boolean ): CaseConverterInterface {
    this._debug = inDebug;


    return this;
  }


  /** Core public API (static convenience) */



  static camel( inText: string ): string {
    return CaseConverter.getInstance().toCamel( inText );
  }



  static pascal( inText: string ): string {
    return CaseConverter.getInstance().toPascal( inText );
  }



  static snake( inText: string ): string {
    return CaseConverter.getInstance().toSnake( inText );
  }



  static kebab( inText: string ): string {
    return CaseConverter.getInstance().toKebab( inText );
  }



  static constant( inText: string ): string {
    return CaseConverter.getInstance().toConstant( inText );
  }


  // static title( inText: string ): string {
  //   return CaseConverter.getInstance().toTitle( inText );
  // }
  static sentence( inText: string ): string {
    return CaseConverter.getInstance().toSentence( inText );
  }



  static dot( inText: string ): string {
    return CaseConverter.getInstance().toDelimited (
      inText,
      ".",
      CaseConverterConstants.CapsOrSmallTransformVariants.small,
      CaseConverterConstants.CapsOrSmallTransformVariants.small,
      CaseConverterConstants.JoinDelimiterVariants.everyGroup
    );
  }



  static path( inText: string ): string {
    return CaseConverter.getInstance().toAsPath( inText );
  }



  static train( inText: string ): string {
    return CaseConverter.getInstance().toTrain( inText );
  }


  /** Instance methods */



  toCamel( inText: string ): string {
    return this.toDelimited (
      inText,
      "",
      CaseConverterConstants.CapsOrSmallTransformVariants.small,
      CaseConverterConstants.CapsOrSmallTransformVariants.firstCapsAndSmall,
      CaseConverterConstants.JoinDelimiterVariants.delimitersReplaced
    );

  }



  toPascal( inText: string ): string {
    return this.toDelimited (
      inText,
      "",
      CaseConverterConstants.CapsOrSmallTransformVariants.firstCapsAndSmall,
      CaseConverterConstants.CapsOrSmallTransformVariants.firstCapsAndSmall,
      CaseConverterConstants.JoinDelimiterVariants.delimitersReplaced
    );

  }



  toSnake( inText: string ): string {
    return this.toDelimited (
      inText,
      "_",
      CaseConverterConstants.CapsOrSmallTransformVariants.small,
      CaseConverterConstants.CapsOrSmallTransformVariants.small,
      CaseConverterConstants.JoinDelimiterVariants.everyGroup
    );

  }



  toKebab( inText: string ): string {
    return this.toDelimited (
      inText,
      "-",
      CaseConverterConstants.CapsOrSmallTransformVariants.small,
      CaseConverterConstants.CapsOrSmallTransformVariants.small,
      CaseConverterConstants.JoinDelimiterVariants.beforeNumbersNoDelimiter
    );

  }



  toConstant( inText: string ): string {
    return this.toDelimited (
      inText,
      "_",
      CaseConverterConstants.CapsOrSmallTransformVariants.caps,
      CaseConverterConstants.CapsOrSmallTransformVariants.caps,
      CaseConverterConstants.JoinDelimiterVariants.everyGroup
    );

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
  toSentence ( inText: string ): string {
    return this.toDelimited (
      inText,
      " ",
      CaseConverterConstants.CapsOrSmallTransformVariants.firstCapsAndSmall,
      CaseConverterConstants.CapsOrSmallTransformVariants.small,
      CaseConverterConstants.JoinDelimiterVariants.everyGroup
    );

  }



  toTrain ( inText: string ): string {
    return this.toDelimited (
      inText,
      "-",
      CaseConverterConstants.CapsOrSmallTransformVariants.firstCapsAndSmall,
      CaseConverterConstants.CapsOrSmallTransformVariants.firstCapsAndSmall,
      CaseConverterConstants.JoinDelimiterVariants.everyGroup
    );
  }



  toAsPath ( inText: string ): string {
    return this.toDelimited (
      inText,
      "/",
      CaseConverterConstants.CapsOrSmallTransformVariants.small,
      CaseConverterConstants.CapsOrSmallTransformVariants.small,
      CaseConverterConstants.JoinDelimiterVariants.delimitersReplaced
    );

  }



  toUC ( inText: string ): string {
    let locText: string = inText;

    if ( (!locText) || ( locText.length === 0 ) ) {
      return "";
    }

    let retVal_transformed: string = locText.toUpperCase();


    return retVal_transformed;
  }



  toFirstCapsAndSmall ( inText: string ): string {
    let locText: string = inText;

    let locTextLC: string = this.toLC ( locText );
    let retVal_transformed: string = this.toFirstCapsAsIs( locTextLC );


    return retVal_transformed;
  }



  toFirstCapsAsIs ( inText: string ): string {
    let locText: string = inText;

    if ( (!locText) || ( locText.length === 0 ) ) {
      return "";
    }

    let locTextLen: number = locText.length;

    let firstCharCap: string = locText.charAt(0).toUpperCase();
    let locTextAfterFirstChar: string = locText.slice( 1, locTextLen );

    let retVal_transformed: string = ( firstCharCap + locTextAfterFirstChar );


    return retVal_transformed;
  }



  toLC ( inText: string ): string {
    let locText: string = inText;

    if ( (!locText) || ( locText.length === 0 ) ) {
      return "";
    }

    let retVal_transformed: string = locText.toLowerCase();


    return retVal_transformed;
  }



  toDelimited (
    inText: string,
    delimiter: string,
    capsOrSmallFirst_TransformVariants: number,
    capsOrSmallOther_TransformVariants: number,
    joinDelimiterVariant: number
  ): string {
    let locBitsbufBeingTransformed: Uint8Array = ( new TextEncoder() ).encode ( inText );

    let locParsedDataRecords: DataRecordMatches = this.parseBitsbuf (
      locBitsbufBeingTransformed
    );

    let locTransformedDataRecords: DataRecordMatches = this.transformDataRecords (
      locParsedDataRecords,
      joinDelimiterVariant
    );


    // console.log( { locTransformedDataRecords } );
    let locTransformFirstFunc:       CallableFunction|false = false;
    let locTransformFunc:            CallableFunction|false = false;

    let transformResolvingObject: any = {
      [CaseConverterConstants.CapsOrSmallTransformVariants.caps]: this.toUC,
      [CaseConverterConstants.CapsOrSmallTransformVariants.small]: this.toLC,
      [CaseConverterConstants.CapsOrSmallTransformVariants.firstCapsAndSmall]: this.toFirstCapsAndSmall,
      [CaseConverterConstants.CapsOrSmallTransformVariants.firstCapsAsIs]: this.toFirstCapsAsIs,
      [CaseConverterConstants.CapsOrSmallTransformVariants.asIs]: false
    };

    let valueTransformFirst_ResolvingObject: CallableFunction|false = false;
    let valueTransformOther_ResolvingObject: CallableFunction|false = false;

    valueTransformFirst_ResolvingObject = transformResolvingObject[ capsOrSmallFirst_TransformVariants ];

    if ( valueTransformFirst_ResolvingObject !== false ) {
      locTransformFirstFunc = valueTransformFirst_ResolvingObject.bind( this );
    }


    valueTransformOther_ResolvingObject = transformResolvingObject[ capsOrSmallOther_TransformVariants ];

    if ( valueTransformOther_ResolvingObject !== false ) {
      locTransformFunc = valueTransformOther_ResolvingObject.bind( this );
    }


    let locTransformedTexts: string[] = this.transformBitsbuf (
      locBitsbufBeingTransformed,
      locTransformedDataRecords,
      delimiter,
      locTransformFirstFunc,
      locTransformFunc
    );


    let retValTransformedText: string = locTransformedTexts.join( "" );

    if ( this._debug === true ) {
      console.log( { "in": inText,
        "ret": retValTransformedText } );
    }


    return retValTransformedText;
  }



  transformBitsbuf (
    inMarkedBitsbuf: Uint8Array,
    afterTransform_parseTimeDataRecord: DataRecordMatches,
    delimiter: string,
    inTransformFirstFunc: CallableFunction|false,
    inTransformFunc: CallableFunction|false
  ): string[] {
    let retVal_transformed: string[] = new Array() as string[];

    let locTextDecoder: TextDecoder = new TextDecoder();

    let locTmpBitsbuf: Uint8Array = new Uint8Array(0);

    let groupsMultidimPosArray: number[][] = afterTransform_parseTimeDataRecord.groups_positions;
    let groupsArrayLen: number = groupsMultidimPosArray.length;
    let locTmpGroupRanges: number[] = new Array(3) as number[];
    let locCurrentCharsGroupType:  number = 0;
    let groupOfChars_Id: number = 0;

    let charPosStart: number = 0;
    let charPosFinish: number = 0;

    let secureCounter: number    = 1;
    let secureMaxCounter: number = 62;

    let locIsDelimiter: boolean = ( ( delimiter !== undefined ) && ( delimiter !== null ) && ( delimiter.length !== 0 ) );

    let locTextItem_AsIs: string = "";
    let locTextItem_Transformed: string = "";

    let locTransformFunc: CallableFunction|false = inTransformFirstFunc;
    let locIsTextItemFirst: boolean = true;

    markerTB: while ( groupOfChars_Id < groupsArrayLen ) {

      // start secure check
      secureCounter++;

      if ( secureCounter > secureMaxCounter ) {
        groupOfChars_Id = ( groupsArrayLen + 4 );
        secureCounter = ( secureMaxCounter + 4 );

        break markerTB;
      }


      // end secure check
      // get start and end pos of chars in the current group of similar chars
      locTmpGroupRanges = groupsMultidimPosArray[ groupOfChars_Id ];
      locCurrentCharsGroupType = locTmpGroupRanges[2];

      if ( locCurrentCharsGroupType === CaseConverterConstants.CharTypeEnum.delimiter ) {
        if ( ( locIsDelimiter === true ) && ( groupOfChars_Id !== 0 )  ) {
          retVal_transformed.push( delimiter );
        }

        groupOfChars_Id++;
        continue markerTB;

      }



      charPosStart  = locTmpGroupRanges[0];
      charPosFinish = locTmpGroupRanges[1];


      // obtained array of chars of the current group
      locTmpBitsbuf = inMarkedBitsbuf.slice (
        charPosStart, (
          charPosFinish + 1
        ) );


      // converted to string
      locTextItem_AsIs = locTextDecoder.decode( locTmpBitsbuf );


      // pushed group of chars as text to the result array
      if ( locTransformFunc === false ) {
        retVal_transformed.push( locTextItem_AsIs );

      } else {
        locTextItem_Transformed = locTransformFunc( locTextItem_AsIs );
        retVal_transformed.push( locTextItem_Transformed );

      }

      if ( locIsTextItemFirst === true ) {
        locTransformFunc = inTransformFunc;
        locIsTextItemFirst = false;
      }

      groupOfChars_Id++;

    }

    if ( this._debug === true ) {
      console.log (
        {
          retVal_transformed,
          groupsMultidimPosArray
        }
      );

    }


    return retVal_transformed;
  }



  transformDataRecords (
    inParseTimeDataRecord: DataRecordMatches,
    joinDelimiterVariant: number
  ): DataRecordMatches {
    let transformedDataRecods:     DataRecordMatches = new DataRecordMatches();

    let groupsMultidimPosArray:    number[][] = inParseTimeDataRecord.groups_positions;
    let groupsArrayLen:            number = groupsMultidimPosArray.length;

    let locTmpGroupRanges:         number[] = new Array(3) as number[];
    let groupOfChars_Id:           number = 0;
    let previousGroupOfChars_Id:   number = 0;


    let nextGroupOfChars_Id:       number = 0;
    let locCurrentCharsGroupType:  number = 0;
    let locPreviousCharsGroupType: number = 0;


    let locNextCharsGroupType:     number = 0;

    transformedDataRecods.groups_positions = new Array() as number[][];
    let transformedGroupsMultidimPosArray: number[][] = transformedDataRecods.groups_positions;

    let locTmp_ofTypeDelimiter_TransformedGroupRanges: number[] = new Array(3) as number[];
    let locTmp_ofTypeCurrent_TransformedGroupRanges: number[] = new Array(3) as number[];

    let secureCounter: number    = 1;
    let secureMaxCounter: number = 62;


    locTmp_ofTypeDelimiter_TransformedGroupRanges[0] = (-1);
    locTmp_ofTypeDelimiter_TransformedGroupRanges[1] = (-1);
    locTmp_ofTypeDelimiter_TransformedGroupRanges[2] = CaseConverterConstants.CharTypeEnum.delimiter;

    markerJ: while ( groupOfChars_Id < groupsArrayLen ) {

      // start secure check
      secureCounter++;

      if ( secureCounter > secureMaxCounter ) {
        groupOfChars_Id = ( groupsArrayLen + 4 );
        secureCounter = ( secureMaxCounter + 4 );

        break markerJ;
      }



      locTmpGroupRanges        = groupsMultidimPosArray[ groupOfChars_Id ];
      previousGroupOfChars_Id  = ( groupOfChars_Id - 1 );
      nextGroupOfChars_Id      = ( groupOfChars_Id + 1 );

      locCurrentCharsGroupType = locTmpGroupRanges[2];

      if ( groupOfChars_Id !== 0 ) {
        locPreviousCharsGroupType = groupsMultidimPosArray[ previousGroupOfChars_Id ][2];
      } else {
        locPreviousCharsGroupType = 0;
      }

      if ( nextGroupOfChars_Id < groupsArrayLen ) {
        locNextCharsGroupType = groupsMultidimPosArray[ nextGroupOfChars_Id ][2];
      } else {
        locNextCharsGroupType = 0;
      }
      locTmp_ofTypeCurrent_TransformedGroupRanges = [ ...locTmpGroupRanges ];

      if (
        ( locPreviousCharsGroupType === CaseConverterConstants.CharTypeEnum.omitted ) &&
        ( locCurrentCharsGroupType  === CaseConverterConstants.CharTypeEnum.omitted )
      ) {
        groupOfChars_Id++;
        continue markerJ;
      }

      if ( locCurrentCharsGroupType === CaseConverterConstants.CharTypeEnum.omitted ) {
        transformedGroupsMultidimPosArray.push ( locTmp_ofTypeDelimiter_TransformedGroupRanges );
        groupOfChars_Id++;
        continue markerJ;
      }

      let transformedArrayLength: number = transformedGroupsMultidimPosArray.length;
      let transformedCharsGroup_DataRecord_lastId: number = ( transformedArrayLength - 1 );
      let lastTransformedCharsGroup_charType: number = 0;

      if ( transformedCharsGroup_DataRecord_lastId >= 0 ) {
        lastTransformedCharsGroup_charType = transformedGroupsMultidimPosArray[ transformedCharsGroup_DataRecord_lastId ][2];
      }

      if (
        ( locCurrentCharsGroupType === CaseConverterConstants.CharTypeEnum.caps ) &&
          ( locNextCharsGroupType === CaseConverterConstants.CharTypeEnum.small )
      ) {
        let currentCapsGroupStartPos: number = locTmp_ofTypeCurrent_TransformedGroupRanges[0];
        let currentCapsGroupEndPos: number = locTmp_ofTypeCurrent_TransformedGroupRanges[1];
        let currentCapsGroupCharsNumber: number = ( ( currentCapsGroupEndPos - currentCapsGroupStartPos ) + 1 );

        let nextCharsGroup: number[] = groupsMultidimPosArray[ nextGroupOfChars_Id ];
        let nextSmallGroupStartPos: number = nextCharsGroup[0];

        nextSmallGroupStartPos--;
        groupsMultidimPosArray[ nextGroupOfChars_Id ][0] = nextSmallGroupStartPos;

        if ( currentCapsGroupCharsNumber === 1 ) {

          // if ( locPreviousCharsGroupType === CaseConverterConstants.CharTypeEnum.omitted ) {
          // }
          // else {
          // }
          groupsMultidimPosArray[ groupOfChars_Id ][2] = CaseConverterConstants.CharTypeEnum.omitted;

        } else {
          currentCapsGroupEndPos--;
          locTmp_ofTypeCurrent_TransformedGroupRanges[1] = currentCapsGroupEndPos;

          transformedGroupsMultidimPosArray.push ( locTmp_ofTypeCurrent_TransformedGroupRanges );

        }

        groupOfChars_Id++;
        continue markerJ;

      }

      transformedCharsGroup_DataRecord_lastId = ( transformedArrayLength - 1 );

      if ( transformedCharsGroup_DataRecord_lastId >= 0 ) {
        lastTransformedCharsGroup_charType = transformedGroupsMultidimPosArray[ transformedCharsGroup_DataRecord_lastId ][2];
      }

      if ( ( locPreviousCharsGroupType === CaseConverterConstants.CharTypeEnum.omitted ) && ( lastTransformedCharsGroup_charType === CaseConverterConstants.CharTypeEnum.delimiter ) ) {
        transformedGroupsMultidimPosArray.push ( locTmp_ofTypeCurrent_TransformedGroupRanges );

        groupOfChars_Id++;
        continue markerJ;
      }

      if ( joinDelimiterVariant === CaseConverterConstants.JoinDelimiterVariants.everyGroup ) {
        transformedGroupsMultidimPosArray.push ( locTmp_ofTypeDelimiter_TransformedGroupRanges );

      } else if ( joinDelimiterVariant === CaseConverterConstants.JoinDelimiterVariants.beforeNumbersNoDelimiter ) {
        if ( locCurrentCharsGroupType !== CaseConverterConstants.CharTypeEnum.num ) {
          transformedGroupsMultidimPosArray.push ( locTmp_ofTypeDelimiter_TransformedGroupRanges );
        }

      } else if ( joinDelimiterVariant === CaseConverterConstants.JoinDelimiterVariants.afterNumbersNoDelimiter ) {
        if (
          ( locPreviousCharsGroupType !== CaseConverterConstants.CharTypeEnum.num )
        ) {
          transformedGroupsMultidimPosArray.push ( locTmp_ofTypeDelimiter_TransformedGroupRanges );
        }

      } else if ( joinDelimiterVariant === CaseConverterConstants.JoinDelimiterVariants.neverNumbersDelimiter ) {
        if ( ( locPreviousCharsGroupType !== CaseConverterConstants.CharTypeEnum.num ) && ( locCurrentCharsGroupType !== CaseConverterConstants.CharTypeEnum.num ) ) {
          transformedGroupsMultidimPosArray.push ( locTmp_ofTypeDelimiter_TransformedGroupRanges );
        }

      }

      transformedGroupsMultidimPosArray.push ( locTmp_ofTypeCurrent_TransformedGroupRanges );

      groupOfChars_Id++;

    }


    return transformedDataRecods;

  }



  parseBitsbuf (
    inBitsbuf: Uint8Array
  ): DataRecordMatches {

    // let retVal_splitted: string[] = new Array() as string[];
    let parseTimeDataRecord: DataRecordMatches = new DataRecordMatches();


    // let bitsbuf: Uint8Array = ( new TextEncoder() ).encode ( inp );
    let inpLength: number = inBitsbuf.byteLength;


    // let bitsbufReplaced: Uint8Array = new Uint8Array( inpLength );
    let aChar: number = 0;
    let charPos: number = 0;

    let isNum_aChar: boolean = true;
    let isAlphaNum_aChar: boolean = true;
    let is_UC_aChar: boolean = true;
    let is_LC_aChar: boolean = true;


    // let char_BACKGROUND_SPACE: number = (" ").charCodeAt(0);
    // let groupsMultidimPosArray: number[][] = new Array(0) as number[][];
    // let groupPositionsArray: number[] = new Array(3) as number[];
    let secureCounter: number = 1;
    let secureMaxCounter: number = 256;

    marker1: while ( charPos < inpLength ) {
      secureCounter++;

      if ( secureCounter > secureMaxCounter ) {
        charPos = ( inpLength + 128 );
        secureCounter = ( secureMaxCounter + 128 );

        break marker1;
      }



      parseTimeDataRecord.prev_CharTypeEnum = parseTimeDataRecord.current_CharTypeEnum;
      parseTimeDataRecord.current_CharTypeEnum = 0;



      aChar = inBitsbuf[ charPos ];

      isAlphaNum_aChar = this.isAlphaNumLatin ( aChar );

      isNum_aChar      = this.isNumLatin ( aChar );
      is_UC_aChar      = this.isUC ( aChar );
      is_LC_aChar      = this.isLC ( aChar );


      // isAlphaNum_aChar = ( parseTimeDataRecord.isNumber || parseTimeDataRecord.isCaps || parseTimeDataRecord.isSmall );
      if ( isNum_aChar ) {
        parseTimeDataRecord.current_CharTypeEnum = CaseConverterConstants.CharTypeEnum.num;
      } else if ( is_UC_aChar ) {
        parseTimeDataRecord.current_CharTypeEnum = CaseConverterConstants.CharTypeEnum.caps;
      } else if ( is_LC_aChar ) {
        parseTimeDataRecord.current_CharTypeEnum = CaseConverterConstants.CharTypeEnum.small;
      } else if ( isAlphaNum_aChar === false ) {
        parseTimeDataRecord.current_CharTypeEnum = CaseConverterConstants.CharTypeEnum.omitted;
      }

      this.tasksParseTimeDataRecord ( parseTimeDataRecord, charPos );

      charPos++;
    }


    return parseTimeDataRecord;

  }



  tasksParseTimeDataRecord (
    inOutDataRecord: DataRecordMatches,
    charPos: number
  ): void {
    let groupCharsNumber: number = 0;

    let groupsMultidimPosArray: number[][] = inOutDataRecord.groups_positions;
    let groupPositionsArray: number[] = new Array(3) as number[];
    let groupArraysLen: number = groupsMultidimPosArray.length;
    let groupArraysLastId: number = ( groupArraysLen - 1 );

    if ( inOutDataRecord.prev_CharTypeEnum === inOutDataRecord.current_CharTypeEnum ) {
      groupCharsNumber = inOutDataRecord.currentGroupOfCharType_charsAmount;
      inOutDataRecord.currentGroupOfCharType_charsAmount = ( groupCharsNumber + 1 );

      groupsMultidimPosArray[ groupArraysLastId ][1] = charPos;

    } else {
      inOutDataRecord.currentGroupOfCharType_charsAmount = 1;

      groupPositionsArray[0] = charPos;
      groupPositionsArray[1] = charPos;
      groupPositionsArray[2] = inOutDataRecord.current_CharTypeEnum;

      groupsMultidimPosArray.push ( groupPositionsArray );

    }

  }



  matchesRanges (
    aNum: number,
    inRanges: number[][]
  ): boolean {
    let retVal_didMatch: boolean = true;

    let numRanges: number = inRanges.length;
    let rangeId: number = 0;
    let aRange: number[] = new Array(0) as number[];

    let secureCounter: number = 1;
    let secureMaxCounter: number = 28;

    marker1: while ( rangeId < numRanges ) {
      secureCounter++;

      if ( secureCounter > secureMaxCounter ) {
        rangeId = ( numRanges + 128 );
        secureCounter = ( secureMaxCounter + 128 );

        break marker1;
      }

      aRange = inRanges[rangeId];

      retVal_didMatch = ( ( aRange[0] <= aNum ) && ( aNum <= aRange[1] ) );


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
      if ( retVal_didMatch === true ) {
        rangeId = ( numRanges + 128 );
        secureCounter = ( secureMaxCounter + 128 );

        break marker1;
      }

      rangeId++;
    }


    return retVal_didMatch;
  }



  getCharTypeEnum( charCode: number ): number {
    let charGroupType: number = 0;
    let isOfCharType: boolean = true;

    let charTypeDetectionMethods: any = {
      [CaseConverterConstants.CharTypeEnum.caps]:    this.isUC,
      [CaseConverterConstants.CharTypeEnum.small]:   this.isLC,
      [CaseConverterConstants.CharTypeEnum.num]:     this.isNumLatin,
      [CaseConverterConstants.CharTypeEnum.omitted]: this.isAlphaNumLatin
    };

    let i: number = 0;
    let mKey: any = 0;
    let m: CallableFunction|null = null;
    let methodsKeys: any = Object.keys ( charTypeDetectionMethods );
    let methodsNumber: number = methodsKeys.length;


    let secureCounter: number = 1;
    let secureMaxCounter: number = 28;

    marker1: while ( i < methodsNumber ) {
      secureCounter++;

      if ( secureCounter > secureMaxCounter ) {
        i = ( methodsNumber + 4 );
        secureCounter = ( secureMaxCounter + 4 );

        break marker1;
      }



      mKey = methodsKeys[i];
      m = charTypeDetectionMethods[ mKey ];


      //@ts-ignore
      isOfCharType = m.call( this, charCode );

      if ( isOfCharType ) {
        i = ( methodsNumber + 4 );
        secureCounter = ( secureMaxCounter + 4 );

        break marker1;
      }

      i++;
    }


    return charGroupType;

  }



  isNumLatin ( charCode: number ): boolean {
    let retVal_didMatch: boolean = true;

    retVal_didMatch = this.matchesRanges (
      charCode,
      this.rangeNumLatin
    );


    return retVal_didMatch;
  }



  isAlphaNumLatin ( charCode: number ): boolean {
    let retVal_didMatch: boolean = true;

    retVal_didMatch = this.matchesRanges (
      charCode,
      this.rangesANumLatin
    );


    return retVal_didMatch;
  }



  isUC ( charCode: number ): boolean {
    let retVal_didMatch: boolean = true;

    retVal_didMatch = this.matchesRanges (
      charCode,
      this.rangesUC
    );


    return retVal_didMatch;
  }



  isLC ( charCode: number ): boolean {
    let retVal_didMatch: boolean = true;

    retVal_didMatch = this.matchesRanges (
      charCode,
      this.rangesLC
    );


    return retVal_didMatch;
  }

}



