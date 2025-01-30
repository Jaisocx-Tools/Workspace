import { TooltipMainTemplateData } from "./TooltipMainTemplateData.js";
export class Constants {
    static EventsNames = class {
        static CLICK = "click";
        static DOUBLE_CLICK = "dblclick";
        static CONTEXT_MENU = "contextmenu";
        static MOUSEOVER = "mouseover";
        static FOCUS = "focus";
        static RESIZE = "resize";
        static SCROLL = "scroll";
        static BEFOREUNLOAD = "beforeunload";
    };
    static EventTarget = class {
        static OTHER_THAN_EVENT_TARGET = "other";
        static EVENT_TARGET = "event_target";
    };
    static TooltipEventsNames = class {
        static BEFORE_TOOLTIP_SHOWN = "beforeTooltipShown";
        static AFTER_TOOLTIP_SHOWN = "afterTooltipShown";
        static AFTER_TOOLTIP_HIDDEN = "afterTooltipHidden";
    };
    static EventsEmitted = [
        Constants.EventsNames.RESIZE,
        Constants.TooltipEventsNames.BEFORE_TOOLTIP_SHOWN,
        Constants.TooltipEventsNames.AFTER_TOOLTIP_SHOWN,
        Constants.TooltipEventsNames.AFTER_TOOLTIP_HIDDEN,
    ];
    static BrowserStorageKeys = class {
        static JAISOCX_TOOLTIPS_EXIST = "JaisocxTooltipsExist";
        static JAISOCX_TOOLTIPS_CURRENT = "JaisocxTooltipsCurrent";
    };
    static TooltipHideBehaviour = class {
        static HIDE_WHEN_CLICK__ANYWHERE = "anywhere";
        static HIDE_WHEN_CLICK__OTHER_THAN_EVENT_TARGET = "other";
        static HIDE_WHEN_CLICK__EVENT_TARGET = "event_target";
        static HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__ANYWHERE = "timeout_and_anywhere";
        static HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__OTHER_THAN_EVENT_TARGET = "timeout_and_other";
        static HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__EVENT_TARGET = "timeout_and_event_target";
    };
    static AlignDimensionOne = class {
        static BROWSER_TAB_BORDER_TOP = "top";
        static BROWSER_TAB_BORDER_RIGHT = "right";
        static BROWSER_TAB_BORDER_LEFT = "left";
        static BROWSER_TAB_BORDER_BOTTOM = "bottom";
    };
    static AlignDimensionTwo = class {
        static EVENT_TARGET_START = "start";
        static EVENT_TARGET_MID = "mid";
        static EVENT_TARGET_END = "end";
    };
    static cssDisplay = class {
        static BLOCK = "block";
        static NONE = "none";
    };
    static CssSizeDim = class {
        static NONE = "";
        static PIXELS = "px";
        static REM = "rem";
        static PERCENTS = "%";
    };
    static CssClassNames = class {
        static TOOLTIP_MAIN = "tooltip";
        static TOOLTIP_ARROW = "tooltip-arrow";
        static TOOLTIP_CONTENT = "tooltip-content";
        static CSS_VARIABLE_NAME__ARROW_SIZE = "--tooltip_arrow__size";
    };
    static CssPropertiesNames = class {
        static DISPLAY = "display";
    };
    static Defaults = class {
        static tooltipAlignDimensionOne = Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP;
        static tooltipAlignDimensionTwo = Constants.AlignDimensionTwo.EVENT_TARGET_MID;
        static tooltipPaddingAlignDimensionTwo = 0;
        static tooltipPaddingSizeDimAlignDimensionTwo = Constants.CssSizeDim.PIXELS;
        static tooltipHideBehaviour = Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__EVENT_TARGET;
        static tooltipHideTimoutMilliseconds = 5000;
        static alternativeTabBorderSides = [
            Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP,
            Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT,
            Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT,
            Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM,
        ];
        static withArrow = 1;
        static arrowSize = 0;
        static arrowSizeDim = Constants.CssSizeDim.REM;
        static cssClasses = Constants.CssClassNames.TOOLTIP_MAIN;
        static cssDisplay = Constants.cssDisplay.NONE;
        static templateTooltipContent = `
      {{ html }}
    `;
        static templateTooltipContentData = {
            "html": "Hello!",
        };
    };
    static tooltipMainTemplate = `
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
    static tooltipMainTemplateData = new TooltipMainTemplateData();
}
//# sourceMappingURL=Constants.js.map