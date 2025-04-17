#!/usr/bin/env bash

thisPath="$(dirname "$(realpath "$0")")"
TSFolderPath="${thisPath}/../../../"
TSFolderAbsPath="$(dirname "$(realpath "${TSFolderPath}")")"

# echo "TSFolderAbsPath: ${TSFolderAbsPath}"
# exit 0


cleanstartMediarulesPath="${TSFolderAbsPath}/www/CssTools/CssCleanStart/MediaAndStyles/responsive"
targetFolderPath="${TSFolderAbsPath}/www/packages/Mobile.vsDeskop/tmp"
targetFilename="MediaruleNameCssFiles.list"
targetFilePath="${targetFolderPath}/${targetFilename}"


export COLUMNS=1
ls "${cleanstartMediarulesPath}" > "${targetFilePath}"

exit 0


