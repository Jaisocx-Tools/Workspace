"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileReader = void 0;
const node_fs_1 = __importDefault(require("node:fs"));
const node_buffer_1 = require("node:buffer");
const node_util_1 = require("node:util");
class FileReader {
    constructor() {
        this.textEncoder = new node_util_1.TextEncoder();
    }
    readFileContentsAsBitsBuf(filePath) {
        let fileContentsBitsBuf = node_fs_1.default.readFileSync(filePath);
        return fileContentsBitsBuf;
    }
    readFileContentsAsString(filePath, inCharsetName) {
        let locCharsetName = "ascii";
        if (inCharsetName !== undefined && inCharsetName.length !== 0) {
            locCharsetName = inCharsetName;
        }
        let fileContentsBuffer = this.readFileContentsAsBitsBuf(filePath);
        let decoder = new TextDecoder(locCharsetName);
        let fileContents = decoder.decode(fileContentsBuffer);
        // console.log( fileContentsBuffer );
        console.log(fileContents);
        return fileContents;
    }
    async readFileToBuffer(filePath) {
        let fileToImportStats = await node_fs_1.default.promises.stat(filePath);
        let fileToImportSize = fileToImportStats.size;
        let importedFileBuf = node_buffer_1.Buffer.alloc(fileToImportSize);
        let fileToImportFilehandle = await node_fs_1.default.promises.open(filePath, "r");
        try {
            await fileToImportFilehandle.read(importedFileBuf);
        }
        catch (err) { }
        try {
            await fileToImportFilehandle.close();
        }
        catch (err) { }
        return new Uint8Array(importedFileBuf.buffer, importedFileBuf.byteOffset, importedFileBuf.byteLength);
    }
}
exports.FileReader = FileReader;
//# sourceMappingURL=FileReader.js.map