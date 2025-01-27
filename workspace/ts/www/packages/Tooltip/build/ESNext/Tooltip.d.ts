import { TemplateRenderer } from "@jaisocx/template-renderer";
import { TooltipLib } from "./TooltipLib.js";
import { TooltipInterface } from "./TooltipInterface.js";
import "@jaisocx-tooltip-assets/tooltip-styles-main-webpack.css";
export declare class Tooltip implements TooltipInterface {
    debug: boolean;
    isShown: number;
    cssClasses: string;
    tooltipAlignDimensionOne: number;
    tooltipAlignDimensionTwo: number;
    tooltipPaddingAlignDimensionTwo: number;
    tooltipPaddingUnitAlignDimensionTwo: number;
    alternativeTabBorderSides: number[];
    eventTargetHtmlNodeId: string;
    eventTargetHtmlNode: HTMLElement | null;
    mainHtmlNodeId: string;
    mainHtmlNode: HTMLElement | null;
    templateRenderer: TemplateRenderer;
    lib: TooltipLib;
    constructor();
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
//# sourceMappingURL=Tooltip.d.ts.map