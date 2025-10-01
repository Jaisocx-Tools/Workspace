import { DatasetBase } from "@jaisocx/cdn-datasets-base";
export declare class Countries extends DatasetBase {
    _data: string[];
    static _singletonInstance: Countries;
    constructor();
    static getSingletonInstance(): Countries;
    getCountriesNames(): string[];
    saveCountriesNames(inFilePath: string): number;
    initData(): string[];
}
//# sourceMappingURL=Countries.d.ts.map