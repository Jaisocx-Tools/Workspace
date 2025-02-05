import { Tree, TreeConstants } from "@jaisocx/tree";
export class ExampleTree {
    holderId;
    url;
    constructor(id, url) {
        this.holderId = id;
        this.url = url;
        this.render(id, url);
    }
    render(id, url) {
        const tree = new Tree();
        tree
            .setDebug(false)
            .setMainHtmlNodeId(id)
            .setDataTypesCssClassesEnabled(true)
            .setNodesWithIcons(true)
            .setNodesOpenedMode(TreeConstants.NodesOpenedMode.ALL_HIDE)
            .setRenderingMode(TreeConstants.RenderingMode.Ease)
            .setModifiable(false)
            .addJSTreeEventListener(TreeConstants.TreeEventsNames.EVENT_NAME__TREE_NODE_LABEL__CLICK, (eventName, payload) => {
            console.log(payload);
        })
            .load(url);
    }
}
//# sourceMappingURL=ExampleTree.js.map