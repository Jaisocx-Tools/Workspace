import { ObjDataPackage } from "./ObjDataPackage.js";
import { ObjDataConstants } from "./ObjDataConstants.js";
import { ObjDataHelpingProps } from "./ObjDataTypes.js";
export class ObjDataSerializer {
    static serialize(anyValue) {
        return ObjDataSerializer.serializeProperty("Root", anyValue);
    }
    static serializeProperty(propName, propValue) {
        let propertyNameSerialized = new Uint8Array();
        let propertyValueSerialized = new Uint8Array();
        let dataHelper = new ObjDataHelpingProps();
        let dataType = typeof propValue;
        if ((dataType === "object") && (Array.isArray(propValue))) {
            dataType = "array";
        }
        if (typeof propName === "number") {
            propertyNameSerialized = new Uint8Array(ObjDataConstants.FIELDS_POINTERS.PROPERTY_NAME_LENGTH_FIELD_LEN);
            ObjDataPackage.serializeNumberToByteBuf(propName, ObjDataConstants.FIELDS_POINTERS.PROPERTY_NAME_LENGTH_FIELD_LEN, 0, propertyNameSerialized);
        }
        else if (typeof propName === "string") {
            propertyNameSerialized = ObjDataPackage.serializeTextToByteBuf(propName);
        }
        if (dataType === "number") {
            dataHelper.datatype = ObjDataConstants.DATA_TYPES.NUMBER;
            propertyValueSerialized = new Uint8Array(4);
            ObjDataPackage.serializeNumberToByteBuf(propValue, 4, 0, propertyValueSerialized);
        }
        else if (dataType === "string") {
            dataHelper.datatype = ObjDataConstants.DATA_TYPES.TEXT_PLAIN;
            propertyValueSerialized = ObjDataPackage.serializeTextToByteBuf(propValue);
        }
        else if (dataType === "boolean") {
            dataHelper.datatype = ObjDataConstants.DATA_TYPES.NUMBER;
            propertyValueSerialized = new Uint8Array(1);
            propertyValueSerialized[0] = propValue ? 1 : 0;
        }
        else if (dataType === "object") {
            dataHelper.datatype = ObjDataConstants.DATA_TYPES.OBJECT;
            let objectKeys = Object.keys(propValue);
            dataHelper.propsAmount = objectKeys.length;
            const byteBufs = [];
            for (let subPropName of objectKeys) {
                const subPropValue = propValue[subPropName];
                const subPropValueSerialized = ObjDataSerializer.serializeProperty(subPropName, subPropValue);
                byteBufs.push(subPropValueSerialized);
            }
            propertyValueSerialized = ObjDataPackage.concatByteArrays(byteBufs);
        }
        else if (dataType === "array") {
            dataHelper.datatype = ObjDataConstants.DATA_TYPES.ARRAY;
            dataHelper.propsAmount = propValue.length;
            const byteBufs = [];
            for (let i = 0; i < dataHelper.propsAmount; i++) {
                const subPropValue = propValue[i];
                const subPropValueSerialized = ObjDataSerializer.serializeProperty(i, subPropValue);
                byteBufs.push(subPropValueSerialized);
            }
            propertyValueSerialized = ObjDataPackage.concatByteArrays(byteBufs);
        }
        else {
            dataHelper.datatype = ObjDataConstants.DATA_TYPES.BINARY;
            propertyValueSerialized = new Uint8Array(1);
            propertyValueSerialized[0] = 127;
        }
        dataHelper.propertyNameLength = propertyNameSerialized.length;
        dataHelper.propertyValueStart = dataHelper.propertyNameStart + dataHelper.propertyNameLength;
        dataHelper.propertyValueLength = propertyValueSerialized.length;
        dataHelper.lengthAll = ((ObjDataConstants.FIELDS_POINTERS.HEADERS_LENGTH)
            + (dataHelper.propertyNameLength)
            + (dataHelper.propertyValueLength));
        const headers = ObjDataSerializer.serializePropHeaders(dataHelper);
        return ObjDataPackage.concatByteArrays([
            headers,
            propertyNameSerialized,
            propertyValueSerialized
        ]);
    }
    static serializePropHeaders(dataHelper) {
        const headersBuf = new Uint8Array(ObjDataConstants.FIELDS_POINTERS.HEADERS_LENGTH);
        ObjDataPackage.serializeNumberToByteBuf(dataHelper.lengthAll, ObjDataConstants.FIELDS_POINTERS.LENGTH_ALL_FIELD_LEN, ObjDataConstants.FIELDS_POINTERS.LENGTH_ALL, headersBuf);
        ObjDataPackage.serializeNumberToByteBuf(dataHelper.datatype, ObjDataConstants.FIELDS_POINTERS.DATATYPE_FIELD_LEN, ObjDataConstants.FIELDS_POINTERS.DATATYPE, headersBuf);
        ObjDataPackage.serializeNumberToByteBuf(dataHelper.numberValueUnit, ObjDataConstants.FIELDS_POINTERS.NUMBER_VALUE_UNIT_FIELD_LEN, ObjDataConstants.FIELDS_POINTERS.NUMBER_VALUE_UNIT, headersBuf);
        ObjDataPackage.serializeNumberToByteBuf(dataHelper.propsAmount, ObjDataConstants.FIELDS_POINTERS.PROPS_AMOUNT_FIELD_LEN, ObjDataConstants.FIELDS_POINTERS.PROPS_AMOUNT, headersBuf);
        ObjDataPackage.serializeNumberToByteBuf(dataHelper.propertyNameLength, ObjDataConstants.FIELDS_POINTERS.PROPERTY_NAME_LENGTH_FIELD_LEN, ObjDataConstants.FIELDS_POINTERS.PROPERTY_NAME_LENGTH, headersBuf);
        return headersBuf;
    }
}
//# sourceMappingURL=ObjDataSerializer.js.map