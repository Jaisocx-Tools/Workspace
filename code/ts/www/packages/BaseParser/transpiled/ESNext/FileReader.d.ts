import { TextEncoder } from "node:util";
export declare class FileReader {
    textEncoder: TextEncoder;
    constructor();
    readFileContentsAsBitsBuf(filePath: string): Uint8Array;
    readFileContentsAsString(filePath: string, inCharsetName: string): string;
    readFileToBuffer(filePath: string): Promise<Uint8Array>;
}
//# sourceMappingURL=FileReader.d.ts.map