import "@table-assets/table-styles-main-webpack.css";
export declare class Table {
    MAX_WIDTH_MOBILE_LOOK_AND_FEEL: number;
    htmlHolderNodeId: string;
    htmlHolderNodeSelector: string;
    htmlHolderNode: HTMLElement | null;
    cssClasses: string;
    confUrl: string;
    dataUrl: string;
    tableConf: any;
    loadedTableData: any;
    tableData: any;
    debug: boolean;
    orderByField: string;
    orderByOrder: string;
    constructor();
    setHtmlHolderNodeId(id: string): Table;
    setHtmlHolderNodeSelector(selector: string): Table;
    setCssClasses(cssClasses: string): Table;
    setConfUrl(url: string): Table;
    setDataUrl(url: string): Table;
    setMobileLookAndFeelMaxWidth(width: number): Table;
    assignEventsHandlers(): Table;
    load(): Table;
    renderTableAndAdjustSizes(): undefined;
    renderTable(): undefined;
    addEventListenersOrderBy(): undefined;
    renderHeader(): string;
    renderRecord(record: any, rowCounter: number): string;
    applyColumnsWidths(): undefined;
    generateGridTemplateColumnsStyle(): string;
    adjustHeaderPaddingRight(): undefined;
    getScrollbarWidth(element: HTMLElement | null): number;
    orderByToggle(columnName: string | undefined): undefined;
    orderBy(field: string | undefined, order: string): undefined;
}
//# sourceMappingURL=Table.d.ts.map