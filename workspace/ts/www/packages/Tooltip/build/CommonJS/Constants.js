"use strict";
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
const TooltipMainTemplateData_js_1 = require("./TooltipMainTemplateData.js");
class Constants {
}
exports.Constants = Constants;
Constants.EventsNames = (_a = class {
    },
    __setFunctionName(_a, "EventsNames"),
    _a.CLICK = "click",
    _a.DOUBLE_CLICK = "dblclick",
    _a.CONTEXT_MENU = "contextmenu",
    _a.MOUSEOVER = "mouseover",
    _a.FOCUS = "focus",
    _a.RESIZE = "resize",
    _a);
Constants.TooltipEventsNames = (_b = class {
    },
    __setFunctionName(_b, "TooltipEventsNames"),
    _b.BEFORE_TOOLTIP_SHOWN = "beforeTooltipShown",
    _b.AFTER_TOOLTIP_SHOWN = "afterTooltipShown",
    _b.AFTER_TOOLTIP_HIDDEN = "afterTooltipHidden",
    _b);
Constants.EventsEmitted = [
    Constants.EventsNames.RESIZE,
    Constants.TooltipEventsNames.BEFORE_TOOLTIP_SHOWN,
    Constants.TooltipEventsNames.AFTER_TOOLTIP_SHOWN,
    Constants.TooltipEventsNames.AFTER_TOOLTIP_HIDDEN,
];
Constants.AlignDimensionOne = (_c = class {
    },
    __setFunctionName(_c, "AlignDimensionOne"),
    _c.BROWSER_TAB_BORDER_TOP = "top",
    _c.BROWSER_TAB_BORDER_RIGHT = "right",
    _c.BROWSER_TAB_BORDER_LEFT = "left",
    _c.BROWSER_TAB_BORDER_BOTTOM = "bottom",
    _c);
Constants.AlignDimensionTwo = (_d = class {
    },
    __setFunctionName(_d, "AlignDimensionTwo"),
    _d.EVENT_TARGET_START = "start",
    _d.EVENT_TARGET_MID = "mid",
    _d.EVENT_TARGET_END = "end",
    _d);
Constants.CssSizeDim = (_e = class {
    },
    __setFunctionName(_e, "CssSizeDim"),
    _e.NONE = "",
    _e.PIXELS = "px",
    _e.REM = "rem",
    _e.PERCENTS = "%",
    _e);
Constants.CssClassNames = (_f = class {
    },
    __setFunctionName(_f, "CssClassNames"),
    _f.TOOLTIP_MAIN = "tooltip",
    _f.TOOLTIP_ARROW = "tooltip-arrow",
    _f.TOOLTIP_CONTENT = "tooltip-content",
    _f.CSS_VARIABLE_NAME__ARROW_SIZE = "--tooltip_arrow__size",
    _f);
Constants.Defaults = (_g = class {
    },
    __setFunctionName(_g, "Defaults"),
    _g.tooltipAlignDimensionOne = Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP,
    _g.tooltipAlignDimensionTwo = Constants.AlignDimensionTwo.EVENT_TARGET_MID,
    _g.tooltipPaddingAlignDimensionTwo = 0,
    _g.tooltipPaddingSizeDimAlignDimensionTwo = Constants.CssSizeDim.PIXELS,
    _g.alternativeTabBorderSides = [
        Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP,
        Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT,
        Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT,
        Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM,
    ],
    _g.withArrow = 1,
    _g.arrowSize = 0,
    _g.arrowSizeDim = Constants.CssSizeDim.REM,
    _g.cssClasses = Constants.CssClassNames.TOOLTIP_MAIN,
    _g.templateTooltipContent = `
      {{ html }}
    `,
    _g.templateTooltipContentData = {
        "html": "Hello!",
    },
    _g);
Constants.tooltipMainTemplate = `
  <tooltip-main 
    id="{{ id }}" 
    class="{{ cssClasses }}">

      <tooltip-arrow 
          class="tooltip-arrow">
      </tooltip-arrow>

      <tooltip-content 
          class="tooltip-content">
            {{ tooltipContent }}
      </tooltip-content>

  </tooltip-main>
  `;
Constants.tooltipMainTemplateData = new TooltipMainTemplateData_js_1.TooltipMainTemplateData();
//# sourceMappingURL=Constants.js.map