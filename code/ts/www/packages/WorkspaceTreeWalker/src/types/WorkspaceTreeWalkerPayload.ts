import { JPathData } from "./JPathData.js";

export class WorkspaceTreeWalkerPayload {

  static SUBTREE_PROP: string = "subtree";

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

  public jpathData: JPathData;
  public subtreePropertyName: string;


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

    this.jpathData = new JPathData();
    this.subtreePropertyName = WorkspaceTreeWalkerPayload.SUBTREE_PROP;

  }
}





