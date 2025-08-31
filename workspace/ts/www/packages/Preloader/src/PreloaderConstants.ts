import { PreloaderConstantsInterface } from "./PreloaderConstantsInterface.js";



// returns string templates to use with @jaisocx/template-renderer or any other with placeholders markup like this: {{ var }}
export class PreloaderConstants implements PreloaderConstantsInterface {

  #linkTagsPreloading: string;
  #scriptLoadingStopOnTimeout: string;
  #codeblockInvoke_ScriptLoadingStopOnTimeout: string;



  constructor() {

    this.#linkTagsPreloading = `
      let linkTagsPreloading = {{ idsObjectOf_LinkTagsPreloading }};
    `;



    this.#scriptLoadingStopOnTimeout = `
      let loadingStopOnTimeout = ( idsObject ) => {

        console.log( "Script on timeout started" );

        let ids = Object.keys( idsObject );
        let idsNumber = ids.length;
        let id = "";
        let i = 0;
        let tag = new Object();

        let secureCounter = 1;
        let secureMaxCounter = 10;

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



          try {
            tag = document.getElementById( id );
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

}


