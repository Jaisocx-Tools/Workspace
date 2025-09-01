import { SimpleDataRecord } from "./types/DataRecordTypes.js";
export interface EngineDataRecordsBaseInterface {
    setDebug(inDebug: boolean): EngineDataRecordsBaseInterface;
    addNewDataRecord(): SimpleDataRecord;
    getActiveRecordId(): string;
    getActiveRecordIx(): number;
    getActiveDataRecord(): SimpleDataRecord;
    getDataRecordById(id: string): SimpleDataRecord;
    getDataRecordByIx(ix: number): SimpleDataRecord;
    setActiveRecordId(id: string): SimpleDataRecord;
    setActiveRecordIx(ix: number): SimpleDataRecord;
    setActiveDataRecord(dataRecord: SimpleDataRecord): boolean;
    setData(inData: any): EngineDataRecordsBaseInterface;
}
//# sourceMappingURL=EngineDataRecordsBaseInterface.d.ts.map