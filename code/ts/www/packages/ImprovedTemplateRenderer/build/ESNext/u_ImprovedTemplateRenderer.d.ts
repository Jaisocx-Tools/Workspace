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
    prepareTaggedGroupsInfos(): any[];
    matchedTagName(tagToMatch: string, templateConfTags: any): number;
    prepareTaggedNestedSubcallGetInfosOneGroup(holderTemplateIndex: number, tagName: string): any[];
    calculateResultArrayRecursiveNumber(): number;
    renderEarlierVer(): any;
    replaceTemplateRendererWithDataForRendering(template: any, dataForRendering: object): any;
    nestedTemplatesRender(nestedPropName: string, key: any, value: any, recordset: any): any;
    calculateNestedPropsTemplatesDataPointersArray(nestedPropName: string): Uint16Array;
}
//# sourceMappingURL=u_ImprovedTemplateRenderer.d.ts.map