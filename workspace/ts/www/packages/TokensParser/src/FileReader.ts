import fs from "node:fs";
import { Buffer } from "node:buffer";
import { Stats } from "node:fs";
import { FileHandle } from "node:fs/promises";
import { TextEncoder } from "node:util";



export class FileReader {

  textEncoder: TextEncoder;



  constructor() {
    this.textEncoder = new TextEncoder();
  }



  public readFileContentsAsBitsBuf( filePath: string ): Uint8Array {
    let fileContentsBitsBuf: Uint8Array = fs.readFileSync( filePath );


    return fileContentsBitsBuf;
  }



  public readFileContentsAsString(
    filePath: string,
    inCharsetName: string
  ): string {
    let locCharsetName: string = "ascii";

    if ( inCharsetName !== undefined && inCharsetName.length !== 0 ) {
      locCharsetName = inCharsetName;
    }

    let fileContentsBuffer: Uint8Array = this.readFileContentsAsBitsBuf( filePath );

    let decoder: TextDecoder = new TextDecoder( locCharsetName );
    let fileContents: string = decoder.decode( fileContentsBuffer );


    // console.log( fileContentsBuffer );
    console.log( fileContents );


    return fileContents;
  }



  public async readFileToBuffer( filePath: string ): Promise<Uint8Array> {
    let fileToImportStats: Stats = await fs.promises.stat( filePath );
    let fileToImportSize: number = fileToImportStats.size;
    let importedFileBuf: Buffer = Buffer.alloc( fileToImportSize );
    let fileToImportFilehandle: FileHandle = await fs.promises.open(
      filePath,
      "r"
    );

    try {
      await fileToImportFilehandle.read( importedFileBuf );
    } catch (err) {}

    try {
      await fileToImportFilehandle.close();
    } catch (err) {}


    return new Uint8Array( importedFileBuf.buffer, importedFileBuf.byteOffset, importedFileBuf.byteLength );

  }

}



