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
        this.transformedDataset = null;
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
        this.branchName = "";
        this.jpathData = new JPathData_js_1.JPathData();
        this.branchName = WorkspaceTreeWalkerPayload.BRANCH_NAME;
    }
}
exports.WorkspaceTreeWalkerPayload = WorkspaceTreeWalkerPayload;
WorkspaceTreeWalkerPayload.BRANCH_NAME = "branch";
//# sourceMappingURL=WorkspaceTreeWalkerPayload.js.map