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
        this.fileHandle = null;
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
            // @ts-ignore
            const stats = await this.fileHandle.stat(); // get current file size
            this.offsetInFile = stats.size;
        }
        if (this.debug === true) {
            console.log("FileWriter.appendToFile()", "Before file write", range, this.filePath);
        }
        let len = (range[1] - range[0]);
        try {
            // @ts-ignore
            await this.fileHandle.write(bitsbuf, range[0], len, this.offsetInFile);
        }
        catch (err) {
            isError = true;
            console.log(err);
        }
        if (this.debug === true) {
            console.log("FileWriter.appendToFile()", "After file write", range, this.filePath);
        }
        if (isError === true) {
            await this.filehandleClose();
            throw new Error("Error writing file");
        }
        this.offsetInFile += (range[1] - range[0]);
        return 1;
    }
    async filehandleClose() {
        if (this.fileHandle === null) {
            return 0;
        }
        try {
            // @ts-ignore
            await this.fileHandle.close();
        }
        catch (err) { }
        if (this.debug === true) {
            console.log("FileWriter.filehandleClose()", "After filehandle closed.", this.filePath);
        }
        return 1;
    }
}
//# sourceMappingURL=FileWriter.js.map