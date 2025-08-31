import { EventEmitter } from "@jaisocx/event-emitter";

import { OptimizedTemplateRecord, TemplateRendererDataRecord } from "./types/TemplateRendererTypes.js";



export interface TemplateRendererInterface extends EventEmitter {

  initDataRecord(): TemplateRendererDataRecord;


  addNewDataRecord(): TemplateRendererDataRecord;


  getActiveDataRecord(): TemplateRendererDataRecord;


  getActiveDataRecordId(): number;


  getDataRecordById( id: number ): TemplateRendererDataRecord;


  setActiveRecordId( id: number ): TemplateRendererDataRecord;


  setActiveDataRecord( dataRecord: TemplateRendererDataRecord ): number;


  setDebug( debug: boolean ): TemplateRendererInterface;


  setTemplate( template: string ): TemplateRendererInterface;


  setData( dataForRendering: object ): TemplateRendererInterface;


  render(): any;


  // the faster method.
  renderOptimizedDataBitsbufs (
    templateDataRecordId: number,
    dataForRendering: any
  ): Uint8Array[];


  renderOptimizedToStringDataText (
    templateDataRecordId: number,
    dataForRendering: any
  ): string;


  renderOptimizedToStringDataBitsbufs (
    templateDataRecordId: number,
    dataForRendering: any
  ): string;


  // the way to improve:
  // after optimization, create once dataRecord.optimizedBitsbufTemplate of texts, so not to decode to strings.
  renderOptimizedTextBlocks (
    templateDataRecordId: number,
    dataForRendering: any


    // { key: text }
  ): string[];


  optimize ( templateDataRecordId: number ): number;


  orderedRecords( inRecords: OptimizedTemplateRecord[] ): OptimizedTemplateRecord[];


  // old method String.replace() in loop over all charrs of the template every loop iterations.
  replaceTemplateRendererWithDataForRendering(): any;

}




