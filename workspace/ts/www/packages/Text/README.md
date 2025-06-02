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

## Usage

### 1. Trimmer 

```
import { Trimmer } from "@jaisocx/text";


let trimmer = new Trimmer();


// the text was:    ("Hello World!")
let strToTrim = "  (\"Hello World!\")  ";

// the text became: Hello World!
let trimmedText = trimmer.trimRoundBracesAndQuotesInside( strToTrim );


console.log( trimmedText );
//> Hello World!
```




