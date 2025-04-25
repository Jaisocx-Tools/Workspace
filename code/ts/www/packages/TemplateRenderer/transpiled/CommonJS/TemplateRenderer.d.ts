import { EventEmitter } from "@jaisocx/event-emitter";
import { BaseParser } from "@jaisocx/css-importer";
type TemplateRendererDataRecord = {
    id: number;
    isOptimized: boolean;
    textTemplate: string;
    dataForRendering: object;
    bitsbufTemplate: Uint8Array;
    optimizedBitsbufTemplate: Uint8Array[];
    optimizedPlaceholdersEntries: any;
    optimizedTemplate: OptimizedTemplateRecord[];
};
type OptimizedTemplateRecord = {
    placeholderName: string;
    range: number[];
};
export declare class TemplateRenderer extends EventEmitter {
    #private;
    EVENT_NAME__AFTER_RENDER: any;
    baseParser: BaseParser;
    dataRecords: TemplateRendererDataRecord[];
    constructor();
    initDataRecord(): TemplateRendererDataRecord;
    addNewDataRecord(): TemplateRendererDataRecord;
    getActiveDataRecord(): TemplateRendererDataRecord;
    getActiveDataRecordId(): number;
    getDataRecordById(id: number): TemplateRendererDataRecord;
    setActiveRecordId(id: number): TemplateRendererDataRecord;
    setActiveDataRecord(dataRecord: TemplateRendererDataRecord): number;
    setDebug(debug: boolean): TemplateRenderer;
    setTemplate(template: string): TemplateRenderer;
    setData(dataForRendering: object): TemplateRenderer;
    render(): any;
    renderOptimizedDataBitsbufs(templateDataRecordId: number, dataForRendering: any): Uint8Array[];
    renderOptimizedToStringDataText(templateDataRecordId: number, dataForRendering: any): string;
    renderOptimizedToStringDataBitsbufs(templateDataRecordId: number, dataForRendering: any): string;
    renderOptimizedTextBlocks(templateDataRecordId: number, dataForRendering: any): string[];
    optimize(templateDataRecordId: number): number;
    protected orderedRecords(inRecords: OptimizedTemplateRecord[]): OptimizedTemplateRecord[];
    replaceTemplateRendererWithDataForRendering(): any;
}
export {};
//# sourceMappingURL=TemplateRenderer.d.ts.map