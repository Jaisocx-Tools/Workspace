import { Dimensions } from "./Types.js";
import { TooltipMainTemplateData } from "./TooltipMainTemplateData.js";

export class Constants {

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
    static BROWSER_TAB_BORDER_TOP: any = "top";
    static BROWSER_TAB_BORDER_RIGHT: any = "right";
    static BROWSER_TAB_BORDER_LEFT: any = "left";
    static BROWSER_TAB_BORDER_BOTTOM: any = "bottom";
  };

  static AlignDimensionTwo = class {
    static EVENT_TARGET_START: any = "start";
    static EVENT_TARGET_MID: any = "mid";
    static EVENT_TARGET_END: any = "end";
  };

  static CssSizeDim = class {
    static NONE: any = "";
    static PIXELS: any = "px";
    static REM: any = "rem";
    static PERCENTS: any = "%";
  };

  static CssClassNames = class {
    static TOOLTIP_MAIN: any = "tooltip";
    static TOOLTIP_ARROW: any = "tooltip-arrow";
    static TOOLTIP_CONTENT: any = "tooltip-content";
    static CSS_VARIABLE_NAME__ARROW_SIZE: any = "--tooltip_arrow__size";
  };

  static Defaults = class {
    static tooltipAlignDimensionOne: number = Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP;
    static tooltipAlignDimensionTwo: number = Constants.AlignDimensionTwo.EVENT_TARGET_MID;
    static tooltipPaddingAlignDimensionTwo: number = 0;
    static tooltipPaddingSizeDimAlignDimensionTwo: any = Constants.CssSizeDim.PIXELS;
  
    static alternativeTabBorderSides: number[] = [
      Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP,
      Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT,
      Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT,
      Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM,
    ];

    static withArrow: number = 1;
    static arrowSize: any = 0;
    static arrowSizeDim: any = Constants.CssSizeDim.REM;  
  
    static cssClasses: any = Constants.CssClassNames.TOOLTIP_MAIN;
  
    static templateTooltipContent: any = `
      {{ html }}
    `;

    static templateTooltipContentData: object = {
      "html": "Hello!",
    };
  };

  static tooltipMainTemplate: any = `
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

  static tooltipMainTemplateData: TooltipMainTemplateData = new TooltipMainTemplateData();
}






