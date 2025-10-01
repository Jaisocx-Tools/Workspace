class ExampleTemplateRenderer {
    TemplateRenderer;
    holderHtmlNodeSelector;
    data;
    template;



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
        const eventHandler1 = (_eventName, payload) => {
            payload.html = payload.html.replaceAll("<", "&lt;");
            const eventHandlerReturnValue = new class {
                payloadReturned = payload;
                value = "";
            }();


            return eventHandlerReturnValue;
        };
        this.TemplateRenderer.addThisClassEventListener(
            this.TemplateRenderer.EVENT_NAME__AFTER_RENDER,
            eventHandler1
        );
        const eventHandler2 = (_eventName, payload) => {
            payload.html = payload.html.replaceAll(">", "&gt;");
            const eventHandlerReturnValue = new class {
                payloadReturned = payload;
                value = "";
            }();


            return eventHandlerReturnValue;
        };
        this.TemplateRenderer.addThisClassEventListener(
            this.TemplateRenderer.EVENT_NAME__AFTER_RENDER,
            eventHandler2
        );
        const html = this.TemplateRenderer.render();
        holderHtmlNode.insertAdjacentHTML("afterbegin", html);
    }
}


