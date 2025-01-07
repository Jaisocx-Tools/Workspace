"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjDataSerializer = void 0;
const ObjDataHelper_js_1 = require("./ObjDataHelper.js");
const ObjDataConstants_js_1 = require("./ObjDataConstants.js");
const ObjDataTypes_js_1 = require("./ObjDataTypes.js");
class ObjDataSerializer {
  static serialize(anyValue) {
    return ObjDataSerializer.serializeProperty("Root", anyValue);
  }
  static serializeProperty(propName, propValue) {
    let propertyNameSerialized = new Uint8Array();
    let propertyValueSerialized = new Uint8Array();
    let dataHelper = new ObjDataTypes_js_1.ObjDataHelpingProps();
    let dataType = typeof propValue;
    if (dataType === "object" && Array.isArray(propValue)) {
      dataType = "array";
    }
    if (typeof propName === "number") {
      propertyNameSerialized = new Uint8Array(ObjDataConstants_js_1.ObjDataConstants.FIELDS_POINTERS.PROPERTY_NAME_LENGTH_FIELD_LEN);
      ObjDataHelper_js_1.ObjDataHelper.serializeNumberToByteBuf(propName, ObjDataConstants_js_1.ObjDataConstants.FIELDS_POINTERS.PROPERTY_NAME_LENGTH_FIELD_LEN, 0, propertyNameSerialized);
    } else if (typeof propName === "string") {
      propertyNameSerialized = ObjDataHelper_js_1.ObjDataHelper.serializeTextToByteBuf(propName);
    }
    if (dataType === "number") {
      dataHelper.datatype = ObjDataConstants_js_1.ObjDataConstants.DATA_TYPES.NUMBER;
      propertyValueSerialized = new Uint8Array(4);
      ObjDataHelper_js_1.ObjDataHelper.serializeNumberToByteBuf(propValue, 4, 0, propertyValueSerialized);
    } else if (dataType === "string") {
      dataHelper.datatype = ObjDataConstants_js_1.ObjDataConstants.DATA_TYPES.TEXT_PLAIN;
      propertyValueSerialized = ObjDataHelper_js_1.ObjDataHelper.serializeTextToByteBuf(propValue);
    } else if (dataType === "boolean") {
      dataHelper.datatype = ObjDataConstants_js_1.ObjDataConstants.DATA_TYPES.NUMBER;
      propertyValueSerialized = new Uint8Array(1);
      propertyValueSerialized[0] = propValue ? 1 : 0;
    } else if (dataType === "object") {
      dataHelper.datatype = ObjDataConstants_js_1.ObjDataConstants.DATA_TYPES.OBJECT;
      let objectKeys = Object.keys(propValue);
      dataHelper.propsAmount = objectKeys.length;
      const byteBufs = [];
      for (let subPropName of objectKeys) {
        const subPropValue = propValue[subPropName];
        const subPropValueSerialized = ObjDataSerializer.serializeProperty(subPropName, subPropValue);
        byteBufs.push(subPropValueSerialized);
      }
      propertyValueSerialized = ObjDataHelper_js_1.ObjDataHelper.concatByteArrays(byteBufs);
    } else if (dataType === "array") {
      dataHelper.datatype = ObjDataConstants_js_1.ObjDataConstants.DATA_TYPES.ARRAY;
      dataHelper.propsAmount = propValue.length;
      const byteBufs = [];
      for (let i = 0; i < dataHelper.propsAmount; i++) {
        const subPropValue = propValue[i];
        const subPropValueSerialized = ObjDataSerializer.serializeProperty(i, subPropValue);
        byteBufs.push(subPropValueSerialized);
      }
      propertyValueSerialized = ObjDataHelper_js_1.ObjDataHelper.concatByteArrays(byteBufs);
    } else {
      dataHelper.datatype = ObjDataConstants_js_1.ObjDataConstants.DATA_TYPES.BINARY;
      propertyValueSerialized = new Uint8Array(1);
      propertyValueSerialized[0] = 127;
    }
    dataHelper.propertyNameLength = propertyNameSerialized.length;
    dataHelper.propertyValueStart = dataHelper.propertyNameStart + dataHelper.propertyNameLength;
    dataHelper.propertyValueLength = propertyValueSerialized.length;
    dataHelper.lengthAll = ObjDataConstants_js_1.ObjDataConstants.HEADERS_LEN + dataHelper.propertyNameLength + dataHelper.propertyValueLength;
    const headers = ObjDataSerializer.serializePropHeaders(dataHelper);
    return ObjDataHelper_js_1.ObjDataHelper.concatByteArrays([headers, propertyNameSerialized, propertyValueSerialized]);
  }
  static serializePropHeaders(dataHelper) {
    const headersBuf = new Uint8Array(ObjDataConstants_js_1.ObjDataConstants.HEADERS_LEN);
    ObjDataHelper_js_1.ObjDataHelper.serializeNumberToByteBuf(dataHelper.lengthAll, ObjDataConstants_js_1.ObjDataConstants.FIELDS_POINTERS.LENGTH_ALL_FIELD_LEN, ObjDataConstants_js_1.ObjDataConstants.FIELDS_POINTERS.LENGTH_ALL, headersBuf);
    ObjDataHelper_js_1.ObjDataHelper.serializeNumberToByteBuf(dataHelper.datatype, ObjDataConstants_js_1.ObjDataConstants.FIELDS_POINTERS.DATATYPE_FIELD_LEN, ObjDataConstants_js_1.ObjDataConstants.FIELDS_POINTERS.DATATYPE, headersBuf);
    ObjDataHelper_js_1.ObjDataHelper.serializeNumberToByteBuf(dataHelper.numberValueUnit, ObjDataConstants_js_1.ObjDataConstants.FIELDS_POINTERS.NUMBER_VALUE_UNIT_FIELD_LEN, ObjDataConstants_js_1.ObjDataConstants.FIELDS_POINTERS.NUMBER_VALUE_UNIT, headersBuf);
    ObjDataHelper_js_1.ObjDataHelper.serializeNumberToByteBuf(dataHelper.propsAmount, ObjDataConstants_js_1.ObjDataConstants.FIELDS_POINTERS.PROPS_AMOUNT_FIELD_LEN, ObjDataConstants_js_1.ObjDataConstants.FIELDS_POINTERS.PROPS_AMOUNT, headersBuf);
    ObjDataHelper_js_1.ObjDataHelper.serializeNumberToByteBuf(dataHelper.propertyNameLength, ObjDataConstants_js_1.ObjDataConstants.FIELDS_POINTERS.PROPERTY_NAME_LENGTH_FIELD_LEN, ObjDataConstants_js_1.ObjDataConstants.FIELDS_POINTERS.PROPERTY_NAME_LENGTH, headersBuf);
    return headersBuf;
  }
}
exports.ObjDataSerializer = ObjDataSerializer;