"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
const jpath_1 = require("@jaisocx/jpath");
const event_emitter_1 = require("@jaisocx/event-emitter");
const template_renderer_1 = require("@jaisocx/template-renderer");
const TreeConstants_js_1 = require("./TreeConstants.js");
const TreeConf_js_1 = require("./TreeConf.js");
const TreeAdapterModeConf_js_1 = require("./TreeAdapterModeConf.js");
const TreeAdapterModeEase_js_1 = require("./TreeAdapterModeEase.js");
const ArrayOrObjectPackage_js_1 = require("./ArrayOrObjectPackage.js");
// Tree main class
class Tree extends event_emitter_1.ImprovedRenderEventEmitter {
    constructor() {
        super();
        this.debug = TreeConstants_js_1.TreeConstants.Defaults.debug;
        this.mainHtmlNodeId = "";
        this.mainHolderHtmlNode = null;
        this.url = "";
        this.data = null;
        this.conf = new TreeConf_js_1.TreeConf();
        this.subtreeLength = 0;
        this.subtreeLengthDeep = 0;
        this.templateRenderer = new template_renderer_1.TemplateRenderer();
        /* this.templateRenderer
                .addThisClassEventListener (
                    this.templateRenderer.EVENT_NAME__AFTER_RENDER,
                    // @ts-ignore
                    (payload: {html, data}) => {
                        let renderedHtml: any = payload.html;
                        let value: any = null;
    
                        if (!payload.data.hasSubtree) {
                            renderedHtml = payload.html.replace('<ul></ul>', '');
                            value = 'html modified';
                        }
    
                        const payloadReturned: any = {...payload, html: renderedHtml};
                        return {payloadReturned, value};
                    }
                ); */
        this.contextMenuJSClass = null;
        // DEFAULT VALUES ARE FROM CONSTANTS CLASS
        this.setDebug(TreeConstants_js_1.TreeConstants.Defaults.debug);
        this.renderingMode = TreeConstants_js_1.TreeConstants.Defaults.renderingMode;
        this.nodesWithIcons = TreeConstants_js_1.TreeConstants.Defaults.nodesWithIcons;
        this.nodesOpenedMode = TreeConstants_js_1.TreeConstants.Defaults.nodesOpenedMode;
        this.isModifiable = TreeConstants_js_1.TreeConstants.Defaults.isModifiable;
        this.dataTypesCssClassesEnabled = TreeConstants_js_1.TreeConstants.Defaults.dataTypesCssClassesEnabled;
        this.adapter = new TreeAdapterModeEase_js_1.TreeAdapterModeEase();
    }
    setDebug(debug) {
        // optional method
        super.setDebug(debug);
        this.templateRenderer.setDebug(debug);
        this.debug = debug;
        return this;
    }
    setNodesWithIcons(withIcons) {
        // optional method
        this.nodesWithIcons = withIcons;
        return this;
    }
    setNodesOpenedMode(openedMode) {
        // optional method
        this.nodesOpenedMode = openedMode;
        return this;
    }
    setUrl(url) {
        // optional method
        this.url = url;
        return this;
    }
    setMainHtmlNodeId(mainHtmlNodeId) {
        // required method
        this.mainHtmlNodeId = mainHtmlNodeId;
        return this;
    }
    setConf(conf) {
        // optional method
        this.conf = conf;
        return this;
    }
    setModifiable(isModifiable) {
        // optional method
        this.isModifiable = isModifiable;
        return this;
    }
    setRenderingMode(mode) {
        // optional method
        this.renderingMode = mode;
        return this;
    }
    setDataTypesCssClassesEnabled(dataTypesCssEnabled) {
        this.dataTypesCssClassesEnabled = dataTypesCssEnabled;
        return this;
    }
    load(url) {
        if (url && url.length) {
            this.url = url;
        }
        if (!this.url || !this.mainHtmlNodeId) {
            throw new Error("No url set");
        }
        fetch(this.url)
            .then((response) => response.json())
            .then((json) => {
            this.render(json);
        });
        return this;
    }
    adaptRenderingModeSubcalls() {
        if (this.renderingMode === TreeConstants_js_1.TreeConstants.RenderingMode.Conf) {
            this.adapter = new TreeAdapterModeConf_js_1.TreeAdapterModeConf();
            if (this.dataTypesCssClassesEnabled === true) {
                this.getTreeNodeCssClasses = this.adapter.getTreeNodeCssClasses__dataTypesCssClassesEnabled.bind(this);
            }
            else {
                this.getTreeNodeCssClasses = this.adapter.getTreeNodeCssClasses__dataTypesCssClassesDisabled.bind(this);
            }
        }
        else if (this.renderingMode === TreeConstants_js_1.TreeConstants.RenderingMode.Ease) {
            this.adapter = new TreeAdapterModeEase_js_1.TreeAdapterModeEase();
            if (this.dataTypesCssClassesEnabled === true) {
                this.getTreeNodeCssClasses = this.adapter.getTreeNodeCssClasses__dataTypesCssClassesEnabled.bind(this);
            }
            else {
                // this.getTreeNodeCssClasses = this.getTreeNodeCssClasses__dataTypesCssClassesDisabled__renderingModeConf.bind(this);
            }
        }
        this.getSubtreeNodeToRender = this.adapter.getSubtreeNodeToRender.bind(this);
        this.getDataForRendering = this.adapter.getDataForRendering.bind(this);
    }
    reRender() {
        this.render(this.data);
        return this;
    }
    render(nodes) {
        if (nodes) {
            this.data = nodes;
        }
        if (!this.data
            || !this.conf) {
            throw new Error(`Empty: data ${this.data} or conf ${this.conf}`);
        }
        this.mainHolderHtmlNode = document.getElementById(this.mainHtmlNodeId);
        if (!this.mainHolderHtmlNode) {
            throw new Error("Tree holder html node ID did not match any html node in this html doc.");
        }
        this.adaptRenderingModeSubcalls();
        // set main css class name to the main tree holder html node
        if (this.mainHolderHtmlNode.classList
            && !this.mainHolderHtmlNode.classList.contains(TreeConstants_js_1.TreeConstants.TreeCssClassNames.MAIN_CLASS_NAME)) {
            this.mainHolderHtmlNode.classList.add(TreeConstants_js_1.TreeConstants.TreeCssClassNames.MAIN_CLASS_NAME);
        }
        else if (!this.mainHolderHtmlNode.classList) {
            this.mainHolderHtmlNode.className = (TreeConstants_js_1.TreeConstants.TreeCssClassNames.MAIN_CLASS_NAME);
        }
        if (this.nodesWithIcons === true) {
            this.mainHolderHtmlNode.classList.add(TreeConstants_js_1.TreeConstants.TreeCssClassNames.CLASS_NAME_WITH_ICONS);
        }
        else {
            this.mainHolderHtmlNode.classList.remove(TreeConstants_js_1.TreeConstants.TreeCssClassNames.CLASS_NAME_WITH_ICONS);
        }
        // add an html holder node for subtree html nodes
        const ul = document.createElement("UL");
        // get datatype of the main json data node
        const dataType = ArrayOrObjectPackage_js_1.ArrayOrObjectPackage.getDataType(nodes);
        let isArray = 0;
        if (dataType === ArrayOrObjectPackage_js_1.ArrayOrObjectPackage.JsonDataType.ARRAY) {
            isArray = 1;
        }
        else if (dataType !== ArrayOrObjectPackage_js_1.ArrayOrObjectPackage.JsonDataType.OBJECT) {
            throw new Error("Arrays or Objects supported. This JSON Data is not iterable.");
        }
        // get info on subtree nodes amount
        const { itemsAmount, objectKeys } = ArrayOrObjectPackage_js_1.ArrayOrObjectPackage.getArrayOrObjectItemsAmount(isArray, this.data);
        const subtreeNodesCount = itemsAmount;
        // exit throwing exception, if the tree json data is empty
        if (subtreeNodesCount === 0) {
            throw new Error("Tree json data is empty.");
        }
        const flatNodeHolderClone = { _pathArray: ["this.data"] };
        let subtreeRenderResult;
        if (this.renderingMode === TreeConstants_js_1.TreeConstants.RenderingMode.Conf) {
            if (isArray === 1) {
                subtreeRenderResult = this.renderSubtree(isArray, this.data, flatNodeHolderClone, objectKeys, ul);
                // @ts-ignore
                this.subtreeLength = subtreeNodesCount;
                // @ts-ignore
                this.subtreeLengthDeep = subtreeRenderResult;
            }
            else if (isArray === 0) {
                const isTreeItem = this.getInModeConfDataNodeIsTreeItem(this.data);
                // the root json data node is the tree item data node
                if (isTreeItem) {
                    const renderResult = this.renderOneTreeNode(this.data, 0, "Top", { _pathArray: ["this.data"] }, ul);
                    const { currentNodeSubtreeLength } = renderResult;
                    this.data = renderResult.node;
                    // @ts-ignore
                    this.subtreeLength = subtreeNodesCount;
                    // @ts-ignore
                    this.subtreeLengthDeep = currentNodeSubtreeLength;
                }
                else {
                    // the root json data node is the associative array of tree item data nodes, suggested, if not so, then will not be rendered.
                    subtreeRenderResult = this.renderSubtree(isArray, this.data, flatNodeHolderClone, objectKeys, ul);
                    // @ts-ignore
                    this.subtreeLength = subtreeNodesCount;
                    // @ts-ignore
                    this.subtreeLengthDeep = subtreeRenderResult;
                }
            }
        }
        else if (this.renderingMode === TreeConstants_js_1.TreeConstants.RenderingMode.Ease) {
            const renderResult = this.renderOneTreeNode({ "Json Root": this.data }, 0, "Top", { _pathArray: ["this.data"] }, ul);
            const { currentNodeSubtreeLength } = renderResult;
            // this.data = renderResult.node[0];
            // @ts-ignore
            this.subtreeLength = subtreeNodesCount;
            // @ts-ignore
            this.subtreeLengthDeep = currentNodeSubtreeLength;
        }
        if (this.debug) {
            console.log("Tree.data", this.data);
        }
        this.mainHolderHtmlNode.append(ul);
        // all eventsHandlers, assigned with addJSTreeEventListener,
        // here will be attached to one DOM event listener
        this.addJSTreeEventListeners();
        return this;
    }
    checkDataNodeSubtree(node) {
        let hasSubtree = false;
        let subtreeJsonNodes = null;
        if (this.renderingMode === TreeConstants_js_1.TreeConstants.RenderingMode.Conf) {
            subtreeJsonNodes = node[this.conf.SUBTREE];
        }
        else if (this.renderingMode === TreeConstants_js_1.TreeConstants.RenderingMode.Ease) {
            subtreeJsonNodes = Object.values(node)[0];
        }
        const { dataTypeString, dataType } = ArrayOrObjectPackage_js_1.ArrayOrObjectPackage.getDataTypeStringAndConst(subtreeJsonNodes);
        const isArray = ((dataType === ArrayOrObjectPackage_js_1.ArrayOrObjectPackage.JsonDataType.ARRAY) ? 1 : 0);
        if ((!subtreeJsonNodes)
            || (subtreeJsonNodes.length === 0)
            || ((dataType !== ArrayOrObjectPackage_js_1.ArrayOrObjectPackage.JsonDataType.ARRAY)
                && (dataType !== ArrayOrObjectPackage_js_1.ArrayOrObjectPackage.JsonDataType.OBJECT))) {
            return {
                isArray,
                subtreeNodeDataType: dataType,
                subtreeNodeDataTypeString: dataTypeString,
                hasSubtree,
                subtreeJsonNodes,
                objectKeys: null
            };
        }
        const { itemsAmount, objectKeys } = ArrayOrObjectPackage_js_1.ArrayOrObjectPackage.getArrayOrObjectItemsAmount(isArray, subtreeJsonNodes);
        hasSubtree = (itemsAmount !== 0);
        return {
            isArray,
            subtreeNodeDataType: dataType,
            subtreeNodeDataTypeString: dataTypeString,
            hasSubtree,
            subtreeJsonNodes,
            objectKeys
        };
    }
    renderSubtree(isArray, subtreeNodes, flatNodeHolderClone, objectKeys, subtreeHtmlHolder) {
        const renderSubtreeResult = ArrayOrObjectPackage_js_1.ArrayOrObjectPackage.iterateOverArrayOrObjectDefined(isArray, subtreeNodes, this.renderSubtreeCallback.bind(this), {
            subtreeHtmlHolder,
            flatNodeHolderClone
        }, objectKeys);
        return renderSubtreeResult;
    }
    renderSubtreeCallback(_isArray, loopCounter, loopPropertyValue, loopPropertyKey, _arrayOrObject, previousCallbackResult, callbackPayload) {
        let currentNodeSubtreeLength = (previousCallbackResult) || 0;
        const { subtreeHtmlHolder, flatNodeHolderClone } = callbackPayload;
        const subtreeJsonNode = this.getSubtreeNodeToRender(loopPropertyValue, loopPropertyKey);
        // RENDERING ONE TREE NODE
        const renderResult = this.renderOneTreeNode(subtreeJsonNode, loopCounter, loopPropertyKey, flatNodeHolderClone, subtreeHtmlHolder);
        currentNodeSubtreeLength += renderResult.currentNodeSubtreeLength;
        return currentNodeSubtreeLength;
    }
    renderOneTreeNode(node, nodePosition, nodeKey, flatNodeHolderClone, holder) {
        if (this.debug) {
            console.log(node);
        }
        const nodeClone = this.updateDataNodeIdAndPath(node, nodePosition, nodeKey, flatNodeHolderClone, holder);
        const { isArray, subtreeNodeDataTypeString, hasSubtree, subtreeJsonNodes, objectKeys } = this.checkDataNodeSubtree(node);
        // TODO: EXTENSIBILITY FEATURE
        let dataForRendering = this.getDataForRendering(node, nodeClone, subtreeNodeDataTypeString, hasSubtree);
        const eventBeforeRenderOneNodePayload = {
            "eventName": TreeConstants_js_1.TreeConstants.TreeEventsNames.EVENT_NAME__BEFORE_RENDER_ONE_NODE,
            "dataForRendering": dataForRendering
        };
        const eventBeforeRenderResultsArray = this.emitEvent(TreeConstants_js_1.TreeConstants.TreeEventsNames.EVENT_NAME__BEFORE_RENDER_ONE_NODE, eventBeforeRenderOneNodePayload);
        const eventResultsLength = eventBeforeRenderResultsArray.length;
        let lastEventRenderResultId = 0;
        let lastEventResult = new Object();
        if ((eventResultsLength >= 1) && lastEventResult && lastEventResult.result) {
            lastEventRenderResultId = (eventResultsLength - 1);
            lastEventResult = eventBeforeRenderResultsArray[lastEventRenderResultId];
            //@ts-ignore
            dataForRendering = lastEventResult.result.value;
        }
        const nodeHtml = this.templateRenderer
            .setTemplate(TreeConstants_js_1.TreeConstants.TEMPLATE__TREE_HTML_NODE)
            // @ts-ignore
            .setData(dataForRendering)
            .render();
        holder.insertAdjacentHTML("beforeend", nodeHtml);
        // @ts-ignore
        const holderLiItems = holder.getElementsByTagName("LI");
        const li = holderLiItems.item(holderLiItems.length - 1);
        if (li === null) {
            throw new Error("Rendiring broken, wrong html structure built.");
        }
        const eventAfterRenderOneNodePayload = {
            "eventName": TreeConstants_js_1.TreeConstants.TreeEventsNames.EVENT_NAME__AFTER_RENDER_ONE_NODE,
            "treeHtmlNode": li,
            "treeItemJson": nodeClone
        };
        if (!hasSubtree) {
            this.emitEvent(TreeConstants_js_1.TreeConstants.TreeEventsNames.EVENT_NAME__AFTER_RENDER_ONE_NODE, eventAfterRenderOneNodePayload);
            return {
                currentNodeSubtreeLength: 0,
                node: nodeClone
            };
        }
        const ul = li.getElementsByTagName("UL")[0];
        // @ts-ignore
        if (this.nodesOpenedMode === TreeConstants_js_1.TreeConstants.NodesOpenedMode.ALL_HIDE) {
            ul.style.display = "none";
        }
        else if ((!node[this.conf.NODE__OPENED])
            && (this.nodesOpenedMode === TreeConstants_js_1.TreeConstants.NodesOpenedMode.JSON_DATA_DEFINED)) {
            ul.style.display = "none";
        }
        else if ((node[this.conf.NODE__OPENED] === true)
            && (this.nodesOpenedMode === TreeConstants_js_1.TreeConstants.NodesOpenedMode.JSON_DATA_DEFINED)) {
            ul.style.display = "block";
        }
        else if (this.nodesOpenedMode === TreeConstants_js_1.TreeConstants.NodesOpenedMode.ALL_SHOWN) {
            ul.style.display = "block";
        }
        const subtreeRenderResult = this.renderSubtree(isArray, subtreeJsonNodes, nodeClone, objectKeys, ul);
        this.emitEvent(TreeConstants_js_1.TreeConstants.TreeEventsNames.EVENT_NAME__AFTER_RENDER_ONE_NODE, eventAfterRenderOneNodePayload);
        return {
            currentNodeSubtreeLength: subtreeRenderResult.currentNodeSubtreeLength,
            node: null
            // CHECK OUT WHETHER BOKEN WHEN NOW NULL
        };
    }
    // TEMPORARY IMPL TO KEEP POINTERS TO JSON DATA NODES IN HTML TREE NODES IN HTML NODE DATA ATTRIBUTES
    updateDataNodeIdAndPath(node, nodePosition, nodeKey, flatNodeHolderClone, _holder) {
        var _a, _b, _c;
        const id = (_a = node[this.conf.NODE__ID]) !== null && _a !== void 0 ? _a : null;
        const holderId = (_b = node[this.conf.NODE__HOLDER_ID]) !== null && _b !== void 0 ? _b : null;
        const flatCloneHolderId = flatNodeHolderClone._flatClone ? flatNodeHolderClone._flatClone[this.conf.NODE__ID] : null;
        const pathInJsonOfNodeHolder = (_c = flatNodeHolderClone._pathArray) !== null && _c !== void 0 ? _c : ["ROOT-unhandled"];
        // let pathKeyInNodeHolder = JSON.stringify(nodeKey);
        let pathInJsonArray = [
            ...pathInJsonOfNodeHolder
        ];
        if ((pathInJsonOfNodeHolder.length > 1) && this.renderingMode === TreeConstants_js_1.TreeConstants.RenderingMode.Conf) {
            // const subtreePropName: any = JSON.stringify(this.conf.SUBTREE);
            pathInJsonArray.push(this.conf.SUBTREE);
            pathInJsonArray.push(nodeKey);
            //pathKeyInNodeHolder = `[${subtreePropName}][${pathKeyInNodeHolder}]`;
        }
        else if (this.renderingMode === TreeConstants_js_1.TreeConstants.RenderingMode.Ease) {
            //pathKeyInNodeHolder = `[${pathKeyInNodeHolder}]`;
            pathInJsonArray.push(nodeKey);
        }
        else {
            //pathKeyInNodeHolder = `[${pathKeyInNodeHolder}]`;
            pathInJsonArray.push(nodeKey);
        }
        const pathInJsonString = pathInJsonArray
            .map((jPathIndex, index) => {
            const jPathIndexText = JSON.stringify(jPathIndex);
            return (index === 0) ? jPathIndex : `[${jPathIndexText}]`;
        })
            .join("");
        const flatNodeClone = {};
        for (const propName in node) {
            const propValue = node[propName];
            const dataType = (typeof propValue);
            if (dataType === "object") {
                continue;
            }
            flatNodeClone[propName] = propValue;
        }
        const nodeClone = {
            [this.conf.NODE__ID]: id,
            [this.conf.NODE__HOLDER_ID]: holderId,
            _flatCloneHolderId: flatCloneHolderId,
            _id: nodePosition,
            _key: nodeKey,
            _flatClone: flatNodeClone,
            _pathArray: pathInJsonArray,
            _path: pathInJsonString
        };
        return nodeClone;
    }
    getTreeDataByJPath(jPathArray) {
        // since complexity of building jPath array in modeEase and modeConf, the JPathArray is not the same,
        // and modeEase was built from item at index 2, since it has array item at index 1 "Top": this.data["Top"], and modeConf does not have this array item.
        // modeConf was built recursively already from item at index 1.
        const startingIndexValidJPath = (this.renderingMode === TreeConstants_js_1.TreeConstants.RenderingMode.Conf) ? 1 : 2;
        let retVal = new Object();
        retVal = jpath_1.JPath.getByJPath(jPathArray.slice(startingIndexValidJPath), this.data);
        return retVal;
    }
    // ADAPTIVE PLACEHOLDERS
    getSubtreeNodeToRender(_loopPropertyValue, _loopPropertyKey) {
        return null;
    }
    getDataForRendering(_node, _flatNodeClone, _dataTypeString, _hasSubtree) {
        return {
            iconSrc: "",
            iconShowClassName: "",
            labelText: "",
            hyperlink: "",
            cssClasses: "",
            dataId: "",
            dataHolderId: "",
            dataOrder: "",
            dataJson: "",
            openButtonStateClassName: "",
            hasSubtree: true
        };
    }
    getTreeNodeCssClasses(_dataType, _node) {
        return "";
    }
    // FINISH BLOCK ADAPTIVE PLACEHOLDERS
    // EVENTS BLOCK
    addJSTreeEventListener(eventName, eventHandler) {
        // the holder class LargeDomEventListenersOverheadOptimizer method call
        this.addThisClassEventListener(eventName, eventHandler);
        return this;
    }
    // the predefined events handlers
    addJSTreeEventListeners() {
        // the holder class LargeDomEventListenersOverheadOptimizer method call
        // Here is the predefined open button handler,
        // In Your custom code, this way You can define event handlers for heavy tree json data,
        // and the tree will not be overloaded of large number of events listeners on many html nodes.
        this.addDomEventListener("click", ".open-button", this.initializeCustomJsTreeImprovedEventHandler(TreeConstants_js_1.TreeConstants.TreeEventsNames.EVENT_NAME__TREE_NODE_EXPAND_BUTTON__CLICK, this.openButtonClickHandler.bind(this)));
        this.addDomEventListener("click", ".jstree-html-node-label", this.initializeCustomJsTreeImprovedEventHandler(TreeConstants_js_1.TreeConstants.TreeEventsNames.EVENT_NAME__TREE_NODE_LABEL__CLICK, this.treeNodeLableClickHandler.bind(this)));
        /* if (this.isModifiable) {
          this.addDomEventListener(
            "dblclick",
            ".jstree-html-node-holder-icon",
            this.contextMenuRender
          );
        } */
        // the holder class LargeDomEventListenersOverheadOptimizer method call
        this.addDomEventListeners();
        return this;
    }
    // here are set the JsTree event handlers actions, always needed, to reuse always in every JsTreeDomEventHndler.
    initializeCustomJsTreeImprovedEventHandler(jsTreeEventName, customEventHandler) {
        return (eventPayload) => {
            const treeHtmlNode = eventPayload.eventTarget.closest(".jstree-html-node");
            const jsonNode = JSON.parse(this.unescapeHTMLFromAttribute(treeHtmlNode.dataset.json));
            if (this.debug === true) {
                console.log(eventPayload.event.type, treeHtmlNode, jsonNode);
            }
            eventPayload = Object.assign(Object.assign({}, eventPayload), { jsonNode,
                treeHtmlNode, treeHtmlNodeHolder: treeHtmlNode.closest("li") });
            customEventHandler.call(this, eventPayload);
            this.emitEvent(jsTreeEventName, eventPayload);
        };
    }
    // the predefined events handlers
    openButtonClickHandler(eventPayload) {
        const toggleButton = eventPayload.eventTarget;
        if (toggleButton.classList.contains(TreeConstants_js_1.TreeConstants.TreeCssClassNames.CLASS_WITHOUT_SUBTREE)) {
            return;
        }
        const subtreeContainer = toggleButton.closest("li").getElementsByTagName("ul")[0];
        const isOpened = toggleButton.classList.contains(TreeConstants_js_1.TreeConstants.TreeCssClassNames.CLASS_OPENED);
        if (isOpened) {
            toggleButton.classList.remove(TreeConstants_js_1.TreeConstants.TreeCssClassNames.CLASS_OPENED);
            subtreeContainer.style.display = "none";
        }
        else {
            toggleButton.classList.add(TreeConstants_js_1.TreeConstants.TreeCssClassNames.CLASS_OPENED);
            subtreeContainer.style.display = "block";
        }
    }
    // the predefined events handlers
    treeNodeLableClickHandler(_eventPayload) {
        // example for custom event handler, the placeholder
    }
    // END EVENTS BLOCK
    getInModeConfDataNodeIsTreeItem(node) {
        // @ts-ignore
        const nodeLabelTextPropertyValue = node[this.conf.NODE_LABEL__TEXT];
        // the main conf required dsts json field is label text. and it cannot be an object, but a string or number.
        const isTreeItem = (nodeLabelTextPropertyValue && ((nodeLabelTextPropertyValue) !== "object"));
        return isTreeItem;
    }
    escapeHTMLForAttribute(str) {
        return str
            .replace(/"/g, "&quot;")
            // Replace double quotes
            .replace(/'/g, "&#39;")
            // Replace single quotes
            .replace(/</g, "&lt;")
            // Replace <
            .replace(/>/g, "&gt;");
        // Replace >
    }
    unescapeHTMLFromAttribute(str) {
        if (!str) {
            return "";
        }
        return str
            .replace(/&quot;/g, "\"")
            // Replace double quotes
            .replace(/&#39;/g, "'")
            // Replace single quotes
            .replace(/&lt;/g, "<")
            // Replace <
            .replace(/&gt;/g, ">");
        // Replace >
    }
    getTreeHtmlNodeDatasetJson(htmlNode) {
        if (htmlNode === null) {
            return "";
        }
        return JSON.parse(this.unescapeHTMLFromAttribute(htmlNode.dataset.json));
    }
}
exports.Tree = Tree;
//# sourceMappingURL=Tree.js.map