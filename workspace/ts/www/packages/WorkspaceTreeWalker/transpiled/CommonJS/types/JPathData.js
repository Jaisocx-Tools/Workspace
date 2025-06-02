"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JPathData = void 0;
class JPathData {
    constructor() {
        this._jpath = [];
        this._jpathExpression = "";
        this._isPlaceholderValue = 0;
    }
    isPlaceholderValue() {
        return this._isPlaceholderValue;
    }
    setIsPlaceholderValue(isPlaceholder) {
        this._isPlaceholderValue = isPlaceholder;
        return this;
    }
    getJPath() {
        return this._jpath;
    }
    setJPath(jpath) {
        this._jpath = jpath;
        if (!this._jpath || this._jpath.length === 0) {
            this._isPlaceholderValue = 1;
        }
        else {
            this._isPlaceholderValue = 0;
        }
        return this;
    }
    getJPathExpression() {
        return this._jpathExpression;
    }
    setJPathExpression(jpathExpression) {
        this._jpathExpression = jpathExpression;
        return this;
    }
}
exports.JPathData = JPathData;
//# sourceMappingURL=JPathData.js.map