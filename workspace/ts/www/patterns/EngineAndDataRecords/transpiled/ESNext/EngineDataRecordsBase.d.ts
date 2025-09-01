import { SimpleDataRecord } from "./types/DataRecordTypes.js";
import { EngineDataRecordsBaseInterface } from "./EngineDataRecordsBaseInterface.js";
export declare class EngineDataRecordsBase implements EngineDataRecordsBaseInterface {
    protected _debug: boolean;
    protected _activeDataRecordId: string;
    protected _activeDataRecord_numIx: number;
    protected _dataRecordsCapacity: number;
    protected _dataRecordsAmount: number;
    protected _dataRecords: SimpleDataRecord[];
    constructor(inDataRecordsNumber: number | boolean);
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
//# sourceMappingURL=EngineDataRecordsBase.d.ts.map