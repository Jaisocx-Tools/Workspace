

export interface TableInterface {

  setHtmlHolderNodeId( id: string ): TableInterface;
  setHtmlHolderNodeSelector( selector: string ): TableInterface;
  setConfUrl( url: string ): TableInterface;
  setDataUrl( url: string ): TableInterface;
  setMobileLookAndFeelMaxWidth( width: number ): TableInterface;
  assignEventsHandlers(): TableInterface;
  load(): TableInterface;
  renderTableAndAdjustSizes(): undefined;
  renderTable(): undefined;
  addEventListenersOrderBy();
  renderHeader(): string;
  renderRecord ( 
    record: any, 
    rowCounter: number 
  ): string;
  applyColumnsWidths(): undefined;
  generateGridTemplateColumnsStyle(): string;
  adjustHeaderPaddingRight(): undefined;
  getScrollbarWidth( element: HTMLElement|null ): number;
  orderByToggle( columnName: string|undefined ): undefined;
  orderBy (
    field: string|undefined, 
    order: string
  ): undefined;

}










