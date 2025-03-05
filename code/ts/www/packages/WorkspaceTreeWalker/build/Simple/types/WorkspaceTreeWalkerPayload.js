class WorkspaceTreeWalkerPayload {
  static BRANCH_NODES_NAME = "branchNodes";
  // the data for the tree walker to walk. can be an array and an object.
  dataset;
  datasetNormalized;
  currentDatasetNormalized;
  data;
  dataNormalized;
  dataName;
  // the data, used for more iterations, while walk one dataElem
  iterationsDataset;
  iterationsDatasetNormalized;
  iterationsCurrentDatasetNormalized;
  iterationsNumber;
  iterationsData;
  iterationsDataNormalized;
  iterationsDataName;
  holderId;
  id;
  holderIdForNodes;
  nameHolderId;
  nameId;
  branchNodesName;
  jpathData;

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
    this.jpathData = new JPathData();
    this.branchNodesName = WorkspaceTreeWalkerPayload.BRANCH_NODES_NAME;
  }
}
//# sourceMappingURL=WorkspaceTreeWalkerPayload.js.map