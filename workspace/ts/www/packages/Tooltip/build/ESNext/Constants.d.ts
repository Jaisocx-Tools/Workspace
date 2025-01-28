import { TooltipMainTemplateData } from "./TooltipMainTemplateData.js";
export declare class Constants {
    static EventsNames: {
        new (): {};
        CLICK: string;
        DOUBLE_CLICK: string;
        CONTEXT_MENU: string;
        MOUSEOVER: string;
        FOCUS: string;
        RESIZE: string;
    };
    static TooltipEventsNames: {
        new (): {};
        BEFORE_TOOLTIP_SHOWN: string;
        AFTER_TOOLTIP_SHOWN: string;
        AFTER_TOOLTIP_HIDDEN: string;
    };
    static EventsEmitted: string[];
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
    static Defaults: {
        new (): {};
        tooltipAlignDimensionOne: number;
        tooltipAlignDimensionTwo: number;
        tooltipPaddingAlignDimensionTwo: number;
        tooltipPaddingSizeDimAlignDimensionTwo: any;
        alternativeTabBorderSides: number[];
        withArrow: number;
        arrowSize: any;
        arrowSizeDim: any;
        cssClasses: any;
        templateTooltipContent: any;
        templateTooltipContentData: object;
    };
    static tooltipMainTemplate: any;
    static tooltipMainTemplateData: TooltipMainTemplateData;
}
//# sourceMappingURL=Constants.d.ts.map