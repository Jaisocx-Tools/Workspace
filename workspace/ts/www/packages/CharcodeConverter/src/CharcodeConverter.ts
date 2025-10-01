import { Charcodes } from "./Charcodes.js";


// a Singleton with tables for faster charcodes lookup.
export class CharcodeConverter {

  // static constants
  public static LOOKUP_ITERATIONS_MAX: number = 126;
  public static CHAR_NOT_FOUND: number = (-1);
  public static LETTER_PROP_POINTER: number = 0;
  public static CHARCODE_PROP_POINTER: number = 1;
  public static CHARSET_LATIN: string = "Latin";


  // lookup tables
  protected _charToNum_AlignedSymbolsCodes: number[];
  protected _charToNum_AlignedSymbols: string[];
  protected _numToChar: string[];


  // some data about charsets standards
  protected _charcodes: any;
  protected _loadedRanges: Set<string>;


  // some technique settings
  protected _lookupIterationsMax: number;
  protected _debug: boolean;


  // Singleton feature
  // the static instance of this class.
  protected static _instance: CharcodeConverter | null = null;



  constructor() {
    this._charToNum_AlignedSymbolsCodes = [];
    this._charToNum_AlignedSymbols = [];
    this._numToChar = [];

    this._charcodes = Charcodes.CHARCODES;
    this._loadedRanges = new Set<string>();

    this._lookupIterationsMax = CharcodeConverter.LOOKUP_ITERATIONS_MAX;
    this._debug = true;


    // loading charsets,
    // first detecting charset by html doc loaded tags and browser's js impl props.
    this._init();

  }



  public static getInstance(): CharcodeConverter {
    if (!CharcodeConverter._instance) {
      CharcodeConverter._instance = new CharcodeConverter();
    }


    return CharcodeConverter._instance;

  }



  protected _init(): undefined {
    this.preloadCharsetBasedOnLanguage();
  }



  setDebug( inDebug: boolean ): CharcodeConverter {
    this._debug = inDebug;


    return this;
  }


  //@onDemand
  //@default CharcodeConverter.LOOKUP_ITERATIONS_MAX
  //@property this._lookupIterationsMax
  setLookupIterationsMax( iterationsMax: number ): CharcodeConverter {
    this._lookupIterationsMax = iterationsMax;


    return this;
  }



  log(
    key: any,
    data: any
  ): undefined {
    if ( !this._debug ) {
      return;
    }

    console.log (
      key,
      data
    );

  }


  // join (
  //   inoutObj: any
  // ): number { // length bytes of the entire rendered html text in the inoutobj.retVal, .join('') once.
  //   const autoload: number = 0;
  //   const NAVIGATE_WITH_CALLBACK: number = 2;
  //   const NAVIGATE_NO_CALLBACK: number = 4;
  //   let localInMethod_lastOffsetStringArray: number = 0;
  //   // gets one char by charcode form the lookup tables, very fast via bitsbuffer ref.
  //   const implGetChar: CallableFunction = autoload ? this.getCharAndAutoload.bind(this) : this.getChar.bind(this);
  //   const isBitsbuffer: Function = ( array: any ): number => {
  //     return ( array instanceof Uint16Array ) ? 1 : 0;
  //   };
  //   const navigateMultidim: Function = (
  //     toUseCallback: number,
  //     array: any,
  //     callback: CallableFunction
  //   ): any => {
  //     let retVal: any = {
  //       bitbufsNumber: 0,
  //       sumBitbufsLen: 0
  //     };
  //     if ( isBitsbuffer( array ) === 1 ) {
  //       retVal.bitbufsNumber = 1;
  //       retVal.sumBitbufsLen = ( array as Uint16Array ).length;
  //       if ( toUseCallback === NAVIGATE_WITH_CALLBACK ) {
  //         callback( array );
  //       }
  //     } else {
  //       let sum: any;
  //       for ( let a of array ) {
  //         if ( isBitsbuffer( a ) === 1 ) {
  //           retVal.bitbufsNumber += 1;
  //           retVal.sumBitbufsLen += ( a as Uint16Array ).length;
  //           if ( toUseCallback === NAVIGATE_WITH_CALLBACK ) {
  //             callback( a );
  //           }
  //           continue;
  //         }
  //         sum = navigateMultidim (
  //           toUseCallback,
  //           a,
  //           null
  //         );
  //         retVal.bitbufsNumber += sum.bitbufsNumber;
  //         retVal.sumBitbufsLen += sum.sumBitbufsLen;
  //       }
  //     }
  //     return retVal;
  //   };
  //   const sizesObj: any = navigateMultidim (
  //     NAVIGATE_NO_CALLBACK,
  //     inoutObj.bufs,
  //     null
  //   );
  //   const flatBitbufsArray: Array<Uint16Array> = new Array<Uint16Array>( sizesObj.bitbufsNumber );
  //   const resultStringArray: string[] = new Array<string>( sizesObj.sumBitbufsLen );
  //   const summary: any = {
  //     bitbufsNumber: sizesObj.bitbufsNumber,
  //     sumBitbufsLen: sizesObj.sumBitbufsLen,
  //     flatBitbufsArray: flatBitbufsArray,
  //     resultStringArray: resultStringArray
  //   };
  //   let charcode: number = 0;
  //   let char: string = "";
  //   const navigateMultidimCallback: CallableFunction = ( array: any ): any => {
  //     const lastOffset: number = localInMethod_lastOffsetStringArray;
  //     let targetValueArrayOffset: number = lastOffset;
  //     let inpArrayOffset: number = 0;
  //     let inpArraySize: number = array.length;
  //     for (
  //       ( inpArrayOffset = 0 );
  //       ( inpArrayOffset < inpArraySize );
  //       ( inpArrayOffset += 1 )
  //     ) {
  //       charcode = array[inpArrayOffset];
  //       char = implGetChar( charcode );
  //       resultStringArray[targetValueArrayOffset] = char;
  //       targetValueArrayOffset += 1;
  //     }
  //     localInMethod_lastOffsetStringArray = targetValueArrayOffset;
  //   };
  //   const _summaryAfterFillCharbuf: any = navigateMultidim (
  //     NAVIGATE_WITH_CALLBACK,
  //     inoutObj.bufs,
  //     navigateMultidimCallback
  //   );
  //   const EMPTY_STRING: string = (new String("")).valueOf();
  //   summary.html = summary.resultStringArray.join(EMPTY_STRING);
  //   return summary;
  // }
  stringToArray (
    text: string,
    autoload: number
  ): Uint16Array {
    const resultArrayLength: number = text.length;
    const resultArray: Uint16Array = new Uint16Array( resultArrayLength );

    let implGetCharcode: CallableFunction = autoload ? this.getCharcodeAndAutoload.bind(this) : this.getCharcode.bind(this);

    let charcode: number = 0;
    let char: string = "";
    let resultArrayIndex: number = 0;

    for (
      resultArrayIndex = 0;
      resultArrayIndex < resultArrayLength;
      resultArrayIndex++
    ) {
      char = text[resultArrayIndex];
      charcode = implGetCharcode( char );

      resultArray[resultArrayIndex] = charcode;

    }


    // this.log (
    //   "stringToArrayCalled",
    //   {
    //     "": text,
    //     "lookupTableLen": this._charToNum_AlignedSymbols.length,
    //     "resultArrayLength": resultArrayLength,
    //     "iterationsNumber": resultArrayIndex,
    //   }
    // );
    // this.log (
    //   "stringToArrayCalled",
    //   {
    //     "": text,
    //     "lookupTableLen": this._charToNum_AlignedSymbols.length,
    //     "resultArrayLength": resultArrayLength,
    //     "iterationsNumber": resultArrayIndex
    //   }
    // );
    return resultArray;

  }



  arrayToString(
    buf: Uint16Array,
    autoload: number
  ): string {
    const resultStringLength: number = buf.length;
    const resultStringArray: string[] = new Array<string>( resultStringLength );

    let implGetChar: CallableFunction = autoload ? this.getCharAndAutoload.bind(this) : this.getChar.bind(this);

    let charcode: number = 0;
    let char: string = "";
    let resultStringIndex: number = 0;

    for (
      resultStringIndex = 0;
      resultStringIndex < resultStringLength;
      resultStringIndex++
    ) {
      charcode = buf[resultStringIndex];
      char = implGetChar( charcode );

      resultStringArray[resultStringIndex] = char;
    }


    // this.log (
    //   "stringToArrayCalled",
    //   {
    //     "buf": buf,
    //     "lookupTableLen": this._charToNum_AlignedSymbols.length,
    //     "resultStringLength": resultStringLength,
    //     "iterationsNumber": resultStringIndex,
    //   }
    // );
    const EMPTY_STRING: string = (new String("")).valueOf();
    const resultString: string = resultStringArray.join(EMPTY_STRING);


    return resultString;
  }



  getChar( charcode: number ): string {

    // this.log (
    //   "getChar",
    //   {
    //     "charcode": charcode,
    //     "lookupTableLen": this._charToNum_AlignedSymbols.length,
    //     "resultStringLength": 1,
    //     "iterationsNumber": 1,
    //   }
    // );
    return this._numToChar[charcode];
  }



  getCharcode ( target: string ): number {
    let charcode: number = CharcodeConverter.CHAR_NOT_FOUND;


    //opsNumber++;
    let rangeLowerBound: number = 0;


    //opsNumber++;
    let rangeLowerBoundChar: string = "";


    //opsNumber++;
    let rangeHigherBound: number = this._charToNum_AlignedSymbols.length - 1;


    //opsNumber += 3;
    let rangeHigherBoundChar: string = "";


    //opsNumber += 1;
    let rangeMiddleIndex: number = 0;


    //opsNumber += 1;
    let midChar: string = "";


    //opsNumber += 1;
    let elemsNumberRemainingRangeToLookup: number = 0;


    //opsNumber += 1;
    let halfOfTheRangeToLookupSize: number = 0;


    //opsNumber += 1;
    // comparing to the lower range bound char
    rangeLowerBoundChar = this._charToNum_AlignedSymbols[rangeLowerBound];


    //opsNumber += 1;
    //opsNumber += 1;
    if ( target < rangeLowerBoundChar ) {
      return CharcodeConverter.CHAR_NOT_FOUND;
    }


    rangeHigherBoundChar = this._charToNum_AlignedSymbols[rangeHigherBound];


    //opsNumber += 1;
    //opsNumber += 1;
    if ( rangeHigherBoundChar < target ) {
      return CharcodeConverter.CHAR_NOT_FOUND;
    }


    let iterationsNumber: number = this._lookupIterationsMax;


    //opsNumber += 1;
    let lookupStep: number = 0;


    //opsNumber += 1;
    for (
      lookupStep = 0;
      lookupStep < iterationsNumber;
      lookupStep++
    ) {

      // comparing to the lower range bound char
      rangeLowerBoundChar = this._charToNum_AlignedSymbols[rangeLowerBound];


      //opsNumber += 1;
      //opsNumber += 1;
      if ( rangeLowerBoundChar === target ) {
        charcode = this._charToNum_AlignedSymbolsCodes[rangeLowerBound];


        //opsNumber += 1;
        break;

      }


      rangeHigherBoundChar = this._charToNum_AlignedSymbols[rangeHigherBound];


      //opsNumber += 1;
      //opsNumber += 1;
      if ( rangeHigherBoundChar === target ) {
        charcode = this._charToNum_AlignedSymbolsCodes[rangeHigherBound];


        //opsNumber += 1;
        break;

      }


      // the number of chars in the lookup table, between the lower and higher bounds of the remaining lookup range.
      elemsNumberRemainingRangeToLookup = (rangeHigherBound - rangeLowerBound);


      //opsNumber += 1;
      //opsNumber += 1;
      if ( elemsNumberRemainingRangeToLookup < 4 ) {
        let lookupTableIndex = 0;


        //opsNumber += 1;
        rangeLowerBound++;


        //opsNumber += 1;
        rangeHigherBound = ( rangeLowerBound + 4 );


        //opsNumber += 1;
        let char: string = "";


        //opsNumber += 1;
        for (
          lookupTableIndex = rangeLowerBound;
          lookupTableIndex < rangeHigherBound;
          lookupTableIndex++
        ) {
          char = this._charToNum_AlignedSymbols[lookupTableIndex];


          //opsNumber += 1;
          //opsNumber += 1;
          if ( char === target ) {
            charcode = this._charToNum_AlignedSymbolsCodes[lookupTableIndex];


            //opsNumber += 1;
            break;
          }
        }
      }


      // the half of the chars quantity. right shift one bit is equal dividing through 2, however faster.
      halfOfTheRangeToLookupSize = elemsNumberRemainingRangeToLookup >> 1;


      //opsNumber += 1;
      // the index in the lookup table, above the lower lookup rage bound, added chars quantity the half of the remaining lookup range size.
      rangeMiddleIndex = rangeLowerBound + halfOfTheRangeToLookupSize;


      //opsNumber += 1;
      // the char, residing in the middle of the new, reduced by 2, lookup range.
      midChar = this._charToNum_AlignedSymbols[rangeMiddleIndex];


      //opsNumber += 1;
      //opsNumber += 1;
      if (midChar === target) {
        charcode = this._charToNum_AlignedSymbolsCodes[rangeMiddleIndex];


        //opsNumber += 1;
        break;

      } else if ( midChar < target ) {

        //opsNumber += 1;
        rangeLowerBound = rangeMiddleIndex + 1;


        //opsNumber += 1;
        rangeHigherBound = rangeHigherBound--;


        //opsNumber += 1;
        continue;

      } else if ( midChar > target ) {

        //opsNumber += 1;
        rangeHigherBound = rangeMiddleIndex - 1;


        //opsNumber += 1;
        rangeLowerBound = rangeLowerBound++;


        //opsNumber += 1;
        continue;

      }

    }


    // here for sure the opsNumber grows very much.
    // the opsNumber counter is to estimate simple opcodes number
    // to compare efficiency if looking for an algorythm to rewrite in low level code.
    // this.log (
    //   "getCharcode",
    //   {
    //     "charcode": charcode,
    //     "lookupTableLen": this._charToNum_AlignedSymbols.length,
    //     "resultStringLength": 1,
    //     "iterationsNumber": lookupStep,
    //     "opsNumber": opsNumber,
    //   }
    // );
    //opsNumber += 1;
    return charcode;

  }



  getCharAndAutoload( charcode: number ): string {

    if (
      ( charcode >= this._numToChar.length )
    ) {
      this.loadCharsetByCharcode(charcode);
    }

    let char: string = this._numToChar[charcode];

    if ( !char ) {
      this.loadCharsetByCharcode(charcode);
    }

    char = this._numToChar[charcode] || "";


    return char;
  }



  getCharcodeAndAutoload( target: string ): number {
    let charcode: number = this.getCharcode( target );

    if ( charcode === CharcodeConverter.CHAR_NOT_FOUND ) {
      this.loadCharsetByChar( target );
    }

    charcode = this.getCharcode( target );


    return charcode ?? CharcodeConverter.CHAR_NOT_FOUND;
  }



  loadCharsetByChar(char: string): void {
    const charcode = char.charCodeAt(0);
    this.loadCharsetByCharcode(charcode);
  }



  loadCharsetByCharcode(charcode: number): void {
    this.log(
      "loadCharsetByCharcode, charcode ${charcode}",
      charcode
    );

    for (const [alphabet, data] of Object.entries(this._charcodes.alphabets)) {

      //@ts-ignore
      for (const range of data.unicode_ranges) {
        const [start, end] = range
          .split("-")
          .map(
            ( base16number: string ) => parseInt(
              base16number,
              16
            )
          );

        if (charcode >= start && charcode <= end) {

          // this.log(
          //   "loadCharset, alphabet ${alphabet}",
          //   alphabet );
          this.loadCharset(alphabet);


          return;
        }

      }

    }

  }


  // Preload charset based on detected language or country
  public preloadCharsetBasedOnLanguage(): undefined {
    const charset = this.detectCharset();
    this.loadCharset(charset);
  }


  // Detect charset from country code, language, or HTTP header
  public detectCharset(): string {

    // const language: string = this.detectSiteLanguage();
    // const country: string = this.detectSiteCountry();
    // const acceptLanguage: string = this.detectBrowserAcceptLanguage();
    return (


    // charsetsData.languages[language] ||
    // charsetsData.countries[country] ||
    // charsetsData.http_headers["Accept-Language"][acceptLanguage] ||
      CharcodeConverter.CHARSET_LATIN
    );
  }


  // Detect page language from <html lang> or navigator.language
  public detectSiteLanguage(): string {
    return ( document.documentElement.lang || navigator.language || "en" ).split("-")[0];
  }



  public detectSiteCountry(): string {
    return (navigator.language.split("-")[1] || "US").toUpperCase();
  }



  public detectBrowserAcceptLanguage(): string {
    return  navigator.languages ? navigator.languages[0] : navigator.language;
  }


  // Load character set based on range
  public loadCharset(charsetKey: string): undefined {
    if (this._loadedRanges.has(charsetKey))


      return;

    const charset = this._charcodes.alphabets[charsetKey];

    if (!charset) throw new Error(`Charset "${charsetKey}" does not exist.`);


    let charcodeRangeMax: number = ( charset.offset + charset.length );

    if ( this._numToChar.length < charcodeRangeMax ) {
      this._numToChar = new Array( charcodeRangeMax );

      let charsetKeyName: string = "";

      for ( charsetKeyName of this._loadedRanges.values() ) {
        this.loadCharset ( charsetKeyName );
      }

    }


    let charcode = 0;
    let [charcodeRangeFirstCharcode, charcodeRangeHighestCharcode]: number[] = [];
    let charcodeRange: string = "";
    let ranges: any[] = charset.unicode_ranges;


    // for each unicode range in this charset,
    // fills array of chars, to lookup by charcode of datatype number.
    for ( charcodeRange of ranges ) {
      [charcodeRangeFirstCharcode, charcodeRangeHighestCharcode] = charcodeRange.split("-").map( base16number => parseInt(
        base16number,
        16
      ) );
      charcodeRangeHighestCharcode++;

      for (
        charcode = charcodeRangeFirstCharcode;
        charcode < charcodeRangeHighestCharcode;
        charcode++
      ) {
        this._numToChar[charcode] = String.fromCharCode( charcode );
      }

    }


    // sorts the chars alphabetiq order.
    const chars: any[][] = this
      ._numToChar
      .map(
        ( char: string, index: number ) => {
          return [ char, index ];
        }
      )
      .filter(
        ( charsElem: any[] ) => {
          return ( charsElem[0] != null );
        }
      )
      .sort(
        ( charsElemA: (string | number)[], charsElemB: (string | number)[] ) => {
          const charA: string = charsElemA[0] as string;
          const charB: string = charsElemB[0] as string;

          const comparisonValue: number = ( charA >= charB ) ? 1 : (-1);


          return comparisonValue;
        }
      );


    const ixChar: number = CharcodeConverter.LETTER_PROP_POINTER;
    this._charToNum_AlignedSymbols = chars
      .map(
        ( charsElem: any[] ) => {
          return charsElem[ixChar];
        }
      );


    const ixCode: number = CharcodeConverter.CHARCODE_PROP_POINTER;
    this._charToNum_AlignedSymbolsCodes = chars
      .map(
        ( charsElem: any[] ) => {
          return charsElem[ixCode];
        }
      );


    this._loadedRanges.add(charsetKey);

  }

}







