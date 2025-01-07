export declare class ObjDataHelper {
    static concatByteArrays(arrays: Uint8Array[]): Uint8Array;
    static parseByteBufToNumber(byteBuf: Uint8Array, offset: number, len: number): number;
    static parseByteBufToText(byteBuf: Uint8Array, offset: number, len: number, charsetName: string): string;
    static serializeTextToByteBuf(text: string): Uint8Array;
    static serializeNumberToByteBuf(num: number, len: number, offset: number, byteBuf: Uint8Array): void;
}
//# sourceMappingURL=ObjDataHelper.d.ts.map