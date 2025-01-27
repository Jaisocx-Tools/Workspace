export class Constants {
    static AlignDimensionOne = class {
        static BROWSER_TAB_BORDER_TOP = 1;
        static BROWSER_TAB_BORDER_RIGHT = 2;
        static BROWSER_TAB_BORDER_LEFT = 3;
        static BROWSER_TAB_BORDER_BOTTOM = 4;
    };
    static AlignDimensionTwo = class {
        static EVENT_TARGET_START = 2;
        static EVENT_TARGET_MID = 3;
        static EVENT_TARGET_END = 5;
    };
    static CssSizeDim = class {
        static NONE = "";
        static PX = "px";
        static REM = "rem";
    };
    static CssClassNames = class {
        static TOOLTIP_MAIN = "tooltip";
        static TOOLTIP_ARROW = "tooltip-arrow";
        static CSS_VARIABLE_NAME__ARROW_SIZE = "--tooltip_arrow__size";
    };
    static Defaults = class {
        static tooltipAlignDimensionOne = Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP;
        static tooltipAlignDimensionTwo = Constants.AlignDimensionTwo.EVENT_TARGET_MID;
        static tooltipPaddingAlignDimensionTwo = 0;
        static tooltipPaddingSizeDimAlignDimensionTwo = Constants.CssSizeDim.PX;
        static alternativeTabBorderSides = [
            Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP,
            Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT,
            Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT,
            Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM,
        ];
        static withArrow = 1;
        static arrowSize = 0;
        static arrowSizeDim = Constants.CssSizeDim.REM;
        static cssClasses = "tooltip";
        static template = `
  <tooltip>
    {{ text }}
  </tooltip>    
    `;
        static templateData = {
            "text": "Hello!",
        };
    };
    static tooltipMainTemplate = `
  <tooltip-main id="{{ id }}" class="{{ cssClasses }}">
     <tooltip-arrow class="tooltip-arrow"></tooltip-arrow>
     <tooltip-content class="tooltip-content">{{ tooltipContent }}</tooltip-content>
  </tooltip-main>
  `;
    static tooltipMainTemplateData = {};
}
//# sourceMappingURL=Constants.js.map