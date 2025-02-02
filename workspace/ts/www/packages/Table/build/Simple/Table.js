class Table {
  MAX_WIDTH_MOBILE_LOOK_AND_FEEL;
  htmlHolderNodeId;
  htmlHolderNodeSelector;
  htmlHolderNode;
  confUrl;
  dataUrl;
  tableConf;
  loadedTableData;
  tableData;
  debug;
  orderByField;
  orderByOrder;

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

  setHtmlHolderNodeId(id) {
    this.htmlHolderNodeId = id;
    this.htmlHolderNode = document.getElementById(this.htmlHolderNodeId);
    this.assignEventsHandlers();

    return this;
  }

  setHtmlHolderNodeSelector(selector) {
    this.htmlHolderNodeSelector = selector;

    return this;
  }

  setConfUrl(url) {
    this.confUrl = url;

    return this;
  }

  setDataUrl(url) {
    this.dataUrl = url;

    return this;
  }

  setMobileLookAndFeelMaxWidth(width) {
    this.MAX_WIDTH_MOBILE_LOOK_AND_FEEL = width;

    return this;
  }

  assignEventsHandlers() {
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
        const eventTarget = event.target;
        const parentRowLabel = eventTarget.closest(".table-row-field");

        if (!parentRowLabel || !eventTarget.classList.contains("label")) {
          return;
        }

        event.preventDefault();
        this.orderByToggle(eventTarget.dataset.fieldname);
      });

    return this;
  }

  load() {
    fetch(this.confUrl)
      .then(responseConf => responseConf.json())
      .then(tableConf => {
        this.tableConf = tableConf;

        return fetch(this.dataUrl);
      })
      .then(responseTableData => responseTableData.json())
      .then(tableDataJson => {
        this.loadedTableData = tableDataJson;
        this.tableData = [...tableDataJson,];
        this.renderTableAndAdjustSizes();
      });

    return this;
  }

  renderTableAndAdjustSizes() {
    this.renderTable();
    this.applyColumnsWidths();
    this.adjustHeaderPaddingRight();
  }

  renderTable() {
    //@ts-ignore
    this.htmlHolderNode.innerHTML = "";
    let headerHtml = this.renderHeader();
    let rowCounter = 0;
    let tableRowsHtml = "<div class=\"table-body\">";

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
    const tableHeaderCells = document.querySelectorAll(`#${this.htmlHolderNodeId} .table-row.header .table-row-field`);
    tableHeaderCells
      .forEach((cell) => {
        cell.addEventListener(
          "click", 
          (evt) => {
            const eventTarget = evt.target;
            this.orderByToggle(eventTarget.dataset.fieldname);
          });
      });
  }

  renderHeader() {
    let headerHtml = "<div class=\"table-row header\">";
    headerHtml += "<div class=\"table-row-field counter\"><span> </span></div>";

    for (let fieldName in this.tableConf) {
      let fieldConf = this.tableConf[fieldName];
      headerHtml += `<div class="table-row-field" data-fieldname="${fieldName}"><span> ${fieldConf.title} </span></div>`;
    }

    headerHtml += "</div>";

    return headerHtml;
  }

  renderRecord(
    record, 
    rowCounter) {
    let rowHtml = "<div class=\"table-row\">";
    rowHtml += `<div class="table-row-field counter right">
          <span class="label"> </span>
          <span class="text"> ${rowCounter + 1} </span>
        </div>`;

    for (let fieldName in this.tableConf) {
      const fieldConf = this.tableConf[fieldName];
      let align = fieldConf.align;

      if (!align) {
        align = "left";
      }

      let valueHtml = "";

      if (fieldConf.type === "image") {
        valueHtml = `<img src="${record[fieldName]}" alt="image"/>`;
      }
      else {
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

  applyColumnsWidths() {
    let gridTemplateColumnsValue = "100%";

    if (!window.matchMedia(`(max-width: ${this.MAX_WIDTH_MOBILE_LOOK_AND_FEEL}px)`).matches) {
      gridTemplateColumnsValue = this.generateGridTemplateColumnsStyle();
    }
    //@ts-ignore
    let width = this.htmlHolderNode.clientWidth;
    width = Math.min(
      document.body.clientWidth, 
      width);
    const mediaStylesheetLittle = document.getElementById("tableStylesheetLittle");

    if (width > this.MAX_WIDTH_MOBILE_LOOK_AND_FEEL) {
      gridTemplateColumnsValue = this.generateGridTemplateColumnsStyle();
      //@ts-ignore
      mediaStylesheetLittle.disabled = true;
    }
    else {
      //@ts-ignore
      mediaStylesheetLittle.disabled = false;
    }

    const tableHeadHtmlElement = document.querySelector(`#${this.htmlHolderNodeId} .table-row.header`);
    //@ts-ignore
    tableHeadHtmlElement.style.gridTemplateColumns = gridTemplateColumnsValue;
    const tableRowsHtmlElementsCollection = document.querySelectorAll(`#${this.htmlHolderNodeId} .table-body .table-row`);
    let rowHtmlElement = null;

    for (let i = 0; i < tableRowsHtmlElementsCollection.length; i++) {
      rowHtmlElement = tableRowsHtmlElementsCollection.item(i);
      rowHtmlElement.style.gridTemplateColumns = gridTemplateColumnsValue;
    }
  }

  generateGridTemplateColumnsStyle() {
    let gridTemplateColumns = "3rem ";

    for (let fieldName in this.tableConf) {
      let fieldConf = this.tableConf[fieldName];
      gridTemplateColumns += fieldConf.width + " ";
    }

    return gridTemplateColumns;
  }

  adjustHeaderPaddingRight() {
    const tableBody = document.querySelector("#" + this.htmlHolderNodeId + " .table-body");
    const scrollbarWidth = this.getScrollbarWidth(tableBody);
    const rowHeader = document.querySelector("#" + this.htmlHolderNodeId + " .table-row.header");
    //@ts-ignore
    rowHeader.style.paddingRight = scrollbarWidth + "px";
  }

  getScrollbarWidth(element) {
    // The total width of the element including the scrollbar
    //@ts-ignore
    const totalWidth = element.offsetWidth;
    // The width of the element without the scrollbar
    //@ts-ignore
    const clientWidth = element.clientWidth;
    // The scrollbar width is the difference
    return totalWidth - clientWidth;
  }

  orderByToggle(columnName) {
    let order = "ASC";

    if (this.orderByField === columnName) {
      order = (this.orderByOrder === "ASC") ? "DESC" : "ASC";
    }

    this.orderBy(
      columnName, 
      order);
  }

  orderBy(
    field, 
    order) {
    if (!field) {
      return;
    }

    this.orderByField = field;
    this.orderByOrder = order;
    const numOrder = (order === "ASC") ? 1 : (-1);
    this.tableData = [
      ...this.loadedTableData
        .sort((a, b) => {
          const fieldValueA = a[field];
          const fieldValueB = b[field];

          if (fieldValueA > fieldValueB) {
            return numOrder;
          }
          else if (fieldValueA < fieldValueB) {
            return -numOrder;
          }
          else {
            return 0;
          }
        }),
    ];
    this.renderTableAndAdjustSizes();
  }
}
//# sourceMappingURL=Table.js.map