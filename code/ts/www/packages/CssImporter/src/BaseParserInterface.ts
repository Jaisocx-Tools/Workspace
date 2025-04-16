import { FileHandle } from "node:fs/promises";
import { ParsedResultDTO } from "./ParsedResultDTO.js";
import { BaseParser } from "./BaseParser.js";


export interface BaseParserInterface {
  getWebpackAliases(): any;
  readFileContentsAsBitsBuf( filePath: string ): Uint8Array;
  readFileContentsAsString( filePath: string, inCharsetName: string ): string;
  trimQuotes(str: string): string;
  resolveUrlBitsbufWithWebpackAlias( 
    inBitsbuf: Uint8Array, 
    filePathTextRefs: number[],
    webpackAliases: any
  ): string;
  getRangeOfTokensSetMatch (
    inBitsbuf: Uint8Array,
    inBitsBufRange: number[], // datatype explained: [startRef: number, endRef: number];
    tokenSetAsBitsbufs: Uint8Array[],
    inOutRange: number[],
    lookupStartPos: number,
    lookupEndPos: number
  ): Number|false;
  validBitsbufRefsRefine ( 
    inBitsbuf: Uint8Array,
    inBitsbufRefs: number[][], // datatype explained: [ [startRef: number, endRef: number], [startRef: number, endRef: number], ... ];
    bitsBufRefs_Refined: number[][],
    bitsBufRefs_ofTheTokenType: number[][],
    inTokens: { "setBegin": string[], "setEnd": string[] },
    maximalIterationsNumber: number
  ): void;
  firstIndexOf ( 
    inBitsBuf: Uint8Array,
    tokenBitsBuf: Uint8Array,
    startPos: number,
    endPos: number
  ): Number|false;
}

