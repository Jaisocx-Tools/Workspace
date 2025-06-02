# HOW TO develop in typescript with ProjectBuilder


[README.md HOME](./../../README.md)



*Notice to code prettifier*

You are free to adjust the existing plugins for the ESLint code prettirier lib.

The Eslint is active, and the js code is here:

`workspace/ts/build_tools/EslintPlugins/EslintPluginJaisocxJS/src/rules`

Eslint config path:

`workspace/ts/eslint.config.js`




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

workspace/ts/www/modules/EventEmitter/package.json

```
{
  "name": "@jaisocx/event-emitter",
  "version": "1.0.1",
  ...
```


- 2. in the `workspace/ts/BuildData.json`

add new json entry for Your new .ts module

- *3. in the "dependencies" array, set every local dependency*, these You will use with npm link feature,
 .i.e building from local sources here in this project


If a packages doesn't have dependencies, the field still remains with zero length array value. I left it this way t keep the placeholder reminder, since this is very convinient, when a package is modofied some day later, to add a dependency very easy.
```
  ...
  },
  "dependencies": [],
  ...
```

`
This json example is not working as is, but the structure is right, and all fields names are the right ones.
`

```
{
  "npm-registry-name": "@jaisocx",
  "modules": [
    {
      "path": "modules/Tree",
      "name": "tree",
      "build": true,
      "build-simple-enable": true,
      "css-importer": {
        "build": true,
        "cssFilePath": "MediaAndStyles/clean-start-main-webpack.css",
        "cssTargetFilePath": "MediaAndStyles/clean-start-main-resolved.css"
      },
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
        "TreeConstants.js",
        "webpackAliases.js", // To publish on npm the aliases in this package from webpack.aliases.json
        "webpack.aliases.mjs", // To publish on npm the aliases in this package from webpack.aliases.json
        "webpack.aliases.cjs" // To publish on npm the aliases in this package from webpack.aliases.json
      ]
    },
```

- *4. in the root ctalog of this project,* start build .ts files to .js

```
./buildPackages.sh
```

## how to prettify .ts soures:

in terminal change to `workspace/ts/`

the eslint config `eslint.config.js` is in this catalog.

then, run eslint
```
npx eslint www/modules/<YourModule>/src/**/*.ts --fix
```

## how to develop eslint modules:

here is the path, where some custom eslint rules within one custom plugin were developed.

Plugin "jaisocx":
`workspace/ts/build_tools/EslintPlugins/EslintPluginJaisocxJS`

eslint rules files:

`workspace/ts/build_tools/EslintPlugins/EslintPluginJaisocxJS/src/rules`

## how to customize .js builds and other tasks, by customizing the ProjectBuilder:

In the terminal change to

`workspace/ts/build_tools`

this is the root catalog of ProjectBuilder tool.

Here resides .ts code:

`workspace/ts/build_tools/ProjectBuilder/src/ProjectBuilder.ts`

to transpile ProjectBuilder typescript code, if modified it,

```
./buildProjectBuilder.sh
```

Then, You can use Your new ProjectBuilder version to build Your packages in this project:

```
./buildPackages.sh
```



### how to rebuild

- Your other local dependencies must be linked. Use ProjectBuilder like documented above.

- to rebuild bundle.js with webpack:

```
cd workspace/ts/www/webpack_builds/ExampleTree
npm run webpack
```

- reload this `.html` page, opened in Your browser to see effect: `workspace/ts/www/ExampleWebpack_Tree.html`


