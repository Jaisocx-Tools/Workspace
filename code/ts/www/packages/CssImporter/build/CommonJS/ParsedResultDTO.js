"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParsedResultDTO = void 0;
class ParsedResultDTO {
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
exports.ParsedResultDTO = ParsedResultDTO;
//# sourceMappingURL=ParsedResultDTO.js.map