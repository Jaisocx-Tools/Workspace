"use strict";
// these imports of styles enable these styles and themes via import atatement of this package in another .js file,
// when built with webpack and using the webpackAliases of this package.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssTableOrderby = exports.CssTableScroll = void 0;
require("@jaisocx/css-table");
require("@CssTableOrdered_MediaAndStyles/CssTableOrdered_main_Webpack_minimal.css");
var CssTableScroll_js_1 = require("./scroll/CssTableScroll.js");
Object.defineProperty(exports, "CssTableScroll", { enumerable: true, get: function () { return CssTableScroll_js_1.CssTableScroll; } });
var CssTableOrderby_js_1 = require("./orderby/CssTableOrderby.js");
Object.defineProperty(exports, "CssTableOrderby", { enumerable: true, get: function () { return CssTableOrderby_js_1.CssTableOrderby; } });
//# sourceMappingURL=index.js.map