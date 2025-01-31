"use strict";
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
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
    _a.SCROLL = "scroll",
    _a.BEFOREUNLOAD = "beforeunload",
    _a);
Constants.EventTarget = (_b = class {
    },
    __setFunctionName(_b, "EventTarget"),
    _b.OTHER_THAN_EVENT_TARGET = "other",
    _b.EVENT_TARGET = "event_target",
    _b);
Constants.TooltipEventsNames = (_c = class {
    },
    __setFunctionName(_c, "TooltipEventsNames"),
    _c.BEFORE_TOOLTIP_SHOWN = "beforeTooltipShown",
    _c.AFTER_TOOLTIP_SHOWN = "afterTooltipShown",
    _c.AFTER_TOOLTIP_HIDDEN = "afterTooltipHidden",
    _c);
Constants.EventsEmitted = [
    Constants.EventsNames.RESIZE,
    Constants.TooltipEventsNames.BEFORE_TOOLTIP_SHOWN,
    Constants.TooltipEventsNames.AFTER_TOOLTIP_SHOWN,
    Constants.TooltipEventsNames.AFTER_TOOLTIP_HIDDEN,
];
Constants.BrowserStorageKeys = (_d = class {
    },
    __setFunctionName(_d, "BrowserStorageKeys"),
    _d.JAISOCX_TOOLTIPS_EXIST = "JaisocxTooltipsExist",
    _d.JAISOCX_TOOLTIPS_CURRENT = "JaisocxTooltipsCurrent",
    _d);
Constants.TooltipHideBehaviour = (_e = class {
    },
    __setFunctionName(_e, "TooltipHideBehaviour"),
    _e.HIDE_WHEN_CLICK__ANYWHERE = "anywhere",
    _e.HIDE_WHEN_CLICK__OTHER_THAN_EVENT_TARGET = "other",
    _e.HIDE_WHEN_CLICK__EVENT_TARGET = "event_target",
    _e.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__ANYWHERE = "timeout_and_anywhere",
    _e.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__OTHER_THAN_EVENT_TARGET = "timeout_and_other",
    _e.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__EVENT_TARGET = "timeout_and_event_target",
    _e);
Constants.AlignDimensionOne = (_f = class {
    },
    __setFunctionName(_f, "AlignDimensionOne"),
    _f.BROWSER_TAB_BORDER_TOP = "top",
    _f.BROWSER_TAB_BORDER_RIGHT = "right",
    _f.BROWSER_TAB_BORDER_LEFT = "left",
    _f.BROWSER_TAB_BORDER_BOTTOM = "bottom",
    _f);
Constants.AlignDimensionTwo = (_g = class {
    },
    __setFunctionName(_g, "AlignDimensionTwo"),
    _g.EVENT_TARGET_START = "start",
    _g.EVENT_TARGET_MID = "mid",
    _g.EVENT_TARGET_END = "end",
    _g);
Constants.cssDisplay = (_h = class {
    },
    __setFunctionName(_h, "cssDisplay"),
    _h.BLOCK = "block",
    _h.NONE = "none",
    _h);
Constants.CssSizeDim = (_j = class {
    },
    __setFunctionName(_j, "CssSizeDim"),
    _j.NONE = "",
    _j.PIXELS = "px",
    _j.REM = "rem",
    _j.PERCENTS = "%",
    _j);
Constants.CssClassNames = (_k = class {
    },
    __setFunctionName(_k, "CssClassNames"),
    _k.TOOLTIP_MAIN = "tooltip",
    _k.TOOLTIP_ARROW = "tooltip-arrow",
    _k.TOOLTIP_CONTENT = "tooltip-content",
    _k.CSS_VARIABLE_NAME__ARROW_SIZE = "--tooltip_arrow__size",
    _k.CSS_VARIABLE_NAME__EVENT_TARGET_PADDING = "--tooltip_event_target_padding",
    _k);
Constants.CssPropertiesNames = (_l = class {
    },
    __setFunctionName(_l, "CssPropertiesNames"),
    _l.DISPLAY = "display",
    _l);
Constants.Defaults = (_m = class {
    },
    __setFunctionName(_m, "Defaults"),
    _m.tooltipAlignDimensionOne = Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP,
    _m.tooltipAlignDimensionTwo = Constants.AlignDimensionTwo.EVENT_TARGET_MID,
    _m.tooltipPaddingAlignDimensionTwo = 0,
    _m.tooltipPaddingSizeDimAlignDimensionTwo = Constants.CssSizeDim.PIXELS,
    _m.tooltipHideBehaviour = Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__EVENT_TARGET,
    _m.tooltipHideTimoutMilliseconds = 5000,
    _m.alternativeTabBorderSides = [
        Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP,
        Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT,
        Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT,
        Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM,
    ],
    _m.withArrow = 1,
    _m.arrowSize = 0,
    _m.arrowSizeDim = Constants.CssSizeDim.REM,
    _m.paddingEventTarget = 0,
    _m.paddingDimEventTarget = Constants.CssSizeDim.REM,
    _m.cssClasses = Constants.CssClassNames.TOOLTIP_MAIN,
    _m.cssDisplay = Constants.cssDisplay.NONE,
    _m.templateTooltipContent = `
      {{ html }}
    `,
    _m.templateTooltipContentData = {
        "html": "Hello!",
    },
    _m);
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