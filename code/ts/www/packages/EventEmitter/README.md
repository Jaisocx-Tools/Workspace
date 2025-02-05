# JS PACKAGE jaisocx/event-emitter


[https://github.com/Jaisocx-Tools/Workspace](https://github.com/Jaisocx-Tools/Workspace)

## How to use in ts code

## To emit an event:
### Emit an event somewhere in code, in order to forecast possible additional callbacks at that code line.

```
import { EventEmitter, EventEmitResult, EventHandlerReturnValue } from "@jaisocx/event-emitter";

export class SomeClass extends EventEmitter {
  EVENT_NAME__AFTER_SOMESUBCALL: any;

  constructor() {
    super();

    this.EVENT_NAME__AFTER_SOMESUBCALL = "afterSomeSubcall";
  }

  doSomething(): void {
    this.someSubcall();

    const payload: any = "Hallo";
    this.emitEvent (
      this.EVENT_NAME__AFTER_SOMESUBCALL,
      payload
    );
  }
```


### Emit an event with option to pass the next event handler the processed payload from the previous event handler.

```
// example code from class TemplateRenderer

  render(): any {
    let renderedHtml = this.replaceTemplateRendererWithDataForRendering(
      this.template,
      this.data
    );

    if (this.debug) {
      console.log(
        "renderedHtml before afterRender event emitted",
        renderedHtml
      );
    }

    const eventResult: EventEmitResult[] = this.emitEvent (
      this.EVENT_NAME__AFTER_RENDER,
      {
        html: renderedHtml,
        data: this.data,
      }
    );

    if (eventResult.length > 0) {
      const last: number = eventResult.length - 1;

      let payloadReturned: any = null;
      for ( let eventResultsStep = last; eventResultsStep > (-1); eventResultsStep-- ) {
        try {
          // @ts-ignore
          payloadReturned = eventResult[eventResultsStep].result.payloadReturned; 
        } catch (e) {}
        
        if ( !payloadReturned ) {
          continue;
        }

        renderedHtml = payloadReturned.html;
      }

      if (this.debug) {
        console.log(
          "renderedHtml before afterRender event emitted",
          eventResult,
          renderedHtml
        );
      }
    } else if (this.debug) {
      console.log("afterRender event did not change html");
    }
    
    return renderedHtml;
  }
```


## To add an eventHandler to a class instance, the eventHandler will be called where the event with this name was emitted in this class code.
```
    const eventHandler1: any = ( eventName: any, payload: any ) => {
      payload.html = payload.html.replaceAll (
        "<", 
        "&lt;");
  
      const eventHandlerReturnValue: EventHandlerReturnValue = new class implements EventHandlerReturnValue {
        payloadReturned: any = payload;
        value: any = "";
      }();
  
      return eventHandlerReturnValue;
    };
  
    templateRenderer.addThisClassEventListener (
      this.TemplateRenderer.EVENT_NAME__AFTER_RENDER,
      eventHandler1
    );

```


## What is this

The classes to extend in Your other classes, so that the new classes can have an improved way to emit events,
and at the classes instances one can add an event handler.



## For what to use

1. When You have developed a Typescript class, and can foresee, that on some code pont there can be an additional method subcall,
You can emit an event there. When some event handler will be set, it will be invoked at the code point where code line resides .emtEvent().
2. When a site ui tool was rendered by a big size json data, this tool will have many DOM Event Handlers set. The ImprovedRenderEventEmitter does this amount of similar DOM events to one, and, therefore, improves resources usage.



## HELLO WORLD MESSAGE:

GOOD LUCK AND HAVE FUN WITH CODING ))


Yours [jaisocx.com](https://jaisocx.com/) Software Architect and Dev,

Elias






