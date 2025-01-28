class ExampleTooltip {
  addTooltip(
    eventTargetId, 
    themeName, 
    tooltipText) {
    const tooltip = new Tooltip();
    tooltip
      .setDebug(true)
      .setEventTargetHtmlNodeId(eventTargetId)
      .setCssClasses(themeName)
      .setTemplateData({
        "text": tooltipText,
      })
      .setAlignDimensionOneValueOrder([
        //Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP,
        Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT,
        Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP,
        Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT,
        Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM,
      ])
      .setTooltipAlignDimensionTwo(Constants.AlignDimensionTwo.EVENT_TARGET_MID)
    //.setTooltipAlignDimensionTwo(Constants.AlignDimensionTwo.EVENT_TARGET_START)
    // .setTooltipPaddingAlignDimensionTwo (
    //   20,
    //   Constants.CssSizeDim.PIXELS
    // )
      .render();
  }
}
//# sourceMappingURL=ExampleTooltip.js.map