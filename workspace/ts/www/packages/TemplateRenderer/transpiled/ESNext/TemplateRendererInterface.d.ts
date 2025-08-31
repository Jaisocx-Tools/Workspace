import { EventEmitter } from "@jaisocx/event-emitter";
import { OptimizedTemplateRecord, TemplateRendererDataRecord } from "./types/TemplateRendererTypes.js";
export interface TemplateRendererInterface extends EventEmitter {
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
//# sourceMappingURL=TemplateRendererInterface.d.ts.map