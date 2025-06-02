export declare class CharcodeConverter {
    static LOOKUP_ITERATIONS_MAX: number;
    static CHAR_NOT_FOUND: number;
    static LETTER_PROP_POINTER: number;
    static CHARCODE_PROP_POINTER: number;
    static CHARSET_LATIN: string;
    protected _charToNum_AlignedSymbolsCodes: number[];
    protected _charToNum_AlignedSymbols: string[];
    protected _numToChar: string[];
    protected _charcodes: any;
    protected _loadedRanges: Set<string>;
    protected _lookupIterationsMax: number;
    protected _debug: boolean;
    protected static _instance: CharcodeConverter | null;
    constructor();
    static getInstance(): CharcodeConverter;
    protected _init(): undefined;
    setDebug(inDebug: boolean): CharcodeConverter;
    setLookupIterationsMax(iterationsMax: number): CharcodeConverter;
    log(key: any, data: any): undefined;
    stringToArray(text: string, autoload: number): Uint16Array;
    arrayToString(buf: Uint16Array, autoload: number): string;
    getChar(charcode: number): string;
    getCharcode(target: string): number;
    getCharAndAutoload(charcode: number): string;
    getCharcodeAndAutoload(target: string): number;
    loadCharsetByChar(char: string): void;
    loadCharsetByCharcode(charcode: number): void;
    preloadCharsetBasedOnLanguage(): undefined;
    detectCharset(): string;
    detectSiteLanguage(): string;
    detectSiteCountry(): string;
    detectBrowserAcceptLanguage(): string;
    loadCharset(charsetKey: string): undefined;
}
//# sourceMappingURL=CharcodeConverter.d.ts.map