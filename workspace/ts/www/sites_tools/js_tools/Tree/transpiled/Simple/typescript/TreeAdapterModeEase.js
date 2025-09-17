class TreeAdapterModeEase extends TreeAdapter {

    getSubtreeNodeToRender(
        loopPropertyValue,
        loopPropertyKey
    ) {
        const subtreeJsonNode = { [loopPropertyKey]: loopPropertyValue };


        return subtreeJsonNode;
    }



    getDataForRendering(
        node,
        flatNodeClone,
        dataTypeString,
        nodeHasSubtree
    ) {
        const key = Object.keys(node)[0];
        const value = node[key] ?? "";
        let openButtonClassName = "";
        let labelText = `"${key}"`;

        if (!nodeHasSubtree) {
            openButtonClassName = TreeConstants.TreeCssClassNames.CLASS_WITHOUT_SUBTREE;
            const serializedJsonValue = this.escapeHTMLForAttribute(JSON.stringify(value));
            labelText = `"${key}": ${serializedJsonValue}`;
        }
        else if (this.nodesOpenedMode === TreeConstants.NodesOpenedMode.ALL_SHOWN) {
            openButtonClassName = TreeConstants.TreeCssClassNames.CLASS_OPENED;
        }
        const cssClasses = (this.dataTypesCssClassesEnabled === true) ? this.getTreeNodeCssClasses(dataTypeString, value) : "";
        const dataForRendering = {
            iconSrc: "",
            iconShowClassName: this.nodesWithIcons ? "icon-show mode-ease" : "icon-hide",
            labelText,
            hyperlink: "javascript: void(0);",
            cssClasses,
            dataId: "",
            dataHolderId: "",
            dataOrder: "",
            dataJson: this.escapeHTMLForAttribute(JSON.stringify(flatNodeClone)),
            openButtonStateClassName: openButtonClassName,
            hasSubtree: nodeHasSubtree
        };


        return dataForRendering;
    }



    getTreeNodeCssClasses__dataTypesCssClassesEnabled(_dataTypeString, _node) {
        const cssClassesArray = [
            ("class=\""),
            (TreeConstants.TreeCssClassNames.PREFIX__CLASS_DATATYPE),
            (_dataTypeString),
            ("\"")
        ];
        const cssClasses = cssClassesArray.join("");


        return cssClasses;
    }



    getTreeNodeCssClasses__dataTypesCssClassesDisabled(_dataTypeString, _node) {
        throw new Error("Method not implemented.");
    }


    // dummy placeholders
    escapeHTMLForAttribute(_arg) {
        throw new Error("Method not implemented.");
    }



    getTreeNodeCssClasses(_dataTypeString, _value) {
        throw new Error("Method not implemented.");
    }
}


