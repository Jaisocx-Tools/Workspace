# JS PACKAGE jaisocx/tooltip

## Status:
Under construction

## What is this



## How to use in js code

### .html example with webpack build bundle.js
```
<html>
  <head>
    <title>Tooltip Example</title>

    <script src="examples/ExampleTooltip/build/webpack/bundle.js"></script>

  </head>
  <body>

    <h1>Tooltip Example</h1>

    <button id="tooltip-show-button">Button</button>

    <script>
      document.addEventListener('DOMContentLoaded', () => {

        const example = new ExampleTooltip();
        example.addTooltip (
          "tooltip-show-button",
          "theme-darkmode",
          "Hello World!"
        );

      });
    </script>
  </body>
</html>

```

### .ts
```
import { Tooltip, Constants } from "@jaisocx/tooltip";

export class ExampleTooltip {

  addTooltip (
    eventTargetId: any,
    themeName: any,
    tooltipText: any // TODO
  ): void {

    const tooltip = new Tooltip();

    tooltip
      .setDebug ( true )
      .setEventTargetHtmlNodeId ( eventTargetId )
      .setCssClasses ( `tooltip ${themeName}` )
      .render ();
  }
}

```

### .ts #2
```
import { Tooltip, Constants } from "@jaisocx/tooltip";

export class ExampleTooltip {

  addTooltip (
    eventTargetId: any,
    themeName: any,
    tooltipText: any
  ): void {

    const tooltip = new Tooltip();

    tooltip
      .setDebug(true)
      .setEventTargetHtmlNodeId( eventTargetId )
      .setCssClasses(`tooltip ${themeName}`)
      //.setTooltipAlignDimensionOne(Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP)
      .setTooltipAlignDimensionOne(Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT)
      //.setTooltipAlignDimensionOne(Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT)
      //.setTooltipAlignDimensionOne(Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM)
      .setAlternativeTabBorderSides(
        [
          Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP,
          Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT,
          Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT,
          Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM,
        ]
      )
      .setTooltipAlignDimensionTwo(Constants.AlignDimensionTwo.EVENT_TARGET_START)
      .setTooltipPaddingAlignDimensionTwo (
        10,
        Constants.CssSizeDim.PERCENTAGE
      )
      .render();
  }
}

```



## HELLO WORLD

GOOD LUCK AND HAVE FUN WITH CODING ))


Yours [jaisocx.com](https://jaisocx.com/) Software Architect and Dev,

Elias






