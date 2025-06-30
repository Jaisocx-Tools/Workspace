"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssTableOrderby = void 0;
class CssTableOrderby {
    constructor() {
        this.COLUMN_NOT_ORDERED = (-3);
        this._columnIdSorted = this.COLUMN_NOT_ORDERED;
        this._cachedRowsStart = new Array();
        this._cachedRowsFolders = new Array();
        this._cachedRowsFiles = new Array();
    }
    getColumnIdSorted() {
        return this._columnIdSorted;
    }
    addOrderbyEventHandler() {
        let selector = ".workspace-css-table .row.desktop-columns-labels-holder .cell .column-label";
        let tableColumns = document.querySelectorAll(selector);
        let label = new Object();
        let columnsNumber = tableColumns.length;
        let labelId = 0;
        for (labelId = 0; labelId < columnsNumber; labelId++) {
            label = tableColumns[labelId];
            label.addEventListener("click", (evt) => {
                //@ts-ignore
                let orderbyRetval = this.orderby(evt);
                //@ts-ignore
                let eventHandlerRetval = this.addOrderbyEventHandler();
            });
        }
        return 1;
    }
    cloneRows(rows) {
        let rowsNumber = rows.length;
        let row = new Object();
        let rowClone = new Object();
        let rowId = 0;
        let rowOuterHTML = "";
        for (rowId = 0; rowId < rowsNumber; rowId++) {
            row = rows[rowId];
            rowOuterHTML = row.outerHTML;
            rowClone = document.createElement(row.tagName);
            rowClone.innerHTML = rowOuterHTML;
            if (rowId < 2) {
                this._cachedRowsStart.push(rowClone);
            }
            else if (row.classList.contains("folder")) {
                this._cachedRowsFolders.push(rowClone);
            }
            else {
                this._cachedRowsFiles.push(rowClone);
            }
        }
        return 1;
    }
    getCellValue(row, datatype, inCellNumber) {
        let cells = row.querySelectorAll(".cell .cell-value");
        let cell = cells[inCellNumber];
        let retVal = "";
        let value = cell.innerText;
        if (datatype === "number") {
            retVal = parseInt(value, 10);
        }
        else {
            retVal = value;
        }
        return retVal;
    }
    cachedRowsOrderby(rows, datatype, inCellNumber) {
        let orderedRows = rows.sort((rowA, rowB) => {
            let retVal = 0;
            let cellA = this.getCellValue(rowA, datatype, inCellNumber);
            let cellB = this.getCellValue(rowB, datatype, inCellNumber);
            let orderbyShift = 0;
            if (inCellNumber === this._columnIdSorted) {
                orderbyShift = 2;
            }
            if (cellA > cellB) {
                retVal = (1 - orderbyShift);
            }
            else if (cellA < cellB) {
                retVal = ((-1) + orderbyShift);
            }
            return retVal;
        });
        return orderedRows;
    }
    addOrderedRowsHtml(cachedRows, rowOffset, tableRowsHtmlArray) {
        let rowClone = new Object();
        let cachedRowsNumber = cachedRows.length;
        let rowId = 0;
        let rowOuterHTML = "";
        for (rowId = 0; rowId < cachedRowsNumber; rowId++) {
            rowClone = cachedRows[rowId];
            rowOuterHTML = rowClone.innerHTML;
            tableRowsHtmlArray[rowOffset] = rowOuterHTML;
            rowOffset++;
        }
        return rowOffset;
    }
    orderby(evt) {
        //@ts-ignore
        let label = evt.target.closest(".cell");
        //@ts-ignore
        let datatype = label.dataset.datatype;
        //@ts-ignore
        let cellNumber = +label.dataset.id;
        let selectorRows = ".workspace-css-table .row";
        let rows = document.querySelectorAll(selectorRows);
        let rowsNumber = rows.length;
        let cachedRowsEmpty = (this._cachedRowsStart.length === 0);
        if (cachedRowsEmpty === true) {
            this.cloneRows(rows);
        }
        let cachedRowsFoldersOrdered = this.cachedRowsOrderby(this._cachedRowsFolders, datatype, cellNumber);
        let cachedRowsFilesOrdered = this.cachedRowsOrderby(this._cachedRowsFiles, datatype, cellNumber);
        let tableRowsHtmlArray = new Array(rowsNumber);
        let rowOffset = 0;
        let rowOffsetAfterAdded = 0;
        rowOffsetAfterAdded = this.addOrderedRowsHtml(this._cachedRowsStart, rowOffset, tableRowsHtmlArray);
        rowOffset = rowOffsetAfterAdded;
        rowOffsetAfterAdded = this.addOrderedRowsHtml(cachedRowsFoldersOrdered, rowOffset, tableRowsHtmlArray);
        rowOffset = rowOffsetAfterAdded;
        rowOffsetAfterAdded = this.addOrderedRowsHtml(cachedRowsFilesOrdered, rowOffset, tableRowsHtmlArray);
        let tableSelector = ".workspace-css-table";
        let table = label.closest(tableSelector);
        let tableRowsHtml = tableRowsHtmlArray.join("\n    ");
        table.innerHTML = "";
        table.innerHTML = tableRowsHtml;
        if (cellNumber === this._columnIdSorted) {
            this._columnIdSorted = this.COLUMN_NOT_ORDERED;
        }
        else {
            this._columnIdSorted = cellNumber;
        }
        return 1;
    }
}
exports.CssTableOrderby = CssTableOrderby;
//# sourceMappingURL=CssTableOrderby.js.map