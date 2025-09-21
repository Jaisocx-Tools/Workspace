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



  toJson(): string {
    let retVal: any = {
      "cssFilePath": this.cssFilePath,
      "cssFileContents": this.cssFileContents,
      "rangesOrDtoOfImport": ""
    };

    let rangesArrayToString: any[] = [];

    for ( let elem of this.rangesOrDtoOfImport ) {
      if ( elem instanceof ParsedResultDTO ) {
        rangesArrayToString.push( elem.toJson() );
      } else {
        rangesArrayToString.push( elem );
      }
    }

    retVal["rangesOrDtoOfImport"] = rangesArrayToString;


    return retVal;
  }
}

