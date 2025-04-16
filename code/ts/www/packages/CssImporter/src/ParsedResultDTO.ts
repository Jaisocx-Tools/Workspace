import { Buffer } from "node:buffer";


export class ParsedResultDTO {
  cssFilePath: string;
  cssFileContents: Uint8Array;

  rangesOrDtoOfImport: (ParsedResultDTO|number[])[];

  constructor() {
    this.cssFilePath = "";
    this.cssFileContents = new Uint8Array();
    this.rangesOrDtoOfImport = [];
  }

  addParsedResult(importParseResultDTO: ParsedResultDTO) {
    this.rangesOrDtoOfImport.push(importParseResultDTO);
  }

  addRange(range: number[]) {
    this.rangesOrDtoOfImport.push(range);
  }
  getRangesOrDtoOfImport(): (ParsedResultDTO|number[])[] {
    return this.rangesOrDtoOfImport;
  }

}

