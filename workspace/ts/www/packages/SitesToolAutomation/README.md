# Site Tool Automation

## How to gen new set of .css files for the improved responsive site's feature


in the Terminal, in the Root of the Project

## Produce theme responsive .css fresh fileset for the CssCleanStart

```bash
./cmd/CssCleanStart_3_MediaAndStyle.sh
```


### with debug option

```bash
./cmd/CssCleanStart_3_MediaAndStyle.sh --debug
```




## for a sites tool, css or js

```bash
./cmd/sitesTool_MediaAndStyles.sh
```

### with debug option

```bash
./cmd/sitesTool_MediaAndStyles.sh --debug
```







## Status of the Project

### Done

21th of July 2025





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
    withSizesCssConstants: ""
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





