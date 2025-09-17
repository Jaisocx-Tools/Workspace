import {
  ImprovedRenderEventEmitter, EventHandlerReturnValue
} from "@jaisocx/event-emitter";

import {
  ITreeRenderRetValue, IRenderTemplateRendererData
} from "./Types.js";

import { TreeConf } from "./TreeConf.js";


// Tree main class
export interface TreeInterface extends ImprovedRenderEventEmitter {

  setDebug(debug: boolean): TreeInterface;
  setNodesWithIcons(withIcons: boolean): TreeInterface
  setNodesOpenedMode(openedMode: number): TreeInterface;
  setUrl(url: any|null): TreeInterface;
  setMainHtmlNodeId(mainHtmlNodeId: any): TreeInterface;
  setConf(conf: TreeConf): TreeInterface;
  setModifiable(isModifiable: boolean): TreeInterface;
  setRenderingMode(mode: number): TreeInterface;
  setDataTypesCssClassesEnabled(dataTypesCssEnabled: boolean): TreeInterface;
  load(url: any|null): TreeInterface;
  adaptRenderingModeSubcalls(): void;
  reRender(): TreeInterface;
  render(nodes: any): TreeInterface;



  checkDataNodeSubtree(
    node: any
  ): {
      isArray: number,
      subtreeNodeDataType: number,
      subtreeNodeDataTypeString: any,
      hasSubtree: boolean,
      subtreeJsonNodes: any,
      objectKeys: any[]|null
    };



  renderSubtree(
    isArray: number,
    subtreeNodes: any,
    flatNodeHolderClone: any,
    objectKeys: any[]|null,
    subtreeHtmlHolder: HTMLElement
  ): number;



  renderSubtreeCallback(
    _isArray: number,
    loopCounter: number,
    loopPropertyValue: any,
    loopPropertyKey: any,
    _arrayOrObject: any,
    previousCallbackResult: number|null,
    callbackPayload: any
  ): number;



  renderOneTreeNode(
    node: any,
    nodePosition: number,
    nodeKey: any,
    flatNodeHolderClone: any,
    holder: HTMLElement
  ): ITreeRenderRetValue;


  // TEMPORARY IMPL TO KEEP POINTERS TO JSON DATA NODES IN HTML TREE NODES IN HTML NODE DATA ATTRIBUTES
  updateDataNodeIdAndPath(
    node: any,
    nodePosition: number,
    nodeKey: any,
    flatNodeHolderClone: any,
    _holder: HTMLElement
  ): any;



  getTreeDataByJPath ( jPathArray: any[] ): any;


  // ADAPTIVE PLACEHOLDERS
  getSubtreeNodeToRender(
    _loopPropertyValue: any,
    _loopPropertyKey: any
  ): any;



  getDataForRendering(
    _node: any,
    _flatNodeClone: any,
    _dataTypeString: any,
    _hasSubtree: boolean
  ): IRenderTemplateRendererData;



  getTreeNodeCssClasses(
    _dataType: any,
    _node: any
  ): any;


  // FINISH BLOCK ADAPTIVE PLACEHOLDERS
  // EVENTS BLOCK
  addJSTreeEventListener (
    eventName: any,
    eventHandler: (eventName: any, payload: any) => EventHandlerReturnValue|null|undefined|void
  ): TreeInterface;


  // the predefined events handlers
  addJSTreeEventListeners(): TreeInterface;


  // here are set the JsTree event handlers actions, always needed, to reuse always in every JsTreeDomEventHndler.
  initializeCustomJsTreeImprovedEventHandler (
    jsTreeEventName: any,
    customEventHandler: any
  ): any;


  // the predefined events handlers
  openButtonClickHandler(eventPayload: any): void;


  // the predefined events handlers
  treeNodeLableClickHandler(_eventPayload: any): any;


  // END EVENTS BLOCK
  getInModeConfDataNodeIsTreeItem(node: object): boolean;

  escapeHTMLForAttribute(str: any): any;

  unescapeHTMLFromAttribute(str: any|undefined): any;

  getTreeHtmlNodeDatasetJson(htmlNode: HTMLElement|null): any;

}



