import { JsonWriter } from "@jaisocx/file-writer";
export declare class DatasetBase extends JsonWriter {
    JPATH_NAME_DELIMITER: string;
    _data: any[];
    _dataAsObject: any;
    _filePath: string;
    constructor();
    getData(): any[];
    getDataIndexedByKeys(jpathExpression: string): any[];
    saveDataIndexedByKeys(jpathExpression: string, inFilePath: string): number;
    initDataAsObject(jpathExpression: string): any;
}
//# sourceMappingURL=DatasetBase.d.ts.map