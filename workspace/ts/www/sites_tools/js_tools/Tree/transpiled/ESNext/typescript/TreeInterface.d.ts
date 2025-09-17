import { ImprovedRenderEventEmitter, EventHandlerReturnValue } from "@jaisocx/event-emitter";
import { ITreeRenderRetValue, IRenderTemplateRendererData } from "./Types.js";
import { TreeConf } from "./TreeConf.js";
export interface TreeInterface extends ImprovedRenderEventEmitter {
    setDebug(debug: boolean): TreeInterface;
    setNodesWithIcons(withIcons: boolean): TreeInterface;
    setNodesOpenedMode(openedMode: number): TreeInterface;
    setUrl(url: any | null): TreeInterface;
    setMainHtmlNodeId(mainHtmlNodeId: any): TreeInterface;
    setConf(conf: TreeConf): TreeInterface;
    setModifiable(isModifiable: boolean): TreeInterface;
    setRenderingMode(mode: number): TreeInterface;
    setDataTypesCssClassesEnabled(dataTypesCssEnabled: boolean): TreeInterface;
    load(url: any | null): TreeInterface;
    adaptRenderingModeSubcalls(): void;
    reRender(): TreeInterface;
    render(nodes: any): TreeInterface;
    checkDataNodeSubtree(node: any): {
        isArray: number;
        subtreeNodeDataType: number;
        subtreeNodeDataTypeString: any;
        hasSubtree: boolean;
        subtreeJsonNodes: any;
        objectKeys: any[] | null;
    };
    renderSubtree(isArray: number, subtreeNodes: any, flatNodeHolderClone: any, objectKeys: any[] | null, subtreeHtmlHolder: HTMLElement): number;
    renderSubtreeCallback(_isArray: number, loopCounter: number, loopPropertyValue: any, loopPropertyKey: any, _arrayOrObject: any, previousCallbackResult: number | null, callbackPayload: any): number;
    renderOneTreeNode(node: any, nodePosition: number, nodeKey: any, flatNodeHolderClone: any, holder: HTMLElement): ITreeRenderRetValue;
    updateDataNodeIdAndPath(node: any, nodePosition: number, nodeKey: any, flatNodeHolderClone: any, _holder: HTMLElement): any;
    getTreeDataByJPath(jPathArray: any[]): any;
    getSubtreeNodeToRender(_loopPropertyValue: any, _loopPropertyKey: any): any;
    getDataForRendering(_node: any, _flatNodeClone: any, _dataTypeString: any, _hasSubtree: boolean): IRenderTemplateRendererData;
    getTreeNodeCssClasses(_dataType: any, _node: any): any;
    addJSTreeEventListener(eventName: any, eventHandler: (eventName: any, payload: any) => EventHandlerReturnValue | null | undefined | void): TreeInterface;
    addJSTreeEventListeners(): TreeInterface;
    initializeCustomJsTreeImprovedEventHandler(jsTreeEventName: any, customEventHandler: any): any;
    openButtonClickHandler(eventPayload: any): void;
    treeNodeLableClickHandler(_eventPayload: any): any;
    getInModeConfDataNodeIsTreeItem(node: object): boolean;
    escapeHTMLForAttribute(str: any): any;
    unescapeHTMLFromAttribute(str: any | undefined): any;
    getTreeHtmlNodeDatasetJson(htmlNode: HTMLElement | null): any;
}
//# sourceMappingURL=TreeInterface.d.ts.map