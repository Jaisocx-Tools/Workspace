"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CssTableScroll_TABLES_SELECTOR, _CssTableScroll_FIXED_LABELS_HOLDER_CSS_CLASS_NAME;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssTableScroll = void 0;
class CssTableScroll {
    constructor() {
        _CssTableScroll_TABLES_SELECTOR.set(this, void 0);
        _CssTableScroll_FIXED_LABELS_HOLDER_CSS_CLASS_NAME.set(this, void 0);
        __classPrivateFieldSet(this, _CssTableScroll_TABLES_SELECTOR, ".jsx-css-table-holder .jsx-css-table.records", "f");
        __classPrivateFieldSet(this, _CssTableScroll_FIXED_LABELS_HOLDER_CSS_CLASS_NAME, "desktop-columns-labels-holder", "f");
        this._tableRecordsHolderSelector = __classPrivateFieldGet(this, _CssTableScroll_TABLES_SELECTOR, "f");
        this._fixedLabelsHolderCssClassName = __classPrivateFieldGet(this, _CssTableScroll_FIXED_LABELS_HOLDER_CSS_CLASS_NAME, "f");
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
exports.CssTableScroll = CssTableScroll;
_CssTableScroll_TABLES_SELECTOR = new WeakMap(), _CssTableScroll_FIXED_LABELS_HOLDER_CSS_CLASS_NAME = new WeakMap();
//# sourceMappingURL=CssTableScroll.js.map