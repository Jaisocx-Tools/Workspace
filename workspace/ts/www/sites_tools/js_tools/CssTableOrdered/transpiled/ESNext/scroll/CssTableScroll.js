export class CssTableScroll {
    #TABLES_SELECTOR;
    #FIXED_LABELS_HOLDER_CSS_CLASS_NAME;
    _tableRecordsHolderSelector;
    _fixedLabelsHolderCssClassName;
    constructor() {
        this.#TABLES_SELECTOR = ".jsx-css-table-holder .jsx-css-table.records";
        this.#FIXED_LABELS_HOLDER_CSS_CLASS_NAME = "desktop-columns-labels-holder";
        this._tableRecordsHolderSelector = this.#TABLES_SELECTOR;
        this._fixedLabelsHolderCssClassName = this.#FIXED_LABELS_HOLDER_CSS_CLASS_NAME;
    }
    onTableScroll(inEvent) {
        let tableRowsHolder = inEvent.target;
        let tableRowsHolder_scrollLeft = tableRowsHolder.scrollLeft;
        // @ts-ignore
        let tableRecordsLabelsRow = tableRowsHolder.closest(".jsx-css-table-holder").querySelector(".jsx-css-table.desktop-columns-labels-holder");
        // @ts-ignore
        tableRecordsLabelsRow.scrollLeft = tableRowsHolder_scrollLeft;
    }
    addScrollEventHandlers() {
        let tb = new Object();
        let tableRowsHolder = document.querySelectorAll(this._tableRecordsHolderSelector);
        let rowId = 0;
        let rowsNumber = tableRowsHolder.length;
        while (rowId < rowsNumber) {
            tb = tableRowsHolder[rowId];
            tb.addEventListener("scroll", (evt) => {
                this.onTableScroll(evt);
            });
            rowId++;
        }
    }
}
//# sourceMappingURL=CssTableScroll.js.map