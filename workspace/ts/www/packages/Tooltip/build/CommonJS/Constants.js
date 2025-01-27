"use strict";
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
class Constants {
}
exports.Constants = Constants;
Constants.AlignDimensionOne = (_a = class {
    },
    __setFunctionName(_a, "AlignDimensionOne"),
    _a.BROWSER_TAB_BORDER_TOP = 1,
    _a.BROWSER_TAB_BORDER_RIGHT = 2,
    _a.BROWSER_TAB_BORDER_LEFT = 3,
    _a.BROWSER_TAB_BORDER_BOTTOM = 4,
    _a);
Constants.AlignDimensionTwo = (_b = class {
    },
    __setFunctionName(_b, "AlignDimensionTwo"),
    _b.EVENT_TARGET_START = 2,
    _b.EVENT_TARGET_MID = 3,
    _b.EVENT_TARGET_END = 5,
    _b);
Constants.CssPaddingUnits = (_c = class {
    },
    __setFunctionName(_c, "CssPaddingUnits"),
    _c.NONE = 0,
    _c.PX = 1,
    _c.PERCENTAGE = 2,
    _c.REM = 3,
    _c);
Constants.Defaults = (_d = class {
    },
    __setFunctionName(_d, "Defaults"),
    _d.tooltipAlignDimensionOne = Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP,
    _d.tooltipAlignDimensionTwo = Constants.AlignDimensionTwo.EVENT_TARGET_MID,
    _d.tooltipPaddingAlignDimensionTwo = 0,
    _d.tooltipPaddingUnitAlignDimensionTwo = Constants.CssPaddingUnits.PX,
    _d.alternativeTabBorderSides = [
        Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP,
        Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT,
        Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT,
        Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM,
    ],
    _d.cssClasses = "tooltip",
    _d.template = `
  <tooltip id="{{ id }}" class="{{ cssClasses }}">
    {{ text }}
  </tooltip>    
    `,
    _d);
//# sourceMappingURL=Constants.js.map