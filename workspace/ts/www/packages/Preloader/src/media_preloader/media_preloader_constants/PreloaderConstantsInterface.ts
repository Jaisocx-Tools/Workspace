// returns string templates to use with @jaisocx/template-renderer or any other with placeholders markup like this: {{ var }}
export interface PreloaderConstantsInterface {

  getLinkTagsPreloading (): string;

  getScriptLoadingStopOnTimeout (): string;

  getCodeblockInvoke_ScriptLoadingStopOnTimeout (): string;

  getLinkTagOnloadCode (): string;

  getLinkTagOnerrorCode (): string;
}


