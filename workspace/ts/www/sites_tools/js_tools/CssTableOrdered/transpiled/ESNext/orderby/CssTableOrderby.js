export class CssTableOrderby {
    COLUMN_ID_NOT_ORDERED;
    ROWS_NUMBER_NOT_ORDERED;
    COLUMN_LABEL_SELECTOR;
    _columnLabelSelector;
    _columnIdOrdered;
    _rowsNumberNotOrdered;
    _cachedRowsStart;
    _cachedRowsFolders;
    _cachedRowsFiles;
    constructor() {
        this.COLUMN_ID_NOT_ORDERED = (-3);
        this._columnIdOrdered = this.COLUMN_ID_NOT_ORDERED;
        this.COLUMN_LABEL_SELECTOR = ".jsx-css-table.desktop-columns-labels-holder .row .column-label";
        this._columnLabelSelector = this.COLUMN_LABEL_SELECTOR;
        this.ROWS_NUMBER_NOT_ORDERED = 1;
        this._rowsNumberNotOrdered = this.ROWS_NUMBER_NOT_ORDERED;
        this._cachedRowsStart = new Array();
        this._cachedRowsFolders = new Array();
        this._cachedRowsFiles = new Array();
    }
    setColumnLabelSelector(selector) {
        this._columnLabelSelector = selector;
        return this;
    }
    getColumnLabelSelector() {
        return this._columnLabelSelector;
    }
    getColumnIdSorted() {
        return this._columnIdOrdered;
    }
    setRowsNumberNotOrdered(rowsNum) {
        this._rowsNumberNotOrdered = rowsNum;
        return this;
    }
    getRowsNumberNotOrdered() {
        return this._rowsNumberNotOrdered;
    }
    addOrderbyEventHandler() {
        let tableColumns = document.querySelectorAll(this._columnLabelSelector);
        let label = new Object();
        let columnsNumber = tableColumns.length;
        let labelId = 0;
        for (labelId = 0; labelId < columnsNumber; labelId++) {
            label = tableColumns[labelId];
            label.addEventListener("click", (evt) => {
                //@ts-ignore
                let orderbyRetval = this.orderby(evt);
                //@ts-ignore
                // let eventHandlerRetval: number = this.addOrderbyEventHandler();
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
            if (rowId < this._rowsNumberNotOrdered) {
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
        let orderbyShift = 0;
        if (inCellNumber === this._columnIdOrdered) {
            orderbyShift = 2;
        }
        let orderedRows = rows.sort((rowA, rowB) => {
            let retVal = 0;
            let cellA = this.getCellValue(rowA, datatype, inCellNumber);
            let cellB = this.getCellValue(rowB, datatype, inCellNumber);
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
        let selectorRows = ".jsx-css-table.records .row";
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
        // let tableSelector: string = ".jsx-css-table.records";
        let tableHolderSelector = ".jsx-css-table-holder";
        let tableSelector = ".jsx-css-table.records";
        let tableHolder = label.closest(tableHolderSelector);
        let table = tableHolder.querySelector(tableSelector);
        let tableRowsHtml = tableRowsHtmlArray.join("\n    ");
        table.innerHTML = "";
        table.innerHTML = tableRowsHtml;
        if (cellNumber === this._columnIdOrdered) {
            this._columnIdOrdered = this.COLUMN_ID_NOT_ORDERED;
        }
        else {
            this._columnIdOrdered = cellNumber;
        }
        return 1;
    }
}
//# sourceMappingURL=CssTableOrderby.js.map