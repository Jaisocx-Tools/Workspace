import { Dimensions } from "./Types";
export interface TooltipInterface {
    _hide(node: HTMLElement | null): undefined;
    _show(node: HTMLElement | null): undefined;
    setEventTargetHtmlNodeId(id: any): TooltipInterface;
    setEventTargetSelector(cssSelector: any): TooltipInterface;
    setEventTargetHtmlNode(eventTarget: HTMLElement): TooltipInterface;
    setHtml(html: any): TooltipInterface;
    setTemplate(template: any): TooltipInterface;
    setTemplateData(data: any): TooltipInterface;
    setCssClasses(cssClasses: any): TooltipInterface;
    setPaddingEventTarget(padding: number, paddingDim: any): TooltipInterface;
    setTooltipAlignDimensionOne(tooltipAlignDimensionOne: number): TooltipInterface;
    setTooltipAlignDimensionTwo(tooltipAlignDimensionTwo: number): TooltipInterface;
    setTooltipPaddingAlignDimensionTwo(tooltipPaddingAlignDimensionTwo: number, tooltipPaddingSizeDimAlignDimensionTwo: number): TooltipInterface;
    setAlignDimensionOneValueOrder(alternativeTabBorderSides: number[]): TooltipInterface;
    setArrowSize(arrowSize: number, arrowSizeDim: any): TooltipInterface;
    setTimeoutToCloseMillis(timeoutMillis: number): TooltipInterface;
    setTooltipHideBehaviour(tooltipHideBehaviour: any): TooltipInterface;
    render(): TooltipInterface;
    addEventListeners(): TooltipInterface;
    showTooltip(toShowCssDisplayValue: any, eventTarget: any): TooltipInterface;
    calculateTooltipHtmlNodeDimensions(): Dimensions;
}
//# sourceMappingURL=TooltipInterface.d.ts.map