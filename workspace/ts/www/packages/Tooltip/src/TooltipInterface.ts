// the class Tooltip is to produce dynamic a tooltip.
// the Constants.template value and the templateRederer json data can be overridden.
// the main purpose is to render the html template, to handle the js events, 

import { Dimensions } from "./Types";

// and to place the tooltip the right way near the event target html node.
export interface TooltipInterface {

  // initialization methods to set properies of a tooltip for a html node.
  setEventTargetHtmlNodeId( id: any ): TooltipInterface; // required
  setEventTargetHtmlNode( eventTarget: HTMLElement ): TooltipInterface; // required or .setEventTargetHtmlNodeId()
  setHtml( html: any ): TooltipInterface;
  setTemplate( template: any ): TooltipInterface; // optional
  setTemplateData( data: any ): TooltipInterface; // required. e.g. setTemplateData( { "text": "The Text this will be rendered in the tooltip" } )
  setCssClasses( cssClasses: any ): TooltipInterface; // optional
  setPaddingEventTarget ( 
    padding: number,
    paddingDim: any
  ): TooltipInterface; // optional
  setTooltipAlignDimensionOne( tooltipAlignDimensionOne: number ): TooltipInterface; // optional
  setTooltipAlignDimensionTwo( tooltipAlignDimensionTwo: number ): TooltipInterface; // optional
  setTooltipPaddingAlignDimensionTwo ( 
    tooltipPaddingAlignDimensionTwo: number,
    tooltipPaddingSizeDimAlignDimensionTwo: number
  ): TooltipInterface; // optional
  setAlignDimensionOneValueOrder( alternativeTabBorderSides: number[] ): TooltipInterface; // optional
  setArrowSize (
    arrowSize: number,
    arrowSizeDim: any
  ): TooltipInterface;
  setTimeoutToCloseMillis ( timeoutMillis: number ): TooltipInterface;
  setTooltipHideBehaviour ( tooltipHideBehaviour: any ): TooltipInterface;
  

  // final render method to initialize the tooltip for an html node.
  render(): TooltipInterface; // required


  // other methods, not required for tooltip instance initialization.
  // TODO: rewrite using the Jaisocx improved event handler
  addEventListeners(): TooltipInterface; 

  // to show or hide the tooltip
  showTooltip(
    toShowCssDisplayValue: any|null,
    eventTarget: any
  ): TooltipInterface;

  // the method, used by showTooltip(),
  // this method uses TooltipLib helping methods to define the css rules top and left
  // for the dynamic produced tooltip html node
  calculateTooltipHtmlNodeDimensions(): Dimensions;
}


