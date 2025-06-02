# @jaisocx/charcode-converter


## For what
the class enhances the ImprovedTemplateRenderer Javascript class' performance,
while rewriting and rendering templates,
assigning the rendered templates by reference,
and not copying each byte in the bytebuffer, when copying texts of datatype string by value.


## How does it improve

### Arrays instead of simpler datatypes.
For this purpose, to copy templates by reference,
since this is needed many times, and when building the entire html of the rendered sites ui tool by the ImprovedTemplateRenderer,
the templates and the rendered templates this class converts to byte buffers with charcodes, and then the templates are of the datatype array,
and the arrays in browsers are copied via javascript by reference.


### Lookup tables
The lookup tables are for the workaround, when encoding and decoding very long texts,
to make the lookup fast.


## Addition cost: over 1 MB RAM usage for the lookup tables when Alphabets with very high amount of symbols.
however the alphabets with tens thousands of chars, use for sure lot of hundreds KB in the RAM for these lookup tables,
the lookup tables are the RAM, used by the sites surfer's browser, when a sites surfer navigated to the .html page with js tools, these use the CharcodeConverter Javascript class. 


## window.CharcodeConverter available in the js, when in js code: import { CharcodeConverter } from @jaisocx/charcode-converter; and built with Webpack.
in the src/index.ts and transpiled/ESNext/index.js and transpiled/CommonJS/index.js file, the central file in this npm package,
the CharcodeConverter class is added to the browser's window js class,
and this js class can be seen in the browser's developers console, 
when researching window class.



