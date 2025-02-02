import "@table-assets/table-styles-main-webpack.css";

export class Table {

  MAX_WIDTH_MOBILE_LOOK_AND_FEEL: number;

  htmlHolderNodeId: string;
  htmlHolderNodeSelector: string;
  htmlHolderNode: HTMLElement|null;

  confUrl: string;
  dataUrl: string;

  tableConf: any;
  loadedTableData: any;
  tableData: any;

  debug: boolean;

  orderByField: string;
  orderByOrder: string;

  constructor() {
    this.MAX_WIDTH_MOBILE_LOOK_AND_FEEL = 830;

    this.debug = true;

    this.htmlHolderNodeId = "";
    this.htmlHolderNodeSelector = "";
    this.htmlHolderNode = null;

    this.confUrl = "";
    this.dataUrl = "";

    this.tableConf = null;
    this.loadedTableData = null;
    this.tableData = null;

    this.orderByField = "";
    this.orderByOrder = "ASC";
  }

  setHtmlHolderNodeId( id: string ): Table {
    this.htmlHolderNodeId = id;
    this.htmlHolderNode = document.getElementById(this.htmlHolderNodeId);
    this.assignEventsHandlers();

    return this;
  }

  setHtmlHolderNodeSelector( selector: string ): Table {
    this.htmlHolderNodeSelector = selector;

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

  assignEventsHandlers(): Table {

    window.addEventListener(
      "resize", 
      () => {
        this.applyColumnsWidths();
        this.adjustHeaderPaddingRight();
      });

    //@ts-ignore
    this.htmlHolderNode.addEventListener(
      "click", 
      event => {
        const eventTarget: HTMLElement = event.target as HTMLElement;
        const parentRowLabel: HTMLElement|null = eventTarget.closest(".table-row-field");

        if (!parentRowLabel || !eventTarget.classList.contains("label")) {
          return;
        }

        event.preventDefault();

        this.orderByToggle(eventTarget.dataset.fieldname);
      });

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
          this.tableData = [...tableDataJson,];
          this.renderTableAndAdjustSizes();
        }
      );

    return this;
  }

  renderTableAndAdjustSizes(): undefined {
    this.renderTable();
    this.applyColumnsWidths();
    this.adjustHeaderPaddingRight();
  }

  renderTable(): undefined {

    //@ts-ignore
    this.htmlHolderNode.innerHTML = "";

    let headerHtml: string = this.renderHeader();

    let rowCounter: number = 0;
    let tableRowsHtml: string = "<div class=\"table-body\">";
    for (let record of this.tableData) {
      tableRowsHtml += this.renderRecord(
        record, 
        rowCounter);
      rowCounter++;
    }
    tableRowsHtml += "</div>";

    //@ts-ignore
    this.htmlHolderNode.innerHTML = headerHtml + tableRowsHtml;

    this.addEventListenersOrderBy();

  }

  addEventListenersOrderBy() {
    const tableHeaderCells: NodeListOf<Element> = document.querySelectorAll(`#${this.htmlHolderNodeId} .table-row.header .table-row-field`);
    tableHeaderCells
      .forEach(
        ( cell: Element ) => {

          cell.addEventListener(
            "click", 
            ( evt: Event ) => {
              const eventTarget: HTMLElement = evt.target as HTMLElement;
              this.orderByToggle(eventTarget.dataset.fieldname);
            });

        });
  }

  renderHeader(): string {

    let headerHtml: string = "<div class=\"table-row header\">";
    headerHtml += "<div class=\"table-row-field counter\"><span> </span></div>";

    for (let fieldName in this.tableConf) {
      let fieldConf: any = this.tableConf[fieldName];
      headerHtml += `<div class="table-row-field" data-fieldname="${fieldName}"><span> ${fieldConf.title} </span></div>`;
    }

    headerHtml += "</div>";

    return headerHtml;
  }

  renderRecord ( 
    record: any, 
    rowCounter: number 
  ): string {

    let rowHtml: string = "<div class=\"table-row\">";

    rowHtml += `<div class="table-row-field counter right">
          <span class="label"> </span>
          <span class="text"> ${rowCounter + 1} </span>
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

      rowHtml += `<div class="table-row-field ${align}">
          <span class="label" data-fieldname="${fieldName}"> ${fieldConf.title} </span>
          <span class="text"> ${valueHtml} </span>
        </div>`;
    }
  
    rowHtml += "</div>";

    return rowHtml;
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
      width);

    const mediaStylesheetLittle: HTMLElement|null = document.getElementById("tableStylesheetLittle");

    if (width > this.MAX_WIDTH_MOBILE_LOOK_AND_FEEL) {
      gridTemplateColumnsValue = this.generateGridTemplateColumnsStyle();
      //@ts-ignore
      mediaStylesheetLittle.disabled = true;
    } else {
      //@ts-ignore
      mediaStylesheetLittle.disabled = false;
    }

    const tableHeadHtmlElement: HTMLElement|null = document.querySelector(`#${this.htmlHolderNodeId} .table-row.header`);
    //@ts-ignore
    tableHeadHtmlElement.style.gridTemplateColumns = gridTemplateColumnsValue;

    const tableRowsHtmlElementsCollection = document.querySelectorAll(`#${this.htmlHolderNodeId} .table-body .table-row`);
    let rowHtmlElement: HTMLElement|null = null;
    for (let i=0; i < tableRowsHtmlElementsCollection.length; i++) {
      rowHtmlElement = tableRowsHtmlElementsCollection.item(i) as HTMLElement;
      rowHtmlElement.style.gridTemplateColumns = gridTemplateColumnsValue;
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
    const tableBody: HTMLElement|null = document.querySelector("#" + this.htmlHolderNodeId + " .table-body");
    const scrollbarWidth: number = this.getScrollbarWidth(tableBody);
    const rowHeader: HTMLElement|null = document.querySelector("#" + this.htmlHolderNodeId + " .table-row.header");
    //@ts-ignore
    rowHeader.style.paddingRight = scrollbarWidth + "px";
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

  orderByToggle( columnName: string|undefined ): undefined {
    
    let order: string = "ASC";
    
    if (this.orderByField === columnName) {
      order = (this.orderByOrder === "ASC") ? "DESC" : "ASC";
    }

    this.orderBy ( 
      columnName, 
      order
    );

  }

  orderBy (
    field: string|undefined, 
    order: string
  ): undefined {

    if (!field) {
      return;
    }

    this.orderByField = field;
    this.orderByOrder = order;

    const numOrder = (order === "ASC") ? 1 : (-1);

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
          }),
    ];

    this.renderTableAndAdjustSizes();
  }
}

