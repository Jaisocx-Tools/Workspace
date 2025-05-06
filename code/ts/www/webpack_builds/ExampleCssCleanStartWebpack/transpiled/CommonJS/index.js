"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importing .css files, main and themes 
// these You indend to use in Your .html with the webpack bundle.js.
// These .css themes are imported via webpack aliases, 
// predefined in the installed package via npm i "@jaisocx/css-clean-start"
require("@jaisocx-css-clean-start-MediaAndStyles/clean-start-main-webpack.css");
/* two predefined example themes  */
require("@jaisocx-css-clean-start-MediaAndStyles/themes/theme-lightmode/clean-start-theme-lightmode-webpack.css");
require("@jaisocx-css-clean-start-MediaAndStyles/themes/theme-darkmode/clean-start-theme-darkmode-webpack.css");
// Or You can import all themes, imported in the package index.js like in this one line:
// // import "@jaisocx/css-clean-start";
/* Custom theme in this package  */
// this theme doesnt use aliases or bound resourceUsage. we can use the standard theme file
require("./../../MediaAndStyles/themes/theme-custom/clean-start-theme-custom.css");
//# sourceMappingURL=index.js.map