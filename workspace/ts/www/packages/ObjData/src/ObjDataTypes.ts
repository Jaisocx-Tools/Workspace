import { ObjDataConstants } from "./ObjDataConstants";



export class ObjDataHelpingProps {

  lengthAll: number;
  datatype: number;
  numberValueUnit: number;
  propsAmount: number;
  propertyNameLength: number;
  propertyNameStart: number;

  propertyValueLength: number;
  propertyValueStart: number;



  constructor() {
    this.lengthAll = 0;
    this.datatype = 0;
    this.numberValueUnit = 0;
    this.propsAmount = 0;
    this.propertyNameLength = 0;
    this.propertyNameStart = ObjDataConstants.FIELDS_POINTERS.PROPERTY_NAME_START;

    this.propertyValueLength = 0;
    this.propertyValueStart = 0;
  }
}



