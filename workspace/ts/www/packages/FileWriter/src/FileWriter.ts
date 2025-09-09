//@ts-ignore
import fs from "node:fs";


//@ts-ignore
import { Stats } from "node:fs";


//@ts-ignore
import { FileHandle } from "node:fs/promises";


//@ts-ignore
import { TextEncoder, TextDecoder } from "util";



import { FileWriterConstants } from "./FileWriterConstants.js";



export class FileWriter {

  debug: boolean;
  fileWriterConstants: FileWriterConstants;
  offsetInFile: number;
  fileHandle: FileHandle|null;
  filePath: string;
  textDecoder: TextDecoder;
  textEncoder: TextEncoder;



  constructor() {
    this.debug = false;
    this.fileWriterConstants = new FileWriterConstants();
    this.offsetInFile = 0;
    this.fileHandle = null;
    this.filePath = "";
    this.textDecoder = new TextDecoder("utf-8");
    this.textEncoder = new TextEncoder();
  }



  setDebug( inDebug: boolean ): FileWriter {
    this.debug = inDebug;


    return this;
  }



  async initFileHandleToExistingFile (
    inFilePath: string,
    mode: string
  ): Promise<number> {
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


    return 1;
  }



  async cleanupFileAndGetNewFileHandle(
    inFilePath: string,
    mode: string
  ): Promise<number> {
    this.offsetInFile = 0;
    this.filePath = inFilePath;

    if ( fs.existsSync( this.filePath ) === true ) {
      fs.unlinkSync( this.filePath );

      if ( this.debug === true ) {
        console.log( `File deleted: ${this.filePath}` );
      }
    }


    // ask create new file
    fs.writeFileSync(
      this.filePath,
      ""
    );

    if ( this.debug === true ) {
      console.log( `File touched: ${this.filePath}` );
    }

    let opened: number = await this.initFileHandleToExistingFile(
      this.filePath,
      mode
    );


    return opened;
  }


  // TASK: few chars methods names and doc comments.
  async toAddToFileInLoop_CleanupFileAndGetNewFileHandle( inFilePath: string ): Promise<number> {
    let opened: number = await this.cleanupFileAndGetNewFileHandle (
      inFilePath,
      this.fileWriterConstants.getFHandleModeAdd()
    );


    return opened;
  }



  async rewriteFileWithBitsbuf (
    filePath: string,
    content: Uint8Array
  ): Promise<number> {

    //@ts-ignore
    let opened: number = await this.cleanupFileAndGetNewFileHandle (
      filePath,
      this.fileWriterConstants.getFHandleModeWrite()
    );


    //@ts-ignore
    let written: number = await this.appendBitsbufToFile( content );


    //@ts-ignore
    let closed: number = await this.filehandleClose();


    return 1;
  }



  async rewriteFileWithBitsbufByRange (
    filePath: string,
    content: Uint8Array,
    range: number[]
  ): Promise<number> {

    //@ts-ignore
    let opened: number = await this.cleanupFileAndGetNewFileHandle (
      filePath,
      this.fileWriterConstants.getFHandleModeWrite()
    );


    //@ts-ignore
    let written: number = await this.appendToFile(
      content,
      range
    );


    //@ts-ignore
    let closed: number = await this.filehandleClose();


    return 1;
  }



  async rewriteFileWithMixedArray (
    filePath: string,
    content: (Uint8Array|Uint8Array[])[]
  ): Promise<number> {

    //@ts-ignore
    let opened: number = await this.toAddToFileInLoop_CleanupFileAndGetNewFileHandle( filePath );


    //@ts-ignore
    let written: number = await this.appendMixedArrayToFile( content );


    //@ts-ignore
    let closed: number = await this.filehandleClose();


    return 1;
  }


  // not as flexible like <Mixed>, however little bit faster.
  async appendFlatArrayToFile (
    bitbufs: Uint8Array[]
  ): Promise<number> {
    let i: number = 0;
    let textArrayLen: number = bitbufs.length;
    let content: Uint8Array|Uint8Array[];

    for ( i = 0; i < textArrayLen; i++ ) {
      content = bitbufs[i];

      if ( this.debug === true ) {
        let text: string = this.textDecoder.decode( content );
        console.info( text );
      }

      await this.appendBitsbufToFile( content );
    }


    return 1;
  }



  async appendMixedArrayToFile (
    bitbufs: (Uint8Array|Uint8Array[])[]
  ): Promise<number> {
    let i: number = 0;
    let textArrayLen: number = bitbufs.length;
    let content: Uint8Array|Uint8Array[];
    let joinedArray: Uint8Array = new Uint8Array();

    for ( i = 0; i < textArrayLen; i++ ) {
      content = bitbufs[i];

      if ( typeof content[0] === "number" ) {

        // UintArray
        // @ts-ignore
        joinedArray = content;


      // @ts-ignore
      } else if ( typeof content[0][0] === "number" ) {

        // UintArray[]
        // @ts-ignore
        joinedArray = this.concatUint8Arrays( content );
      }

      if ( this.debug === true ) {
        let mediaConstantLineText: string = this.textDecoder.decode( joinedArray );
        console.info( mediaConstantLineText );
      }

      await this.appendBitsbufToFile( joinedArray );
    }


    return 1;
  }



  async appendTextArrayToFile (
    textArray: (string[]|string)[]
  ): Promise<number> {
    let content: string[]|string;
    let textArrayLen: number = textArray.length;
    let i = 0;

    for ( i = 0; i < textArrayLen; i++ ) {
      content = textArray[i];

      if ( Array.isArray( content ) ) {
        await this.appendTextArrayToFile( content );
      } else {
        await this.appendTextToFile( content );
      }

    }


    return 1;
  }



  async appendTextToFile (
    content: string
  ): Promise<number> {
    let bitsbuf: Uint8Array = this.textEncoder.encode( content );
    let range: number[] = new Array() as number[];

    range[0] = 0;
    range[1] = bitsbuf.byteLength;

    let retVal: number = await this.appendToFile (
      bitsbuf,
      range
    );


    return retVal;
  }



  async appendBitsbufToFile (
    bitsbuf: Uint8Array
  ): Promise<number> {
    let bitsbufLen: number = bitsbuf.byteLength;

    let range: number[] =   [0, bitsbufLen];

    let retVal: number = await this.appendToFile(
      bitsbuf,
      range
    );


    return retVal;
  }



  async appendToFile (
    bitsbuf: Uint8Array,
    range: number[]
  ): Promise<number> {
    let isError: boolean = false;

    if ( this.offsetInFile === 0 ) {

      // @ts-ignore
      const stats: Stats = await this.fileHandle.stat();


      // get current file size
      this.offsetInFile = stats.size;
    }

    if ( this.debug === true ) {
      console.log(
        "FileWriter.appendToFile()",
        "Before file write",
        range,
        this.filePath
      );
    }
    let len: number = ( range[1] - range[0] );

    try {

      // @ts-ignore
      await this.fileHandle.write(
        bitsbuf,
        range[0],
        len,
        this.offsetInFile
      );
    } catch ( err ) {
      isError = true;
      console.log ( err );
    }

    if ( this.debug === true ) {
      console.log(
        "FileWriter.appendToFile()",
        "After file write",
        range,
        this.filePath
      );
    }

    if ( isError === true ) {
      await this.filehandleClose();

      throw new Error( "Error writing file" );
    }

    this.offsetInFile += ( range[1] - range[0] );


    return 1;
  }



  async filehandleClose(): Promise<number> {

    if ( this.fileHandle === null ) {
      return 0;
    }

    try {

      // @ts-ignore
      await this.fileHandle.close();
    } catch (err) {}

    if ( this.debug === true ) {
      console.log(
        "FileWriter.filehandleClose()",
        "After filehandle closed.",
        this.filePath
      );
    }


    return 1;
  }



  concatUint8Arrays(arrays: Uint8Array[]): Uint8Array {
    const totalLength: number = arrays.reduce(
      (sum: number, arr: Uint8Array) => {
        return ( sum + arr.length );
      },
      0
    );


    // ret value
    let result: Uint8Array = new Uint8Array( totalLength );

    let arr: Uint8Array = new Uint8Array();
    let offset: number = 0;

    for ( arr of arrays ) {
      result.set([...arr], offset);
      offset += arr.length;
    }


    return result;
  }

}






