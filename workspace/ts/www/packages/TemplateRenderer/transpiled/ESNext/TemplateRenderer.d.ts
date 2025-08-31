import { TextEncoder, TextDecoder } from "node:util";
import { EventEmitter } from "@jaisocx/event-emitter";
import { TokensParser } from "@jaisocx/tokens-parser";
import { OptimizedTemplateRecord, TemplateRendererDataRecord } from "./types/TemplateRendererTypes.js";
import { TemplateRendererInterface } from "./TemplateRendererInterface.js";
export declare class TemplateRenderer extends EventEmitter implements TemplateRendererInterface {
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
    setDebug(debug: boolean): TemplateRendererInterface;
    setTemplate(template: string): TemplateRendererInterface;
    setData(dataForRendering: object): TemplateRendererInterface;
    render(): any;
    renderOptimizedDataBitsbufs(templateDataRecordId: number, dataForRendering: any): Uint8Array[];
    renderOptimizedToStringDataText(templateDataRecordId: number, dataForRendering: any): string;
    renderOptimizedToStringDataBitsbufs(templateDataRecordId: number, dataForRendering: any): string;
    renderOptimizedTextBlocks(templateDataRecordId: number, dataForRendering: any): string[];
    optimize(templateDataRecordId: number): number;
    orderedRecords(inRecords: OptimizedTemplateRecord[]): OptimizedTemplateRecord[];
    replaceTemplateRendererWithDataForRendering(): any;
}
//# sourceMappingURL=TemplateRenderer.d.ts.map