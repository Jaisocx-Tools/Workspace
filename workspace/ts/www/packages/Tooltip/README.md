# JS PACKAGE jaisocx/tooltip


[https://github.com/Jaisocx-Tools/Workspace](https://github.com/Jaisocx-Tools/Workspace)

## Status:
Under construction

## What is this
this is the site ui tool, this is shown or hidden on a click on some another html node on the site.



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
      .setCssClasses( themeName )
      .setHtml( tooltipText )
      .setAlignDimensionOneValueOrder (
            [
              Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP,
              Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT,
              Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT,
              Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM,
            ]
      )
      .setTooltipAlignDimensionTwo(Constants.AlignDimensionTwo.EVENT_TARGET_MID)
      //.setTooltipAlignDimensionTwo(Constants.AlignDimensionTwo.EVENT_TARGET_START)
      //.setTooltipAlignDimensionTwo(Constants.AlignDimensionTwo.EVENT_TARGET_END)
      .setTooltipPaddingAlignDimensionTwo (
        0.7,
        Constants.CssSizeDim.REM
      )
      .setArrowSize(0.3)
      .setArrowSizeDim("rem")
      .setIsWithArrow(1)
      .render();
  }
}

```

## Future improvals:
2. Event: the event names, when emitted, the tooltip is shown: method tooltip.setEventsNames(eventsNamesArray)
3. Event: custom event handlers
4. Event: on click outside the tooltip, the tooltip is hidden.
5. Event: on window resize, to recheck the tooltip visibility.
8. idea: declare css vars for @media rules with transparent names, somewhere reusable npm package or similar.



## HELLO WORLD

GOOD LUCK AND HAVE FUN WITH CODING ))


Yours [jaisocx.com](https://jaisocx.com/) Software Architect and Dev,

Elias






