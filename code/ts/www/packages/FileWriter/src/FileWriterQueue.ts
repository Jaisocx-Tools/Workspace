import { FileHandle } from "fs/promises";
import { FileWriter } from "./FileWriter";



type QueueTask = {
  bitsbuf: Uint8Array;
  range: number[];
};



export class FileWriterQueue {

  debug: boolean;
  queue: QueueTask[] = new Array() as QueueTask[];
  isWriting = false;
  namedBitsbufs: any;
  fileWriter: FileWriter;



  constructor( inFileWriter: FileWriter ) {
    this.debug = false;
    this.fileWriter = inFileWriter;
    this.namedBitsbufs = new Object();
  }

  setDebug( inDebug: boolean ): FileWriterQueue {
    this.debug = inDebug;
    return this;
  }

  enqueue( bitsbufName: string, range: number[] ) {

    let bitsbuf: Uint8Array = this.namedBitsbufs[bitsbufName];

    if ( range[0] < 0 || range[1] > bitsbuf.byteLength || range[0] >= range[1]) {
      throw new RangeError('Start or End boundaries are out of bitsbuf size.');
    }

    this.queue.push({ bitsbuf, range });

    if (!this.isWriting) {
      this.processQueue();
    }

  }

  processQueue(): void {

    if ( this.queue.length === 0 ) {
      this.isWriting = false;

      return;
    }

    this.isWriting = true;

    const { bitsbuf, range } = this.queue.shift()!;

    this.fileWriter
        .appendToFile( bitsbuf, range )
        .then (
            () => {
              this.processQueue();
            }
        );

    
  }
}




