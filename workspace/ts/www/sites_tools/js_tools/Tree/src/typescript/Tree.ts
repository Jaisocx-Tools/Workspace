
import { JPath } from "@jaisocx/jpath";

import {
  ImprovedRenderEventEmitter, EventHandlerReturnValue,
  EventEmitResult
} from "@jaisocx/event-emitter";
import { TemplateRenderer } from "@jaisocx/template-renderer";

import {
  ITreeRenderRetValue, IRenderTemplateRendererData, ITreeAdapter
} from "./Types.js";
import { TreeConstants } from "./TreeConstants.js";
import { TreeConf } from "./TreeConf.js";
import { TreeAdapterModeConf } from "./TreeAdapterModeConf.js";
import { TreeAdapterModeEase } from "./TreeAdapterModeEase.js";
import { ArrayOrObjectPackage } from "./ArrayOrObjectPackage.js";


import { TreeInterface } from "./TreeInterface.js";


// Tree main class
export class Tree extends ImprovedRenderEventEmitter implements TreeInterface {

  debug: boolean;

  mainHtmlNodeId: any;

  mainHolderHtmlNode: HTMLElement|null;

  url: any|null;

  data: any|null;

  conf: TreeConf;

  subtreeLength: number;

  subtreeLengthDeep: number;

  templateRenderer: TemplateRenderer;

  contextMenuJSClass: any;

  renderingMode: number;

  nodesWithIcons: boolean;

  nodesOpenedMode: number;

  isModifiable: boolean;

  dataTypesCssClassesEnabled: boolean;

  adapter: ITreeAdapter;



  constructor() {
    super();

    this.debug = TreeConstants.Defaults.debug;

    this.mainHtmlNodeId = "";
    this.mainHolderHtmlNode = null;

    this.url = "";

    this.data = null;
    this.conf = new TreeConf();

    this.subtreeLength = 0;
    this.subtreeLengthDeep = 0;

    this.templateRenderer = new TemplateRenderer();


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
    this.setDebug(TreeConstants.Defaults.debug);
    this.renderingMode = TreeConstants.Defaults.renderingMode;
    this.nodesWithIcons = TreeConstants.Defaults.nodesWithIcons;
    this.nodesOpenedMode = TreeConstants.Defaults.nodesOpenedMode;
    this.isModifiable = TreeConstants.Defaults.isModifiable;
    this.dataTypesCssClassesEnabled = TreeConstants.Defaults.dataTypesCssClassesEnabled;
    this.adapter = new TreeAdapterModeEase();
  }



  setDebug(debug: boolean): Tree {

    // optional method
    super.setDebug(debug);
    this.templateRenderer.setDebug(debug);
    this.debug = debug;


    return this;
  }



  setNodesWithIcons(withIcons: boolean): Tree {

    // optional method
    this.nodesWithIcons = withIcons;


    return this;
  }



  setNodesOpenedMode(openedMode: number): Tree {

    // optional method
    this.nodesOpenedMode = openedMode;


    return this;
  }



  setUrl(url: any|null): Tree {

    // optional method
    this.url = url;


    return this;
  }



  setMainHtmlNodeId(mainHtmlNodeId: any): Tree {

    // required method
    this.mainHtmlNodeId = mainHtmlNodeId;


    return this;
  }



  setConf(conf: TreeConf): Tree {

    // optional method
    this.conf = conf;


    return this;
  }



  setModifiable(isModifiable: boolean): Tree {

    // optional method
    this.isModifiable = isModifiable;


    return this;
  }



  setRenderingMode(mode: number): Tree {

    // optional method
    this.renderingMode = mode;


    return this;
  }



  setDataTypesCssClassesEnabled(dataTypesCssEnabled: boolean): Tree {
    this.dataTypesCssClassesEnabled = dataTypesCssEnabled;


    return this;
  }



  load(url: any|null): Tree {

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



  adaptRenderingModeSubcalls(): void {

    if (this.renderingMode === TreeConstants.RenderingMode.Conf) {
      this.adapter = new TreeAdapterModeConf();

      if (this.dataTypesCssClassesEnabled === true) {
        this.getTreeNodeCssClasses = this.adapter.getTreeNodeCssClasses__dataTypesCssClassesEnabled.bind(this);
      } else {
        this.getTreeNodeCssClasses = this.adapter.getTreeNodeCssClasses__dataTypesCssClassesDisabled.bind(this);
      }
    } else if (this.renderingMode === TreeConstants.RenderingMode.Ease) {
      this.adapter = new TreeAdapterModeEase();

      if (this.dataTypesCssClassesEnabled === true) {
        this.getTreeNodeCssClasses = this.adapter.getTreeNodeCssClasses__dataTypesCssClassesEnabled.bind(this);
      } else {

        // this.getTreeNodeCssClasses = this.getTreeNodeCssClasses__dataTypesCssClassesDisabled__renderingModeConf.bind(this);
      }
    }

    this.getSubtreeNodeToRender = this.adapter.getSubtreeNodeToRender.bind(this);
    this.getDataForRendering = this.adapter.getDataForRendering.bind(this);
  }



  reRender(): Tree {
    this.render(this.data);


    return this;
  }



  render(nodes: any): Tree {

    if (nodes) {
      this.data = nodes;
    }

    if (
      !this.data
        || !this.conf
    ) {
      throw new Error(`Empty: data ${this.data} or conf ${this.conf}`);
    }

    this.mainHolderHtmlNode = document.getElementById(this.mainHtmlNodeId);

    if (!this.mainHolderHtmlNode) {
      throw new Error("Tree holder html node ID did not match any html node in this html doc.");
    }

    this.adaptRenderingModeSubcalls();


    // set main css class name to the main tree holder html node
    if (
      this.mainHolderHtmlNode.classList
          && !this.mainHolderHtmlNode.classList.contains(
            TreeConstants.TreeCssClassNames.MAIN_CLASS_NAME
          )
    ) {
      this.mainHolderHtmlNode.classList.add(TreeConstants.TreeCssClassNames.MAIN_CLASS_NAME);
    } else if (!this.mainHolderHtmlNode.classList) {
      this.mainHolderHtmlNode.className = (TreeConstants.TreeCssClassNames.MAIN_CLASS_NAME);
    }

    if (this.nodesWithIcons === true) {
      this.mainHolderHtmlNode.classList.add(TreeConstants.TreeCssClassNames.CLASS_NAME_WITH_ICONS);
    } else {
      this.mainHolderHtmlNode.classList.remove(TreeConstants.TreeCssClassNames.CLASS_NAME_WITH_ICONS);
    }


    // add an html holder node for subtree html nodes
    const ul = document.createElement("UL");


    // get datatype of the main json data node
    const dataType: number = ArrayOrObjectPackage.getDataType(nodes);

    let isArray: number = 0;

    if (dataType === ArrayOrObjectPackage.JsonDataType.ARRAY) {
      isArray = 1;
    } else if (dataType !== ArrayOrObjectPackage.JsonDataType.OBJECT) {
      throw new Error("Arrays or Objects supported. This JSON Data is not iterable.");
    }


    // get info on subtree nodes amount
    const { itemsAmount, objectKeys } = ArrayOrObjectPackage.getArrayOrObjectItemsAmount(
      isArray,
      this.data
    );
    const subtreeNodesCount: number = itemsAmount;


    // exit throwing exception, if the tree json data is empty
    if (subtreeNodesCount === 0) {
      throw new Error("Tree json data is empty.");
    }

    const flatNodeHolderClone: any = { _pathArray: ["this.data"] };
    let subtreeRenderResult: any;

    if (this.renderingMode === TreeConstants.RenderingMode.Conf) {

      if (isArray === 1) {
        subtreeRenderResult = this.renderSubtree(
          isArray,
          this.data,
          flatNodeHolderClone,
          objectKeys,
          ul
        );


        // @ts-ignore
        this.subtreeLength = subtreeNodesCount;


        // @ts-ignore
        this.subtreeLengthDeep = subtreeRenderResult;
      } else if (isArray === 0) {
        const isTreeItem: boolean = this.getInModeConfDataNodeIsTreeItem(this.data);


        // the root json data node is the tree item data node
        if (isTreeItem) {
          const renderResult: any = this.renderOneTreeNode(
            this.data,
            0,
            "Top",
            { _pathArray: ["this.data"] },
            ul
          );
          const { currentNodeSubtreeLength } = renderResult;
          this.data = renderResult.node;


          // @ts-ignore
          this.subtreeLength = subtreeNodesCount;


          // @ts-ignore
          this.subtreeLengthDeep = currentNodeSubtreeLength;
        } else {

          // the root json data node is the associative array of tree item data nodes, suggested, if not so, then will not be rendered.
          subtreeRenderResult = this.renderSubtree(
            isArray,
            this.data,
            flatNodeHolderClone,
            objectKeys,
            ul
          );


          // @ts-ignore
          this.subtreeLength = subtreeNodesCount;


          // @ts-ignore
          this.subtreeLengthDeep = subtreeRenderResult;
        }
      }
    } else if (this.renderingMode === TreeConstants.RenderingMode.Ease) {
      const renderResult: any = this.renderOneTreeNode(
        { "Json Root": this.data },
        0,
        "Top",
        { _pathArray: ["this.data"] },
        ul
      );
      const { currentNodeSubtreeLength } = renderResult;


      // this.data = renderResult.node[0];
      // @ts-ignore
      this.subtreeLength = subtreeNodesCount;


      // @ts-ignore
      this.subtreeLengthDeep = currentNodeSubtreeLength;
    }

    if (this.debug) {
      console.log(
        "Tree.data",
        this.data
      );
    }


    this.mainHolderHtmlNode.append(ul);


    // all eventsHandlers, assigned with addJSTreeEventListener,
    // here will be attached to one DOM event listener
    this.addJSTreeEventListeners();


    return this;
  }



  checkDataNodeSubtree(
    node: any
  ): {
      isArray: number,
      subtreeNodeDataType: number,
      subtreeNodeDataTypeString: any,
      hasSubtree: boolean,
      subtreeJsonNodes: any,
      objectKeys: any[]|null
    } {
    let hasSubtree: boolean = false;

    let subtreeJsonNodes: any = null;

    if (this.renderingMode === TreeConstants.RenderingMode.Conf) {
      subtreeJsonNodes = node[this.conf.SUBTREE];
    } else if (this.renderingMode === TreeConstants.RenderingMode.Ease) {
      subtreeJsonNodes = Object.values(node)[0];
    }

    const { dataTypeString, dataType } = ArrayOrObjectPackage.getDataTypeStringAndConst(subtreeJsonNodes);
    const isArray: number = ((dataType === ArrayOrObjectPackage.JsonDataType.ARRAY) ? 1 : 0);

    if (
      (!subtreeJsonNodes)
      || (subtreeJsonNodes.length === 0)
        || (
          (dataType !== ArrayOrObjectPackage.JsonDataType.ARRAY)
          && (dataType !== ArrayOrObjectPackage.JsonDataType.OBJECT)
        )
    ) {
      return {
        isArray,
        subtreeNodeDataType: dataType,
        subtreeNodeDataTypeString: dataTypeString,
        hasSubtree,
        subtreeJsonNodes,
        objectKeys: null
      };
    }
    const { itemsAmount, objectKeys } = ArrayOrObjectPackage.getArrayOrObjectItemsAmount(
      isArray,
      subtreeJsonNodes
    );

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



  renderSubtree(
    isArray: number,
    subtreeNodes: any,
    flatNodeHolderClone: any,
    objectKeys: any[]|null,
    subtreeHtmlHolder: HTMLElement
  ): number {
    const renderSubtreeResult: any = ArrayOrObjectPackage.iterateOverArrayOrObjectDefined(
      isArray,
      subtreeNodes,
      this.renderSubtreeCallback.bind(this),
      {
        subtreeHtmlHolder,
        flatNodeHolderClone
      },
      objectKeys
    );


    return renderSubtreeResult;
  }



  renderSubtreeCallback(
    _isArray: number,
    loopCounter: number,
    loopPropertyValue: any,
    loopPropertyKey: any,
    _arrayOrObject: any,
    previousCallbackResult: number|null,
    callbackPayload: any
  ): number {
    let currentNodeSubtreeLength: number = (previousCallbackResult) || 0;
    const { subtreeHtmlHolder, flatNodeHolderClone } = callbackPayload;

    const subtreeJsonNode: object = this.getSubtreeNodeToRender(
      loopPropertyValue,
      loopPropertyKey
    );


    // RENDERING ONE TREE NODE
    const renderResult: ITreeRenderRetValue = this.renderOneTreeNode(
      subtreeJsonNode,
      loopCounter,
      loopPropertyKey,
      flatNodeHolderClone,
      subtreeHtmlHolder
    );

    currentNodeSubtreeLength += renderResult.currentNodeSubtreeLength;


    return currentNodeSubtreeLength;
  }



  renderOneTreeNode(
    node: any,
    nodePosition: number,
    nodeKey: any,
    flatNodeHolderClone: any,
    holder: HTMLElement
  ): ITreeRenderRetValue {

    if (this.debug) {
      console.log(node);
    }

    const nodeClone: any = this.updateDataNodeIdAndPath(
      node,
      nodePosition,
      nodeKey,
      flatNodeHolderClone,
      holder
    );

    const {
      isArray, subtreeNodeDataTypeString, hasSubtree, subtreeJsonNodes, objectKeys
    }: {
          isArray: number;
          subtreeNodeDataType: number;
          subtreeNodeDataTypeString: any;
          hasSubtree: boolean;
          subtreeJsonNodes: any;
          objectKeys: any[]|null;
        } = this.checkDataNodeSubtree(node);


    // TODO: EXTENSIBILITY FEATURE
    let dataForRendering: IRenderTemplateRendererData|null = this.getDataForRendering(
      node,
      nodeClone,
      subtreeNodeDataTypeString,
      hasSubtree
    );


    const eventBeforeRenderOneNodePayload: object = {
      "eventName": TreeConstants.TreeEventsNames.EVENT_NAME__BEFORE_RENDER_ONE_NODE,
      "dataForRendering": dataForRendering
    };

    const eventBeforeRenderResultsArray: EventEmitResult[] = this.emitEvent (
      TreeConstants.TreeEventsNames.EVENT_NAME__BEFORE_RENDER_ONE_NODE,
      eventBeforeRenderOneNodePayload
    );

    const eventResultsLength: number = eventBeforeRenderResultsArray.length;
    let lastEventRenderResultId: number = 0;
    let lastEventResult: EventEmitResult = new Object() as EventEmitResult;

    if ( ( eventResultsLength >= 1 ) && lastEventResult && lastEventResult.result ) {
      lastEventRenderResultId = ( eventResultsLength - 1 );
      lastEventResult = eventBeforeRenderResultsArray[ lastEventRenderResultId ] as EventEmitResult;


      //@ts-ignore
      dataForRendering = lastEventResult.result.value;
    }



    const nodeHtml: any = this.templateRenderer
      .setTemplate(TreeConstants.TEMPLATE__TREE_HTML_NODE)


    // @ts-ignore
      .setData(dataForRendering)
      .render();

    holder.insertAdjacentHTML(
      "beforeend",
      nodeHtml
    );


    // @ts-ignore
    const holderLiItems: HTMLCollection = holder.getElementsByTagName("LI");
    const li: HTMLElement|null = holderLiItems.item(holderLiItems.length - 1) as HTMLElement;

    if (li === null) {
      throw new Error("Rendiring broken, wrong html structure built.");
    }

    const eventAfterRenderOneNodePayload: object = {
      "eventName": TreeConstants.TreeEventsNames.EVENT_NAME__AFTER_RENDER_ONE_NODE,
      "treeHtmlNode": li,
      "treeItemJson": nodeClone
    };

    if (!hasSubtree) {
      this.emitEvent(
        TreeConstants.TreeEventsNames.EVENT_NAME__AFTER_RENDER_ONE_NODE,
        eventAfterRenderOneNodePayload
      );


      return {
        currentNodeSubtreeLength: 0,
        node: nodeClone
      };
    }

    const ul: HTMLElement|null = li.getElementsByTagName("UL")[0] as HTMLElement;


    // @ts-ignore
    if (this.nodesOpenedMode === TreeConstants.NodesOpenedMode.ALL_HIDE) {
      ul.style.display = "none";
    } else if (
      (!node[this.conf.NODE__OPENED])
      && (this.nodesOpenedMode === TreeConstants.NodesOpenedMode.JSON_DATA_DEFINED)
    ) {
      ul.style.display = "none";
    } else if (
      (node[this.conf.NODE__OPENED] === true)
      && (this.nodesOpenedMode === TreeConstants.NodesOpenedMode.JSON_DATA_DEFINED)
    ) {
      ul.style.display = "block";
    } else if (this.nodesOpenedMode === TreeConstants.NodesOpenedMode.ALL_SHOWN) {
      ul.style.display = "block";
    }

    const subtreeRenderResult: any = this.renderSubtree(
      isArray,
      subtreeJsonNodes,
      nodeClone,
      objectKeys,
      ul
    );

    this.emitEvent(
      TreeConstants.TreeEventsNames.EVENT_NAME__AFTER_RENDER_ONE_NODE,
      eventAfterRenderOneNodePayload
    );


    return {
      currentNodeSubtreeLength: subtreeRenderResult.currentNodeSubtreeLength,
      node: null


      // CHECK OUT WHETHER BOKEN WHEN NOW NULL
    };
  }


  // TEMPORARY IMPL TO KEEP POINTERS TO JSON DATA NODES IN HTML TREE NODES IN HTML NODE DATA ATTRIBUTES
  updateDataNodeIdAndPath(
    node: any,
    nodePosition: number,
    nodeKey: any,
    flatNodeHolderClone: any,
    _holder: HTMLElement
  ): any {
    const id: any = node[this.conf.NODE__ID] ?? null;
    const holderId: any = node[this.conf.NODE__HOLDER_ID] ?? null;
    const flatCloneHolderId: any = flatNodeHolderClone._flatClone ? flatNodeHolderClone._flatClone[this.conf.NODE__ID] : null;

    const pathInJsonOfNodeHolder: any[] = flatNodeHolderClone._pathArray ?? ["ROOT-unhandled"];


    // let pathKeyInNodeHolder = JSON.stringify(nodeKey);
    let pathInJsonArray: any[] = [
      ...pathInJsonOfNodeHolder
    ];

    if ((pathInJsonOfNodeHolder.length > 1) && this.renderingMode === TreeConstants.RenderingMode.Conf) {

      // const subtreePropName: any = JSON.stringify(this.conf.SUBTREE);
      pathInJsonArray.push(this.conf.SUBTREE);
      pathInJsonArray.push(nodeKey);


      //pathKeyInNodeHolder = `[${subtreePropName}][${pathKeyInNodeHolder}]`;
    } else if (this.renderingMode === TreeConstants.RenderingMode.Ease) {

      //pathKeyInNodeHolder = `[${pathKeyInNodeHolder}]`;
      pathInJsonArray.push(nodeKey);
    } else {

      //pathKeyInNodeHolder = `[${pathKeyInNodeHolder}]`;
      pathInJsonArray.push(nodeKey);
    }

    const pathInJsonString: any = pathInJsonArray
      .map((
        jPathIndex: any,
        index: number
      ) => {
        const jPathIndexText: any = JSON.stringify( jPathIndex );


        return (index === 0) ? jPathIndex : `[${jPathIndexText}]`;
      })
      .join("");

    const flatNodeClone: any = {};

    for (const propName in node) {
      const propValue: any = node[propName];
      const dataType: any = (typeof propValue);

      if (dataType === "object") {
        continue;
      }

      flatNodeClone[propName] = propValue;
    }

    const nodeClone: any = {
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



  getTreeDataByJPath ( jPathArray: any[] ): any {

    // since complexity of building jPath array in modeEase and modeConf, the JPathArray is not the same,
    // and modeEase was built from item at index 2, since it has array item at index 1 "Top": this.data["Top"], and modeConf does not have this array item.
    // modeConf was built recursively already from item at index 1.
    const startingIndexValidJPath: number = ( this.renderingMode === TreeConstants.RenderingMode.Conf ) ? 1 : 2;

    let retVal: any = new Object();
    retVal = JPath.getByJPath(
      jPathArray.slice( startingIndexValidJPath ),
      this.data
    );


    return retVal;

  }


  // ADAPTIVE PLACEHOLDERS
  getSubtreeNodeToRender(
    _loopPropertyValue: any,
    _loopPropertyKey: any
  ): any {
    return null;
  }



  getDataForRendering(
    _node: any,
    _flatNodeClone: any,
    _dataTypeString: any,
    _hasSubtree: boolean
  ): IRenderTemplateRendererData {
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



  getTreeNodeCssClasses(
    _dataType: any,
    _node: any
  ): any {
    return "";
  }


  // FINISH BLOCK ADAPTIVE PLACEHOLDERS
  // EVENTS BLOCK
  addJSTreeEventListener (
    eventName: any,
    eventHandler: (eventName: any, payload: any) => EventHandlerReturnValue|null|undefined|void
  ): Tree {

    // the holder class LargeDomEventListenersOverheadOptimizer method call
    this.addThisClassEventListener (
      eventName,
      eventHandler
    );


    return this;
  }


  // the predefined events handlers
  addJSTreeEventListeners(): Tree {

    // the holder class LargeDomEventListenersOverheadOptimizer method call
    // Here is the predefined open button handler,
    // In Your custom code, this way You can define event handlers for heavy tree json data,
    // and the tree will not be overloaded of large number of events listeners on many html nodes.
    this.addDomEventListener(
      "click",
      ".open-button",
      this.initializeCustomJsTreeImprovedEventHandler (
        TreeConstants.TreeEventsNames.EVENT_NAME__TREE_NODE_EXPAND_BUTTON__CLICK,
        this.openButtonClickHandler.bind(this)
      )
    );

    this.addDomEventListener(
      "click",
      ".jstree-html-node-label",
      this.initializeCustomJsTreeImprovedEventHandler (
        TreeConstants.TreeEventsNames.EVENT_NAME__TREE_NODE_LABEL__CLICK,
        this.treeNodeLableClickHandler.bind(this)
      )
    );


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
  initializeCustomJsTreeImprovedEventHandler (
    jsTreeEventName: any,
    customEventHandler: any
  ) {
    return ( eventPayload: any ) => {
      const treeHtmlNode = eventPayload.eventTarget.closest(".jstree-html-node");

      const jsonNode = JSON.parse(this.unescapeHTMLFromAttribute(treeHtmlNode.dataset.json));

      if (this.debug === true) {
        console.log(
          eventPayload.event.type,
          treeHtmlNode,
          jsonNode
        );
      }

      eventPayload = {
        ...eventPayload,
        jsonNode,
        treeHtmlNode,
        treeHtmlNodeHolder: treeHtmlNode.closest("li")
      };

      customEventHandler.call(
        this,
        eventPayload);

      this.emitEvent (
        jsTreeEventName,
        eventPayload
      );

    };
  }


  // the predefined events handlers
  openButtonClickHandler(eventPayload: any) {
    const toggleButton = eventPayload.eventTarget;

    if (
      toggleButton.classList.contains(TreeConstants.TreeCssClassNames.CLASS_WITHOUT_SUBTREE)
    ) {
      return;
    }

    const subtreeContainer = toggleButton.closest("li").getElementsByTagName("ul")[0];
    const isOpened = toggleButton.classList.contains(TreeConstants.TreeCssClassNames.CLASS_OPENED);

    if (isOpened) {
      toggleButton.classList.remove(TreeConstants.TreeCssClassNames.CLASS_OPENED);
      subtreeContainer.style.display = "none";
    } else {
      toggleButton.classList.add(TreeConstants.TreeCssClassNames.CLASS_OPENED);
      subtreeContainer.style.display = "block";
    }
  }


  // the predefined events handlers
  treeNodeLableClickHandler(_eventPayload: any) {

    // example for custom event handler, the placeholder
  }


  // END EVENTS BLOCK
  getInModeConfDataNodeIsTreeItem(node: object): boolean {

    // @ts-ignore
    const nodeLabelTextPropertyValue: any = node[this.conf.NODE_LABEL__TEXT];


    // the main conf required dsts json field is label text. and it cannot be an object, but a string or number.
    const isTreeItem: boolean = (nodeLabelTextPropertyValue && ((nodeLabelTextPropertyValue) !== "object"));


    return isTreeItem;
  }



  escapeHTMLForAttribute(str: any): any {
    return str
      .replace( /"/g, "&quot;" )


    // Replace double quotes
      .replace( /'/g, "&#39;" )


    // Replace single quotes
      .replace( /</g, "&lt;" )


    // Replace <
      .replace( />/g, "&gt;" );


    // Replace >
  }



  unescapeHTMLFromAttribute(str: any|undefined): any {

    if (!str) {
      return "";
    }


    return str
      .replace( /&quot;/g, "\"" )


    // Replace double quotes
      .replace( /&#39;/g, "'" )


    // Replace single quotes
      .replace( /&lt;/g, "<" )


    // Replace <
      .replace( /&gt;/g, ">" );


    // Replace >
  }



  getTreeHtmlNodeDatasetJson(htmlNode: HTMLElement|null): any {

    if (htmlNode === null) {
      return "";
    }


    return JSON.parse(this.unescapeHTMLFromAttribute(htmlNode.dataset.json));
  }
}
