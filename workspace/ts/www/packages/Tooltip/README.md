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


```


## Future improvals:
TODO:
default hide show class names set.
with unique one-time postfix

2 set methods required: html and is or selector of the eventTarget

docs
npm publish.





. shadow basic theme example


## Hiding a tooltip and other tooltips, when available on the site:







## HELLO WORLD

GOOD LUCK AND HAVE FUN WITH CODING ))


Yours [jaisocx.com](https://jaisocx.com/) Software Architect and Dev,

Elias






