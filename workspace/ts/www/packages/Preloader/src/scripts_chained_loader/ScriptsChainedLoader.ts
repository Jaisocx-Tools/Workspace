import { ScriptsChainedLoaderInterface } from "./ScriptsChainedLoaderInterface.js";



export class ScriptsChainedLoader implements ScriptsChainedLoaderInterface {

  _SYMBOL_ZEROLEN_CHAR: string;
  _SYMBOL_UNDERSCRORE_CHAR: string;

  #confKey__scripts: string;
  #confKey__node_modules: string;
  #confKey__npm_namespace: string;
  #path_SimpleBuild: string;
  #tagname_script: string;
  #scriptAttr_data: string;
  #scriptAttr_scriptId: string;
  #scriptAttr_npmPackageId: string;
  #scriptAttr_src: string;
  #npmNamespace: string;

  _debug: boolean;



  constructor() {
    this._SYMBOL_ZEROLEN_CHAR       = "";
    this._SYMBOL_UNDERSCRORE_CHAR   = "_";

    this.#confKey__scripts          = "scripts";
    this.#confKey__node_modules     = "node_modules";
    this.#confKey__npm_namespace    = "npm_namespace";
    this.#path_SimpleBuild          = "transpiled/Simple/";
    this.#tagname_script            = "script";
    this.#scriptAttr_data           = "data-scripts_data_object";
    this.#scriptAttr_scriptId       = "data-script_id";
    this.#scriptAttr_npmPackageId   = "data-npmpackage_id";
    this.#scriptAttr_src            = "src";
    this.#npmNamespace              = "@jaisocx";

    this._debug                     = false;
  }



  setDebug( inDebug: boolean ): ScriptsChainedLoaderInterface {
    this._debug = inDebug;


    return this;
  }



  onload(): void {

    if ( this._debug === true ) {
      console.info( "ScriptsChainedLoader onload() event handler was not set." );
    }
  }



  load (
    scriptsDataObject: any,
    chained: boolean
  ): void {
    let scriptLoaderInstance: ScriptsChainedLoaderInterface = this;

    let npmPackageId: number                = 0;
    let scriptId: number                    = 0;
    let hasNext_true: boolean               = true;
    let isFallback_false: boolean           = false;

    if ( chained ) {
      this.loadOneScript (
        scriptLoaderInstance,
        scriptsDataObject,
        npmPackageId,
        scriptId,
        hasNext_true,
        isFallback_false
      );


      return;
    }

    let scriptsObject: any                  = new Object();
    let scriptsArray: any[]                 = new Array();
    let npmPackageName: string              = this._SYMBOL_ZEROLEN_CHAR;
    let isWithFallbackSrc: boolean          = true;
    let npmPackagesNames: string[]          = Object.keys ( scriptsDataObject );
    let npmPackagesNumber: number           = npmPackagesNames.length;
    let hasNext: boolean                    = true;
    let scriptsNumber: number               = 0;
    let npmpackageSecureCounter: number     = 1;
    let scriptSecureCounter: number         = 1;
    let npmpackageSecureMaxCounter: number  = 20;
    let scriptSecureMaxCounter: number      = 20;

    hasNext = false;

    toLabelA: while ( npmPackageId < npmPackagesNumber ) {
      npmpackageSecureCounter++;

      if ( npmpackageSecureCounter >= npmpackageSecureMaxCounter ) {
        break toLabelA;
      }



      npmPackageName        = npmPackagesNames[ npmPackageId ];
      scriptsObject         = scriptsDataObject[ npmPackageName ];
      scriptsArray          = scriptsObject[ this.#confKey__scripts ];
      isWithFallbackSrc     = scriptsObject[ this.#confKey__node_modules ];
      scriptsNumber         = scriptsArray.length;
      scriptId              = 0;
      scriptSecureCounter   = 1;

      toLabelB: while ( scriptId < scriptsNumber ) {
        scriptSecureCounter++;

        if ( scriptSecureCounter >= scriptSecureMaxCounter ) {
          break toLabelB;
        }



        this.loadOneScript (
          scriptLoaderInstance,
          scriptsDataObject,
          npmPackageId,
          scriptId,
          hasNext,
          isWithFallbackSrc
        );

        scriptId++;
      }

      npmPackageId++;
    }
  }



  loadOneScript (
    scriptLoaderInstance: ScriptsChainedLoaderInterface,
    scriptsDataObject: any,
    npmPackageId: number,
    scriptId: number,
    _hasNext: boolean,
    isFallback: boolean
  ): void {
    let npmPackagesNames: string[]   = Object.keys ( scriptsDataObject );
    let npmPackageName: string       = npmPackagesNames[ npmPackageId ];
    let scriptsObject: any           = scriptsDataObject[ npmPackageName ];
    let scriptsArray: any[]          = scriptsObject[ this.#confKey__scripts ];
    let isInNodeModules: boolean     = scriptsObject[ this.#confKey__node_modules ];
    let isWithFallbackSrc: boolean   = isInNodeModules;
    let locNpmNamespace: any         = scriptsObject[ this.#confKey__npm_namespace ] ?? this.#npmNamespace;
    let jsFilepath: string           = scriptsArray[ scriptId ];
    let scriptSrc: string            = this._SYMBOL_ZEROLEN_CHAR;
    let fallbackScriptSrc: string    = this._SYMBOL_ZEROLEN_CHAR;
    let dynamicPathArrayId: number   = 0;

    let scriptSrcArray: string[] = [
      "< dynamicPathArrayId >",
      npmPackageName,
      "/",
      this.#path_SimpleBuild,
      jsFilepath,
      ".js"
    ];

    if ( isInNodeModules ) {
      scriptSrcArray[ dynamicPathArrayId ] = [ "node_modules/", locNpmNamespace, "/" ].join("");
      scriptSrc = scriptSrcArray.join(this._SYMBOL_ZEROLEN_CHAR);

    } else {
      scriptSrc = scriptSrcArray.slice( 3 ).join(this._SYMBOL_ZEROLEN_CHAR);

    }



    let tagScriptCreated: HTMLElement = document.createElement ( this.#tagname_script );

    tagScriptCreated.setAttribute (
      this.#scriptAttr_data,
      JSON.stringify ( scriptsDataObject )
    );

    tagScriptCreated.setAttribute (
      this.#scriptAttr_scriptId, (
        this._SYMBOL_ZEROLEN_CHAR + scriptId
      ) );

    tagScriptCreated.setAttribute (
      this.#scriptAttr_npmPackageId, (
        this._SYMBOL_ZEROLEN_CHAR + npmPackageId
      ) );

    let jsFileReplaced: string    = jsFilepath.replaceAll( "/", "_" );
    let numIsFallback: number     = ( isFallback  && isWithFallbackSrc ) ? 1 : 0;
    let dateNow: number           = Date.now();

    let tagScriptId: string = [
      this.#tagname_script,
      npmPackageName,
      jsFileReplaced,
      numIsFallback,
      dateNow
    ].join( this._SYMBOL_UNDERSCRORE_CHAR );

    tagScriptCreated.id = tagScriptId;
    document.body.append ( tagScriptCreated );

    let tagScript: HTMLScriptElement = document.getElementById( tagScriptId ) as HTMLScriptElement;

    if ( isFallback === false && isWithFallbackSrc ) {
      let locOnerrorFunc: CallableFunction =
        () => {
          scriptLoaderInstance.scriptOnerror (
            scriptLoaderInstance,
            tagScript
          );
        };

      tagScript.onerror = locOnerrorFunc.bind ( tagScript ) as OnErrorEventHandler;

    }

    if ( isFallback ) {
      scriptSrcArray[ dynamicPathArrayId ] = "../";
      fallbackScriptSrc = scriptSrcArray.join(this._SYMBOL_ZEROLEN_CHAR);
    }

    let locOnloadFunc: ( (this: GlobalEventHandlers, ev: Event) => any ) =
      () => {
        scriptLoaderInstance.scriptOnload (
          scriptLoaderInstance,
          tagScript
        );
      };
    tagScript.onload = locOnloadFunc.bind ( tagScript );

    try {
      if ( isFallback ) {
        tagScript.setAttribute (
          this.#scriptAttr_src,
          fallbackScriptSrc
        );
      } else {
        tagScript.setAttribute (
          this.#scriptAttr_src,
          scriptSrc
        );
      }

    } catch ( e ) {}

  }



  scriptOnload (
    scriptLoaderInstance: ScriptsChainedLoaderInterface,
    currentTagScript: HTMLScriptElement
  ): void {
    let scriptsDataObject: any      = new Object();
    let scriptId: number            = 0;
    let npmPackageId: number        = 0;
    let hasNext: boolean            = true;

    let attributeValue: string|null = this._SYMBOL_ZEROLEN_CHAR;

    attributeValue = currentTagScript.getAttribute ( this.#scriptAttr_data );

    if ( attributeValue !== null && attributeValue.length !== 0 ) {
      scriptsDataObject = JSON.parse( attributeValue );
    }

    attributeValue = currentTagScript.getAttribute ( this.#scriptAttr_scriptId );

    if ( attributeValue !== null && attributeValue.length !== 0 ) {
      scriptId = +attributeValue;
    }

    attributeValue = currentTagScript.getAttribute ( this.#scriptAttr_npmPackageId );

    if ( attributeValue !== null && attributeValue.length !== 0 ) {
      npmPackageId = +attributeValue;
    }

    currentTagScript.removeAttribute ( this.#scriptAttr_data );



    let npmPackagesNames: string[]    = Object.keys ( scriptsDataObject );
    let npmPackagesNumber: number     = npmPackagesNames.length;
    let npmPackageName: string        = npmPackagesNames[ npmPackageId ];
    let scriptsObject: any            = scriptsDataObject[ npmPackageName ];
    let scriptsArray: any[]           = scriptsObject[ this.#confKey__scripts ];
    let scriptsNumber: number         = scriptsArray.length;
    let nextNpmPackageId: number      = npmPackageId;
    let nextScriptId: number          = ( scriptId + 1 );

    if ( nextScriptId >= scriptsNumber ) {
      nextNpmPackageId = ( npmPackageId + 1 );
      nextScriptId     = 0;
    }

    if ( nextNpmPackageId >= npmPackagesNumber ) {
      hasNext = false;
    }

    if ( hasNext === false ) {
      scriptLoaderInstance.onload();


      return;
    }

    scriptLoaderInstance.loadOneScript (
      scriptLoaderInstance,
      scriptsDataObject,
      nextNpmPackageId,
      nextScriptId,
      hasNext,
      false
    );

  }



  scriptOnerror (
    scriptLoaderInstance: ScriptsChainedLoaderInterface,
    currentTagScript: HTMLScriptElement
  ): void {
    let scriptsDataObject: any      = new Object();
    let scriptId: number            = 0;
    let npmPackageId: number        = 0;
    let hasNext: boolean            = true;
    let attributeValue: string|null = this._SYMBOL_ZEROLEN_CHAR;

    attributeValue = currentTagScript.getAttribute ( this.#scriptAttr_data );

    if ( attributeValue !== null && attributeValue.length !== 0 ) {
      scriptsDataObject = JSON.parse( attributeValue );
    }

    attributeValue = currentTagScript.getAttribute ( this.#scriptAttr_scriptId );

    if ( attributeValue !== null && attributeValue.length !== 0 ) {
      scriptId = +attributeValue;
    }

    attributeValue = currentTagScript.getAttribute ( this.#scriptAttr_npmPackageId );

    if ( attributeValue !== null && attributeValue.length !== 0 ) {
      npmPackageId = +attributeValue;
    }

    currentTagScript.removeAttribute ( this.#scriptAttr_data );



    let isFallback_true: boolean = true;

    scriptLoaderInstance.loadOneScript (
      scriptLoaderInstance,
      scriptsDataObject,
      npmPackageId,
      scriptId,
      hasNext,
      isFallback_true
    );


    currentTagScript.remove();

  }

}




