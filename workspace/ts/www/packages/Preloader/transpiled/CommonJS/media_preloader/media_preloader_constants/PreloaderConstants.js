"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PreloaderConstants_linkTagsPreloading, _PreloaderConstants_scriptLoadingStopOnTimeout, _PreloaderConstants_codeblockInvoke_ScriptLoadingStopOnTimeout, _PreloaderConstants_linkTagOnloadCode;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreloaderConstants = void 0;
// returns string templates to use with @jaisocx/template-renderer or any other with placeholders markup like this: {{ var }}
class PreloaderConstants {
    constructor() {
        _PreloaderConstants_linkTagsPreloading.set(this, void 0);
        _PreloaderConstants_scriptLoadingStopOnTimeout.set(this, void 0);
        _PreloaderConstants_codeblockInvoke_ScriptLoadingStopOnTimeout.set(this, void 0);
        _PreloaderConstants_linkTagOnloadCode.set(this, void 0);
        __classPrivateFieldSet(this, _PreloaderConstants_linkTagsPreloading, "let linkTagsPreloading = {{ idsObjectOf_LinkTagsPreloading }};\n\n\n", "f");
        __classPrivateFieldSet(this, _PreloaderConstants_scriptLoadingStopOnTimeout, `
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
    `, "f");
        __classPrivateFieldSet(this, _PreloaderConstants_codeblockInvoke_ScriptLoadingStopOnTimeout, `
      setTimeout (
        () => {
          loadingStopOnTimeout( linkTagsPreloading );
        },
        {{ timeoutNumberOfMilliseconds }}
      );
    `, "f");
        __classPrivateFieldSet(this, _PreloaderConstants_linkTagOnloadCode, "javascript: ( () => { const id = this.id; linkTagsPreloading[id] = 3; } )();", "f");
    }
    getLinkTagsPreloading() {
        return __classPrivateFieldGet(this, _PreloaderConstants_linkTagsPreloading, "f");
    }
    getScriptLoadingStopOnTimeout() {
        return __classPrivateFieldGet(this, _PreloaderConstants_scriptLoadingStopOnTimeout, "f");
    }
    getCodeblockInvoke_ScriptLoadingStopOnTimeout() {
        return __classPrivateFieldGet(this, _PreloaderConstants_codeblockInvoke_ScriptLoadingStopOnTimeout, "f");
    }
    getLinkTagOnloadCode() {
        return __classPrivateFieldGet(this, _PreloaderConstants_linkTagOnloadCode, "f");
    }
}
exports.PreloaderConstants = PreloaderConstants;
_PreloaderConstants_linkTagsPreloading = new WeakMap(), _PreloaderConstants_scriptLoadingStopOnTimeout = new WeakMap(), _PreloaderConstants_codeblockInvoke_ScriptLoadingStopOnTimeout = new WeakMap(), _PreloaderConstants_linkTagOnloadCode = new WeakMap();
//# sourceMappingURL=PreloaderConstants.js.map