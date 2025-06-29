#!/usr/bin/env bash

# thisPath="$(dirname "$(realpath "$0")")"
# packagePath="$(dirname "$(realpath "${thisPath}/../")")"

argv="$@"
node "transpiled/ESNext/main/produceCleanStart.js"  --sitesToolName=CssCleanStart2 --cssOrJsTool=css --template="data/templates/ResponsiveTemplate_CssCleanStart.template" --withSizesCssConstants=true --withConstantsImportLine=true


