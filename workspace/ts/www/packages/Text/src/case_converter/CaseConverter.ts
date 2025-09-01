/**
 * CaseConverter — robust text case transformations in TypeScript
 *
 * Features
 * - Handles camelCase/PascalCase/snake_case/kebab-case/CONSTANT_CASE/Train-Case/dot.case/path/case
 * - Unicode-aware tokenization (letters & numbers), optional diacritic stripping
 * - Sensible acronym handling (e.g., "parseXMLHttpRequest" -> ["parse", "XML", "Http", "Request"])
 * - Configurable locale for casing and options per call
 */

import { CaseOptions } from "./CaseOptions.js";
import { CaseConverterInterface } from "./CaseConverterInterface.js";



export class CaseConverter {
  private readonly opts: Required<CaseOptions>;

  #symbolZero: number;
  #symbolNine: number;
  #symbolA: number;
  #symbolZ: number;
  #symbolAlower: number;
  #symbolZlower: number;

  protected rangesANumLatin: number[][];



  constructor() {

    this.#symbolZero = 48;
    this.#symbolNine = 57;
    this.#symbolA = 65;
    this.#symbolZ = 90;
    this.#symbolAlower = 97;
    this.#symbolZlower = 122;

    this.rangesANumLatin = [
      [ this.#symbolZero, this.#symbolNine ],
      [ this.#symbolA, this.#symbolZ ],
      [ this.#symbolAlower, this.#symbolZlower ],
    ];
  }



  /** Core public API (static convenience) */
  static camel(input: string, options?: CaseOptions): string {
    return new CaseConverter(options).toCamel(input);
  }
  static pascal(input: string, options?: CaseOptions): string {
    return new CaseConverter(options).toPascal(input);
  }
  static snake(input: string, options?: CaseOptions): string {
    return new CaseConverter(options).toSnake(input);
  }
  static kebab(input: string, options?: CaseOptions): string {
    return new CaseConverter(options).toKebab(input);
  }
  static constant(input: string, options?: CaseOptions): string {
    return new CaseConverter(options).toConstant(input);
  }
  static title(input: string, options?: CaseOptions): string {
    return new CaseConverter(options).toTitle(input);
  }
  static sentence(input: string, options?: CaseOptions): string {
    return new CaseConverter(options).toSentence(input);
  }
  static dot(input: string, options?: CaseOptions): string {
    return new CaseConverter(options).toDelimited(input, ".");
  }
  static path(input: string, options?: CaseOptions): string {
    return new CaseConverter(options).toDelimited(input, "/");
  }
  static train(input: string, options?: CaseOptions): string {
    return new CaseConverter(options).toTrain(input);
  }



  /** Instance methods */
  toCamel(input: string): string {
    const t = this.tokens(input);
    if (t.length === 0) return "";
    const [head, ...tail] = t;
    return head.toLocaleLowerCase(this.opts.locale) +
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
    return this.tokens(input).map(t => t.toLocaleUpperCase(this.opts.locale)).join("_");
  }

  toTitle (input: string): string {
    const SMALL = new Set([
      "a","an","and","as","at","but","by","for","in","nor","of","on","or","per","the","to","vs","via"
    ]);
    const toks = this.tokens(input);
    return toks.map((t, i) => {
      const lower = t.toLocaleLowerCase(this.opts.locale);
      if (i !== 0 && i !== toks.length - 1 && SMALL.has(lower)) return lower;
      return this.cap(t);
    }).join(" ");
  }

  toSentence (input: string): string {
    const s = this.tokens(input).join(" ");
    if (!s) return "";
    return this.cap(s.toLocaleLowerCase(this.opts.locale));
  }

  toTrain (input: string): string {
    return this.tokens(input).map(this.cap.bind(this)).join("-");
  }

  toDelimited (input: string, delimiter: string): string {
    return this.tokens(input).map(t => t.toLocaleLowerCase(this.opts.locale)).join(delimiter);
  }



  protected transform ( inp: string ): string[] {

    let transformed: string[] = new Array() as string[];
    let bitsbuf: Uint8Array = ( new TextEncoder() ).encode ( inp );

    let aChar: number = 0;
    let charPos: number = 0;
    let inpLength: number = bitsbuf.byteLength;
    let isAlphaNum_aChar: boolean = true;

    let char_BACKGROUND_SPACE: number = (" ").charCodeAt(0);

    let bitsbufTransformed: ArrayBufferLike = new ArrayBuffer( inpLength ) as ArrayBufferLike;
    let backgroundSpacesPositions: number[] = new Array() as number[];

    let secureCounter: number = 1;
    let secureMaxCounter: number = 256;



    marker1: while ( charPos < inpLength ) {
      secureCounter++;
      if ( secureCounter > secureMaxCounter ) {
        break marker1;
      }

      aChar = bitsbuf[ charPos ];
      isAlphaNum_aChar = this.isAlphaNumLatin ( aChar );

      if ( isAlphaNum_aChar ) {
        bitsbufTransformed[ charPos ] = aChar;
      } else {
        bitsbufTransformed[ charPos ] = char_BACKGROUND_SPACE;
        backgroundSpacesPositions.push ( charPos );
      }

      charPos++;
    }



    let trimmedBitsbuf: ArrayBufferLike = new ArrayBuffer() as ArrayBufferLike;
    secureCounter = 1;
    let backgroundSpacePos: number = 0;
    let spacesArrayLen: number = backgroundSpacesPositions.length;

    let prevCharPos: number = 0;
    let charPosA: number = 0;
    let charPosB: number = 0;



    backgroundSpacePos = (-1);
    marker2: while ( backgroundSpacePos < spacesArrayLen ) {
      secureCounter++;
      if ( secureCounter > secureMaxCounter ) {
        break marker2;
      }

      prevCharPos = charPosB;



      backgroundSpacePos++;
      charPosA = backgroundSpacesPositions[ backgroundSpacePos ];

      trimmedBitsbuf = bitsbufTransformed.slice ( prevCharPos, charPosA );


      backgroundSpacePos++;
      if ( backgroundSpacePos >= spacesArrayLen ) {

        trimmedBitsbuf = bitsbufTransformed.slice ( ( charPosA + 1 ), bitsbufTransformed.byteLength );

        break marker2;
      }

      charPosB = backgroundSpacesPositions[ backgroundSpacePos ];

    }


    bitsbufTransformed

    return transformed;

  }



  protected matchesRanges ( aNum: number, inRanges: number[][] ): boolean {

    let retVal_didMatch: boolean = true;

    let numRanges: number = inRanges.length;
    let rangeId: number = 0;
    let aRange: number[] = new Array(0) as number[];

    let secureCounter: number = 1;
    let secureMaxCounter: number = 28;

    marker1: while ( rangeId < numRanges ) {
      secureCounter++;
      if ( secureCounter > secureMaxCounter ) {
        break marker1;
      }

      aRange = inRanges[rangeId];

      retVal_didMatch = ( ( aRange[0] <= aNum) && ( aNum <= aRange[1] ) );

      if ( retVal_didMatch === false ) {
        break marker1;
      }

      rangeId++;
    }



    return retVal_didMatch;
  }

  protected isAlphaNumLatin ( charCode: number ): boolean {
    let retVal_didMatch: boolean = true;

    retVal_didMatch = this.matchesRanges( charCode, this.rangesANumLatin );

    return retVal_didMatch;
  }



  /**
   * Tokenize an input string into words, honoring acronyms and numbers.
   * Example: "parseXMLHttp2Response" => ["parse","XML","Http","2","Response"]
   */
  tokens(input: string): string[] {
    if (!input) return [];
    let s = this.normalize(input);

    // Replace all non-letter/number with spaces
    s = s.replace(/[^\p{L}\p{N}]+/gu, " ");

    // Split boundaries: lower->upper (fooBar), digit<->letter (v2ray, RFC7231)
    s = s
      .replace(/(\p{Ll})(\p{Lu})/gu, "$1 $2")
      .replace(/(\p{L})(\p{N})/gu, "$1 $2")
      .replace(/(\p{N})(\p{L})/gu, "$1 $2");

    // Acronym boundary: XMLHttp => XML Http (but keep XML contiguous as token)
    if (this.opts.preserveAcronyms) {
      s = s.replace(/(\p{Lu})(\p{Lu})(\p{Ll})/gu, "$1$2 $3");
    } else {
      s = s.replace(/(\p{Lu})(\p{Lu})(\p{Ll})/gu, "$1 $2$3");
    }

    const raw = s.trim().split(/\s+/u).filter(Boolean);
    return raw.map(tok => tok);
  }

  /** Normalize string, optionally strip diacritics */
  protected normalize(input: string): string {
    let s = this.opts.trim ? input.trim() : input;
    s = s.normalize("NFKD");
    if (!this.opts.keepDiacritics) {
      s = s.replace(/[\u0300-\u036f]/g, "");
    }
    return s;
  }

  protected cap(t: string): string {
    if (!t) return t;
    const lower = t.toLocaleLowerCase(this.opts.locale);
    return lower.charAt(0).toLocaleUpperCase(this.opts.locale) + lower.slice(1);
  }
}

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
 * - Unicode-aware tokenization (letters & numbers), optional diacritic stripping
 * - Sensible acronym handling (e.g., "parseXMLHttpRequest" -> ["parse", "XML", "Http", "Request"])
 * - Configurable locale for casing and options per call
 */


