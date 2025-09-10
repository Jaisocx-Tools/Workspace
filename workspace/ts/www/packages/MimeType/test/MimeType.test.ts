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
    let mimeType: string = "";

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

    filename = "pack.tar.gz";
    mimeType = mimeTypesInstance.getMimeTypeByFilename( filename, 2 );
    console.log (
      { "bib": "@jaisocx/mime-type", filename, mimeType }
    );
    expect ( mimeType ).toBe( "application/x-gtar" );

    filename = "pack.tgz";
    mimeType = mimeTypesInstance.getMimeTypeByFilename( filename, 2 );
    console.log (
      { "bib": "@jaisocx/mime-type", filename, mimeType }
    );
    expect ( mimeType ).toBe( "application/x-gtar" );

    filename = "pack.tar.bz2";
    mimeType = mimeTypesInstance.getMimeTypeByFilename( filename, 2 );
    console.log (
      { "bib": "@jaisocx/mime-type", filename, mimeType }
    );
    expect ( mimeType ).toBe( "application/x-tbzip2" );

    filename = "pack.tbz2";
    mimeType = mimeTypesInstance.getMimeTypeByFilename( filename, 2 );
    console.log (
      { "bib": "@jaisocx/mime-type", filename, mimeType }
    );
    expect ( mimeType ).toBe( "application/x-tbzip2" );

    filename = "styles.css";
    mimeType = mimeTypesInstance.getMimeTypeByFilename( filename, 1 );
    console.log (
      { "bib": "@jaisocx/mime-type", filename, mimeType }
    );
    expect ( mimeType ).toBe( "text/css" );

    filename = "theme_media_and_fonts_bundle.js";
    mimeType = mimeTypesInstance.getMimeTypeByFilename( filename, 1 );
    console.log (
      { "bib": "@jaisocx/mime-type", filename, mimeType }
    );
    expect ( mimeType ).toBe( "text/javascript" );

    filename = "data.json";
    mimeType = mimeTypesInstance.getMimeTypeByFilename( filename, 1 );
    console.log (
      { "bib": "@jaisocx/mime-type", filename, mimeType }
    );
    expect ( mimeType ).toBe( "application/json" );

  }
)


