class PreloaderConstants {
    #linkTagsPreloading;
    #scriptLoadingStopOnTimeout;
    #codeblockInvoke_ScriptLoadingStopOnTimeout;
    #linkTagOnloadCode;
    #linkTagOnerrorCode;



    constructor() {
        this.#linkTagsPreloading = "window.linkTagsPreloading = {{ idsObjectOf_LinkTagsPreloading }};\n\n\n";
        this.#scriptLoadingStopOnTimeout = `
      function loadingStopOnTimeout ( idsObject ) {

        console.log( "Started script, cleaning up hanging hard preloads links, if cdn doesn't respond, in order to prevent blocked render in the browser." );

        let ids = Object.keys( idsObject );
        let idsNumber = ids.length;
        let id = "";
        let i = ( idsNumber - 1 );
        let tag = new Object();

        let secureCounter = 1;
        let secureMaxCounter = 14;

        marker1: while ( i >= 0 ) {
          secureCounter++;
          if ( secureCounter >= secureMaxCounter ) {
            break marker1;
          }


          id = ids[i];

          if ( idsObject[id] === 3 ) {
            i--;
            continue marker1;
          }


          let url = "";
          try {
            tag = document.getElementById( id );
            url = tag.getAttribute( "href" );
          } catch (e) {}
          try {
            tag.onerror = null;
          } catch (e) {}
          try {
            tag.setAttribute( "rel", "stylesheet" );
          } catch (e) {}
          try {
            tag.setAttribute( "href", "javascript: void(0);" );
          } catch (e) {}
          try {
            tag.remove();
            console.log( "Cleaned up, after timeout, the hanging hard preload url:", url );
          } catch (e) {}

          tag = null;

          i--;
        }
      }
    `;
        this.#codeblockInvoke_ScriptLoadingStopOnTimeout = `
      setTimeout (
        () => {
          loadingStopOnTimeout( window.linkTagsPreloading );
        },
        {{ timeoutNumberOfMilliseconds }}
      );
    `;
        this.#linkTagOnloadCode = "javascript: ( () => { const id = this.id; try{ window.linkTagsPreloading[id] = 3; } catch (e){} } )();";
        this.#linkTagOnerrorCode = "javascript: ( () => { this.remove(); this.onerror = null; } )();";
    }



    getLinkTagsPreloading() {
        return this.#linkTagsPreloading;
    }



    getScriptLoadingStopOnTimeout() {
        return this.#scriptLoadingStopOnTimeout;
    }



    getCodeblockInvoke_ScriptLoadingStopOnTimeout() {
        return this.#codeblockInvoke_ScriptLoadingStopOnTimeout;
    }



    getLinkTagOnloadCode() {
        return this.#linkTagOnloadCode;
    }



    getLinkTagOnerrorCode() {
        return this.#linkTagOnerrorCode;
    }
}


