import { EventEmitter } from "@jaisocx/event-emitter";
import { BaseParser } from "@jaisocx/css-importer";
type TemplateRendererDataRecord = {
    id: number;
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
    protected getActiveDataRecord(): TemplateRendererDataRecord;
    getActiveDataRecordId(): number;
    getDataRecordById(id: number): TemplateRendererDataRecord;
    setActiveRecordId(id: number): TemplateRendererDataRecord;
    addNewDataRecord(): TemplateRendererDataRecord;
    setDebug(debug: boolean): TemplateRenderer;
    setTemplate(template: string): TemplateRenderer;
    setData(dataForRendering: object): TemplateRenderer;
    render(): any;
    replaceTemplateRendererWithDataForRendering(): any;
    renderOptimizedToStringDataText(templateDataRecordId: number, dataForRendering: any): string;
    renderOptimizedToStringDataBitsbufs(templateDataRecordId: number, dataForRendering: any): string;
    renderOptimizedTextBlocks(templateDataRecordId: number, dataForRendering: any): string[];
    renderOptimizedDataBitsbufs(templateDataRecordId: number, dataForRendering: any): Uint8Array[];
    optimize(templateDataRecordId: number): number;
    protected orderedRecords(inRecords: OptimizedTemplateRecord[]): OptimizedTemplateRecord[];
}
export {};
//# sourceMappingURL=TemplateRenderer.d.ts.map