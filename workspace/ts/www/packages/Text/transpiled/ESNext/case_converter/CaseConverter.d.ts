/**
 * Quick usage examples
 *
 * const cc = new CaseConverter();
 * cc.toCamel('  parse XML HTTP request  '); // => 'parseXmlHttpRequest'
 * cc.toSnake('Make HTTP/2 GREAT-again!');   // => 'make_http_2_great_again'
 * CaseConverter.constant('fooBarBaz');      // => 'FOO_BAR_BAZ'
 * CaseConverter.title('a tale of two cities'); // => 'A Tale of Two Cities'
 */
/**
 * CaseConverter — robust text case transformations in TypeScript
 *
 * Features
 * - Handles camelCase/PascalCase/snake_case/kebab-case/CONSTANT_CASE/Train-Case/dot.case/path/case
 */
import { CaseConverterInterface } from "./CaseConverterInterface.js";
export type dataRecordMatches = {};
export declare class CaseConverter implements CaseConverterInterface {
    #private;
    _debug: boolean;
    protected rangesANumLatin: number[][];
    static clsInstance: CaseConverterInterface;
    constructor();
    static getInstance(): CaseConverterInterface;
    setDebug(inDebug: boolean): CaseConverterInterface;
    /** Core public API (static convenience) */
    static camel(input: string): string;
    static pascal(input: string): string;
    static snake(input: string): string;
    static kebab(input: string): string;
    static constant(input: string): string;
    static title(input: string): string;
    static sentence(input: string): string;
    static dot(input: string): string;
    static path(input: string): string;
    static train(input: string): string;
    /** Instance methods */
    toCamel(input: string): string;
    toPascal(input: string): string;
    toSnake(input: string): string;
    toKebab(input: string): string;
    toConstant(input: string): string;
    toTitle(input: string): string;
    toSentence(input: string): string;
    toTrain(input: string): string;
    toDelimited(input: string, delimiter: string): string;
    cap(t: string): string;
    tokens(inp: string): string[];
    matchesRanges(aNum: number, inRanges: number[][]): boolean;
    isAlphaNumLatin(charCode: number): boolean;
}
//# sourceMappingURL=CaseConverter.d.ts.map