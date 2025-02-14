import { WorkspaceTreeWalkerPayload } from "./types/WorkspaceTreeWalkerPayload.js";
import { IterableInfo } from "./types/IterableInfo.js";
export declare class WorkspaceTreeWalker {
    static DATATYPE_OBJECT: string;
    static getNodeInfo(elem: any): IterableInfo;
    static normalizeNodes(nodes: any, nodeInfo: IterableInfo): any;
    walk(treeData: any, subtreePropertyName: string | undefined | null, callback: Function | undefined | null): any;
    walkEasy(key: any, treeData: any, inOutPayload: any[], callback: Function | undefined | null): undefined;
    walkWhenSubtreePropName(key: any, treeData: any, subtreePropertyName: string | undefined | null, inOutPayload: any[], callback: Function | undefined | null): undefined;
    walkFlat(holderId: any, treeData: any, holderIdProperyName: string, idProperyName: string, inOutPayload: any, callbackWalkRepeated: Function | undefined | null): undefined;
    walkFlatSubcall(holderId: any, normalizedRootData: any, holderIdProperyName: string, idProperyName: string, inOutPayload: any[], callback: Function | undefined | null): undefined;
    walkFlatRepeating(inOutPayload: WorkspaceTreeWalkerPayload, callback: CallableFunction): undefined;
    walkFlatRepeatingSubcall(inOutPayload: WorkspaceTreeWalkerPayload, callback: CallableFunction): undefined;
}
//# sourceMappingURL=WorkspaceTreeWalker.d.ts.map