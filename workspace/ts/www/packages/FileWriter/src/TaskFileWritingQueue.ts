export class TaskFileWritingQueue {
  #bitsbuf: Uint8Array;
  #range: number[];



  constructor(
    inBitsbuf: Uint8Array,
    inRange: number[]
  ) {
    this.#bitsbuf = inBitsbuf;
    this.#range = inRange;
  }



  getBitsbuf(): Uint8Array {
    return this.#bitsbuf;
  }



  getRange(): number[] {
    return this.#range;
  }



  getStart(): number {
    return this.#range[0];
  }



  getEnd(): number {
    return this.#range[1];
  }



  toObject(): object {
    return { "bitsbuf": this.#bitsbuf,
      "range": this.#range };
  }



  toString(): string {
    const taskAsObject: any = new Object();

    const bitsbufAsText: string = (new TextDecoder()).decode( this.#bitsbuf );
    taskAsObject["bitsbuf"] = bitsbufAsText;
    taskAsObject["range"] = this.#range;

    const taskAsJson: string = JSON.stringify( taskAsObject );


    return taskAsJson;
  }
}