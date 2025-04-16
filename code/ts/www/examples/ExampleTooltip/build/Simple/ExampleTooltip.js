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
        "html": tooltipText
      })
      .setAlignDimensionOneValueOrder([
        //Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP,
        Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT,
        Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP,
        Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT,
        Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM
      ])
    //.setTooltipAlignDimensionTwo(Constants.AlignDimensionTwo.EVENT_TARGET_MID)
      .setTooltipAlignDimensionTwo(Constants.AlignDimensionTwo.EVENT_TARGET_START)
      .setTooltipPaddingAlignDimensionTwo(
        0, 
        Constants.CssSizeDim.PIXELS)
      .render();
  }
} 


