"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeAdapterModeConf = void 0;
const TreeAdapter_js_1 = require("./TreeAdapter.js");
const TreeConstants_js_1 = require("./TreeConstants.js");
class TreeAdapterModeConf extends TreeAdapter_js_1.TreeAdapter {
    getSubtreeNodeToRender(_loopPropertyValue, _loopPropertyKey) {
        return _loopPropertyValue;
    }
    getDataForRendering(node, flatNodeClone, dataTypeString, hasSubtree) {
        var _a;
        const SYMBOL_BACKGROUND_SPACE = String.fromCharCode(32);
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
        let confImageSrc = node[this.conf.NODE_ICON__SRC] || "";
        let isMiniImagesTagShown = this.nodesWithIcons;
        let isConfImageSrc = (confImageSrc.length !== 0);
        confImageSrc = (isMiniImagesTagShown && isConfImageSrc) ? confImageSrc : "";
        isConfImageSrc = (isMiniImagesTagShown && isConfImageSrc);
        let isMiniImageTagImg = (isMiniImagesTagShown && isConfImageSrc);
        let tagImageCssClassnames = new Array();
        if (isMiniImagesTagShown) {
            tagImageCssClassnames.push(TreeConstants_js_1.TreeConstants.TreeCssClassNames.CLASS_ICON_SHOW);
        }
        else {
            tagImageCssClassnames.push(TreeConstants_js_1.TreeConstants.TreeCssClassNames.CLASS_ICON_HIDE);
        }
        if (isMiniImageTagImg) {
            tagImageCssClassnames.push(TreeConstants_js_1.TreeConstants.TreeCssClassNames.CLASS_ICON_TAG_IMG);
        }
        const dataForRendering = {
            dataId: node[this.conf.NODE__ID],
            dataHolderId: node[this.conf.NODE__HOLDER_ID],
            dataOrder: node[this.conf.NODE__ORDER],
            dataJson: this.escapeHTMLForAttribute(JSON.stringify(flatNodeClone)),
            openButtonStateClassName: openButtonClassName,
            cssClasses,
            iconSrc: confImageSrc,
            iconShowClassName: tagImageCssClassnames.join(SYMBOL_BACKGROUND_SPACE),
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
exports.TreeAdapterModeConf = TreeAdapterModeConf;
//# sourceMappingURL=TreeAdapterModeConf.js.map