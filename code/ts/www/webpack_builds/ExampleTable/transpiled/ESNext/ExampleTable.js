import { Table } from "@jaisocx/table";
// in develpment, not ready
export class ExampleTable {
    holderId;
    url;
    constructor(id, url) {
        this.holderId = id;
        this.url = url;
        this.render(id, url);
    }
    render(id, url) {
        const table = new Table();
    }
}
//# sourceMappingURL=ExampleTable.js.map