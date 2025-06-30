import { CssTableOrderbyInterface } from "./CssTableOrderbyInterface";
export declare class CssTableOrderby implements CssTableOrderbyInterface {
    COLUMN_NOT_ORDERED: number;
    protected _columnIdSorted: number;
    protected _cachedRowsStart: any[];
    protected _cachedRowsFolders: any[];
    protected _cachedRowsFiles: any[];
    constructor();
    getColumnIdSorted(): number;
    addOrderbyEventHandler(): number;
    cloneRows(rows: NodeListOf<Element>): number;
    getCellValue(row: HTMLElement, datatype: string, inCellNumber: number): any;
    cachedRowsOrderby(rows: HTMLElement[], datatype: string, inCellNumber: number): HTMLElement[];
    addOrderedRowsHtml(cachedRows: HTMLElement[], rowOffset: number, tableRowsHtmlArray: string[]): number;
    orderby(evt: Event): number;
}
//# sourceMappingURL=CssTableOrderby.d.ts.map