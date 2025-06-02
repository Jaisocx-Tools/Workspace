export interface TokensParserInterface {
    trimQuotes(str: string): string;
    contentPreviewByRange(inBitsbuf: Uint8Array, inBitsfufRefs: number[][]): void;
    /**
     * @info based on method call .getRangeOfTokensSetMatch()
     * @returns number of tokensSets matched.
     * @param inBitsbuf : Uint8Array
     * @param inBitsbufRanges: number[][] the ranges of the inBitsbuf, where to lookup for start and end tokens sets.
     * @param inSeveralTokensSets: string[][], // where every tokensSet is array of datatype string[]
     * @param inOutRanges_WithoutTokenizedAreas : number[][]
     * @param inOutRanges_TokensSetsMatched : number[][][]
     * @param maxIterationsNumber : number
     */
    parseAroundSeveralTokensSets(inBitsbuf: Uint8Array, inBitsbufRanges: number[][], inSeveralTokensSets: string[][], inOutRanges_WithoutTokenizedAreas: number[][], inOutRanges_TokensSetsMatched: number[][][], maxIterationsNumber: number): number;
    /**
     * @info based on method call .getRangeOfTokensSetMatch()
     * @returns number of tokenized areas matched.
     * @param inBitsbuf : Uint8Array
     * @param inBitsbufRanges: number[][] the ranges of the inBitsbuf, where to lookup for start and end tokens sets.
     * @param inTokens : { "setBegin": string[], "setEnd": string[] }
     * @param inOutRanges_WithoutTokenizedAreas : number[][]
     * @param inOutRanges_EnbracedByTokens_Outer : number[][]
     * @param inOutRanges_EnbracedByTokens_Inner : number[][]
     * @param maximalIterationsNumber : number
     */
    parseWithStartAndEndTokensSets(inBitsbuf: Uint8Array, inBitsbufRanges: number[][], inTokens: {
        "setBegin": string[];
        "setEnd": string[];
    }, inOutRanges_WithoutTokenizedAreas: number[][], inOutRanges_EnbracedByTokens_Outer: number[][], inOutRanges_EnbracedByTokens_Inner: number[][], maximalIterationsNumber: number): number;
    /**
   * @info based on method call .firstIndexOf()
   * @description this method writes into inOutRange the start position,
   *                where in the inBitsbuf the first char of the first token
   *                of several Unit8Array tokens have matched in normal order,
   *                and writes into inOutRange, too, the number,
   *                this is the position in the inBitsbuf, where the last char of the last token
   *                of several Unit8Array tokens have matched in normal order,
   *                plus 1.
   * @param inBitsbuf
   * @param tokenSetAsBitsbufs
   * @param inOutRange
   * @param lookupStartPos
   * @returns
   */
    getRangeOfTokensSetMatch(inBitsbuf: Uint8Array, tokenSetAsBitsbufs: Uint8Array[], inOutRange: number[], lookupStartPos: number, lookupEndPos: number): Number | false;
    /**
     *
     * @param inBitsBuf
     * @param inToken_Uint8Array
     * @param inStartPos
     * @param inEndPos
     * @returns false, when the inToken_Uint8Array was not found,
     *            or the offset in the inBitsBuf Uint8Array of datatype Number,
     *            where, on the entire token match,
     *            the first byte of the inToken_Uint8Array has matched.
     *          For example: the token in the Uint8Array representation, this.textEncoder.encode("@import")
     *          in the .css file like this: "@import url("@alias/styles.css"); "
     *          the token @import has matched entirely.
     *          and the first char matched "@" on the first char in the .css file has the offset 0.
     *          then, the retun value will be 0 of datatype Number.
     *          The return value Number 0 is not the same as the return value "false" of datatype boolean.
     *          The return value "false" means, there was no text, exact as the token, in the inBitsBuf.
     */
    firstIndexOf(inBitsBuf: Uint8Array, inToken_Uint8Array: Uint8Array, inStartPos: number, inEndPos: number): Number | false;
}
//# sourceMappingURL=TokensParserInterface.d.ts.map