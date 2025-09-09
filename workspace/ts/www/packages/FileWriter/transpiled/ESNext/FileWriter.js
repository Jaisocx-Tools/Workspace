//@ts-ignore
import fs from "node:fs";
//@ts-ignore
import { TextEncoder, TextDecoder } from "util";
import { FileWriterConstants } from "./FileWriterConstants.js";
export class FileWriter {
    debug;
    fileWriterConstants;
    offsetInFile;
    fileHandle;
    filePath;
    textDecoder;
    textEncoder;
    constructor() {
        this.debug = false;
        this.fileWriterConstants = new FileWriterConstants();
        this.offsetInFile = 0;
        this.fileHandle = null;
        this.filePath = "";
        this.textDecoder = new TextDecoder("utf-8");
        this.textEncoder = new TextEncoder();
    }
    setDebug(inDebug) {
        this.debug = inDebug;
        return this;
    }
    async initFileHandleToExistingFile(inFilePath, mode) {
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
        return 1;
    }
    async cleanupFileAndGetNewFileHandle(inFilePath, mode) {
        this.offsetInFile = 0;
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
        let opened = await this.initFileHandleToExistingFile(this.filePath, mode);
        return opened;
    }
    // TASK: few chars methods names and doc comments.
    async toAddToFileInLoop_CleanupFileAndGetNewFileHandle(inFilePath) {
        let opened = await this.cleanupFileAndGetNewFileHandle(inFilePath, this.fileWriterConstants.getFHandleModeAdd());
        return opened;
    }
    async rewriteFileWithBitsbuf(filePath, content) {
        //@ts-ignore
        let opened = await this.cleanupFileAndGetNewFileHandle(filePath, this.fileWriterConstants.getFHandleModeWrite());
        //@ts-ignore
        let written = await this.appendBitsbufToFile(content);
        //@ts-ignore
        let closed = await this.filehandleClose();
        return 1;
    }
    async rewriteFileWithBitsbufByRange(filePath, content, range) {
        //@ts-ignore
        let opened = await this.cleanupFileAndGetNewFileHandle(filePath, this.fileWriterConstants.getFHandleModeWrite());
        //@ts-ignore
        let written = await this.appendToFile(content, range);
        //@ts-ignore
        let closed = await this.filehandleClose();
        return 1;
    }
    async rewriteFileWithMixedArray(filePath, content) {
        //@ts-ignore
        let opened = await this.toAddToFileInLoop_CleanupFileAndGetNewFileHandle(filePath);
        //@ts-ignore
        let written = await this.appendMixedArrayToFile(content);
        //@ts-ignore
        let closed = await this.filehandleClose();
        return 1;
    }
    // not as flexible like <Mixed>, however little bit faster.
    async appendFlatArrayToFile(bitbufs) {
        let i = 0;
        let textArrayLen = bitbufs.length;
        let content;
        for (i = 0; i < textArrayLen; i++) {
            content = bitbufs[i];
            if (this.debug === true) {
                let text = this.textDecoder.decode(content);
                console.info(text);
            }
            await this.appendBitsbufToFile(content);
        }
        return 1;
    }
    async appendMixedArrayToFile(bitbufs) {
        let i = 0;
        let textArrayLen = bitbufs.length;
        let content;
        let joinedArray = new Uint8Array();
        for (i = 0; i < textArrayLen; i++) {
            content = bitbufs[i];
            if (typeof content[0] === "number") {
                // UintArray
                // @ts-ignore
                joinedArray = content;
                // @ts-ignore
            }
            else if (typeof content[0][0] === "number") {
                // UintArray[]
                // @ts-ignore
                joinedArray = this.concatUint8Arrays(content);
            }
            if (this.debug === true) {
                let mediaConstantLineText = this.textDecoder.decode(joinedArray);
                console.info(mediaConstantLineText);
            }
            await this.appendBitsbufToFile(joinedArray);
        }
        return 1;
    }
    async appendTextArrayToFile(textArray) {
        let content;
        let textArrayLen = textArray.length;
        let i = 0;
        for (i = 0; i < textArrayLen; i++) {
            content = textArray[i];
            if (Array.isArray(content)) {
                await this.appendTextArrayToFile(content);
            }
            else {
                await this.appendTextToFile(content);
            }
        }
        return 1;
    }
    async appendTextToFile(content) {
        let bitsbuf = this.textEncoder.encode(content);
        let range = new Array();
        range[0] = 0;
        range[1] = bitsbuf.byteLength;
        let retVal = await this.appendToFile(bitsbuf, range);
        return retVal;
    }
    async appendBitsbufToFile(bitsbuf) {
        let bitsbufLen = bitsbuf.byteLength;
        let range = [0, bitsbufLen];
        let retVal = await this.appendToFile(bitsbuf, range);
        return retVal;
    }
    async appendToFile(bitsbuf, range) {
        let isError = false;
        if (this.offsetInFile === 0) {
            // @ts-ignore
            const stats = await this.fileHandle.stat();
            // get current file size
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
    concatUint8Arrays(arrays) {
        const totalLength = arrays.reduce((sum, arr) => {
            return (sum + arr.length);
        }, 0);
        // ret value
        let result = new Uint8Array(totalLength);
        let arr = new Uint8Array();
        let offset = 0;
        for (arr of arrays) {
            result.set([...arr], offset);
            offset += arr.length;
        }
        return result;
    }
}
//# sourceMappingURL=FileWriter.js.map