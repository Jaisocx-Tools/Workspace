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
var _PreloaderConstants_linkTagsPreloading, _PreloaderConstants_scriptLoadingStopOnTimeout, _PreloaderConstants_codeblockInvoke_ScriptLoadingStopOnTimeout, _PreloaderConstants_linkTagOnloadCode, _PreloaderConstants_linkTagOnerrorCode;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreloaderConstants = void 0;
// returns string templates to use with @jaisocx/template-renderer or any other with placeholders markup like this: {{ var }}
class PreloaderConstants {
    constructor() {
        _PreloaderConstants_linkTagsPreloading.set(this, void 0);
        _PreloaderConstants_scriptLoadingStopOnTimeout.set(this, void 0);
        _PreloaderConstants_codeblockInvoke_ScriptLoadingStopOnTimeout.set(this, void 0);
        _PreloaderConstants_linkTagOnloadCode.set(this, void 0);
        _PreloaderConstants_linkTagOnerrorCode.set(this, void 0);
        __classPrivateFieldSet(this, _PreloaderConstants_linkTagsPreloading, "window.linkTagsPreloading = {{ idsObjectOf_LinkTagsPreloading }};\n\n\n", "f");
        __classPrivateFieldSet(this, _PreloaderConstants_scriptLoadingStopOnTimeout, `
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
    `, "f");
        __classPrivateFieldSet(this, _PreloaderConstants_codeblockInvoke_ScriptLoadingStopOnTimeout, `
      setTimeout (
        () => {
          loadingStopOnTimeout( window.linkTagsPreloading );
        },
        {{ timeoutNumberOfMilliseconds }}
      );
    `, "f");
        __classPrivateFieldSet(this, _PreloaderConstants_linkTagOnloadCode, "javascript: ( () => { const id = this.id; try{ window.linkTagsPreloading[id] = 3; } catch (e){} } )();", "f");
        __classPrivateFieldSet(this, _PreloaderConstants_linkTagOnerrorCode, "javascript: ( () => { this.remove(); this.onerror = null; } )();", "f");
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
    getLinkTagOnerrorCode() {
        return __classPrivateFieldGet(this, _PreloaderConstants_linkTagOnerrorCode, "f");
    }
}
exports.PreloaderConstants = PreloaderConstants;
_PreloaderConstants_linkTagsPreloading = new WeakMap(), _PreloaderConstants_scriptLoadingStopOnTimeout = new WeakMap(), _PreloaderConstants_codeblockInvoke_ScriptLoadingStopOnTimeout = new WeakMap(), _PreloaderConstants_linkTagOnloadCode = new WeakMap(), _PreloaderConstants_linkTagOnerrorCode = new WeakMap();
//# sourceMappingURL=PreloaderConstants.js.map