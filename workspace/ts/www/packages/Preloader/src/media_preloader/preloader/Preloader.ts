import { TemplateRenderer, TemplateRendererDataRecord } from "@jaisocx/template-renderer";



import { PreloaderConstantsInterface } from "../media_preloader_constants/PreloaderConstantsInterface.js";
import { PreloaderConstants } from "../media_preloader_constants/PreloaderConstants.js";

import { PreloaderInterface } from "./PreloaderInterface.js";



export class Preloader implements PreloaderInterface {

  preloaderConstantsInstance: PreloaderConstantsInterface;
  templateRenderer: TemplateRenderer;

  themesPreloads: object;

  webpackAlias: string;
  webpackAliasReplace: string;



  constructor() {
    this.preloaderConstantsInstance = new PreloaderConstants();
    this.templateRenderer = new TemplateRenderer();
    this.themesPreloads = {};
    this.webpackAlias = "";
    this.webpackAliasReplace = "";
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



  init (
    isWithStopOnLoadTimeout: boolean = true
  ): void {
    this.addDocumentLoadedEventHandler( isWithStopOnLoadTimeout );
  }


  // @tasks: _isWithStopOnLoadTimeout impl stop on load timeout
  addDocumentLoadedEventHandler (
    _isWithStopOnLoadTimeout: boolean = true
  ): void {
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



  htmlDocumentAppendPreloadingLinkTags_Images(): string[] {
    return this.htmlDocumentAppendPreloadingLinkTags( "image" );
  }



  htmlDocumentAppendPreloadingLinkTags_Fonts(): string[] {
    return this.htmlDocumentAppendPreloadingLinkTags( "font" );
  }



  htmlDocumentAppendPreloadingLinkTags (
    inDataType: string
  ): string[] {
    let idsOf_LinkTags: string[] = new Array() as string[];


    //@ts-ignore
    let preloadsByDatatype: object = this.themesPreloads[inDataType];

    if (
      ( preloadsByDatatype === undefined ) ||
      ( preloadsByDatatype === null ) ||
      ( Object.values ( preloadsByDatatype ).length === 0 )
    ) {
      return idsOf_LinkTags;
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


    return idsOf_LinkTags;

  }


  // preventing browser requests waiting and blocking when a cdn is not responding.
  extractUrlsFromHarBrowserReport (
    _harBrowserReportFilepath: string
  ): string[] {
    throw new Error( "Not implemented" );


    return [];
  }



  addScriptLoadingStopOnTimeout (
    idsOfLinkTags: string[],
    timeoutNumberOfMilliseconds: number
  ): void {

    // let tagScript: HTMLScriptElement = document.createElement( "SCRIPT" ) as HTMLScriptElement;
    let firstTagLink: HTMLLinkElement|null = document.head.querySelector( "link" );

    let innerHTMLof_TagScript_Array: string[] = new Array(5) as string[];

    innerHTMLof_TagScript_Array[0] = "\n  <script>\n";

    innerHTMLof_TagScript_Array[1] = this.produceLinkTagsPreloading ( idsOfLinkTags );

    innerHTMLof_TagScript_Array[2] = this.preloaderConstantsInstance.getScriptLoadingStopOnTimeout();

    innerHTMLof_TagScript_Array[3] = this.produceCodeblockInvoke_ScriptLoadingStopOnTimeout ( timeoutNumberOfMilliseconds );

    innerHTMLof_TagScript_Array[4] = "\n  </script>\n";



    let tagScriptOuterHTML: string = innerHTMLof_TagScript_Array.join("");

    if ( firstTagLink === null ) {
      document.head.insertAdjacentHTML (
        "afterbegin",
        tagScriptOuterHTML
      );
    } else {
      firstTagLink.insertAdjacentHTML (
        "beforebegin",
        tagScriptOuterHTML
      );
    }


    return;
  }



  produceLinkTagsPreloading (
    idsOfLinkTags: string[]
  ): string {

    //@ts-ignore
    let trDataRecord: TemplateRendererDataRecord = this.templateRenderer.addNewDataRecord();
    let templateText: string = this.preloaderConstantsInstance.getLinkTagsPreloading();
    this.templateRenderer.setTemplate ( templateText );

    let inOutArgof_reduceMethod: any = new Object();
    let templateDataValueAsObject: object = idsOfLinkTags.reduce (
      ( _prev: any, curr: any, currentIndex: number, thisArray: string[] ): any => {
        let currValueOfArray: string = thisArray[ currentIndex ];
        curr[ currValueOfArray ] = 1;
      },
      inOutArgof_reduceMethod
    );
    let templateDataValueAsText: string = JSON.stringify (
      templateDataValueAsObject,
      null,
      2
    );
    let templateData: object = { "idsObjectOf_LinkTagsPreloading": templateDataValueAsText };
    this.templateRenderer.setData ( templateData );

    let textof_varLinkTagsPreloading: string = this.templateRenderer.render();


    return textof_varLinkTagsPreloading;

  }



  produceScriptLoadingStopOnTimeout(): string {
    let textof_ScriptLoadingStopOnTimeout: string = this.preloaderConstantsInstance.getScriptLoadingStopOnTimeout();


    return textof_ScriptLoadingStopOnTimeout;

  }



  produceCodeblockInvoke_ScriptLoadingStopOnTimeout (
    timeoutNumberOfMilliseconds: number
  ): string {

    //@ts-ignore
    let trDataRecord: TemplateRendererDataRecord = this.templateRenderer.addNewDataRecord();
    let templateText: string = this.preloaderConstantsInstance.getCodeblockInvoke_ScriptLoadingStopOnTimeout();
    this.templateRenderer.setTemplate ( templateText );

    let templateData: object = { "timeoutNumberOfMilliseconds": timeoutNumberOfMilliseconds };
    this.templateRenderer.setData ( templateData );

    let textof_ScriptLoadingStopOnTimeout: string = this.templateRenderer.render();


    return textof_ScriptLoadingStopOnTimeout;

  }
}



