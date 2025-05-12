import { JsonWriter } from "./JsonWriter.js";
export declare class Countries extends JsonWriter {
    #private;
    static _singletonInstance: Countries;
    constructor();
    static getSingletonInstance(): Countries;
    getCountriesNames(): string[];
    saveCountriesNames(inFilePath: string): number;
    initData(): string[];
}
//# sourceMappingURL=Countries.d.ts.map