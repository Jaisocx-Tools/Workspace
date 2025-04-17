"use strict";
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceTreeWalker = void 0;
const WorkspaceTreeWalkerPayload_js_1 = require("./types/WorkspaceTreeWalkerPayload.js");
const JPathData_js_1 = require("./types/JPathData.js");
const JPath_js_1 = require("./lib/JPath.js");
class WorkspaceTreeWalker {
    walk(walkMode, inOutPayload, callback) {
        if (walkMode === WorkspaceTreeWalker.WALK_MODE.WALK_MODE_EASE) {
            this.walkEasy(inOutPayload, callback);
        }
        else if (walkMode === WorkspaceTreeWalker.WALK_MODE.WALK_MODE_WHEN_SUBTREE_PROPNAME) {
            this.walkWhenSubtreePropName(inOutPayload, callback);
        }
        else if (walkMode === WorkspaceTreeWalker.WALK_MODE.WALK_MODE_FLAT) {
            this.walkFlat(inOutPayload, callback);
        }
    }
    static getNodeInfo(elem) {
        let elemsNumber = 0;
        let keys = [];
        let datatype = typeof (elem);
        let isObject = (datatype === WorkspaceTreeWalker.DATATYPE_OBJECT);
        let isArray = false;
        //@thoughts whether for simple datatype to return this object,
        //  a little more cost,
        //  but already asked datatype and can use this info.
        const result = new class {
            constructor() {
                this.length = elemsNumber;
                this.keys = keys;
                this.datatype = datatype;
                this.isArray = isArray;
            }
        };
        if (isObject === false) {
            return result;
        }
        result.isArray = Array.isArray(elem);
        if (result.isArray) {
            elemsNumber = elem.length;
            const arrayKeys = (new Array(elemsNumber));
            for (let i = 0; i < elemsNumber; i++) {
                arrayKeys[i] = i;
            }
            result.keys = arrayKeys;
        }
        else {
            result.keys = Object.keys(elem);
            elemsNumber = keys.length;
        }
        result.length = elemsNumber;
        return result;
    }
    static normalizeNodes(nodes, nodeInfo) {
        const elemsNumber = nodeInfo.length;
        let result = [];
        if (nodeInfo.length === 0) {
            result = nodes;
        }
        result = [
            ...nodeInfo.keys.map(function (key) {
                let keyText = "";
                let result = {};
                //@ts-ignore
                if (this.nodeInfo.isArray) {
                    keyText = "" + key;
                    //@ts-ignore
                    result = { [keyText]: this.nodes[key] };
                }
                else {
                    //@ts-ignore
                    result = { [key]: this.nodes[key] };
                }
                return result;
            }.bind({ nodeInfo,
                nodes }))
        ];
        return result;
    }
    walkEasy(inOutPayload, callback) {
        let info = WorkspaceTreeWalker.getNodeInfo(inOutPayload.dataset);
        let normalizedNodes = WorkspaceTreeWalker.normalizeNodes(inOutPayload.dataset, info);
        callback(inOutPayload);
        let node = null;
        let keyNode = null;
        let nodeValue = null;
        let nodeInfo = {};
        let branchNodeNormalizedNodes = null;
        loop: for (node of normalizedNodes) {
            nodeInfo = WorkspaceTreeWalker.getNodeInfo(node);
            keyNode = Object.keys(node)[0];
            nodeValue = node[keyNode];
            if (nodeInfo.length === 0) {
                callback(inOutPayload);
                continue loop;
            }
            branchNodeNormalizedNodes = WorkspaceTreeWalker.normalizeNodes(nodeValue, 
            //@ts-ignore
            nodeInfo);
            this.walkEasy(inOutPayload, callback);
        }
    }
    walkWhenSubtreePropName(inOutPayload, callback) {
        let info = WorkspaceTreeWalker.getNodeInfo(inOutPayload.dataset);
        let normalizedNodes = WorkspaceTreeWalker.normalizeNodes(inOutPayload.dataset, info);
        callback(inOutPayload);
        let branchIndex = 0;
        let keyFound = info.keys.find((k, i) => {
            let matches = (k === inOutPayload.branchName);
            if (matches === true)
                branchIndex = i;
            return matches;
        });
        let node = null;
        let keyNode = null;
        let nodeValue = null;
        let nodeInfo = {};
        let branchNodeNormalizedNodes = null;
        loop: for (node of normalizedNodes) {
            keyNode = Object.keys(node)[0];
            nodeValue = node[keyNode];
            nodeInfo = WorkspaceTreeWalker.getNodeInfo(nodeValue);
            if (nodeInfo.length === 0) {
                branchNodeNormalizedNodes = null;
            }
            else {
                branchNodeNormalizedNodes = WorkspaceTreeWalker.normalizeNodes(nodeValue, 
                //@ts-ignore
                nodeInfo);
            }
            callback(inOutPayload);
            if (!keyFound) {
                continue loop;
            }
            if (keyNode === inOutPayload.branchName) {
                this.walkWhenSubtreePropName(inOutPayload, callback);
            }
        }
    }
    walkFlat(inOutPayload, callback) {
        let info = WorkspaceTreeWalker.getNodeInfo(inOutPayload.dataset);
        let normalizedRootData = WorkspaceTreeWalker.normalizeNodes(inOutPayload.dataset, info);
        inOutPayload.jpathData.getJPath().push(inOutPayload.id);
        inOutPayload.datasetNormalized = normalizedRootData;
        this.walkFlatSubcall(inOutPayload, callback);
    }
    walkFlatSubcall(inOutPayload, callback) {
        inOutPayload.currentDatasetNormalized = [
            ...inOutPayload.datasetNormalized
                .filter(function (node) {
                const branchKey = Object.keys(node)[0];
                const flatRecursionDataRecord = node[branchKey];
                //@ts-ignore
                const matchesHolderId = (flatRecursionDataRecord[inOutPayload.nameHolderId] === inOutPayload.id);
                return matchesHolderId;
            })
        ];
        let filteredRootNodes = inOutPayload.currentDatasetNormalized;
        if ((!filteredRootNodes) || (filteredRootNodes.length === 0)) {
            return;
        }
        let data = null;
        let dataInfo = {};
        for (data of filteredRootNodes) {
            let payloadLocal = new WorkspaceTreeWalkerPayload_js_1.WorkspaceTreeWalkerPayload();
            for (let propName in inOutPayload) {
                //@ts-ignore
                payloadLocal[propName] = inOutPayload[propName];
            }
            payloadLocal.dataName = Object.keys(data)[0];
            payloadLocal.data = data[payloadLocal.dataName];
            payloadLocal.id = payloadLocal.data[payloadLocal.nameId];
            payloadLocal.holderId = payloadLocal.data[payloadLocal.nameHolderId];
            const jpathData = payloadLocal.jpathData;
            const path = jpathData.getJPath();
            let newJpath = path.reduce((jpathCurrent, key, ix, reducedPath) => {
                const _jpathLen = jpathCurrent.length;
                const _jpathLastIx = _jpathLen - 1;
                let lastSavedJpathKey = null;
                if (_jpathLastIx > (-1)) {
                    lastSavedJpathKey = jpathCurrent[_jpathLastIx];
                }
                if (key === payloadLocal.holderId) {
                    jpathCurrent.push(payloadLocal.holderId);
                    jpathCurrent.push(payloadLocal.id);
                }
                else if (lastSavedJpathKey === payloadLocal.id) {
                    true;
                }
                else if (lastSavedJpathKey === payloadLocal.holderId) {
                    jpathCurrent.push(payloadLocal.id);
                }
                else {
                    jpathCurrent.push(key);
                }
                return [...jpathCurrent];
            }, []);
            const newJpathData = new JPathData_js_1.JPathData();
            newJpathData.setJPath(newJpath);
            payloadLocal.jpathData = newJpathData;
            let iterationsNumber = 1;
            let iteration = 0;
            let isMultipleDataApplied = false;
            //@ts-ignore
            let multipleDataInfo = {};
            // when a iterationsDataset variable can be an object.
            if (payloadLocal.iterationsDataset) {
                multipleDataInfo = WorkspaceTreeWalker.getNodeInfo(payloadLocal.iterationsDataset);
                payloadLocal.iterationsDatasetNormalized = WorkspaceTreeWalker.normalizeNodes(payloadLocal.iterationsDataset, multipleDataInfo);
                payloadLocal.iterationsNumber = payloadLocal.iterationsDatasetNormalized.length;
                isMultipleDataApplied = (payloadLocal.iterationsNumber !== 0);
                if (isMultipleDataApplied) {
                    // reassignment, default 1.
                    iterationsNumber = payloadLocal.iterationsNumber;
                }
            }
            for (iteration = 0; iteration < iterationsNumber; iteration++) {
                let branchInoutPayload = new WorkspaceTreeWalkerPayload_js_1.WorkspaceTreeWalkerPayload();
                if (isMultipleDataApplied === true) {
                    for (let key in payloadLocal) {
                        //@ts-ignore
                        branchInoutPayload[key] = payloadLocal[key];
                    }
                    //@ts-ignore
                    branchInoutPayload.iterationsData = payloadLocal.iterationsDatasetNormalized[iteration];
                }
                else {
                    branchInoutPayload = payloadLocal;
                }
                callback(branchInoutPayload);
                if (isMultipleDataApplied === true) {
                    multipleDataInfo = WorkspaceTreeWalker.getNodeInfo(branchInoutPayload.iterationsData);
                    if (!multipleDataInfo.isArray && (multipleDataInfo.datatype === WorkspaceTreeWalker.DATATYPE_OBJECT)) {
                        branchInoutPayload.iterationsDataset = Object.assign({}, branchInoutPayload.iterationsData);
                    }
                    else if (multipleDataInfo.isArray) {
                        branchInoutPayload.iterationsDataset = [...branchInoutPayload.iterationsData];
                    }
                    else {
                        branchInoutPayload.iterationsDataset = null;
                    }
                    branchInoutPayload.iterationsData = null;
                }
                this.walkFlatSubcall(branchInoutPayload, callback);
            }
        }
    }
    static callbackWalkFlatTransformToMultilevel(inOutPayload) {
        JPath_js_1.JPath.setByJPathWalkFlatRebuild(inOutPayload.transformedDataset, inOutPayload.jpathData.getJPath(), inOutPayload.data, inOutPayload.nameHolderId, inOutPayload.nameId, inOutPayload.branchName);
    }
}
exports.WorkspaceTreeWalker = WorkspaceTreeWalker;
WorkspaceTreeWalker.DATATYPE_OBJECT = "object";
WorkspaceTreeWalker.WALK_MODE = (_a = class {
    },
    __setFunctionName(_a, "WALK_MODE"),
    _a.WALK_MODE_EASE = "ease",
    _a.WALK_MODE_WHEN_SUBTREE_PROPNAME = "branch_propname",
    _a.WALK_MODE_FLAT = "flat",
    _a);
//# sourceMappingURL=WorkspaceTreeWalker.js.map