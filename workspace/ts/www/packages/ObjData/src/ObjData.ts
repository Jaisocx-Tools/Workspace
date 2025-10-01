import { ObjDataParser } from "./ObjDataParser.js";
import { ObjDataSerializer } from "./ObjDataSerializer.js";



export class ObjData {

  static parse( objDataByteBuf: Uint8Array ): any {
    return ObjDataParser.parse (
      objDataByteBuf
    );
  }



  static serialize( anyValue: any ): Uint8Array {
    return ObjDataSerializer.serialize (
      anyValue
    );
  }

}
