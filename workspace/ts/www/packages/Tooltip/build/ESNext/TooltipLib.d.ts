import { Dimensions } from "./Types.js";
export declare class TooltipLib {
    static instance: TooltipLib | undefined;
    constructor();
    static getInstance(): TooltipLib;
    setTooltipDimensions(eventTargetHtmlNode: HTMLElement | null, tooltipHtmlNode: HTMLElement | null, browserTabBorderSide: number, tooltipAlignDimensionTwo: number, tooltipPaddingAlignDimensionTwo: number, tooltipPaddingSizeDimAlignDimensionTwo: number, arrowSize: number): void;
    calculateTooltipDimensions(eventTargetHtmlNode: HTMLElement | null, tooltipHtmlNode: HTMLElement | null, browserTabBorderSide: number, tooltipAlignDimensionTwo: number, tooltipPaddingAlignDimensionTwo: number, tooltipPaddingSizeDimAlignDimensionTwo: number, arrowSize: number): Dimensions;
    calculateTooltipDimensionTwo(eventTargetHtmlNodeDimensions: Dimensions, tooltipHtmlNodeDimensions: Dimensions, browserTabBorderSide: number, tooltipAlignDimensionTwo: number, tooltipPaddingAlignDimensionTwo: number, tooltipPaddingSizeDimAlignDimensionTwo: number): Dimensions;
    doesTooltipSuitsTilBrowserTabBorder(eventTargetHtmlNode: HTMLElement | null, tooltipHtmlNode: HTMLElement | null, browserTabBorderSide: number, tooltipAlignDimensionTwo: number, tooltipPaddingAlignDimensionTwo: number, tooltipPaddingSizeDimAlignDimensionTwo: number, arrowSize: number): number;
    setTooltipArrowDimensions(eventTargetHtmlNode: HTMLElement, tooltipHtmlNode: HTMLElement, arrowHtmlNode: HTMLElement, arrowSize: number, arrowSizeDim: any, browserTabBorderSide: number, tooltipHtmlNodeDimensions: Dimensions): Dimensions;
    getSquareSideSizeByMidTilConerLineSize(midTilCornerLineSize: number): number;
    translateCssDimToPixelValue(tooltipHtmlNode: HTMLElement, arrowSize: number, arrowSizeDim: any): number;
    getBrowserTabDimensions(): Dimensions;
    getHtmlNodeDimensions(htmlNode: HTMLElement | null): Dimensions;
}
//# sourceMappingURL=TooltipLib.d.ts.map