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
export declare enum CapsOrSmallTransformVariants {
    caps = 1,
    small = 2,
    firstCaps = 3,
    asIs = 4
}
export declare enum CharTypeEnum {
    caps = 1,
    small = 2,
    num = 3,
    omitted = 4
}
export type ParseTimeGrouppingVariants = {
    numGrups: boolean;
    UcLcGroups: boolean;
    firstCapsGroups: boolean;
};
export type TransformVariants = {
    delimiter: string;
    UcLcTransform: number;
};
export declare class DataRecordMatches {
    groups_positions: number[][];
    prev_CharTypeEnum: number;
    current_CharTypeEnum: number;
    currentGroupOfCharType_charsAmount: number;
    constructor();
}
export declare class CaseConverter implements CaseConverterInterface {
    #private;
    _debug: boolean;
    protected rangeNumLatin: number[][];
    protected rangesANumLatin: number[][];
    protected rangesUC: number[][];
    protected rangesLC: number[][];
    protected parseTimeGrouppingVariants: ParseTimeGrouppingVariants;
    protected transformVariants: TransformVariants;
    static clsInstance: CaseConverterInterface;
    constructor();
    static getInstance(): CaseConverterInterface;
    setDebug(inDebug: boolean): CaseConverterInterface;
    /** Core public API (static convenience) */
    static camel(inText: string): string;
    static pascal(inText: string): string;
    static snake(inText: string): string;
    static kebab(inText: string): string;
    static constant(inText: string): string;
    static title(inText: string): string;
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
    toTitle(inText: string): string;
    toSentence(inText: string): string;
    toTrain(inText: string): string;
    toAsPath(inText: string): string;
    toUC(inText: string): string;
    toFirstCap(inText: string): string;
    toLC(inText: string): string;
    toDelimited(inText: string, delimiter: string, capsOrSmallFirst_TransformVariants: number, capsOrSmallOther_TransformVariants: number): string;
    transform(inp: string[], inTransformFirstFunc: CallableFunction | null, inTransformFunc: CallableFunction | null): string[];
    tasksParseTimeDataRecord(inOutDataRecord: DataRecordMatches, charPos: number): void;
    parse(inp: string, _grouppingVariants: ParseTimeGrouppingVariants): string[];
    matchesRanges(aNum: number, inRanges: number[][]): boolean;
    getCharTypeEnum(charCode: number): number;
    isNumLatin(charCode: number): boolean;
    isAlphaNumLatin(charCode: number): boolean;
    isUC(charCode: number): boolean;
    isLC(charCode: number): boolean;
}
//# sourceMappingURL=CaseConverter.d.ts.map