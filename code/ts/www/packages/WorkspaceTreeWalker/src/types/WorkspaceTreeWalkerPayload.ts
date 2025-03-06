import { JPathData } from "./JPathData.js";


export class WorkspaceTreeWalkerPayload {

  static BRANCH_NAME: string = "branch";


  // the data for the tree walker to walk. can be an array and an object.
  public dataset: any;
  public datasetNormalized: any[];
  public currentDatasetNormalized: any[];
  public data: any;
  public dataNormalized: any;
  public dataName: any;


  public transformedDataset: any;


  // the data, used for more iterations, while walk one dataElem
  public iterationsDataset: any;
  public iterationsDatasetNormalized: any[];
  public iterationsCurrentDatasetNormalized: any[];
  public iterationsNumber: number;
  public iterationsData: any;
  public iterationsDataNormalized: any;
  public iterationsDataName: string;
  

  public holderId: string;
  public id: string;
  public holderIdForNodes: string;
  public nameHolderId: string;
  public nameId: string;
  public branchName: string;


  public jpathData: JPathData;


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





