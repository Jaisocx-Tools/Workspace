import { TooltipMainTemplateData } from "./TooltipMainTemplateData.js";



export class TooltipConstants {

  static EventsNames = class {
    static CLICK: any = "click";
    static DOUBLE_CLICK: any = "dblclick";
    static CONTEXT_MENU: any = "contextmenu";
    static MOUSEOVER: any = "mouseover";
    static FOCUS: any = "focus";
    static RESIZE: any = "resize";
    static SCROLL: any = "scroll";
    static BEFOREUNLOAD: any = "beforeunload";
  };

  static EventTarget = class {
    static OTHER_THAN_EVENT_TARGET: any = "other";
    static EVENT_TARGET: any = "event_target";
  };

  static TooltipEventsNames = class {
    static BEFORE_TOOLTIP_SHOWN: any = "beforeTooltipShown";
    static AFTER_TOOLTIP_SHOWN: any = "afterTooltipShown";
    static AFTER_TOOLTIP_HIDDEN: any = "afterTooltipHidden";
  };

  static EventsEmitted = [
    TooltipConstants.EventsNames.RESIZE,
    TooltipConstants.TooltipEventsNames.BEFORE_TOOLTIP_SHOWN,
    TooltipConstants.TooltipEventsNames.AFTER_TOOLTIP_SHOWN,
    TooltipConstants.TooltipEventsNames.AFTER_TOOLTIP_HIDDEN
  ];

  static BrowserStorageKeys = class {
    static JAISOCX_TOOLTIPS_EXIST: any = "JaisocxTooltipsExist";
    static JAISOCX_TOOLTIPS_CURRENT: any = "JaisocxTooltipsCurrent";
  };

  static TooltipHideBehaviour = class {
    static HIDE_WHEN_CLICK__ANYWHERE: any = "anywhere";
    static HIDE_WHEN_CLICK__OTHER_THAN_EVENT_TARGET: any = "other";
    static HIDE_WHEN_CLICK__EVENT_TARGET: any = "event_target";
    static HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__ANYWHERE: any = "timeout_and_anywhere";
    static HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__OTHER_THAN_EVENT_TARGET: any = "timeout_and_other";
    static HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__EVENT_TARGET: any = "timeout_and_event_target";
  };

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

  static ShowModes = class {
    static HIDE: any = "hide";
    static SHOW: any = "show";
    static TURN: any = "turn";
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
    static TOOLTIP_HIDDEN: any = "hidden";
    static TOOLTIP_SHOWN: any = "shown";
    static TOOLTIP_SHOWN_SIMPLE: any = "shown_simple";
    static TOOLTIP_CLASSES_HIDDEN_SHOWN_PREFIX: any = "shown_";
    static TOOLTIP_CLASSES_HIDDEN_SHOWN_WITH_TRANSITION: any = "with-transition";
  };

  static CssVariablesNames = class {
    static CSS_VARIABLE_NAME__ARROW_SIZE: any = "--tooltip_arrow__size";
    static CSS_VARIABLE_NAME__EVENT_TARGET_PADDING: any = "--tooltip_event_target_padding";
    static CSS_VARIABLE_NAME__TOOLTIP_HEIGHT: any = "--tooltip__height";
    static CSS_VARIABLE_NAME__OVERFLOW_Y: any = "--tooltip__overflow_y";
  };

  static CssPropertiesNames = class {
    static DISPLAY: any = "display";
  };

  static Defaults = class {
    static tooltipAlignDimensionOne: number = TooltipConstants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP;
    static tooltipAlignDimensionTwo: number = TooltipConstants.AlignDimensionTwo.EVENT_TARGET_MID;
    static tooltipPaddingAlignDimensionTwo: number = 0;
    static tooltipPaddingSizeDimAlignDimensionTwo: any = TooltipConstants.CssSizeDim.REM;

    static tooltipHideBehaviour: any = TooltipConstants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__ANYWHERE;
    static tooltipHideTimoutMilliseconds: number = 6000;

    static alternativeTabBorderSides: any[] = [
      TooltipConstants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP,
      TooltipConstants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT,
      TooltipConstants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT,
      TooltipConstants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM
    ];

    static withArrow: number = 1;
    static arrowSize: any = 0;
    static arrowSizeDim: any = TooltipConstants.CssSizeDim.REM;

    static paddingEventTarget: number = 0;
    static paddingDimEventTarget: any = TooltipConstants.CssSizeDim.REM;

    static cssClasses: any = TooltipConstants.CssClassNames.TOOLTIP_MAIN;

    static templateTooltipContent: any = `
      {{ html }}
    `;

    static templateTooltipContentData: object = {
      "html": "Hello!"
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






