export interface TooltipInterface {
    setDebug(debug: boolean): TooltipInterface;
    setEventTargetHtmlNodeId(id: any): TooltipInterface;
    setEventTargetHtmlNode(eventTarget: HTMLElement): TooltipInterface;
    setTemplate(template: any): TooltipInterface;
    setTemplateData(data: any): TooltipInterface;
    setCssClasses(cssClasses: any): TooltipInterface;
    setTooltipAlignDimensionOne(tooltipAlignDimensionOne: number): TooltipInterface;
    setTooltipAlignDimensionTwo(tooltipAlignDimensionTwo: number): TooltipInterface;
    setTooltipPaddingAlignDimensionTwo(tooltipPaddingAlignDimensionTwo: number, tooltipPaddingSizeDimAlignDimensionTwo: number): TooltipInterface;
    setAlternativeTabBorderSides(alternativeTabBorderSides: number[]): TooltipInterface;
    render(): TooltipInterface;
    addEventHandlers(): TooltipInterface;
    showTooltip(): TooltipInterface;
    setTooltipAlignDimensionOneCss(): TooltipInterface;
}
//# sourceMappingURL=TooltipInterface.d.ts.map