import { TreeConstants } from "./TreeConstants.js";
import { TreeConf } from "./TreeConf.js";



export class TreeAdapter {
  conf: TreeConf;

  nodesWithIcons: boolean;

  nodesOpenedMode: number;

  dataTypesCssClassesEnabled: boolean;



  constructor() {
    this.conf = new TreeConf();
    this.nodesWithIcons = TreeConstants.Defaults.nodesWithIcons;
    this.nodesOpenedMode = TreeConstants.Defaults.nodesOpenedMode;
    this.dataTypesCssClassesEnabled = TreeConstants.Defaults.dataTypesCssClassesEnabled;
  }
}
