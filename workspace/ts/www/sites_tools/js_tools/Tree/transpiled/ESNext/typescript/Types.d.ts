export interface ITreeDefaults {
    debug: boolean;
    renderingMode: number;
    nodesWithIcons: boolean;
    nodesOpenedMode: number;
    isModifiable: boolean;
    dataTypesCssClassesEnabled: boolean;
}
export interface ITreeRenderRetValue {
    currentNodeSubtreeLength: number;
    node: any;
}
export interface IRenderSubtreeResult {
    currentNodeSubtreeLength: number;
    subtreeJsonNodesLength: number;
}
export interface IRenderingMode {
    Ease: number;
    Conf: number;
}
export interface INodesOpenedMode {
    ALL_SHOWN: number;
    JSON_DATA_DEFINED: number;
    ALL_HIDE: number;
}
export interface IRenderTemplateRendererData {
    iconSrc: any;
    iconShowClassName: any;
    labelText: any;
    hyperlink: any;
    cssClasses: any;
    dataId: any;
    dataHolderId: any;
    dataOrder: any;
    dataJson: any;
    openButtonStateClassName: any;
    hasSubtree: boolean;
}
export interface ITreeCssClassNames {
    MAIN_CLASS_NAME: any;
    CLASS_NAME_WITH_ICONS: any;
    CLASS_OPENED: any;
    CLASS_WITHOUT_SUBTREE: any;
    CLASS_ICON_SHOW: any;
    CLASS_ICON_HIDE: any;
    CLASS_ICON_TAG_IMG: any;
    CLASS_AND_ID__CONTEXT_MENU: any;
    CLASS_DATATYPE_OBJECT: any;
    CLASS_DATATYPE_ARRAY: any;
    CLASS_DATATYPE_STRING: any;
    CLASS_DATATYPE_NUMBER: any;
    CLASS_DATATYPE_BOOLEAN: any;
    PREFIX__CLASS_DATATYPE: any;
}
export interface ITreeEventsNames {
    EVENT_NAME__BEFORE_RENDER_ONE_NODE: any;
    EVENT_NAME__AFTER_RENDER_ONE_NODE: any;
    EVENT_NAME__TREE_NODE_EXPAND_BUTTON__CLICK: any;
    EVENT_NAME__TREE_NODE_LABEL__CLICK: any;
}
export interface ITreeAdapter {
    getSubtreeNodeToRender(loopPropertyValue: any, loopPropertyKey: any): any;
    getDataForRendering(node: any, flatNodeClone: any, dataTypeString: any, nodeHasSubtree: boolean): IRenderTemplateRendererData;
    getTreeNodeCssClasses__dataTypesCssClassesEnabled(dataType: any, node: any): any;
    getTreeNodeCssClasses__dataTypesCssClassesDisabled(dataType: any, node: any): any;
}
//# sourceMappingURL=Types.d.ts.map