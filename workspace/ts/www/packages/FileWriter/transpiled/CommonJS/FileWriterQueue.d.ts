import { EventEmitter } from "@jaisocx/event-emitter";
import { FileWriter } from "./FileWriter";
export type QueueTask = {
    bitsbuf: Uint8Array;
    range: number[];
    bitsbufName: string;
};
export declare class FileWriterQueue extends EventEmitter {
    eventEOF: any;
    debug: boolean;
    fileWriter: FileWriter;
    isWriting: boolean;
    hasToStop: boolean;
    namedBitsbufs: any;
    queue: (QueueTask | number)[] | null;
    enqueuedId: number;
    workingQueueId: number;
    queueSizeExtendBy: number;
    constructor(inFileWriter: FileWriter, queueSize: number, extendBy: number);
    setDebug(inDebug: boolean): FileWriterQueue;
    setHasToStop(toStop: boolean): FileWriterQueue;
    setQueueSizeExtendBy(extendBy: number): FileWriterQueue;
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
    extendQueue(extendBy: number): number;
    cleanupQueue(start: number, end: number): void;
    validateOnEnqueueTask(bitsbuf: Uint8Array, range: number[]): void;
    enqueue(bitsbufName: string, range: number[]): void;
    processQueue(): void;
    filehandleClose(): void;
}
//# sourceMappingURL=FileWriterQueue.d.ts.map