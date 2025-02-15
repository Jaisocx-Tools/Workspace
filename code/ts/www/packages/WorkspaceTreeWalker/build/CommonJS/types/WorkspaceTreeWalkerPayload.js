"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceTreeWalkerPayload = void 0;
const JPathData_js_1 = require("./JPathData.js");
class WorkspaceTreeWalkerPayload {
    constructor() {
        this.flatDataset = null;
        this.flatDatasetNormalized = null;
        this.currentGroupNormalized = null;
        this.flatDataElem = null;
        this.flatDataElemNormalized = null;
        this.flatDataElemKey = null;
        this.payloadRepeatData = null;
        this.payloadDataElem = null;
        this.repeatTimes = 0;
        this.step = 0;
        this.parentId = "";
        this.id = "";
        this.parentIdForNestedNodes = "";
        this.parentIdProperyName = "";
        this.idProperyName = "";
        this.jpathData = new JPathData_js_1.JPathData();
        this.subtreePropertyName = WorkspaceTreeWalkerPayload.SUBTREE_PROP;
    }
}
exports.WorkspaceTreeWalkerPayload = WorkspaceTreeWalkerPayload;
WorkspaceTreeWalkerPayload.SUBTREE_PROP = "subtree";
//# sourceMappingURL=WorkspaceTreeWalkerPayload.js.map