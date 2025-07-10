# Site Tool Automation

## How to gen new set of .css files for the improved responsive site's feature


in the Terminal, in the Root of the Project

## Produce theme responsive .css fresh fileset for the CssCleanStart

```bash
./produceCleanStart.sh --sitesTool_ThemeName=theme_example --sitesToolName=CssCleanStart2 --cssOrJsTool=css --template="data/templates/responsive_size__CssCleanStart.css.template" --withSizesCssConstants=true --withConstantsImportLine=true
```



## for a sites tool, css or js

```bash
./produceSitesToolTemplate.sh --sitesTool_ThemeName=theme_example --sitesToolName=ACssSitesTool3 --cssOrJsTool=css --template="data/templates/responsive_size.css.template"
```


## the responsive .css filest with minimal .css files of size 6 (six) text lines and 419 bytes.

```
./produceCleanStart.sh --sitesTool_ThemeName=theme_example --sitesToolName=ACssSitesTool4 --cssOrJsTool=css --template="data/templates/responsive_size__mini.css.template"
```



## for a sites tool by a custom template

```
./produceCleanStart.sh --sitesTool_ThemeName=theme_example --sitesToolName=ACssSitesTool4 --cssOrJsTool=css --template="data/templates/responsive_size__mini.css.template"
```








## Status of the Project

### Done

. responsive files set is generated good, with base template, to the project CssToolTemplate



### Not ready

. the method to override the template and template data is not done, in development for now.

. CssCleanStart gen of the responsive feature is not done. First the way to override the base template will be written, then the CssCleanStart will be refined.





## Libs Usages Examples

. TemplateRenderer with a new method for the optimization.




## Workarounds

### 1. joining bitbufs arrays by reference





## Program flow

### 1. command line args

in terminal:

./example_produce_CssTable_themeExample_MediaAndStyles.sh ( args )

calls base bash scipt:

produceSitesTool_MediaAndStyles_base.sh ( args )

in docker:

/var/www/workspace/ts/www/packages/SitesToolAutomation/bash/produceSitesToolTemplate.sh ( args )

node in dockerized ts service:

/var/www/workspace/ts/www/packages/SitesToolAutomation/src/main/produceSitesTool_byExtendedPropsForTemplate.ts ( args )

args mapped to js object:

```
  const terminalInpArgsObject: any = {
    sitesTool_ThemeName: "theme_base",
    sitesToolName: "",
    cssOrJsTool: "",
    template: "",
    withSizesCssConstants: "",
    withConstantsImportLine: ""
  };
```

line 55: overrides method mainClassInstance.responsiveCssFile.getTemplateDataOverridden.

in the overriding method You may implement assignemnt of custom values passed to template.



this method gets 2 args:

1. responsiveDatasetPropName: id of the json object in dataset
2. templateDataBase: custom js object, this will be returned from this method to use in the templates.



The overriding method args explained

1. responsiveDatasetPropName: id of the json object in dataset at path

`workspace/ts/www/packages/SitesToolAutomation/data/ResponsiveSizes/ResponsiveSizes.json`

available for You on url

[https://sandbox.brightday.emal/packages/SitesToolAutomation/data/ResponsiveSizes/ResponsiveSizes.json](https://sandbox.brightday.emal/packages/SitesToolAutomation/data/ResponsiveSizes/ResponsiveSizes.json)


Example of value for responsiveDatasetPropName: **mobile_xs**

```json
{
  ...
  ...
  "data": {
    "mobile_xs": {
      "range_orderby_id": "e02",
      "width": {
        "from": 240,
        "to": 320
      },
      "height": {
        "from": 320,
  ...
  ...
```

2. templateDataBase



## Tasks

### . 1. keyword CssImports => Imports

both relative and webpack remain in `theme/themename` folder



### . 2. Constants .css file moves to MediaAndStyles folder



### . 3. responsive_sizes .css fileset moves to subfolder
 `MediaAndStyles/theme/themename/responsive`



### 4. Produce by templates other files

1. SitesTool_main.css

2. SitesTool_ThemeName_main.css

3. SitesTool_main_webpack.css

4. SitesTool_main_relative.css

5. index.ts

6. webpack.aliases.json






