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
    toJson() {
        let retVal = {
            "cssFilePath": this.cssFilePath,
            "cssFileContents": this.cssFileContents,
            "rangesOrDtoOfImport": ""
        };
        let rangesArrayToString = [];
        for (let elem of this.rangesOrDtoOfImport) {
            if (elem instanceof ParsedResultDTO) {
                rangesArrayToString.push(elem.toJson());
            }
            else {
                rangesArrayToString.push(elem);
            }
        }
        retVal["rangesOrDtoOfImport"] = rangesArrayToString;
        return retVal;
    }
}
//# sourceMappingURL=ParsedResultDTO.js.map