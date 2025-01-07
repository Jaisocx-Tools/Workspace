"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelperNumbers = void 0;
class HelperNumbers {
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
    static parseBytesBufToNumber(byteBuf, offset, len) {
        let value = 0;
        let loopCounter = 0;
        let byteBufOffset = 0;
        for (loopCounter = 0; loopCounter < len; loopCounter++) {
            byteBufOffset = offset + loopCounter;
            value |= (byteBuf[byteBufOffset] << ((7 - loopCounter) << 3));
        }
        return value;
    }
    static parseBytesBufToText(byteBuf, offset, len, charsetName) {
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
            byteBuf[byteBufOffset] = (num >> ((7 - loopCounter) << 3)) & 0xFF;
        }
    }
}
exports.HelperNumbers = HelperNumbers;
//# sourceMappingURL=HelperNumbers.js.map