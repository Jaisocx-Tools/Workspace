"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasetBase = void 0;
const file_writer_1 = require("@jaisocx/file-writer");
const jpath_1 = require("@jaisocx/jpath");
class DatasetBase extends file_writer_1.JsonWriter {
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
        let jpathName = jpath_1.JPath.getJPathName(jpathExpression, this.JPATH_NAME_DELIMITER);
        if (this._dataAsObject[jpathName] === undefined) {
            this._dataAsObject[jpathName] = this.initDataAsObject(jpathExpression);
        }
        return this._dataAsObject[jpathName];
    }
    saveDataIndexedByKeys(jpathExpression, inFilePath) {
        let locSaved = this.saveData(inFilePath, this.getDataIndexedByKeys(jpathExpression));
        return locSaved;
    }
    initDataAsObject(jpathExpression) {
        let jpath = jpath_1.JPath.parse(jpathExpression);
        let locDataAsObject = new Object();
        let arrayItemId = 0;
        let arrayItem;
        let arrayLen = this._data.length;
        let keyValue = "";
        let orderedDatasetByKey = this._data.sort((a, b) => {
            let aValue = jpath_1.JPath.getByJPath(jpath, a);
            let bValue = jpath_1.JPath.getByJPath(jpath, b);
            if (aValue === bValue) {
                return 0;
            }
            return (aValue > bValue) ? (1) : (-1);
        });
        for (arrayItemId = 0; arrayItemId < arrayLen; arrayItemId++) {
            arrayItem = orderedDatasetByKey[arrayItemId];
            keyValue = jpath_1.JPath.getByJPath(jpath, arrayItem);
            if (locDataAsObject[keyValue] === undefined) {
                locDataAsObject[keyValue] = new Array();
            }
            locDataAsObject[keyValue].push(arrayItem);
        }
        return locDataAsObject;
    }
}
exports.DatasetBase = DatasetBase;
//# sourceMappingURL=DatasetBase.js.map