export interface ScriptsChainedLoaderInterface {

  setDebug( inDebug: boolean ): ScriptsChainedLoaderInterface;

  onload(): void;

  load (
    scriptsDataObject: any,
    chained: boolean
  ): void;

  loadOneScript (
    scriptLoaderInstance: ScriptsChainedLoaderInterface,
    scriptsDataObject: any,
    npmLibId: number,
    scriptId: number,
    hasNext: boolean,
    isFallback: boolean
  ): void;

  scriptOnload (
    scriptLoaderInstance: ScriptsChainedLoaderInterface,
    currentTagScript: HTMLScriptElement
  ): void;

  scriptOnerror (
    scriptLoaderInstance: ScriptsChainedLoaderInterface,
    currentTagScript: HTMLScriptElement
  ): void;
}

