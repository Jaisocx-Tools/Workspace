# CSS Table

## The aim of the setup


## The latest .tgz archive (v.1.3.2. 03.04.2025)

[Workspace.brightday.email/CssTools/CssTable/jaisocx-css-table-1.3.2.tgz](https://workspace.brightday.email/CssTools/CssTable/jaisocx-css-table-1.3.2.tgz)



## Watch site in action

[Workspace.brightday.email/ExampleCss_CssTable_withCssCleanStart.html](https://workspace.brightday.email/ExampleCss_CssTable_withCssCleanStart.html)



## Github

[Github.com/Jaisocx-Tools/Workspace/tree/main/code/ts/www/CssTools/CssTable](https://github.com/Jaisocx-Tools/Workspace/tree/main/code/ts/www/CssTools/CssTable)


## Status
Ready for usage. However the bugs can become known later.
In development since the 28-th of March 2025.




### Tasks to do

1. js class for order by. I shall extend the .ts Tooltip class and build a context menu ts class.
and then I shall style the menu to order columns in js.

2. server side rendering php composer package, when published, to refer here in README.md



## Usage

When css classes set `thin-styles-applied` and `bright-styles-applied`,
then You can set to css variables different values for thin view when mobile and tablet portrait,
and for the desktop standard view.

```
<div class="workspace-css-table-holder thin-styles-applied bright-styles-applied">
```


### example html doc
```
<!DOCTYPE html>
<html class="browser-width-when-portrait">
<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Under construction: Css Table</title>

  <script src="CssTools/CssTable/transpiled/Simple/Preloader.js"></script>
  <script src="CssTools/CssTable/transpiled/Simple/ThemesPreloadsCssTable.js"></script>

  <!-- <link rel="stylesheet" href="CssTools/CssTable/MediaAndStyles/themes/theme-lightmode/css-table-theme-lightmode-relative.css"> -->
  <!-- <link rel="stylesheet" href="CssTools/CssTable/MediaAndStyles/themes/theme-darkmode/css-table-theme-darkmode-relative.css"> -->
  <link rel="stylesheet" href="CssTools/CssTable/MediaAndStyles/css-table-main-relative.css">

</head>
<body>

  <main>

    <h1 style="font-family: Verdana;">Css Table</h1>

    <div class="workspace-css-table-holder">
      <div class="workspace-css-table">
        <div class="row desktop-columns-labels-holder">
          <div class="cell"><span class="column-label">attribute</span></div>
          <div class="cell"><span class="column-label">type</span></div>
          <div class="cell"><span class="column-label">values</span></div>
          <div class="cell"><span class="column-label">description</span></div>
        </div>
        <div class="row">
          <div class="cell"><span class="column-label">attribute</span><span class="cell-value">
              port</span></div>
          <div class="cell"><span class="column-label">type</span><span class="cell-value">number</span></div>
          <div class="cell"><span class="column-label">values</span><span class="cell-value">443</span></div>
          <div class="cell"><span class="column-label">description</span><span class="cell-value">the port number for the server 
            to accept browsers' connections</span></div>
        </div>
        <div class="row">
          <div class="cell"><span class="column-label">attribute</span><span class="cell-value">
              alternative-port</span></div>
          <div class="cell"><span class="column-label">type</span><span class="cell-value">number</span></div>
          <div class="cell"><span class="column-label">description</span><span class="cell-value">for development and testing purposes
            only. if default port is busy,
            then the server starts listening on the alternative port.</span></div>
          <div class="cell"><span class="column-label">values</span><span class="cell-value">8443</span></div>
        </div>
        <div class="row">
          <div class="cell"><span class="column-label">attribute</span><span class="cell-value">secure</span></div>
          <div class="cell"><span class="column-label">type</span><span class="cell-value">boolean</span></div>
          <div class="cell"><span class="column-label">values</span><span class="cell-value">true | false</span></div>
          <div class="cell"><span class="column-label">description</span><span class="cell-value">please specify, where to use HTTPS
              secured connection with TLS or not.</span>
          </div>
        </div>
      </div>
    </div>

  </main>

  <script>

    // DOCUMENT ONLOAD, INVOKES THE FUNCTION TO PRELOAD THEME FONTS
    document.addEventListener('DOMContentLoaded', () => {

      const preloader = new Preloader();
        preloader
          .setThemesPreloads( themesPreloads )
          .setWebpackAlias( "@jaisocx-css-table-cdn-fonts" )
          .setWebpackAliasReplace( "https://workspace.brightday.email/cdn/www/fonts" )
          .init();

    });

  </script>

  
</body>
</html>

```


## npm 

```
npm install @jaisocx/css-table
```



