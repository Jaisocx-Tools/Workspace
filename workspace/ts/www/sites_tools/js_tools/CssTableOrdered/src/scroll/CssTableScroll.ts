import { CssTableScrollInterface } from "./CssTableScrollInterface.js";



export class CssTableScroll implements CssTableScrollInterface {

  #TABLES_SELECTOR: string;
  #FIXED_LABELS_HOLDER_CSS_CLASS_NAME: string;

  _tableRecordsHolderSelector: string;
  _fixedLabelsHolderCssClassName: string;



  constructor() {
    this.#TABLES_SELECTOR = ".jsx-css-table-holder .jsx-css-table.records";
    this.#FIXED_LABELS_HOLDER_CSS_CLASS_NAME = "desktop-columns-labels-holder";

    this._tableRecordsHolderSelector = this.#TABLES_SELECTOR;
    this._fixedLabelsHolderCssClassName = this.#FIXED_LABELS_HOLDER_CSS_CLASS_NAME;
  }



  onTableScroll( inEvent: Event ): void {
    let tableRowsHolder: HTMLElement = inEvent.target as HTMLElement;
    let tableRowsHolder_scrollLeft: number = tableRowsHolder.scrollLeft;


    // @ts-ignore
    let tableRecordsLabelsRow: HTMLElement = tableRowsHolder.closest( ".jsx-css-table-holder" ).querySelector( ".jsx-css-table.desktop-columns-labels-holder" );


    // @ts-ignore
    tableRecordsLabelsRow.scrollLeft = tableRowsHolder_scrollLeft;

  }



  addScrollEventHandlers(): void {
    let tb: HTMLElement = new Object() as HTMLElement;

    let tableRowsHolder: NodeList = document.querySelectorAll( this._tableRecordsHolderSelector );

    let rowId: number = 0;
    let rowsNumber: number = tableRowsHolder.length;

    while ( rowId < rowsNumber ) {
      tb = tableRowsHolder[rowId] as HTMLElement;

      tb.addEventListener (
        "scroll",
        ( evt ) => {
          this.onTableScroll( evt );
        }
      );

      rowId++;

    }
  }


}






