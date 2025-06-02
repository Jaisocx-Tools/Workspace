"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FileWriterConstants_add, _FileWriterConstants_addAndRead, _FileWriterConstants_read, _FileWriterConstants_readAndWrite, _FileWriterConstants_write, _FileWriterConstants_writeAndRead;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileWriterConstants = void 0;
class FileWriterConstants {
    constructor() {
        _FileWriterConstants_add.set(this, void 0);
        _FileWriterConstants_addAndRead.set(this, void 0);
        _FileWriterConstants_read.set(this, void 0);
        _FileWriterConstants_readAndWrite.set(this, void 0);
        _FileWriterConstants_write.set(this, void 0);
        _FileWriterConstants_writeAndRead.set(this, void 0);
        __classPrivateFieldSet(this, _FileWriterConstants_add, "a", "f");
        __classPrivateFieldSet(this, _FileWriterConstants_addAndRead, "a+", "f");
        __classPrivateFieldSet(this, _FileWriterConstants_read, "r", "f");
        __classPrivateFieldSet(this, _FileWriterConstants_readAndWrite, "r+", "f");
        __classPrivateFieldSet(this, _FileWriterConstants_write, "w", "f");
        __classPrivateFieldSet(this, _FileWriterConstants_writeAndRead, "w+", "f");
    }
    getFHandleModeAdd() {
        return __classPrivateFieldGet(this, _FileWriterConstants_add, "f");
    }
    getFHandleModeAddAndRead() {
        return __classPrivateFieldGet(this, _FileWriterConstants_addAndRead, "f");
    }
    getFHandleModeRead() {
        return __classPrivateFieldGet(this, _FileWriterConstants_read, "f");
    }
    getFHandleModeReadAndWrite() {
        return __classPrivateFieldGet(this, _FileWriterConstants_readAndWrite, "f");
    }
    getFHandleModeWrite() {
        return __classPrivateFieldGet(this, _FileWriterConstants_write, "f");
    }
    getFHandleModeWriteAndRead() {
        return __classPrivateFieldGet(this, _FileWriterConstants_writeAndRead, "f");
    }
}
exports.FileWriterConstants = FileWriterConstants;
_FileWriterConstants_add = new WeakMap(), _FileWriterConstants_addAndRead = new WeakMap(), _FileWriterConstants_read = new WeakMap(), _FileWriterConstants_readAndWrite = new WeakMap(), _FileWriterConstants_write = new WeakMap(), _FileWriterConstants_writeAndRead = new WeakMap();
//# sourceMappingURL=FileWriterConstants.js.map