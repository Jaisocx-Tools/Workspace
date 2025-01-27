class Constants {
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
  static CssPaddingUnits = class {
    static NONE = 0;
    static PX = 1;
    static PERCENTAGE = 2;
    static REM = 3;
  };
  static Defaults = class {
    static tooltipAlignDimensionOne = Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP;
    static tooltipAlignDimensionTwo = Constants.AlignDimensionTwo.EVENT_TARGET_MID;
    static tooltipPaddingAlignDimensionTwo = 0;
    static tooltipPaddingUnitAlignDimensionTwo = Constants.CssPaddingUnits.PX;
    static alternativeTabBorderSides = [
      Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP,
      Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT,
      Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT,
      Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM,
    ];
    static cssClasses = "tooltip";
    static template = `
  <tooltip id="{{ id }}" class="{{ cssClasses }}">
    {{ text }}
  </tooltip>    
    `;
  };
}
//# sourceMappingURL=Constants.js.map