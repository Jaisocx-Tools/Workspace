class WorkspaceTreeWalkerPayload {
  static BRANCH_NAME = "branch";
  // the data for the tree walker to walk. can be an array and an object.
  dataset;
  datasetNormalized;
  currentDatasetNormalized;
  data;
  dataNormalized;
  dataName;
  transformedDataset;
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
  branchName;
  jpathData;

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
    this.jpathData = new JPathData();
    this.branchName = WorkspaceTreeWalkerPayload.BRANCH_NAME;
  }
} 


