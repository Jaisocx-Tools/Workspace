import { JsonWriter } from "@jaisocx/file-writer";
import { JPath } from "@jaisocx/jpath";



export class DatasetBase extends JsonWriter {
  JPATH_NAME_DELIMITER: string;

  _data: any[];
  _dataAsObject: any;
  _filePath: string;



  constructor() {
    super();

    this.JPATH_NAME_DELIMITER = "_";

    this._data = new Array();
    this._dataAsObject = new Object();

    this._filePath = "";
  }



  getData(): any[] {
    return this._data;
  }



  getDataIndexedByKeys( jpathExpression: string ): any[] {
    let jpathName: string = JPath.getJPathName (
      jpathExpression,
      this.JPATH_NAME_DELIMITER
    );

    if ( this._dataAsObject[jpathName] === undefined ) {
      this._dataAsObject[jpathName] = this.initDataAsObject( jpathExpression );
    }


    return this._dataAsObject[jpathName];
  }



  saveDataIndexedByKeys(
    jpathExpression: string,
    inFilePath: string
  ): number {
    let locSaved: number = this.saveData (
      inFilePath,
      this.getDataIndexedByKeys( jpathExpression )
    );


    return locSaved;
  }



  initDataAsObject( jpathExpression: string ): any {
    let jpath: (string|number)[] = JPath.parse( jpathExpression );

    let locDataAsObject: any = new Object();

    let arrayItemId: number = 0;
    let arrayItem: any;
    let arrayLen: number = this._data.length;
    let keyValue: string = "";

    let orderedDatasetByKey: any[] = this._data.sort(
      ( a: any, b: any ): number => {
        let aValue = JPath.getByJPath( jpath, a );
        let bValue = JPath.getByJPath( jpath, b );

        if ( aValue === bValue ) {
          return 0;
        }


        return ( aValue > bValue ) ? (1) : (-1);
      }
    );

    for ( arrayItemId = 0; arrayItemId < arrayLen; arrayItemId++ ) {
      arrayItem = orderedDatasetByKey[ arrayItemId ];
      keyValue = JPath.getByJPath(
        jpath,
        arrayItem
      );

      if ( locDataAsObject[keyValue] === undefined ) {
        locDataAsObject[keyValue] = new Array();
      }
      locDataAsObject[keyValue].push( arrayItem );
    }


    return locDataAsObject;
  }
}


