# CSS Tool Template



## Aim of the setup




## Status




## What is this




## live urls with html examples

[https://sandbox.brightday.email/sites_tools/css_tools/CssToolTemplate/index.example.html](https://sandbox.brightday.email/sites_tools/css_tools/CssToolTemplate/index.example.html)



## in-npm-package urls to index.example.html

[index.example.html](./index.example.html)



## html coding example



## css in index.example.html coding example



## js in index.example.html coding example



## ts coding example importing styles | themes styles



## ts coding example with import npm lib in 3rd partie's ts code



## js interfaces for API Models



## package structure

`favicon/*.ico` site logo to show in browser's tab label above, referenced in index.example.html in `<link rel="icon" ... />` tag.

`MediaAndStyles/*.css` styles where css props are set via css variables. For example `font-size: var(--jsx--sitestool--htmlelem--font-size);`.

`MediaAndStyles/themes` styles where the css variables get their values. For example `--jsx--sitestool--htmlelem--font-size: 1rem;`.

`MediaAndStyles/themes/theme_base` all css variables from main.css get their values. The responsive fileset is imported in relative and webpack aliased .css imports.

`MediaAndStyles/themes/color_themes` examples of themes where just the color and background color css variables get their values. May also set border-color and background images, shadows and other color themes relevant css variables if referenced in main.css.

`MediaAndStyles/themes/theme_layout_example` a theme with responsive fileset produced by SitesToolAutomation. The responsive fileset is relevant mostly for fine tuning sites for mobile portrait, tablet and big displays, since for the layout themes for sure the sizes of the displays are relevant.

`src/index.ts` styles imports to be accessed later when built with Webpack, and the produced by The Webpack `bundle.js` is referenced like `<script src="bundle.js"` in .html.

`src/webpack...` infrastructure static files for the Webpack.

`BuildData.example.json` The template of a json config for building a sites tool. You may use to copy paste to BuildData.json for a new sites tool.

`index.example.html` the sites tool preview, locally and when installed with the new command `./cmd/install_and_view_sites_tool.sh`.

`package-lock.json` npm system file.

`package.json` the main conf file for this npm package.

`README.md` documentation file in md format.

`webpack.aliases.json` the webpack alias' name and the relative path in this npm package folders structure.











