# Workaround in this project to align Your projects with npm, github, webpack.

## 1. npm and github resources usage save up

in the open source projects, published on npm and github, there is the rule, not to push to these services 3rd parties dependencies, they already published on thes services, in order to avoid growth of hardcopies of these files.


### the way to align with rule: append to .gitignore

in the .gitignore file, and for npm registry optionally .npmignore file with the same structture and contents, the files and folders are listed, these will not be pushed to github nor to npm, when You publish Your package.

1. node_modules with dependencies in javascript
2. vendor with dependencies in php
3. on npm, the rule doesnt allow pushing fonts files and example media like images and videos.


### to resolve the trouble when on install the .gitignored resources are not there

You **can publish** the resources like fonts files and media on Your **cdn endpoints**.


## 2. relative and absolute urls sites resources referencing.

### sites resources:

1. **styles** .css files
2. browser interactivity scripts in **Javascript** .js files
3. **media** like:
    1. **images**
    2. **video**
    3. **audio**
4. **fonts** files to use with styles, these are referenced via urls in .css files
5. **data** files: **json** and **xml**.


### problem with the references

when tested locally without sites server, the urls can work when set relative,
however, when the .html page is relatively on another path or url when copied or reinstalled or published on a sites endpoint,
then a site ui tool, installed via npm install to node_modules folder, can be on another path or url, too,
and it's bound resources .gitignored on npm registry, on another path or url too.


### webpack library resolves relative urls in a good way.

the webpack builds a bundle.js file, this can be later referenced on a .html page in &lt;script src="bundle.js"&gt;&lt;/script&gt;

1. the .css files are included into bundle.js, the referencing problem solved.
2. the other resources like fonts files, are saved by webpack in the folder, where bundle.js resides, and they can be accessed well, too. for this purpose, when publishing the bundle.js file, the working site has to have published the entire folder, built with webpack.


### cdn endpoint resolves relative urls in a way to relay on abslute urls.

when publisheing a bundle.js with the entire folder with fonts and media **multiple** times, You can **save up resources** on Your endpoints, too, keeping **one copy** published on a **cdn endpoint**.

when You publish the media and fonts files, and built webpack bundles too on a sites server,
You can note in documentation the urls of these resources, and then reference these resources on other .html pages and in the imports in .css files via absolute urls like this:
`https://sandbox.brightday.email/cdn/www/fonts/Baloo_Paaji_2/BalooPaaji2-VariableFont_wght.ttf`

You can also **set the authorization** rule for this endpoint, if the resources are private or have sensitive content.

### the package in this project, having webpack and cdn feature for styles and fonts:

1. package name:
**CssTools CssCleanStart**

2. npm package name:
`@jaisocx/css-clean-start`

3. path: [./../../workspace/ts/www/CssTools/CssCleanStart/README.md](./../../workspace/ts/www/CssTools/CssCleanStart/README.md)


4. watch in action with styles referenced at cdn (example of **css code snippet**, however with usage of cdn for **css clean start** styles and themes):
[https://sandbox.brightday.email/examples_html_with_resources_on_cdn/ExampleCss_CssCodeSnippet_minimal.html](https://sandbox.brightday.email/examples_html_with_resources_on_cdn/ExampleCss_CssCodeSnippet_minimal.html)


5. code on Gituhub
[https://github.com/Jaisocx-Tools/Workspace/tree/main/workspace/ts/www/CssTools/CssCleanStart](https://github.com/Jaisocx-Tools/Workspace/tree/main/workspace/ts/www/CssTools/CssCleanStart)


6. code on sandbox.brightday.email
[https://sandbox.brightday.email/CssTools/CssCleanStart/](https://sandbox.brightday.email/CssTools/CssCleanStart/)


