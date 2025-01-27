export interface TooltipInterface {
    setDebug(debug: boolean): TooltipInterface;
    setCssClasses(cssClasses: string): TooltipInterface;
    setTooltipAlignDimensionOne(tooltipAlignDimensionOne: number): TooltipInterface;
    setTooltipAlignDimensionTwo(tooltipAlignDimensionTwo: number): TooltipInterface;
    setTooltipPaddingAlignDimensionTwo(tooltipPaddingAlignDimensionTwo: number, tooltipPaddingUnitAlignDimensionTwo: number): TooltipInterface;
    setEventTargetHtmlNodeId(id: any): TooltipInterface;
    setEventTargetHtmlNode(eventTarget: HTMLElement): TooltipInterface;
    setAlternativeTabBorderSides(alternativeTabBorderSides: number[]): TooltipInterface;
    setTemplate(template: any): TooltipInterface;
    setTemplateData(data: any): TooltipInterface;
    render(): TooltipInterface;
    addEventHandlers(): TooltipInterface;
    showTooltip(): TooltipInterface;
    setTooltipAlignDimensionOneCss(): TooltipInterface;
}
//# sourceMappingURL=TooltipInterface.d.ts.map