import { ObjDataHelper } from "./ObjDataHelper.js";
import { ObjDataConstants } from "./ObjDataConstants.js";
import { ObjDataHelpingProps } from "./ObjDataTypes.js";

export class ObjDataSerializer {

  static serialize( anyValue: any ): Uint8Array {
    return ObjDataSerializer.serializeProperty (
      "Root",
      anyValue
    );
  }

  static serializeProperty(
    propName: any,
    propValue: any
  ): Uint8Array {
    let propertyNameSerialized: Uint8Array = new Uint8Array();
    let propertyValueSerialized: Uint8Array = new Uint8Array();
    let dataHelper: ObjDataHelpingProps = new ObjDataHelpingProps();
    let dataType: string = typeof propValue;
    if ( (dataType === "object") && (Array.isArray(propValue))  ) {
      dataType = "array";
    }

    if ( typeof propName === "number" ) {
      propertyNameSerialized = new Uint8Array(
        ObjDataConstants.FIELDS_POINTERS.PROPERTY_NAME_LENGTH_FIELD_LEN
      );

      ObjDataHelper.serializeNumberToByteBuf ( 
        propName, 
        ObjDataConstants.FIELDS_POINTERS.PROPERTY_NAME_LENGTH_FIELD_LEN,
        0,
        propertyNameSerialized
      );
      
    } else if ( typeof propName === "string" ) {
      propertyNameSerialized = ObjDataHelper.serializeTextToByteBuf(propName);
    }

    if ( dataType === "number" ) {
      dataHelper.datatype = ObjDataConstants.DATA_TYPES.NUMBER;
      propertyValueSerialized = new Uint8Array(
        4
      );

      ObjDataHelper.serializeNumberToByteBuf ( 
        propValue, 
        4,
        0,
        propertyValueSerialized
      );

    } else if ( dataType === "string" ) {
      dataHelper.datatype = ObjDataConstants.DATA_TYPES.TEXT_PLAIN;
      propertyValueSerialized = ObjDataHelper.serializeTextToByteBuf(propValue);

    } else if ( dataType === "boolean" ) {
      dataHelper.datatype = ObjDataConstants.DATA_TYPES.NUMBER;
      propertyValueSerialized = new Uint8Array(1);
      propertyValueSerialized[0] = propValue ? 1 : 0;

    } else if ( dataType === "object" ) {
      dataHelper.datatype = ObjDataConstants.DATA_TYPES.OBJECT;
      let objectKeys: string[] = Object.keys(propValue);
      dataHelper.propsAmount = objectKeys.length;
      const byteBufs: Uint8Array[] = [];
      for (let subPropName of objectKeys ) {
        const subPropValue: any = propValue[subPropName];
        const subPropValueSerialized: Uint8Array = ObjDataSerializer.serializeProperty(
          subPropName, 
          subPropValue);
        byteBufs.push( subPropValueSerialized );
      }
      propertyValueSerialized = ObjDataHelper.concatByteArrays(byteBufs);

    } else if ( dataType === "array" ) {
      dataHelper.datatype = ObjDataConstants.DATA_TYPES.ARRAY;
      dataHelper.propsAmount = propValue.length;
      const byteBufs: Uint8Array[] = [];
      for (let i=0; i < dataHelper.propsAmount; i++ ) {
        const subPropValue: any = propValue[i];
        const subPropValueSerialized: Uint8Array = ObjDataSerializer.serializeProperty( 
          i, 
          subPropValue );
        byteBufs.push( subPropValueSerialized );
      }
      propertyValueSerialized = ObjDataHelper.concatByteArrays(byteBufs);

    } else {
      dataHelper.datatype = ObjDataConstants.DATA_TYPES.BINARY;
      propertyValueSerialized = new Uint8Array(1);
      propertyValueSerialized[0] = 127;

    }

    dataHelper.propertyNameLength = propertyNameSerialized.length;
    dataHelper.propertyValueStart = dataHelper.propertyNameStart + dataHelper.propertyNameLength;
    dataHelper.propertyValueLength = propertyValueSerialized.length;

    dataHelper.lengthAll = (
      (ObjDataConstants.HEADERS_LEN) 
      + (dataHelper.propertyNameLength)
      + (dataHelper.propertyValueLength)
    );

    const headers: Uint8Array = ObjDataSerializer.serializePropHeaders (
      dataHelper
    );

    return ObjDataHelper.concatByteArrays (
      [
        headers,
        propertyNameSerialized,
        propertyValueSerialized,
      ]
    );
  }

  static serializePropHeaders (
    dataHelper: ObjDataHelpingProps
  ): Uint8Array {
    const headersBuf: Uint8Array = new Uint8Array(ObjDataConstants.HEADERS_LEN);

    ObjDataHelper.serializeNumberToByteBuf ( 
      dataHelper.lengthAll, 
      ObjDataConstants.FIELDS_POINTERS.LENGTH_ALL_FIELD_LEN,
      ObjDataConstants.FIELDS_POINTERS.LENGTH_ALL,
      headersBuf
    );

    ObjDataHelper.serializeNumberToByteBuf ( 
      dataHelper.datatype, 
      ObjDataConstants.FIELDS_POINTERS.DATATYPE_FIELD_LEN,
      ObjDataConstants.FIELDS_POINTERS.DATATYPE,
      headersBuf
    );

    ObjDataHelper.serializeNumberToByteBuf ( 
      dataHelper.numberValueUnit, 
      ObjDataConstants.FIELDS_POINTERS.NUMBER_VALUE_UNIT_FIELD_LEN,
      ObjDataConstants.FIELDS_POINTERS.NUMBER_VALUE_UNIT,
      headersBuf
    );

    ObjDataHelper.serializeNumberToByteBuf ( 
      dataHelper.propsAmount, 
      ObjDataConstants.FIELDS_POINTERS.PROPS_AMOUNT_FIELD_LEN,
      ObjDataConstants.FIELDS_POINTERS.PROPS_AMOUNT,
      headersBuf
    );

    ObjDataHelper.serializeNumberToByteBuf ( 
      dataHelper.propertyNameLength, 
      ObjDataConstants.FIELDS_POINTERS.PROPERTY_NAME_LENGTH_FIELD_LEN,
      ObjDataConstants.FIELDS_POINTERS.PROPERTY_NAME_LENGTH,
      headersBuf
    );

    return headersBuf;
  }

}
