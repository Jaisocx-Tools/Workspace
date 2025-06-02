"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjDataParser = void 0;
const ObjDataPackage_js_1 = require("./ObjDataPackage.js");
const ObjDataConstants_js_1 = require("./ObjDataConstants.js");
const ObjDataTypes_js_1 = require("./ObjDataTypes.js");
class ObjDataParser {
    static parse(objDataByteBuf) {
        const dataHelper = ObjDataParser.parsePropHeaders(objDataByteBuf, 0);
        return ObjDataParser.parseProperty(objDataByteBuf, 0, dataHelper, null);
    }
    static parseProperty(objDataByteBuf, offset, dataHelper, parentObject) {
        let retValue = null;
        if ((dataHelper.datatype === ObjDataConstants_js_1.ObjDataConstants.DATA_TYPES.ARRAY)
            || (dataHelper.datatype === ObjDataConstants_js_1.ObjDataConstants.DATA_TYPES.OBJECT)) {
            if (dataHelper.datatype === ObjDataConstants_js_1.ObjDataConstants.DATA_TYPES.ARRAY) {
                retValue = [];
            }
            else {
                retValue = {};
            }
            const arrayItemsAmount = dataHelper.propsAmount;
            let loopCounter = 0;
            let arrayItemOffset = offset + dataHelper.propertyValueStart;
            for (loopCounter = 0; loopCounter < arrayItemsAmount; loopCounter++) {
                const arrayItemDataHelper = ObjDataParser.parsePropHeaders(objDataByteBuf, arrayItemOffset);
                ObjDataParser.parseProperty(objDataByteBuf, arrayItemOffset, arrayItemDataHelper, retValue);
                arrayItemOffset += arrayItemDataHelper.lengthAll;
            }
        }
        else if (dataHelper.datatype === ObjDataConstants_js_1.ObjDataConstants.DATA_TYPES.NUMBER) {
            retValue = ObjDataPackage_js_1.ObjDataPackage.parseByteBufToNumber(objDataByteBuf, (offset + dataHelper.propertyValueStart), dataHelper.propertyValueLength);
        }
        else if (dataHelper.datatype === ObjDataConstants_js_1.ObjDataConstants.DATA_TYPES.TEXT_PLAIN) {
            retValue = ObjDataPackage_js_1.ObjDataPackage.parseByteBufToText(objDataByteBuf, (offset + dataHelper.propertyValueStart), dataHelper.propertyValueLength, "utf8");
        }
        else {
            retValue = "Hu hu";
            retValue = ObjDataPackage_js_1.ObjDataPackage.parseByteBufToText(objDataByteBuf, (offset + dataHelper.propertyValueStart), dataHelper.propertyValueLength, "utf8");
        }
        if (parentObject !== null) {
            let propName = null;
            if (Array.isArray(parentObject)) {
                propName = ObjDataPackage_js_1.ObjDataPackage.parseByteBufToNumber(objDataByteBuf, (offset + dataHelper.propertyNameStart), dataHelper.propertyNameLength);
            }
            else {
                propName = ObjDataPackage_js_1.ObjDataPackage.parseByteBufToText(objDataByteBuf, (offset + dataHelper.propertyNameStart), dataHelper.propertyNameLength, "utf8");
            }
            parentObject[propName] = retValue;
        }
        return retValue;
    }
    static parsePropHeaders(byteBuf, offset) {
        const dataHelper = new ObjDataTypes_js_1.ObjDataHelpingProps();
        let fieldOffset = offset;
        dataHelper.lengthAll = ObjDataPackage_js_1.ObjDataPackage.parseByteBufToNumber(byteBuf, fieldOffset, ObjDataConstants_js_1.ObjDataConstants.FIELDS_POINTERS.LENGTH_ALL_FIELD_LEN);
        fieldOffset += ObjDataConstants_js_1.ObjDataConstants.FIELDS_POINTERS.LENGTH_ALL_FIELD_LEN;
        dataHelper.datatype = ObjDataPackage_js_1.ObjDataPackage.parseByteBufToNumber(byteBuf, fieldOffset, ObjDataConstants_js_1.ObjDataConstants.FIELDS_POINTERS.DATATYPE_FIELD_LEN);
        fieldOffset += ObjDataConstants_js_1.ObjDataConstants.FIELDS_POINTERS.DATATYPE_FIELD_LEN;
        dataHelper.numberValueUnit = ObjDataPackage_js_1.ObjDataPackage.parseByteBufToNumber(byteBuf, fieldOffset, ObjDataConstants_js_1.ObjDataConstants.FIELDS_POINTERS.NUMBER_VALUE_UNIT_FIELD_LEN);
        fieldOffset += ObjDataConstants_js_1.ObjDataConstants.FIELDS_POINTERS.NUMBER_VALUE_UNIT_FIELD_LEN;
        dataHelper.propsAmount = ObjDataPackage_js_1.ObjDataPackage.parseByteBufToNumber(byteBuf, fieldOffset, ObjDataConstants_js_1.ObjDataConstants.FIELDS_POINTERS.PROPS_AMOUNT_FIELD_LEN);
        fieldOffset += ObjDataConstants_js_1.ObjDataConstants.FIELDS_POINTERS.PROPS_AMOUNT_FIELD_LEN;
        dataHelper.propertyNameLength = ObjDataPackage_js_1.ObjDataPackage.parseByteBufToNumber(byteBuf, fieldOffset, ObjDataConstants_js_1.ObjDataConstants.FIELDS_POINTERS.PROPERTY_NAME_LENGTH_FIELD_LEN);
        dataHelper.propertyValueStart = (dataHelper.propertyNameStart
            + dataHelper.propertyNameLength);
        dataHelper.propertyValueLength = (dataHelper.lengthAll
            - dataHelper.propertyValueStart);
        return dataHelper;
    }
    // Fetch method to get and parse data from the server with flexible headers and method options
    static async fetchData(url, method = "GET", headers = {}) {
        // Fetch request with flexible headers and method
        const response = await fetch(url, {
            method: method,
            headers: headers
        });
        // Check for successful response
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Get response as a binary array (use arrayBuffer for byte data)
        const buffer = await response.arrayBuffer();
        //@ts-ignore
        const uint8Array = new Uint8Array(buffer);
        // Deserialize the data
        return;
        // this.deserialize(uint8Array);
    }
}
exports.ObjDataParser = ObjDataParser;
//# sourceMappingURL=ObjDataParser.js.map