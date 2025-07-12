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

# ./base_produceSitesTool_MediaAndStyles.sh \
#   --sitesTool_ThemeName="theme_3example" \
#   --sitesToolName="CssTable2" \
#   --cssOrJsTool="css" \
#   --keywordResponsiveSize="a" \
#   --templatePath="data/templates/css/responsive/responsive_size__mini_example_overrides_data.css.template" \
#   --templateDataMethodName="getTemplateDataOverridden" \
#   --withSizesCssConstants="true"



bash -c ./bash/produceSitesTool_MediaAnsStyles.sh \
  --sitesTool_ThemeName="theme_example12" \
  --sitesToolName="CssTable2" \
  --cssOrJsTool="css" \
  --keywordResponsiveSize="h" \
  --templatePath="data/templates/css/responsive/responsive_size__mini.css.template" \
  --templateDataMethodName="getUnchanged" \
  --withSizesCssConstants="true"



