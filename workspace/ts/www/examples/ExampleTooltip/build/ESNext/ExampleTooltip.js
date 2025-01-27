import { Tooltip, Constants } from "@jaisocx/tooltip";
export class ExampleTooltip {
    addTooltip(eventTargetId, themeName, tooltipText) {
        const tooltip = new Tooltip();
        tooltip.mainHtmlNodeId = "tooltip";
        tooltip
            .setDebug(true)
            .setEventTargetHtmlNodeId(eventTargetId)
            .setCssClasses(`tooltip ${themeName}`)
            //.setTooltipAlignDimensionOne(Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP)
            .setTooltipAlignDimensionOne(Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT)
            //.setTooltipAlignDimensionOne(Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT)
            //.setTooltipAlignDimensionOne(Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM)
            .setAlternativeTabBorderSides([
            Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP,
            Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT,
            Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT,
            Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM,
        ])
            .setTooltipAlignDimensionTwo(Constants.AlignDimensionTwo.EVENT_TARGET_START)
            .setTooltipPaddingAlignDimensionTwo(10, Constants.CssPaddingUnits.PERCENTAGE)
            .setTemplate(Constants.Defaults.template)
            .setTemplateData({
            "id": tooltip.mainHtmlNodeId,
            "cssClasses": tooltip.cssClasses,
            "text": tooltipText,
        })
            .render();
    }
}
//# sourceMappingURL=ExampleTooltip.js.map