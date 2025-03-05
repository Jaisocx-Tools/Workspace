class WorkspaceTreeWalker {
  static DATATYPE_OBJECT = "object";
  static WALK_MODE = class {
    static WALK_MODE_EASE = "ease";
    static WALK_MODE_WHEN_SUBTREE_PROPNAME = "branch_propname";
    static WALK_MODE_FLAT = "flat";
  };

  walk(
    walkMode, 
    inOutPayload, 
    callback) {
    if (walkMode === WorkspaceTreeWalker.WALK_MODE.WALK_MODE_EASE) {
      this.walkEasy(
        inOutPayload, 
        callback);
    }
    else if (walkMode === WorkspaceTreeWalker.WALK_MODE.WALK_MODE_WHEN_SUBTREE_PROPNAME) {
      this.walkWhenSubtreePropName(
        inOutPayload, 
        callback);
    }
    else if (walkMode === WorkspaceTreeWalker.WALK_MODE.WALK_MODE_FLAT) {
      this.walkFlat(
        inOutPayload, 
        callback);
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

  walkEasy(
    inOutPayload, 
    callback) {
    let info = WorkspaceTreeWalker.getNodeInfo(inOutPayload.dataset);
    let normalizedNodes = WorkspaceTreeWalker.normalizeNodes(
      inOutPayload.dataset, 
      info);
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

      branchNodeNormalizedNodes = WorkspaceTreeWalker.normalizeNodes(
        nodeValue, 
        //@ts-ignore
        nodeInfo);
      this.walkEasy(
        inOutPayload, 
        callback);
    }
  }

  walkWhenSubtreePropName(
    inOutPayload, 
    callback) {
    let info = WorkspaceTreeWalker.getNodeInfo(inOutPayload.dataset);
    let normalizedNodes = WorkspaceTreeWalker.normalizeNodes(
      inOutPayload.dataset, 
      info);
    callback(inOutPayload);
    let branchIndex = 0;
    let keyFound = info.keys.find((k, i) => {
      let matches = (k === inOutPayload.branchNodesName);

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
        branchNodeNormalizedNodes = WorkspaceTreeWalker.normalizeNodes(
          nodeValue, 
          //@ts-ignore
          nodeInfo);
      }

      callback(inOutPayload);

      if (!keyFound) {
        continue loop;
      }

      if (keyNode === inOutPayload.branchNodesName) {
        this.walkWhenSubtreePropName(
          inOutPayload, 
          callback);
      }
    }
  }

  walkFlat(
    inOutPayload, 
    callback) {
    let info = WorkspaceTreeWalker.getNodeInfo(inOutPayload.dataset);
    let normalizedRootData = WorkspaceTreeWalker.normalizeNodes(
      inOutPayload.dataset, 
      info);
    inOutPayload.jpathData.getJPath().push(inOutPayload.id);
    inOutPayload.datasetNormalized = normalizedRootData;
    this.walkFlatSubcall(
      inOutPayload, 
      callback);
  }

  walkFlatSubcall(
    inOutPayload, 
    callback) {
    const filteredRootNodes = [
      ...inOutPayload.datasetNormalized
        .filter(function (node) {
          const branchKey = Object.keys(node)[0];
          const flatRecursionDataRecord = node[branchKey];
          //@ts-ignore
          const matchesHolderId = (flatRecursionDataRecord[inOutPayload.nameHolderId] === inOutPayload.id);

          return matchesHolderId;
        }

        ),
    ];

    if ((!filteredRootNodes) || (filteredRootNodes.length === 0)) {
      return;
    }

    let node = null;
    let nodeInfo = {};
    inOutPayload.currentDatasetNormalized = filteredRootNodes;

    for (node of filteredRootNodes) {
      const payloadLocal = new WorkspaceTreeWalkerPayload();

      for (let propName in inOutPayload) {
        //@ts-ignore
        payloadLocal[propName] = inOutPayload[propName];
      }

      payloadLocal.dataName = Object.keys(node)[0];
      payloadLocal.data = node[payloadLocal.dataName];
      payloadLocal.id = payloadLocal.data[payloadLocal.nameId];
      payloadLocal.holderId = payloadLocal.data[payloadLocal.nameHolderId];
      //payloadLocal.jpathData.getJPath().push("branch");
      const jpathData = payloadLocal.jpathData;
      const path = jpathData.getJPath();
      let newJpath = path.reduce(
        (jpathCurrent, key, ix, reducedPath) => {
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

          return [...jpathCurrent,];
        }, 
        []);
      const newJpathData = new JPathData();
      newJpathData.setJPath(newJpath);
      payloadLocal.jpathData = newJpathData;
      // payloadLocal.jpathData.setIsPlaceholderValue(0);
      nodeInfo = WorkspaceTreeWalker.getNodeInfo(payloadLocal.data);
      payloadLocal.dataNormalized = WorkspaceTreeWalker.normalizeNodes(
        payloadLocal.data, 
        nodeInfo);
      callback(payloadLocal);
      let iterationNumber = 1;
      let iteration = 0;
      let isMultipleDataApplied = false;
      //@ts-ignore
      let multipleDataInfo = {};

      if ((payloadLocal.iterationsNumber) &&
                (payloadLocal.iterationsDataset)) {
        iterationNumber = payloadLocal.iterationsNumber;
        isMultipleDataApplied = ((payloadLocal.iterationsNumber !== 0) && (payloadLocal.iterationsDataset.length !== 0));
      }

      for (iteration = 0; iteration < iterationNumber; iteration++) {
        let branchInoutPayload = new WorkspaceTreeWalkerPayload();

        if (isMultipleDataApplied === true) {
          for (let propName in payloadLocal) {
            //@ts-ignore
            branchInoutPayload[propName] = payloadLocal[propName];
          }
          //@ts-ignore
          branchInoutPayload.iterationsDataset = payloadLocal.iterationsDataset[iteration];
          multipleDataInfo = WorkspaceTreeWalker.getNodeInfo(branchInoutPayload.iterationsDataset);

          if (!multipleDataInfo.isArray && (multipleDataInfo.datatype === IterableInfo.DATATYPE_OBJECT)) {
            branchInoutPayload.iterationsDataset = WorkspaceTreeWalker.normalizeNodes(
              branchInoutPayload.iterationsDataset, 
              multipleDataInfo);
            branchInoutPayload.iterationsNumber = branchInoutPayload.iterationsDataset.length;
            //...
          }
        }
        else {
          branchInoutPayload = payloadLocal;
        }

        this.walkFlatSubcall(
          branchInoutPayload, 
          callback);
      }
    }
  }

  jpathRebuildWalkFlat(
    jpath, 
    branchNodeName) {
    let rebuiltJpath = [];
    let key = "";

    for (key of jpath) {
      rebuiltJpath.push(0);
    }
  }
}
//# sourceMappingURL=WorkspaceTreeWalker.js.map