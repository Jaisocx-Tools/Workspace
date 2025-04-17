import { FileHandle } from "node:fs/promises";
import { CssImporterConstants } from "./CssImporterConstants.js";
import { BaseParserInterface } from "./BaseParserInterface.js";
export declare class BaseParser implements BaseParserInterface {
    cssImporterConstants: CssImporterConstants;
    webpackAliases: any;
    textEncoder: TextEncoder;
    textDecoder: TextDecoder;
    cssTokens: any;
    constructor();
    setWebpackAliases(aliasesObject: any, packageRoot: string): BaseParser;
    getWebpackAliases(): any;
    trimQuotes(str: string): string;
    readFileContentsAsBitsBuf(filePath: string): Uint8Array;
    readFileContentsAsString(filePath: string, inCharsetName: string): string;
    /**
     *
     * @param inBitsbuf
     * @param filePathTextRefs
     * @param webpackAliases the object, read from the file webpack.aliases.json
     * @returns
     */
    resolveUrlBitsbufWithWebpackAlias(inBitsbuf: Uint8Array, filePathTextRefs: number[], webpackAliases: any): string;
    contentPreviewByRange(inBitsbuf: Uint8Array<ArrayBuffer> | undefined, inBitsfufRefs: number[][]): void;
    readFileToBuffer(filePath: string): Promise<Uint8Array>;
    appendToFile(fd: FileHandle, bitsbuf: Uint8Array, range: number[]): Promise<void>;
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
     * @param inBitsBufRange the start and end refs in the inBitsbuf, normally the file contents bits buffer.
     * @param tokenSetAsBitsbufs
     * @param inOutBitsbufRefs
     * @param lookupStartPos
     * @returns
     */
    getRangeOfTokensSetMatch(inBitsbuf: Uint8Array, inBitsBufRange: number[], // datatype explained: [startRef: number, endRef: number];
    tokenSetAsBitsbufs: Uint8Array[], inOutRange: number[], lookupStartPos: number, lookupEndPos: number): Number | false;
    firstIndexOf(inBitsBuf: Uint8Array, inTokenBitsBuf: Uint8Array, inStartPos: number, inEndPos: number): Number | false;
}
//# sourceMappingURL=BaseParser.d.ts.map