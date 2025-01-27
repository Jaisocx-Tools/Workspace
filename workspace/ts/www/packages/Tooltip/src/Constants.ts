
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

  static CssPaddingUnits = class {
    static NONE: number = 0;
    static PX: number = 1;
    static PERCENTAGE: number = 2;
    static REM: number = 3;
  };

  static Defaults = class {
    static tooltipAlignDimensionOne: number = Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP;
    static tooltipAlignDimensionTwo: number = Constants.AlignDimensionTwo.EVENT_TARGET_MID;
    static tooltipPaddingAlignDimensionTwo: number = 0;
    static tooltipPaddingUnitAlignDimensionTwo: number = Constants.CssPaddingUnits.PX;
  
    static alternativeTabBorderSides: number[] = [
      Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP,
      Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT,
      Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT,
      Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM,
    ];
  
    static cssClasses: string = "tooltip";
  
    static template: string = `
  <tooltip>
    {{ text }}
  </tooltip>    
    `;

    static templateData: object = {
      "text": "Hello!",
    };
  };
  
}






