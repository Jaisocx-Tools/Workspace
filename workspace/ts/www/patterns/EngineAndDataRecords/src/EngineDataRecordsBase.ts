import { DataRecordLabel, SimpleDataRecord } from "./types/DataRecordTypes.js";
import { EngineDataRecordsBaseInterface } from "./EngineDataRecordsBaseInterface.js";



export class EngineDataRecordsBase implements EngineDataRecordsBaseInterface {

  protected _debug: boolean;


  protected _activeDataRecordId: string;
  protected _activeDataRecord_numIx: number;

  protected _dataRecordsCapacity: number;
  protected _dataRecordsAmount: number;

  protected _dataRecords: SimpleDataRecord[];



  constructor( inDataRecordsNumber: number|boolean ) {
    this._debug = true;

    this._activeDataRecordId = "";
    this._activeDataRecord_numIx = (-1);

    this._dataRecordsCapacity = inDataRecordsNumber as number;
    this._dataRecordsAmount = 0;

    if ( inDataRecordsNumber === false ) {
      this._dataRecordsCapacity = (-1);
      this._dataRecords = new Array() as SimpleDataRecord[];
    } else {
      this._dataRecords = new Array( this._dataRecordsCapacity ) as SimpleDataRecord[];
    }

  }



  setDebug( inDebug: boolean ): EngineDataRecordsBaseInterface {
    this._debug = inDebug;


    return this;
  }



  addNewDataRecord(): SimpleDataRecord {
    let dataRecord: SimpleDataRecord = new Object() as SimpleDataRecord;
    dataRecord.recordLabel = new Object as DataRecordLabel;

    this._dataRecordsAmount += 1;
    let numIx = ( this._dataRecordsAmount - 1 );

    dataRecord.recordLabel.ix = numIx;
    dataRecord.recordLabel.id = "d_" + (new Date()).getTime() + "_" + Math.round( Math.random() * 1000 ) + "_" + numIx;

    this._activeDataRecord_numIx = numIx;
    this._activeDataRecordId = dataRecord.recordLabel.id;

    this._dataRecords[numIx] = dataRecord;
    this.setActiveRecordIx( numIx );


    return this._dataRecords[numIx];

  }



  getActiveRecordId(): string {
    return this._activeDataRecordId;
  }



  getActiveRecordIx(): number {
    return this._activeDataRecord_numIx;
  }



  getActiveDataRecord(): SimpleDataRecord {
    let numIx: number = this._activeDataRecord_numIx;
    let dataRecord: SimpleDataRecord = new Object() as SimpleDataRecord;

    if ( this._dataRecordsAmount === 0 ) {
      dataRecord = this.addNewDataRecord();
    } else {
      dataRecord = this._dataRecords[numIx];
    }


    return dataRecord;
  }



  getDataRecordById( id: string ): SimpleDataRecord {
    let foundDataRecord: SimpleDataRecord|undefined = this._dataRecords.find( ( item ) => {
      return ( item.recordLabel.id === id );
    });

    if ( foundDataRecord === undefined ) {
      throw new Error( "Data Record Not Found" );
    }


    return foundDataRecord;

  }



  getDataRecordByIx ( ix: number ): SimpleDataRecord {
    let dataRecord: SimpleDataRecord = this._dataRecords[ix];


    return dataRecord;

  }



  setActiveRecordId ( id: string ): SimpleDataRecord {
    let foundDataRecord: SimpleDataRecord|undefined = this.getDataRecordById ( id );

    foundDataRecord = this.setActiveRecordIx( foundDataRecord.recordLabel.ix );


    return foundDataRecord;

  }



  setActiveRecordIx ( ix: number ): SimpleDataRecord {

    if ( ix >= this._dataRecordsAmount ) {
      throw new Error( "Data Record Not Found" );
    }

    this._dataRecords.forEach( ( item ) => {
      item.recordLabel.isActive = false;
    });

    let foundDataRecord: SimpleDataRecord = this._dataRecords[ix];

    this._activeDataRecordId = foundDataRecord.recordLabel.id;
    this._activeDataRecord_numIx = foundDataRecord.recordLabel.ix;
    foundDataRecord.recordLabel.isActive = true;


    return foundDataRecord;

  }



  setActiveDataRecord ( dataRecord: SimpleDataRecord ): boolean {
    let id: string = dataRecord.recordLabel.id;

    this.setActiveRecordId( id );


    return true;

  }



  setData ( inData: any ): EngineDataRecordsBaseInterface {
    let dataRecord: SimpleDataRecord = this.getActiveDataRecord();
    dataRecord.data = inData;


    // why rt dis: imagine code, then very easily explained:
    // engine
    //   .setActiveRecordId( "record with data about my task num. 2345" )
    //   .setData( data )
    //   .doSmth();
    return this;

  }

}


