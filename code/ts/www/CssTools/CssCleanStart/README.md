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
3. two example theme .css files, theme-example and theme-darkmode.

## Watch site in action

[https://workspace.brightday.email/CssTools/CssCleanStart/index.template.html](https://workspace.brightday.email/CssTools/CssCleanStart/index.template.html)


[https://workspace.brightday.email/CssTools/CssCleanStart/example-darkmode.html](https://workspace.brightday.email/CssTools/CssCleanStart/example-darkmode.html)


## Github
[https://github.com/Jaisocx-Tools/Workspace/tree/main/code/ts/www/CssTools/CssCleanStart](https://github.com/Jaisocx-Tools/Workspace/tree/main/code/ts/www/CssTools/CssCleanStart)


## Status
Not ready. Not published yet to the npm registry.


## Usage

### 1. &lt;html class="workspace"&gt;
Normally set the css class `workspace` and theme css class in &lt;html&gt; tag.
```
<html lang="en" class="workspace theme-darkmode">
```


### 2. class ul-reset
You can set css class `ul-reset` when You don't need html lists rendering with the predefined 90-s years html look and feel.
```
<html lang="en" class="workspace theme-example ul-reset">
```

or in some tag, where You don't need html lists rendering with the predefined 90-s years html look and feel.
```
<html lang="en" class="workspace theme-example">
      ...
    <a-tag class="ul-reset">
```


## Tasks
1. All dimensions: 
    1. mobile landscape and portrait
    2. tablet landscape and portrait
    3. laptop
    4. desktop
    5. big screen
2. Overflow main site's layout for all dimensions.
3. The css example with loading custom font file with aliases for webpack.

