"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseConverterConstants = void 0;
class CaseConverterConstants {
}
exports.CaseConverterConstants = CaseConverterConstants;
CaseConverterConstants.CapsOrSmallTransformVariants = {
    caps: 1,
    small: 2,
    firstCapsAndSmall: 3,
    firstCapsAsIs: 4,
    asIs: 5
};
CaseConverterConstants.CharTypeEnum = {
    caps: 1,
    small: 2,
    num: 3,
    omitted: 4,
    delimiter: 5
};
CaseConverterConstants.JoinDelimiterVariants = {
    everyGroup: 3,
    beforeNumbersNoDelimiter: 4,
    afterNumbersNoDelimiter: 5,
    neverNumbersDelimiter: 6,
    delimitersReplaced: 7
};
CaseConverterConstants.ParseTimeGrouppingVariants = {
    numGrups: true,
    UcLcGroups: true,
    firstCapsGroups: true
};
CaseConverterConstants.TransformVariants = {
    delimiter: "_",
    UcLcTransform: 5
};
//# sourceMappingURL=CaseConverterConstants.js.map