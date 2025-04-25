import { TextEncoder } from "node:util";
import { BaseParserInterface } from "./BaseParserInterface.js";
export declare class BaseParser implements BaseParserInterface {
    textEncoder: TextEncoder;
    constructor();
    trimQuotes(str: string): string;
    contentPreviewByRange(inBitsbuf: Uint8Array, inBitsfufRefs: number[][]): void;
    /**
     * @info based on method call .getRangeOfTokensSetMatch()
     * @param inBitsbuf
     * @param inBitsbufRefs
     * @param bitsBufRefs_Refined
     * @param bitsBufRefs_ofTheTokenType
     * @param inTokens
     * @param maximalIterationsNumber
     */
    validBitsbufRefsRefine(inBitsbuf: Uint8Array, inBitsbufRefs: number[][], // datatype explained: [ [startRef: number, endRef: number], [startRef: number, endRef: number], ... ];
    bitsBufRefs_Refined: number[][], bitsBufRefs_ofTheTokenType: number[][], inTokens: {
        "setBegin": string[];
        "setEnd": string[];
    }, maximalIterationsNumber: number): void;
    /**
     * @info based on method call .firstIndexOf()
     * @param inBitsbuf
     * @param tokenSetAsBitsbufs
     * @param inOutBitsbufRefs
     * @param lookupStartPos
     * @returns
     */
    getRangeOfTokensSetMatch(inBitsbuf: Uint8Array, tokenSetAsBitsbufs: Uint8Array[], inOutRange: number[], lookupStartPos: number, lookupEndPos: number): Number | false;
    firstIndexOf(inBitsBuf: Uint8Array, inTokenBitsBuf: Uint8Array, inStartPos: number, inEndPos: number): Number | false;
}
//# sourceMappingURL=BaseParser.d.ts.map