export declare class ParsedResultDTO {
    cssFilePath: string;
    cssFileContents: Uint8Array;
    rangesOrDtoOfImport: (ParsedResultDTO | number[])[];
    constructor();
    addParsedResult(importParseResultDTO: ParsedResultDTO): void;
    addRange(range: number[]): void;
    getRangesOrDtoOfImport(): (ParsedResultDTO | number[])[];
    toJson(): string;
}
//# sourceMappingURL=ParsedResultDTO.d.ts.map