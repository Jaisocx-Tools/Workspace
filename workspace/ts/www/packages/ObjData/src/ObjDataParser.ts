import { ObjDataPackage } from "./ObjDataPackage.js";
import { ObjDataConstants } from "./ObjDataConstants.js";
import { ObjDataHelpingProps } from "./ObjDataTypes.js";



export class ObjDataParser {

  static parse (
    objDataByteBuf: Uint8Array
  ): any {
    const dataHelper: ObjDataHelpingProps = ObjDataParser.parsePropHeaders (
      objDataByteBuf,
      0
    );


    return ObjDataParser.parseProperty (
      objDataByteBuf,
      0,
      dataHelper,
      null
    );
  }



  static parseProperty (
    objDataByteBuf: Uint8Array,
    offset: number,
    dataHelper: ObjDataHelpingProps,
    parentObject: any
  ): any {
    let retValue: any = null;

    if (
      ( dataHelper.datatype === ObjDataConstants.DATA_TYPES.ARRAY )
      || ( dataHelper.datatype === ObjDataConstants.DATA_TYPES.OBJECT )
    ) {

      if ( dataHelper.datatype === ObjDataConstants.DATA_TYPES.ARRAY ) {
        retValue = [];
      } else {
        retValue = {};
      }

      const arrayItemsAmount: number = dataHelper.propsAmount;
      let loopCounter: number = 0;
      let arrayItemOffset: number = offset + dataHelper.propertyValueStart;

      for ( loopCounter = 0; loopCounter < arrayItemsAmount; loopCounter++ ) {
        const arrayItemDataHelper: ObjDataHelpingProps = ObjDataParser.parsePropHeaders (
          objDataByteBuf,
          arrayItemOffset
        );

        ObjDataParser.parseProperty (
          objDataByteBuf,
          arrayItemOffset,
          arrayItemDataHelper,
          retValue
        );

        arrayItemOffset += arrayItemDataHelper.lengthAll;
      }

    } else if ( dataHelper.datatype === ObjDataConstants.DATA_TYPES.NUMBER ) {
      retValue = ObjDataPackage.parseByteBufToNumber (
        objDataByteBuf,
        (
          offset + dataHelper.propertyValueStart ),
        dataHelper.propertyValueLength
      );

    } else if ( dataHelper.datatype === ObjDataConstants.DATA_TYPES.TEXT_PLAIN ) {
      retValue = ObjDataPackage.parseByteBufToText (
        objDataByteBuf,
        (
          offset + dataHelper.propertyValueStart ),
        dataHelper.propertyValueLength,
        "utf8"
      );

    } else {
      retValue = "Hu hu";

      retValue = ObjDataPackage.parseByteBufToText(
        objDataByteBuf, (
          offset + dataHelper.propertyValueStart),
        dataHelper.propertyValueLength,
        "utf8"
      );

    }

    if ( parentObject !== null ) {
      let propName: any = null;

      if ( Array.isArray( parentObject ) ) {
        propName = ObjDataPackage.parseByteBufToNumber (
          objDataByteBuf,
          (
            offset + dataHelper.propertyNameStart ),
          dataHelper.propertyNameLength
        );

      } else {
        propName = ObjDataPackage.parseByteBufToText (
          objDataByteBuf,
          (
            offset + dataHelper.propertyNameStart ),
          dataHelper.propertyNameLength,
          "utf8"
        );

      }

      parentObject[propName] = retValue;
    }


    return retValue;

  }



  static parsePropHeaders (
    byteBuf: Uint8Array,
    offset: number
  ): ObjDataHelpingProps {
    const dataHelper: ObjDataHelpingProps = new ObjDataHelpingProps();

    let fieldOffset: number = offset;
    dataHelper.lengthAll = ObjDataPackage.parseByteBufToNumber (
      byteBuf,
      fieldOffset,
      ObjDataConstants.FIELDS_POINTERS.LENGTH_ALL_FIELD_LEN
    );

    fieldOffset += ObjDataConstants.FIELDS_POINTERS.LENGTH_ALL_FIELD_LEN;

    dataHelper.datatype = ObjDataPackage.parseByteBufToNumber (
      byteBuf,
      fieldOffset,
      ObjDataConstants.FIELDS_POINTERS.DATATYPE_FIELD_LEN
    );

    fieldOffset += ObjDataConstants.FIELDS_POINTERS.DATATYPE_FIELD_LEN;

    dataHelper.numberValueUnit = ObjDataPackage.parseByteBufToNumber (
      byteBuf,
      fieldOffset,
      ObjDataConstants.FIELDS_POINTERS.NUMBER_VALUE_UNIT_FIELD_LEN
    );

    fieldOffset += ObjDataConstants.FIELDS_POINTERS.NUMBER_VALUE_UNIT_FIELD_LEN;

    dataHelper.propsAmount = ObjDataPackage.parseByteBufToNumber (
      byteBuf,
      fieldOffset,
      ObjDataConstants.FIELDS_POINTERS.PROPS_AMOUNT_FIELD_LEN
    );

    fieldOffset += ObjDataConstants.FIELDS_POINTERS.PROPS_AMOUNT_FIELD_LEN;

    dataHelper.propertyNameLength = ObjDataPackage.parseByteBufToNumber (
      byteBuf,
      fieldOffset,
      ObjDataConstants.FIELDS_POINTERS.PROPERTY_NAME_LENGTH_FIELD_LEN
    );

    dataHelper.propertyValueStart = (
      dataHelper.propertyNameStart
      + dataHelper.propertyNameLength
    );

    dataHelper.propertyValueLength = (
      dataHelper.lengthAll
      - dataHelper.propertyValueStart
    );


    return dataHelper;
  }


  // Fetch method to get and parse data from the server with flexible headers and method options
  static async fetchData(
    url: any,
    method: any = "GET",
    headers: Record<string, string> = {}
  ): Promise<any> {

    // Fetch request with flexible headers and method
    const response = await fetch(
      url,
      {
        method: method,
        headers: headers
      }
    );


    // Check for successful response
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }


    // Get response as a binary array (use arrayBuffer for byte data)
    const buffer: ArrayBuffer = await response.arrayBuffer();


    //@ts-ignore
    const uint8Array: Uint8Array = new Uint8Array(buffer);


    // Deserialize the data
    return;


    // this.deserialize(uint8Array);
  }
}


