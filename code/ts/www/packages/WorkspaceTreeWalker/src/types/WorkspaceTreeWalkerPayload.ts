export class WorkspaceTreeWalkerPayload {

  // the data for the tree walker to walk
  public flatDataset: any;
  public flatDatasetNormalized: any;
  public currentGroupNormalized: any;
  public flatDataElem: any;
  public flatDataElemNormalized: any;
  public flatDataElemKey: any;


  // the data, used to repeat iterations, while waliking one treeDataElem
  public payloadRepeatData: any;
  public payloadDataElem: any;
  public repeatTimes: number;
  public step: number;

  
  public parentId: any;
  public id: any;
  public parentIdForNestedNodes: string;
  public parentIdProperyName: string;
  public idProperyName: string;


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





