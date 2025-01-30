import { Dimensions } from "./Types.js";
export declare class TooltipLib {
    static instance: TooltipLib | undefined;
    constructor();
    static getInstance(): TooltipLib;
    setTooltipDimensions(tooltipHtmlNode: HTMLElement | null, tooltipHtmlNodeDimensions: Dimensions): void;
    calculateTooltipDimensions(eventTargetHtmlNodeDimensions: Dimensions, tooltipHtmlNodeDimensions: Dimensions, browserTabBorderSide: number, tooltipAlignDimensionTwo: number, tooltipPaddingAlignDimensionTwo: number, arrowPixelSize: number): Dimensions;
    calculateTooltipDimensionTwo(eventTargetHtmlNodeDimensions: Dimensions, tooltipHtmlNodeDimensions: Dimensions, browserTabBorderSide: number, tooltipAlignDimensionTwo: number, tooltipPaddingAlignDimensionTwo: number): Dimensions;
    doesTooltipSuitsTilBrowserTabBorder(browserTabDimensions: Dimensions, tooltipHtmlNodeDimensions: Dimensions, browserTabBorderSide: number, arrowPixelSize: number): number;
    setTooltipArrowDimensions(arrowHtmlNode: HTMLElement | null | undefined, arrowDimensions: Dimensions): undefined;
    calculateTooltipArrowDimensions(eventTargetDimensions: Dimensions, tooltipHtmlNodeDimensions: Dimensions, arrowPixelSize: number, alignDimensionOne: number): Dimensions;
    getBrowserTabDimensions(): Dimensions;
    getHtmlNodeDimensions(htmlNode: HTMLElement | null): Dimensions;
    getRectSideSizeByMidTilConerLineSize(midTilCornerLineSize: number): number;
    translateToPixelValue(sizeNumeric: number, sizeUnit: any): number;
    translateCssDimToPixelValue(sizeCssValue: any): number;
    getRemRelativePixelValue(): number;
    validateCssSizeDim(cssSizeDimInputArg: any): number;
    getCssVariableForNode(htmlNode: HTMLElement | Element | null | undefined, cssVariableName: any): any;
    getScrollableHolderNodes(eventTarget: HTMLElement): any[];
}
//# sourceMappingURL=TooltipLib.d.ts.map