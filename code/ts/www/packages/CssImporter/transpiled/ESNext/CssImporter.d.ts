import { FileHandle } from "node:fs/promises";
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
    cssBundleMake(inFd: FileHandle, inFilePath: string, counterStop: number): Promise<ParsedResultDTO>;
    compareRanges(fileContentsBuffer: Uint8Array, ranges: number[][], resultDTO: ParsedResultDTO, inFd: FileHandle, mainRangeStart: number, inLastRangeIx: number, counterStop: number, isRangeImportUrl: boolean): Promise<number>;
}
//# sourceMappingURL=CssImporter.d.ts.map