export interface CssTableOrderbyInterface {

  setColumnLabelSelector( selector: string ): CssTableOrderbyInterface;
  getColumnLabelSelector(): string;

  getColumnIdSorted(): number;

  setRowsNumberNotOrdered( rowsNum: number ): CssTableOrderbyInterface;
  getRowsNumberNotOrdered(): number;

  addOrderbyEventHandler(): number;



  cloneRows (
    rows: NodeListOf<Element>
  ): number;


  getCellValue (
    row: HTMLElement,
    datatype: string,
    inCellNumber: number
  ): any;


  cachedRowsOrderby (
    rows: HTMLElement[],
    datatype: string,
    inCellNumber: number
  ): HTMLElement[];


  addOrderedRowsHtml(
    cachedRows: HTMLElement[],
    rowOffset: number,
    tableRowsHtmlArray: string[]
  ): number;


  orderby( evt: Event ): number;

}



