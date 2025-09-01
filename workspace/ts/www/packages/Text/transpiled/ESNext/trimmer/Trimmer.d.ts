import { TrimmerInterface } from "./TrimmerInterface.js";
export declare class Trimmer implements TrimmerInterface {
    SYMBOL_DOUBLE_QUOTE: string;
    SYMBOL_SINGLE_QUOTE: string;
    SYMBOL_BACKSLASH_QUOTE: string;
    SYMBOL_ROUND_BRACE_OPEN: string;
    SYMBOL_ROUND_BRACE_CLOSE: string;
    SYMBOL_SQUARE_BRACE_OPEN: string;
    SYMBOL_SQUARE_BRACE_CLOSE: string;
    SYMBOL_FIGURED_BRACE_OPEN: string;
    SYMBOL_FIGURED_BRACE_CLOSE: string;
    constructor();
    trimSurroundingChars(inText: string, inSurroundingChars: string[][]): string | false;
    trimQuotes(inText: string): string | false;
    trimRoundBraces(inText: string): string | false;
    trimRoundBracesAndQuotesInside(inText: string): string | false;
    trimSquareBraces(inText: string): string | false;
    trimSquareBracesAndQuotesInside(inText: string): string | false;
    trimFiguredBraces(inText: string): string | false;
    trimFiguredBracesAndQuotesInside(inText: string): string | false;
}
//# sourceMappingURL=Trimmer.d.ts.map