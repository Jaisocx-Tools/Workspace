# Mime type

```
MimeType getMimeTypeByFilename( "favicon.ico", 1 ) => "image/x-icon"
```


## Example ts code

```typescript
// this constants object is faster, since has bery few lines relevant to link rel=preload.
let mConstants: MimeTypeConstantsInterface = new SitesPreloaderMimeTypeConstants();
let mimeTypesInstance: MimeType = new MimeType();
  mimeTypesInstance
    .setMimeTypesConstants( mConstants );


let filename: string = "";
let mimeType: string|undefined = "";

filename = "favicon.ico";
mimeType = mimeTypesInstance.getMimeTypeByFilename( filename, 1 );
console.log (
  { "bib": "@jaisocx/mime-type", filename, mimeType }
);

// Console:
/*
{
  bib: '@jaisocx/mime-type',
  filename: 'favicon.ico',
  mimeType: 'image/x-icon'
}
*/
```