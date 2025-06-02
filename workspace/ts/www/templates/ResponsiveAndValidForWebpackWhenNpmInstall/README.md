# CSS Clean Start

## The aim of the setup
All front end devs use some normalizing styles for their new projects from scratch.

When You start fresh project from scratch, You have at once the index.html with responsive markup,
and You are able to set the look and feel of Your site in few minutes,
via setting very few variables,
like text color, background color and font family.

In this index.html template,
several .css files will be loaded with size of very few KB.
1. base normalizing css file for all html tags
2. base theme file, where all css variabes becomes values set
3. two example theme .css files, theme-lightmode and theme-darkmode.
4. example usage of fonts file in .css theme files




## The latest .tgz archive (v.1.2.14 24th of March 2025)

[https://sandbox.brightday.email/sites_tools/css_tools/CssCleanStart/jaisocx-css-clean-start-1.2.14-with-fonts.tgz](https://sandbox.brightday.email/sites_tools/css_tools/CssCleanStart/jaisocx-css-clean-start-1.2.14-with-fonts.tgz)


[https://sandbox.brightday.email/sites_tools/css_tools/CssCleanStart/jaisocx-css-clean-start-1.2.14.tgz](https://sandbox.brightday.email/sites_tools/css_tools/CssCleanStart/jaisocx-css-clean-start-1.2.14.tgz)




## Watch site in action

[https://sandbox.brightday.email/sites_tools/css_tools/CssCleanStart/index.template.html](https://sandbox.brightday.email/sites_tools/css_tools/CssCleanStart/index.template.html)


[https://sandbox.brightday.email/sites_tools/css_tools/CssCleanStart/example-lightmode.html](https://sandbox.brightday.email/sites_tools/css_tools/CssCleanStart/example-lightmode.html)


[https://sandbox.brightday.email/sites_tools/css_tools/CssCleanStart/example-darkmode.html](https://sandbox.brightday.email/sites_tools/css_tools/CssCleanStart/example-darkmode.html)





## Github
[https://github.com/Jaisocx-Tools/Workspace/tree/main/workspace/ts/www/sites_tools/css_tools/CssCleanStart](https://github.com/Jaisocx-Tools/Workspace/tree/main/workspace/ts/www/sites_tools/css_tools/CssCleanStart)




## Status
Ready to use since the 24-th of March in the Year 2025.




### Tasks to do
1. The css example with loading custom font file with aliases for webpack, so that the package can be usable via `npm install`, then in .ts or .js file `import ( lib ) from "@jaisocx/css-clean-start"` and then, `npm run webpack`.

2. A nice loader for .css files like for other code the `npm`, `yarn`, `composer` and `maven` would be a very fine thing to use .css themes and templates.



## Usage

### 1. &lt;html class="workspace"&gt;
Normally set the css class `workspace` and theme css class in &lt;html&gt; tag.
```
<html lang="en" class="workspace theme-darkmode">
```


### 2. class ul-reset
You can set css class `ul-reset` when You don't need html lists rendering with the predefined 90-s years html look and feel.
```
<html lang="en" class="workspace ul-reset">
```

or in some tag, where You don't need html lists rendering with the predefined 90-s years html look and feel.
```
<html lang="en" class="workspace">
      ...
    <a-tag class="ul-reset">
```

### 3. class long
### 4. class small
### 5. class browser-width


## npm for webpack

I use in the package.json th line to push to npm registry the MediaAndStyles/fonts folder.

this is not the good practice, and I shall use cdn urls for fonts and media in other packages,
and in this package I wanted to test the build with webpack with 3rd party dependencies loaded from npm registry,
that we have the package.json config, webpack configs and webpack aliases
to build the normal bundle.js for a Css Sites UI tool.

there could be mini images and fonts for sure.


```
npm install @jaisocx/css-clean-start
```



