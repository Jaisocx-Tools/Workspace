export class Preloader {

  themesPreloads: object = {};

  webpackAlias: string = "";
  webpackAliasReplace: string = "";



  constructor() {
    this.themesPreloads = {};
  }



  setThemesPreloads( preloads: object ) {
    this.themesPreloads = preloads;


    return this;
  }



  setWebpackAlias ( alias: string ) {
    this.webpackAlias = alias;


    return this;
  }



  setWebpackAliasReplace ( alias: string ) {
    this.webpackAliasReplace = alias;


    return this;
  }



  init () {
    this.addDocumentLoadedEventHandler();
  }



  addDocumentLoadedEventHandler() {
    const method: CallableFunction = this.htmlDocumentAppendPreloadingLinkTags.bind(this);

    if (document.readyState === "loading") {
      document.addEventListener(
        "DOMContentLoaded",
        () => method(),
        { once: true }
      );
    } else {
      method();


      // If already loaded, invoke immediately
    }
  }



  htmlDocumentAppendPreloadingLinkTags () {
    let linkTagName: any = "link";
    let rel: any = "preload";
    let as: any = "font";
    let crossOrigin: any = "anonymous";

    let themeName: any = "";
    let fontPathWebpack: any = "";
    let fontPath: any = "";
    let fontPathsArray: any[] = [];
    let preloads: object = this.themesPreloads;
    const alias: string = this.webpackAlias;
    const aliasReplace: string = this.webpackAliasReplace;

    for ( themeName in preloads ) {

      //@ts-ignore
      fontPathsArray = preloads[themeName];

      for ( fontPathWebpack of fontPathsArray ) {
        let link = document.createElement( linkTagName );
        fontPath = fontPathWebpack.replace(
          alias,
          aliasReplace );
        link.rel = rel;
        link.href = fontPath;
        link.as = as;


        // link.type = "font/woff2";
        link.crossOrigin = crossOrigin;
        document.head.appendChild( link );
      }
    }

  }
}

