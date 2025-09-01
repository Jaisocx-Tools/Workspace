export interface TrimmerInterface {

  trimSurroundingChars (
    inText: string,
    inSurroundingChars: string[][]
  ): string|false;


  trimQuotes( inText: string ): string|false;


  trimRoundBraces( inText: string ): string|false;


  trimRoundBracesAndQuotesInside( inText: string ): string|false;


  trimSquareBraces( inText: string ): string|false;


  trimSquareBracesAndQuotesInside( inText: string ): string|false;


  trimFiguredBraces( inText: string ): string|false;


  trimFiguredBracesAndQuotesInside( inText: string ): string|false;

}




