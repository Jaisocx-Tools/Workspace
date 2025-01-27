// the class Tooltip is to produce dynamic a tooltip.
// the Constants.template value and the templateRederer json data can be overridden.
// the main purpose is to render the html template, to handle the js events, 
// and to place the tooltip the right way near the event target html node.
export interface TooltipInterface {

  // initialization methods to set properies of a tooltip for a html node.
  setDebug(debug: boolean): TooltipInterface;
  setCssClasses( cssClasses: string ): TooltipInterface;
  setTooltipAlignDimensionOne( tooltipAlignDimensionOne: number ): TooltipInterface;
  setTooltipAlignDimensionTwo( tooltipAlignDimensionTwo: number ): TooltipInterface;
  setTooltipPaddingAlignDimensionTwo ( 
    tooltipPaddingAlignDimensionTwo: number,
    tooltipPaddingUnitAlignDimensionTwo: number
  ): TooltipInterface;
  setEventTargetHtmlNodeId( id: any ): TooltipInterface;
  setEventTargetHtmlNode( eventTarget: HTMLElement ): TooltipInterface;
  setAlternativeTabBorderSides( alternativeTabBorderSides: number[] ): TooltipInterface;
  setTemplate( template: any ): TooltipInterface;
  setTemplateData( data: any ): TooltipInterface;

  // final render method to initialize the tooltip for an html node.
  render(): TooltipInterface;


  // TODO: rewrite using the Jaisocx improved event handler
  addEventHandlers(): TooltipInterface;

  // to show or hide the tooltip
  showTooltip(): TooltipInterface;

  // the method, used by showTooltip(),
  // this method uses TooltipLib helping methods to define the css rules top and left
  // for the dynamic produced tooltip html node
  setTooltipAlignDimensionOneCss(): TooltipInterface;
}


