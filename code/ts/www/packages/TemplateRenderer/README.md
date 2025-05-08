# JS PACKAGE jaisocx/template-renderer


[https://github.com/Jaisocx-Tools/Workspace](https://github.com/Jaisocx-Tools/Workspace)

## How to use in ts code

```
import { TemplateRenderer } from "@jaisocx/template-renderer";
import { EventHandlerReturnValue } from "@jaisocx/event-emitter";

export class ExampleTemplateRenderer {
  TemplateRenderer: TemplateRenderer;

  holderHtmlNodeSelector: any|null;

  data: object;

  template: any;

  constructor() {
    this.data = {
      message: "Hello World!",
    };
    this.template = `
<h3>{{ message }}</h3>      
      `;

    this.TemplateRenderer = new TemplateRenderer();
    this.holderHtmlNodeSelector = null;
  }

  run(): void {
    let holderHtmlNode: HTMLElement|null = null;
    if (!this.holderHtmlNodeSelector) {
      this.holderHtmlNodeSelector = "body";
    }
    holderHtmlNode = document.querySelector(this.holderHtmlNodeSelector);
    if (!holderHtmlNode) {
      return;
    }

    this.TemplateRenderer
      .setTemplate(this.template)
      .setData(this.data);

    const eventHandler1: any = ( eventName: any, payload: any ) => {
      payload.html = payload.html.replaceAll(
        "<", 
        "&lt;");
  
      const eventHandlerReturnValue: EventHandlerReturnValue = new class implements EventHandlerReturnValue {
        payloadReturned: any = payload;
        value: any = "";
      }();
  
      return eventHandlerReturnValue;
    };
  
    this.TemplateRenderer.addThisClassEventListener (
      this.TemplateRenderer.EVENT_NAME__AFTER_RENDER,
      eventHandler1
    );

    const eventHandler2: any = ( eventName: any, payload: any ) => {
      payload.html = payload.html.replaceAll(
        ">", 
        "&gt;");

      const eventHandlerReturnValue: EventHandlerReturnValue = new class implements EventHandlerReturnValue {
        payloadReturned: any = payload;
        value: any = "";
      }();

      return eventHandlerReturnValue;
    };

    this.TemplateRenderer.addThisClassEventListener (
      this.TemplateRenderer.EVENT_NAME__AFTER_RENDER,
      eventHandler2
    );

    const html = this.TemplateRenderer.render();

    holderHtmlNode.insertAdjacentHTML (
      "afterbegin",
      html
    );

  }
}

```

index.html

```
<html>
  <head>
    <title>TemplateRenderer Example</title>
  </head>
  <body>

    <script src="packages/EventEmitter/transpiled/Simple/EventEmitter.js"></script>
    <script src="packages/TemplateRenderer/transpiled/Simple/TemplateRenderer.js"></script>
  
    <script src="webpack_builds/ExampleTemplateRenderer/transpiled/Simple/ExampleTemplateRenderer.js"></script>
    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const example = new ExampleTemplateRenderer();
        example.run();
      });
    </script>
  </body>
</html>
```


## What is this

The very lightweight class to populate an html template with values from a js object or json.

The template has just one placeholder available, like this: `{{ someValueFromJson }}`.

e.g.:
```
const data: any = {
  "message": "Hello World!"
}

const template: any = "<h3>{{ message }}</h3>";

const templateRenderer: TemplateRenderer = new TemplateRenderer();
const html: any = templateRenderer
  .setTemplate(template)
  .setData(data)
  .render();

```



## HELLO WORLD MESSAGE:

GOOD LUCK AND HAVE FUN WITH CODING ))


Yours [jaisocx.com](https://jaisocx.com/) Software Architect and Dev,

Elias






