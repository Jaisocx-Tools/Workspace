export type ICapsOrSmallTransformVariants = {
    caps: number;
    small: number;
    firstCapsAndSmall: number;
    firstCapsAsIs: number;
    asIs: number;
};
export type ICharTypeEnum = {
    caps: number;
    small: number;
    num: number;
    omitted: number;
    delimiter: number;
};
export type IJoinDelimiterVariants = {
    everyGroup: number;
    beforeNumbersNoDelimiter: number;
    afterNumbersNoDelimiter: number;
    neverNumbersDelimiter: number;
    delimitersReplaced: number;
};
export type IParseTimeGrouppingVariants = {
    numGrups: boolean;
    UcLcGroups: boolean;
    firstCapsGroups: boolean;
};
export type ITransformVariants = {
    delimiter: string;
    UcLcTransform: number;
};
export type IDataRecordMatches = {
    groups_positions: number[][];
    prev_CharTypeEnum: number;
    current_CharTypeEnum: number;
    currentGroupOfCharType_charsAmount: number;
};
//# sourceMappingURL=CaseConverterTypes.d.ts.map