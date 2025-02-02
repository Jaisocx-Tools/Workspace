export interface IJsonDataType {
    ARRAY: number;
    OBJECT: number;
    STRING: number;
    NUMBER: number;
    BOOLEAN: number;
    NO_SUBTREE: number;
    [key: string]: number;
}
export declare class ArrayOrObjectPackage {
    static readonly JsonDataType: IJsonDataType;
    static getDataTypeStringAndConst(value: any): {
        dataTypeString: any;
        dataType: number;
    };
    static getDataType(value: any): number;
    static getArrayOrObjectItemsAmount(isArray: number, arrayOrObject: any): {
        itemsAmount: number;
        objectKeys: any[] | null;
    };
    static iterateOverArrayOrObject(dataType: number, arrayOrObject: any, callback: CallableFunction, callbackPayload: any, objectKeys: any[] | null): any;
    static iterateOverArrayOrObjectDefined(isArray: number, arrayOrObject: any, callback: CallableFunction, callbackPayload: any, objectKeys: any[] | null): any;
}
//# sourceMappingURL=ArrayOrObjectPackage.d.ts.map