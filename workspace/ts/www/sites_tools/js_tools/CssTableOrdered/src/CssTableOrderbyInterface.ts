import { CssTableOrderby } from "./CssTableOrderby.js";



export interface CssTableOrderbyInterface {
  getColumnIdSorted(): number;

  setRowsNumberNotOrdered( rowsNum: number ): CssTableOrderby;
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



