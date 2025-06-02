"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleTooltip = void 0;
const tooltip_1 = require("@jaisocx/tooltip");
class ExampleTooltip {
    addTooltip(eventTargetId, themeName, tooltipText) {
        const tooltip = new tooltip_1.Tooltip();
        tooltip
            .setDebug(true)
            .setEventTargetHtmlNodeId(eventTargetId)
            .setCssClasses(themeName)
            .setTemplateData({
            "html": tooltipText
        })
            .setAlignDimensionOneValueOrder([
            //Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP,
            tooltip_1.Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT,
            tooltip_1.Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP,
            tooltip_1.Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT,
            tooltip_1.Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM
        ])
            //.setTooltipAlignDimensionTwo(Constants.AlignDimensionTwo.EVENT_TARGET_MID)
            .setTooltipAlignDimensionTwo(tooltip_1.Constants.AlignDimensionTwo.EVENT_TARGET_START)
            .setTooltipPaddingAlignDimensionTwo(0, tooltip_1.Constants.CssSizeDim.PIXELS)
            .render();
    }
}
exports.ExampleTooltip = ExampleTooltip;
//# sourceMappingURL=ExampleTooltip.js.map