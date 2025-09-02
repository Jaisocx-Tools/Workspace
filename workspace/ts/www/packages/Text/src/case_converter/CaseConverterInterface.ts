
/**
 * Quick usage examples
 *
 * const cc = new CaseConverter();
 * cc.toCamel('  parse XML HTTP request  '); // => 'parseXmlHttpRequest'
 * cc.toSnake('Make HTTP/2 GREAT-again!');   // => 'make_http_2_great_again'
 * CaseConverter.constant('fooBarBaz');      // => 'FOO_BAR_BAZ'
 * CaseConverter.title('a tale of two cities'); // => 'A Tale of Two Cities'
 */

import { DataRecordMatches } from "./CaseConverter";


/**
 * CaseConverter — robust text case transformations in TypeScript
 *
 * Features
 * - Handles camelCase/PascalCase/snake_case/kebab-case/CONSTANT_CASE/Train-Case/dot.case/path/case
 */





export type ParseTimeGrouppingVariants = {
  numGrups: boolean,
  UcLcGroups: boolean,
  firstCapsGroups: boolean,
};

export enum CapsOrSmallTransformVariants {
  caps = "caps",
  small = "small",
  asIs = "as-is",
  firstCaps = "firstCaps"
}

export type TransformVariants = {
  delimiter: string,
  UcLcTransform: CapsOrSmallTransformVariants
};



export interface CaseConverterInterface {

  /** Instance methods */
  toCamel(input: string): string;

  toPascal(input: string): string;

  toSnake(input: string): string;

  toKebab(input: string): string;

  toConstant(input: string): string;

  toTitle (input: string): string;

  toSentence (input: string): string;

  toTrain (input: string): string;

  toAsPath (input: string): string;



  toUC( inText: string ): string;
  toFirstCap( inText: string ): string;
  toLC( inText: string ): string;

  toDelimited (
    inText: string,
    delimiter: string,
    capsOrSmallFirst_TransformVariants: number,
    capsOrSmallOther_TransformVariants: number
  ): string;





  transform ( inp: string[], inTransformFirstFunc: CallableFunction|null, inTransformFunc: CallableFunction|null ): string[]


  parse (
    inp: string,
    grouppingVariants: ParseTimeGrouppingVariants
  ): DataRecordMatches;

  matchesRanges ( aNum: number, inRanges: number[][] ): boolean;

  isNumLatin ( charCode: number ): boolean;
  isAlphaNumLatin ( charCode: number ): boolean;
  isUC ( charCode: number ): boolean;
  isLC ( charCode: number ): boolean;

}



