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


Unicode-aware case transformations for TypeScript/JavaScript.

Examples

### JavaScript

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





