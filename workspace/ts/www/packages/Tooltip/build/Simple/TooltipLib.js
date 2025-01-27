class TooltipLib {
  static instance;

  constructor() {
  }

  static getInstance() {
    if (!TooltipLib.instance) {
      TooltipLib.instance = new TooltipLib();
    }

    return TooltipLib.instance;
  }

  setTooltipDimensions(
    eventTargetHtmlNode, 
    tooltipHtmlNode, 
    browserTabBorderSide, 
    tooltipAlignDimensionTwo, 
    tooltipPaddingAlignDimensionTwo, 
    tooltipPaddingUnitAlignDimensionTwo) {
    const tooltipHtmlNodeDimensions = this.calculateTooltipDimensions(
      eventTargetHtmlNode, 
      tooltipHtmlNode, 
      browserTabBorderSide, 
      tooltipAlignDimensionTwo, 
      tooltipPaddingAlignDimensionTwo, 
      tooltipPaddingUnitAlignDimensionTwo);
    // the css rule top will be set for the tooltip
    //@ts-ignore
    tooltipHtmlNode.style.top = `${tooltipHtmlNodeDimensions.top}px`;
    // the css rule left will be set for the tooltip
    //@ts-ignore
    tooltipHtmlNode.style.left = `${tooltipHtmlNodeDimensions.left}px`;
  }

  calculateTooltipDimensions(
    eventTargetHtmlNode, 
    tooltipHtmlNode, 
    browserTabBorderSide, 
    tooltipAlignDimensionTwo, 
    tooltipPaddingAlignDimensionTwo, 
    tooltipPaddingUnitAlignDimensionTwo) {
    const retVal = new Dimensions();
    const eventTargetHtmlNodeDimensions = this.getHtmlNodeDimensions(eventTargetHtmlNode);
    let tooltipHtmlNodeDimensions = this.getHtmlNodeDimensions(tooltipHtmlNode);
    retVal.width = tooltipHtmlNodeDimensions.width;
    retVal.height = tooltipHtmlNodeDimensions.height;
    tooltipHtmlNodeDimensions = this.calculateTooltipDimensionTwo(
      eventTargetHtmlNodeDimensions, 
      tooltipHtmlNodeDimensions, 
      browserTabBorderSide, 
      tooltipAlignDimensionTwo, 
      tooltipPaddingAlignDimensionTwo, 
      tooltipPaddingUnitAlignDimensionTwo);

    if (browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP) {
      retVal.top = eventTargetHtmlNodeDimensions.top
                - tooltipHtmlNodeDimensions.height;
      retVal.left = tooltipHtmlNodeDimensions.left;
    }
    else if (browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT) {
      retVal.top = tooltipHtmlNodeDimensions.top;
      retVal.left = eventTargetHtmlNodeDimensions.left
                + eventTargetHtmlNodeDimensions.width;
    }
    else if (browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT) {
      retVal.top = tooltipHtmlNodeDimensions.top;
      retVal.left = eventTargetHtmlNodeDimensions.left
                - tooltipHtmlNodeDimensions.width;
    }
    else if (browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM) {
      retVal.top = eventTargetHtmlNodeDimensions.bottom;
      retVal.left = tooltipHtmlNodeDimensions.left;
    }

    retVal.right = retVal.left + retVal.width;
    retVal.bottom = retVal.top + retVal.height;

    return retVal;
  }

  calculateTooltipDimensionTwo(
    eventTargetHtmlNodeDimensions, 
    tooltipHtmlNodeDimensions, 
    browserTabBorderSide, 
    tooltipAlignDimensionTwo, 
    tooltipPaddingAlignDimensionTwo, 
    tooltipPaddingUnitAlignDimensionTwo) {
    if ((browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP) ||
            (browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM)) {
      if (tooltipAlignDimensionTwo === Constants.AlignDimensionTwo.EVENT_TARGET_START) {
        tooltipHtmlNodeDimensions.left = eventTargetHtmlNodeDimensions.left
                    - tooltipPaddingAlignDimensionTwo;
      }
      else if (tooltipAlignDimensionTwo === Constants.AlignDimensionTwo.EVENT_TARGET_MID) {
        const midWidthEventTarget = Math.floor(eventTargetHtmlNodeDimensions.width / 2);
        const midWidthTooltip = Math.floor(tooltipHtmlNodeDimensions.width / 2);
        tooltipHtmlNodeDimensions.left = eventTargetHtmlNodeDimensions.left
                    + midWidthEventTarget
                    - midWidthTooltip
                    + tooltipPaddingAlignDimensionTwo;
      }
      else if (tooltipAlignDimensionTwo === Constants.AlignDimensionTwo.EVENT_TARGET_END) {
        tooltipHtmlNodeDimensions.left = eventTargetHtmlNodeDimensions.right
                    - tooltipHtmlNodeDimensions.width
                    + tooltipPaddingAlignDimensionTwo;
      }
    }
    else if ((browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT) ||
            (browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT)) {
      if (tooltipAlignDimensionTwo === Constants.AlignDimensionTwo.EVENT_TARGET_START) {
        tooltipHtmlNodeDimensions.top = eventTargetHtmlNodeDimensions.top
                    - tooltipPaddingAlignDimensionTwo;
      }
      else if (tooltipAlignDimensionTwo === Constants.AlignDimensionTwo.EVENT_TARGET_MID) {
        const midHeightEventTarget = Math.floor(eventTargetHtmlNodeDimensions.height / 2);
        const midHeightTooltip = Math.floor(tooltipHtmlNodeDimensions.height / 2);
        tooltipHtmlNodeDimensions.top = eventTargetHtmlNodeDimensions.top
                    + midHeightEventTarget
                    - midHeightTooltip
                    + tooltipPaddingAlignDimensionTwo;
      }
      else if (tooltipAlignDimensionTwo === Constants.AlignDimensionTwo.EVENT_TARGET_END) {
        tooltipHtmlNodeDimensions.top = eventTargetHtmlNodeDimensions.bottom
                    - tooltipHtmlNodeDimensions.height
                    + tooltipPaddingAlignDimensionTwo;
      }
    }

    return tooltipHtmlNodeDimensions;
  }

  doesTooltipSuitsTilBrowserTabBorder(
    eventTargetHtmlNode, 
    tooltipHtmlNode, 
    browserTabBorderSide, 
    tooltipAlignDimensionTwo, 
    tooltipPaddingAlignDimensionTwo, 
    tooltipPaddingUnitAlignDimensionTwo) {
    let retVal = 0;
    const browserTabDimensions = this.getBrowserTabDimensions();
    const tooltipHtmlNodeDimensions = this.calculateTooltipDimensions(
      eventTargetHtmlNode, 
      tooltipHtmlNode, 
      browserTabBorderSide, 
      tooltipAlignDimensionTwo, 
      tooltipPaddingAlignDimensionTwo, 
      tooltipPaddingUnitAlignDimensionTwo);

    if (browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP) {
      if ((browserTabDimensions.top < tooltipHtmlNodeDimensions.top) &&
                (browserTabDimensions.left < tooltipHtmlNodeDimensions.left) &&
                (tooltipHtmlNodeDimensions.right < browserTabDimensions.right)) {
        retVal = 1;
      }
    }
    else if (browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT) {
      if ((tooltipHtmlNodeDimensions.right < browserTabDimensions.right)) {
        retVal = 1;
      }
    }
    else if (browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT) {
      if ((browserTabDimensions.left < tooltipHtmlNodeDimensions.left)) {
        retVal = 1;
      }
    }
    else if (browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM) {
      if ((tooltipHtmlNodeDimensions.bottom < browserTabDimensions.bottom) &&
                (browserTabDimensions.left < tooltipHtmlNodeDimensions.left) &&
                (tooltipHtmlNodeDimensions.right < browserTabDimensions.right)) {
        retVal = 1;
      }
    }

    return retVal;
  }

  getBrowserTabDimensions() {
    const zero = 0;
    const htmlNodeHtml = document.getElementsByTagName("HTML")[0];
    let browserTabDimensions = this.getHtmlNodeDimensions(htmlNodeHtml);

    return browserTabDimensions;
  }

  getHtmlNodeDimensions(htmlNode) {
    let dimensions = new Dimensions();
    // @ts-ignore
    const rect = htmlNode.getBoundingClientRect();
    dimensions.width = Math.floor(rect.width);
    dimensions.height = Math.floor(rect.height);
    dimensions.top = Math.floor(rect.top) + Math.floor(window.scrollY);
    dimensions.right = Math.floor(rect.right);
    dimensions.left = Math.floor(rect.left) + Math.floor(window.scrollX);
    dimensions.bottom = Math.floor(rect.bottom);

    return dimensions;
  }
}
//# sourceMappingURL=TooltipLib.js.map