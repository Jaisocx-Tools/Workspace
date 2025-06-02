import { ObjDataConstants } from "./ObjDataConstants";
export class ObjDataHelpingProps {
    lengthAll;
    datatype;
    numberValueUnit;
    propsAmount;
    propertyNameLength;
    propertyNameStart;
    propertyValueLength;
    propertyValueStart;
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
//# sourceMappingURL=ObjDataTypes.js.map