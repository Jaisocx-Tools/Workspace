export class ObjDataPackage {

  static concatByteArrays(
    arrays: Uint8Array[]
  ): Uint8Array {
    const totalLength = arrays.reduce(
      (sum, arr) => sum + arr.length,
      0
    );
    const result = new Uint8Array(totalLength);
    let offset = 0;

    for (const arr of arrays) {
      result.set(
        arr,
        offset);
      offset += arr.length;
    }


    return result;
  }



  static parseByteBufToNumber (
    byteBuf: Uint8Array,
    offset: number,
    len: number
  ): number {
    let result: number = 0;
    let loopCounter: number = 0;
    let byteBufOffset: number = 0;

    for (loopCounter = 0; loopCounter < len; loopCounter++) {
      byteBufOffset = offset + loopCounter;
      result |= (byteBuf[byteBufOffset] << ( ( len - 1 - loopCounter ) << 3 ));
    }


    return result;
  }



  static parseByteBufToText (
    byteBuf: Uint8Array,
    offset: number,
    len: number,
    charsetName: any
  ): any {
    return new TextDecoder(charsetName).decode(byteBuf.slice(
      offset,
      offset + len
    ));
  }



  static serializeTextToByteBuf (
    text: any
  ): Uint8Array {
    return  new TextEncoder().encode(text);
  }



  static serializeNumberToByteBuf (
    num: number,
    len: number,
    offset: number,
    byteBuf: Uint8Array
  ): void {
    let loopCounter: number = 0;
    let byteBufOffset: number = offset;

    for ( loopCounter = 0; loopCounter < len; loopCounter++ ) {
      byteBufOffset = offset + loopCounter;
      byteBuf[byteBufOffset] = ((num >> ((len - 1 - loopCounter) << 3 )) & 0xFF);
    }

  }
}



