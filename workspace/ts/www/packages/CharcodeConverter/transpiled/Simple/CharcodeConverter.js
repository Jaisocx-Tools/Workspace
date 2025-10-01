class CharcodeConverter {

    // static constants
    static LOOKUP_ITERATIONS_MAX = 126;
    static CHAR_NOT_FOUND = (-1);
    static LETTER_PROP_POINTER = 0;
    static CHARCODE_PROP_POINTER = 1;
    static CHARSET_LATIN = "Latin";


    // lookup tables
    _charToNum_AlignedSymbolsCodes;
    _charToNum_AlignedSymbols;
    _numToChar;


    // some data about charsets standards
    _charcodes;
    _loadedRanges;


    // some technique settings
    _lookupIterationsMax;
    _debug;


    // Singleton feature
    // the static instance of this class.
    static _instance = null;



    constructor() {
        this._charToNum_AlignedSymbolsCodes = [];
        this._charToNum_AlignedSymbols = [];
        this._numToChar = [];
        this._charcodes = Charcodes.CHARCODES;
        this._loadedRanges = new Set();
        this._lookupIterationsMax = CharcodeConverter.LOOKUP_ITERATIONS_MAX;
        this._debug = true;


        // loading charsets,
        // first detecting charset by html doc loaded tags and browser's js impl props.
        this._init();
    }



    static getInstance() {

        if (!CharcodeConverter._instance) {
            CharcodeConverter._instance = new CharcodeConverter();
        }


        return CharcodeConverter._instance;
    }



    _init() {
        this.preloadCharsetBasedOnLanguage();
    }



    setDebug(inDebug) {
        this._debug = inDebug;


        return this;
    }


    //@onDemand
    //@default CharcodeConverter.LOOKUP_ITERATIONS_MAX
    //@property this._lookupIterationsMax
    setLookupIterationsMax(iterationsMax) {
        this._lookupIterationsMax = iterationsMax;


        return this;
    }



    log(key, data) {

        if (!this._debug) {
            return;
        }
        console.log(key, data);
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
    stringToArray(text, autoload) {
        const resultArrayLength = text.length;
        const resultArray = new Uint16Array(resultArrayLength);
        let implGetCharcode = autoload ? this.getCharcodeAndAutoload.bind(this) : this.getCharcode.bind(this);
        let charcode = 0;
        let char = "";
        let resultArrayIndex = 0;

        for (resultArrayIndex = 0; resultArrayIndex < resultArrayLength; resultArrayIndex++) {
            char = text[resultArrayIndex];
            charcode = implGetCharcode(char);
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



    arrayToString(buf, autoload) {
        const resultStringLength = buf.length;
        const resultStringArray = new Array(resultStringLength);
        let implGetChar = autoload ? this.getCharAndAutoload.bind(this) : this.getChar.bind(this);
        let charcode = 0;
        let char = "";
        let resultStringIndex = 0;

        for (resultStringIndex = 0; resultStringIndex < resultStringLength; resultStringIndex++) {
            charcode = buf[resultStringIndex];
            char = implGetChar(charcode);
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
        const EMPTY_STRING = (new String("")).valueOf();
        const resultString = resultStringArray.join(EMPTY_STRING);


        return resultString;
    }



    getChar(charcode) {

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



    getCharcode(target) {
        let charcode = CharcodeConverter.CHAR_NOT_FOUND;


        //opsNumber++;
        let rangeLowerBound = 0;


        //opsNumber++;
        let rangeLowerBoundChar = "";


        //opsNumber++;
        let rangeHigherBound = this._charToNum_AlignedSymbols.length - 1;


        //opsNumber += 3;
        let rangeHigherBoundChar = "";


        //opsNumber += 1;
        let rangeMiddleIndex = 0;


        //opsNumber += 1;
        let midChar = "";


        //opsNumber += 1;
        let elemsNumberRemainingRangeToLookup = 0;


        //opsNumber += 1;
        let halfOfTheRangeToLookupSize = 0;


        //opsNumber += 1;
        // comparing to the lower range bound char
        rangeLowerBoundChar = this._charToNum_AlignedSymbols[rangeLowerBound];


        //opsNumber += 1;
        //opsNumber += 1;
        if (target < rangeLowerBoundChar) {
            return CharcodeConverter.CHAR_NOT_FOUND;
        }
        rangeHigherBoundChar = this._charToNum_AlignedSymbols[rangeHigherBound];


        //opsNumber += 1;
        //opsNumber += 1;
        if (rangeHigherBoundChar < target) {
            return CharcodeConverter.CHAR_NOT_FOUND;
        }
        let iterationsNumber = this._lookupIterationsMax;


        //opsNumber += 1;
        let lookupStep = 0;


        //opsNumber += 1;
        for (lookupStep = 0; lookupStep < iterationsNumber; lookupStep++) {

            // comparing to the lower range bound char
            rangeLowerBoundChar = this._charToNum_AlignedSymbols[rangeLowerBound];


            //opsNumber += 1;
            //opsNumber += 1;
            if (rangeLowerBoundChar === target) {
                charcode = this._charToNum_AlignedSymbolsCodes[rangeLowerBound];


                //opsNumber += 1;
                break;
            }
            rangeHigherBoundChar = this._charToNum_AlignedSymbols[rangeHigherBound];


            //opsNumber += 1;
            //opsNumber += 1;
            if (rangeHigherBoundChar === target) {
                charcode = this._charToNum_AlignedSymbolsCodes[rangeHigherBound];


                //opsNumber += 1;
                break;
            }


            // the number of chars in the lookup table, between the lower and higher bounds of the remaining lookup range.
            elemsNumberRemainingRangeToLookup = (rangeHigherBound - rangeLowerBound);


            //opsNumber += 1;
            //opsNumber += 1;
            if (elemsNumberRemainingRangeToLookup < 4) {
                let lookupTableIndex = 0;


                //opsNumber += 1;
                rangeLowerBound++;


                //opsNumber += 1;
                rangeHigherBound = (rangeLowerBound + 4);


                //opsNumber += 1;
                let char = "";


                //opsNumber += 1;
                for (lookupTableIndex = rangeLowerBound; lookupTableIndex < rangeHigherBound; lookupTableIndex++) {
                    char = this._charToNum_AlignedSymbols[lookupTableIndex];


                    //opsNumber += 1;
                    //opsNumber += 1;
                    if (char === target) {
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
            }
            else if (midChar < target) {

                //opsNumber += 1;
                rangeLowerBound = rangeMiddleIndex + 1;


                //opsNumber += 1;
                rangeHigherBound = rangeHigherBound--;


                //opsNumber += 1;
                continue;
            }
            else if (midChar > target) {

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



    getCharAndAutoload(charcode) {

        if ((charcode >= this._numToChar.length)) {
            this.loadCharsetByCharcode(charcode);
        }
        let char = this._numToChar[charcode];

        if (!char) {
            this.loadCharsetByCharcode(charcode);
        }
        char = this._numToChar[charcode] || "";


        return char;
    }



    getCharcodeAndAutoload(target) {
        let charcode = this.getCharcode(target);

        if (charcode === CharcodeConverter.CHAR_NOT_FOUND) {
            this.loadCharsetByChar(target);
        }
        charcode = this.getCharcode(target);


        return charcode ?? CharcodeConverter.CHAR_NOT_FOUND;
    }



    loadCharsetByChar(char) {
        const charcode = char.charCodeAt(0);
        this.loadCharsetByCharcode(charcode);
    }



    loadCharsetByCharcode(charcode) {
        this.log(
            "loadCharsetByCharcode, charcode ${charcode}",
            charcode
        );

        for (const [alphabet, data] of Object.entries(this._charcodes.alphabets)) {

            //@ts-ignore
            for (const range of data.unicode_ranges) {
                const [start, end] = range
                    .split("-")
                    .map((base16number) => parseInt(base16number, 16));

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
    preloadCharsetBasedOnLanguage() {
        const charset = this.detectCharset();
        this.loadCharset(charset);
    }


    // Detect charset from country code, language, or HTTP header
    detectCharset() {

        // const language: string = this.detectSiteLanguage();
        // const country: string = this.detectSiteCountry();
        // const acceptLanguage: string = this.detectBrowserAcceptLanguage();
        return (


        // charsetsData.languages[language] ||
        // charsetsData.countries[country] ||
        // charsetsData.http_headers["Accept-Language"][acceptLanguage] ||
            CharcodeConverter.CHARSET_LATIN);
    }


    // Detect page language from <html lang> or navigator.language
    detectSiteLanguage() {
        return (document.documentElement.lang || navigator.language || "en").split("-")[0];
    }



    detectSiteCountry() {
        return (navigator.language.split("-")[1] || "US").toUpperCase();
    }



    detectBrowserAcceptLanguage() {
        return navigator.languages ? navigator.languages[0] : navigator.language;
    }


    // Load character set based on range
    loadCharset(charsetKey) {

        if (this._loadedRanges.has(charsetKey))


            return;
        const charset = this._charcodes.alphabets[charsetKey];

        if (!charset)
            throw new Error(`Charset "${charsetKey}" does not exist.`);
        let charcodeRangeMax = (charset.offset + charset.length);

        if (this._numToChar.length < charcodeRangeMax) {
            this._numToChar = new Array(charcodeRangeMax);
            let charsetKeyName = "";

            for (charsetKeyName of this._loadedRanges.values()) {
                this.loadCharset(charsetKeyName);
            }
        }
        let charcode = 0;
        let [charcodeRangeFirstCharcode, charcodeRangeHighestCharcode] = [];
        let charcodeRange = "";
        let ranges = charset.unicode_ranges;


        // for each unicode range in this charset,
        // fills array of chars, to lookup by charcode of datatype number.
        for (charcodeRange of ranges) {
            [charcodeRangeFirstCharcode, charcodeRangeHighestCharcode] = charcodeRange.split("-").map(base16number => parseInt(base16number, 16));
            charcodeRangeHighestCharcode++;

            for (charcode = charcodeRangeFirstCharcode; charcode < charcodeRangeHighestCharcode; charcode++) {
                this._numToChar[charcode] = String.fromCharCode(charcode);
            }
        }


        // sorts the chars alphabetiq order.
        const chars = this
            ._numToChar
            .map((char, index) => {
                return [char, index];
            })
            .filter((charsElem) => {
                return (charsElem[0] != null);
            })
            .sort((charsElemA, charsElemB) => {
                const charA = charsElemA[0];
                const charB = charsElemB[0];
                const comparisonValue = (charA >= charB) ? 1 : (-1);


                return comparisonValue;
            });
        const ixChar = CharcodeConverter.LETTER_PROP_POINTER;
        this._charToNum_AlignedSymbols = chars
            .map((charsElem) => {
                return charsElem[ixChar];
            });
        const ixCode = CharcodeConverter.CHARCODE_PROP_POINTER;
        this._charToNum_AlignedSymbolsCodes = chars
            .map((charsElem) => {
                return charsElem[ixCode];
            });
        this._loadedRanges.add(charsetKey);
    }
}


