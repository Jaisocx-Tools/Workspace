import { TextEncoder, TextDecoder } from "node:util";
import { EventEmitter } from "@jaisocx/event-emitter";
import { TokensParser } from "@jaisocx/tokens-parser";
export type TemplateRendererDataRecord = {
    id: number;
    isOptimized: boolean;
    textTemplate: string;
    dataForRendering: object;
    bitsbufTemplate: Uint8Array;
    optimizedBitsbufTemplate: Uint8Array[];
    optimizedPlaceholdersEntries: any;
    optimizedTemplate: OptimizedTemplateRecord[];
};
export type OptimizedTemplateRecord = {
    placeholderName: string;
    range: number[];
};
export declare class TemplateRenderer extends EventEmitter {
    #private;
    EVENT_NAME__AFTER_RENDER: any;
    tokensParser: TokensParser;
    dataRecords: TemplateRendererDataRecord[];
    textEncoder: TextEncoder;
    textDecoder: TextDecoder;
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
//# sourceMappingURL=TemplateRenderer.d.ts.map