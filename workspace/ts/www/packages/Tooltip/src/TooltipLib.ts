import { Dimensions } from "./Types.js";
import { Constants } from "./Constants.js";


export class TooltipLib {

  static instance: TooltipLib|undefined;

  constructor() {
  }

  static getInstance(): TooltipLib {
    if ( !TooltipLib.instance ) {
      TooltipLib.instance = new TooltipLib();
    }

    return TooltipLib.instance;
  }

  setTooltipDimensions (
    eventTargetHtmlNode: HTMLElement|null,
    tooltipHtmlNode: HTMLElement|null,
    browserTabBorderSide: number,
    tooltipAlignDimensionTwo: number,
    tooltipPaddingAlignDimensionTwo: number,
    tooltipPaddingSizeDimAlignDimensionTwo: number,
    arrowSize: number
  ): void {
    const tooltipHtmlNodeDimensions: Dimensions = this.calculateTooltipDimensions (
      eventTargetHtmlNode,
      tooltipHtmlNode,
      browserTabBorderSide,
      tooltipAlignDimensionTwo,
      tooltipPaddingAlignDimensionTwo,
      tooltipPaddingSizeDimAlignDimensionTwo,
      arrowSize
    );

    // the css rule top will be set for the tooltip
    //@ts-ignore
    tooltipHtmlNode.style.top = `${tooltipHtmlNodeDimensions.top}px`;

    // the css rule left will be set for the tooltip
    //@ts-ignore
    tooltipHtmlNode.style.left = `${tooltipHtmlNodeDimensions.left}px`;
  }

  calculateTooltipDimensions (
    eventTargetHtmlNode: HTMLElement|null,
    tooltipHtmlNode: HTMLElement|null,
    browserTabBorderSide: number,
    tooltipAlignDimensionTwo: number,
    tooltipPaddingAlignDimensionTwo: number,
    tooltipPaddingSizeDimAlignDimensionTwo: number,
    arrowSize: number
  ): Dimensions {

    const retVal: Dimensions = new Dimensions();

    const eventTargetHtmlNodeDimensions: Dimensions = this.getHtmlNodeDimensions (
      eventTargetHtmlNode
    );

    let tooltipHtmlNodeDimensions: Dimensions = this.getHtmlNodeDimensions (
      tooltipHtmlNode
    );

    retVal.width = tooltipHtmlNodeDimensions.width;
    retVal.height = tooltipHtmlNodeDimensions.height;

    tooltipHtmlNodeDimensions = this.calculateTooltipDimensionTwo (
      eventTargetHtmlNodeDimensions,
      tooltipHtmlNodeDimensions,
      browserTabBorderSide,
      tooltipAlignDimensionTwo,
      tooltipPaddingAlignDimensionTwo,
      tooltipPaddingSizeDimAlignDimensionTwo
    );

    if ( browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP ) {
      retVal.top = eventTargetHtmlNodeDimensions.top
        - tooltipHtmlNodeDimensions.height
        - arrowSize; // TODO - padding DimensionOne

      retVal.left = tooltipHtmlNodeDimensions.left;

    } else if ( browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT ) {
      retVal.top = tooltipHtmlNodeDimensions.top;

      retVal.left = eventTargetHtmlNodeDimensions.left
        + eventTargetHtmlNodeDimensions.width
        + arrowSize; // TODO + padding DimensionOne

    } else if ( browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT ) {
      retVal.top = tooltipHtmlNodeDimensions.top;

      retVal.left = eventTargetHtmlNodeDimensions.left
        - arrowSize
        - tooltipHtmlNodeDimensions.width; // TODO - padding DimensionOne

    } else if ( browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM ) {
      retVal.top = eventTargetHtmlNodeDimensions.bottom
        + arrowSize;  // TODO + padding DimensionOne

      retVal.left = tooltipHtmlNodeDimensions.left;

    }

    retVal.right = retVal.left + retVal.width;
    retVal.bottom = retVal.top + retVal.height;

    return retVal;
  }

  calculateTooltipDimensionTwo (
    eventTargetHtmlNodeDimensions: Dimensions,
    tooltipHtmlNodeDimensions: Dimensions,
    browserTabBorderSide: number,
    tooltipAlignDimensionTwo: number,
    tooltipPaddingAlignDimensionTwo: number,
    tooltipPaddingSizeDimAlignDimensionTwo: number
  ): Dimensions {

    if (
      ( browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP ) || 
      ( browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM )
    ) {

      if ( tooltipAlignDimensionTwo === Constants.AlignDimensionTwo.EVENT_TARGET_START ) {
        tooltipHtmlNodeDimensions.left = eventTargetHtmlNodeDimensions.left
          - tooltipPaddingAlignDimensionTwo;

      } else if ( tooltipAlignDimensionTwo === Constants.AlignDimensionTwo.EVENT_TARGET_MID ) {
        const midWidthEventTarget: number = Math.floor( eventTargetHtmlNodeDimensions.width / 2 );
        const midWidthTooltip: number = Math.floor( tooltipHtmlNodeDimensions.width / 2 );

        tooltipHtmlNodeDimensions.left = eventTargetHtmlNodeDimensions.left
          + midWidthEventTarget
          - midWidthTooltip
          + tooltipPaddingAlignDimensionTwo;

      } else if ( tooltipAlignDimensionTwo === Constants.AlignDimensionTwo.EVENT_TARGET_END ) {
        tooltipHtmlNodeDimensions.left = eventTargetHtmlNodeDimensions.right
          - tooltipHtmlNodeDimensions.width
          + tooltipPaddingAlignDimensionTwo;
      }

    } else if (
      ( browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT ) || 
      ( browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT )
    ) {

      if ( tooltipAlignDimensionTwo === Constants.AlignDimensionTwo.EVENT_TARGET_START ) {
        tooltipHtmlNodeDimensions.top = eventTargetHtmlNodeDimensions.top
          - tooltipPaddingAlignDimensionTwo;

      } else if ( tooltipAlignDimensionTwo === Constants.AlignDimensionTwo.EVENT_TARGET_MID ) {
        const midHeightEventTarget: number = Math.floor( eventTargetHtmlNodeDimensions.height / 2 );
        const midHeightTooltip: number = Math.floor( tooltipHtmlNodeDimensions.height / 2 );
  
        tooltipHtmlNodeDimensions.top = eventTargetHtmlNodeDimensions.top
          + midHeightEventTarget
          - midHeightTooltip
          + tooltipPaddingAlignDimensionTwo;
  
      } else if ( tooltipAlignDimensionTwo === Constants.AlignDimensionTwo.EVENT_TARGET_END ) {
        tooltipHtmlNodeDimensions.top = eventTargetHtmlNodeDimensions.bottom
          - tooltipHtmlNodeDimensions.height
          + tooltipPaddingAlignDimensionTwo;

      }

    }

    return tooltipHtmlNodeDimensions;
  }

  doesTooltipSuitsTilBrowserTabBorder (
    eventTargetHtmlNode: HTMLElement|null,
    tooltipHtmlNode: HTMLElement|null,
    browserTabBorderSide: number,
    tooltipAlignDimensionTwo: number,
    tooltipPaddingAlignDimensionTwo: number,
    tooltipPaddingSizeDimAlignDimensionTwo: number,
    arrowSize: number
  ): number {

    let retVal: number = 0;

    const browserTabDimensions: Dimensions = this.getBrowserTabDimensions();

    const tooltipHtmlNodeDimensions: Dimensions = this.calculateTooltipDimensions (
      eventTargetHtmlNode,
      tooltipHtmlNode,
      browserTabBorderSide,
      tooltipAlignDimensionTwo,
      tooltipPaddingAlignDimensionTwo,
      tooltipPaddingSizeDimAlignDimensionTwo,
      arrowSize
    );
    
    if ( browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP ) {
      if (
        ( browserTabDimensions.top < tooltipHtmlNodeDimensions.top ) &&
        ( browserTabDimensions.left < tooltipHtmlNodeDimensions.left ) &&
        ( tooltipHtmlNodeDimensions.right < browserTabDimensions.right ) 
      ) {
        retVal = 1;
      }

    } else if ( browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT ) {
      if (
        ( tooltipHtmlNodeDimensions.right < browserTabDimensions.right ) 
      ) {
        retVal = 1;
      }

    } else if ( browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT ) {
      if (
        ( browserTabDimensions.left < tooltipHtmlNodeDimensions.left ) 
      ) {
        retVal = 1;
      }

    } else if ( browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM ) {
      if (
        ( tooltipHtmlNodeDimensions.bottom < browserTabDimensions.bottom ) &&
        ( browserTabDimensions.left < tooltipHtmlNodeDimensions.left ) &&
        ( tooltipHtmlNodeDimensions.right < browserTabDimensions.right ) 
      ) {
        retVal = 1;
      }

    }

    return retVal;
  }

  setTooltipArrowDimensions (
    eventTargetHtmlNode: HTMLElement,
    tooltipHtmlNode: HTMLElement,
    arrowHtmlNode: HTMLElement,
    arrowSize: number,
    arrowSizeDim: any,
    browserTabBorderSide: number,
    tooltipHtmlNodeDimensions: Dimensions
  ): Dimensions {
    let arrowDimensions: Dimensions = new Dimensions();

    let arrowPixelSize: number = this.translateCssDimToPixelValue (
      tooltipHtmlNode,
      arrowSize,
      arrowSizeDim
    );

    let arrowSquareSideSize: number = this.getSquareSideSizeByMidTilConerLineSize (
      arrowPixelSize
    );

    arrowDimensions.width = arrowSquareSideSize;
    arrowDimensions.height = arrowSquareSideSize;

    const eventTargetDimensions: Dimensions = this.getHtmlNodeDimensions( eventTargetHtmlNode );
    // const tooltipHtmlNodeDimensions: Dimensions = this.getHtmlNodeDimensions( tooltipHtmlNode );

    if (
      ( browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP ) 
    ) {
      const eventTargetWidthMid: number = ( eventTargetDimensions.width / 2 ) + eventTargetDimensions.left;
      arrowDimensions.left = eventTargetWidthMid - ( arrowSquareSideSize / 2 );
      arrowDimensions.top = eventTargetDimensions.top - ( arrowPixelSize * 2 ); //TDOD: - dimensionOnePadding

    } else if (
      ( browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT ) 
    ) {
      const eventTargetHeightMid: number = eventTargetDimensions.top + ( eventTargetDimensions.height / 2 );
      arrowDimensions.top = eventTargetHeightMid - arrowPixelSize;
      arrowDimensions.left = eventTargetDimensions.right + ( arrowSquareSideSize - arrowPixelSize ); //TDOD: + dimensionOnePadding

    } else if (
      ( browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT )
    ) {
      const eventTargetHeightMid: number = eventTargetDimensions.top + ( eventTargetDimensions.height / 2 );
      arrowDimensions.top = eventTargetHeightMid - arrowPixelSize;
      arrowDimensions.left = eventTargetDimensions.left - ( arrowPixelSize * 2 ); //TDOD: - dimensionOnePadding

    } else if (
      ( browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM )
    ) {
      const eventTargetWidthMid: number = ( eventTargetDimensions.width / 2 ) + eventTargetDimensions.left;
      arrowDimensions.left = eventTargetWidthMid - ( arrowSquareSideSize / 2 );
      arrowDimensions.top = eventTargetDimensions.bottom + ( arrowSquareSideSize - arrowPixelSize ); //TDOD: + dimensionOnePadding

    }

    //arrowDimensions.right = arrowDimensions.left + arrowDimensions.width; encommented, since not clear, whether translateX is doint what with top and left css rules, and right and bottom then?
    //arrowDimensions.bottom = arrowDimensions.top - arrowDimensions.height; 

    arrowHtmlNode.style.width = `${arrowDimensions.width}px`;
    arrowHtmlNode.style.height = `${arrowDimensions.height}px`;
    arrowHtmlNode.style.top = `${arrowDimensions.top}px`;
    arrowHtmlNode.style.left = `${arrowDimensions.left}px`;

    return arrowDimensions;
  }

  getSquareSideSizeByMidTilConerLineSize (
    midTilCornerLineSize: number
  ): number {
    let retVal: number = 0;

    // in a square, the mid til corner line is the side of a little triangle, 
    // with 2 angles of 45deg and the square side is then the hypothenouse of the little square triangle.
    // the sin(45deg) is then the catet / hypoothenouse, and midTilCornerLineSize / retVal

    // midTilCornerLineSize / retVal = sin(45deg);
    // m / retVal = sin45
    // retVal * ( m / retVal ) = sin45 * retVal
    // m = sin45 * retVal
    // retVal = m / sin45

    retVal = Math.floor( midTilCornerLineSize / Math.sin ( ( 45 * ( Math.PI / 180 ) ) ) );

    return retVal;
  }

  translateCssDimToPixelValue (
    tooltipHtmlNode: HTMLElement,
    arrowSize: number,
    arrowSizeDim: any
  ): number {
    let pixelValue: number = 0;

    if ( arrowSizeDim == Constants.CssSizeDim.PX ) {
      pixelValue = arrowSize;

    } else if ( arrowSizeDim == Constants.CssSizeDim.REM ) {
      const htmlNodeHtml: HTMLElement = document.getElementsByTagName("HTML")[0] as HTMLElement;
      const fontSize: any = window.getComputedStyle(htmlNodeHtml).getPropertyValue("font-size");
      const remRelativePixelValue: number = Math.floor( parseFloat(fontSize) );

      pixelValue = ( arrowSize * remRelativePixelValue );

    } else {
      throw new Error( "Css Dim ${arrowSizeDim} not supported" );

    }

    return pixelValue;
  }

  getBrowserTabDimensions (): Dimensions {

    const zero: number = 0;
    const htmlNodeHtml: HTMLElement|null = document.getElementsByTagName("HTML")[0] as HTMLElement;

    let browserTabDimensions: Dimensions = this.getHtmlNodeDimensions( htmlNodeHtml );
    
    return browserTabDimensions;
  }

  getHtmlNodeDimensions (
    htmlNode: HTMLElement|null
  ): Dimensions {

    let dimensions: Dimensions = new Dimensions();

    // @ts-ignore
    const rect: any = htmlNode.getBoundingClientRect();

    dimensions.width = Math.floor( rect.width );
    dimensions.height = Math.floor( rect.height );

    dimensions.top = Math.floor( rect.top ) + Math.floor( window.scrollY );
    dimensions.right = Math.floor( rect.right );
    dimensions.left = Math.floor( rect.left ) + Math.floor( window.scrollX );
    dimensions.bottom = Math.floor( rect.bottom );

    return dimensions;
  }

}






