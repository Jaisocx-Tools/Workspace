class WorkspaceTreeWalker {
  static DATATYPE_OBJECT = "object";

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
      length = elemsNumber;
      keys = keys;
      datatype = datatype;
      isArray = isArray;
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

  static normalizeNodes(
    nodes, 
    nodeInfo) {
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
          result = { [keyText]: this.nodes[key], };
        }
        else {
          //@ts-ignore
          result = { [key]: this.nodes[key], };
        }

        return result;
      }

        .bind({ nodeInfo,
          nodes, })),
    ];

    return result;
  }

  walk(
    treeData, 
    subtreePropertyName, 
    callback) {
    let result = {};

    if (!subtreePropertyName) {
      this.walkEasy(
        "main", 
        treeData, 
        result, 
        callback);
    }
    else {
      this.walkWhenSubtreePropName(
        "main", 
        treeData, 
        subtreePropertyName, 
        result, 
        callback);
    }

    return result;
  }

  walkEasy(
    key, 
    treeData, 
    inOutPayload, 
    callback) {
    let info = WorkspaceTreeWalker.getNodeInfo(treeData);
    let normalizedNodes = WorkspaceTreeWalker.normalizeNodes(
      treeData, 
      info);
    //@ts-ignore
    inOutPayload.push(callback(
      key, 
      treeData, 
      info, 
      normalizedNodes));
    let node = null;
    let keyNode = null;
    let nodeValue = null;
    let nodeInfo = {};
    let subtreeNodeNormalizedNodes = null;
    loop: for (node of normalizedNodes) {
      nodeInfo = WorkspaceTreeWalker.getNodeInfo(node);
      keyNode = Object.keys(node)[0];
      nodeValue = node[keyNode];

      if (nodeInfo.length === 0) {
        //@ts-ignore
        inOutPayload.push(callback(
          keyNode, 
          nodeValue, 
          nodeInfo, 
          null));
        continue loop;
      }

      subtreeNodeNormalizedNodes = WorkspaceTreeWalker.normalizeNodes(
        nodeValue, 
        //@ts-ignore
        nodeInfo);
      //@ts-ignore
      inOutPayload.push(callback(
        keyNode, 
        nodeValue, 
        nodeInfo, 
        subtreeNodeNormalizedNodes));
      this.walkEasy(
        keyNode, 
        nodeValue, 
        inOutPayload, 
        callback);
    }
  }

  walkWhenSubtreePropName(
    key, 
    treeData, 
    subtreePropertyName, 
    inOutPayload, 
    callback) {
    let info = WorkspaceTreeWalker.getNodeInfo(treeData);
    let normalizedNodes = WorkspaceTreeWalker.normalizeNodes(
      treeData, 
      info);
    //@ts-ignore
    inOutPayload.push(callback(
      key, 
      treeData, 
      info, 
      normalizedNodes));
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
      nodeValue = node[keyNode];
      nodeInfo = WorkspaceTreeWalker.getNodeInfo(nodeValue);

      if (nodeInfo.length === 0) {
        subtreeNodeNormalizedNodes = null;
      }
      else {
        subtreeNodeNormalizedNodes = WorkspaceTreeWalker.normalizeNodes(
          nodeValue, 
          //@ts-ignore
          nodeInfo);
      }

      inOutPayload.push(
        //@ts-ignore
        callback(
          keyNode, 
          nodeValue, 
          nodeInfo, 
          subtreeNodeNormalizedNodes));

      if (!keyFound) {
        continue loop;
      }

      if (keyNode === subtreePropertyName) {
        this.walkWhenSubtreePropName(
          subtreePropertyName, 
          nodeValue, 
          subtreePropertyName, 
          inOutPayload, 
          callback);
      }
    }
  }

  walkFlat(
    holderId, 
    treeData, 
    holderIdProperyName, 
    idProperyName, 
    inOutPayload, 
    callbackWalkRepeated) {
    let info = WorkspaceTreeWalker.getNodeInfo(treeData);
    let normalizedRootData = WorkspaceTreeWalker.normalizeNodes(
      treeData, 
      info);
    this.walkFlatSubcall(
      holderId, 
      normalizedRootData, 
      holderIdProperyName, 
      idProperyName, 
      inOutPayload, 
      callbackWalkRepeated);
  }

  walkFlatSubcall(
    holderId, 
    normalizedRootData, 
    holderIdProperyName, 
    idProperyName, 
    inOutPayload, 
    callback) {
    const filteredRootNodes = [
      ...normalizedRootData
        .filter((node) => {
          const subtreeKey = Object.keys(node)[0];
          const flatRecursionDataRecord = node[subtreeKey];
          const matchesHolderId = (flatRecursionDataRecord[idProperyName] === holderId);

          return matchesHolderId;
        }),
    ];

    if ((!filteredRootNodes) || (filteredRootNodes.length === 0)) {
      return;
    }

    let node = null;
    let subtreeKey = null;
    let flatRecursionDataRecord = null;
    let nodeInfo = {};
    let subtreeNodeNormalizedNodes = null;
    let recordId = null;
    loop: for (node of filteredRootNodes) {
      subtreeKey = Object.keys(node)[0];
      flatRecursionDataRecord = node[subtreeKey];
      recordId = flatRecursionDataRecord[holderIdProperyName];
      nodeInfo = WorkspaceTreeWalker.getNodeInfo(flatRecursionDataRecord);
      subtreeNodeNormalizedNodes = WorkspaceTreeWalker.normalizeNodes(
        flatRecursionDataRecord, 
        nodeInfo);
      //@ts-ignore
      inOutPayload.push(callback(
        subtreeKey, 
        flatRecursionDataRecord, 
        nodeInfo, 
        subtreeNodeNormalizedNodes, 
        filteredRootNodes));
      this.walkFlatSubcall(
        recordId, 
        normalizedRootData, 
        holderIdProperyName, 
        idProperyName, 
        inOutPayload, 
        callback);
    }
  }

  walkFlatRepeating(
    inOutPayload, 
    callback) {
    let info = WorkspaceTreeWalker.getNodeInfo(inOutPayload.flatDataset);
    let normalizedRootData = WorkspaceTreeWalker.normalizeNodes(
      inOutPayload.flatDataset, 
      info);
    inOutPayload.flatDatasetNormalized = normalizedRootData;
    this.walkFlatRepeatingSubcall(
      inOutPayload, 
      callback);
  }

  walkFlatRepeatingSubcall(
    inOutPayload, 
    callback) {
    const filteredRootNodes = [
      ...inOutPayload.flatDatasetNormalized
        .filter(function (node) {
          const subtreeKey = Object.keys(node)[0];
          const flatRecursionDataRecord = node[subtreeKey];
          //@ts-ignore
          const matchesHolderId = (flatRecursionDataRecord[this.idProperyName] === this.parentId);

          return matchesHolderId;
        }

        ).bind(inOutPayload),
    ];

    if ((!filteredRootNodes) || (filteredRootNodes.length === 0)) {
      return;
    }

    let node = null;
    let nodeInfo = {};
    loop: for (node of filteredRootNodes) {
      inOutPayload.flatDataElemKey = Object.keys(node)[0];
      inOutPayload.flatDataElem = node[inOutPayload.flatDataElemKey];
      inOutPayload.id = inOutPayload.flatDataElem[inOutPayload.idProperyName];
      inOutPayload.parentIdForNestedNodes = inOutPayload.flatDataElem[inOutPayload.parentIdProperyName];
      nodeInfo = WorkspaceTreeWalker.getNodeInfo(inOutPayload.flatDataElem);
      inOutPayload.flatDataElemNormalized = WorkspaceTreeWalker.normalizeNodes(
        inOutPayload.flatDataElem, 
        nodeInfo);
      callback(inOutPayload);
      let repeatTimes = 1;
      let isRepeatDataApplied = false;
      //@ts-ignore
      let repeatedDataInfo = {};

      if ((inOutPayload.repeatTimes) &&
                (inOutPayload.payloadRepeatData)) {
        repeatTimes = inOutPayload.repeatTimes;
        isRepeatDataApplied = ((inOutPayload.repeatTimes !== 0) && (inOutPayload.payloadRepeatData.length !== 0));
      }

      let step = 0;

      for (step = 0; step < repeatTimes; step++) {
        // inOutPayload.step = step;
        let subtreeInoutPayload = new WorkspaceTreeWalkerPayload();
        subtreeInoutPayload.step = step;

        if (isRepeatDataApplied === true) {
          //@ts-ignore
          subtreeInoutPayload.payloadDataElem = inOutPayload.payloadRepeatData[step];
          repeatedDataInfo = WorkspaceTreeWalker.getNodeInfo(subtreeInoutPayload.payloadDataElem);

          if (!repeatedDataInfo.isArray && (repeatedDataInfo.datatype === IterableInfo.DATATYPE_OBJECT)) {
            subtreeInoutPayload.payloadDataElem = WorkspaceTreeWalker.normalizeNodes(
              subtreeInoutPayload.payloadDataElem, 
              repeatedDataInfo);
            subtreeInoutPayload.repeatTimes = subtreeInoutPayload.payloadDataElem.length;
            subtreeInoutPayload.step = 0;
          }
        }
        else {
          subtreeInoutPayload = inOutPayload;
        }

        this.walkFlatRepeatingSubcall(
          subtreeInoutPayload, 
          callback);
      }
    }
  }
}
//# sourceMappingURL=WorkspaceTreeWalker.js.map