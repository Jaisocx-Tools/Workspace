import { PreloaderConstantsInterface } from "./PreloaderConstantsInterface.js";
import { PreloaderConstants } from "./PreloaderConstants.js";

import { PreloaderInterface } from "./PreloaderInterface.js";



export class Preloader {

  preloaderConstantsInstance: PreloaderConstantsInterface;
  templateRenderer: TemplateRenderer;

  themesPreloads: object = {};

  webpackAlias: string = "";
  webpackAliasReplace: string = "";



  constructor() {
    this.preloaderConstantsInstance = new PreloaderConstants();


    this.themesPreloads = {};
  }



  setThemesPreloads ( preloads: object ): PreloaderInterface {
    this.themesPreloads = preloads;


    return this;
  }



  setWebpackAlias ( alias: string ): PreloaderInterface {
    this.webpackAlias = alias;


    return this;
  }



  setWebpackAliasReplace ( alias: string ): PreloaderInterface {
    this.webpackAliasReplace = alias;


    return this;
  }



  init (): void {
    this.addDocumentLoadedEventHandler();
  }



  addDocumentLoadedEventHandler(): void {
    const methodLinksImages: CallableFunction = this.htmlDocumentAppendPreloadingLinkTags_Images.bind(this);
    const methodLinksFonts: CallableFunction = this.htmlDocumentAppendPreloadingLinkTags_Fonts.bind(this);

    if (document.readyState !== "loading") {

      // If already loaded, invokes immediately
      methodLinksImages();
      methodLinksFonts();

    } else {
      document.addEventListener (
        "DOMContentLoaded",
        () => {
          methodLinksImages();
          methodLinksFonts();
        },
        { once: true }
      );

    }
  }



  htmlDocumentAppendPreloadingLinkTags_Images(): void {
    this.htmlDocumentAppendPreloadingLinkTags( "image" );
  }



  htmlDocumentAppendPreloadingLinkTags_Fonts(): void {
    this.htmlDocumentAppendPreloadingLinkTags( "font" );
  }



  htmlDocumentAppendPreloadingLinkTags (
    inDataType: string
  ): void {

    //@ts-ignore
    let preloadsByDatatype: object = this.themesPreloads[inDataType];

    if (
      ( preloadsByDatatype === undefined ) ||
      ( preloadsByDatatype === null ) ||
      ( Object.values ( preloadsByDatatype ).length === 0 )
    ) {
      return;
    }



    let linkTagName: any = "link";
    let rel: any = "preload";
    let as: any = inDataType;

    let themeName: string = "";
    let webpackAliasedURL: string = "";
    let href: string = "";
    let urls: string[] = [];


    const alias: string = this.webpackAlias;
    const aliasReplace: string = this.webpackAliasReplace;
    const toReplaceWebpackAlias: boolean = ( ( alias !== undefined ) && ( alias !== null ) && ( alias.length !== 0 ) );

    for ( themeName in preloadsByDatatype ) {

      //@ts-ignore
      urls = preloadsByDatatype[themeName];

      if ( urls.length === 0 ) {
        continue;
      }

      for ( webpackAliasedURL of urls ) {
        let link = document.createElement( linkTagName );

        if ( toReplaceWebpackAlias === true ) {
          href = webpackAliasedURL.replace (
            alias,
            aliasReplace
          );
        } else {
          href = webpackAliasedURL;
        }


        // link.type = "font/woff2";
        link.as = as;
        link.href = href;
        link.rel = rel;

        document.head.append( link );
      }
    }

  }





  // preventing browser requests waiting and blocking when a cdn is not responding.
  extractUrlsFromHarBrowserReport (
    harBrowserReportFilepath: string
  ): string[] {
    throw new Error( "Not implemented" );
    return [];
  }

  addScriptLoadingStopOnTimeout (
    linkTagsText: string,
    scriptText: string,
    timeoutNumberOfMilliseconds: number
  ): void {
    throw new Error( "Not implemented" );
    return;
  }

  produceLinkTagsPreloading (
    idsOfLinkTags: string[]
  ): string {
    throw new Error( "Not implemented" );
    return "";
  }

  produceScriptLoadingStopOnTimeout(): string {
    throw new Error( "Not implemented" );
    return "";
  }

}



