export interface IJsonDataType {
  ARRAY: number;
  OBJECT: number;
  STRING: number;
  NUMBER: number;
  BOOLEAN: number;
  NO_SUBTREE: number;

  [key: string]: number;
}

export class ArrayOrObjectPackage {
  static readonly JsonDataType: IJsonDataType = {
    ARRAY: 1,
    OBJECT: 2,
    STRING: 3,
    NUMBER: 4,
    BOOLEAN: 5,
    NO_SUBTREE: 6,
  };

  public static getDataTypeStringAndConst(value: any): { dataTypeString: any, dataType: number } {
    const dataTypeString: any = Array.isArray(value) ? "array" : (typeof value);
    const dataType: number = ArrayOrObjectPackage.JsonDataType[dataTypeString.toUpperCase()];

    return {
      dataTypeString,
      dataType,
    };
  }

  public static getDataType(value: any): number {
    const dataTypeString: any = Array.isArray(value) ? "array" : (typeof value);
    const dataType: number = ArrayOrObjectPackage.JsonDataType[dataTypeString.toUpperCase()];

    return dataType;
  }

  public static getArrayOrObjectItemsAmount(
    isArray: number,
    arrayOrObject: any
  ): {itemsAmount: number, objectKeys: any[]|null} {
    let itemsAmount: number = 0;
    let objectKeys: any[]|null = null;

    if (isArray === 1) {
      itemsAmount = arrayOrObject.length;
    } else {
      objectKeys = Object.keys(arrayOrObject);
      itemsAmount = objectKeys.length;
    }

    return {
      itemsAmount,
      objectKeys,
    };
  }

  public static iterateOverArrayOrObject(
    dataType: number,
    arrayOrObject: any,
    callback: CallableFunction,
    callbackPayload: any,
    objectKeys: any[]|null
  ): any {
    const isArray: number = ((dataType === ArrayOrObjectPackage.JsonDataType.ARRAY) ? 1 : 0);
    const callbackResult: any = ArrayOrObjectPackage.iterateOverArrayOrObjectDefined(
      isArray,
      arrayOrObject,
      callback,
      callbackPayload,
      objectKeys
    );

    return callbackResult;
  }

  public static iterateOverArrayOrObjectDefined(
    isArray: number,
    arrayOrObject: any,
    callback: CallableFunction,
    callbackPayload: any,
    objectKeys: any[]|null
  ): any {
    // expects isArray = 1 true

    let loopCounter: number = 0;
    let arrayElement: any = {};

    let branchNodesKeys: any[] = [];
    let branchNodesValues: any[] = [];
    let loopPropertyName: any = "";
    let loopPropertyValue: any = {};

    let arrayOrObjectItemsAmount: number = 1;

    let callbackResult: any = null;

    if (isArray === 1) {
      // branch type is array

      loopPropertyName = "";
      arrayOrObjectItemsAmount = arrayOrObject.length;
      for (loopCounter = 0; loopCounter < arrayOrObjectItemsAmount; loopCounter++) {
        arrayElement = arrayOrObject[loopCounter];

        callbackResult = callback(
          isArray,
          loopCounter,
          arrayElement,
          loopCounter,
          arrayOrObject,
          callbackResult,
          callbackPayload
        );
      }
    } else {
      // branch type is object

      branchNodesKeys = (objectKeys !== null) ? objectKeys : Object.keys(arrayOrObject);
      branchNodesValues = Object.values(arrayOrObject);

      arrayOrObjectItemsAmount = branchNodesKeys.length;
      for (loopCounter = 0; loopCounter < arrayOrObjectItemsAmount; loopCounter++) {
        loopPropertyName = branchNodesKeys[loopCounter];
        loopPropertyValue = branchNodesValues[loopCounter];

        callbackResult = callback(
          isArray,
          loopCounter,
          loopPropertyValue,
          loopPropertyName,
          arrayOrObject,
          callbackResult,
          callbackPayload
        );
      }
    }

    return callbackResult;
  }
}


