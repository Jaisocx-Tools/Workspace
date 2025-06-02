import { DatasetBase } from "@jaisocx/cdn-datasets-base";
export declare class LanguagesCodes extends DatasetBase {
    static _singletonInstance: LanguagesCodes;
    constructor();
    static getSingletonInstance(): LanguagesCodes;
    getLanguagesCodes(): any[];
    getLanguagesCodesIndexedByKeys(key: string): any[];
    saveLanguagesCodes(inFilePath: string): number;
    saveLanguagesCodesIndexedByKeys(key: string, inFilePath: string): number;
    initData(): any[];
}
//# sourceMappingURL=LanguagesCodes.d.ts.map