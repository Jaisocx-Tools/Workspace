
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

import { CaseConverterInterface } from "./CaseConverterInterface.js";


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


export enum CapsOrSmallTransformVariants {
  caps = 1,
  small = 2,
  firstCaps = 3,
  asIs = 4
}


// char type enum
export enum CharTypeEnum {
  caps = 1,
  small = 2,
  num = 3,
  omitted = 4
}



export type ParseTimeGrouppingVariants = {
  numGrups: boolean,
  UcLcGroups: boolean,
  firstCapsGroups: boolean
};

export type TransformVariants = {
  delimiter: string,
  UcLcTransform: number
};



export class DataRecordMatches {

  groups_positions:            number[][];

  prev_CharTypeEnum:           number;
  current_CharTypeEnum:        number;

  currentGroupOfCharType_charsAmount: number;


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
    this.groups_positions          = new Array() as number[][];

    this.prev_CharTypeEnum         = 0;
    this.current_CharTypeEnum      = 0;

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

  protected parseTimeGrouppingVariants: ParseTimeGrouppingVariants;
  protected transformVariants: TransformVariants;



  static clsInstance: CaseConverterInterface;



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

    this.parseTimeGrouppingVariants = new Object() as ParseTimeGrouppingVariants;
    this.parseTimeGrouppingVariants.UcLcGroups      = true;
    this.parseTimeGrouppingVariants.firstCapsGroups = true;
    this.parseTimeGrouppingVariants.numGrups        = true;


    this.transformVariants = new Object() as TransformVariants;
    this.transformVariants.delimiter = "_";
    this.transformVariants.UcLcTransform = CapsOrSmallTransformVariants.asIs;

  }



  public static getInstance(): CaseConverterInterface {

    if ( CaseConverter.clsInstance === null ) {
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



  static title( inText: string ): string {
    return CaseConverter.getInstance().toTitle( inText );
  }



  static sentence( inText: string ): string {
    return CaseConverter.getInstance().toSentence( inText );
  }



  static dot( inText: string ): string {
    return CaseConverter.getInstance().toDelimited (
      inText,
      ".",
      CapsOrSmallTransformVariants.small,
      CapsOrSmallTransformVariants.firstCaps
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
      CapsOrSmallTransformVariants.small,
      CapsOrSmallTransformVariants.firstCaps
    );

  }



  toPascal( inText: string ): string {
    return this.toDelimited (
      inText,
      "",
      CapsOrSmallTransformVariants.firstCaps,
      CapsOrSmallTransformVariants.firstCaps
    );

  }



  toSnake( inText: string ): string {
    return this.toDelimited (
      inText,
      "_",
      CapsOrSmallTransformVariants.small,
      CapsOrSmallTransformVariants.small
    );

  }



  toKebab( inText: string ): string {
    return this.toDelimited (
      inText,
      "-",
      CapsOrSmallTransformVariants.small,
      CapsOrSmallTransformVariants.small
    );

  }



  toConstant( inText: string ): string {
    return this.toDelimited (
      inText,
      "_",
      CapsOrSmallTransformVariants.caps,
      CapsOrSmallTransformVariants.caps
    );

  }



  toTitle ( inText: string ): string {
    const SMALL = new Set([
      "a","an","and","as","at","but","by","for","in","nor","of","on","or","per","the","to","vs","via"
    ]);
    const toks = this.parse(
      inText,
      this.parseTimeGrouppingVariants
    );


    return toks.map((t, i) => {
      const lower = t.toLowerCase();

      if (i !== 0 && i !== toks.length - 1 && SMALL.has(lower))


        return lower;


      return this.toFirstCap(t);
    }).join(" ");
  }



  toSentence ( inText: string ): string {
    return this.toDelimited (
      inText,
      " ",
      CapsOrSmallTransformVariants.firstCaps,
      CapsOrSmallTransformVariants.small
    );

  }



  toTrain ( inText: string ): string {
    return this.toDelimited (
      inText,
      "-",
      CapsOrSmallTransformVariants.firstCaps,
      CapsOrSmallTransformVariants.firstCaps
    );
  }



  toAsPath ( inText: string ): string {
    return this.toDelimited (
      inText,
      "/",
      CapsOrSmallTransformVariants.small,
      CapsOrSmallTransformVariants.small
    );

  }



  toUC ( inText: string ): string {
    let locText: string = inText;

    if ( (!locText) || ( locText.length === 0 ) ) {
      return "";
    }

    let retVal_transformed: string = locText.toLowerCase();


    return retVal_transformed;
  }



  toFirstCap ( inText: string ): string {
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
    capsOrSmallOther_TransformVariants: number
  ): string {

    let locParsedText: string[] = this.parse (
      inText,
      this.parseTimeGrouppingVariants
    );

    let transformationFunc: CallableFunction|null = null;

    let inTransformFirstFunc: CallableFunction|null = transformationFunc;
    let inTransformFunc: CallableFunction|null = transformationFunc;

    let transformResolvingObject: any = {
      [CapsOrSmallTransformVariants.caps]: this.toUC,
      [CapsOrSmallTransformVariants.firstCaps]: this.toFirstCap,
      [CapsOrSmallTransformVariants.small]: this.toLC
    };

    inTransformFirstFunc = transformResolvingObject[ capsOrSmallFirst_TransformVariants ].bind( this );
    inTransformFunc      = transformResolvingObject[ capsOrSmallOther_TransformVariants ].bind( this );


    // if ( capsOrSmallOther_TransformVariants === CapsOrSmallTransformVariants.caps ) {
    //   inTransformFunc = transformResolvingObject[ capsOrSmallOther_TransformVariants ].bind( this );
    // } else if ( capsOrSmallOther_TransformVariants === CapsOrSmallTransformVariants.firstCaps ) {
    //   inTransformFunc = this.toFirstCap.bind( this );
    // } else if ( capsOrSmallOther_TransformVariants === CapsOrSmallTransformVariants.small ) {
    //   inTransformFunc = this.toLC.bind( this );
    // }
    let locTransformedTexts: string[] = this.transform (
      locParsedText,
      inTransformFirstFunc,
      inTransformFunc
    );


    return locTransformedTexts.join( delimiter );
  }



  transform (
    inp: string[],
    inTransformFirstFunc: CallableFunction|null,
    inTransformFunc: CallableFunction|null
  ): string[] {

    let locTextsArray: string[] = inp;

    let inpLength: number = inp.length;
    let retVal_transformed: string[] = new Array( inpLength ) as string[];

    let locTextItemId: number = 0;
    let locTextItem_AsIs: string = "";
    let locItem_transformed: string = "";

    let secureCounter: number = 1;
    let secureMaxCounter: number = 124;

    let locIsTextItemFirst: boolean = true;
    let locTransformFunc: CallableFunction|null = inTransformFirstFunc;



    marker1: while ( locTextItemId < inpLength ) {
      secureCounter++;

      if ( secureCounter > secureMaxCounter ) {
        locTextItemId = ( inpLength + 4 );
        secureCounter = ( secureMaxCounter + 4 );

        break marker1;
      }

      locTextItem_AsIs = locTextsArray[ locTextItemId ];

      if ( locTransformFunc !== null ) {
        locItem_transformed = locTransformFunc ( locTextItem_AsIs );
        retVal_transformed[ locTextItemId ] = locItem_transformed;
      } else {
        retVal_transformed[ locTextItemId ] = locTextItem_AsIs;
      }

      if ( locIsTextItemFirst === true ) {
        locTransformFunc = inTransformFunc;
        locIsTextItemFirst = false;
      }


      locTextItemId++;
    }


    return retVal_transformed;
  }



  transformStrategyHandler (
    markedBitsbuf: Uint8Array,
    parseTimeDataRecord: DataRecordMatches
  ) {

  }



  parse (
    inp: string,
    _grouppingVariants: ParseTimeGrouppingVariants
  ): DataRecordMatches {
    let retVal_splitted: string[] = new Array() as string[];

    let parseTimeDataRecord: DataRecordMatches = new DataRecordMatches();



    let bitsbuf: Uint8Array = ( new TextEncoder() ).encode ( inp );
    let inpLength: number = bitsbuf.byteLength;
    let bitsbufReplaced: Uint8Array = new Uint8Array( inpLength );

    let aChar: number = 0;
    let charPos: number = 0;

    let isNum_aChar: boolean = true;
    let isAlphaNum_aChar: boolean = true;
    let is_UC_aChar: boolean = true;
    let is_LC_aChar: boolean = true;

    let char_BACKGROUND_SPACE: number = (" ").charCodeAt(0);

    let groupsMultidimPosArray: number[][] = new Array(0) as number[][];
    let groupPositionsArray: number[] = new Array(3) as number[];



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



      aChar = bitsbuf[ charPos ];

      isAlphaNum_aChar = this.isAlphaNumLatin ( aChar );

      isNum_aChar      = this.isNumLatin ( aChar );
      is_UC_aChar      = this.isUC ( aChar );
      is_LC_aChar      = this.isLC ( aChar );


      // isAlphaNum_aChar = ( parseTimeDataRecord.isNumber || parseTimeDataRecord.isCaps || parseTimeDataRecord.isSmall );
      if ( isNum_aChar ) {
        parseTimeDataRecord.current_CharTypeEnum = CharTypeEnum.num;
      } else if ( is_UC_aChar ) {
        parseTimeDataRecord.current_CharTypeEnum = CharTypeEnum.caps;
      } else if ( is_LC_aChar ) {
        parseTimeDataRecord.current_CharTypeEnum = CharTypeEnum.small;
      } else if ( isAlphaNum_aChar === false ) {
        parseTimeDataRecord.current_CharTypeEnum = CharTypeEnum.omitted;
      }

      this.tasksParseTimeDataRecord ( parseTimeDataRecord, charPos );


      // if ( this._debug === true ) {
      //   console.log (
      //     "charCodeAt",
      //     inp.charAt( charPos ),
      //     charPos,
      //     aChar,
      //     isAlphaNum_aChar
      //   );
      // }
      if ( isAlphaNum_aChar === true ) {

        //@ts-ignore
        bitsbufReplaced.set( [aChar], charPos );
      } else {

        //@ts-ignore
        bitsbufReplaced.set(
          [char_BACKGROUND_SPACE],
          charPos
        );

      }

      charPos++;
    }



    let buf: Uint8Array = new Uint8Array(0);
    secureCounter = 1;


    // let backgroundSpacePos: number = 0;
    groupsMultidimPosArray = parseTimeDataRecord.groups_positions;
    let groupsArrayLen: number = groupsMultidimPosArray.length;
    let groupOfChars_Id: number = 0;

    let charPosStart: number = 0;
    let charPosFinish: number = 0;


    secureCounter = 1;
    secureMaxCounter = 62;



    marker2: while ( groupOfChars_Id < groupsArrayLen ) {

      // start secure check
      secureCounter++;

      if ( secureCounter > secureMaxCounter ) {
        groupOfChars_Id = ( groupsArrayLen + 4 );
        secureCounter = ( secureMaxCounter + 4 );

        break marker2;
      }


      // end secure check
      // get start and end pos of chars in the current group of similar chars
      groupPositionsArray = groupsMultidimPosArray[ groupOfChars_Id ];

      if ( groupPositionsArray[3] === CharTypeEnum.omitted ) {
        groupOfChars_Id++;

        continue marker2;
      }

      charPosStart  = groupPositionsArray[0];
      charPosFinish = groupPositionsArray[1];


      // obtained array of chars of the current group
      buf = bitsbufReplaced.slice (
        charPosStart, (
          charPosFinish + 1
        ) );


      // pushed group of chars as text to the result array
      retVal_splitted.push ( ( new TextDecoder() ).decode( buf ) );



      groupOfChars_Id++;

    }


    // if ( this._debug === true ) {
    console.log (
      {
        retVal_splitted,
        groupsMultidimPosArray
      }
    );


    // }
    // return retVal_splitted;

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

      if ( this._debug === true ) {
        console.log (
          "matchingRanges",
          {
            inRanges,
            aRange,
            aNum,
            less: ( aRange[0] <= aNum ),
            more: ( aNum <= aRange[1] ),
            retVal_didMatch
          }
        );
      }

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
      [CharTypeEnum.caps]:    this.isUC,
      [CharTypeEnum.small]:   this.isLC,
      [CharTypeEnum.num]:     this.isNumLatin,
      [CharTypeEnum.omitted]: this.isAlphaNumLatin
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







