import { DataRecordMatches } from "./types/DataRecordMatches.js";
export interface CaseConverterInterface {
    /** Instance methods */
    toCamel(input: string): string;
    toPascal(input: string): string;
    toSnake(input: string): string;
    toKebab(input: string): string;
    toConstant(input: string): string;
    toSentence(input: string): string;
    toTrain(input: string): string;
    toAsPath(input: string): string;
    toUC(inText: string): string;
    toFirstCapsAndSmall(inText: string): string;
    toFirstCapsAsIs(inText: string): string;
    toLC(inText: string): string;
    toDelimited(inText: string, delimiter: string, capsOrSmallFirst_TransformVariants: number, capsOrSmallOther_TransformVariants: number, joinDelimiterVariant: number): string;
    transformBitsbuf(inMarkedBitsbuf: Uint8Array, parseTimeDataRecord: DataRecordMatches, delimiter: string, inTransformFirstFunc: CallableFunction | false, inTransformFunc: CallableFunction | false): string[];
    transformDataRecords(inParseTimeDataRecord: DataRecordMatches, joinDelimiterVariant: number): DataRecordMatches;
    parseBitsbuf(inBitsbuf: Uint8Array): DataRecordMatches;
    tasksParseTimeDataRecord(inOutDataRecord: DataRecordMatches, charPos: number): void;
    matchesRanges(aNum: number, inRanges: number[][]): boolean;
    isNumLatin(charCode: number): boolean;
    isAlphaNumLatin(charCode: number): boolean;
    isUC(charCode: number): boolean;
    isLC(charCode: number): boolean;
}
//# sourceMappingURL=CaseConverterInterface.d.ts.map