"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleTree = void 0;
const tree_1 = require("@jaisocx/tree");
class ExampleTree {
    constructor(id, url) {
        this.holderId = id;
        this.url = url;
        this.render(id, url);
    }
    render(id, url) {
        const tree = new tree_1.Tree();
        tree
            .setDebug(false)
            .setMainHtmlNodeId(id)
            .setDataTypesCssClassesEnabled(true)
            .setNodesWithIcons(true)
            .setNodesOpenedMode(tree_1.TreeConstants.NodesOpenedMode.ALL_HIDE)
            .setRenderingMode(tree_1.TreeConstants.RenderingMode.Ease)
            .setModifiable(false)
            .addJSTreeEventListener(tree_1.TreeConstants.TreeEventsNames.EVENT_NAME__TREE_NODE_LABEL__CLICK, (eventName, payload) => {
            console.log(payload);
        })
            .load(url);
    }
}
exports.ExampleTree = ExampleTree;
//# sourceMappingURL=ExampleTree.js.map