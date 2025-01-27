"use strict";
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _a, _b, _c, _d, _e;
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
Constants.CssSizeDim = (_c = class {
    },
    __setFunctionName(_c, "CssSizeDim"),
    _c.NONE = "",
    _c.PX = "px",
    _c.REM = "rem",
    _c);
Constants.CssClassNames = (_d = class {
    },
    __setFunctionName(_d, "CssClassNames"),
    _d.TOOLTIP_MAIN = "tooltip",
    _d.TOOLTIP_ARROW = "tooltip-arrow",
    _d.CSS_VARIABLE_NAME__ARROW_SIZE = "--tooltip_arrow__size",
    _d);
Constants.Defaults = (_e = class {
    },
    __setFunctionName(_e, "Defaults"),
    _e.tooltipAlignDimensionOne = Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP,
    _e.tooltipAlignDimensionTwo = Constants.AlignDimensionTwo.EVENT_TARGET_MID,
    _e.tooltipPaddingAlignDimensionTwo = 0,
    _e.tooltipPaddingSizeDimAlignDimensionTwo = Constants.CssSizeDim.PX,
    _e.alternativeTabBorderSides = [
        Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP,
        Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT,
        Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT,
        Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM,
    ],
    _e.withArrow = 1,
    _e.arrowSize = 0,
    _e.arrowSizeDim = Constants.CssSizeDim.REM,
    _e.cssClasses = "tooltip",
    _e.template = `
  <tooltip>
    {{ text }}
  </tooltip>    
    `,
    _e.templateData = {
        "text": "Hello!",
    },
    _e);
Constants.tooltipMainTemplate = `
  <tooltip-main id="{{ id }}" class="{{ cssClasses }}">
     <tooltip-arrow class="tooltip-arrow"></tooltip-arrow>
     <tooltip-content class="tooltip-content">{{ tooltipContent }}</tooltip-content>
  </tooltip-main>
  `;
Constants.tooltipMainTemplateData = {};
//# sourceMappingURL=Constants.js.map