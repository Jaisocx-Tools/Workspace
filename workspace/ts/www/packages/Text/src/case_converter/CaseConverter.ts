
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



export class DataRecordMatches {

  backgroundCharPositions: number[];
  capsStartedPositions:    number[];
  lowerStartedPositions:   number[];
  numsStartedPositions:    number[];
  wasNumber: boolean;
  isNumber:  boolean;
  wasCaps:   boolean;
  isCaps:    boolean;



  constructor() {

    this.backgroundCharPositions = new Array() as number[];
    this.capsStartedPositions    = new Array() as number[];
    this.lowerStartedPositions   = new Array() as number[];
    this.numsStartedPositions    = new Array() as number[];

    this.wasNumber  = false;
    this.isNumber   = false;

    this.wasCaps    = false;
    this.isCaps     = false;

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

  protected rangesANumLatin: number[][];

  static clsInstance: CaseConverterInterface;



  constructor() {
    this._debug = false;


    this.#symbolZero = 48;
    this.#symbolNine = 57;
    this.#symbolA = 65;
    this.#symbolZ = 90;
    this.#symbolAlower = 97;
    this.#symbolZlower = 122;

    this.rangesANumLatin = [
      [ this.#symbolZero, this.#symbolNine ],
      [ this.#symbolA, this.#symbolZ ],
      [ this.#symbolAlower, this.#symbolZlower ]
    ];
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



  static camel(input: string): string {
    return CaseConverter.getInstance().toCamel(input);
  }



  static pascal(input: string): string {
    return CaseConverter.getInstance().toPascal(input);
  }



  static snake(input: string): string {
    return CaseConverter.getInstance().toSnake(input);
  }



  static kebab(input: string): string {
    return CaseConverter.getInstance().toKebab(input);
  }



  static constant(input: string): string {
    return CaseConverter.getInstance().toConstant(input);
  }



  static title(input: string): string {
    return CaseConverter.getInstance().toTitle(input);
  }



  static sentence(input: string): string {
    return CaseConverter.getInstance().toSentence(input);
  }



  static dot(input: string): string {
    return CaseConverter.getInstance().toDelimited(input, ".");
  }



  static path(input: string): string {
    return CaseConverter.getInstance().toDelimited(input, "/");
  }



  static train(input: string): string {
    return CaseConverter.getInstance().toTrain(input);
  }


  /** Instance methods */



  toCamel(input: string): string {
    const t = this.tokens(input);

    if (t.length === 0)


      return "";
    const [head, ...tail] = t;


    return head.toLowerCase() +
      tail.map(this.cap.bind(this)).join("");
  }



  toPascal(input: string): string {
    return this.tokens(input).map(this.cap.bind(this)).join("");
  }



  toSnake(input: string): string {
    return this.toDelimited(input, "_");
  }



  toKebab(input: string): string {
    return this.toDelimited(input, "-");
  }



  toConstant(input: string): string {
    return this.tokens(input).map(t => t.toUpperCase()).join("_");
  }



  toTitle (input: string): string {
    const SMALL = new Set([
      "a","an","and","as","at","but","by","for","in","nor","of","on","or","per","the","to","vs","via"
    ]);
    const toks = this.tokens(input);


    return toks.map((t, i) => {
      const lower = t.toLowerCase();

      if (i !== 0 && i !== toks.length - 1 && SMALL.has(lower))


        return lower;


      return this.cap(t);
    }).join(" ");
  }



  toSentence (input: string): string {
    const s = this.tokens(input).join(" ");

    if (!s)


      return "";


    return this.cap(s.toLowerCase());
  }



  toTrain (input: string): string {
    return this.tokens(input).map(this.cap.bind(this)).join("-");
  }



  toDelimited (
    input: string,
    delimiter: string
  ): string {
    return this.tokens(input).map(t => t.toLowerCase()).join(delimiter);
  }



  cap( t: string ): string {
    if ( (!t) || ( t.length === 0 ) ) {
      return "";
    }

    const lower = t.toLowerCase();


    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }


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
    . number groups separate
    . extended Latin chars replace with similar base chars no separate group
    .



  toLC( inText: string ): string {
    let locText: string = inText;
    if ( (!locText) || ( locText.length === 0 ) ) {
      return "";
    }

    let retVal_transformed: string = locText.toLowerCase();

    return retVal_transformed;
  }

  toUC( inText: string ): string {
    let locText: string = inText;
    if ( (!locText) || ( locText.length === 0 ) ) {
      return "";
    }

    let retVal_transformed: string = locText.toLowerCase();

    return retVal_transformed;
  }

  toFirstCap( inText: string ): string {
    let locText: string = inText;

    if ( (!locText) || ( locText.length === 0 ) ) {
      return "";
    }

    let locTextLen: number = locText.length;

    let firstCharToUC: string = locText.charAt(0).toUpperCase();
    let locTextAfterFirstChar: string = locText.slice( 1, locTextLen );

    let retVal_transformed: string = ( firstCharToUC + locTextAfterFirstChar );

    return retVal_transformed;
  }


  caseTransform( inp: string[], inTransformFirstFunc: CallableFunction|null, inTransformFunc: CallableFunction|null ): string[] {

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
        locTextItemId = ( inpLength + 128 );
        secureCounter = ( secureMaxCounter + 128 );

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



  tokens ( inp: string ): string[] {
    let retVal_splitted: string[] = new Array() as string[];

    let bitsbuf: Uint8Array = ( new TextEncoder() ).encode ( inp );
    let inpLength: number = bitsbuf.byteLength;
    let bitsbufReplaced: Uint8Array = new Uint8Array( inpLength );

    let aChar: number = 0;
    let charPos: number = 0;
    let isAlphaNum_aChar: boolean = true;

    let char_BACKGROUND_SPACE: number = (" ").charCodeAt(0);

    let backgroundSpacesPositions: number[] = new Array() as number[];

    let secureCounter: number = 1;
    let secureMaxCounter: number = 256;

    marker1: while ( charPos < inpLength ) {
      secureCounter++;

      if ( secureCounter > secureMaxCounter ) {
        charPos = ( inpLength + 128 );
        secureCounter = ( secureMaxCounter + 128 );

        break marker1;
      }

      aChar = bitsbuf[ charPos ];
      isAlphaNum_aChar = this.isAlphaNumLatin ( aChar );

      if ( this._debug === true ) {
        console.log (
          "charCodeAt",
          inp.charAt( charPos ),
          charPos,
          aChar,
          isAlphaNum_aChar
        );
      }

      if ( isAlphaNum_aChar ) {

        //@ts-ignore
        bitsbufReplaced.set( [aChar], charPos );
      } else {

        //@ts-ignore
        bitsbufReplaced.set(
          [char_BACKGROUND_SPACE],
          charPos
        );
        backgroundSpacesPositions.push ( charPos );
      }

      charPos++;
    }



    let buf: Uint8Array = new Uint8Array(0);
    secureCounter = 1;
    let backgroundSpacePos: number = 0;
    let spacesArrayLen: number = backgroundSpacesPositions.length;

    let prevCharPos: number = 0;
    let charPosA: number = 0;


    backgroundSpacePos = (-1);

    marker2: while ( backgroundSpacePos < spacesArrayLen ) {
      secureCounter++;

      if ( secureCounter > secureMaxCounter ) {
        backgroundSpacePos = ( spacesArrayLen + 128 );
        secureCounter = ( secureMaxCounter + 128 );

        break marker2;
      }

      prevCharPos = charPosA;



      backgroundSpacePos++;
      charPosA = backgroundSpacesPositions[ backgroundSpacePos ];

      buf = bitsbufReplaced.slice ( prevCharPos, charPosA );
      retVal_splitted.push ( ( new TextDecoder() ).decode( buf ) );
      charPosA++;


    }


    // if ( this._debug === true ) {
    console.log (
      {
        retVal_splitted,
        backgroundSpacesPositions
      }
    );


    // }
    return retVal_splitted;

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



  isAlphaNumLatin ( charCode: number ): boolean {
    let retVal_didMatch: boolean = true;

    retVal_didMatch = this.matchesRanges (
      charCode,
      this.rangesANumLatin
    );


    return retVal_didMatch;
  }

}







