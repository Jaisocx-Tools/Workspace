import fs from "node:fs";
import path from "node:path";
import { Buffer } from "node:buffer";
import { Stats } from "node:fs";
import { FileHandle } from "node:fs/promises";

import { FileWriterConstants } from "./FileWriterConstants.js";



export class FileWriter {

  debug: boolean;
  fileWriterConstants: FileWriterConstants;

  constructor() {
    this.debug = false;
  }

  setDebug( toDebug: boolean ): FileWriter {
    this.debug = toDebug;
    this.fileWriterConstants = new FileWriterConstants();

    return this;
  }



  async getFileHandleToExistingFile( filePath: string, mode: string ): Promise<FileHandle> {

    if ( fs.existsSync( filePath ) === false ) {
      throw new Error( `File not found: ${filePath}` );
    }

    // ask how normal without asynchronous
    let fileHandle: FileHandle = await fs.promises.open (
      filePath, 
      mode
    );

    if ( this.debug === true ) {
      console.log( `File opened: ${filePath}` );
    }

    return fileHandle;
    
  }



  async cleanupFileAndGetNewFileHandle( filePath: string, mode: string ): Promise<FileHandle> {

    if ( fs.existsSync( filePath ) === true ) {
      fs.unlinkSync( filePath );

      if ( this.debug === true ) {
        console.log( `File deleted: ${filePath}` );
      }
    }

    // ask create new file
    fs.writeFileSync( filePath, "" );
    
    if ( this.debug === true ) {
      console.log( `File touched: ${filePath}` );
    }

    let fileHandle: FileHandle = await this.getFileHandleToExistingFile( filePath, mode );

    return fileHandle;
  }


  // TASK: few chars methods names and doc comments.
  async toAddToFileInLoop_CleanupFileAndGetNewFileHandle( filePath: string ): Promise<FileHandle> {
    let fileHandle: FileHandle = await this.cleanupFileAndGetNewFileHandle( 
      filePath,
      this.fileWriterConstants.getFHandleModeAdd() 
    );

    return fileHandle;
  }



  async appendToFile (
    fileHandle: FileHandle,
    bitsbuf: Uint8Array,
    range: number[]
  ): Promise<void> {

    let isError: boolean = false;

    try {
      await fileHandle.appendFile( bitsbuf.subarray( 
        range[0], 
        range[1] ) );
    } catch ( err ) {
      isError = true;
      console.log ( err );  
    }

    if ( isError === true ) {
      try {
        await fileHandle.close();
      } catch (err) {}

      throw new Error( "Error writing file" );
    }

  }

}






