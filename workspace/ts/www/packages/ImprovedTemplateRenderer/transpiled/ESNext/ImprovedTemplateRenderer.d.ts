import { EventEmitter } from "@jaisocx/event-emitter";
import { CharcodeConverter } from "@jaisocx/charcode-converter";
import { DataConf } from "./types/DataConf.js";
import { TemplateParser } from "./lib/TemplateParser.js";
export declare class ImprovedTemplateRenderer extends EventEmitter {
    EVENT_NAME__AFTER_RENDER: any;
    protected _templatesObject: any;
    protected _templatesConf: any;
    protected _dataConf: any[];
    protected _preparedTemplatesObject: any;
    protected _renderedTemplatesTemporaryArray: any;
    protected _renderedHtmlArray: string[];
    protected _renderedHtml: string;
    protected _sumTemplatesSizes: number;
    protected templateParser: TemplateParser;
    protected charcodeConverter: CharcodeConverter;
    constructor();
    setDebug(debug: boolean): ImprovedTemplateRenderer;
    setTemplatesObject(templates: any): ImprovedTemplateRenderer;
    setTemplateConf(templatesConf: any): ImprovedTemplateRenderer;
    setDataConf(dataConf: any[]): ImprovedTemplateRenderer;
    render(inoutobj: any, mainTemplateConfigTag: string): any;
    getDataconfByTemplateName(templateName: string): DataConf;
    getOrderedTemplatesNames(): string[];
    prepareTemplates(): undefined;
    templatesConfigTreeWalk(mainTemplateConfigTag: string): any;
    getFieldValue(dataElem: any): any;
}
//# sourceMappingURL=ImprovedTemplateRenderer.d.ts.map