import { TooltipMainTemplateData } from "./TooltipMainTemplateData.js";
export class TooltipConstants {
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
        TooltipConstants.EventsNames.RESIZE,
        TooltipConstants.TooltipEventsNames.BEFORE_TOOLTIP_SHOWN,
        TooltipConstants.TooltipEventsNames.AFTER_TOOLTIP_SHOWN,
        TooltipConstants.TooltipEventsNames.AFTER_TOOLTIP_HIDDEN
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
    static ShowModes = class {
        static HIDE = "hide";
        static SHOW = "show";
        static TURN = "turn";
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
        static TOOLTIP_HIDDEN = "hidden";
        static TOOLTIP_SHOWN = "shown";
        static TOOLTIP_SHOWN_SIMPLE = "shown_simple";
        static TOOLTIP_CLASSES_HIDDEN_SHOWN_PREFIX = "shown_";
        static TOOLTIP_CLASSES_HIDDEN_SHOWN_WITH_TRANSITION = "with-transition";
    };
    static CssVariablesNames = class {
        static CSS_VARIABLE_NAME__ARROW_SIZE = "--tooltip_arrow__size";
        static CSS_VARIABLE_NAME__EVENT_TARGET_PADDING = "--tooltip_event_target_padding";
        static CSS_VARIABLE_NAME__TOOLTIP_HEIGHT = "--tooltip__height";
        static CSS_VARIABLE_NAME__OVERFLOW_Y = "--tooltip__overflow_y";
    };
    static CssPropertiesNames = class {
        static DISPLAY = "display";
    };
    static Defaults = class {
        static tooltipAlignDimensionOne = TooltipConstants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP;
        static tooltipAlignDimensionTwo = TooltipConstants.AlignDimensionTwo.EVENT_TARGET_MID;
        static tooltipPaddingAlignDimensionTwo = 0;
        static tooltipPaddingSizeDimAlignDimensionTwo = TooltipConstants.CssSizeDim.REM;
        static tooltipHideBehaviour = TooltipConstants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__ANYWHERE;
        static tooltipHideTimoutMilliseconds = 6000;
        static alternativeTabBorderSides = [
            TooltipConstants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP,
            TooltipConstants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT,
            TooltipConstants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT,
            TooltipConstants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM
        ];
        static withArrow = 1;
        static arrowSize = 0;
        static arrowSizeDim = TooltipConstants.CssSizeDim.REM;
        static paddingEventTarget = 0;
        static paddingDimEventTarget = TooltipConstants.CssSizeDim.REM;
        static cssClasses = TooltipConstants.CssClassNames.TOOLTIP_MAIN;
        static templateTooltipContent = `
      {{ html }}
    `;
        static templateTooltipContentData = {
            "html": "Hello!"
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
//# sourceMappingURL=TooltipConstants.js.map