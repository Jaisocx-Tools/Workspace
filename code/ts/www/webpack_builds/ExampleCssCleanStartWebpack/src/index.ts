// importing .css files, main and themes 
// these You indend to use in Your .html with the webpack bundle.js.
// These .css themes are imported via webpack aliases, 
// predefined in the installed package via npm i "@jaisocx/css-clean-start"
import "@jaisocx-css-clean-start-MediaAndStyles/clean-start-main-webpack.css";

/* two predefined example themes  */
import "@jaisocx-css-clean-start-MediaAndStyles/themes/theme-lightmode/clean-start-theme-lightmode-webpack.css";
import "@jaisocx-css-clean-start-MediaAndStyles/themes/theme-darkmode/clean-start-theme-darkmode-webpack.css";


// Or You can import all themes, imported in the package index.js like in this one line:
// // import "@jaisocx/css-clean-start";


/* Custom theme in this package  */
// this theme doesnt use aliases or bound resourceUsage. we can use the standard theme file
import "../../MediaAndStyles/themes/theme-custom/clean-start-theme-custom.css";

