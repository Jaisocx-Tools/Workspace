// these imports of styles enable these styles and themes via import atatement of this package in another .js file, 
// when built with webpack and using the webpackAliases of this package.

// import "@jaisocx-css-clean-start-assets/clean-start-main-webpack.css";

/* two example themes  */
// import "@jaisocx-css-clean-start-assets/themes/theme-lightmode/clean-start-theme-lightmode-webpack.css";
// import "@jaisocx-css-clean-start-assets/themes/theme-darkmode/clean-start-theme-darkmode-webpack.css";

import { MediaruleNames } from "./MediaruleNames.js"; 
export { MediaruleNames } from "./MediaruleNames.js"; 

(Window as any).MediaruleNames = MediaruleNames; // for debugging in browser console


