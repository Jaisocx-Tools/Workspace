export class EngineDataRecordsBase {
    _debug;
    _activeDataRecordId;
    _activeDataRecord_numIx;
    _dataRecordsCapacity;
    _dataRecordsAmount;
    _dataRecords;
    constructor(inDataRecordsNumber) {
        this._debug = true;
        this._activeDataRecordId = "";
        this._activeDataRecord_numIx = (-1);
        this._dataRecordsCapacity = inDataRecordsNumber;
        this._dataRecordsAmount = 0;
        if (inDataRecordsNumber === false) {
            this._dataRecordsCapacity = (-1);
            this._dataRecords = new Array();
        }
        else {
            this._dataRecords = new Array(this._dataRecordsCapacity);
        }
    }
    setDebug(inDebug) {
        this._debug = inDebug;
        return this;
    }
    addNewDataRecord() {
        let dataRecord = new Object();
        dataRecord.recordLabel = new Object;
        this._dataRecordsAmount += 1;
        let numIx = (this._dataRecordsAmount - 1);
        dataRecord.recordLabel.ix = numIx;
        dataRecord.recordLabel.id = "d_" + (new Date()).getTime() + "_" + Math.round(Math.random() * 1000) + "_" + numIx;
        this._activeDataRecord_numIx = numIx;
        this._activeDataRecordId = dataRecord.recordLabel.id;
        this._dataRecords[numIx] = dataRecord;
        this.setActiveRecordIx(numIx);
        return this._dataRecords[numIx];
    }
    getActiveRecordId() {
        return this._activeDataRecordId;
    }
    getActiveRecordIx() {
        return this._activeDataRecord_numIx;
    }
    getActiveDataRecord() {
        let numIx = this._activeDataRecord_numIx;
        let dataRecord = new Object();
        if (this._dataRecordsAmount === 0) {
            dataRecord = this.addNewDataRecord();
        }
        else {
            dataRecord = this._dataRecords[numIx];
        }
        return dataRecord;
    }
    getDataRecordById(id) {
        let foundDataRecord = this._dataRecords.find((item) => {
            return (item.recordLabel.id === id);
        });
        if (foundDataRecord === undefined) {
            throw new Error("Data Record Not Found");
        }
        return foundDataRecord;
    }
    getDataRecordByIx(ix) {
        let dataRecord = this._dataRecords[ix];
        return dataRecord;
    }
    setActiveRecordId(id) {
        let foundDataRecord = this.getDataRecordById(id);
        foundDataRecord = this.setActiveRecordIx(foundDataRecord.recordLabel.ix);
        return foundDataRecord;
    }
    setActiveRecordIx(ix) {
        if (ix >= this._dataRecordsAmount) {
            throw new Error("Data Record Not Found");
        }
        this._dataRecords.forEach((item) => {
            item.recordLabel.isActive = false;
        });
        let foundDataRecord = this._dataRecords[ix];
        this._activeDataRecordId = foundDataRecord.recordLabel.id;
        this._activeDataRecord_numIx = foundDataRecord.recordLabel.ix;
        foundDataRecord.recordLabel.isActive = true;
        return foundDataRecord;
    }
    setActiveDataRecord(dataRecord) {
        let id = dataRecord.recordLabel.id;
        this.setActiveRecordId(id);
        return true;
    }
    setData(inData) {
        let dataRecord = this.getActiveDataRecord();
        dataRecord.data = inData;
        // why rt dis: imagine code, then very easily explained:
        // engine
        //   .setActiveRecordId( "record with data about my task num. 2345" )
        //   .setData( data )
        //   .doSmth();
        return this;
    }
}
//# sourceMappingURL=EngineDataRecordsBase.js.map