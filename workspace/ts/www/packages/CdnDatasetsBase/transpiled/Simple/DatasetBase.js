class DatasetBase extends JsonWriter {
    JPATH_NAME_DELIMITER;
    _data;
    _dataAsObject;
    _filePath;



    constructor() {
        super();
        this.JPATH_NAME_DELIMITER = "_";
        this._data = new Array();
        this._dataAsObject = new Object();
        this._filePath = "";
    }



    getData() {
        return this._data;
    }



    getDataIndexedByKeys(jpathExpression) {
        let jpathName = JPath.getJPathName(
            jpathExpression,
            this.JPATH_NAME_DELIMITER
        );

        if (this._dataAsObject[jpathName] === undefined) {
            this._dataAsObject[jpathName] = this.initDataAsObject(jpathExpression);
        }


        return this._dataAsObject[jpathName];
    }



    saveDataIndexedByKeys(jpathExpression, inFilePath) {
        let locSaved = this.saveData(
            inFilePath,
            this.getDataIndexedByKeys(jpathExpression)
        );


        return locSaved;
    }



    initDataAsObject(jpathExpression) {
        let jpath = JPath.parse(jpathExpression);
        let locDataAsObject = new Object();
        let arrayItemId = 0;
        let arrayItem;
        let arrayLen = this._data.length;
        let keyValue = "";
        let orderedDatasetByKey = this._data.sort((a, b) => {
            let aValue = JPath.getByJPath(jpath, a);
            let bValue = JPath.getByJPath(jpath, b);

            if (aValue === bValue) {
                return 0;
            }


            return (aValue > bValue) ? (1) : (-1);
        });

        for (arrayItemId = 0; arrayItemId < arrayLen; arrayItemId++) {
            arrayItem = orderedDatasetByKey[arrayItemId];
            keyValue = JPath.getByJPath(jpath, arrayItem);

            if (locDataAsObject[keyValue] === undefined) {
                locDataAsObject[keyValue] = new Array();
            }
            locDataAsObject[keyValue].push(arrayItem);
        }


        return locDataAsObject;
    }
}


