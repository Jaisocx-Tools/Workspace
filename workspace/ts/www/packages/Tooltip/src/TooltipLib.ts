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
    tooltipHtmlNode: HTMLElement|null,
    tooltipHtmlNodeDimensions: Dimensions
  ): void {
    if ( !tooltipHtmlNode ) {
      throw new Error("the first input arg tooltipHtmlNode has null value");
    }

    // the css rule top will be set for the tooltip
    //@ts-ignore
    tooltipHtmlNode.style.top = `${tooltipHtmlNodeDimensions.top}px`;

    // the css rule left will be set for the tooltip
    //@ts-ignore
    tooltipHtmlNode.style.left = `${tooltipHtmlNodeDimensions.left}px`;
  }

  calculateTooltipDimensions (
    eventTargetHtmlNodeDimensions: Dimensions,
    tooltipHtmlNodeDimensions: Dimensions,
    browserTabBorderSide: number,
    tooltipAlignDimensionTwo: number,
    tooltipPaddingAlignDimensionTwo: number,
    tooltipPaddingSizeDimAlignDimensionTwo: number,
    arrowPixelSize: number
  ): Dimensions {

    const retVal: Dimensions = this.calculateTooltipDimensionTwo (
      eventTargetHtmlNodeDimensions,
      tooltipHtmlNodeDimensions,
      browserTabBorderSide,
      tooltipAlignDimensionTwo,
      tooltipPaddingAlignDimensionTwo,
      tooltipPaddingSizeDimAlignDimensionTwo
    );

    retVal.width = tooltipHtmlNodeDimensions.width;
    retVal.height = tooltipHtmlNodeDimensions.height;

    if ( browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP ) {
      retVal.top = eventTargetHtmlNodeDimensions.top
        - tooltipHtmlNodeDimensions.height
        - arrowPixelSize; // TODO - padding DimensionOne

      retVal.left = tooltipHtmlNodeDimensions.left;

    } else if ( browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT ) {
      retVal.top = tooltipHtmlNodeDimensions.top;

      retVal.left = eventTargetHtmlNodeDimensions.left
        + eventTargetHtmlNodeDimensions.width
        + arrowPixelSize; // TODO + padding DimensionOne

    } else if ( browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT ) {
      retVal.top = tooltipHtmlNodeDimensions.top;

      retVal.left = eventTargetHtmlNodeDimensions.left
        - arrowPixelSize
        - tooltipHtmlNodeDimensions.width; // TODO - padding DimensionOne

    } else if ( browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM ) {
      retVal.top = eventTargetHtmlNodeDimensions.bottom
        + arrowPixelSize;  // TODO + padding DimensionOne

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
    browserTabDimensions: Dimensions,
    tooltipHtmlNodeDimensions: Dimensions,
    browserTabBorderSide: number,
    arrowPixelSize: number
  ): number {

    let retVal: number = 0;

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
    arrowHtmlNode: HTMLElement|null|undefined,
    arrowDimensions: Dimensions
  ): undefined {
    if (!arrowHtmlNode) {
      throw new Error("arrowHtmlNode is null or undefined");
    }

    arrowHtmlNode.style.width = `${arrowDimensions.width}px`;
    arrowHtmlNode.style.height = `${arrowDimensions.height}px`;
    arrowHtmlNode.style.top = `${arrowDimensions.top}px`;
    arrowHtmlNode.style.left = `${arrowDimensions.left}px`;

  }


  calculateTooltipArrowDimensions (
    eventTargetDimensions: Dimensions,
    arrowPixelSize: number,
    alignDimensionOne: number
  ): Dimensions {
    let arrowDimensions: Dimensions = new Dimensions();

    let arrowSquareSideSize: number = this.getRectSideSizeByMidTilConerLineSize (
      arrowPixelSize
    );

    arrowDimensions.width = arrowSquareSideSize;
    arrowDimensions.height = arrowSquareSideSize;

    if (
      ( alignDimensionOne === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP ) 
    ) {
      const eventTargetWidthMid: number = ( eventTargetDimensions.width / 2 ) + eventTargetDimensions.left;
      arrowDimensions.left = eventTargetWidthMid - ( arrowSquareSideSize / 2 );
      arrowDimensions.top = eventTargetDimensions.top - ( arrowPixelSize * 2 ); //TDOD: - dimensionOnePadding

    } else if (
      ( alignDimensionOne === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT ) 
    ) {
      const eventTargetHeightMid: number = eventTargetDimensions.top + ( eventTargetDimensions.height / 2 );
      arrowDimensions.top = eventTargetHeightMid - arrowPixelSize;
      arrowDimensions.left = eventTargetDimensions.right + ( arrowSquareSideSize - arrowPixelSize ); //TDOD: + dimensionOnePadding

    } else if (
      ( alignDimensionOne === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT )
    ) {
      const eventTargetHeightMid: number = eventTargetDimensions.top + ( eventTargetDimensions.height / 2 );
      arrowDimensions.top = eventTargetHeightMid - arrowPixelSize;
      arrowDimensions.left = eventTargetDimensions.left - ( arrowPixelSize * 2 ); //TDOD: - dimensionOnePadding

    } else if (
      ( alignDimensionOne === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM )
    ) {
      const eventTargetWidthMid: number = ( eventTargetDimensions.width / 2 ) + eventTargetDimensions.left;
      arrowDimensions.left = eventTargetWidthMid - ( arrowSquareSideSize / 2 );
      arrowDimensions.top = eventTargetDimensions.bottom + ( arrowSquareSideSize - arrowPixelSize ); //TDOD: + dimensionOnePadding

    }

    //arrowDimensions.right = arrowDimensions.left + arrowDimensions.width; encommented, since not clear, whether translateX is doint what with top and left css rules, and right and bottom then?
    //arrowDimensions.bottom = arrowDimensions.top - arrowDimensions.height; 

    return arrowDimensions;
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

  getRectSideSizeByMidTilConerLineSize (
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

  translateToPixelValue (
    sizeNumeric: number,
    sizeUnit: any
  ): number {
    let pixelValue: number = 0;

    // this method throws Error if the css dimension is not supported. Supported are px, % and rem.
    this.validateCssSizeDim( sizeUnit );

    if ( sizeUnit == Constants.CssSizeDim.PX ) {
      pixelValue = sizeNumeric;

    } else if ( sizeUnit == Constants.CssSizeDim.REM ) {
      const remRelativePixelValue: number = this.getRemRelativePixelValue();
      pixelValue = ( sizeNumeric * remRelativePixelValue );

    }

    return pixelValue;
  }

  translateCssDimToPixelValue (
    sizeCssValue: any
  ): number {
    let pixelValue: number = 0;

    const sizeNumeric: number = parseFloat(sizeCssValue);
    const sizeNumericAsText: any = `${sizeNumeric}`;
    const sizeUnit: any = sizeCssValue.substring( sizeNumericAsText.length );
  
    pixelValue = this.translateToPixelValue(
      sizeNumeric,
      sizeUnit
    );

    return pixelValue;
  }

  getRemRelativePixelValue(): number {
    const HtmlTagNameRemRule: any = "HTML";
    const CssRemRuleName: any = "font-size";

    const htmlNodeHtml: HTMLElement = document.getElementsByTagName(HtmlTagNameRemRule)[0] as HTMLElement;
    const fontSize: any = window.getComputedStyle(htmlNodeHtml).getPropertyValue(CssRemRuleName);
    const remRelativePixelValue: number = Math.floor( parseFloat(fontSize) );
    
    return remRelativePixelValue;
  }

  validateCssSizeDim( cssSizeDimInputArg: any ): number {
    let isValid: number = 0;

    // arrow size dim text value validation code block 
    let arrowSizeDimMatched: number = 0;
    const sizeDimSupported: any = ( Constants.CssSizeDim as any );
    for ( let sizeDimKey in sizeDimSupported ) {
      const sizeDim: any = sizeDimSupported[sizeDimKey];
      arrowSizeDimMatched = ( cssSizeDimInputArg == sizeDim ) ? 1 : 0;
      if ( arrowSizeDimMatched === 1 ) {
        break;
      }
    }

    if ( arrowSizeDimMatched === 0 ) {
      const sizeDimsSupported: any = Object.keys( Constants.CssSizeDim as any ).join( ", " );
      throw new Error( `Arrow Size dim ${cssSizeDimInputArg} not supported, supported are: (${sizeDimsSupported})` );
    }

    return isValid;
  }

  getCssVariableForNode (
    htmlNode: HTMLElement|Element|null|undefined,
    cssVariableName: any
  ): any {
    if ( !htmlNode ) {
      throw new Error("htmlNode is null or undefined");
    }

    return window
      .getComputedStyle( htmlNode as Element )
      .getPropertyValue(
        cssVariableName
      );
  }

}






