"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeAdapter = void 0;
const TreeConstants_js_1 = require("./TreeConstants.js");
const TreeConf_js_1 = require("./TreeConf.js");
class TreeAdapter {
    constructor() {
        this.conf = new TreeConf_js_1.TreeConf();
        this.nodesWithIcons = TreeConstants_js_1.TreeConstants.Defaults.nodesWithIcons;
        this.nodesOpenedMode = TreeConstants_js_1.TreeConstants.Defaults.nodesOpenedMode;
        this.dataTypesCssClassesEnabled = TreeConstants_js_1.TreeConstants.Defaults.dataTypesCssClassesEnabled;
    }
}
exports.TreeAdapter = TreeAdapter;
//# sourceMappingURL=TreeAdapter.js.map