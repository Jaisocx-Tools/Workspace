# JS PACKAGE jaisocx/tooltip

[https://sandbox.brightday.email/ExampleSimple_Tooltip.html](https://sandbox.brightday.email/ExampleSimple_Tooltip.html)


[https://github.com/Jaisocx-Tools/Workspace](https://github.com/Jaisocx-Tools/Workspace)

## Status:
All basic features are ready.
26th of March 2025: bugfix paddingEventTarget set


## What is this
this is the site ui tool, this is shown or hidden on a click on some another html node on the site.



## How to use in js code

### .html example with webpack build bundle.js
```
<html>
  <head>
    <title>Tooltip Example</title>

    <script src="webpack_builds/ExampleTooltip/transpiled/webpack/bundle.js"></script>

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
      .setEventTargetHtmlNodeId ( eventTargetId )
      .setCssClasses ( themeName )
      .setHtml( tooltipText )
      .render ();
  }
}

```

### .ts #2
```


```


## Future improvals:
. shadow basic theme example
. refining behaviour onscroll and on window resize, when a tooltip is drawn beyond the window border.  


## Hiding a tooltip and other tooltips, when available on the site:







## HELLO WORLD

GOOD LUCK AND HAVE FUN WITH CODING ))


Yours [jaisocx.com](https://jaisocx.com/) Software Architect and Dev,

Elias






