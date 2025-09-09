import { expect, test } from "vitest";

import { EngineDataRecordsBase } from "../src/EngineDataRecordsBase.js";
import { SimpleDataRecord, SignedDataRecord, DataRecordType } from "../src/types/DataRecordTypes.js";



test (
  "Testing Pattern Engine with DataRecords",
  () => {

    let engineDataRecords: EngineDataRecordsBase = new EngineDataRecordsBase( 3 );

    let dataRecord_A: SignedDataRecord = engineDataRecords.addNewDataRecord() as SignedDataRecord;
    let dataRecord_B: SimpleDataRecord = engineDataRecords.addNewDataRecord();
    let dataRecord_C: SimpleDataRecord = engineDataRecords.addNewDataRecord();

    dataRecord_A.data = "Hello, World";
    dataRecord_A.recordType = new Object() as DataRecordType;
    dataRecord_A.recordType.dataType = "text";
    dataRecord_A.recordType.dataValueOctetsNumber = dataRecord_A.data.length;

    dataRecord_B.data = 123;
    dataRecord_C.data = [ 1, 2, 3 ];

    // console.info ( { dataRecord_A } );
    // console.info ( { dataRecord_B } );
    // console.info ( { dataRecord_C } );


    expect( dataRecord_C.recordLabel.id ).toBe( engineDataRecords.getActiveRecordId() );

    engineDataRecords.setActiveDataRecord( dataRecord_A );
    expect( dataRecord_A.recordLabel.isActive ).toBe( true );
    expect( dataRecord_B.recordLabel.isActive ).toBe( false );

    expect( dataRecord_A.recordLabel.id ).toBe( engineDataRecords.getActiveRecordId() );
    expect( dataRecord_A.recordLabel.ix ).toBe( engineDataRecords.getActiveRecordIx() );
    expect( dataRecord_A.recordLabel.ix ).toBe( engineDataRecords.getActiveRecordIx() );

    engineDataRecords.setActiveDataRecord( dataRecord_B );
    expect( engineDataRecords.getActiveDataRecord() ).toBe( dataRecord_B );

  }
)


