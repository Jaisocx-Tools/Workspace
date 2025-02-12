import { EventEmitter } from "@jaisocx/event-emitter";
export declare class ImprovedTemplateRenderer extends EventEmitter {
    EVENT_NAME__AFTER_RENDER: any;
    templatesObject: any;
    templatesConf: any;
    dataConf: any[];
    isStandardCallback: number;
    constructor();
    setDebug(debug: boolean): ImprovedTemplateRenderer;
    setTemplatesObject(templates: any): ImprovedTemplateRenderer;
    setTemplatesConf(templatesConf: any): ImprovedTemplateRenderer;
    setDataConf(dataConf: any[]): ImprovedTemplateRenderer;
    render(inoutobj: any): number;
    workaroundJoin(inoutObj: any): number;
    renderTemplates(): any;
    prepareTemplates(): undefined;
    prepareTaggedGroupsInfos(): any[];
}
//# sourceMappingURL=ImprovedTemplateRenderer.d.ts.map