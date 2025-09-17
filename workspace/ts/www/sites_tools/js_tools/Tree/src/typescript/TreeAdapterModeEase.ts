import { TreeAdapter } from "./TreeAdapter.js";
import { TreeConstants } from "./TreeConstants.js";
import { IRenderTemplateRendererData, ITreeAdapter } from "./Types.js";



export class TreeAdapterModeEase extends TreeAdapter implements ITreeAdapter {

  getSubtreeNodeToRender(
    loopPropertyValue: any,
    loopPropertyKey: any
  ): any {
    const subtreeJsonNode: object = { [loopPropertyKey]: loopPropertyValue };


    return subtreeJsonNode;
  }



  getDataForRendering(
    node: any,
    flatNodeClone: any,
    dataTypeString: any,
    nodeHasSubtree: boolean
  ): IRenderTemplateRendererData {
    const key: any = Object.keys(node)[0];
    const value: any = node[key] ?? "";

    let openButtonClassName: any = "";
    let labelText: any = `"${key}"`;

    if (!nodeHasSubtree) {
      openButtonClassName = TreeConstants.TreeCssClassNames.CLASS_WITHOUT_SUBTREE;
      const serializedJsonValue: any = this.escapeHTMLForAttribute(JSON.stringify(value));
      labelText = `"${key}": ${serializedJsonValue}`;
    } else if (this.nodesOpenedMode === TreeConstants.NodesOpenedMode.ALL_SHOWN) {
      openButtonClassName = TreeConstants.TreeCssClassNames.CLASS_OPENED;
    }

    const cssClasses: any = (this.dataTypesCssClassesEnabled === true) ? this.getTreeNodeCssClasses(
      dataTypeString,
      value
    ) : "";

    const dataForRendering: IRenderTemplateRendererData = {
      iconSrc: "",
      iconShowClassName: this.nodesWithIcons ? "icon-show mode-ease" : "icon-hide",
      labelText,
      hyperlink: "javascript: void(0);",
      cssClasses,
      dataId: "",
      dataHolderId: "",
      dataOrder: "",
      dataJson: this.escapeHTMLForAttribute(JSON.stringify(flatNodeClone)),
      openButtonStateClassName: openButtonClassName,
      hasSubtree: nodeHasSubtree
    };


    return dataForRendering;
  }



  getTreeNodeCssClasses__dataTypesCssClassesEnabled(
    _dataTypeString: any,
    _node: any
  ): any {
    const cssClassesArray: any[] = [
      ("class=\""),
      (TreeConstants.TreeCssClassNames.PREFIX__CLASS_DATATYPE),
      (_dataTypeString),
      ("\"")
    ];

    const cssClasses: any = cssClassesArray.join("");


    return cssClasses;
  }



  getTreeNodeCssClasses__dataTypesCssClassesDisabled(
    _dataTypeString: any,
    _node: any
  ): any {
    throw new Error("Method not implemented.");
  }


  // dummy placeholders
  escapeHTMLForAttribute(_arg: any): any {
    throw new Error("Method not implemented.");
  }



  getTreeNodeCssClasses(
    _dataTypeString: any,
    _value: any
  ): any {
    throw new Error("Method not implemented.");
  }


  // finish dummy placeholders
}
