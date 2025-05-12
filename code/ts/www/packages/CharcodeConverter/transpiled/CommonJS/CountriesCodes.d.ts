import { JsonWriter } from "./JsonWriter.js";
export declare class CountriesCodes extends JsonWriter {
    #private;
    static _singletonInstance: CountriesCodes;
    constructor();
    static getSingletonInstance(): CountriesCodes;
    getCountriesCodes(): any[];
    getCountriesCodesIndexedByCountryCode(): any[];
    saveCountriesCodes(inFilePath: string): number;
    saveCountriesCodesIndexedByCountryCode(inFilePath: string): number;
    initDataAsObject(): any;
    initData(): any[];
}
//# sourceMappingURL=CountriesCodes.d.ts.map