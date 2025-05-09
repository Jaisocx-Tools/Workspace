# JAISOCX TYPESCRIPT TOOLS BUILDER

##  WARNING: This Project is with a dockerized MYSQL DATABASE Instance. Before every git pull to update this project, even without checking whether Docker settings were changed, first do MySQL db dump and db dump backup. The dockerized db services sometimes can recreate a fresh and clean db instance, when some Docker config file was changed, and after "git pull && docker compose restart", too.


I appologize for oft renamings. This project is still under development in May 2025, and is not a published and developed earlier ready, tested and proved library.

Why already published: the several js tools are ready, nevertheless.



## Features ready to use, however will be upgraded later for sure.

1. Typescript: central config to transpile typescript code and the central transpiler node dependencies `node_modules` folder once.

2. Code prettifier: Eslint central config and addons examples.

3. Webpack: templates and examples of config files and npm packages folders, documentation.

4. Dockerized services: node, php, https endpoint, database.

5. Themes development examples in several Sites Tools. 

    5.1. Tooltip

    5.2. Tree

    5.3. CssCodeSnippet

    5.4. CssTable

6. EmailHtmlInliner to set inline styles to html before send via email.

7. Base ts packages published on npm to install via Yarn and Npm.

    7.1. EventEmitter

    7.2. TemplateRenderer

    7.3. FileWriter

    7.4. ObjData

    7.5. Text (Just one method, and for now may be used like the example of a package of static methods just like a namespace for reusable code blocks)

    7.6. CssHtml: package with several methods for working with css.

    7.7. TokensParser ( The package with base methods to parse one art of text data formats )

    7.8. CssImporter



## Not tested features, however are in development tasks.

1. Base typescript classes inheritance considering the required methods and methods args in Base classes. For example, class ContextMenu extends Tooltip {}.

2. packages/Api. Used in one example .html, for now I didn't find no documented infos whether I tested this package with CORS and every other https feature and http request method and request payload art. Just an example for ObjData.


## Under development, not ready

1. Mobile.vsDesktop. Primary in development, not updated longer ago, due to development of related classes in other packages.

2. CssCleanStart is aimed for the foreseen html nodes syles when coding html and viewing the site in browser whether the markup implements the design. When tested the Mobile.vsDesktop package on site with CssCleanStart, then several not exact dimensions in @media queries implemented in CssCleanStart were encountered, and now the new feature in the Mobile.vsDesktop produces the automated set of .css files by .json data with more precise dimensions (is under minor bugfixing). The number of @media queries ( over 20 ), when seems overflowing for a Site or a Tool, may be easily encommented in the main importing .css file with symbols /**/, and the ready now CssImporter package solves the feel of .css imports overflow in Browsers' Dev Console Netwok Tab, when loading a site with CssCleanStart on it. This feature of the CssImporter to load just one .css file or one bundle.js with the CssCleanStart and other SitesTools and Themes is available, however a config or tool to fine tune easily the set of .css files imported and packed with CssImporter and Webpack was not set to dev tasks neither was started.

3. CssTools/404 is the first template for the set of automated sites responses. This may be a 100vh 100% template for entire browser tab sized responsive static cached pages to avoid blank screens of responses to the unhandled requests, server responses about errors or requests being processed confirmations like "file upload done". Waits for the Mobile.vsDesktop to start writing with the bugfixed responsive feature of the CssCleanStart. 

4. ImprovedTemplateRenderer, will be used to improve rendering json and objdata by SitesTools.

5. WorkspaceTreeWalker. The recursion is a hard coding task. Even few standard reusable solutions published may save up development cost. When, with aim of the finer programming model, developed standard callbacks for just 3 well known json data arts to render with templates, the encountered bugs of renderer were not tracked, even when debugged the code, and for now one datatype still is rendered with the implemented callback not the right way. The development is postponed, unfortunately, due to lack of ideas to bugfix these 3 standard callbacks. Once solved, these standard callbacks will solve rendering task of the most arts of json data. The multilevel arrays of objects have to be declared in templates with simple html snippets, and rendered with often similar logics. Later, when developing new SitesTools, the further callbacks to render new encountered json data arts have to be easily added, or overridden or implemented in extending classes. And for now (about js Table and refined TemplateRenderer with WorkspaceTreeWalker) the tables normally render more than 3 levels of tags: table, rows, cells, cell data, cell labels, cell rendering config infos objects. However the template may be the very ease html snippet. The rich templating engines give more freedom in coding, and this package will solve once rendering of 3 json data arts, and these jsons are very very often. A simple solution for let say 70% of tasks is good. And for the very hard tasks, understood, other expensive tools are used with rich features, taking into account the size of install required. The example may be a Database Server Setup and js instruction array.find() to solve the task finding a value in a dataset.

6. Table. Waits for ImprovedTemplateRenderer and WorkspaceTreeWalker.







## The Aim Of The Setup

1. Building Project to keep availble reusable ts | js packages for good. You are free to use for Your code as well, and just like a project infrastructure, too.

2. Aimed no concurrency to frameworks, rather to develop a very easy workaround and a ts interface, when instantiating the Angular, Vue3 and React components by one component class in every framework, and a ts tool installed via yarn or npm install. At this timestamp, I didn't align the few Sites Tools (Tooltip, Tree, CodeSnippet) to the standard interface and standard .get...() .set...() methods, .render() and .load() methods' input args, taking into account every https feature and CORS and Authorization; standard methods namings for js interactive tools for the events targets html elems, themes support. For now I tried the very few not similar ts tools, and already see several improvals to be done. 

3. The easiest solutions, even, for the Responsive Sites Feature in 2025. Am on writing in May 2025 the workarounds.


The live install to test whether one can profit in development and the feedback already have shown:

1. the need to rename and align similarly methods and props, in order to rename once and to keep same for the longer period, and later, when starting a new tool, to align the new tools to the already proved development patterns in this project. 

2. the responsive feature needs a lot of attention and lot of coding and documenting time. 







## News: 08th of May 2025. 

1. New npm Package **EmailHtmlInliner** `@jaisocx/email-html-inliner` and site to watch The Inliner in action: [https://workspace.brightday.email/packages/EmailHtmlInliner/EmailHtmlInliner_Images.html](https://workspace.brightday.email/packages/EmailHtmlInliner/EmailHtmlInliner_Images.html)


2. Stricter tsconfig.json rules. Checks unused variables. Wen You have to invoke the callback and don't use the callback's in arg, the workaround is to prefix the method's in arg name with the underscore symbol. 

```
addEventHandler(
  eventName,
  ( _eventName: string, payload: any ) => {

    // the _eventName var is never written in this callback.
    // when not _ prefixed, the tsc typescript transpiler throws exception and exits.

    console.log( payload );
  }
);
```


3. Since now this project is of great use when You **develop and push to npm CSS tools and themes**, too, thanks to the new features `css-importer` and fine tuning of package.json working examples and project's config for Webpack builds.


4. How to build **Your CDN example** with The [Jaisocx.com](https://jaisocx.com/) Sites Server in `docker-compose.yml` and `.docker/https/conf/http-conf.xml`


5. **Renamings**: in the www folder, the most `examples` were moved to the new `webpack_builds`. Why: the examples were just the webpack builds with no other features or funcs. That is why they are just webpack builds as they are.

    5.1. In ts packages, renamed were: 
    
    5.1. `assets` -> `MediaAndStyles`. **Assets** is the keyword in Online Banking apps. **Styles** is the keyword in Sites development since 1990th. 
    
    5.2. `build` -> `transpiled`. **Transpile** is the keyword of The Typescript Language, and **build** is the keyword of The Webpack Tool.



6. **Fine Tuning ProjectBuilder's Config**. In the config file `BuildData.json` there are new features to fine tune the ts build.

    6.1. `build-simple-enable` works. Turns on writes .js files listed in `"build-files"`. Path is: `${packageRoot}/transpiled/Simple`.
      
    6.2. `css-importer`: packs on demand all .css files to one `"cssTargetFilePath"`, if all other .css files were referenced in the `"cssFilePath"` via @import url("styles-filename.css");



### 7. The new template "ResponsiveAndValidForWebpackWhenNpmInstall"


`code/ts/www/templates/ResponsiveAndValidForWebpackWhenNpmInstall`


Just **copy paste** to start a **new** npm ts | js package **from scratch**. There are just package.json and .js files for the webpack feature.


This template is developed for the nice workaround to publish on **npm webpack aliases** when aimed to set this npm package available in other ts tools for builds there with The Webpack to `bundle.js`, when installed there this package via **npm install**. 


Why good to use this template for SitesTools: whenever You planned to import there styles or not, later the imported .css files, images, themes and fonts may be installed and noone knew before. The few .js and .json files in this template will no harm the new package size too extensive.


The bundle.js may be published on Your cdn endpoint on Your demand for CSS themes of CSS and JS tools, too.

Then the css className applied in html, turns on the CSS Theme, even when one `bundle.js` is referenced in the .html doc with the `script` tag.

```
<html>
<head>
<script src="https://cdn.sitesdevs.com/bundles/sites-tool-themes-bundle.js"></script>
</head>
<body>

<!-- via css class name You may turn on every theme imported in the sites-tool-themes-bundle.js 
When the bundle.js includes imported themes, just the typing in the css class name other theme class name will update the site's theme in browser's tab after site reload.
-->
<sites-tool class="sites-tool theme-nightmode theme-rich-fonts">
...
</sites-tool>
</body>
</html>
```


### block started "Explaining Schema":

1. You plan to develop and publish Your ts tool on npm like `@softwareDevs/base-sites-tool`;

2. this tool imports styles prefixed with webpack aliases.

3. In other tool "SitesToolNumberTwo" You install this npm package to use there:

`packages/SitesToolNumberTwo`

```
npm install "@softwareDevs/base-sites-tool"
```


4. Use base-sites-tool number 1 in the new tool:

```
// importing styles, there in .css files are import statements:
// @import url("@base-sites-tool-webpack-alias/imported-style1.css");
import from "@softwareDevs/base-sites-tool";


// importing a js class
import { BaseSitesTool } from "@softwareDevs/base-sites-tool";
...
...
```


5. making available to The Webpack the aliases from the imported base-sites-tool:

```
// packages/SitesToolNumberTwo/index.ts:
// making available to The Webpack the aliases from the imported base-sites-tool:
export { WebpackAliases as BaseSitesToolAliases } from "@softwareDevs/base-sites-tool/WebpackAliases";
```


6. then, in the `packages/SitesToolNumberTwo` You may run the webpack and the Webpack can resolve the aliases of the packages installed with npm, and of the base-sites-tool, too.


7. No worries, I published READMEs.md in the templates. From time to time I postpone coding new feature 2 weeks or months, then I start to read the documentation on new to me technology again and then very easily can understand. 



### block finished "Explaining Schema"






#### 7.1. the webpack.aliases.json example

```
{
  "@base-sites-tool-webpack-alias-styles": "${packageRoot}/MediaAndStyles/"
}
```


#### 7.2. the package.json solution to declare webpack aliases to be vailable for Webpack in the importing packages.

```
"exports": {
  ".": {
    "import": "./transpiled/ESNext/index.js",
    "require": "./transpiled/CommonJS/index.js"
  },
  "./WebpackAliases": {
    "import": "./transpiled/ESNext/webpack.aliases.mjs",
    "require": "./transpiled/CommonJS/webpack.aliases.cjs"
  }
}
```



#### 7.3. BuildData.json in the field "build-files" hardcoded webpack.* files. 

```
{
  "path": "CssTools/CssCleanStart",
  "name": "css-clean-start",
  "build": true,
  "build-simple-enable": false,
  "css-importer": {
    "build": true,
    "cssFilePath": "MediaAndStyles/clean-start-main-webpack.css",
    "cssTargetFilePath": "MediaAndStyles/clean-start-main-resolved.css"
  },
  "dependencies": [],
  "build-files": [
    "index.js",
    "webpackAliases.js",
    "webpack.aliases.mjs",
    "webpack.aliases.cjs"
  ]
}
```



## News in March 2025. 

1. docker service `ts` was upgraded to v`23.11.0`, npm v`10.9.2` (I experiensed best performance and the documentation tells about new typescript files run feature available after v23.6.0) You need to rebuild the `ts` service.
```
docker compose stop ts
docker compose rm ts
docker compose build ts
docker compose up ts -d
```



## Understanding NPM Version Symbols

### For what:
When You wish:
1. to upgrade some of Your npm packages, 
2. You have read on the newest ver. available on the package release site, 
3. and You'd like to know the actual version, 
4. or to get know the version installed in Your project's folder after update, 
5. and to know whether the updates to `patch` and `minor` versions allowed.




### When You need npm install | update
#### 1. You have git cloned a project
normally node_modules is in .gitignore and is not stored on git repos and not available when cloned from git repos. Then You have to install npm packages after git clone.
```
npm i
```

#### 2. You have installed a new npm dependency from a registry.
```
# for example:
npm i some-npm-package
```

#### 3. You want to upgrade the npm package to newer ver.
```
# for example:
npm update some-npm-package
```



### Symbols

When you see version strings like this in package.json:
```
"some-npm-package": "^5.1.0"
```

The symbol **^** will be handled by the npm install to allow versions from 5.1.0 to 5.9.9 inklusive, since ^ symbol allows patch and minor versions when npm update.




```
Symbol    | Meaning                     | Example | Resolves to
~ Tilde   | Patch versions updates      | ~5.1.0  | from 5.1.0 to 5.1.9 inklusively
^ Dach    | Minor & patch updates       | ^5.1.0  | from 5.1.0 to 5.9.9 inklusively
>=        | Minimum allowed ver.        | >=5.1.0 | from 5.1.0 to 99999999.9.9
<=        | Maximum allowed ver.        | <=5.1.0 | from 0.0.0 to 5.1.0 inklusively
* Star    | Match any version           | *       | Any. when installs then latest, and when updates, then to latest too.
No symbol | Exact version               | 5.1.0   | 5.1.0
```



### To update a package to the absolute latest (even if outside range):

With the keyword `@latest`

```
npm install some-package@latest
```



### What to check when install or update

To know the version, this will be installed on `npm i` or `npm update`:

First check **whether You have both** `package.json` and `package-lock.json` files.

#### a) **Both** `package.json` and `package-lock.json`

1. `npm install`: (**package-lock.json**) `the exact version` of npm package and it's npm dependencies will be installed, thes were set in the `package-lock.json`.

2. `npm update`: (**package.json**) `in the limited range` of versions numbers, set in the `package.json`. The newest available version, allowed by range, will be installed. 







#### b) **Just one** `package.json` is available, or You `have deleted` the package-`lock`.json file.

The same as **a) 2.** (npm update: by rules in the (package.json) in the limited range)


1. `npm install` and `npm update`: (**package.json**) `in the limited range` of versions numbers, set in the `package.json`. The newest available version, allowed by range, will be installed. 



### Example
`some-package: "^2.3.2"` means **allowed until** "2.9.9"` inclusively. 

If **in the range bounds** the latest ver available on npm registry in this range is "2.4.1". 

then "2.4.1" will be installed. 

if **above range bounds** the latest ver is "4.2.2", 

then may be installed, what is available on npm `until "2.9.9"`. 

When in that range there is the newest "2.8.5", then the "2.8.5" will be installed, not the "4.2.2.".




### To see the version gets installed: 
```
docker compose exec ts bash
/var/www/code/ts/express
# npm install express@^5.1.0
npm update express
npm list express
```
response:
```
docker-express-example@1.0.0 /var/www/code/ts/express
`-- express@5.1.0

```




## Some ts packages examples in action:

#### Tooltip

[https://workspace.brightday.email/ExampleSimple_Tooltip.html](https://workspace.brightday.email/ExampleSimple_Tooltip.html)


#### Tree

[https://workspace.brightday.email/ExampleSimple_TreeRenderingModeConf.html](https://workspace.brightday.email/ExampleSimple_TreeRenderingModeConf.html)

[https://workspace.brightday.email/ExampleSimple_TreeRenderingModeEase.html](https://workspace.brightday.email/ExampleSimple_TreeRenderingModeEase.html)



#### Css Clean Start
the html template to use when building projects from scratch.

[https://workspace.brightday.email/CssTools/CssCleanStart/index.template.html](https://workspace.brightday.email/CssTools/CssCleanStart/index.template.html)



#### The CssCleanStart latest .tgz archive (v.1.2.14 24th of March 2025)

[https://workspace.brightday.email/CssTools/CssCleanStart/jaisocx-css-clean-start-1.2.14-with-fonts.tgz](https://workspace.brightday.email/CssTools/CssCleanStart/jaisocx-css-clean-start-1.2.14-with-fonts.tgz)


[https://workspace.brightday.email/CssTools/CssCleanStart/jaisocx-css-clean-start-1.2.14.tgz](https://workspace.brightday.email/CssTools/CssCleanStart/jaisocx-css-clean-start-1.2.14.tgz)


## To Enable Webpack Feature in a package

The relevant Readme file in the example package for this theme

[code/ts/www/templates/ResponsiveAndValidForWebpackWhenNpmInstall/README_WEBPACK.md](code/ts/www/templates/ResponsiveAndValidForWebpackWhenNpmInstall/README_WEBPACK.md)


## To Build with Webpack a bundle.js with installed packages.

The relevant Readme file in the example package for this theme

[https://github.com/Jaisocx-Tools/Workspace/blob/main/code/ts/www/templates/BuiltWithWebpackYarnInstalledPackage/README.md](https://github.com/Jaisocx-Tools/Workspace/blob/main/code/ts/www/templates/BuiltWithWebpackYarnInstalledPackage/README.md)




## STATUS OF THE PROJECT

The Project is under development now, 05th of May 2025.

### The features ready to use:
1. The infrastructure for **development of Typescript libraries**.
2. The intercative **sites tools** packages in `code/ts/www` catalog, however still under development.
3. **Dockerized services**, to use in development:
    1. HTTPS server, serving volumes `code/ts/www` and `code/php`, with the **brightday.email** wildcard TLS cert, valid til November 2025. Locally, when set some subdomain entry of `brightday.email` domain in `/etc/hosts` file, this is helpful to test with valid **https endpoints**. And in the config file `.docker/https/conf/http-conf.xml`, don't set the domain name `workspace.brightday.email` for Your local tests, this is reserved already, here are the examples published.
    2. **JWT protection** feature for **https** endpoints under **Jaisocx** dockerized service `https`.
    3. **NodeJS 23** dockerized volume with services:
        1. **node** command line interface. node --version: v23.11.0.
        2. **npm** command line interface. npm --version: 10.9.2.
        3. **yarn@4.9.1** package manager is installed in the node docker service, however is not used by ProjectBuilder. You are free to rebuild the PackageBuilder to use yarn. I shall note to develop .env setting for the choice of npm or yarn.
        3. **Express@5.1.0** NodeJS Framework example application in `code/ts/express/app` http://localhost:3000/
        4. **Node http server** endpoint http://localhost:8083/, serving volume `code/ts`.
    4. Backend interpreting language **PHP 8.4** dockerized service
    with **XDebug** installed and configured, to use with Jaisocx https server, serving volume `code/php`, too.
    5. **MySQL Database** dockerized service, e.g. to test Typescript tools, rendering JSON data, by delivering JSON http responses, built by backend scripting languages, read tables records from a database.



## AIM OF THE PROJECT

### typescript modules development, local and published to npm registry
The project was started to provide the modular typescript development,
with the ability to keep source code well structured in npm registry,
however being able to develop a new typescript tool,
and at once fix bugs or add new features in other own typescript modules, published on npm registry,
keeping dependencies not broken and centralized.

### js files use in .html files the easiest way
Another aim of the project is to prettify the transpiled .js results of typescript sources,
and being able to use the prettified .js builds both for web ui tools in .html pages without any additional builds required,
when published at a http server,
and when in files explorer context menu over an .html file "Open with ..." =&gt; browser.

Why? to be able to test a .js tool in each environment, 
to be able at once to check out modifying possibilities in the .js code,
to reduce for customers the entry level, by mimizing the need of software and dependencies install, when intending a use of a js tool.


## How to define local dependencies in a new module

"@jaisocx/" is used here like the example for a npm registry name for .ts modules,
Feel free to use Your own.

- *1. in module's package.json, like this:*
```
  "optionalDependencies": {
    "@jaisocx/event-emitter": "^1.0.x",
    "@jaisocx/template": "^1.0.x"
  },
```

the dependency line, e.g. "@jaisocx/event-emitter": "^1.0.x", 
You get from the local linked submodule catalog's package.json:

code/ts/www/modules/EventEmitter/package.json

```
{
  "name": "@jaisocx/event-emitter",
  "version": "1.0.1",
  ...
```


- 2. in the `code/ts/BuildData.json`

add new json entry for Your new .ts module

- *3. in the "dependencies" array, set every local dependency*, these You will use with npm link feature, 
 .i.e building from local sources here in this project

```
{
  "npm-registry-name": "@jaisocx",
  "modules": [
    {
      "path": "modules/Tree",
      "name": "tree",
      "build": true,
      "dependencies": [
        {
          "name": "@jaisocx/event-emitter",
          "path": "modules/EventEmitter"
        },
        {
          "name": "@jaisocx/template",
          "path": "modules/Template"
        }
      ],
      "build-files": [
        "Tree.js",
        "TreeConf.js",
        "TreeConstants.js"
      ]
    },
```

- *4. in the root ctalog of this project,* start build .ts files to .js

```
./buildPackages.sh
```

## how to prettify .ts soures:

in terminal change to `code/ts/`

the eslint config `eslint.config.js` is in this catalog.

then, run eslint
```
npx eslint www/modules/<YourModule>/src/**/*.ts --fix 
```

## how to develop eslint modules:

here is the path, where some custom eslint rules within one custom plugin were developed.

Plugin "jaisocx":
`code/ts/build_tools/EslintPlugins/EslintPluginJaisocxJS`

eslint rules files:

`code/ts/build_tools/EslintPlugins/EslintPluginJaisocxJS/src/rules`

## how to customize .js builds and other tasks, by customizing the ProjectBuilder:

In the terminal change to 

`code/ts/build_tools`

this is the root catalog of ProjectBuilder tool.

Here resides .ts code:

`code/ts/build_tools/ProjectBuilder/src/ProjectBuilder.ts`

to transpile ProjectBuilder typescript code, if modified it,

```
./buildProjectBuilder.sh
```

Then, You can use Your new ProjectBuilder version to build Your packages in this project:

```
./buildPackages.sh
```

## THE WEBPACK BUILD EXAMPLE

`code/ts/www/webpack_builds/ExampleTree`

## Status of webpack build feature support in this project

- Under development, however the example is working well.
- Centrally it is **not enabled**, the `build-webpack/bundle.js` is **not** being produced now by **ProjectBuilder** in each example module.

- It seems, `index.ts` for import statements in other `.ts` files must be different, than `bundle.ts` file, used to build a webpack's `bundle.js` to include in a `.html` page in `<script src="..../bundle.js">`.


### what is Webpack build result?

`code/ts/www/webpack_builds/ExampleTree/transpiled/webpack/bundle.js`

is usable in a static `.html` page even, after each webpack rebuild, too.


usage of this `bundle.js` in a static `.html` page:

```
  <script src="webpack_builds/ExampleTree/transpiled/webpack/bundle.js"></script>

...

  <body>

    <div id="tree-holder-configured"></div>

    <script>
      document.addEventListener('DOMContentLoaded', () => {

        const tree = new Tree();
        tree
          .setMainHtmlNodeId("tree-holder-configured")
          .load('https://api.artic.edu/api/v1/artworks');

      });
    </script>
```


### how to rebuild

- Your other local dependencies must be linked. Use ProjectBuilder like documented above.

- to rebuild bundle.js with webpack:

```
cd code/ts/www/webpack_builds/ExampleTree
npm run webpack
```

- reload this `.html` page, opened in Your browser to see effect: `code/ts/www/ExampleWebpack_Tree.html`


