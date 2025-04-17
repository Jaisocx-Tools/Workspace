export declare class ParsedResultDTO {
    cssFilePath: string;
    cssFileContents: Uint8Array;
    rangesOrDtoOfImport: (ParsedResultDTO | number[])[];
    constructor();
    addParsedResult(importParseResultDTO: ParsedResultDTO): void;
    addRange(range: number[]): void;
    getRangesOrDtoOfImport(): (ParsedResultDTO | number[])[];
}
//# sourceMappingURL=ParsedResultDTO.d.ts.map