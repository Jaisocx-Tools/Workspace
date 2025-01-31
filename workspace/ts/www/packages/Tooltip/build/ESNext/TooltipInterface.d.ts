export interface TooltipInterface {
    setEventTargetHtmlNodeId(id: any): TooltipInterface;
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
    showTooltip(toShowCssDisplayValue: any | null, eventTarget: any): TooltipInterface;
    setTooltipAlignDimensionOneCss(): TooltipInterface;
}
//# sourceMappingURL=TooltipInterface.d.ts.map