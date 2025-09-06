# Text functions package

```
npm install @jaisocx/text
```


## Status
Ready to use since the 06-th of May in the Year 2025.



## The aim of the setup

I shall publish in this package some basic methods to work with string variables.

The aim of the setup is to keep the package little and reusable, installing via npm on demand with very few kilobytes cost.


## Classes available
1. Trimmer

2. CaseConverter





## Usage

### 1. Trimmer

```javascript
import { Trimmer } from "@jaisocx/text";


let trimmer = new Trimmer();


// the text was:    ("Hello World!")
let strToTrim = "  (\"Hello World!\")  ";

// the text became: Hello World!
let trimmedText = trimmer.trimRoundBracesAndQuotesInside( strToTrim );


console.log( trimmedText );
// $> Hello World!
```




### 2. CaseConverter


Unicode case transformations for TypeScript/JavaScript.

For now just Latin base charset, 0 til 9, a til z and A til Z

### Later Improvals

1. the UC|LC methods may be improved via the very simple additions since the groups in marking time may have number enum value field charset range.

2. in the enum `CapsOrSmallTransformVariants.asIs`, the same always marked arrays are groupped by numbers, caps and small letters, however with .asIs variant for time cost minimization the precise groupping processing cost may be saved up.




### Examples

### JavaScript

#### The vary base method .toDelimited()

```typescript
// Sentence case:
let PascalCaseToSentenceCase: string = CaseConverter.getInstance()
  .toDelimited (
    "XMLHttpRequest",
    " ",
    CapsOrSmallTransformVariants.firstCapsAndSmall,
    CapsOrSmallTransformVariants.small,
    JoinDelimiterVariants.everyGroup
  );

console.log( PascalCaseToSentenceCase );

// $> Xml http request
```


#### new class instance

```javascript
import { CaseConverter } from "@jaisocx/text";

const caseConverter = new CaseConverter();
let PascalCaseToSentenceCase = caseConverter.toSentence( "XMLHttpRequest" );

console.log( PascalCaseToSentenceCase );
// $> Xml http request
```

#### static call

```javascript
import { CaseConverter } from "@jaisocx/text";

let PascalCaseToSentenceCase = CaseConverter.getInstance().toSentence( "XMLHttpRequest" );

// or like this:
PascalCaseToSentenceCase = CaseConverter.sentence( "XMLHttpRequest" );


console.log( PascalCaseToSentenceCase );
// $> Xml http request
```



### TypeScript

#### new class instance

```typescript
import { CaseConverter } from "@jaisocx/text";

const caseConverter: CaseConverter = new CaseConverter();
let PascalCaseToSentenceCase: string = caseConverter.toSentence( "XMLHttpRequest" );

console.log( PascalCaseToSentenceCase );
// $> Xml http request
```


#### static call

```typescript
import { CaseConverter } from "@jaisocx/text";

let PascalCaseToSentenceCase: string = CaseConverter.getInstance().toSentence( "XMLHttpRequest" );

// or like this:
PascalCaseToSentenceCase = CaseConverter.sentence( "XMLHttpRequest" );

console.log( PascalCaseToSentenceCase );
// $> Xml http request
```





## Interfaces

### 1. TrimmerInterface

```typescript
export interface TrimmerInterface {

  trimSurroundingChars (
    inText: string,
    inSurroundingChars: string[][]
  ): string|false;


  trimQuotes( inText: string ): string|false;
  trimRoundBraces( inText: string ): string|false;
  trimRoundBracesAndQuotesInside( inText: string ): string|false;
  trimSquareBraces( inText: string ): string|false;
  trimSquareBracesAndQuotesInside( inText: string ): string|false;
  trimFiguredBraces( inText: string ): string|false;
  trimFiguredBracesAndQuotesInside( inText: string ): string|false;

}
```


### 2. CaseConverterInterface

```typescript
import { DataRecordMatches } from "./CaseConverter.js";

export interface CaseConverterInterface {

  static getInstance(): CaseConverterInterface;

  setDebug( inDebug: boolean ): CaseConverterInterface

  static camel( inText: string ): string;
  static pascal( inText: string ): string;
  static snake( inText: string ): string;
  static kebab( inText: string ): string;
  static constant( inText: string ): string;
//static title( inText: string ): string;
  static sentence( inText: string ): string;
  static dot( inText: string ): string;
  static path( inText: string ): string;
  static train( inText: string ): string;



  toCamel(input: string): string;
  toPascal(input: string): string;
  toSnake(input: string): string;
  toKebab(input: string): string;
  toConstant(input: string): string;
  toSentence (input: string): string;
  toTrain (input: string): string;
  toAsPath (input: string): string;

  toUC( inText: string ): string;
  toFirstCapsAndSmall( inText: string ): string;
  toFirstCapsAsIs( inText: string ): string;
  toLC( inText: string ): string;

  toDelimited (
    inText: string,
    delimiter: string,
    capsOrSmallFirst_TransformVariants: number,
    capsOrSmallOther_TransformVariants: number,
    joinDelimiterVariant: number
  ): string;

  transformBitsbuf (
    inMarkedBitsbuf: Uint8Array,
    parseTimeDataRecord: DataRecordMatches,
    delimiter: string,
    inTransformFirstFunc: CallableFunction|false,
    inTransformFunc: CallableFunction|false
  ): string[];

  transformDataRecords (
    inParseTimeDataRecord: DataRecordMatches,
    joinDelimiterVariant: number
  ): DataRecordMatches;

  parseBitsbuf (
    inBitsbuf: Uint8Array
  ): DataRecordMatches;

  tasksParseTimeDataRecord (
    inOutDataRecord: DataRecordMatches,
    charPos: number
  ): void;

  matchesRanges ( aNum: number, inRanges: number[][] ): boolean;

  isNumLatin ( charCode: number ): boolean;
  isAlphaNumLatin ( charCode: number ): boolean;
  isUC ( charCode: number ): boolean;
  isLC ( charCode: number ): boolean;

}
```


## Constants

```typescript
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
```



## Enums and types

```typescript
export type ICapsOrSmallTransformVariants = {
  caps: number,
  small: number,
  firstCapsAndSmall: number,
  firstCapsAsIs: number,
  asIs: number
}


// char type enum
export type ICharTypeEnum = {
  caps: number,
  small: number,
  num: number,
  omitted: number,
  delimiter: number
}


export type IJoinDelimiterVariants = {
  everyGroup: number,
  beforeNumbersNoDelimiter: number,
  afterNumbersNoDelimiter: number,
  neverNumbersDelimiter: number,
  delimitersReplaced: number
}


export type IParseTimeGrouppingVariants = {
  numGrups: boolean,
  UcLcGroups: boolean,
  firstCapsGroups: boolean
};


export type ITransformVariants = {
  delimiter: string,
  UcLcTransform: number
};


export type IDataRecordMatches = {

  groups_positions:            number[][],

  prev_CharTypeEnum:           number,
  current_CharTypeEnum:        number,

  currentGroupOfCharType_charsAmount: number

}
```








