# HELLO WORLD

# JS PACKAGE jaisocx/tree


## What is this

The js site ui tool to render a multilevel nested objects json.


## How to use in ts code

```
    <h1>Tree examples</h1>

    <h2>json subtree type array</h2>
    <div id="example-tree-holder_SubtreeArrayOfObjects"></div>

    <h2>json subtree type object</h2>
    <div id="example-tree-holder_SubtreeLikeObjects" class="theme-funny"></div>

    <h2>load by url (should work only when published at an http server)</h2>
    <div id="example-tree-holder_load_by_url"></div>

    <script>

    const treeJson_SubtreeArrayOfObjects = [
    {
      "icon": "examples/ExampleTree/custom-theme-icons/house.png",
      "label": "Main",
      "opened": false,
      "text": "<h3>Main tree elem</h3>",
      "subtree": [
        {
          "icon": "examples/ExampleTree/custom-theme-icons/google.png",
          "label": "A Link to Google", 
          "href": "https://google.com/",
          "cssClassName": "hyperlink"
        },
        {
          "icon": "examples/ExampleTree/custom-theme-icons/github.png",
          "label": "A Link to GitHub", 
          "href": "https://github.com/orgs/Jaisocx-Tools/repositories",
          "cssClassName": "hyperlink"
        },
        {
          "icon": "examples/ExampleTree/custom-theme-icons/catalog.png",
          "label": "echo html",
          "opened": false,
          "subtree": [
            {
              "icon": "examples/ExampleTree/custom-theme-icons/html.png",
              "label": "html 1", 
              "href": "javascript: void(0);",
              "text": "<h3>Hello World!</h3><p style=\"color:#26d;\">Have fun with styling and using JSTree tool.</p>"
            },
            {
              "icon": "examples/ExampleTree/custom-theme-icons/html.png",
              "label": "html 2", 
              "href": "javascript: void(0);",
              "text": "<h3>Hello World!</h3><p style=\"color:#d83;\">You can edit code easily, JSTree class is lightweight.</p>"
            },
            {
              "icon": "examples/ExampleTree/custom-theme-icons/html.png",
              "label": "html 3", 
              "href": "javascript: void(0);",
              "text": "<h3>Hello World!</h3><p style=\"color:#00bb00;\">Have a nice day.</p>"
            }
          ]
        }
      ]
    }
  ];

      document.addEventListener('DOMContentLoaded', () => {
        const tree_SubtreeArrayOfObjects = new Tree();
        tree_SubtreeArrayOfObjects
          .setDebug(false)
          .setMainHtmlNodeId("example-tree-holder_SubtreeArrayOfObjects")
          .setNodesWithIcons(true)
          .setNodesOpenedMode(TreeConstants.NodesOpenedMode.ALL_SHOWN)
          .setModifiable(false)
          .setRenderingMode(TreeConstants.RenderingMode.Conf)
          .addJSTreeEventListener (
            TreeConstants.TreeEventsNames.EVENT_NAME__TREE_NODE_LABEL__CLICK,
            (evt) => {
              console.log(evt);
            }
          )
          .render(treeJson_SubtreeArrayOfObjects);


        // minimum setters amount required
        const tree_SubtreeLikeObjects = new Tree();
        tree_SubtreeLikeObjects
          .setMainHtmlNodeId("example-tree-holder_SubtreeLikeObjects")
          .setNodesOpenedMode(TreeConstants.NodesOpenedMode.JSON_DATA_DEFINED)
          .setNodesWithIcons(true)
          .setRenderingMode(TreeConstants.RenderingMode.Conf)
          .render(treeJson_SubtreeLikeObjects);

        // example to load by url
        const tree_load_by_url = new Tree();
        tree_load_by_url
            .setMainHtmlNodeId("example-tree-holder_load_by_url")
            .setRenderingMode(TreeConstants.RenderingMode.Conf)
            .load("examples/ExampleTree/json/tree-data.json");

      });
    </script>
```


## Constants

```
import {
  IRenderingMode, ITreeCssClassNames, ITreeEventsNames, ITreeDefaults,
  INodesOpenedMode
} from "./Types.js";

export class TreeConstants {
  static RenderingMode: IRenderingMode = {
    Ease: 1,
    Conf: 2,
  };

  static NodesOpenedMode: INodesOpenedMode = {
    ALL_SHOWN: 1,
    JSON_DATA_DEFINED: 2,
    ALL_HIDDEN: 3,
  };

  static TreeCssClassNames: ITreeCssClassNames = {
    MAIN_CLASS_NAME: "tree",

    CLASS_NAME_WITH_ICONS: "with-icons",

    CLASS_OPENED: "toggle-with-subtree-opened",
    CLASS_WITHOUT_SUBTREE: "toggle-without-subtree",
    CLASS_ICON_SHOW: "icon-show",
    CLASS_ICON_HIDE: "icon-hide",

    CLASS_AND_ID__CONTEXT_MENU: "context-menu-container",

    CLASS_DATATYPE_OBJECT: "holder-datatype--object",
    CLASS_DATATYPE_ARRAY: "holder-datatype--array",
    CLASS_DATATYPE_STRING: "holder-datatype--string",
    CLASS_DATATYPE_NUMBER: "holder-datatype--number",
    CLASS_DATATYPE_BOOLEAN: "holder-datatype--boolean",
    PREFIX__CLASS_DATATYPE: "holder-datatype--",
  };

  static TreeEventsNames: ITreeEventsNames = {
    EVENT_NAME__AFTER_RENDER_ONE_NODE: "afterRenderOneNode",
    EVENT_NAME__TREE_NODE_EXPAND_BUTTON__CLICK: "openButtonClick",
    EVENT_NAME__TREE_NODE_LABEL__CLICK: "treeNodeLabelClick",
  };

  static TEMPLATE__TREE_HTML_NODE: string = `
<li 
    data-id="{{ dataId }}" 
    data-holder-id="{{ dataHolderId }}" 
    data-order="{{ dataOrder }}"
    {{ cssClasses }}>

    <pre class="jstree-html-node" data-json="{{ dataJson }}">
        <pre class="open-button  {{ openButtonStateClassName }}">
            <pre class="opened"></pre>
            <pre class="closed"></pre>
            <pre class="without-subtree"></pre>
            <pre class="animated"></pre>
        </pre>

        <pre class="jstree-html-node-holder-icon {{ iconShowClassName }}">
            <img src="{{ iconSrc }}" />
        </pre>

        <a href="{{ hyperlink }}" class="jstree-html-node-label">{{ labelText }}</a>
    </pre>
    
    <ul></ul>
</li>        
        `;

  static Defaults: ITreeDefaults = {
    debug: false,
    renderingMode: TreeConstants.RenderingMode.Ease,
    nodesWithIcons: true,
    nodesOpenedMode: TreeConstants.NodesOpenedMode.ALL_HIDDEN,
    isModifiable: false,
    dataTypesCssClassesEnabled: true,
  };
}

```

## Types

```
export interface ITreeDefaults {
  debug: boolean;
  renderingMode: number;
  nodesWithIcons: boolean;
  nodesOpenedMode: number;
  isModifiable: boolean;
  dataTypesCssClassesEnabled: boolean;
}

export interface ITreeRenderRetValue {
  currentNodeSubtreeLength: number;
  node: any;
}

export interface IRenderSubtreeResult {
  currentNodeSubtreeLength: number;
  subtreeJsonNodesLength: number;
  // subtreeNodes: any;
}

export interface IRenderingMode {
  Ease: number;
  Conf: number;
}

export interface INodesOpenedMode {
  ALL_SHOWN: number;
  JSON_DATA_DEFINED: number;
  ALL_HIDDEN: number;
}

export interface IRenderTemplateRendererData {
  iconSrc: string;
  iconShowClassName: string;
  labelText: string;
  hyperlink: string;
  cssClasses: string;
  dataId: string;
  dataHolderId: string;
  dataOrder: string;
  dataJson: string;
  openButtonStateClassName: string;
  hasSubtree: boolean;
}

export interface ITreeCssClassNames {
  MAIN_CLASS_NAME: string;

  CLASS_NAME_WITH_ICONS: string;

  CLASS_OPENED: string;
  CLASS_WITHOUT_SUBTREE: string;
  CLASS_ICON_SHOW: string;
  CLASS_ICON_HIDE: string;

  CLASS_AND_ID__CONTEXT_MENU: string;

  CLASS_DATATYPE_OBJECT: string;
  CLASS_DATATYPE_ARRAY: string;
  CLASS_DATATYPE_STRING: string;
  CLASS_DATATYPE_NUMBER: string;
  CLASS_DATATYPE_BOOLEAN: string;

  PREFIX__CLASS_DATATYPE: string;
}

export interface ITreeEventsNames {
  EVENT_NAME__AFTER_RENDER_ONE_NODE: string;
  EVENT_NAME__TREE_NODE_EXPAND_BUTTON__CLICK: string;
  EVENT_NAME__TREE_NODE_LABEL__CLICK: string;
}

export interface ITreeAdapter {

  getSubtreeNodeToRender (
    loopPropertyValue: any,
    loopPropertyKey: any
  ): any;

  getDataForRendering (
    node: any,
    flatNodeClone: any,
    dataTypeString: string,
    nodeHasSubtree: boolean
  ): IRenderTemplateRendererData;

  getTreeNodeCssClasses__dataTypesCssClassesEnabled (
    dataType: string,
    node: any
  ): string;

  getTreeNodeCssClasses__dataTypesCssClassesDisabled (
    dataType: string,
    node: any
  ): string;
}

```

## Conf default

```
export class TreeConf {
  NODE_ICON__SRC: string;
  NODE_LABEL__TEXT: string;
  SUBTREE: string;
  NODE__ID: string;
  NODE__HOLDER_ID: string;
  NODE__PATH: string;
  NODE__ORDER: string;
  NODE__HYPERLINK: string;
  NODE__OPENED: string;
  NODE__CSS_CLASS_NAME: string;
  NODE__ART: string;

  constructor() {
    this.NODE_ICON__SRC = "icon";
    this.NODE_LABEL__TEXT = "label";
    this.SUBTREE = "subtree";

    this.NODE__ID = "id";
    this.NODE__HOLDER_ID = "holderId";
    this.NODE__PATH = "PATH";
    this.NODE__ORDER = "order";

    this.NODE__HYPERLINK = "href";
    this.NODE__OPENED = "opened";
    this.NODE__CSS_CLASS_NAME = "cssClassName";
    this.NODE__ART = "art";
  }
}

```


Yours [jaisocx.com](https://jaisocx.com/) Software Architect and Dev,

Elias






