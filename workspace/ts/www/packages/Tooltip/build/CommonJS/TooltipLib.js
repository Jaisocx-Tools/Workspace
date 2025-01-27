"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooltipLib = void 0;
const Types_js_1 = require("./Types.js");
const Constants_js_1 = require("./Constants.js");
class TooltipLib {
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
    calculateTooltipDimensions(eventTargetHtmlNodeDimensions, tooltipHtmlNodeDimensions, browserTabBorderSide, tooltipAlignDimensionTwo, tooltipPaddingAlignDimensionTwo, tooltipPaddingSizeDimAlignDimensionTwo, arrowPixelSize) {
        const retVal = this.calculateTooltipDimensionTwo(eventTargetHtmlNodeDimensions, tooltipHtmlNodeDimensions, browserTabBorderSide, tooltipAlignDimensionTwo, tooltipPaddingAlignDimensionTwo, tooltipPaddingSizeDimAlignDimensionTwo);
        retVal.width = tooltipHtmlNodeDimensions.width;
        retVal.height = tooltipHtmlNodeDimensions.height;
        if (browserTabBorderSide === Constants_js_1.Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP) {
            retVal.top = eventTargetHtmlNodeDimensions.top
                - tooltipHtmlNodeDimensions.height
                - arrowPixelSize; // TODO - padding DimensionOne
            retVal.left = tooltipHtmlNodeDimensions.left;
        }
        else if (browserTabBorderSide === Constants_js_1.Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT) {
            retVal.top = tooltipHtmlNodeDimensions.top;
            retVal.left = eventTargetHtmlNodeDimensions.left
                + eventTargetHtmlNodeDimensions.width
                + arrowPixelSize; // TODO + padding DimensionOne
        }
        else if (browserTabBorderSide === Constants_js_1.Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT) {
            retVal.top = tooltipHtmlNodeDimensions.top;
            retVal.left = eventTargetHtmlNodeDimensions.left
                - arrowPixelSize
                - tooltipHtmlNodeDimensions.width; // TODO - padding DimensionOne
        }
        else if (browserTabBorderSide === Constants_js_1.Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM) {
            retVal.top = eventTargetHtmlNodeDimensions.bottom
                + arrowPixelSize; // TODO + padding DimensionOne
            retVal.left = tooltipHtmlNodeDimensions.left;
        }
        retVal.right = retVal.left + retVal.width;
        retVal.bottom = retVal.top + retVal.height;
        return retVal;
    }
    calculateTooltipDimensionTwo(eventTargetHtmlNodeDimensions, tooltipHtmlNodeDimensions, browserTabBorderSide, tooltipAlignDimensionTwo, tooltipPaddingAlignDimensionTwo, tooltipPaddingSizeDimAlignDimensionTwo) {
        if ((browserTabBorderSide === Constants_js_1.Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP) ||
            (browserTabBorderSide === Constants_js_1.Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM)) {
            if (tooltipAlignDimensionTwo === Constants_js_1.Constants.AlignDimensionTwo.EVENT_TARGET_START) {
                tooltipHtmlNodeDimensions.left = eventTargetHtmlNodeDimensions.left
                    - tooltipPaddingAlignDimensionTwo;
            }
            else if (tooltipAlignDimensionTwo === Constants_js_1.Constants.AlignDimensionTwo.EVENT_TARGET_MID) {
                const midWidthEventTarget = Math.floor(eventTargetHtmlNodeDimensions.width / 2);
                const midWidthTooltip = Math.floor(tooltipHtmlNodeDimensions.width / 2);
                tooltipHtmlNodeDimensions.left = eventTargetHtmlNodeDimensions.left
                    + midWidthEventTarget
                    - midWidthTooltip
                    + tooltipPaddingAlignDimensionTwo;
            }
            else if (tooltipAlignDimensionTwo === Constants_js_1.Constants.AlignDimensionTwo.EVENT_TARGET_END) {
                tooltipHtmlNodeDimensions.left = eventTargetHtmlNodeDimensions.right
                    - tooltipHtmlNodeDimensions.width
                    + tooltipPaddingAlignDimensionTwo;
            }
        }
        else if ((browserTabBorderSide === Constants_js_1.Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT) ||
            (browserTabBorderSide === Constants_js_1.Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT)) {
            if (tooltipAlignDimensionTwo === Constants_js_1.Constants.AlignDimensionTwo.EVENT_TARGET_START) {
                tooltipHtmlNodeDimensions.top = eventTargetHtmlNodeDimensions.top
                    - tooltipPaddingAlignDimensionTwo;
            }
            else if (tooltipAlignDimensionTwo === Constants_js_1.Constants.AlignDimensionTwo.EVENT_TARGET_MID) {
                const midHeightEventTarget = Math.floor(eventTargetHtmlNodeDimensions.height / 2);
                const midHeightTooltip = Math.floor(tooltipHtmlNodeDimensions.height / 2);
                tooltipHtmlNodeDimensions.top = eventTargetHtmlNodeDimensions.top
                    + midHeightEventTarget
                    - midHeightTooltip
                    + tooltipPaddingAlignDimensionTwo;
            }
            else if (tooltipAlignDimensionTwo === Constants_js_1.Constants.AlignDimensionTwo.EVENT_TARGET_END) {
                tooltipHtmlNodeDimensions.top = eventTargetHtmlNodeDimensions.bottom
                    - tooltipHtmlNodeDimensions.height
                    + tooltipPaddingAlignDimensionTwo;
            }
        }
        return tooltipHtmlNodeDimensions;
    }
    doesTooltipSuitsTilBrowserTabBorder(browserTabDimensions, tooltipHtmlNodeDimensions, browserTabBorderSide, arrowPixelSize) {
        let retVal = 0;
        if (browserTabBorderSide === Constants_js_1.Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP) {
            if ((browserTabDimensions.top < tooltipHtmlNodeDimensions.top) &&
                (browserTabDimensions.left < tooltipHtmlNodeDimensions.left) &&
                (tooltipHtmlNodeDimensions.right < browserTabDimensions.right)) {
                retVal = 1;
            }
        }
        else if (browserTabBorderSide === Constants_js_1.Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT) {
            if ((tooltipHtmlNodeDimensions.right < browserTabDimensions.right)) {
                retVal = 1;
            }
        }
        else if (browserTabBorderSide === Constants_js_1.Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT) {
            if ((browserTabDimensions.left < tooltipHtmlNodeDimensions.left)) {
                retVal = 1;
            }
        }
        else if (browserTabBorderSide === Constants_js_1.Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM) {
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
    calculateTooltipArrowDimensions(eventTargetDimensions, arrowPixelSize, alignDimensionOne) {
        let arrowDimensions = new Types_js_1.Dimensions();
        let arrowSquareSideSize = this.getRectSideSizeByMidTilConerLineSize(arrowPixelSize);
        arrowDimensions.width = arrowSquareSideSize;
        arrowDimensions.height = arrowSquareSideSize;
        if ((alignDimensionOne === Constants_js_1.Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP)) {
            const eventTargetWidthMid = (eventTargetDimensions.width / 2) + eventTargetDimensions.left;
            arrowDimensions.left = eventTargetWidthMid - (arrowSquareSideSize / 2);
            arrowDimensions.top = eventTargetDimensions.top - (arrowPixelSize * 2); //TDOD: - dimensionOnePadding
        }
        else if ((alignDimensionOne === Constants_js_1.Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT)) {
            const eventTargetHeightMid = eventTargetDimensions.top + (eventTargetDimensions.height / 2);
            arrowDimensions.top = eventTargetHeightMid - arrowPixelSize;
            arrowDimensions.left = eventTargetDimensions.right + (arrowSquareSideSize - arrowPixelSize); //TDOD: + dimensionOnePadding
        }
        else if ((alignDimensionOne === Constants_js_1.Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT)) {
            const eventTargetHeightMid = eventTargetDimensions.top + (eventTargetDimensions.height / 2);
            arrowDimensions.top = eventTargetHeightMid - arrowPixelSize;
            arrowDimensions.left = eventTargetDimensions.left - (arrowPixelSize * 2); //TDOD: - dimensionOnePadding
        }
        else if ((alignDimensionOne === Constants_js_1.Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM)) {
            const eventTargetWidthMid = (eventTargetDimensions.width / 2) + eventTargetDimensions.left;
            arrowDimensions.left = eventTargetWidthMid - (arrowSquareSideSize / 2);
            arrowDimensions.top = eventTargetDimensions.bottom + (arrowSquareSideSize - arrowPixelSize); //TDOD: + dimensionOnePadding
        }
        //arrowDimensions.right = arrowDimensions.left + arrowDimensions.width; encommented, since not clear, whether translateX is doint what with top and left css rules, and right and bottom then?
        //arrowDimensions.bottom = arrowDimensions.top - arrowDimensions.height; 
        return arrowDimensions;
    }
    getBrowserTabDimensions() {
        const zero = 0;
        const htmlNodeHtml = document.getElementsByTagName("HTML")[0];
        let browserTabDimensions = this.getHtmlNodeDimensions(htmlNodeHtml);
        return browserTabDimensions;
    }
    getHtmlNodeDimensions(htmlNode) {
        let dimensions = new Types_js_1.Dimensions();
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
    translateToPixelValue(sizeNumeric, sizeUnit) {
        let pixelValue = 0;
        // this method throws Error if the css dimension is not supported. Supported are px, % and rem.
        this.validateCssSizeDim(sizeUnit);
        if (sizeUnit == Constants_js_1.Constants.CssSizeDim.PX) {
            pixelValue = sizeNumeric;
        }
        else if (sizeUnit == Constants_js_1.Constants.CssSizeDim.REM) {
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
        const sizeDimSupported = Constants_js_1.Constants.CssSizeDim;
        for (let sizeDimKey in sizeDimSupported) {
            const sizeDim = sizeDimSupported[sizeDimKey];
            arrowSizeDimMatched = (cssSizeDimInputArg == sizeDim) ? 1 : 0;
            if (arrowSizeDimMatched === 1) {
                break;
            }
        }
        if (arrowSizeDimMatched === 0) {
            const sizeDimsSupported = Object.keys(Constants_js_1.Constants.CssSizeDim).join(", ");
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
}
exports.TooltipLib = TooltipLib;
//# sourceMappingURL=TooltipLib.js.map