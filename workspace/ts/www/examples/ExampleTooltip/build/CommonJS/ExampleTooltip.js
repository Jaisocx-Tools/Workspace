"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleTooltip = void 0;
const tooltip_1 = require("@jaisocx/tooltip");
class ExampleTooltip {
    addTooltip(eventTargetId, themeName, tooltipText) {
        const tooltip = new tooltip_1.Tooltip();
        tooltip.mainHtmlNodeId = "tooltip";
        tooltip
            .setDebug(true)
            .setEventTargetHtmlNodeId(eventTargetId)
            .setCssClasses(`tooltip ${themeName}`)
            //.setTooltipAlignDimensionOne(Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP)
            .setTooltipAlignDimensionOne(tooltip_1.Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT)
            //.setTooltipAlignDimensionOne(Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT)
            //.setTooltipAlignDimensionOne(Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM)
            .setAlternativeTabBorderSides([
            tooltip_1.Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP,
            tooltip_1.Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT,
            tooltip_1.Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT,
            tooltip_1.Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM,
        ])
            .setTooltipAlignDimensionTwo(tooltip_1.Constants.AlignDimensionTwo.EVENT_TARGET_START)
            .setTooltipPaddingAlignDimensionTwo(10, tooltip_1.Constants.CssPaddingUnits.PERCENTAGE)
            .setTemplate(tooltip_1.Constants.Defaults.template)
            .setTemplateData({
            "id": tooltip.mainHtmlNodeId,
            "cssClasses": tooltip.cssClasses,
            "text": tooltipText,
        })
            .render();
    }
}
exports.ExampleTooltip = ExampleTooltip;
//# sourceMappingURL=ExampleTooltip.js.map