"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileWriterQueue = void 0;
// import { FileHandle } from "fs/promises";
const event_emitter_1 = require("@jaisocx/event-emitter");
class FileWriterQueue extends event_emitter_1.EventEmitter {
    // future task for the fine tuning of the queue array growth.
    // the idea is to estimate the intensity of writing tasks,
    // the fixed queue array size to have an imagination on RAM usage extensivity,
    // and when the new task id is over the queue array size,
    // and the working tasks still left and are writing,
    // whether to place the new tasks into the slower queueTasks array,
    // this uses dynamic reallocation algorythm just via .push() without methods for a software engineer
    // to enborder precise the queue array growth.
    //
    // for now, the fixed size queue array grows automatique on the event,
    // that the new task id is above queue array size,
    // and there are still some enqueued tasks set to be written,
    // and they are not written at this moment.
    // for the file writing task this would let us know,
    // the writing task intensity is high,
    // and the queue array size grows.
    // toWaitWhenLeftPercentage: number;
    // toWaitWhenLeftTasksNumber: number;
    constructor(inFileWriter, queueSize, extendBy) {
        super();
        this.eventEOF = {
            eventName: "EOF",
            eventDescription: "File was written until EOF."
        };
        this.queueSizeExtendBy = 120;
        if (extendBy >= 1) {
            this.queueSizeExtendBy = extendBy;
        }
        if (queueSize === 0) {
            queueSize = this.queueSizeExtendBy;
        }
        this.queue = new Array(queueSize);
        this.enqueuedId = 0;
        this.workingQueueId = 0;
        this.debug = false;
        this.fileWriter = inFileWriter;
        this.isWriting = false;
        this.hasToStop = false;
        this.namedBitsbufs = new Object();
    }
    // method to write to the console infos from methods.
    setDebug(inDebug) {
        this.debug = inDebug;
        return this;
    }
    setHasToStop(toStop) {
        this.hasToStop = toStop;
        if (this.debug === true) {
            console.log(`FileWriterQueue.setHasToStop( ${toStop} )`);
        }
        return this;
    }
    // fine tuning mehod
    setQueueSizeExtendBy(extendBy) {
        this.queueSizeExtendBy = extendBy;
        return this;
    }
    /**
     * @description instantiates the new QueueTasks array of bigger size,
     *                previous tasks waiting, not written, are copied to this new array.
     *                When this method called on queue overflow,
     *                extendBy is set by value this.queueSizeExtendBy: number
     *                value set in the constructor = 102.
     *                set method is .setQueueSizeExtendBy( extendBy: number );
     *
     * @param extendBy
     * @returns
     */
    extendQueue(extendBy) {
        // @ts-ignore
        let queueSize = this.queue.length;
        let extendedSize = queueSize + extendBy;
        let extendedQueue = new Array(extendedSize);
        let queueTask = new Object();
        let firstQueueTaskId = this.workingQueueId;
        let lastSetQueueTaskId = this.enqueuedId;
        let i = 0;
        for (i = firstQueueTaskId; i < lastSetQueueTaskId; i++) {
            // @ts-ignore
            queueTask = this.queue[i];
            extendedQueue[i] = Object.assign({}, queueTask);
        }
        this.queue = null;
        this.queue = extendedQueue;
        return this.queue.length;
    }
    cleanupQueue(start, end) {
        if (start < 0) {
            start = 0;
        }
        // @ts-ignore
        if ((end === 0) || (end > (this.queue.length - 1))) {
            // @ts-ignore
            end = (this.queue.length - 1);
        }
        let queuTaskId = start;
        const cleanupValue = 1;
        for (queuTaskId = start; queuTaskId < end; queuTaskId++) {
            // @ts-ignore
            this.queue[queuTaskId] = cleanupValue;
        }
    }
    validateOnEnqueueTask(bitsbuf, range) {
        if (range[0] === range[1]) {
            console.error("Range start and end are the same. Skipping enqueueing and writing of this range...");
            return;
        }
        if (range[0] < 0 || range[0] > range[1] || range[1] > bitsbuf.byteLength) {
            throw new Error("Start or End boundaries are out of bitsbuf size.");
        }
        // @ts-ignore
        if (this.enqueuedId === this.queue.length) {
            // @ts-ignore
            if (this.workingQueueId === this.queue.length) {
                this.workingQueueId = 0;
                this.enqueuedId = 0;
            }
            else {
                this.extendQueue(this.queueSizeExtendBy);
            }
        }
    }
    enqueue(bitsbufName, range) {
        let bitsbuf = this.namedBitsbufs[bitsbufName];
        if (bitsbuf === undefined) {
            throw new Error(`Named bits buf "${bitsbufName}" was not set in this queue.`);
        }
        try {
            this.validateOnEnqueueTask(bitsbuf, range);
        }
        catch (err) {
            console.error(err, bitsbufName, bitsbuf, bitsbuf.length, range);
            throw err;
        }
        if (this.debug === true) {
            // @ts-ignore
            this.queue[this.enqueuedId] = {
                bitsbuf,
                range,
                "bitsbufName": bitsbufName
            };
        }
        else {
            // @ts-ignore
            this.queue[this.enqueuedId] = {
                bitsbuf,
                range,
                "bitsbufName": ""
            };
        }
        this.enqueuedId++;
        if (!this.isWriting) {
            this.processQueue();
        }
    }
    processQueue() {
        // @ts-ignore
        this.isWriting = true;
        // @ts-ignore
        const queueTask = this.queue[this.workingQueueId];
        if (this.debug === true) {
            console.log("FileWriterQueue.processQueue()", "Before fileWriter.appendToFile()", queueTask);
        }
        this.fileWriter
            .appendToFile(queueTask.bitsbuf, queueTask.range)
            .then((_arg1) => {
            this.workingQueueId++;
            // checks, whether last written was the last task in the queue.
            if (this.workingQueueId === this.enqueuedId) {
                this.isWriting = false;
                if (this.hasToStop === true) {
                    this.fileWriter.filehandleClose()
                        .then((_arg2) => {
                        // emit event "File was written until EOF."
                        this.emitEvent(this.eventEOF.eventName, { eventDescription: "in FileWriterQueue.processQueue() on hasToStop = true, " + this.eventEOF.eventDescription });
                    });
                }
                return 1;
            }
            this.processQueue();
        });
    }
    filehandleClose() {
        if (this.isWriting === true) {
            this.setHasToStop(true);
        }
        if ((this.workingQueueId > this.enqueuedId) === false) {
            if (this.debug === true) {
                console.error("FileWriterQueue.filehandleClose(): ", "setHasToStop(true), and exists, since the queue was not written to the target file.", this.workingQueueId, this.enqueuedId);
            }
            return;
        }
        this.fileWriter.filehandleClose()
            .then((_arg) => {
            // emit event "File was written until EOF."
            this.emitEvent(this.eventEOF.eventName, { eventDescription: "in FileWriterQueue.filehandleClose(), " + this.eventEOF.eventDescription });
        });
        return;
    }
}
exports.FileWriterQueue = FileWriterQueue;
//# sourceMappingURL=FileWriterQueue.js.map