# how to develop with webpack:


## 1. build a project valid for webpack when `npm install` this package later in another project

To use the rich webpack feature aliases, set this folders structure and these predefined files for Your new package, like in this package.


### 1.1. ${PackageRoot}/webpack.aliases.json 
```
{
  "@jaisocx-css-clean-start-MediaAndStyles": "${packageRoot}/MediaAndStyles/"
}
```


### 1.2. ${PackageRoot}/src/* files like in this package every:
1. index.ts
2. webpack.aliases.cjs
3. webpack.aliases.mjs
4. webpackAliases.ts



### 1.3. workspace project `BuildData.json` minimal config:
```
{
  "npm-registry-name": "@jaisocx",
  "packages": [
    {
      "path": "templates/ResponsiveAndValidForWebpackWhenNpmInstall",
      "name": "template-css-clean-start",
      "build": true,
      "build-simple-enable": true,
      "dependencies": [],
      "build-files": [
        "index.js",
        "webpackAliases.js",
        "webpack.aliases.mjs",
        "webpack.aliases.cjs"
      ]
    },
```


### 1.4. this package `${PackageRoot}/package.json` minimal props:
```
{
  "name": "@jaisocx/template-css-clean-start",
  "version": "1.3.5",
  "private": false,
  "description": "",
  "type": "module",
  "main": "./transpiled/CommonJS/index.js",
  "types": "./transpiled/ESNext/index.d.ts",
  "module": "./transpiled/ESNext/index.js",
  "exports": {
    ".": {
      "import": "./transpiled/ESNext/index.js",
      "require": "./transpiled/CommonJS/index.js"
    },
    "./WebpackAliases": {
      "import": "./transpiled/ESNext/webpack.aliases.mjs",
      "require": "./transpiled/CommonJS/webpack.aliases.cjs"
    }
  },
  "files": [
    "transpiled/CommonJS",
    "transpiled/ESNext",
    "transpiled/Simple",
    "MediaAndStyles/",
    "webpack.aliases.json",
    "README.md"
  ],
  "keywords": [
  ],
  "publishConfig": {
    "access": "public"
  },
  "author": "Author",
  "license": "ISC"
}
```



## 2. use a js package when building Your package with webpack

### 2.1 install from npm registry to node_modules

```
npm install "@jaisocx/template-css-clean-start"
```


### 2.2. import styles in a .js or .ts file
```
import from "@jaisocx/template-css-clean-start";
```

### 2.3. import js classes in a .ts file

```
import { AnyClass } "@jaisocx/template-css-clean-start";
(window as any).AnyClass = AnyClass;
```


### 2.4. or, import js classes in a .js file

```
import { AnyClass } "@jaisocx/template-css-clean-start";
window.AnyClass = AnyClass;
```


### 2.5. The .json file with paths alias, used for webpack builds:


```
node_modules/@jaisocx/template-css-clean-start/webpack.aliases.json
```


### a .css file, imported in a .ts with the webpack alias

```
node_modules/@jaisocx/tree/MediaAndStyles/tree-styles-main-webpack.css
```

this import statement here:
```
import "@jaisocx-tree-MediaAndStyles/tree-styles-main-webpack.css";
```



### build with webpack

when under docker:
```
docker compose exec ts bash
cd www/examples/ExampleTree
```

when the console is on the ExampleTree package root path:
```
npm run webpack --config=webpack.config.mjs
```


### webpack.config.mjs example

```
import * as path from "node:path";
import { fileURLToPath } from "node:url";
// import * as pathBrowserify from "path-browserify";
import postcssUrl from "postcss-url";

import { WebpackAliases } from '@jaisocx/tree/WebpackAliases';


let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

console.info(path.resolve(__dirname));
console.log( WebpackAliases );


export default {
  entry: './transpiled/ESNext/index.js', // Entry point for your TypeScript code
  output: {
    filename: 'example-tree-bundle.js', // Output bundle name
    path: path.resolve(__dirname, 'transpiled/webpack'), 
  },
  resolve: {
    alias: {
      ...WebpackAliases.resolve.alias,
    },
    extensions: [".js", ".json", ".css"],
    fallback: {
      "path": "path-browserify", 
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', 
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  postcssUrl({
                    url: 'rebase', // Rewrite URLs relative to the final CSS file
                  }),
                ],
              },
            },
          },
        ], // Use these loaders for CSS files
      },
      {
        test: /\.(webp|png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
        type: 'asset/resource', // Handles images and fonts
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        type: 'asset/resource', // Use Webpack 5's native asset modules for images
        generator: {
          filename: 'MediaAndStyles/fonts/[name][ext]', // Define output path for MediaAndStyles
        },
      },
      {
        test: /\.(webp|png|jpg|gif|svg)$/,
        type: 'asset/resource', // Use Webpack 5's native asset modules for images
        generator: {
          filename: 'MediaAndStyles/images/[name][ext]', // Define output path for MediaAndStyles
        },
      },
    ],
  },
  mode: 'production', // Set mode (development | production)
};

```


### package.json example to use with Tree and build with Webpack

```
{
  "name": "@jaisocx/example-tree",
  "version": "1.5.2",
  "private": false,
  "description": "",
  "type": "module",
  "main": "./transpiled/CommonJS/index.js",
  "types": "./transpiled/ESNext/index.d.ts",
  "module": "./transpiled/ESNext/index.js",
  "exports": {
    "require": "./transpiled/CommonJS/index.js",
    "import": "./transpiled/ESNext/index.js"
  },
  "files": [
    "transpiled/CommonJS",
    "transpiled/ESNext",
    "MediaAndStyles/",
    "README.md",
    "LICENSE"
  ],
  "scripts": {
    "build": "tsc -p ./tsconfig.json",
    "webpack": "webpack"
  },
  "optionalDependencies": {
    "@jaisocx/tree": "^1.5.x"
  },
  "devDependencies": {
    "css-loader": "^7.1.2",
    "file-loader": "^6.2.0",
    "path-browserify": "^1.0.1",
    "postcss-loader": "^8.1.1",
    "postcss-url": "^10.1.3",
    "style-loader": "^4.0.0",
    "ts-loader": "^9.5.1",
    "typescript": "^5.7.x",
    "webpack": "^5.96.1",
    "webpack-cli": "^5.1.4"
  },
  "keywords": [],
  "author": "Jaisocx",
  "license": "ISC"
}

```


### How to use the bundle.js by the Webpack in html
```
<html>
  <head>
    <title>Tree Example</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- th path to webpack built bundle.js here: -->
    <script src="transpiled/webpack/example-tree-bundle.js"></script>
  </head>
  <body>

    <h1>Tree example</h1>

    <div id="tree-holder" class="theme-base"></div>

    <script>

      function renderDataLikeTree( data ) {
        let tree = new Tree();
        tree
          .setMainHtmlNodeId("tree-holder")
          .setNodesWithIcons(true)
          .setNodesOpenedMode(TreeConstants.NodesOpenedMode.ALL_SHOWN)
          .setRenderingMode(TreeConstants.RenderingMode.Ease)
          .render( data ); 
      }

      document.addEventListener('DOMContentLoaded', () => {

        // get data from a https endpoint:
        fetch("https://api.artic.edu/api/v1/artworks")
          .then( response => response.json() )
          .then( data => renderDataLikeTree( data ) );

      });
    </script>
  </body>
</html>

```



### THEMES: MediaAndStyles like miniimages and fonts resolval in bundle.js
1. for MediaAndStyles in themes files, use webpack.aliases.js like in packages/Tree project.
2. in the Tree.ts, import main css entrypoint file "@jaisocx-tree-MediaAndStyles/tree-styles-main-webpack.css";
3. in tree-styles-main-webpack.css import theme main css file like this: @import url('themes/theme-base/theme-base-webpack.css');
4. use webpack.aliasese.js alias like this:

```

.tree > ul > li > pre > pre.jstree-html-node-holder-icon.icon-show
{
  --datatype-array--image-url: url('@jaisocx-tree-MediaAndStyles/themes/theme-base/mini-images/data-types/icons8-json-96.png');
  --datatype-object--image-url: url('@jaisocx-tree-MediaAndStyles/themes/theme-base/mini-images/data-types/icons8-json-96.png');
}

```

5. without the webpack build, use another relative urls in the .css files, loaded in <link rel="stylesheet" href="">.
6. with webpack produced bundle.js, several themes can be imported, and then used in html holder node <div id="tree-1" class="theme-extended-1">
7. when copying to the webpack build theme css files, urls have to be rewritten absolute, starting with / , and not relative like when working in browser with transpiled/Simple
8. have to try with other data, like .json and other.
9. in json the urls have to be absolute, or base64 contents.


### index.ts

the classes, required in script tags and other custom js, using this js ui tool, have to be avaliable like this:
```
import { Tree, TreeConstants } from "@jaisocx/tree";
export { Tree, TreeConstants } from "@jaisocx/tree";

(window as any).Tree = Tree;
(window as any).TreeConstants = TreeConstants;
```

