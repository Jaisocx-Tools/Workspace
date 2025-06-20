export class ArrayOrObjectPackage {
    static JsonDataType = {
        ARRAY: 1,
        OBJECT: 2,
        STRING: 3,
        NUMBER: 4,
        BOOLEAN: 5,
        NO_SUBTREE: 6
    };
    static getDataTypeStringAndConst(value) {
        const dataTypeString = Array.isArray(value) ? "array" : (typeof value);
        const dataType = ArrayOrObjectPackage.JsonDataType[dataTypeString.toUpperCase()];
        return {
            dataTypeString,
            dataType
        };
    }
    static getDataType(value) {
        const dataTypeString = Array.isArray(value) ? "array" : (typeof value);
        const dataType = ArrayOrObjectPackage.JsonDataType[dataTypeString.toUpperCase()];
        return dataType;
    }
    static getArrayOrObjectItemsAmount(isArray, arrayOrObject) {
        let itemsAmount = 0;
        let objectKeys = null;
        if (isArray === 1) {
            itemsAmount = arrayOrObject.length;
        }
        else {
            objectKeys = Object.keys(arrayOrObject);
            itemsAmount = objectKeys.length;
        }
        return {
            itemsAmount,
            objectKeys
        };
    }
    static iterateOverArrayOrObject(dataType, arrayOrObject, callback, callbackPayload, objectKeys) {
        const isArray = ((dataType === ArrayOrObjectPackage.JsonDataType.ARRAY) ? 1 : 0);
        const callbackResult = ArrayOrObjectPackage.iterateOverArrayOrObjectDefined(isArray, arrayOrObject, callback, callbackPayload, objectKeys);
        return callbackResult;
    }
    static iterateOverArrayOrObjectDefined(isArray, arrayOrObject, callback, callbackPayload, objectKeys) {
        // expects isArray = 1 true
        let loopCounter = 0;
        let arrayElement = {};
        let subtreeKeys = [];
        let subtreeValues = [];
        let loopPropertyName = "";
        let loopPropertyValue = {};
        let arrayOrObjectItemsAmount = 1;
        let callbackResult = null;
        if (isArray === 1) {
            // subtree type is array
            loopPropertyName = "";
            arrayOrObjectItemsAmount = arrayOrObject.length;
            for (loopCounter = 0; loopCounter < arrayOrObjectItemsAmount; loopCounter++) {
                arrayElement = arrayOrObject[loopCounter];
                callbackResult = callback(isArray, loopCounter, arrayElement, loopCounter, arrayOrObject, callbackResult, callbackPayload);
            }
        }
        else {
            // subtree type is object
            subtreeKeys = (objectKeys !== null) ? objectKeys : Object.keys(arrayOrObject);
            subtreeValues = Object.values(arrayOrObject);
            arrayOrObjectItemsAmount = subtreeKeys.length;
            for (loopCounter = 0; loopCounter < arrayOrObjectItemsAmount; loopCounter++) {
                loopPropertyName = subtreeKeys[loopCounter];
                loopPropertyValue = subtreeValues[loopCounter];
                callbackResult = callback(isArray, loopCounter, loopPropertyValue, loopPropertyName, arrayOrObject, callbackResult, callbackPayload);
            }
        }
        return callbackResult;
    }
}
//# sourceMappingURL=ArrayOrObjectPackage.js.map