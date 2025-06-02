import { DatasetBase } from "@jaisocx/cdn-datasets-base";
export declare class CountriesCodes extends DatasetBase {
    static _singletonInstance: CountriesCodes;
    constructor();
    static getSingletonInstance(): CountriesCodes;
    getCountriesCodes(): any[];
    getCountriesCodesIndexedByKeys(key: string): any[];
    saveCountriesCodes(inFilePath: string): number;
    saveCountriesCodesIndexedByKeys(key: string, inFilePath: string): number;
    initData(): any[];
}
//# sourceMappingURL=CountriesCodes.d.ts.map