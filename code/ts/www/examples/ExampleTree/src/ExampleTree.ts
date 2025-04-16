import { Tree, TreeConstants } from "@jaisocx/tree";

export class ExampleTree {
  holderId: any;

  url: any;

  constructor(
    id: any,
    url: any
  ) {
    this.holderId = id;
    this.url = url;

    this.render(
      id,
      url
    );
  }

  render(
    id: any,
    url: any
  ): void {
    const tree = new Tree();
    tree
      .setDebug(false)
      .setMainHtmlNodeId(id)
      .setDataTypesCssClassesEnabled(true)
      .setNodesWithIcons(true)
      .setNodesOpenedMode(TreeConstants.NodesOpenedMode.ALL_HIDE)
      .setRenderingMode(TreeConstants.RenderingMode.Ease)
      .setModifiable(false)
      .addJSTreeEventListener(
        TreeConstants.TreeEventsNames.EVENT_NAME__TREE_NODE_LABEL__CLICK,
        (eventName: any, payload: any) => {
          console.log(payload);
        }
      )
      .load(url);
  }
}
