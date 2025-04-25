#!/usr/bin/env bash

thisPath="$(dirname "$(realpath "$0")")"
packagePath="$(dirname "$(realpath "${thisPath}/../")")"

targetFolderPath="${packagePath}/responsive_tmp"


docker compose exec ts bash -c "cd /var/www/code/ts/www/packages/Mobile.vsDesktop && node "


exit 0


