# how to develop with webpack:


## 1. build a project valid for webpack when `npm install` this package later in another project

To use the rich webpack feature aliases, set this folders structure and these predefined files for Your new package, like in this package.


### 1.1. ${PackageRoot}/webpack.aliases.json 
```
{
  "@jaisocx-css-clean-start-assets": "${packageRoot}/assets/"
}
```


### 1.2. ${PackageRoot}/src/* files like in this package every:
1. index.ts
2. webpack.aliases.cjs
3. webpack.aliases.mjs
4. webpackAliases.ts


### 1.3 import styles in a .ts or .js file like this:

**TypeScript** entry file: `${packageRoot}/src/index.ts`

**Styles** entry file: `${packageRoot}/assets/clean-start-main-webpack.css`

```
// in .ts entry file index.ts

import "@jaisocx-css-clean-start-assets/clean-start-main-webpack.css"
```



### 1.4. workspace project `BuildData.json` minimal conf:
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


### 1.5. this package `${PackageRoot}/package.json` minimal conf:
```
{
  "author": "Author",
  "name": "@jaisocx/template-css-clean-start",
  "version": "1.3.5",
  "keywords": [
    "css tool",
    "clean start"
  ],
  "publishConfig": {
    "access": "public"
  }
  "private": false,
  "description": "The template to start a tool for sites, applied responsive view in browsers on all devices",
  "type": "module",
  "main": "./build/CommonJS/index.js",
  "types": "./build/ESNext/index.d.ts",
  "module": "./build/ESNext/index.js",
  "exports": {
    ".": {
      "import": "./build/ESNext/index.js",
      "require": "./build/CommonJS/index.js"
    },
    "./WebpackAliases": {
      "import": "./build/ESNext/webpack.aliases.mjs",
      "require": "./build/CommonJS/webpack.aliases.cjs"
    }
  },
  "files": [
    "README.md",
    "webpack.aliases.json", // the file sets the webpack aliases to resolve urls of styles and bound resources like media and fonts
    "assets/",
    "build/CommonJS",
    "build/ESNext",
    "build/Simple"
  ]
}
```


### 1.6 Build Your package first before use and publishing to npm registry 

In the workspace project `BuildData.json` active this package for build: `"build": `**true**

```
    {
      "path": "templates/ResponsiveAndValidForWebpackWhenNpmInstall",
      "name": "template-css-clean-start",
      "build": true,
      ...
```


When **Docker Compose** is on, 
In Terminal, cd to Workspace root, paste and Enter:

`./buildPackages.sh`



Bugfix until the build works without exceptions, and rerun buildPackages.sh

Then can use and publish to npm registry too.

The use of the built package is in the doc point 2. below.

 




## 2. Use the installed by Yarn or Npm js package in Your Typescript or Javascript package


### 2.a. You may use this template package to start a new package from scratch. 

Just save a copy in the `${Workspace}/code/ts/www/packages` folder.



### 2.b. install a package from npm registry to node_modules

For example, when You published before with rules in this doc point 1. a package named `@jaisocx/template-css-clean-start`

```
npm install "@jaisocx/template-css-clean-start"
```


### 2.c. import styles in a .ts or .js file like this:

**TypeScript** entry file: `${packageRoot}/src/index.ts`

In the installed package, the code is here: `${packageRoot}/node_modules/@jaisocx/template-css-clean-start`

```
// in .ts entry file index.ts

import "@jaisocx/template-css-clean-start";
```



### 2.d. import js classes in a .ts file

**TypeScript** entry file: `${packageRoot}/src/index.ts`

```
import { AnyClass } "@jaisocx/template-css-clean-start";

// when in .ts entry file index.ts
(window as any).AnyClass = AnyClass;
```



### 2.e. or, import js classes in a .js file

```
import { AnyClass } "@jaisocx/template-css-clean-start";

// when in .js entry file index.js file:
window.AnyClass = AnyClass;
```



### 2.f. The .json file with paths alias, used for webpack builds:

```
node_modules/@jaisocx/template-css-clean-start/webpack.aliases.json
```


### 2.g. the entry styles .css file, imported in `${packageRoot}/src/index.ts` with the webpack alias


```
node_modules/@jaisocx/template-css-clean-start/assets/clean-start-main-webpack.css
```



### 2.h. this import statement in the installed package is here:
```
// in file: ${packageRoot}/node_modules/@jaisocx/template-css-clean-start/build/ESNext/index.js

import "@jaisocx-css-clean-start-assets/clean-start-main-webpack.css"
```


### 2.i. transpile new package like in the point 1.6 above

`./buildPackages.sh`



### 2.j. append development npm packages in the `${PackageRoot}/package.json` and npm script name to build with the Webpack

```
 "scripts": {
    "webpack": "webpack"
  },
  "optionalDependencies": {
    "@jaisocx/template-css-clean-start": "^1.5.x" // the version number is here just an example
  },
  "devDependencies": {
    "css-loader": "^7.1.2",
    "file-loader": "^6.2.0",
    "postcss-loader": "^8.1.1",
    "postcss-url": "^10.1.3",
    "style-loader": "^4.0.0",
    "ts-loader": "^9.5.1",
    "typescript": "^5.7.x",
    "webpack": "^5.96.1",
    "webpack-cli": "^5.1.4"
  },
```


### 2.k. install development npm packages

When **Docker Compose** is on, 
to run a script in the node docker service, first enter the node docker service like this: in Terminal, cd to Workspace root, paste and Enter:
```
docker compose exec ts bash
```

Then You may build Your new package with Webpack

```
# 1. navigate to Your new package folder in the node service volume:
cd /var/www/code/ts/www/packages/<YourNewPackage>

# 2. install development npm packages
npm install
```




### 2.l. make new file on path `${PackageRoot}/webpack.config.mjs`

```
// this webpack config is to build this package with webpack.

import * as path from "node:path";
import { fileURLToPath } from "node:url";
// import * as pathBrowserify from "path-browserify";
import postcssUrl from "postcss-url";

// when using aliases from other jaisocx tool,
// Use like in code/ts/www/examples/ExampleCssCleanStartWebpack:
import { WebpackAliases } from '@jaisocx/template-css-clean-start/WebpackAliases';

// when building with the Webpack and using the aliases of this package, then:
// import { WebpackAliases } from "build/ESNext/webpack.aliases.mjs";


let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

console.info(path.resolve(__dirname));
console.log( WebpackAliases );


export default {
  entry: './build/ESNext/index.js', // Entry point for your transpiled code
  output: {
    filename: 'Your-package-bundle.js', // Output bundle name
    path: path.resolve(__dirname, 'build/webpack'), 
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
          filename: 'assets/fonts/[name][ext]', // Define output path for assets
        },
      },
      {
        test: /\.(webp|png|jpg|gif|svg)$/,
        type: 'asset/resource', // Use Webpack 5's native asset modules for images
        generator: {
          filename: 'assets/images/[name][ext]', // Define output path for assets
        },
      },
    ],
  },
  mode: 'production', // Set mode (development | production)
};

```


### 2.m. build with the Webpack

When **Docker Compose** is on, 
to run a script in the node docker service, first enter the node docker service like this: in Terminal, cd to Workspace root, paste and Enter:
```
docker compose exec ts bash
```

Then You may build Your new package with Webpack

```
# 1. navigate to Your new package folder in the node service volume:
cd /var/www/code/ts/www/packages/<YourNewPackage>

# 2. start building with Webpack:
npm run webpack --config=webpack.config.mjs
```



### 2.n. Where the bundle.js resides

in the point **2.l** above You have the lines `filename:...` and `path: ...`.

the path will be `${PackageRoot}/${path}/${filename}`
```
export default {
  entry: './build/ESNext/index.js', // Entry point for your transpiled code
  output: {
    filename: 'Your-package-bundle.js', // Output bundle name
    path: path.resolve(__dirname, 'build/webpack'), // path of the bundle.js
  },

```


the **bundle.js** file resides here:
```
${PackageRoot}/build/webpack/Your-package-bundle.js
```




## 3. How to use the bundle.js by the Webpack in html

**A.** If You built with webpack the installed CSS tool,
the styles will apply when You set the css classes, 
defined in the imported package, to according html nodes in your .html

For example, when using CssCleanStart, 
on the &lt;html&gt; tag there css class `workspace` is to apply like this:

```
<html class="workspace long theme-lightmode">
```


If example.html is on path `${PackageRoot}/example.html`,
the **url of the bundle.js** will be:

```
build/webpack/Your-package-bundle.js
```



**B.** I You imported a JS tool, You have in the example above in the index.ts file set the imported classes available:

```
import { AnyClass } from "@jaisocx/the-installed-package";

(window as any).AnyClass = AnyClass;
```


In Your .html You can now access this imported js class like this:

```
<script>
let anyClass = new AnyClass();
anyClass.someProp = "some value";
anyClass.someMethod("some arg");
</script>
```



**C.** example of usage of the `@jaisocx/tree` package here:
```
<html>
  <head>
    <title>Tree Example</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- the path to webpack built bundle.js here: -->
    <script src="examples/ExampleTree/build/webpack/example-tree-bundle.js"></script>
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



## 4. Assets like miniimages and fonts resolval in bundle.js
1. for assets in themes files, use webpack.aliases.js like in packages/Tree project.
2. in the Tree.ts, import main css entrypoint file "@jaisocx-tree-assets/tree-styles-main-webpack.css";
3. in tree-styles-main-webpack.css import theme main css file like this: @import url('themes/theme-base/theme-base-webpack.css');
4. use webpack.aliasese.js alias like this:

```

.tree > ul > li > pre > pre.jstree-html-node-holder-icon.icon-show
{
  --datatype-array--image-url: url('@jaisocx-tree-assets/themes/theme-base/mini-images/data-types/icons8-json-96.png');
  --datatype-object--image-url: url('@jaisocx-tree-assets/themes/theme-base/mini-images/data-types/icons8-json-96.png');
}

```

5. without the webpack build, use another relative urls in the .css files, loaded in <link rel="stylesheet" href="">.
6. with webpack produced bundle.js, several themes can be imported, and then used in html holder node <div id="tree-1" class="theme-extended-1">
7. when copying to the webpack build theme css files, urls have to be rewritten absolute, starting with / , and not relative like when working in browser with build/Simple
8. have to try with other data, like .json and other.
9. in json the urls have to be absolute, or base64 contents.

