import { Dimensions } from "./Types.js";
export declare class TooltipLib {
    static instance: TooltipLib | undefined;
    constructor();
    static getInstance(): TooltipLib;
    setTooltipDimensions(eventTargetHtmlNode: HTMLElement | null, tooltipHtmlNode: HTMLElement | null, browserTabBorderSide: number, tooltipAlignDimensionTwo: number, tooltipPaddingAlignDimensionTwo: number, tooltipPaddingUnitAlignDimensionTwo: number): void;
    calculateTooltipDimensions(eventTargetHtmlNode: HTMLElement | null, tooltipHtmlNode: HTMLElement | null, browserTabBorderSide: number, tooltipAlignDimensionTwo: number, tooltipPaddingAlignDimensionTwo: number, tooltipPaddingUnitAlignDimensionTwo: number): Dimensions;
    calculateTooltipDimensionTwo(eventTargetHtmlNodeDimensions: Dimensions, tooltipHtmlNodeDimensions: Dimensions, browserTabBorderSide: number, tooltipAlignDimensionTwo: number, tooltipPaddingAlignDimensionTwo: number, tooltipPaddingUnitAlignDimensionTwo: number): Dimensions;
    doesTooltipSuitsTilBrowserTabBorder(eventTargetHtmlNode: HTMLElement | null, tooltipHtmlNode: HTMLElement | null, browserTabBorderSide: number, tooltipAlignDimensionTwo: number, tooltipPaddingAlignDimensionTwo: number, tooltipPaddingUnitAlignDimensionTwo: number): number;
    getBrowserTabDimensions(): Dimensions;
    getHtmlNodeDimensions(htmlNode: HTMLElement | null): Dimensions;
}
//# sourceMappingURL=TooltipLib.d.ts.map