
export class Constants {

  static AlignDimensionOne = class {
    static BROWSER_TAB_BORDER_TOP: number = 1;
    static BROWSER_TAB_BORDER_RIGHT: number = 2;
    static BROWSER_TAB_BORDER_LEFT: number = 3;
    static BROWSER_TAB_BORDER_BOTTOM: number = 4;
  };

  static AlignDimensionTwo = class {
    static EVENT_TARGET_START: number = 2;
    static EVENT_TARGET_MID: number = 3;
    static EVENT_TARGET_END: number = 5;
  };

  static CssSizeDim = class {
    static NONE: any = "";
    static PX: any = "px";
    static REM: any = "rem";
  };

  static CssClassNames = class {
    static TOOLTIP_MAIN: any = "tooltip";
    static TOOLTIP_ARROW: any = "tooltip-arrow";
    static CSS_VARIABLE_NAME__ARROW_SIZE: any = "--tooltip_arrow__size";
  };

  static Defaults = class {
    static tooltipAlignDimensionOne: number = Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP;
    static tooltipAlignDimensionTwo: number = Constants.AlignDimensionTwo.EVENT_TARGET_MID;
    static tooltipPaddingAlignDimensionTwo: number = 0;
    static tooltipPaddingSizeDimAlignDimensionTwo: any = Constants.CssSizeDim.PX;
  
    static alternativeTabBorderSides: number[] = [
      Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP,
      Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT,
      Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT,
      Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM,
    ];

    static withArrow: number = 1;
    static arrowSize: any = 0;
    static arrowSizeDim: any = Constants.CssSizeDim.REM;  
  
    static cssClasses: any = "tooltip";
  
    static template: any = `
  <tooltip>
    {{ html }}
  </tooltip>    
    `;

    static templateData: object = {
      "html": "Hello!",
    };
  };

  static tooltipMainTemplate: any = `
  <tooltip-main id="{{ id }}" class="{{ cssClasses }}">
     <tooltip-arrow class="tooltip-arrow"></tooltip-arrow>
     <tooltip-content class="tooltip-content">{{ tooltipContent }}</tooltip-content>
  </tooltip-main>
  `;

  static tooltipMainTemplateData: object = {
  };

}






