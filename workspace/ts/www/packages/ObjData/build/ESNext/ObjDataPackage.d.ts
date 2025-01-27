export declare class ObjDataPackage {
    static concatByteArrays(arrays: Uint8Array[]): Uint8Array;
    static parseByteBufToNumber(byteBuf: Uint8Array, offset: number, len: number): number;
    static parseByteBufToText(byteBuf: Uint8Array, offset: number, len: number, charsetName: any): any;
    static serializeTextToByteBuf(text: any): Uint8Array;
    static serializeNumberToByteBuf(num: number, len: number, offset: number, byteBuf: Uint8Array): void;
}
//# sourceMappingURL=ObjDataPackage.d.ts.map