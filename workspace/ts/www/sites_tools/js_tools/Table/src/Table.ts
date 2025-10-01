import { TableInterface } from "./TableInterface.js";
import { TemplateRenderer } from "@jaisocx/template-renderer";

import "@table-MediaAndStyles/table-styles-main-webpack.css";



export class Table {

  MAX_WIDTH_MOBILE_LOOK_AND_FEEL: number;

  htmlHolderNodeId: string;
  htmlHolderNodeSelector: string;
  htmlHolderNode: HTMLElement|null;

  cssClasses: string;

  confUrl: string;
  dataUrl: string;

  tableConf: any;
  loadedTableData: any;
  tableData: any;

  debug: boolean;

  orderByField: string;
  orderByOrder: string;

  templateRenderer: TemplateRenderer;



  constructor() {
    this.MAX_WIDTH_MOBILE_LOOK_AND_FEEL = 830;

    this.debug = true;

    this.htmlHolderNodeId = "";
    this.htmlHolderNodeSelector = "";
    this.htmlHolderNode = null;

    this.cssClasses = "";

    this.confUrl = "";
    this.dataUrl = "";

    this.tableConf = null;
    this.loadedTableData = null;
    this.tableData = null;

    this.orderByField = "";
    this.orderByOrder = "ASC";

    this.templateRenderer = new TemplateRenderer();


    // template renderer without replace!
    //     this.templateRenderer
    //       .setTemplate(
    //         `
    // <div class="{{ cssClasses }}">
    //   <div class="table-columns-labels">{{ tableColumnsLabels }}</div>
    //   <div class="table-records">{{ tableRecords }}</div>
    // </div>
    //         `
    //       )
    //       .setData(
    //         {
    //           "cssClasses": cssClasses,
    //           "tableColumnsLabels": tableColumnsLabels,
    //           "tableRecords": tableRecords
    //         }
    //       )
    //       .render();
  }



  setHtmlHolderNodeId( id: string ): Table {
    this.htmlHolderNodeId = id;

    this.setHtmlHolderNodeSelector ( "#" + id );


    return this;
  }



  setHtmlHolderNodeSelector( selector: string ): Table {
    this.htmlHolderNodeSelector = selector;


    return this;
  }


  // the html node, where inside the table html will be placed.
  getHtmlHolderNodeSelector(): string {
    return this.htmlHolderNodeSelector;
  }


  // the html rendered the table,
  // this html node class="table" is the first and single html node
  getHtmlTableNodeSelector(): string {
    return `${this.htmlHolderNodeSelector} .table`;
  }



  setCssClasses( cssClasses: string ): Table {
    this.cssClasses = cssClasses;


    return this;
  }



  setConfUrl( url: string ): Table {
    this.confUrl = url;


    return this;
  }



  setDataUrl( url: string ): Table {
    this.dataUrl = url;


    return this;
  }



  setMobileLookAndFeelMaxWidth( width: number ): Table {
    this.MAX_WIDTH_MOBILE_LOOK_AND_FEEL = width;


    return this;
  }



  load(): Table {
    fetch(this.confUrl)
      .then(responseConf => responseConf.json())
      .then(tableConf => {
        this.tableConf = tableConf;


        return fetch(this.dataUrl);
      })
      .then(responseTableData => responseTableData.json())
      .then(
        tableDataJson => {
          this.loadedTableData = tableDataJson;
          this.tableData = [...tableDataJson];
          this.render();
          this.addWindowResizeEventListener();
          this.addTableClickEventListener();
        }
      );


    return this;
  }



  render(): undefined {
    this.renderTable();
    this.applyColumnsWidths();
    this.adjustHeaderPaddingRight();
  }



  renderTable(): undefined {
    this.htmlHolderNode = document.querySelector ( this.htmlHolderNodeSelector );


    //@ts-ignore
    this.htmlHolderNode.innerHTML = "";

    let headerHtml: string = this.renderHeader();

    let recordCounter: number = 0;
    let tableRowsHtml: string = "<div class=\"table-body\">";

    for (let record of this.tableData) {
      tableRowsHtml += this.renderRecord (
        record,
        recordCounter);
      recordCounter++;
    }
    tableRowsHtml += "</div>";


    //@ts-ignore
    this.htmlHolderNode.innerHTML = `<div class="table ${this.cssClasses}">${headerHtml}${tableRowsHtml}</div>`;

  }



  renderHeader(): string {
    let headerHtml: string = "<div class=\"table-columns-labels\"><div class=\"table-record\">";
    headerHtml += "<div class=\"table-record-field counter\"><span> </span></div>";

    for (let fieldName in this.tableConf) {
      let fieldConf: any = this.tableConf[fieldName];
      headerHtml += `<div class="table-record-field" data-fieldname="${fieldName}"><span> ${fieldConf.title} </span></div>`;
    }

    headerHtml += "</div></div>";


    return headerHtml;
  }



  renderRecord (
    record: any,
    recordCounter: number
  ): string {
    let recordHtml: string = "<div class=\"table-record\">";

    recordHtml += `<div class="table-record-field counter right">
          <span class="label"> </span>
          <span class="text"> ${recordCounter + 1} </span>
        </div>`;

    for (let fieldName in this.tableConf) {
      const fieldConf: any = this.tableConf[fieldName];

      let align: string = fieldConf.align;

      if (!align) {
        align = "left";
      }

      let valueHtml: string = "";

      if (fieldConf.type === "image") {
        valueHtml = `<img src="${record[fieldName]}" alt="image"/>`;

      } else {
        valueHtml = record[fieldName];
      }

      recordHtml += `<div class="table-record-field ${align}">
          <span class="label" data-fieldname="${fieldName}"> ${fieldConf.title} </span>
          <span class="text"> ${valueHtml} </span>
        </div>`;
    }

    recordHtml += "</div>";


    return recordHtml;
  }



  applyColumnsWidths(): undefined {
    let gridTemplateColumnsValue: string = "100%";

    if (!window.matchMedia(`(max-width: ${this.MAX_WIDTH_MOBILE_LOOK_AND_FEEL}px)`).matches) {
      gridTemplateColumnsValue = this.generateGridTemplateColumnsStyle();
    }


    //@ts-ignore
    let width: number = this.htmlHolderNode.clientWidth;
    width = Math.min(
      document.body.clientWidth,
      width
    );


    // TODO: bugsfixes on table sizes in tablet and mobile, too
    if (width > this.MAX_WIDTH_MOBILE_LOOK_AND_FEEL) {
      gridTemplateColumnsValue = this.generateGridTemplateColumnsStyle();
    }

    const tableHeadHtmlElement: HTMLElement|null = document.querySelector(`${this.htmlHolderNodeSelector} .table-record.header`);


    //@ts-ignore
    tableHeadHtmlElement.style.gridTemplateColumns = gridTemplateColumnsValue;

    const tableRowsHtmlElementsCollection = document.querySelectorAll(`${this.htmlHolderNodeSelector} .table-body .table-record`);
    let recordHtmlElement: HTMLElement|null = null;

    for (let i=0; i < tableRowsHtmlElementsCollection.length; i++) {
      recordHtmlElement = tableRowsHtmlElementsCollection.item(i) as HTMLElement;
      recordHtmlElement.style.gridTemplateColumns = gridTemplateColumnsValue;
    }
  }



  generateGridTemplateColumnsStyle(): string {
    let gridTemplateColumns: string = "3rem ";

    for (let fieldName in this.tableConf) {
      let fieldConf: any = this.tableConf[fieldName];
      gridTemplateColumns += fieldConf.width + " ";
    }


    return gridTemplateColumns;
  }



  adjustHeaderPaddingRight(): undefined {
    const tableBody: HTMLElement|null = document.querySelector(this.htmlHolderNodeSelector + " .table-body");
    const scrollbarWidth: number = this.getScrollbarWidth(tableBody);
    const recordHeader: HTMLElement|null = document.querySelector(this.htmlHolderNodeSelector + " .table-record.header");


    //@ts-ignore
    recordHeader.style.paddingRight = scrollbarWidth + "px";
  }



  getScrollbarWidth( element: HTMLElement|null ): number {

    // The total width of the element including the scrollbar
    //@ts-ignore
    const totalWidth: number = element.offsetWidth;


    // The width of the element without the scrollbar
    //@ts-ignore
    const clientWidth: number = element.clientWidth;


    // The scrollbar width is the difference
    return totalWidth - clientWidth;
  }



  addWindowResizeEventListener(): Table {
    window.addEventListener (
      "resize",
      () => {
        this.applyColumnsWidths();
        this.adjustHeaderPaddingRight();
      }
    );


    return this;
  }



  addTableClickEventListener (): Table {
    const tableNodeSelector: string = this.getHtmlTableNodeSelector();


    // sort one event listener for entire table holder html node.
    //@ts-ignore
    document.querySelector( tableNodeSelector )
      .addEventListener (
        "click",
        ( event: Event ) => {
          this.tableClickEventHandlerSort( event );
          this.render();
          this.addTableClickEventListener();
        }
      );


    return this;
  }



  tableClickEventHandlerSort ( event: Event ): undefined {
    const eventTarget: HTMLElement = event.target as HTMLElement;
    const parentRowLabel: HTMLElement|null = eventTarget.closest(".table-record.header .table-record-field");

    if ( !parentRowLabel ) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    this.sort ( parentRowLabel.dataset.fieldname );
  }



  sort ( columnName: string|undefined ): undefined {
    let order: string = this.orderByOrder;

    if (
      ( this.orderByField === columnName )
    ) {
      order = ( this.orderByOrder === "ASC" ) ? "DESC" : "ASC";
    } else {
      order = "ASC";
    }

    this.sortBy (
      columnName,
      order
    );

  }



  sortBy (
    field: string|undefined,
    order: string
  ): undefined {

    if (!field) {
      return;
    }

    this.orderByField = field;
    this.orderByOrder = order;

    const numOrder: number = (order === "ASC") ? 1 : (-1);

    this.tableData = [
      ...this.loadedTableData
        .sort (
          (
            a: any,
            b: any
          ) => {
            const fieldValueA: any = a[field];
            const fieldValueB: any = b[field];

            if (fieldValueA > fieldValueB) {
              return numOrder;

            } else if (fieldValueA < fieldValueB) {
              return -numOrder;

            } else {
              return 0;

            }
          })
    ];
  }
}

