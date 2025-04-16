import { TreeAdapter } from "./TreeAdapter.js";
import { IRenderTemplateRendererData, ITreeAdapter } from "./Types.js";
export declare class TreeAdapterModeEase extends TreeAdapter implements ITreeAdapter {
    getSubtreeNodeToRender(loopPropertyValue: any, loopPropertyKey: any): any;
    getDataForRendering(node: any, flatNodeClone: any, dataTypeString: any, nodeHasSubtree: boolean): IRenderTemplateRendererData;
    getTreeNodeCssClasses__dataTypesCssClassesEnabled(dataTypeString: any, node: any): any;
    getTreeNodeCssClasses__dataTypesCssClassesDisabled(dataTypeString: any, node: any): any;
    escapeHTMLForAttribute(arg: any): any;
    getTreeNodeCssClasses(dataTypeString: any, value: any): any;
}
//# sourceMappingURL=TreeAdapterModeEase.d.ts.map