import { JsonWriter } from "./JsonWriter.js";
export declare class DatasetBase extends JsonWriter {
    JPATH_NAME_DELIMITER: string;
    _data: any[];
    _dataAsObject: any;
    constructor();
    getData(): any[];
    getDataIndexedByKeys(jpathExpression: string): any[];
    saveDataIndexedByKeys(jpathExpression: string, inFilePath: string): number;
    initDataAsObject(jpathExpression: string): any;
}
//# sourceMappingURL=DatasetBase.d.ts.map