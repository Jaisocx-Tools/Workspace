export class CssTableOrderby {

  protected _columnIdSorted: number;
  protected _cachedRowsStart: any[];
  protected _cachedRowsFolders: any[];
  protected _cachedRowsFiles: any[];



  constructor() {
    this._columnIdSorted = (-3);


    this._cachedRowsStart = new Array();
    this._cachedRowsFolders = new Array();
    this._cachedRowsFiles = new Array();
  }

  public getColumnIdSorted(): number {
    return this._columnIdSorted;
  }





  addOrderbyEventHandler(): number {
    let selector: string = ".workspace-css-table .row.desktop-columns-labels-holder .cell .column-label";
    let tableColumns: NodeListOf<Element> = document.querySelectorAll( selector );

    let label: Element = new Object() as HTMLElement;
    let columnsNumber: number = tableColumns.length;
    let labelId: number = 0;
    for ( labelId = 0; labelId < columnsNumber; labelId++ ) {
      label = tableColumns[labelId];
      label.addEventListener (
        "click",
        ( evt: Event ) => {
          this.orderby( evt );
          this.addOrderbyEventHandler();
        }
      );
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
    let orderedRows: HTMLElement[] = rows.sort (
      ( rowA: HTMLElement, rowB: HTMLElement ): number => {
        let retVal: number = 0;

        let cellA: any = this.getCellValue( rowA, datatype, inCellNumber );
        let cellB: any = this.getCellValue( rowB, datatype, inCellNumber );

        let orderbyShift: number = 0;
        if ( inCellNumber === this._columnIdSorted ) {
          orderbyShift = 2;
        }

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


  cloneRows(
    rows: NodeListOf<Element>
  ): number {
    let rowsNumber: number = rows.length;
    let row: HTMLElement = new Object() as HTMLElement;
    let rowClone: HTMLElement = new Object() as HTMLElement;
    let rowId: number = 0;
    let rowIdCloned: number = 0;
    let rowOuterHTML: string = "";

    for ( rowId = 0; rowId < rowsNumber; rowId++ ) {
        rowIdCloned = ( rowId - 2 );
        row = rows[rowId] as HTMLElement;
        rowOuterHTML = row.outerHTML;
        rowClone = document.createElement( row.tagName );
        rowClone.innerHTML = rowOuterHTML;

        if ( rowId < 2 ) {
          this._cachedRowsStart.push( rowClone );
        } else if ( row.classList.contains( "folder" ) ) {
          this._cachedRowsFolders.push( rowClone );
        } else {
          this._cachedRowsFiles.push( rowClone );
        }
    }


    return 1;
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


    let selectorRows: string = ".workspace-css-table .row";
    let rows: NodeListOf<Element> = document.querySelectorAll( selectorRows );
    let rowsNumber: number = rows.length;

    let cachedRowsEmpty: boolean = ( this._cachedRowsStart.length === 0 );




    if ( cachedRowsEmpty === true ) {
      this.cloneRows( rows );
    }

    let cachedRowsFoldersOrdered = this.cachedRowsOrderby(
      this._cachedRowsFolders,
      datatype,
      cellNumber
    );

    let cachedRowsFilesOrdered = this.cachedRowsOrderby(
      this._cachedRowsFiles,
      datatype,
      cellNumber
    );



    let tableRowsHtmlArray: string[] = new Array(rowsNumber);
    let rowOffset: number = 0;

    rowOffset = this.addOrderedRowsHtml (
      this._cachedRowsStart,
      rowOffset,
      tableRowsHtmlArray
    );

    rowOffset = this.addOrderedRowsHtml (
      this._cachedRowsFolders,
      rowOffset,
      tableRowsHtmlArray
    );

    rowOffset = this.addOrderedRowsHtml (
      this._cachedRowsFiles,
      rowOffset,
      tableRowsHtmlArray
    );


    let tableSelector: string = ".workspace-css-table";
    let table: HTMLElement = label.closest( tableSelector ) as HTMLElement;

    let tableRowsHtml: string = tableRowsHtmlArray.join( "\n    " );

    table.innerHTML = "";
    table.innerHTML = tableRowsHtml;


    if ( cellNumber === this._columnIdSorted ) {
      this._columnIdSorted = (-3);
    } else {
      this._columnIdSorted = cellNumber;
    }


    return 1;
  }

}



