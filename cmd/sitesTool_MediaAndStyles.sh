#!/usr/bin/env bash



# CssTable2 .theme_3example, data method: ${SitesToolAutomation}/transpiled/ESNext/overrides_template_data/OverridesTemplateData.js:getTemplateDataOverridden();

#   --templatePath="data/templates/css/responsive/responsive_size__mini_example_overrides_data.css.template" \
#   --templateDataMethodName="getTemplateDataOverridden" \
#   --templateDataMethodName="getUnchanged" \



###------------------------------------------
## start block
## checks and validations

commandLineArgs="$@"

thisPath="$(dirname "$(realpath "$0")")"
fodlerName="$(basename "$thisPath")"

# echo "fodlerName: ${fodlerName}"

projectPath=""

if [[ "${fodlerName}" == "cmd" ]]; then
  projectPath="$(realpath "${thisPath}/..")"
else
  projectPath="$(realpath "${thisPath}")"
fi

# echo "projectPath: ${projectPath}"



jsInvokePath="${projectPath}/cmd/base/js_invoke.sh"

# echo "jsInvokePath: ${jsInvokePath}"

if [[ ! -e "${jsInvokePath}" ]]; then
  echo "Error: call this script in the root of this project or in the folder command."
  exit 2;
fi

## finish block
## checks and validations
###------------------------------------------





"${jsInvokePath}" "$commandLineArgs" \
  --packagePath="www/packages/SitesToolAutomation" \
  --script="main/produceSitesTool_MediaAndStyles.js" \
      --cssOrJsTool="media" \
      --sitesToolName="JscImages_mini_freepic_kawaii" \
      --sitesTool_ThemeName="theme_base" \
      --templatePath="data/templates/css/responsive/responsive_size__mini.css.template" \
      --withSizesCssConstants="no" \
      --justTheme="no" \
      --justThemeResponsiveDataset="no"






