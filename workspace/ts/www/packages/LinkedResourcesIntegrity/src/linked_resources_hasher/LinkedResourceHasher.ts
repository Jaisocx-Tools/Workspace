import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

import { LinkedResourceHasherInterface } from "./LinkedResourceHasherInterface.js";



export class LinkedResourceHasher implements LinkedResourceHasherInterface {

  /**
   * Generate an integrity attribute value for a given file
   * @param filePath - path to the resource file
   * @param algo - hash algorithm ('sha256', 'sha384', 'sha512')
   * @returns integrity attribute string (e.g. integrity="sha384-...")
   */



  public preloadedResourceIntegrityProduce (
    filePath: string,
    algo: string = "sha384"
  ): string {
    const fileBuffer = readFileSync(filePath);
    const hash = createHash( algo )
      .update( fileBuffer )
      .digest( "base64" );

    const linkTagIntegrity: string = `${algo}-${hash}`;


    return linkTagIntegrity;

  }


  /**
   * Generate a <link> tag with integrity attribute
   */



  public linkPreloaderProduce (
    href: string,
    path: string,
    rel: string = "preload",
    as: string = "font",
    fetchpriority: string = "high",
    prettified: boolean = true
  ): string {
    let integrity: string = this.preloadedResourceIntegrityProduce ( path, "sha512" );
    let linkTagOuterHTML: string = "";

    if ( prettified ) {
      linkTagOuterHTML = `  <link\n    rel="${rel}"\n    as="${as}"\n    fetchpriority="${fetchpriority}"\n    href="${href}"\n    integrity="${integrity}"\n  />\n`;
    } else {
      linkTagOuterHTML = `<link rel="${rel}" as="${as}" fetchpriority="${fetchpriority}" href="${href}" integrity="${integrity}"/>`;
    }


    return linkTagOuterHTML;

  }

}

