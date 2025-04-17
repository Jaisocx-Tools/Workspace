"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjDataPackage = void 0;
class ObjDataPackage {
    static concatByteArrays(arrays) {
        const totalLength = arrays.reduce((sum, arr) => sum + arr.length, 0);
        const result = new Uint8Array(totalLength);
        let offset = 0;
        for (const arr of arrays) {
            result.set(arr, offset);
            offset += arr.length;
        }
        return result;
    }
    static parseByteBufToNumber(byteBuf, offset, len) {
        let result = 0;
        let loopCounter = 0;
        let byteBufOffset = 0;
        for (loopCounter = 0; loopCounter < len; loopCounter++) {
            byteBufOffset = offset + loopCounter;
            result |= (byteBuf[byteBufOffset] << ((len - 1 - loopCounter) << 3));
        }
        return result;
    }
    static parseByteBufToText(byteBuf, offset, len, charsetName) {
        return new TextDecoder(charsetName).decode(byteBuf.slice(offset, offset + len));
    }
    static serializeTextToByteBuf(text) {
        return new TextEncoder().encode(text);
    }
    static serializeNumberToByteBuf(num, len, offset, byteBuf) {
        let loopCounter = 0;
        let byteBufOffset = offset;
        for (loopCounter = 0; loopCounter < len; loopCounter++) {
            byteBufOffset = offset + loopCounter;
            byteBuf[byteBufOffset] = ((num >> ((len - 1 - loopCounter) << 3)) & 0xFF);
        }
    }
}
exports.ObjDataPackage = ObjDataPackage;
//# sourceMappingURL=ObjDataPackage.js.map