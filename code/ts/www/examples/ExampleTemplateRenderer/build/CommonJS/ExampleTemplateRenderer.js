"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleTemplateRenderer = void 0;
const template_renderer_1 = require("@jaisocx/template-renderer");
class ExampleTemplateRenderer {
    constructor() {
        this.data = {
            message: "Hello World!"
        };
        this.template = `
<h3>{{ message }}</h3>      
      `;
        this.TemplateRenderer = new template_renderer_1.TemplateRenderer();
        this.holderHtmlNodeSelector = null;
    }
    run() {
        let holderHtmlNode = null;
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
        const eventHandler1 = (eventName, payload) => {
            payload.html = payload.html.replaceAll("<", "&lt;");
            const eventHandlerReturnValue = new class {
                constructor() {
                    this.payloadReturned = payload;
                    this.value = "";
                }
            }();
            return eventHandlerReturnValue;
        };
        this.TemplateRenderer.addThisClassEventListener(this.TemplateRenderer.EVENT_NAME__AFTER_RENDER, eventHandler1);
        const eventHandler2 = (eventName, payload) => {
            payload.html = payload.html.replaceAll(">", "&gt;");
            const eventHandlerReturnValue = new class {
                constructor() {
                    this.payloadReturned = payload;
                    this.value = "";
                }
            }();
            return eventHandlerReturnValue;
        };
        this.TemplateRenderer.addThisClassEventListener(this.TemplateRenderer.EVENT_NAME__AFTER_RENDER, eventHandler2);
        const html = this.TemplateRenderer.render();
        holderHtmlNode.insertAdjacentHTML("afterbegin", html);
    }
}
exports.ExampleTemplateRenderer = ExampleTemplateRenderer;
//# sourceMappingURL=ExampleTemplateRenderer.js.map