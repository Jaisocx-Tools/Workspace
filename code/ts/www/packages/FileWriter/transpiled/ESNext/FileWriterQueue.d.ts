import { FileWriter } from "./FileWriter";
type QueueTask = {
    bitsbuf: Uint8Array;
    range: number[];
};
export declare class FileWriterQueue {
    debug: boolean;
    queue: QueueTask[];
    isWriting: boolean;
    namedBitsbufs: any;
    fileWriter: FileWriter;
    constructor(inFileWriter: FileWriter);
    setDebug(inDebug: boolean): FileWriterQueue;
    enqueue(bitsbufName: string, range: number[]): void;
    processQueue(): void;
}
export {};
//# sourceMappingURL=FileWriterQueue.d.ts.map