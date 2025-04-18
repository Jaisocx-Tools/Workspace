# JAISOCX TYPESCRIPT TOOLS BUILDER

##  WARNING: MYSQL DATABASE docker-compose.yml has been modified in this project. First do MySQL backup, if git pull this project to upgrade!!!



## News: 
1. docker service `ts` was upgraded to v`23.11.0`, npm v`10.9.2` (I experiensed best performance and the documentation tells about new typescript files run feature available after v23.6.0) You need to rebuild the `ts` service.
```
docker compose stop ts
docker compose rm ts
docker compose build ts
docker compose up ts -d
```

2. 


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


