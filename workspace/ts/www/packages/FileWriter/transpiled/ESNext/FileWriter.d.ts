import { FileHandle } from "node:fs/promises";
import { TextEncoder, TextDecoder } from "util";
import { FileWriterConstants } from "./FileWriterConstants.js";
export declare class FileWriter {
    debug: boolean;
    fileWriterConstants: FileWriterConstants;
    offsetInFile: number;
    fileHandle: FileHandle | null;
    filePath: string;
    textDecoder: TextDecoder;
    textEncoder: TextEncoder;
    constructor();
    setDebug(inDebug: boolean): FileWriter;
    initFileHandleToExistingFile(inFilePath: string, mode: string): Promise<number>;
    cleanupFileAndGetNewFileHandle(inFilePath: string, mode: string): Promise<number>;
    toAddToFileInLoop_CleanupFileAndGetNewFileHandle(inFilePath: string): Promise<number>;
    rewriteFileWithBitsbuf(filePath: string, content: Uint8Array): Promise<number>;
    rewriteFileWithBitsbufByRange(filePath: string, content: Uint8Array, range: number[]): Promise<number>;
    rewriteFileWithMixedArray(filePath: string, content: (Uint8Array | Uint8Array[])[]): Promise<number>;
    appendFlatArrayToFile(bitbufs: Uint8Array[]): Promise<number>;
    appendMixedArrayToFile(bitbufs: (Uint8Array | Uint8Array[])[]): Promise<number>;
    appendTextArrayToFile(textArray: (string[] | string)[]): Promise<number>;
    appendTextToFile(content: string): Promise<number>;
    appendBitsbufToFile(bitsbuf: Uint8Array): Promise<number>;
    appendToFile(bitsbuf: Uint8Array, range: number[]): Promise<number>;
    filehandleClose(): Promise<number>;
    concatUint8Arrays(arrays: Uint8Array[]): Uint8Array;
}
//# sourceMappingURL=FileWriter.d.ts.map