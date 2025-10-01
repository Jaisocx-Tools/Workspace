class ObjData {

    static parse(objDataByteBuf) {
        return ObjDataParser.parse(objDataByteBuf);
    }



    static serialize(anyValue) {
        return ObjDataSerializer.serialize(anyValue);
    }
}


