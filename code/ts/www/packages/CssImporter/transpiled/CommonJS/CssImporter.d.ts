import { FileHandle } from "node:fs/promises";
import { FileWriter, FileWriterQueue } from "@jaisocx/file-writer";
import { CssImporterConstants } from "./CssImporterConstants.js";
import { BaseParser } from "./BaseParser.js";
import { ParsedResultDTO } from "./ParsedResultDTO.js";
export declare class CssImporter {
    cssImporterConstants: CssImporterConstants;
    baseParser: BaseParser;
    packagePath: string;
    webpackAliases: any | false;
    cssFilePath: string;
    cssTargetFilePath: string;
    fileWriter: FileWriter;
    fileWriterQueue: FileWriterQueue;
    constructor();
    setPackagePath(packagePath: string): CssImporter;
    getPackagePath(): string;
    setCssFilePath(cssFilePath: string): CssImporter;
    getCssFilePath(): string;
    setCssTargetFilePath(cssTargetFilePath: string): CssImporter;
    getCssTargetFilePath(): string;
    setWebpackAliases(webpackAliases: object): CssImporter;
    readJsonFile(filePath: string): any;
    getWebpackAliases(): object | false;
    build(): Promise<number>;
    /**
     * @info based on methods call .validBitsbufRefsRefine(), .resolveUrlBitsbufWithWebpackAlias(), fs.read and fs.write files.
     */
    cssBundleMake(inParsedResultDTO: ParsedResultDTO, inFd: FileHandle, inFilePath: string, bitsbufName: string, counterStop: number): ParsedResultDTO;
    compareRanges(fileContentsBuffer: Uint8Array, bitsbufName: string, ranges: number[][], inResultDTO: ParsedResultDTO, inFd: FileHandle, mainRangeStart: number, inLastRangeIx: number, counterStop: number, isRangeImportUrl: boolean): number;
}
//# sourceMappingURL=CssImporter.d.ts.map