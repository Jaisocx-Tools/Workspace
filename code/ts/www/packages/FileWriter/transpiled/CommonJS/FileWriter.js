"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileWriter = void 0;
const node_fs_1 = __importDefault(require("node:fs"));
const FileWriterConstants_js_1 = require("./FileWriterConstants.js");
class FileWriter {
    constructor() {
        this.debug = false;
        this.fileWriterConstants = new FileWriterConstants_js_1.FileWriterConstants();
        this.offsetInFile = 0;
        this.fileHandle = null;
        this.filePath = "";
    }
    setDebug(inDebug) {
        this.debug = inDebug;
        return this;
    }
    async getFileHandleToExistingFile(inFilePath, mode) {
        if (node_fs_1.default.existsSync(inFilePath) === false) {
            throw new Error(`File not found: ${inFilePath}`);
        }
        this.filePath = inFilePath;
        // ask how normal without asynchronous
        let locFileHandle = await node_fs_1.default.promises.open(this.filePath, mode);
        if (this.debug === true) {
            console.log(`File opened: ${this.filePath}`);
        }
        this.fileHandle = locFileHandle;
        return this.fileHandle;
    }
    async cleanupFileAndGetNewFileHandle(inFilePath, mode) {
        this.filePath = inFilePath;
        if (node_fs_1.default.existsSync(this.filePath) === true) {
            node_fs_1.default.unlinkSync(this.filePath);
            if (this.debug === true) {
                console.log(`File deleted: ${this.filePath}`);
            }
        }
        // ask create new file
        node_fs_1.default.writeFileSync(this.filePath, "");
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
exports.FileWriter = FileWriter;
//# sourceMappingURL=FileWriter.js.map