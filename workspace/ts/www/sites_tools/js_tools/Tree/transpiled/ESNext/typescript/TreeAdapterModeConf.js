import { TreeAdapter } from "./TreeAdapter.js";
import { TreeConstants } from "./TreeConstants.js";
export class TreeAdapterModeConf extends TreeAdapter {
    getSubtreeNodeToRender(_loopPropertyValue, _loopPropertyKey) {
        return _loopPropertyValue;
    }
    getDataForRendering(node, flatNodeClone, dataTypeString, hasSubtree) {
        let openButtonClassName = "";
        if (!hasSubtree) {
            openButtonClassName = TreeConstants.TreeCssClassNames.CLASS_WITHOUT_SUBTREE;
            // @ts-ignore
        }
        else if ((this.nodesOpenedMode === TreeConstants.NodesOpenedMode.ALL_SHOWN)) {
            openButtonClassName = TreeConstants.TreeCssClassNames.CLASS_OPENED;
        }
        else if ((node[this.conf.NODE__OPENED] === true)
            && (this.nodesOpenedMode === TreeConstants.NodesOpenedMode.JSON_DATA_DEFINED)) {
            openButtonClassName = TreeConstants.TreeCssClassNames.CLASS_OPENED;
        }
        const cssClasses = this.getTreeNodeCssClasses(dataTypeString, node);
        const dataForRendering = {
            dataId: node[this.conf.NODE__ID],
            dataHolderId: node[this.conf.NODE__HOLDER_ID],
            dataOrder: node[this.conf.NODE__ORDER],
            dataJson: this.escapeHTMLForAttribute(JSON.stringify(flatNodeClone)),
            openButtonStateClassName: openButtonClassName,
            cssClasses,
            iconSrc: node[this.conf.NODE_ICON__SRC],
            iconShowClassName: (this.nodesWithIcons || node[this.conf.NODE_ICON__SRC]) ? "icon-show" : "icon-hide",
            labelText: node[this.conf.NODE_LABEL__TEXT],
            hyperlink: node[this.conf.NODE__HYPERLINK] ?? "javascript: void(0);",
            hasSubtree
        };
        return dataForRendering;
    }
    getTreeNodeCssClasses__dataTypesCssClassesEnabled(dataTypeString, node) {
        const cssClassesNodeValue = node[this.conf.NODE__CSS_CLASS_NAME];
        const cssClassesArray = [
            ("class=\""),
            (cssClassesNodeValue),
            (" "),
            (TreeConstants.TreeCssClassNames.PREFIX__CLASS_DATATYPE),
            (dataTypeString),
            ("\"")
        ];
        const cssClasses = cssClassesArray.join("");
        return cssClasses;
    }
    getTreeNodeCssClasses__dataTypesCssClassesDisabled(_dataTypeString, _node) {
        const cssClassesNodeValue = _node[this.conf.NODE__CSS_CLASS_NAME];
        const cssClassesArray = [
            ("class=\""),
            (cssClassesNodeValue),
            ("\"")
        ];
        const cssClasses = cssClassesArray.join("");
        return cssClasses;
    }
    // dummy placeholders
    escapeHTMLForAttribute(_arg) {
        throw new Error("Method not implemented.");
    }
    getTreeNodeCssClasses(_dataTypeString, _value) {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=TreeAdapterModeConf.js.map