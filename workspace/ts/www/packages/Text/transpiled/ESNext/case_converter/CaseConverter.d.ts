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
import { DataRecordMatches } from "./types/DataRecordMatches.js";
import { CaseConverterInterface } from "./CaseConverterInterface.js";
export declare class CaseConverter implements CaseConverterInterface {
    #private;
    _debug: boolean;
    protected rangeNumLatin: number[][];
    protected rangesANumLatin: number[][];
    protected rangesUC: number[][];
    protected rangesLC: number[][];
    static clsInstance: CaseConverterInterface | false;
    constructor();
    static getInstance(): CaseConverterInterface;
    setDebug(inDebug: boolean): CaseConverterInterface;
    /** Core public API (static convenience) */
    static camel(inText: string): string;
    static pascal(inText: string): string;
    static snake(inText: string): string;
    static kebab(inText: string): string;
    static constant(inText: string): string;
    static sentence(inText: string): string;
    static dot(inText: string): string;
    static path(inText: string): string;
    static train(inText: string): string;
    /** Instance methods */
    toCamel(inText: string): string;
    toPascal(inText: string): string;
    toSnake(inText: string): string;
    toKebab(inText: string): string;
    toConstant(inText: string): string;
    toSentence(inText: string): string;
    toTrain(inText: string): string;
    toAsPath(inText: string): string;
    toUC(inText: string): string;
    toFirstCapsAndSmall(inText: string): string;
    toFirstCapsAsIs(inText: string): string;
    toLC(inText: string): string;
    toDelimited(inText: string, delimiter: string, capsOrSmallFirst_TransformVariants: number, capsOrSmallOther_TransformVariants: number, joinDelimiterVariant: number): string;
    transformBitsbuf(inMarkedBitsbuf: Uint8Array, afterTransform_parseTimeDataRecord: DataRecordMatches, delimiter: string, inTransformFirstFunc: CallableFunction | false, inTransformFunc: CallableFunction | false): string[];
    transformDataRecords(inParseTimeDataRecord: DataRecordMatches, joinDelimiterVariant: number): DataRecordMatches;
    parseBitsbuf(inBitsbuf: Uint8Array): DataRecordMatches;
    tasksParseTimeDataRecord(inOutDataRecord: DataRecordMatches, charPos: number): void;
    matchesRanges(aNum: number, inRanges: number[][]): boolean;
    getCharTypeEnum(charCode: number): number;
    isNumLatin(charCode: number): boolean;
    isAlphaNumLatin(charCode: number): boolean;
    isUC(charCode: number): boolean;
    isLC(charCode: number): boolean;
}
//# sourceMappingURL=CaseConverter.d.ts.map