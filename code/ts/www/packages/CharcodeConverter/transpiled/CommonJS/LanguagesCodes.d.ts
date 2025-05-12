import { JsonWriter } from "./JsonWriter.js";
export declare class LanguagesCodes extends JsonWriter {
    #private;
    static _singletonInstance: LanguagesCodes;
    constructor();
    static getSingletonInstance(): LanguagesCodes;
    getLanguagesCodes(): any[];
    getLanguagesCodesIndexedByLanguageCode(): any[];
    saveLanguagesCodes(inFilePath: string): number;
    saveLanguagesCodesIndexedByLanguageCode(inFilePath: string): number;
    initDataAsObject(): any;
    initData(): any[];
}
//# sourceMappingURL=LanguagesCodes.d.ts.map