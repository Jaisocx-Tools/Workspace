import fs from "node:fs";
import { Buffer } from "node:buffer";
import { TextEncoder } from "node:util";
export class FileReader {
    textEncoder;
    constructor() {
        this.textEncoder = new TextEncoder();
    }
    readFileContentsAsBitsBuf(filePath) {
        let fileContentsBitsBuf = fs.readFileSync(filePath);
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
        let fileToImportStats = await fs.promises.stat(filePath);
        let fileToImportSize = fileToImportStats.size;
        let importedFileBuf = Buffer.alloc(fileToImportSize);
        let fileToImportFilehandle = await fs.promises.open(filePath, "r");
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
//# sourceMappingURL=FileReader.js.map