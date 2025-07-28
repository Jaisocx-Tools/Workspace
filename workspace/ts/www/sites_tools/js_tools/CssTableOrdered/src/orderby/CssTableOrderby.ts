import { CssTableOrderbyInterface } from "./CssTableOrderbyInterface.js";



export class CssTableOrderby implements CssTableOrderbyInterface {

  public COLUMN_ID_NOT_ORDERED: number;
  public ROWS_NUMBER_NOT_ORDERED: number;
  public COLUMN_LABEL_SELECTOR: string;

  protected _columnLabelSelector: string;
  protected _columnIdOrdered: number;
  protected _rowsNumberNotOrdered: number;
  protected _cachedRowsStart: any[];
  protected _cachedRowsFolders: any[];
  protected _cachedRowsFiles: any[];



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



  public setColumnLabelSelector( selector: string ): CssTableOrderbyInterface {
    this._columnLabelSelector = selector;


    return this;
  }



  public getColumnLabelSelector(): string {
    return this._columnLabelSelector;
  }



  public getColumnIdSorted(): number {
    return this._columnIdOrdered;
  }



  public setRowsNumberNotOrdered( rowsNum: number ): CssTableOrderbyInterface {
    this._rowsNumberNotOrdered = rowsNum;


    return this;
  }



  public getRowsNumberNotOrdered(): number {
    return this._rowsNumberNotOrdered;
  }



  addOrderbyEventHandler(): number {
    let tableColumns: NodeListOf<Element> = document.querySelectorAll( this._columnLabelSelector );

    let label: Element = new Object() as HTMLElement;
    let columnsNumber: number = tableColumns.length;
    let labelId: number = 0;

    for ( labelId = 0; labelId < columnsNumber; labelId++ ) {
      label = tableColumns[labelId];
      label.addEventListener (
        "click",
        ( evt: Event ) => {

          //@ts-ignore
          let orderbyRetval: number = this.orderby( evt );


          //@ts-ignore
          // let eventHandlerRetval: number = this.addOrderbyEventHandler();
        }
      );
    }


    return 1;
  }



  cloneRows (
    rows: NodeListOf<Element>
  ): number {
    let rowsNumber: number = rows.length;
    let row: HTMLElement = new Object() as HTMLElement;
    let rowClone: HTMLElement = new Object() as HTMLElement;
    let rowId: number = 0;
    let rowOuterHTML: string = "";

    for ( rowId = 0; rowId < rowsNumber; rowId++ ) {
      row = rows[rowId] as HTMLElement;
      rowOuterHTML = row.outerHTML;
      rowClone = document.createElement( row.tagName );
      rowClone.innerHTML = rowOuterHTML;

      if ( rowId < this._rowsNumberNotOrdered ) {
        this._cachedRowsStart.push( rowClone );
      } else if ( row.classList.contains( "folder" ) ) {
        this._cachedRowsFolders.push( rowClone );
      } else {
        this._cachedRowsFiles.push( rowClone );
      }
    }


    return 1;
  }



  getCellValue (
    row: HTMLElement,
    datatype: string,
    inCellNumber: number
  ): any {
    let cells: NodeListOf<Element> = row.querySelectorAll(".cell .cell-value");
    let cell: HTMLElement = cells[inCellNumber] as HTMLElement;
    let retVal: any = "";
    let value: string = cell.innerText;

    if ( datatype === "number" ) {
      retVal = parseInt( value, 10 );
    } else {
      retVal = value;
    }


    return retVal;
  }



  cachedRowsOrderby (
    rows: HTMLElement[],
    datatype: string,
    inCellNumber: number
  ): HTMLElement[] {
    let orderbyShift: number = 0;

    if ( inCellNumber === this._columnIdOrdered ) {
      orderbyShift = 2;
    }

    let orderedRows: HTMLElement[] = rows.sort (
      ( rowA: HTMLElement, rowB: HTMLElement ): number => {
        let retVal: number = 0;

        let cellA: any = this.getCellValue( rowA, datatype, inCellNumber );
        let cellB: any = this.getCellValue( rowB, datatype, inCellNumber );

        if ( cellA > cellB ) {
          retVal = ( 1 - orderbyShift );
        } else if ( cellA < cellB ) {
          retVal = ( (-1) + orderbyShift );
        }


        return retVal;
      }
    );


    return orderedRows;
  }



  addOrderedRowsHtml(
    cachedRows: HTMLElement[],
    rowOffset: number,
    tableRowsHtmlArray: string[]
  ): number {
    let rowClone: HTMLElement = new Object() as HTMLElement;
    let cachedRowsNumber: number = cachedRows.length;
    let rowId: number = 0;
    let rowOuterHTML: string = "";

    for ( rowId = 0; rowId < cachedRowsNumber; rowId++ ) {
      rowClone = cachedRows[rowId];
      rowOuterHTML = rowClone.innerHTML;

      tableRowsHtmlArray[rowOffset] = rowOuterHTML;
      rowOffset++;
    }


    return rowOffset;
  }



  orderby( evt: Event ): number {

    //@ts-ignore
    let label: HTMLElement = evt.target.closest( ".cell" ) as HTMLElement;


    //@ts-ignore
    let datatype: string = label.dataset.datatype;


    //@ts-ignore
    let cellNumber: number = +label.dataset.id;


    let selectorRows: string = ".jsx-css-table.records .row";
    let rows: NodeListOf<Element> = document.querySelectorAll( selectorRows );
    let rowsNumber: number = rows.length;

    let cachedRowsEmpty: boolean = ( this._cachedRowsStart.length === 0 );

    if ( cachedRowsEmpty === true ) {
      this.cloneRows( rows );
    }

    let cachedRowsFoldersOrdered: HTMLElement[] = this.cachedRowsOrderby(
      this._cachedRowsFolders,
      datatype,
      cellNumber
    );

    let cachedRowsFilesOrdered: HTMLElement[] = this.cachedRowsOrderby(
      this._cachedRowsFiles,
      datatype,
      cellNumber
    );


    let tableRowsHtmlArray: string[] = new Array(rowsNumber);
    let rowOffset: number = 0;
    let rowOffsetAfterAdded: number = 0;

    rowOffsetAfterAdded = this.addOrderedRowsHtml (
      this._cachedRowsStart,
      rowOffset,
      tableRowsHtmlArray
    );

    rowOffset = rowOffsetAfterAdded;
    rowOffsetAfterAdded = this.addOrderedRowsHtml (
      cachedRowsFoldersOrdered,
      rowOffset,
      tableRowsHtmlArray
    );

    rowOffset = rowOffsetAfterAdded;
    rowOffsetAfterAdded = this.addOrderedRowsHtml (
      cachedRowsFilesOrdered,
      rowOffset,
      tableRowsHtmlArray
    );


    // let tableSelector: string = ".jsx-css-table.records";
    let tableHolderSelector: string = ".jsx-css-table-holder";
    let tableSelector: string       = ".jsx-css-table.records";

    let tableHolder: HTMLElement = label.closest( tableHolderSelector ) as HTMLElement;
    let table: HTMLElement       = tableHolder.querySelector( tableSelector ) as HTMLElement;

    let tableRowsHtml: string = tableRowsHtmlArray.join( "\n    " );

    table.innerHTML = "";
    table.innerHTML = tableRowsHtml;

    if ( cellNumber === this._columnIdOrdered ) {
      this._columnIdOrdered = this.COLUMN_ID_NOT_ORDERED;
    } else {
      this._columnIdOrdered = cellNumber;
    }


    return 1;
  }

}



