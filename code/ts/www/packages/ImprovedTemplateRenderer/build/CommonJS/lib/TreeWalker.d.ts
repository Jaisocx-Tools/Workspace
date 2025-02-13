import { IterableInfo } from "../types/IterableInfo.js";
export declare class TreeWalker {
    static DATATYPE_OBJECT: string;
    getNodeInfo(elem: any): IterableInfo;
    normalizeNodes(nodes: any, nodeInfo: IterableInfo): any;
    walk(treeData: any, subtreePropertyName: string | undefined | null, callback: Function | undefined | null): any;
    walkEasy(key: any, treeData: any, inOutPayload: any[], callback: Function | undefined | null): undefined;
    walkWhenSubtreePropName(key: any, treeData: any, subtreePropertyName: string | undefined | null, inOutPayload: any[], callback: Function | undefined | null): undefined;
}
//# sourceMappingURL=TreeWalker.d.ts.map