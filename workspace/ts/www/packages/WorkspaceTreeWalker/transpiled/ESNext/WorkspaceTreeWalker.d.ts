import { WorkspaceTreeWalkerPayload } from "./types/WorkspaceTreeWalkerPayload.js";
import { IterableInfo } from "./types/IterableInfo.js";
export declare class WorkspaceTreeWalker {
    static DATATYPE_OBJECT: string;
    static WALK_MODE: {
        new (): {};
        WALK_MODE_EASE: string;
        WALK_MODE_WHEN_SUBTREE_PROPNAME: string;
        WALK_MODE_FLAT: string;
    };
    walk(walkMode: string, inOutPayload: WorkspaceTreeWalkerPayload, callback: CallableFunction): any;
    static getNodeInfo(elem: any): IterableInfo;
    static normalizeNodes(nodes: any, nodeInfo: IterableInfo): any;
    walkEasy(inOutPayload: WorkspaceTreeWalkerPayload, callback: CallableFunction): undefined;
    walkWhenSubtreePropName(inOutPayload: WorkspaceTreeWalkerPayload, callback: CallableFunction): undefined;
    walkFlat(inOutPayload: WorkspaceTreeWalkerPayload, callback: CallableFunction): undefined;
    walkFlatSubcall(inOutPayload: WorkspaceTreeWalkerPayload, callback: CallableFunction): undefined;
    static callbackWalkFlatTransformToMultilevel(inOutPayload: WorkspaceTreeWalkerPayload): void;
}
//# sourceMappingURL=WorkspaceTreeWalker.d.ts.map