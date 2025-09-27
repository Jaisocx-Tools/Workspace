import { CssImporter } from "./CssImporter.js";
import { ParsedResultDTO } from "./ParsedResultDTO.js";
export interface CssImporterInterface {
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
    resolveUrlBitsbufWithWebpackAlias(inBitsbuf: Uint8Array, filePathTextRefs: number[], webpackAliases: any): string;
    build(): Promise<number>;
    cssBundleMake(inParsedResultDTO: ParsedResultDTO, inFilePath: string, counterStop: number): number;
}
//# sourceMappingURL=CssImporterInterface.d.ts.map