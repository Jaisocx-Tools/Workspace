import fs from "node:fs";
import path from "node:path";
import { Buffer } from "node:buffer";
import { Stats } from "node:fs";
import { FileHandle } from "node:fs/promises";

import { FileWriterConstants } from "./FileWriterConstants.js";



export class FileWriter {

  debug: boolean;
  fileWriterConstants: FileWriterConstants;
  offsetInFile: number;
  fileHandle: FileHandle;
  filePath: string;


  constructor() {
    this.debug = false;
    this.fileWriterConstants = new FileWriterConstants();
    this.offsetInFile = 0;
    this.fileHandle = new Object() as FileHandle;
    this.filePath = "";
  }

  setDebug( inDebug: boolean ): FileWriter {
    this.debug = inDebug;

    return this;
  }


  async getFileHandleToExistingFile( 
    inFilePath: string, 
    mode: string ): Promise<FileHandle> {

    if ( fs.existsSync( inFilePath ) === false ) {
      throw new Error( `File not found: ${inFilePath}` );
    }

    this.filePath = inFilePath;

    // ask how normal without asynchronous
    let locFileHandle: FileHandle = await fs.promises.open (
      this.filePath, 
      mode
    );

    if ( this.debug === true ) {
      console.log( `File opened: ${this.filePath}` );
    }

    this.fileHandle = locFileHandle;

    return this.fileHandle;
  }


  async cleanupFileAndGetNewFileHandle( 
    inFilePath: string, 
    mode: string ): Promise<FileHandle> {
    this.filePath = inFilePath;

    if ( fs.existsSync( this.filePath ) === true ) {
      fs.unlinkSync( this.filePath );

      if ( this.debug === true ) {
        console.log( `File deleted: ${this.filePath}` );
      }
    }

    // ask create new file
    fs.writeFileSync( this.filePath, "" );
    
    if ( this.debug === true ) {
      console.log( `File touched: ${this.filePath}` );
    }

    await this.getFileHandleToExistingFile( this.filePath, mode );

    return this.fileHandle;
  }


  // TASK: few chars methods names and doc comments.
  async toAddToFileInLoop_CleanupFileAndGetNewFileHandle( inFilePath: string ): Promise<FileHandle> {
    
    await this.cleanupFileAndGetNewFileHandle( 
      inFilePath,
      this.fileWriterConstants.getFHandleModeAdd() 
    );

    return this.fileHandle;
  }


  async appendToFile (
    bitsbuf: Uint8Array,
    range: number[]
  ): Promise<void> {

    let isError: boolean = false;

    if ( this.offsetInFile === 0 ) {
      const stats = await this.fileHandle.stat(); // get current file size
      this.offsetInFile = stats.size;
    }

    try {
      await this.fileHandle.write( 
        bitsbuf,
        range[0], 
        range[1],
        this.offsetInFile
      );
    } catch ( err ) {
      isError = true;
      console.log ( err );  
    }

    if ( isError === true ) {
      await this.filehandleClose();

      throw new Error( "Error writing file" );
    }

    this.offsetInFile += ( range[1] - range[0] );
  }

  async filehandleClose(): Promise<void> {
    try {
      await this.fileHandle.close();
    } catch (err) {}

    if ( this.debug === true ) {
      console.log( "File closed." );
    }
  }

}






