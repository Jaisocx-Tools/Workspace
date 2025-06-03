import { Dimensions } from "./Types.js";
import { TooltipConstants } from "./TooltipConstants.js";
export class TooltipLib {
    static instance;
    constructor() {
    }
    static getInstance() {
        if (!TooltipLib.instance) {
            TooltipLib.instance = new TooltipLib();
        }
        return TooltipLib.instance;
    }
    setTooltipDimensions(tooltipHtmlNode, tooltipHtmlNodeDimensions) {
        if (!tooltipHtmlNode) {
            throw new Error("the first input arg tooltipHtmlNode has null value");
        }
        // the css rule top will be set for the tooltip
        //@ts-ignore
        tooltipHtmlNode.style.top = `${tooltipHtmlNodeDimensions.top}px`;
        // the css rule left will be set for the tooltip
        //@ts-ignore
        tooltipHtmlNode.style.left = `${tooltipHtmlNodeDimensions.left}px`;
    }
    calculateTooltipDimensions(eventTargetHtmlNodeDimensions, tooltipHtmlNodeDimensions, browserTabBorderSide, tooltipAlignDimensionTwo, tooltipPaddingAlignDimensionTwo, arrowPixelSize, eventTargetPaddingPixelSize) {
        const retVal = this.calculateTooltipDimensionTwo(eventTargetHtmlNodeDimensions, tooltipHtmlNodeDimensions, browserTabBorderSide, tooltipAlignDimensionTwo, tooltipPaddingAlignDimensionTwo, arrowPixelSize);
        retVal.width = tooltipHtmlNodeDimensions.width;
        retVal.height = tooltipHtmlNodeDimensions.height;
        if (browserTabBorderSide === TooltipConstants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP) {
            retVal.top = eventTargetHtmlNodeDimensions.top
                - tooltipHtmlNodeDimensions.height
                - arrowPixelSize
                - eventTargetPaddingPixelSize;
            retVal.left = tooltipHtmlNodeDimensions.left;
        }
        else if (browserTabBorderSide === TooltipConstants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT) {
            retVal.top = tooltipHtmlNodeDimensions.top;
            retVal.left = eventTargetHtmlNodeDimensions.left
                + eventTargetHtmlNodeDimensions.width
                + arrowPixelSize
                + eventTargetPaddingPixelSize;
        }
        else if (browserTabBorderSide === TooltipConstants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT) {
            retVal.top = tooltipHtmlNodeDimensions.top;
            retVal.left = eventTargetHtmlNodeDimensions.left
                - arrowPixelSize
                - tooltipHtmlNodeDimensions.width
                - eventTargetPaddingPixelSize;
        }
        else if (browserTabBorderSide === TooltipConstants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM) {
            retVal.top = eventTargetHtmlNodeDimensions.bottom
                + arrowPixelSize
                + eventTargetPaddingPixelSize;
            retVal.left = tooltipHtmlNodeDimensions.left;
        }
        retVal.right = retVal.left + retVal.width;
        retVal.bottom = retVal.top + retVal.height;
        return retVal;
    }
    calculateTooltipDimensionTwo(eventTargetHtmlNodeDimensions, tooltipHtmlNodeDimensions, browserTabBorderSide, tooltipAlignDimensionTwo, tooltipPaddingAlignDimensionTwo, _arrowPixelSize) {
        if ((browserTabBorderSide === TooltipConstants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP) ||
            (browserTabBorderSide === TooltipConstants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM)) {
            if (tooltipAlignDimensionTwo === TooltipConstants.AlignDimensionTwo.EVENT_TARGET_START) {
                tooltipHtmlNodeDimensions.left = eventTargetHtmlNodeDimensions.left
                    - tooltipPaddingAlignDimensionTwo;
            }
            else if (tooltipAlignDimensionTwo === TooltipConstants.AlignDimensionTwo.EVENT_TARGET_MID) {
                const midWidthEventTarget = Math.floor(eventTargetHtmlNodeDimensions.width / 2);
                const midWidthTooltip = Math.floor(tooltipHtmlNodeDimensions.width / 2);
                tooltipHtmlNodeDimensions.left = eventTargetHtmlNodeDimensions.left
                    + midWidthEventTarget
                    - midWidthTooltip
                    + tooltipPaddingAlignDimensionTwo;
            }
            else if (tooltipAlignDimensionTwo === TooltipConstants.AlignDimensionTwo.EVENT_TARGET_END) {
                tooltipHtmlNodeDimensions.left = eventTargetHtmlNodeDimensions.right
                    - tooltipHtmlNodeDimensions.width
                    + tooltipPaddingAlignDimensionTwo;
            }
        }
        else if ((browserTabBorderSide === TooltipConstants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT) ||
            (browserTabBorderSide === TooltipConstants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT)) {
            if (tooltipAlignDimensionTwo === TooltipConstants.AlignDimensionTwo.EVENT_TARGET_START) {
                tooltipHtmlNodeDimensions.top = eventTargetHtmlNodeDimensions.top
                    - tooltipPaddingAlignDimensionTwo;
            }
            else if (tooltipAlignDimensionTwo === TooltipConstants.AlignDimensionTwo.EVENT_TARGET_MID) {
                const midHeightEventTarget = (eventTargetHtmlNodeDimensions.height >> 1);
                const midHeightTooltip = (tooltipHtmlNodeDimensions.height >> 1);
                tooltipHtmlNodeDimensions.top = eventTargetHtmlNodeDimensions.top
                    + midHeightEventTarget
                    - midHeightTooltip
                    + tooltipPaddingAlignDimensionTwo;
            }
            else if (tooltipAlignDimensionTwo === TooltipConstants.AlignDimensionTwo.EVENT_TARGET_END) {
                tooltipHtmlNodeDimensions.top = eventTargetHtmlNodeDimensions.bottom
                    - tooltipHtmlNodeDimensions.height
                    + tooltipPaddingAlignDimensionTwo;
            }
        }
        return tooltipHtmlNodeDimensions;
    }
    doesTooltipSuitsTilBrowserTabBorder(browserTabDimensions, tooltipHtmlNodeDimensions, browserTabBorderSide, _arrowPixelSize, _eventTargetPaddingPixelSize) {
        let retVal = 0;
        if (browserTabBorderSide === TooltipConstants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP) {
            if ((browserTabDimensions.top < tooltipHtmlNodeDimensions.top) &&
                (browserTabDimensions.left < tooltipHtmlNodeDimensions.left) &&
                (tooltipHtmlNodeDimensions.right < browserTabDimensions.right)) {
                retVal = 1;
            }
        }
        else if (browserTabBorderSide === TooltipConstants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT) {
            if ((tooltipHtmlNodeDimensions.right < browserTabDimensions.right)) {
                retVal = 1;
            }
        }
        else if (browserTabBorderSide === TooltipConstants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT) {
            if ((browserTabDimensions.left < tooltipHtmlNodeDimensions.left)) {
                retVal = 1;
            }
        }
        else if (browserTabBorderSide === TooltipConstants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM) {
            if ((tooltipHtmlNodeDimensions.bottom < browserTabDimensions.bottom) &&
                (browserTabDimensions.left < tooltipHtmlNodeDimensions.left) &&
                (tooltipHtmlNodeDimensions.right < browserTabDimensions.right)) {
                retVal = 1;
            }
        }
        return retVal;
    }
    setTooltipArrowDimensions(arrowHtmlNode, arrowDimensions) {
        if (!arrowHtmlNode) {
            throw new Error("arrowHtmlNode is null or undefined");
        }
        arrowHtmlNode.style.width = `${arrowDimensions.width}px`;
        arrowHtmlNode.style.height = `${arrowDimensions.height}px`;
        arrowHtmlNode.style.top = `${arrowDimensions.top}px`;
        arrowHtmlNode.style.left = `${arrowDimensions.left}px`;
    }
    calculateTooltipArrowDimensions(eventTargetDimensions, tooltipHtmlNodeDimensions, arrowPixelSize, alignDimensionOne) {
        let arrowDimensions = new Dimensions();
        let arrowSquareSideSize = this.getRectSideSizeByMidTilConerLineSize(arrowPixelSize);
        arrowDimensions.height = arrowSquareSideSize;
        arrowDimensions.width = arrowSquareSideSize;
        if ((alignDimensionOne === TooltipConstants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP)) {
            arrowDimensions.top = tooltipHtmlNodeDimensions.height - (arrowPixelSize);
            //TDOD: - dimensionOnePadding
            const eventTargetWidthMid = (eventTargetDimensions.width >> 1) + eventTargetDimensions.left - tooltipHtmlNodeDimensions.left;
            arrowDimensions.left = eventTargetWidthMid - (arrowSquareSideSize >> 1);
        }
        else if ((alignDimensionOne === TooltipConstants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT)) {
            const eventTargetHeightMid = eventTargetDimensions.top + (eventTargetDimensions.height >> 1) - tooltipHtmlNodeDimensions.top;
            arrowDimensions.top = eventTargetHeightMid - (arrowSquareSideSize >> 1);
            arrowDimensions.left = (arrowSquareSideSize - (arrowPixelSize * 2));
            //TDOD: + dimensionOnePadding
        }
        else if ((alignDimensionOne === TooltipConstants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT)) {
            const eventTargetHeightMid = eventTargetDimensions.top + (eventTargetDimensions.height >> 1) - tooltipHtmlNodeDimensions.top;
            arrowDimensions.top = eventTargetHeightMid - (arrowSquareSideSize >> 1);
            arrowDimensions.left = eventTargetDimensions.left - (arrowPixelSize * 2) - tooltipHtmlNodeDimensions.left;
            //TDOD: - dimensionOnePadding
        }
        else if ((alignDimensionOne === TooltipConstants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM)) {
            arrowDimensions.top = (arrowSquareSideSize - (arrowPixelSize * 2));
            //TDOD: + dimensionOnePadding
            const eventTargetWidthMid = (eventTargetDimensions.width >> 1) + eventTargetDimensions.left - tooltipHtmlNodeDimensions.left;
            arrowDimensions.left = eventTargetWidthMid - (arrowSquareSideSize >> 1);
        }
        //arrowDimensions.right = arrowDimensions.left + arrowDimensions.width; encommented, since not clear, whether translateX is doint what with top and left css rules, and right and bottom then?
        //arrowDimensions.bottom = arrowDimensions.top - arrowDimensions.height;
        return arrowDimensions;
    }
    getBrowserTabDimensions() {
        // const zero: number = 0;
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
    getRectSideSizeByMidTilConerLineSize(midTilCornerLineSize) {
        let retVal = 0;
        // in a square, the mid til corner line is the side of a little triangle,
        // with 2 angles of 45deg and the square side is then the hypothenouse of the little square triangle.
        // the sin(45deg) is then the catet / hypoothenouse, and midTilCornerLineSize / retVal
        // midTilCornerLineSize / retVal = sin(45deg);
        // m / retVal = sin45
        // retVal * ( m / retVal ) = sin45 * retVal
        // m = sin45 * retVal
        // retVal = m / sin45
        retVal = Math.floor(midTilCornerLineSize / Math.sin((45 * (Math.PI / 180))));
        return retVal;
    }
    adjustHeight(htmlNode, htmlNodeDimensions, _cssVaraibleNameHeight, cssVaraibleNameOverflowY) {
        if (!htmlNode) {
            throw new Error("Html node has no value");
        }
        let resultingHtmlNodeDimensions = new Dimensions();
        if (!htmlNodeDimensions) {
            htmlNodeDimensions = this.getHtmlNodeDimensions(htmlNode);
        }
        const cssOverflowYValue = this.getCssVariableForNode(htmlNode, cssVaraibleNameOverflowY);
        if (cssOverflowYValue !== "visible") {
            resultingHtmlNodeDimensions = { ...htmlNodeDimensions };
            return resultingHtmlNodeDimensions;
        }
        htmlNode.style.height = `${htmlNodeDimensions.height}px`;
        resultingHtmlNodeDimensions = { ...htmlNodeDimensions };
        return resultingHtmlNodeDimensions;
    }
    // getJsOrCssSizeValue method
    // # Why this method needed:
    // all js tools need exact sizes values for precise rendering.
    // when a js tool is built,
    // a js dev still can set another size value via a css variable in a .css theme file,
    // no rebuild is needed.
    // however, when importing a .css theme file in a .ts file via import "theme.css",
    // containing, too, webpack compatible url('@alias/ for webpack bundle.js,
    // the theme files can not be changed, since harcoded into bundle.js by webpack rules.
    // along with the built bundle.js file in a .html doc via <script src="bundle.js">,
    // in order to change a size via css, another theme .css file has to be used in a .html doc via <link rel="stylesheet" href="theme-css-variables-file.css">
    //
    // # This methods rules:
    // if a css variable in the theme .css file has value undefined,
    // like this: --tooltip_arrow__size: undefined;
    // then the size, set via a js method will be used.
    // some css values are already set in TooltipConstants.Defaults.
    // these values will apply, too, when css variable value =undefined;
    // when a css variable value is set zero,
    // like this: --tooltip_arrow__size: 0;
    // then the zero size will apply to a js tool size.
    getJsOrCssSizeValue(htmlNode, cssVariableName, jsObject, jsPropNameSize, jsPropNameDim) {
        if (!htmlNode) {
            throw new Error("the first input arg htmlNode has no HTMLElement value");
        }
        const CSS_VARIABLE_VALUE_OVERRIDABLE = "undefined";
        let jsPropSize = jsObject[jsPropNameSize];
        // numeric value, if set, and the default value can be set in constructor()
        let jsPropSizeUnit = jsObject[jsPropNameDim];
        // px, % or rem
        let cssVariableSizeValue = "";
        let pixelSize = 0;
        // the css value, obtined by browser' css processing rules,
        // applied to the html node and the theme .css file and theme css className.
        cssVariableSizeValue = this.getCssVariableForNode(htmlNode, cssVariableName);
        // this if statement block is to use the js object size values,
        // since the css variable ws set reserved value "undefined".
        // then we can override the css variable value,
        // and use the size value, stored in jsObject props.
        if (cssVariableSizeValue === CSS_VARIABLE_VALUE_OVERRIDABLE) {
            // no need to process units names, like px, rem or %.
            // the return value will be the same, zero(0)
            if (jsPropSize === 0) {
                pixelSize = 0;
            }
            else {
                // processing size by units names, like px, rem or %.
                // and converting to pixel value of datatype int 32 bits.
                pixelSize = this.translateToPixelValue(jsPropSize, jsPropSizeUnit);
            }
        }
        // in this if statement block, the css textual value for a size will be used,
        // like this: "0.6rem"
        else {
            // no need to process units names, like px, rem or %.
            // the return value will be the same, zero(0)
            if (+cssVariableSizeValue === 0) {
                pixelSize = 0;
            }
            else {
                // processing size by units names, like px, rem or %.
                // and converting to pixel value of datatype int 32 bits.
                // this method is a little heavier, than .translateToPixelValue(),
                // called above, since parses css size value {Number}{Unit},
                // like this: "0.6rem",
                // however the result is the same.
                pixelSize = this.translateCssDimToPixelValue(cssVariableSizeValue);
            }
        }
        return pixelSize;
    }
    translateToPixelValue(sizeNumeric, sizeUnit) {
        let pixelValue = 0;
        // this method throws Error if the css dimension is not supported. Supported are px, % and rem.
        this.validateCssSizeDim(sizeUnit);
        if (sizeUnit == TooltipConstants.CssSizeDim.PIXELS) {
            pixelValue = sizeNumeric;
        }
        else if (sizeUnit == TooltipConstants.CssSizeDim.REM) {
            const remRelativePixelValue = this.getRemRelativePixelValue();
            pixelValue = (sizeNumeric * remRelativePixelValue);
        }
        return pixelValue;
    }
    translateCssDimToPixelValue(sizeCssValue) {
        let pixelValue = 0;
        const sizeNumeric = parseFloat(sizeCssValue);
        const sizeNumericAsText = `${sizeNumeric}`;
        const sizeUnit = sizeCssValue.substring(sizeNumericAsText.length);
        pixelValue = this.translateToPixelValue(sizeNumeric, sizeUnit);
        return pixelValue;
    }
    getRemRelativePixelValue() {
        const HtmlTagNameRemRule = "HTML";
        const CssRemRuleName = "font-size";
        const htmlNodeHtml = document.getElementsByTagName(HtmlTagNameRemRule)[0];
        const fontSize = window.getComputedStyle(htmlNodeHtml).getPropertyValue(CssRemRuleName);
        const remRelativePixelValue = Math.floor(parseFloat(fontSize));
        return remRelativePixelValue;
    }
    validateCssSizeDim(cssSizeDimInputArg) {
        let isValid = 0;
        // arrow size dim text value validation code block
        let arrowSizeDimMatched = 0;
        const sizeDimSupported = TooltipConstants.CssSizeDim;
        for (let sizeDimKey in sizeDimSupported) {
            const sizeDim = sizeDimSupported[sizeDimKey];
            arrowSizeDimMatched = (cssSizeDimInputArg == sizeDim) ? 1 : 0;
            if (arrowSizeDimMatched === 1) {
                break;
            }
        }
        if (arrowSizeDimMatched === 0) {
            const sizeDimsSupported = Object.keys(TooltipConstants.CssSizeDim).join(", ");
            throw new Error(`Arrow Size dim ${cssSizeDimInputArg} not supported, supported are: (${sizeDimsSupported})`);
        }
        return isValid;
    }
    getCssVariableForNode(htmlNode, cssVariableName) {
        if (!htmlNode) {
            throw new Error("htmlNode is null or undefined");
        }
        return window
            .getComputedStyle(htmlNode)
            .getPropertyValue(cssVariableName);
    }
    getScrollableHolderNodes(eventTarget) {
        const scrollableHolderNodes = [];
        let node = eventTarget;
        const cssPropsOverflowArray = [
            "overflow",
            "overflow-x",
            "overflow-y"
        ];
        let cssPropOverflow = "";
        let overflowValue = "";
        while (node) {
            for (cssPropOverflow of cssPropsOverflowArray) {
                //@ts-ignore
                overflowValue = this.getCssVariableForNode(node, cssPropOverflow);
                if (!overflowValue) {
                    continue;
                }
                if ((overflowValue === "auto")
                    || (overflowValue === "scroll")) {
                    //@ts-ignore
                    scrollableHolderNodes.push({
                        "node": node,
                        "scrollTop": node.scrollTop,
                        "scrollLeft": node.scrollLeft
                    });
                    break;
                }
            }
            //@ts-ignore
            node = node.parentElement;
            if (!node) {
                break;
            }
        }
        return scrollableHolderNodes;
    }
}
//# sourceMappingURL=TooltipLib.js.map