import { PreloaderConstantsInterface } from "./PreloaderConstantsInterface.js";


// returns string templates to use with @jaisocx/template-renderer or any other with placeholders markup like this: {{ var }}
export class PreloaderConstants implements PreloaderConstantsInterface {

  #linkTagsPreloading: string;
  #scriptLoadingStopOnTimeout: string;
  #codeblockInvoke_ScriptLoadingStopOnTimeout: string;
  #linkTagOnloadCode: string;



  constructor() {
    this.#linkTagsPreloading = "let linkTagsPreloading = {{ idsObjectOf_LinkTagsPreloading }};\n\n\n";



    this.#scriptLoadingStopOnTimeout = `
      let loadingStopOnTimeout = ( idsObject ) => {

      console.log( "Started script, cleaning up hanging hard preloads links, if cdn doesn't respond, in order to prevent blocked render in the browser." );

        let ids = Object.keys( idsObject );
        let idsNumber = ids.length;
        let id = "";
        let i = 0;
        let tag = new Object();

        let secureCounter = 1;
        let secureMaxCounter = 10;

        let linkUrl = "";

        marker1: while ( i < idsNumber ) {
          secureCounter++;
          if ( secureCounter >= secureMaxCounter ) {
            break marker1;
          }

          id = ids[i];
          i++;

          if ( idsObject[id] === 3 ) {
            continue marker1;
          }


          linkUrl = "";
          try {
            tag = document.getElementById( id );
            linkUrl = tag.getAttribute( "href" );
          } catch (e) {}
          try {
            tag.onerror = null;
          } catch (e) {}
          try {
            tag.setAttribute( "fetchpriority", "low" );
          } catch (e) {}
          try {
            tag.setAttribute( "rel", "stylesheet" );
          } catch (e) {}
          try {
            tag.removeAttribute( "href" );
          } catch (e) {}
          try {
            tag.remove();
            console.log( "Cleaned up, after timeout, the hanging hard preload url:", linkUrl );
          } catch (e) {}



          i++;
        }
      }
    `;



    this.#codeblockInvoke_ScriptLoadingStopOnTimeout = `
      setTimeout (
        () => {
          loadingStopOnTimeout( linkTagsPreloading );
        },
        {{ timeoutNumberOfMilliseconds }}
      );
    `;

    this.#linkTagOnloadCode = "javascript: ( () => { const id = this.id; linkTagsPreloading[id] = 3; } )();";

  }



  getLinkTagsPreloading (): string {
    return this.#linkTagsPreloading;
  }



  getScriptLoadingStopOnTimeout (): string {
    return this.#scriptLoadingStopOnTimeout;
  }



  getCodeblockInvoke_ScriptLoadingStopOnTimeout (): string {
    return this.#codeblockInvoke_ScriptLoadingStopOnTimeout;
  }



  getLinkTagOnloadCode (): string {
    return this.#linkTagOnloadCode;
  }

}


