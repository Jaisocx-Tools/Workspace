import { TreeAdapter } from "./TreeAdapter.js";
import { IRenderTemplateRendererData, ITreeAdapter } from "./Types.js";
export declare class TreeAdapterModeEase extends TreeAdapter implements ITreeAdapter {
    getSubtreeNodeToRender(loopPropertyValue: any, loopPropertyKey: any): any;
    getDataForRendering(node: any, flatNodeClone: any, dataTypeString: any, nodeHasSubtree: boolean): IRenderTemplateRendererData;
    getTreeNodeCssClasses__dataTypesCssClassesEnabled(_dataTypeString: any, _node: any): any;
    getTreeNodeCssClasses__dataTypesCssClassesDisabled(_dataTypeString: any, _node: any): any;
    escapeHTMLForAttribute(_arg: any): any;
    getTreeNodeCssClasses(_dataTypeString: any, _value: any): any;
}
//# sourceMappingURL=TreeAdapterModeEase.d.ts.map