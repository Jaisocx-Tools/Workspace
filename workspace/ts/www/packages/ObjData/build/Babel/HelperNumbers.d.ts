export declare class HelperNumbers {
    static concatByteArrays(arrays: Uint8Array[]): Uint8Array;
    static parseBytesBufToNumber(byteBuf: Uint8Array, offset: number, len: number): number;
    static parseBytesBufToText(byteBuf: Uint8Array, offset: number, len: number, charsetName: string): string;
    static serializeTextToByteBuf(text: string): Uint8Array;
    static serializeNumberToByteBuf(num: number, len: number, offset: number, byteBuf: Uint8Array): void;
}
//# sourceMappingURL=HelperNumbers.d.ts.map