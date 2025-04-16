# CSS IMPORTER


## The Aim Of The Setup

CssImporter bundles all css files, referenced with @import url() expressions to one css file.

For example, the entry .css file references other .css files, prefixed with aliases:
```
/* css variables */
@import url("@jaisocx-css-clean-start-assets/themes/theme-base/clean-start-theme-base.css");

/* responsive */
@import url("@jaisocx-css-clean-start-assets/responsive/clean-start--responsive-imports-main-webpack.css");

```



## CssImporter methods explained

1. `.setPackagePath( packagePath )`
1. `.setCssFilePath( cssFilePath )` sets the path to the entrypoint .css file, where @import url() expressions are set.
2. `.setCssTargetFilePath( cssTargetFilePath )` sets the path to the packaged .css file.
3. `webpack.aliases.json` is the predefined file name.
4. `${packageRoot}` is the predefined placeholder to point the path in .setPackagePath( packagePath )



## installation
```
npm i @jaisocx/css-importer
```


## where is the webpack.aliases.json

for example, at the css tool packagePath cssCleanStartPath there is already webpack.aliases.json, and this is imported automatique.
```
{
  "@jaisocx-css-clean-start-assets": "${packageRoot}/assets/"
}
```



## How to use in TypeScript code

```
import * as path from "node:path";
import { CssImporter } from "@jaisocx/css-importer";


// paths examples:
const cssCleanStartPath: any = path.resolve( "www/CssTools/CssCleanStart" );
const cssFilePath: any = path.resolve( cssCleanStartPath, "assets/clean-start-main-webpack.css" );
const cssTargetFilePath: any = path.resolve( cssCleanStartPath, "assets/clean-start-main-packaged.css" );


let cssImporter: CssImporter = new CssImporter();

cssImporter
  .setPackagePath( cssCleanStartPath )
  .setCssFilePath( cssFilePath )
  .setCssTargetFilePath( cssTargetFilePath )
  .build()
    .then( ( result: number ) => {
        console.log("build result", result);
      } 
    );

```



Yours [jaisocx.com](https://jaisocx.com/) Software Architect and Dev,

Elias


