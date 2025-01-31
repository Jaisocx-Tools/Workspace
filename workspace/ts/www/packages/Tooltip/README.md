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
10. Showing/Hiding feature: Constant default css transition, Constant default css transition property to hide, object css rule name: css rule value, e.g. 0
17. setEventTargetSelector ( cssSelector: any ) 
18. the basic show()/hide() oneliner methods to define from the the .hide__  and .showTooltip() methods
props:

css theme variable for the transition.
css prop name used to show/hide 
css prop values for show/hide
the set of these css props, used the right way, e.g. top and left and the transition variable name

The .ts class to typehint:

{
  "movingFromTheBrowserTab": {
    "show": {
      "top": "Tooltip Class prop name placeholder",
      "left": "",
      "cssVariable": "--tooltip_transition_show"
    },
    "hide": {
      "top": -1200,
      "left": 10_000,
      "cssVariable": "--tooltip_transition_hide"
    }
  },
  "fading": {
    "show": {
      "opacity": 1,
      "display": "block",
      "cssVariable": "--tooltip_transition_show"
    },
    "hide": {
      "opacity": 0,
      "display": "none",
      "cssVariable": "--tooltip_transition_hide"
    }
  }
}


## Hiding a tooltip and other tooltips, when available on the site:











## HELLO WORLD

GOOD LUCK AND HAVE FUN WITH CODING ))


Yours [jaisocx.com](https://jaisocx.com/) Software Architect and Dev,

Elias






