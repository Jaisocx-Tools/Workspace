"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeWalker = void 0;
class TreeWalker {
    getNodeInfo(elem) {
        let elemsNumber = 0;
        let keys = [];
        let datatype = typeof (elem);
        let isObject = (datatype === TreeWalker.DATATYPE_OBJECT);
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
        isArray = Array.isArray(elem);
        if (isArray) {
            elemsNumber = elem.length;
            const arrayKeys = (new Array(elemsNumber));
            keys = arrayKeys.map((zero, index) => index);
        }
        else {
            keys = Object.keys(elem);
            elemsNumber = keys.length;
        }
        return result;
    }
    normalizeNodes(nodes, nodeInfo) {
        const elemsNumber = nodeInfo.length;
        let result = [];
        if (nodeInfo.length === 0) {
            result = nodes;
        }
        result = [
            ...nodeInfo.keys.map((key) => {
                let keyText = "";
                let result = {};
                if (nodeInfo.isArray) {
                    keyText = "" + key;
                    result = { [keyText]: nodes[key], };
                }
                else {
                    result = { [key]: nodes[key], };
                }
                return result;
            }),
        ];
        return result;
    }
    walk(treeData, subtreePropertyName, callback) {
        let result = {};
        if (!subtreePropertyName) {
            this.walkEasy("main", treeData, result, callback);
        }
        else {
            this.walkWhenSubtreePropName("main", treeData, subtreePropertyName, result, callback);
        }
        return result;
    }
    walkEasy(key, treeData, inOutPayload, callback) {
        let info = this.getNodeInfo(treeData);
        let normalizedNodes = this.normalizeNodes(treeData, info);
        //@ts-ignore
        inOutPayload.push(callback(key, treeData, info, normalizedNodes));
        let node = null;
        let keyNode = null;
        let nodeValue = null;
        let nodeInfo = {};
        let subtreeNodeNormalizedNodes = null;
        loop: for (node of normalizedNodes) {
            nodeInfo = this.getNodeInfo(node);
            keyNode = Object.keys(node)[0];
            nodeValue = node[key];
            if (nodeInfo.length === 0) {
                //@ts-ignore
                inOutPayload.push(callback(keyNode, nodeValue, nodeInfo, null));
                continue loop;
            }
            subtreeNodeNormalizedNodes = this.normalizeNodes(nodeValue, 
            //@ts-ignore
            nodeInfo);
            //@ts-ignore
            inOutPayload.push(callback(keyNode, nodeValue, nodeInfo, subtreeNodeNormalizedNodes));
            this.walkEasy(keyNode, nodeValue, inOutPayload, callback);
        }
    }
    walkWhenSubtreePropName(key, treeData, subtreePropertyName, inOutPayload, callback) {
        let info = this.getNodeInfo(treeData);
        let normalizedNodes = this.normalizeNodes(treeData, info);
        //@ts-ignore
        inOutPayload.push(callback(key, treeData, info, normalizedNodes));
        let subtreeIndex = 0;
        let keyFound = info.keys.find((k, i) => {
            let matches = (k === subtreePropertyName);
            if (matches === true)
                subtreeIndex = i;
            return matches;
        });
        let node = null;
        let keyNode = null;
        let nodeValue = null;
        let nodeInfo = {};
        let subtreeNodeNormalizedNodes = null;
        loop: for (node of normalizedNodes) {
            keyNode = Object.keys(node)[0];
            nodeValue = node[key];
            nodeInfo = this.getNodeInfo(nodeValue);
            if (nodeInfo.length === 0) {
                subtreeNodeNormalizedNodes = null;
            }
            else {
                subtreeNodeNormalizedNodes = this.normalizeNodes(nodeValue, 
                //@ts-ignore
                nodeInfo);
            }
            inOutPayload.push(
            //@ts-ignore
            callback(keyNode, nodeValue, nodeInfo, subtreeNodeNormalizedNodes));
            if (!keyFound) {
                continue loop;
            }
            if (keyNode === subtreePropertyName) {
                this.walkWhenSubtreePropName(subtreePropertyName, nodeValue, subtreePropertyName, inOutPayload, callback);
            }
        }
    }
}
exports.TreeWalker = TreeWalker;
TreeWalker.DATATYPE_OBJECT = "object";
//# sourceMappingURL=TreeWalker.js.map