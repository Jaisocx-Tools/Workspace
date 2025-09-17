# HELLO WORLD

# JS PACKAGE jaisocx/tree

[https://github.com/Jaisocx-Tools/Workspace](https://github.com/Jaisocx-Tools/Workspace)


## Watch In Action:

[https://sandbox.brightday.email/tree.html](https://sandbox.brightday.email/tree.html)


## tarball

[https://sandbox.brightday.email/sites_tools/js_tools/Tree/jaisocx-tree-2.2.16.tgz](https://sandbox.brightday.email/sites_tools/js_tools/Tree/jaisocx-tree-2.2.16.tgz)




In Project "Workspace"
[https://github.com/Jaisocx-Tools/Workspace](https://github.com/Jaisocx-Tools/Workspace)

git clone ssh:
`git@github.com:Jaisocx-Tools/Workspace.git`

git clone https:
`https://github.com/Jaisocx-Tools/Workspace.git`

at relative path `workspace/ts/www/sites_tools/js_tools/Tree`



## What is this

The js site ui tool to render a multilevel nested objects json.



## How to use in ts code

### 1. Need to import js code first on html page.

#### 1.1. Webpack bundle.js

Need first webpack bundle.js, and to reference in tag script in html page.

#### 1.2. Like in tree preview example

[https://sandbox.brightday.email/tree.html](https://sandbox.brightday.email/tree.html)


### 2. then instantiate Tree class in html page in DOMContentLoaded event handler like here:

```
    <h1>Tree example</h1>

    <div id="example-tree-holder"></div>



    <!-- SCRIPT TO RENDER JSON IN TREE VIEW -->
    <script>
    
    let glob_TreeClassInstance = new Object();


    // JS VARIABLE JSON TO RENDER IN TREE VIEW
    const treeJsonData = [
    {
      "icon": "webpack_builds/ExampleTree/home_tree_mode_conf/house.png",
      "label": "Main",
      "opened": false,
      "text": "<h3>Main tree elem</h3>",
      "subtree": [
        {
          "icon": "webpack_builds/ExampleTree/home_tree_mode_conf/google.png",
          "label": "A Link to Google",
          "href": "https://google.com/",
          "cssClassName": "hyperlink"
        },
        {
          "icon": "webpack_builds/ExampleTree/home_tree_mode_conf/github.png",
          "label": "A Link to GitHub",
          "href": "https://github.com/orgs/Jaisocx-Tools/repositories",
          "cssClassName": "hyperlink"
        },
        {
          "icon": "webpack_builds/ExampleTree/home_tree_mode_conf/catalog.png",
          "label": "echo html",
          "opened": false,
          "subtree": [
            {
              "icon": "webpack_builds/ExampleTree/home_tree_mode_conf/html.png",
              "label": "html 1",
              "href": "javascript: void(0);",
              "text": "<h3>Hello World!</h3><p style=\"color:#26d;\">Have fun with styling and using JSTree tool.</p>"
            },
            {
              "icon": "webpack_builds/ExampleTree/home_tree_mode_conf/html.png",
              "label": "html 2",
              "href": "javascript: void(0);",
              "text": "<h3>Hello World!</h3><p style=\"color:#d83;\">You can edit code easily, JSTree class is lightweight.</p>"
            },
            {
              "icon": "webpack_builds/ExampleTree/home_tree_mode_conf/html.png",
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
        glob_TreeClassInstance = new Tree();
        
        glob_TreeClassInstance
          .setMainHtmlNodeId ( "example-tree-holder" )
          .render ( treeJsonData );
          
          
          
        /* 
        Another example with several methods to configure the Tree.
        glob_TreeClassInstance
          .setDebug ( true ) // turns on extended infos in browser's developer tools
          .setMainHtmlNodeId ( "example-tree-holder" )
          .setNodesWithIcons ( true ) // turns on mini images when in json data icon prop is set, or shows in mode ease icons of data types.
          .setNodesOpenedMode ( TreeConstants.NodesOpenedMode.ALL_SHOWN ) // .ALL_HIDE .JSON_DATA_DEFINED ( "opened": true )
          .setRenderingMode ( TreeConstants.RenderingMode.Conf ) // .Ease
          .addJSTreeEventListener ( // tree click example event handler
            TreeConstants.TreeEventsNames.EVENT_NAME__TREE_NODE_LABEL__CLICK,
            ( eventName, eventPayload ) => {
              console.log(eventName, eventPayload);
            }
          )
          .render ( treeJsonData ); */

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
    ALL_HIDE: 3,
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

  static TEMPLATE__TREE_HTML_NODE: any = `
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
    nodesOpenedMode: TreeConstants.NodesOpenedMode.ALL_HIDE,
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
  // subtree: any;
}

export interface IRenderingMode {
  Ease: number;
  Conf: number;
}

export interface INodesOpenedMode {
  ALL_SHOWN: number;
  JSON_DATA_DEFINED: number;
  ALL_HIDE: number;
}

export interface IRenderTemplateRendererData {
  iconSrc: any;
  iconShowClassName: any;
  labelText: any;
  hyperlink: any;
  cssClasses: any;
  dataId: any;
  dataHolderId: any;
  dataOrder: any;
  dataJson: any;
  openButtonStateClassName: any;
  hasSubtree: boolean;
}

export interface ITreeCssClassNames {
  MAIN_CLASS_NAME: any;

  CLASS_NAME_WITH_ICONS: any;

  CLASS_OPENED: any;
  CLASS_WITHOUT_SUBTREE: any;
  CLASS_ICON_SHOW: any;
  CLASS_ICON_HIDE: any;

  CLASS_AND_ID__CONTEXT_MENU: any;

  CLASS_DATATYPE_OBJECT: any;
  CLASS_DATATYPE_ARRAY: any;
  CLASS_DATATYPE_STRING: any;
  CLASS_DATATYPE_NUMBER: any;
  CLASS_DATATYPE_BOOLEAN: any;

  PREFIX__CLASS_DATATYPE: any;
}

export interface ITreeEventsNames {
  EVENT_NAME__AFTER_RENDER_ONE_NODE: any;
  EVENT_NAME__TREE_NODE_EXPAND_BUTTON__CLICK: any;
  EVENT_NAME__TREE_NODE_LABEL__CLICK: any;
}

export interface ITreeAdapter {

  getSubtreeNodeToRender (
    loopPropertyValue: any,
    loopPropertyKey: any
  ): any;

  getDataForRendering (
    node: any,
    flatNodeClone: any,
    dataTypeString: any,
    nodeHasSubtree: boolean
  ): IRenderTemplateRendererData;

  getTreeNodeCssClasses__dataTypesCssClassesEnabled (
    dataType: any,
    node: any
  ): any;

  getTreeNodeCssClasses__dataTypesCssClassesDisabled (
    dataType: any,
    node: any
  ): any;
}

```

## Conf default

```
export class TreeConf {
  NODE_ICON__SRC: any;
  NODE_LABEL__TEXT: any;
  SUBTREE: any;
  NODE__ID: any;
  NODE__HOLDER_ID: any;
  NODE__PATH: any;
  NODE__ORDER: any;
  NODE__HYPERLINK: any;
  NODE__OPENED: any;
  NODE__CSS_CLASS_NAME: any;
  NODE__ART: any;

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






