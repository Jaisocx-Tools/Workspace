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

    if (target < rangeLowerBoundChar) {
      return CharcodeConverter.CHAR_NOT_FOUND;
    }

    rangeHigherBoundChar = this._charToNum_AlignedSymbols[rangeHigherBound];

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

      if (rangeLowerBoundChar === target) {
        charcode = this._charToNum_AlignedSymbolsCodes[rangeLowerBound];
        //opsNumber += 1;
        break;
      }

      rangeHigherBoundChar = this._charToNum_AlignedSymbols[rangeHigherBound];

      if (rangeHigherBoundChar === target) {
        charcode = this._charToNum_AlignedSymbolsCodes[rangeHigherBound];
        //opsNumber += 1;
        break;
      }
      // the number of chars in the lookup table, between the lower and higher bounds of the remaining lookup range.
      elemsNumberRemainingRangeToLookup = (rangeHigherBound - rangeLowerBound);

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
      charcode);

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


