#!/usr/bin/env bash

# this script invokes:
#     => in local terminal:
#             base_produceSitesTool_MediaAndStyles.sh
#
#     then subcall => in docker ts:
#             ${SitesToolAutomation}/bash/produceSitesTool_MediaAnsStyles.sh
#
#     then subcall => in docker ts, node with debug option:
#             node  ${SitesToolAutomation}/transpiled/ESNext/main/produceSitesTool_MediaAndStyles.js



# CssTable2 .theme_3example, data method: ${SitesToolAutomation}/transpiled/ESNext/overrides_template_data/OverridesTemplateData.js:getTemplateDataOverridden();

#   --templatePath="data/templates/css/responsive/responsive_size__mini_example_overrides_data.css.template" \
#   --templateDataMethodName="getTemplateDataOverridden" \
#   --templateDataMethodName="getUnchanged" \


./js_invoke.sh "$@" \
  --packagePath="www/packages/SitesToolAutomation" \
  --script="main/produceSitesTool_MediaAndStyles.js" \
    --sitesTool_ThemeName="theme_example14" \
    --sitesToolName="CssTable2" \
    --cssOrJsTool="css" \
    --keywordResponsiveSize="j" \
    --templatePath="data/templates/css/responsive/responsive_size__mini.css.template" \
    --withSizesCssConstants="true" \
    --withConstantsImportLine="true"



