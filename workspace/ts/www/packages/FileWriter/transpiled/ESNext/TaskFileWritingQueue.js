export class TaskFileWritingQueue {
    #bitsbuf;
    #range;
    constructor(inBitsbuf, inRange) {
        this.#bitsbuf = inBitsbuf;
        this.#range = inRange;
    }
    getBitsbuf() {
        return this.#bitsbuf;
    }
    getRange() {
        return this.#range;
    }
    getStart() {
        return this.#range[0];
    }
    getEnd() {
        return this.#range[1];
    }
    toObject() {
        return { "bitsbuf": this.#bitsbuf,
            "range": this.#range };
    }
    toString() {
        const taskAsObject = new Object();
        const bitsbufAsText = (new TextDecoder()).decode(this.#bitsbuf);
        taskAsObject["bitsbuf"] = bitsbufAsText;
        taskAsObject["range"] = this.#range;
        const taskAsJson = JSON.stringify(taskAsObject);
        return taskAsJson;
    }
}
//# sourceMappingURL=TaskFileWritingQueue.js.map