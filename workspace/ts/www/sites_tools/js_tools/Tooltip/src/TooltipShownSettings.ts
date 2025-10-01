export class TooltipShownSettings {
  tooltipHtmlNodeId: any;
  tooltipHideBehaviour: any;
  tooltipHideTimoutId:  null | ReturnType<typeof setTimeout>;



  constructor(
    id: any,
    hideBehaviour: any,
    hideTimeoutId:  null | ReturnType<typeof setTimeout>
  ) {
    this.tooltipHtmlNodeId = id;
    this.tooltipHideBehaviour = hideBehaviour;
    this.tooltipHideTimoutId = hideTimeoutId;
  }
}

