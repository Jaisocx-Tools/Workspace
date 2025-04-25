export interface BaseParserInterface {
  trimQuotes(str: string): string;
  contentPreviewByRange (
    inBitsbuf: Uint8Array,
    inBitsfufRefs: number[][]  
  ): void;
  validBitsbufRefsRefine ( 
    inBitsbuf: Uint8Array,
    inBitsbufRefs: number[][], // datatype explained: [ [startRef: number, endRef: number], [startRef: number, endRef: number], ... ];
    bitsBufRefs_Refined: number[][],
    bitsBufRefs_ofTheTokenType: number[][],
    inTokens: { "setBegin": string[], "setEnd": string[] },
    maximalIterationsNumber: number
  ): void;
  getRangeOfTokensSetMatch (
    inBitsbuf: Uint8Array,
    tokenSetAsBitsbufs: Uint8Array[],
    inOutRange: number[],
    lookupStartPos: number,
    lookupEndPos: number
  ): Number|false;
  firstIndexOf ( 
    inBitsBuf: Uint8Array,
    tokenBitsBuf: Uint8Array,
    startPos: number,
    endPos: number
  ): Number|false;
}

