export class FileWriterQueue {
    debug;
    queue = new Array();
    isWriting = false;
    namedBitsbufs;
    fileWriter;
    constructor(inFileWriter) {
        this.debug = false;
        this.fileWriter = inFileWriter;
        this.namedBitsbufs = new Object();
    }
    setDebug(inDebug) {
        this.debug = inDebug;
        return this;
    }
    enqueue(bitsbufName, range) {
        let bitsbuf = this.namedBitsbufs[bitsbufName];
        if (range[0] < 0 || range[1] > bitsbuf.byteLength || range[0] >= range[1]) {
            throw new RangeError("Start or End boundaries are out of bitsbuf size.");
        }
        this.queue.push({ bitsbuf,
            range });
        if (!this.isWriting) {
            this.processQueue();
        }
    }
    processQueue() {
        if (this.queue.length === 0) {
            this.isWriting = false;
            return;
        }
        this.isWriting = true;
        const { bitsbuf, range } = this.queue.shift();
        this.fileWriter
            .appendToFile(bitsbuf, range)
            .then(() => {
            this.processQueue();
        });
    }
}
//# sourceMappingURL=FileWriterQueue.js.map