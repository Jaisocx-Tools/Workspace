import { expect, test } from "vitest";


import { SitesPreloaderMimeTypeConstants } from "../src/mime_type_constants/SitesPreloaderMimeTypeConstants.ts";
// import { MimeTypeConstants } from "../src/mime_type_constants/MimeTypeConstants.ts";
import { MimeType } from "../src/MimeType.ts";
import { MimeTypeConstantsInterface } from "../src/mime_type_constants/MimeTypeConstantsInterface.ts";



test(
  "Template for a ts package: testing example, get and set methods",
  () => {
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
    expect ( mimeType  ).toBe( "image/x-icon" );

    filename = "Niconne_Thin.ttf";
    mimeType = mimeTypesInstance.getMimeTypeByFilename( filename, 1 );
    console.log (
      { "bib": "@jaisocx/mime-type", filename, mimeType }
    );
    expect ( mimeType ).toBe( "font/ttf" );

    filename = "data.json";
    mimeType = mimeTypesInstance.getMimeTypeByFilename( filename, 1 );
    console.log (
      { "bib": "@jaisocx/mime-type", filename, mimeType }
    );
    expect ( mimeType ).toBe( "application/json" );

  }
)


