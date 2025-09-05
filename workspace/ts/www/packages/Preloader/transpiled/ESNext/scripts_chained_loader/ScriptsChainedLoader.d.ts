import { ScriptsChainedLoaderInterface } from "./ScriptsChainedLoaderInterface.js";
export declare class ScriptsChainedLoader implements ScriptsChainedLoaderInterface {
    #private;
    _SYMBOL_ZEROLEN_CHAR: string;
    _SYMBOL_UNDERSCRORE_CHAR: string;
    _debug: boolean;
    constructor();
    setDebug(inDebug: boolean): ScriptsChainedLoaderInterface;
    onload(): void;
    load(scriptsDataObject: any, chained: boolean): void;
    loadOneScript(scriptLoaderInstance: ScriptsChainedLoaderInterface, scriptsDataObject: any, npmPackageId: number, scriptId: number, _hasNext: boolean, isFallback: boolean): void;
    scriptOnload(scriptLoaderInstance: ScriptsChainedLoaderInterface, currentTagScript: HTMLScriptElement): void;
    scriptOnerror(scriptLoaderInstance: ScriptsChainedLoaderInterface, currentTagScript: HTMLScriptElement): void;
}
//# sourceMappingURL=ScriptsChainedLoader.d.ts.map