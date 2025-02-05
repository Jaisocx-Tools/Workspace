"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleTable = void 0;
const table_1 = require("@jaisocx/table");
// in develpment, not ready
class ExampleTable {
    constructor(id, url) {
        this.holderId = id;
        this.url = url;
        this.render(id, url);
    }
    render(id, url) {
        const table = new table_1.Table();
    }
}
exports.ExampleTable = ExampleTable;
//# sourceMappingURL=ExampleTable.js.map