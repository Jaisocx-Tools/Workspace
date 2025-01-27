import { EventEmitter } from "@jaisocx/event-emitter";
export declare class TemplateRenderer extends EventEmitter {
    EVENT_NAME__AFTER_RENDER: any;
    data: object;
    template: any;
    constructor();
    setDebug(debug: boolean): TemplateRenderer;
    setData(data: object): TemplateRenderer;
    setTemplate(template: any): TemplateRenderer;
    render(): any;
    replaceTemplateRendererWithDataForRendering(template: any, dataForRendering: object): any;
}
//# sourceMappingURL=TemplateRenderer.d.ts.map