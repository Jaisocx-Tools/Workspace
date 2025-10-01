import { TemplateRenderer } from "@jaisocx/template-renderer";
import { EventHandlerReturnValue } from "@jaisocx/event-emitter";



export class ExampleTemplateRenderer {
  TemplateRenderer: TemplateRenderer;

  holderHtmlNodeSelector: any|null;

  data: object;

  template: any;



  constructor() {
    this.data = {
      message: "Hello World!"
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

    const eventHandler1: any = ( _eventName: any, payload: any ) => {
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

    const eventHandler2: any = ( _eventName: any, payload: any ) => {
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


