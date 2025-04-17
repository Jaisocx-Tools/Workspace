export class ParsedResultDTO {
    cssFilePath;
    cssFileContents;
    rangesOrDtoOfImport;
    constructor() {
        this.cssFilePath = "";
        this.cssFileContents = new Uint8Array();
        this.rangesOrDtoOfImport = [];
    }
    addParsedResult(importParseResultDTO) {
        this.rangesOrDtoOfImport.push(importParseResultDTO);
    }
    addRange(range) {
        this.rangesOrDtoOfImport.push(range);
    }
    getRangesOrDtoOfImport() {
        return this.rangesOrDtoOfImport;
    }
}
//# sourceMappingURL=ParsedResultDTO.js.map