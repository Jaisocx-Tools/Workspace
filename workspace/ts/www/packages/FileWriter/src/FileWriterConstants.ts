export class FileWriterConstants {

  #add: string;
  #addAndRead: string;
  #read: string;
  #readAndWrite: string;
  #write: string;
  #writeAndRead: string;



  constructor() {
    this.#add = "a";
    this.#addAndRead = "a+";
    this.#read = "r";
    this.#readAndWrite = "r+";
    this.#write = "w";
    this.#writeAndRead = "w+";
  }



  getFHandleModeAdd(): string {
    return this.#add;
  }



  getFHandleModeAddAndRead(): string {
    return this.#addAndRead;
  }



  getFHandleModeRead(): string {
    return this.#read;
  }



  getFHandleModeReadAndWrite(): string {
    return this.#readAndWrite;
  }



  getFHandleModeWrite(): string {
    return this.#write;
  }



  getFHandleModeWriteAndRead(): string {
    return this.#writeAndRead;
  }

}






