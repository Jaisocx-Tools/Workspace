# CSS Clean Start 2


## Status of the Project

ready



## Status

Ready to use since the 19-th of July in the Year 2025.



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




## The latest .tgz archive (v.1.1.5 25th of August 2025)

[https://sandbox.brightday.email/sites_tools/css_tools/CssCleanStart_2/jaisocx-css-clean-start-2-1.1.5.tgz](https://sandbox.brightday.email/sites_tools/css_tools/CssCleanStart_2/jaisocx-css-clean-start-2-1.1.5.tgz)





## Watch site in action

[https://sandbox.brightday.email/sites_tools/css_tools/CssCleanStart_2/index.example.html](https://sandbox.brightday.email/sites_tools/css_tools/CssCleanStart_2/index.example.html)



### Dev mode, get to know responsive .css file name

[https://sandbox.brightday.email/sites_tools/css_tools/CssCleanStart_2/responsive_sizes.html](https://sandbox.brightday.email/sites_tools/css_tools/CssCleanStart_2/responsive_sizes.html)




## Github
[https://github.com/Jaisocx-Tools/Workspace/tree/main/workspace/ts/www/sites_tools/css_tools/CssCleanStart_2](https://github.com/Jaisocx-Tools/Workspace/tree/main/workspace/ts/www/sites_tools/css_tools/CssCleanStart_2)







## Usage

### 1. &lt;html class="jsx"&gt;
Normally set the css class `jsx` and theme css class in &lt;html&gt; tag.
```
<html lang="en" class="jsx">
```


### 2. class ul-reset
You can set css class `ul-reset` when You don't need html lists rendering with the predefined 90-s years html look and feel.
```
<html lang="en" class="jsx ul-reset">
```

or in some tag, where You don't need html lists rendering with the predefined 90-s years html look and feel.
```
<html lang="en" class="jsx">
      ...
    <a-tag class="ul-reset">
```

### 3. class small
### 4. class browser-width



## npm for webpack

I use in the package.json th line to push to npm registry the MediaAndStyles/fonts folder.

this is not the good practice, and I shall use cdn urls for fonts and media in other packages,
and in this package I wanted to test the build with webpack with 3rd party dependencies loaded from npm registry,
that we have the package.json config, webpack configs and webpack aliases
to build the normal bundle.js for a Css Sites UI tool.

there could be mini images and fonts for sure.


```
npm install @jaisocx/css-clean-start-2
```





