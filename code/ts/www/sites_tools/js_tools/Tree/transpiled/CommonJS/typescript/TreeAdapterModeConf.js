"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeAdapterModeConf = void 0;
const TreeAdapter_js_1 = require("./TreeAdapter.js");
const TreeConstants_js_1 = require("./TreeConstants.js");
class TreeAdapterModeConf extends TreeAdapter_js_1.TreeAdapter {
    getSubtreeNodeToRender(loopPropertyValue, loopPropertyKey) {
        return loopPropertyValue;
    }
    getDataForRendering(node, flatNodeClone, dataTypeString, hasSubtree) {
        var _a;
        let openButtonClassName = "";
        if (!hasSubtree) {
            openButtonClassName = TreeConstants_js_1.TreeConstants.TreeCssClassNames.CLASS_WITHOUT_SUBTREE;
            // @ts-ignore
        }
        else if ((this.nodesOpenedMode === TreeConstants_js_1.TreeConstants.NodesOpenedMode.ALL_SHOWN)) {
            openButtonClassName = TreeConstants_js_1.TreeConstants.TreeCssClassNames.CLASS_OPENED;
        }
        else if ((node[this.conf.NODE__OPENED] === true)
            && (this.nodesOpenedMode === TreeConstants_js_1.TreeConstants.NodesOpenedMode.JSON_DATA_DEFINED)) {
            openButtonClassName = TreeConstants_js_1.TreeConstants.TreeCssClassNames.CLASS_OPENED;
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
            hyperlink: (_a = node[this.conf.NODE__HYPERLINK]) !== null && _a !== void 0 ? _a : "javascript: void(0);",
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
            (TreeConstants_js_1.TreeConstants.TreeCssClassNames.PREFIX__CLASS_DATATYPE),
            (dataTypeString),
            ("\"")
        ];
        const cssClasses = cssClassesArray.join("");
        return cssClasses;
    }
    getTreeNodeCssClasses__dataTypesCssClassesDisabled(dataTypeString, node) {
        const cssClassesNodeValue = node[this.conf.NODE__CSS_CLASS_NAME];
        const cssClassesArray = [
            ("class=\""),
            (cssClassesNodeValue),
            ("\"")
        ];
        const cssClasses = cssClassesArray.join("");
        return cssClasses;
    }
    // dummy placeholders
    escapeHTMLForAttribute(arg) {
        throw new Error("Method not implemented.");
    }
    getTreeNodeCssClasses(dataTypeString, value) {
        throw new Error("Method not implemented.");
    }
}
exports.TreeAdapterModeConf = TreeAdapterModeConf;
//# sourceMappingURL=TreeAdapterModeConf.js.map