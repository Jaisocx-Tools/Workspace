export class FileWriterConstants {
    #add;
    #addAndRead;
    #read;
    #readAndWrite;
    #write;
    #writeAndRead;
    constructor() {
        this.#add = "a";
        this.#addAndRead = "a+";
        this.#read = "r";
        this.#readAndWrite = "r+";
        this.#write = "w";
        this.#writeAndRead = "w+";
    }
    getFHandleModeAdd() {
        return this.#add;
    }
    getFHandleModeAddAndRead() {
        return this.#addAndRead;
    }
    getFHandleModeRead() {
        return this.#read;
    }
    getFHandleModeReadAndWrite() {
        return this.#readAndWrite;
    }
    getFHandleModeWrite() {
        return this.#write;
    }
    getFHandleModeWriteAndRead() {
        return this.#writeAndRead;
    }
}
//# sourceMappingURL=FileWriterConstants.js.map