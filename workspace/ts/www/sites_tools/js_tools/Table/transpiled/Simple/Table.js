class Table {
    MAX_WIDTH_MOBILE_LOOK_AND_FEEL;
    htmlHolderNodeId;
    htmlHolderNodeSelector;
    htmlHolderNode;
    cssClasses;
    confUrl;
    dataUrl;
    tableConf;
    loadedTableData;
    tableData;
    debug;
    orderByField;
    orderByOrder;
    templateRenderer;



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



    setHtmlHolderNodeId(id) {
        this.htmlHolderNodeId = id;
        this.setHtmlHolderNodeSelector("#" + id);


        return this;
    }



    setHtmlHolderNodeSelector(selector) {
        this.htmlHolderNodeSelector = selector;


        return this;
    }


    // the html node, where inside the table html will be placed.
    getHtmlHolderNodeSelector() {
        return this.htmlHolderNodeSelector;
    }


    // the html rendered the table,
    // this html node class="table" is the first and single html node
    getHtmlTableNodeSelector() {
        return `${this.htmlHolderNodeSelector} .table`;
    }



    setCssClasses(cssClasses) {
        this.cssClasses = cssClasses;


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
                this.tableData = [...tableDataJson];
                this.render();
                this.addWindowResizeEventListener();
                this.addTableClickEventListener();
            });


        return this;
    }



    render() {
        this.renderTable();
        this.applyColumnsWidths();
        this.adjustHeaderPaddingRight();
    }



    renderTable() {
        this.htmlHolderNode = document.querySelector(this.htmlHolderNodeSelector);


        //@ts-ignore
        this.htmlHolderNode.innerHTML = "";
        let headerHtml = this.renderHeader();
        let recordCounter = 0;
        let tableRowsHtml = "<div class=\"table-body\">";

        for (let record of this.tableData) {
            tableRowsHtml += this.renderRecord(record, recordCounter);
            recordCounter++;
        }
        tableRowsHtml += "</div>";


        //@ts-ignore
        this.htmlHolderNode.innerHTML = `<div class="table ${this.cssClasses}">${headerHtml}${tableRowsHtml}</div>`;
    }



    renderHeader() {
        let headerHtml = "<div class=\"table-columns-labels\"><div class=\"table-record\">";
        headerHtml += "<div class=\"table-record-field counter\"><span> </span></div>";

        for (let fieldName in this.tableConf) {
            let fieldConf = this.tableConf[fieldName];
            headerHtml += `<div class="table-record-field" data-fieldname="${fieldName}"><span> ${fieldConf.title} </span></div>`;
        }
        headerHtml += "</div></div>";


        return headerHtml;
    }



    renderRecord(record, recordCounter) {
        let recordHtml = "<div class=\"table-record\">";
        recordHtml += `<div class="table-record-field counter right">
          <span class="label"> </span>
          <span class="text"> ${recordCounter + 1} </span>
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
            recordHtml += `<div class="table-record-field ${align}">
          <span class="label" data-fieldname="${fieldName}"> ${fieldConf.title} </span>
          <span class="text"> ${valueHtml} </span>
        </div>`;
        }
        recordHtml += "</div>";


        return recordHtml;
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
            width
        );


        // TODO: bugsfixes on table sizes in tablet and mobile, too
        if (width > this.MAX_WIDTH_MOBILE_LOOK_AND_FEEL) {
            gridTemplateColumnsValue = this.generateGridTemplateColumnsStyle();
        }
        const tableHeadHtmlElement = document.querySelector(`${this.htmlHolderNodeSelector} .table-record.header`);


        //@ts-ignore
        tableHeadHtmlElement.style.gridTemplateColumns = gridTemplateColumnsValue;
        const tableRowsHtmlElementsCollection = document.querySelectorAll(`${this.htmlHolderNodeSelector} .table-body .table-record`);
        let recordHtmlElement = null;

        for (let i = 0; i < tableRowsHtmlElementsCollection.length; i++) {
            recordHtmlElement = tableRowsHtmlElementsCollection.item(i);
            recordHtmlElement.style.gridTemplateColumns = gridTemplateColumnsValue;
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
        const tableBody = document.querySelector(this.htmlHolderNodeSelector + " .table-body");
        const scrollbarWidth = this.getScrollbarWidth(tableBody);
        const recordHeader = document.querySelector(this.htmlHolderNodeSelector + " .table-record.header");


        //@ts-ignore
        recordHeader.style.paddingRight = scrollbarWidth + "px";
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



    addWindowResizeEventListener() {
        window.addEventListener(
            "resize",
            () => {
                this.applyColumnsWidths();
                this.adjustHeaderPaddingRight();
            }
        );


        return this;
    }



    addTableClickEventListener() {
        const tableNodeSelector = this.getHtmlTableNodeSelector();


        // sort one event listener for entire table holder html node.
        //@ts-ignore
        document.querySelector(tableNodeSelector)
            .addEventListener(
                "click",
                (event) => {
                    this.tableClickEventHandlerSort(event);
                    this.render();
                    this.addTableClickEventListener();
                }
            );


        return this;
    }



    tableClickEventHandlerSort(event) {
        const eventTarget = event.target;
        const parentRowLabel = eventTarget.closest(".table-record.header .table-record-field");

        if (!parentRowLabel) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        this.sort(parentRowLabel.dataset.fieldname);
    }



    sort(columnName) {
        let order = this.orderByOrder;

        if ((this.orderByField === columnName)) {
            order = (this.orderByOrder === "ASC") ? "DESC" : "ASC";
        }
        else {
            order = "ASC";
        }
        this.sortBy(columnName, order);
    }



    sortBy(field, order) {

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
                })
        ];
    }
}


