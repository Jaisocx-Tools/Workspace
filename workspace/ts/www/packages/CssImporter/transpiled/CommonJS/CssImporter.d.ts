import { TextDecoder } from "node:util";
import { FileWriter, FileWriterQueue } from "@jaisocx/file-writer";
import { TokensParser, FileReader } from "@jaisocx/tokens-parser";
import { CssImporterConstants } from "./CssImporterConstants.js";
import { CssImporterInterface } from "./CssImporterInterface.js";
import { ParsedResultDTO } from "./ParsedResultDTO.js";
export declare class CssImporter implements CssImporterInterface {
    debug: boolean;
    cssImporterConstants: CssImporterConstants;
    fileReader: FileReader;
    tokensParser: TokensParser;
    packagePath: string;
    webpackAliases: any | false;
    cssFilePath: string;
    cssTargetFilePath: string;
    fileWriter: FileWriter;
    fileWriterQueue: FileWriterQueue;
    textDecoder: TextDecoder;
    constructor();
    setDebug(inDebug: boolean): CssImporter;
    setPackagePath(packagePath: string): CssImporter;
    getPackagePath(): string;
    setCssFilePath(cssFilePath: string): CssImporter;
    getCssFilePath(): string;
    setCssTargetFilePath(cssTargetFilePath: string): CssImporter;
    getCssTargetFilePath(): string;
    readJsonFile(filePath: string): any;
    getWebpackAliases(): object | false;
    setWebpackAliases(aliasesObject: any, packageRoot: string): CssImporter;
    /**
     *
     * @param inBitsbuf
     * @param filePathTextRefs
     * @param webpackAliases the object, read from the file webpack.aliases.json
     * @returns
     */
    resolveUrlBitsbufWithWebpackAlias(inBitsbuf: Uint8Array, filePathTextRefs: number[], webpackAliases: any): string;
    build(): Promise<number>;
    cssBundleMake(inOutParsedResultDTO: ParsedResultDTO, inFilePath: string, counterStop: number): number;
}
//# sourceMappingURL=CssImporter.d.ts.map