import fs from "node:fs";
import { FileWriterConstants } from "./FileWriterConstants.js";
export class FileWriter {
    debug;
    fileWriterConstants;
    offsetInFile;
    fileHandle;
    filePath;
    constructor() {
        this.debug = false;
        this.fileWriterConstants = new FileWriterConstants();
        this.offsetInFile = 0;
        this.fileHandle = new Object();
        this.filePath = "";
    }
    setDebug(inDebug) {
        this.debug = inDebug;
        return this;
    }
    async getFileHandleToExistingFile(inFilePath, mode) {
        if (fs.existsSync(inFilePath) === false) {
            throw new Error(`File not found: ${inFilePath}`);
        }
        this.filePath = inFilePath;
        // ask how normal without asynchronous
        let locFileHandle = await fs.promises.open(this.filePath, mode);
        if (this.debug === true) {
            console.log(`File opened: ${this.filePath}`);
        }
        this.fileHandle = locFileHandle;
        return this.fileHandle;
    }
    async cleanupFileAndGetNewFileHandle(inFilePath, mode) {
        this.filePath = inFilePath;
        if (fs.existsSync(this.filePath) === true) {
            fs.unlinkSync(this.filePath);
            if (this.debug === true) {
                console.log(`File deleted: ${this.filePath}`);
            }
        }
        // ask create new file
        fs.writeFileSync(this.filePath, "");
        if (this.debug === true) {
            console.log(`File touched: ${this.filePath}`);
        }
        await this.getFileHandleToExistingFile(this.filePath, mode);
        return this.fileHandle;
    }
    // TASK: few chars methods names and doc comments.
    async toAddToFileInLoop_CleanupFileAndGetNewFileHandle(inFilePath) {
        await this.cleanupFileAndGetNewFileHandle(inFilePath, this.fileWriterConstants.getFHandleModeAdd());
        return this.fileHandle;
    }
    async appendToFile(bitsbuf, range) {
        let isError = false;
        if (this.offsetInFile === 0) {
            const stats = await this.fileHandle.stat(); // get current file size
            this.offsetInFile = stats.size;
        }
        try {
            await this.fileHandle.write(bitsbuf, range[0], range[1], this.offsetInFile);
        }
        catch (err) {
            isError = true;
            console.log(err);
        }
        if (isError === true) {
            await this.filehandleClose();
            throw new Error("Error writing file");
        }
        this.offsetInFile += (range[1] - range[0]);
    }
    async filehandleClose() {
        try {
            await this.fileHandle.close();
        }
        catch (err) { }
        if (this.debug === true) {
            console.log("File closed.");
        }
    }
}
//# sourceMappingURL=FileWriter.js.map