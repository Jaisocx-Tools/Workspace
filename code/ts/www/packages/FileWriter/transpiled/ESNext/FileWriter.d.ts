import { FileHandle } from "node:fs/promises";
import { FileWriterConstants } from "./FileWriterConstants.js";
export declare class FileWriter {
    debug: boolean;
    fileWriterConstants: FileWriterConstants;
    offsetInFile: number;
    fileHandle: FileHandle;
    filePath: string;
    constructor();
    setDebug(toDebug: boolean): FileWriter;
    getFileHandleToExistingFile(inFilePath: string, mode: string): Promise<FileHandle>;
    cleanupFileAndGetNewFileHandle(inFilePath: string, mode: string): Promise<FileHandle>;
    toAddToFileInLoop_CleanupFileAndGetNewFileHandle(inFilePath: string): Promise<FileHandle>;
    appendToFile(bitsbuf: Uint8Array, range: number[]): Promise<void>;
    filehandleClose(): Promise<void>;
}
//# sourceMappingURL=FileWriter.d.ts.map