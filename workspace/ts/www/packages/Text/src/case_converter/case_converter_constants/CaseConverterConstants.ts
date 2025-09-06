import {
  ICapsOrSmallTransformVariants,
  ICharTypeEnum,
  IJoinDelimiterVariants,
  IParseTimeGrouppingVariants,
  ITransformVariants
} from "../types/CaseConverterTypes.js";



export class CaseConverterConstants {

  static CapsOrSmallTransformVariants: ICapsOrSmallTransformVariants = {
    caps: 1,
    small: 2,
    firstCapsAndSmall: 3,
    firstCapsAsIs: 4,
    asIs: 5
  };



  static CharTypeEnum: ICharTypeEnum = {
    caps: 1,
    small: 2,
    num: 3,
    omitted: 4,
    delimiter: 5
  };



  static JoinDelimiterVariants: IJoinDelimiterVariants = {
    everyGroup: 3,
    beforeNumbersNoDelimiter: 4,
    afterNumbersNoDelimiter: 5,
    neverNumbersDelimiter: 6,
    delimitersReplaced: 7
  };



  static ParseTimeGrouppingVariants: IParseTimeGrouppingVariants = {
    numGrups: true,
    UcLcGroups: true,
    firstCapsGroups: true
  };



  static TransformVariants: ITransformVariants = {
    delimiter: "_",
    UcLcTransform: 5
  };

}



