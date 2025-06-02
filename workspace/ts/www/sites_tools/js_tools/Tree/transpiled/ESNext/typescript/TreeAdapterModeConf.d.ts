import { TreeAdapter } from "./TreeAdapter.js";
import { IRenderTemplateRendererData, ITreeAdapter } from "./Types.js";
export declare class TreeAdapterModeConf extends TreeAdapter implements ITreeAdapter {
    getSubtreeNodeToRender(_loopPropertyValue: any, _loopPropertyKey: any): any;
    getDataForRendering(node: any, flatNodeClone: any, dataTypeString: any, hasSubtree: boolean): IRenderTemplateRendererData;
    getTreeNodeCssClasses__dataTypesCssClassesEnabled(dataTypeString: any, node: any): any;
    getTreeNodeCssClasses__dataTypesCssClassesDisabled(_dataTypeString: any, _node: any): any;
    escapeHTMLForAttribute(_arg: any): any;
    getTreeNodeCssClasses(_dataTypeString: any, _value: any): any;
}
//# sourceMappingURL=TreeAdapterModeConf.d.ts.map