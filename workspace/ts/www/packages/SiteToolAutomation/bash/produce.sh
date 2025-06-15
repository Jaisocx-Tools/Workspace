#!/usr/bin/env bash

thisPath="$(dirname "$(realpath "$0")")"
packagePath="$(dirname "$(realpath "${thisPath}/../")")"

targetFolderPath="${packagePath}/responsive_tmp"


docker compose exec ts bash -c "cd /var/www/workspace/ts/www/packages/SiteToolAutomation && node "


exit 0


