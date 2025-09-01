import { TrimmerInterface } from "./TrimmerInterface.js";



export class Trimmer implements TrimmerInterface {

  SYMBOL_DOUBLE_QUOTE: string = "\"";
  SYMBOL_SINGLE_QUOTE: string = "'";
  SYMBOL_BACKSLASH_QUOTE: string = "`";

  SYMBOL_ROUND_BRACE_OPEN: string = "(";
  SYMBOL_ROUND_BRACE_CLOSE: string = ")";

  SYMBOL_SQUARE_BRACE_OPEN: string = "[";
  SYMBOL_SQUARE_BRACE_CLOSE: string = "]";

  SYMBOL_FIGURED_BRACE_OPEN: string = "{";
  SYMBOL_FIGURED_BRACE_CLOSE: string = "}";



  constructor() {
    this.SYMBOL_DOUBLE_QUOTE = "\"";
    this.SYMBOL_SINGLE_QUOTE = "'";
    this.SYMBOL_BACKSLASH_QUOTE = "`";

    this.SYMBOL_ROUND_BRACE_OPEN = "(";
    this.SYMBOL_ROUND_BRACE_CLOSE = ")";

    this.SYMBOL_SQUARE_BRACE_OPEN = "[";
    this.SYMBOL_SQUARE_BRACE_CLOSE = "]";

    this.SYMBOL_FIGURED_BRACE_OPEN = "{";
    this.SYMBOL_FIGURED_BRACE_CLOSE = "}";
  }



  trimSurroundingChars (
    inText: string,
    inSurroundingChars: string[][]
  ): string|false {
    let sourceLen: number = inText.length;
    let i: number = 0;

    let trimmed: string = inText.trim();
    let trimmedLen: number = trimmed.length;
    let trimmedLastPos: number = 0;
    let trimmedFirstChar: number = 0;
    let trimmedLastChar: number = 0;

    let locSurroundingCharCodes = new Array(inSurroundingChars.length) as number[][];
    let j: number = 0;

    let chars: string[] = new Array() as string[];
    let charCodes: number[] = new Array() as number[];
    let surroundingCharsLen: number = 0;
    let char: string = "";

    for ( i = 0; i < inSurroundingChars.length; i++ ) {
      chars = inSurroundingChars[i];
      surroundingCharsLen = chars.length;

      locSurroundingCharCodes[i] = new Array(surroundingCharsLen) as number[];
      charCodes = locSurroundingCharCodes[i];

      for ( j = 0; j < surroundingCharsLen; j++ ) {
        char = chars[j];
        charCodes[j] = char.charCodeAt(0);
      }

    }

    let symbolStart: number = 0;
    let symbolFinish: number = 0;

    let matched: boolean = ( sourceLen !== trimmedLen );
    let tempText: string = "";

    for ( i = 0; i < locSurroundingCharCodes.length; i++ ) {
      trimmedLen = trimmed.length;
      trimmedLastPos = trimmedLen - 1;

      trimmedFirstChar = trimmed.charCodeAt( 0 );
      trimmedLastChar = trimmed.charCodeAt( trimmedLastPos );

      let charCodes: number[] = locSurroundingCharCodes[i];

      if ( charCodes.length === 1 ) {
        symbolStart = charCodes[0];
        symbolFinish = charCodes[0];
      } else {
        symbolStart = charCodes[0];
        symbolFinish = charCodes[1];
      }

      if (
        ( trimmedFirstChar === symbolStart ) &&
        ( trimmedLastChar === symbolFinish )
      ) {
        matched = true;
        tempText = trimmed.substring(
          1,
          trimmedLastPos
        );
        trimmed = tempText;
      }
    }

    if ( matched === false ) {
      return matched;
    }


    return trimmed;
  }



  trimQuotes( inText: string ): string|false {
    let retVal: string|boolean = this.trimSurroundingChars (
      inText,
      [
        [this.SYMBOL_DOUBLE_QUOTE],
        [this.SYMBOL_SINGLE_QUOTE]
      ]
    );


    return retVal;
  }



  trimRoundBraces( inText: string ): string|false {
    let retVal: string|boolean = this.trimSurroundingChars (
      inText,
      [
        [this.SYMBOL_ROUND_BRACE_OPEN, this.SYMBOL_ROUND_BRACE_CLOSE]
      ]
    );


    return retVal;
  }



  trimRoundBracesAndQuotesInside( inText: string ): string|false {
    let retVal: string|boolean = this.trimSurroundingChars (
      inText,
      [
        [this.SYMBOL_ROUND_BRACE_OPEN, this.SYMBOL_ROUND_BRACE_CLOSE],
        [this.SYMBOL_DOUBLE_QUOTE],
        [this.SYMBOL_SINGLE_QUOTE]
      ]
    );


    return retVal;
  }



  trimSquareBraces( inText: string ): string|false {
    let retVal: string|boolean = this.trimSurroundingChars (
      inText,
      [
        [this.SYMBOL_SQUARE_BRACE_OPEN, this.SYMBOL_SQUARE_BRACE_CLOSE]
      ]
    );


    return retVal;
  }



  trimSquareBracesAndQuotesInside( inText: string ): string|false {
    let retVal: string|boolean = this.trimSurroundingChars (
      inText,
      [
        [this.SYMBOL_SQUARE_BRACE_OPEN, this.SYMBOL_SQUARE_BRACE_CLOSE],
        [this.SYMBOL_DOUBLE_QUOTE],
        [this.SYMBOL_SINGLE_QUOTE]
      ]
    );


    return retVal;
  }



  trimFiguredBraces( inText: string ): string|false {
    let retVal: string|boolean = this.trimSurroundingChars (
      inText,
      [
        [this.SYMBOL_FIGURED_BRACE_OPEN, this.SYMBOL_FIGURED_BRACE_CLOSE]
      ]
    );


    return retVal;
  }



  trimFiguredBracesAndQuotesInside( inText: string ): string|false {
    let retVal: string|boolean = this.trimSurroundingChars (
      inText,
      [
        [this.SYMBOL_FIGURED_BRACE_OPEN, this.SYMBOL_FIGURED_BRACE_CLOSE],
        [this.SYMBOL_DOUBLE_QUOTE],
        [this.SYMBOL_SINGLE_QUOTE]
      ]
    );


    return retVal;
  }

}






