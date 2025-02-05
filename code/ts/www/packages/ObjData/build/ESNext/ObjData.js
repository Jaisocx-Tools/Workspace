import { ObjDataParser } from "./ObjDataParser.js";
import { ObjDataSerializer } from "./ObjDataSerializer.js";
export class ObjData {
    static parse(objDataByteBuf) {
        return ObjDataParser.parse(objDataByteBuf);
    }
    static serialize(anyValue) {
        return ObjDataSerializer.serialize(anyValue);
    }
}
//# sourceMappingURL=ObjData.js.map