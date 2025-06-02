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
var _TaskFileWritingQueue_bitsbuf, _TaskFileWritingQueue_range;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskFileWritingQueue = void 0;
class TaskFileWritingQueue {
    constructor(inBitsbuf, inRange) {
        _TaskFileWritingQueue_bitsbuf.set(this, void 0);
        _TaskFileWritingQueue_range.set(this, void 0);
        __classPrivateFieldSet(this, _TaskFileWritingQueue_bitsbuf, inBitsbuf, "f");
        __classPrivateFieldSet(this, _TaskFileWritingQueue_range, inRange, "f");
    }
    getBitsbuf() {
        return __classPrivateFieldGet(this, _TaskFileWritingQueue_bitsbuf, "f");
    }
    getRange() {
        return __classPrivateFieldGet(this, _TaskFileWritingQueue_range, "f");
    }
    getStart() {
        return __classPrivateFieldGet(this, _TaskFileWritingQueue_range, "f")[0];
    }
    getEnd() {
        return __classPrivateFieldGet(this, _TaskFileWritingQueue_range, "f")[1];
    }
    toObject() {
        return { "bitsbuf": __classPrivateFieldGet(this, _TaskFileWritingQueue_bitsbuf, "f"),
            "range": __classPrivateFieldGet(this, _TaskFileWritingQueue_range, "f") };
    }
    toString() {
        const taskAsObject = new Object();
        const bitsbufAsText = (new TextDecoder()).decode(__classPrivateFieldGet(this, _TaskFileWritingQueue_bitsbuf, "f"));
        taskAsObject["bitsbuf"] = bitsbufAsText;
        taskAsObject["range"] = __classPrivateFieldGet(this, _TaskFileWritingQueue_range, "f");
        const taskAsJson = JSON.stringify(taskAsObject);
        return taskAsJson;
    }
}
exports.TaskFileWritingQueue = TaskFileWritingQueue;
_TaskFileWritingQueue_bitsbuf = new WeakMap(), _TaskFileWritingQueue_range = new WeakMap();
//# sourceMappingURL=TaskFileWritingQueue.js.map