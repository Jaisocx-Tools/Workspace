"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjData = void 0;
const ObjDataParser_js_1 = require("./ObjDataParser.js");
const ObjDataSerializer_js_1 = require("./ObjDataSerializer.js");
class ObjData {
    static parse(objDataByteBuf) {
        return ObjDataParser_js_1.ObjDataParser.parse(objDataByteBuf);
    }
    static serialize(anyValue) {
        return ObjDataSerializer_js_1.ObjDataSerializer.serialize(anyValue);
    }
}
exports.ObjData = ObjData;
//# sourceMappingURL=ObjData.js.map