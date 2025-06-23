#!/usr/bin/env bash

# thisPath="$(dirname "$(realpath "$0")")"
# packagePath="$(dirname "$(realpath "${thisPath}/../")")"

argv="$@"
node "transpiled/ESNext/main/genCleanStart.js"  --sitesToolName=CssCleanStart3 --cssOrJsTool=css --template="data/templates/ResponsiveTemplate_CssCleanStart.template" --withCssConstantsFile=true --withConstantsImportLine=true


