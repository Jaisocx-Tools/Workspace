import * as fs from "node:fs";


export class JsonWriter {

  filePath: string;

  constructor() {
    this.filePath = "";
  }


  saveData( 
    inFilePath: string, 
    data: any ): number {
    let json: string = JSON.stringify( data, null, 2 );

    fs.writeFileSync( 
      inFilePath, 
      json, 
      { encoding: "utf-8" } );
    this.filePath = inFilePath;

    return 1;
  }

}


