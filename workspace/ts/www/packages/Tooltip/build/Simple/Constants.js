class Constants {
  static EventsNames = class {
    static CLICK = "click";
    static DOUBLE_CLICK = "dblclick";
    static CONTEXT_MENU = "contextmenu";
    static MOUSEOVER = "mouseover";
    static FOCUS = "focus";
    static RESIZE = "resize";
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
  static Defaults = class {
    static tooltipAlignDimensionOne = Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP;
    static tooltipAlignDimensionTwo = Constants.AlignDimensionTwo.EVENT_TARGET_MID;
    static tooltipPaddingAlignDimensionTwo = 0;
    static tooltipPaddingSizeDimAlignDimensionTwo = Constants.CssSizeDim.PIXELS;
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