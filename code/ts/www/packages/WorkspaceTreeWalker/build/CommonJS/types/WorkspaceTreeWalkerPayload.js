"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceTreeWalkerPayload = void 0;
const JPathData_js_1 = require("./JPathData.js");
class WorkspaceTreeWalkerPayload {
    constructor() {
        this.dataset = null;
        this.datasetNormalized = [];
        this.currentDatasetNormalized = [];
        this.data = null;
        this.dataNormalized = null;
        this.dataName = null;
        this.iterationsDataset = null;
        this.iterationsDatasetNormalized = [];
        this.iterationsCurrentDatasetNormalized = [];
        this.iterationsNumber = 0;
        this.iterationsData = {};
        this.iterationsDataNormalized = {};
        this.iterationsDataName = "";
        this.holderId = "";
        this.id = "";
        this.holderIdForNodes = "";
        this.nameHolderId = "";
        this.nameId = "";
        this.branchNodesName = "";
        this.jpathData = new JPathData_js_1.JPathData();
        this.branchNodesName = WorkspaceTreeWalkerPayload.BRANCH_NODES_NAME;
    }
}
exports.WorkspaceTreeWalkerPayload = WorkspaceTreeWalkerPayload;
WorkspaceTreeWalkerPayload.BRANCH_NODES_NAME = "branchNodes";
//# sourceMappingURL=WorkspaceTreeWalkerPayload.js.map