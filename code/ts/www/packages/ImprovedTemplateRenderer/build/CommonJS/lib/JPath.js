"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JPath = void 0;
class JPath {
    constructor() {
        this._jpath = [];
        this._jpathExpression = "";
        this._jpathExpressionMaxSize = JPath.JPATH_EXPRESSION_MAX_SIZE;
    }
    static getByJPath(jpath, value) {
        if (!value) {
            return null;
        }
        if (!jpath || jpath.length === 0) {
            return value;
        }
        let targetValue = value;
        let jpathPropertyKey = "";
        let jpathPropLevel = 0;
        let jpathLevelMax = Math.min(jpath.length, JPath.JPATH_EXPRESSION_MAX_SIZE);
        for (jpathPropLevel = 0; jpathPropLevel < jpathLevelMax; jpathPropLevel++) {
            if (!targetValue) {
                break;
            }
            jpathPropertyKey = jpath[jpathPropLevel];
            targetValue = value[jpathPropertyKey];
        }
        return targetValue;
    }
    static parse(jpathExpression) {
        const jpath = [];
        const jpathSplittedByPoints = jpathExpression.split(".");
        let jpathSplitted = "";
        loopSplittedByPoints: for (jpathSplitted of jpathSplittedByPoints) {
            const jpathSplittedLenth = jpathSplitted ? jpathSplitted.length : 0;
            if (jpathSplittedLenth === 0) {
                continue;
            }
            let leftBracePosition = 0;
            let rightBracePosition = 0;
            let jpathKey = "";
            let jpathKeyNumeric = 0;
            while (leftBracePosition !== (-1)) {
                // in this while loop, 
                // when the next step is done, 
                // .indexOf searches from the rightBracePosition,
                // matched in the previous while iteration.
                leftBracePosition = jpathSplitted.indexOf("[", rightBracePosition);
                // if an opening brace was not matched,
                //        means, this jpath expression does not contain [] expression,
                //        and this key item 
                //        from the splitted by dots jpath 
                //        is pushed to the target value array,
                //        and continues to check the next jpath key item.
                if (leftBracePosition === (-1)) {
                    jpath.push(jpathSplitted);
                    continue loopSplittedByPoints;
                }
                rightBracePosition = jpathSplitted.indexOf("]", leftBracePosition);
                // here means, 
                //  when square braced key opened, 
                //  but the closing square brace not matched, 
                //  the JPath expression is wrong.
                if (rightBracePosition === (-1)) {
                    throw new Error("JPathExpression synthax");
                    break;
                }
                jpathKey = jpathSplitted.slice((leftBracePosition + 1), (rightBracePosition - 1));
                jpathKeyNumeric = +jpathKey;
                if (Number.isInteger(jpathKeyNumeric) === true) {
                    jpath.push(jpathKeyNumeric);
                }
                else {
                    jpath.push(jpathKey);
                }
                rightBracePosition++;
                if (rightBracePosition === jpathSplittedLenth) {
                    continue loopSplittedByPoints;
                }
            }
        }
        return jpath;
    }
    setJPathExpression(jpathExpression) {
        this._jpathExpression = jpathExpression;
        return this;
    }
    setJPathExpressionMaxSize(maxSize) {
        this._jpathExpressionMaxSize = maxSize;
        return this;
    }
    getJPath() {
        return this._jpath;
    }
    static getByJPathExpression(jpathExpression, value) {
        const jpath = [];
        return JPath.getByJPath(jpath, value);
    }
}
exports.JPath = JPath;
JPath.JPATH_EXPRESSION_MAX_SIZE = 8;
//# sourceMappingURL=JPath.js.map