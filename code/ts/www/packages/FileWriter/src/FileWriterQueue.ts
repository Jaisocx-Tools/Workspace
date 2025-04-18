import { FileHandle } from "fs/promises";
import { FileWriter } from "./FileWriter";



type QueueTask = {
  bitsbuf: Uint8Array;
  range: number[];
};



export class FileWriterQueue {

  debug: boolean;
  fileWriter: FileWriter;
  isWriting = false;
  namedBitsbufs: any;
  queue: QueueTask[]|null;
  enqueuedId: number;
  workingQueueId: number;



  constructor( 
    inFileWriter: FileWriter,
    queueSize: number
  ) {
    this.queue = new Array( queueSize ) as QueueTask[];
    this.enqueuedId = 0;
    this.workingQueueId = 0;

    this.debug = false;
    this.fileWriter = inFileWriter;
    this.namedBitsbufs = new Object();
  }

  setDebug( inDebug: boolean ): FileWriterQueue {
    this.debug = inDebug;
    return this;
  }

  extendQueue( addTasksNumber: number ): number {

    // @ts-ignore
    let queueSize = this.queue.length;
    let extendedSize: number = queueSize + addTasksNumber;
    let extendedQueue: QueueTask[] = new Array( extendedSize ) as QueueTask[];

    let queueTask: QueueTask = new Object() as QueueTask;
    let firstQueueTaskId: number = this.workingQueueId;
    let lastSetQueueTaskId: number = this.enqueuedId;
    let i = 0;

    for ( i = firstQueueTaskId; i < lastSetQueueTaskId; i++ ) {
      // @ts-ignore
      queueTask = this.queue[i];
      extendedQueue[i] = {...queueTask} as QueueTask;
    }

    this.queue = null;
    this.queue = extendedQueue;

    return this.queue.length;
  }

  enqueue( 
    bitsbufName: string, 
    range: number[] ) {

    let bitsbuf: Uint8Array = this.namedBitsbufs[bitsbufName];

    if ( range[0] < 0 || range[1] > bitsbuf.byteLength || range[0] >= range[1]) {
      throw new RangeError("Start or End boundaries are out of bitsbuf size.");
    }

    // @ts-ignore
    this.queue.push({ bitsbuf, 
      range });

    if (!this.isWriting) {
      this.processQueue();
    }

  }

  processQueue(): void {

    // @ts-ignore
    if ( this.queue.length === 0 ) {
      this.isWriting = false;

      return;
    }

    this.isWriting = true;

    // @ts-ignore
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




