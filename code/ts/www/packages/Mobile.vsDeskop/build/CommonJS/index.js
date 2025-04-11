"use strict";
// these imports of styles enable these styles and themes via import atatement of this package in another .js file, 
// when built with webpack and using the webpackAliases of this package.
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaruleNames = void 0;
// import "@jaisocx-css-clean-start-assets/clean-start-main-webpack.css";
/* two example themes  */
// import "@jaisocx-css-clean-start-assets/themes/theme-lightmode/clean-start-theme-lightmode-webpack.css";
// import "@jaisocx-css-clean-start-assets/themes/theme-darkmode/clean-start-theme-darkmode-webpack.css";
const MediaruleNames_js_1 = require("./MediaruleNames.js");
var MediaruleNames_js_2 = require("./MediaruleNames.js");
Object.defineProperty(exports, "MediaruleNames", { enumerable: true, get: function () { return MediaruleNames_js_2.MediaruleNames; } });
Window.MediaruleNames = MediaruleNames_js_1.MediaruleNames; // for debugging in browser console
//# sourceMappingURL=index.js.map