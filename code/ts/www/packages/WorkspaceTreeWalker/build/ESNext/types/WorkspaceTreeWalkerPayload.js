export class WorkspaceTreeWalkerPayload {
    // the data for the tree walker to walk
    flatDataset;
    flatDatasetNormalized;
    currentGroupNormalized;
    flatDataElem;
    flatDataElemNormalized;
    flatDataElemKey;
    // the data, used to repeat iterations, while waliking one treeDataElem
    payloadRepeatData;
    payloadDataElem;
    repeatTimes;
    step;
    parentId;
    id;
    parentIdForNestedNodes;
    parentIdProperyName;
    idProperyName;
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
    }
}
//# sourceMappingURL=WorkspaceTreeWalkerPayload.js.map