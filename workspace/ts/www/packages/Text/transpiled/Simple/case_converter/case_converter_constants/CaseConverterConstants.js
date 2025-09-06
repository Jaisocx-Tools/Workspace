class CaseConverterConstants {
    static CapsOrSmallTransformVariants = {
        caps: 1,
        small: 2,
        firstCapsAndSmall: 3,
        firstCapsAsIs: 4,
        asIs: 5
    };
    static CharTypeEnum = {
        caps: 1,
        small: 2,
        num: 3,
        omitted: 4,
        delimiter: 5
    };
    static JoinDelimiterVariants = {
        everyGroup: 3,
        beforeNumbersNoDelimiter: 4,
        afterNumbersNoDelimiter: 5,
        neverNumbersDelimiter: 6,
        delimitersReplaced: 7
    };
    static ParseTimeGrouppingVariants = {
        numGrups: true,
        UcLcGroups: true,
        firstCapsGroups: true
    };
    static TransformVariants = {
        delimiter: "_",
        UcLcTransform: 5
    };
}


