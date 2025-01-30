import { TooltipMainTemplateData } from "./TooltipMainTemplateData.js";
export declare class Constants {
    static EventsNames: {
        new (): {};
        CLICK: any;
        DOUBLE_CLICK: any;
        CONTEXT_MENU: any;
        MOUSEOVER: any;
        FOCUS: any;
        RESIZE: any;
        SCROLL: any;
        BEFOREUNLOAD: any;
    };
    static EventTarget: {
        new (): {};
        OTHER_THAN_EVENT_TARGET: any;
        EVENT_TARGET: any;
    };
    static TooltipEventsNames: {
        new (): {};
        BEFORE_TOOLTIP_SHOWN: any;
        AFTER_TOOLTIP_SHOWN: any;
        AFTER_TOOLTIP_HIDDEN: any;
    };
    static EventsEmitted: any[];
    static BrowserStorageKeys: {
        new (): {};
        JAISOCX_TOOLTIPS_EXIST: any;
        JAISOCX_TOOLTIPS_CURRENT: any;
    };
    static TooltipHideBehaviour: {
        new (): {};
        HIDE_WHEN_CLICK__ANYWHERE: any;
        HIDE_WHEN_CLICK__OTHER_THAN_EVENT_TARGET: any;
        HIDE_WHEN_CLICK__EVENT_TARGET: any;
        HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__ANYWHERE: any;
        HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__OTHER_THAN_EVENT_TARGET: any;
        HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__EVENT_TARGET: any;
    };
    static AlignDimensionOne: {
        new (): {};
        BROWSER_TAB_BORDER_TOP: any;
        BROWSER_TAB_BORDER_RIGHT: any;
        BROWSER_TAB_BORDER_LEFT: any;
        BROWSER_TAB_BORDER_BOTTOM: any;
    };
    static AlignDimensionTwo: {
        new (): {};
        EVENT_TARGET_START: any;
        EVENT_TARGET_MID: any;
        EVENT_TARGET_END: any;
    };
    static cssDisplay: {
        new (): {};
        BLOCK: any;
        NONE: any;
    };
    static CssSizeDim: {
        new (): {};
        NONE: any;
        PIXELS: any;
        REM: any;
        PERCENTS: any;
    };
    static CssClassNames: {
        new (): {};
        TOOLTIP_MAIN: any;
        TOOLTIP_ARROW: any;
        TOOLTIP_CONTENT: any;
        CSS_VARIABLE_NAME__ARROW_SIZE: any;
    };
    static CssPropertiesNames: {
        new (): {};
        DISPLAY: any;
    };
    static Defaults: {
        new (): {};
        tooltipAlignDimensionOne: number;
        tooltipAlignDimensionTwo: number;
        tooltipPaddingAlignDimensionTwo: number;
        tooltipPaddingSizeDimAlignDimensionTwo: any;
        tooltipHideBehaviour: any;
        tooltipHideTimoutMilliseconds: number;
        alternativeTabBorderSides: number[];
        withArrow: number;
        arrowSize: any;
        arrowSizeDim: any;
        cssClasses: any;
        cssDisplay: any;
        templateTooltipContent: any;
        templateTooltipContentData: object;
    };
    static tooltipMainTemplate: any;
    static tooltipMainTemplateData: TooltipMainTemplateData;
}
//# sourceMappingURL=Constants.d.ts.map