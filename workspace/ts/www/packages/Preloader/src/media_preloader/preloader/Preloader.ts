import { TemplateRenderer, TemplateRendererDataRecord } from "@jaisocx/template-renderer";

import { CaseConverter } from "@jaisocx/text";

import {
  MimeTypeConstantsInterface,
  SitesPreloaderMimeTypeConstants,


  // MimeTypeConstants,
  // MimeTypeInterface,
  MimeType
} from "@jaisocx/mime-type";

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
    isWithStopOnLoadTimeout: boolean,
    inTimeoutMillis: number
  ): void {
    this.addDocumentLoadedEventHandler(
      isWithStopOnLoadTimeout,
      inTimeoutMillis
    );
  }


  // @tasks: _isWithStopOnLoadTimeout impl stop on load timeout
  addDocumentLoadedEventHandler (
    isWithStopOnLoadTimeout: boolean,
    inTimeoutMillis: number
  ): void {
    const methodLinksImages: CallableFunction = this.htmlDocumentAppendPreloadingLinkTags_Images.bind(this);
    const methodLinksFonts: CallableFunction = this.htmlDocumentAppendPreloadingLinkTags_Fonts.bind(this);

    let linkTags: HTMLLinkElement[] = new Array() as HTMLLinkElement[];
    let tmpLinkTags: HTMLLinkElement[] = new Array() as HTMLLinkElement[];
    let linkTagsNumber: number = 0;
    let idsOfTagsLink: string[] = new Array() as string[];

    let locOnloadFunc: CallableFunction = () => {
      tmpLinkTags = methodLinksImages( isWithStopOnLoadTimeout );
      linkTags = [ ...tmpLinkTags ];

      tmpLinkTags = methodLinksFonts( isWithStopOnLoadTimeout );
      linkTags = [ ...linkTags, ...tmpLinkTags ];

      linkTagsNumber = linkTags.length;

      let i: number = 0;

      while( i < linkTagsNumber ) {
        idsOfTagsLink.push( linkTags[i].id );
        i++;
      }

      if ( isWithStopOnLoadTimeout ) {
        this.applyScriptLoadingStopOnTimeout (
          idsOfTagsLink,
          inTimeoutMillis
        );
      }


      i = 0;

      while( i < linkTagsNumber ) {
        document.head.append( linkTags[i] );
        i++;
      }

    };

    if (document.readyState !== "loading") {

      // If already loaded, invokes immediately
      locOnloadFunc();

    } else {
      document.addEventListener (
        "DOMContentLoaded",
        () => {

          // invokes on event DOMContentLoaded
          locOnloadFunc();

        },
        { once: true }
      );

    }
  }



  htmlDocumentAppendPreloadingLinkTags_Images ( isWithStopOnLoadTimeout: boolean ): HTMLLinkElement[] {
    let linkTags: HTMLLinkElement[] = this.htmlDocumentAppendPreloadingLinkTags(
      "image",
      isWithStopOnLoadTimeout
    );


    return linkTags;
  }



  htmlDocumentAppendPreloadingLinkTags_Fonts ( isWithStopOnLoadTimeout: boolean ): HTMLLinkElement[] {
    let linkTags: HTMLLinkElement[] = this.htmlDocumentAppendPreloadingLinkTags(
      "font",
      isWithStopOnLoadTimeout
    );


    return linkTags;
  }



  htmlDocumentAppendPreloadingLinkTags (
    inDataType: string,
    isWithStopOnLoadTimeout: boolean
  ): HTMLLinkElement[] {
    let linkTags: HTMLLinkElement[] = new Array() as HTMLLinkElement[];


    //@ts-ignore
    let preloadsByDatatype: object = this.themesPreloads[inDataType];

    if (
      ( preloadsByDatatype === undefined ) ||
      ( preloadsByDatatype === null ) ||
      ( Object.values ( preloadsByDatatype ).length === 0 )
    ) {
      return linkTags;
    }



    let linkTagName: any = "link";
    let rel: any = "preload";
    let as: any = inDataType;
    let linkId: string = "";
    let linkTagOnloadCode: string = this.preloaderConstantsInstance.getLinkTagOnloadCode();
    let linkTagOnerrorCode: string = this.preloaderConstantsInstance.getLinkTagOnerrorCode();
    let themeName: string = "";
    let webpackAliasedURL: string = "";
    let href: string = "";
    let urls: string[] = [];


    const alias: string = this.webpackAlias;
    const aliasReplace: string = this.webpackAliasReplace;
    const toReplaceWebpackAlias: boolean = ( ( alias !== undefined ) && ( alias !== null ) && ( alias.length !== 0 ) );

    let mConstants: MimeTypeConstantsInterface = new SitesPreloaderMimeTypeConstants();
    let mimeTypesInstance: MimeType = new MimeType();
    mimeTypesInstance
      .setMimeTypesConstants( mConstants );


    let filename: string = "";
    let filenameExtension: string = "";
    let mimeType: string = "";
    let filenameToId: string = "";

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

        filename = href.substring( href.lastIndexOf ( "/" ) + 1 );
        filenameExtension = mimeTypesInstance.getFilenameExtension ( filename, 2 );
        mimeType = mimeTypesInstance.getMimeTypeByFilename ( filename, 2 );

        filenameToId = [ themeName, filename ].join ( "_" );
        linkId = CaseConverter.snake ( filenameToId );

        link.setAttribute( "id", linkId );
        link.setAttribute( "fetchpriority", "low" );
        link.setAttribute( "rel", rel );
        link.setAttribute( "as", as );
        link.setAttribute( "type", mimeType );
        link.setAttribute( "crossorigin", "" );
        link.setAttribute( "href", href );

        if ( isWithStopOnLoadTimeout ) {
          link.setAttribute( "onload", linkTagOnloadCode );
        }

        link.setAttribute( "onerror", linkTagOnerrorCode );

        linkTags.push( link );
      }
    }


    return linkTags;
  }


  // preventing browser requests waiting and blocking when a cdn is not responding.
  extractUrlsFromHarBrowserReport (
    _harBrowserReportFilepath: string
  ): string[] {
    throw new Error( "Not implemented" );


    return [];
  }



  getScriptLoadingStopOnTimeout (
    idsOfLinkTags: string[],
    timeoutNumberOfMilliseconds: number
  ): string[] {
    let innerHTMLof_TagScript_Array: string[] = new Array(5) as string[];

    innerHTMLof_TagScript_Array[0] = "";

    innerHTMLof_TagScript_Array[1] = this.produceLinkTagsPreloading ( idsOfLinkTags );

    innerHTMLof_TagScript_Array[2] = this.preloaderConstantsInstance.getScriptLoadingStopOnTimeout();

    innerHTMLof_TagScript_Array[3] = this.produceCodeblockInvoke_ScriptLoadingStopOnTimeout ( timeoutNumberOfMilliseconds );

    innerHTMLof_TagScript_Array[4] = "";


    return innerHTMLof_TagScript_Array;

  }



  applyScriptLoadingStopOnTimeout (
    idsOfLinkTags: string[],
    timeoutNumberOfMilliseconds: number
  ): void {
    let innerHTMLof_TagScript_Array: string[] = this
      .getScriptLoadingStopOnTimeout(
        idsOfLinkTags,
        timeoutNumberOfMilliseconds
      )
      .slice( 1, 4 );

    let scriptSourceCode: string = innerHTMLof_TagScript_Array.join("");

    eval ( scriptSourceCode );


    return;
  }



  addScriptLoadingStopOnTimeout (
    idsOfLinkTags: string[],
    timeoutNumberOfMilliseconds: number
  ): void {
    let firstTagLink: HTMLLinkElement|null = document.head.querySelector( "link" );

    let innerHTMLof_TagScript_Array: string[] = this.getScriptLoadingStopOnTimeout(
      idsOfLinkTags,
      timeoutNumberOfMilliseconds
    );

    innerHTMLof_TagScript_Array[0] = "\n  <script>\n";
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
      ( prev: any, _curr: any, currentIndex: number, thisArray: string[] ): any => {
        let currValueOfArray: string = thisArray[ currentIndex ];

        prev[ currValueOfArray ] = 1;


        return prev;
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



