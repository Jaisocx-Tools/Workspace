# JAISOCX TYPESCRIPT TOOLS BUILDER

##  WARNING: MYSQL DATABASE docker-compose.yml has been modified in this project. First do MySQL backup, if git pull this project to upgrade!!!


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

The Project is under development now, 28 January 2025.

### The features ready to use:
1. The infrastructure for **development of Typescript libraries**.
2. The intercative **sites tools** packages in `code/ts/www` catalog, however still under development.
3. **Dockerized services**, to use in development:
    1. HTTPS server, serving volumes `code/ts/www` and `code/php`, with the **brightday.email** wildcard TLS cert, valid til November 2025. Locally, when set some subdomain entry of `brightday.email` domain in `/etc/hosts` file, this is helpful to test with valid **https endpoints**. And in the config file `.docker/https/conf/http-conf.xml`, don't set the domain name `workspace.brightday.email` for Your local tests, this is reserved already, here are the examples published.
    2. **JWT protection** feature for **https** endpoints under **Jaisocx** dockerized service `https`.
    3. **NodeJS 23** dockerized volume with services:
        1. **node** command line interface. node --version: v23.3.0.
        2. **npm** command line interface. npm --version: 10.9.0.
        3. **yarn@1.22.19** package manager is installed in the node docker service, however is not used by ProjectBuilder. You are free to rebuild the PackageBuilder to use yarn. I shall note to develop .env setting for the choice of npm or yarn.
        3. **Express** NodeJS Framework example application in `code/ts/express/app` http://localhost:3000/
        4. **Node http server** endpoint http://localhost:8083/, serving volume `code/ts`.
    4. Backend interpreting language **PHP 8.3** dockerized service
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

`code/ts/www/examples/ExampleTree`

## Status of webpack build feature support in this project

- Under development, however the example is working well.
- Centrally it is **not enabled yet**, the `build-webpack/bundle.js` is **not** being produced now by **ProjectBuilder** in each example module.

- It seems, `index.ts` for import statements in other `.ts` files must be different, than `bundle.ts` file, used to build a webpack's `bundle.js` to include in a `.html` page in `<script src="..../bundle.js">`.


### what is Webpack build result?

`code/ts/www/examples/ExampleTree/build-webpack/bundle.js`

is usable in a static `.html` page even, after each webpack rebuild, too.


usage of this `bundle.js` in a static `.html` page:

```
  <script src="examples/ExampleTree/build-webpack/bundle.js"></script>

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
cd code/ts/www/examples/ExampleTree
npm run webpack
```

- reload this `.html` page, opened in Your browser to see effect: `code/ts/www/ExampleWebpack_Tree.html`


