import { TreeAdapter } from "./TreeAdapter.js";
import { IRenderTemplateRendererData, ITreeAdapter } from "./Types.js";
export declare class TreeAdapterModeConf extends TreeAdapter implements ITreeAdapter {
    getSubtreeNodeToRender(loopPropertyValue: any, loopPropertyKey: any): any;
    getDataForRendering(node: any, flatNodeClone: any, dataTypeString: any, hasSubtree: boolean): IRenderTemplateRendererData;
    getTreeNodeCssClasses__dataTypesCssClassesEnabled(dataTypeString: any, node: any): any;
    getTreeNodeCssClasses__dataTypesCssClassesDisabled(dataTypeString: any, node: any): any;
    escapeHTMLForAttribute(arg: any): any;
    getTreeNodeCssClasses(dataTypeString: any, value: any): any;
}
//# sourceMappingURL=TreeAdapterModeConf.d.ts.map