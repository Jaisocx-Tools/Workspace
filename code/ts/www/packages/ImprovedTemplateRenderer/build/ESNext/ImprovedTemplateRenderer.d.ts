import { EventEmitter } from "@jaisocx/event-emitter";
export declare class ImprovedTemplateRenderer extends EventEmitter {
    EVENT_NAME__AFTER_RENDER: any;
    data: object;
    template: any;
    templatesObject: any;
    templatesConf: any;
    templatesDataArray: any[];
    nestedTemplatesDataPointersArrays: any;
    constructor();
    setDebug(debug: boolean): ImprovedTemplateRenderer;
    setData(data: object): ImprovedTemplateRenderer;
    setTemplate(template: any): ImprovedTemplateRenderer;
    setTemplatesObject(templates: any): ImprovedTemplateRenderer;
}
//# sourceMappingURL=ImprovedTemplateRenderer.d.ts.map