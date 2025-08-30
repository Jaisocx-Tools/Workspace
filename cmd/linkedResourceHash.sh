#!/usr/bin/env bash



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
  --packagePath="www/packages/LinkedResourcesIntegrity" \
  --script="cmd/produceLinkedResourceHash.js" \
      --filePath="/var/www/workspace/ts/www/sites_tools/js_tools/Tree/MediaAndStyles/Tree_main_resolved_minimal.css" \
      --algo="sha384"






