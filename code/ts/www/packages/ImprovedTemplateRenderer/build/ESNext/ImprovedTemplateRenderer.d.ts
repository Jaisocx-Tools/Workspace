import { EventEmitter } from "@jaisocx/event-emitter";
export declare class ImprovedTemplateRenderer extends EventEmitter {
    EVENT_NAME__AFTER_RENDER: any;
    templatesObject: any;
    templatesConf: any;
    dataConf: any[];
    data: any;
    isStandardCallback: number;
    constructor();
    setDebug(debug: boolean): ImprovedTemplateRenderer;
    setTemplatesObject(templates: any): ImprovedTemplateRenderer;
    setTemplatesConf(data: object): ImprovedTemplateRenderer;
    setDataConf(data: object): ImprovedTemplateRenderer;
    setData(data: object): ImprovedTemplateRenderer;
    render(): any;
}
//# sourceMappingURL=ImprovedTemplateRenderer.d.ts.map