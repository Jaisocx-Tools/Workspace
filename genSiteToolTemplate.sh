#!/usr/bin/env bash

# EXAMPLE

# ./genSiteToolTemplate.sh \
#     --sitesToolName=CssCleanStart2 \
#     --cssOrJsTool=css \
#     --withCssConstantsFile=true \
#     --withConstantsImportLine=true


# ./genSiteToolTemplate.sh --sitesToolName=CssCleanStart2 --cssOrJsTool=css --withCssConstantsFile=true --withConstantsImportLine=true



thisPath="$(dirname "$(realpath "$0")")"
pathToEnv="${thisPath}/.env"



# when there is the .env
if [ -e "${pathToEnv}" ]; then
  # Obtaining the Project's settings from the .env
  source "${pathToEnv}"

  argv="$@"
  docker compose exec ts bash -c "cd ${tsServicePathInDockerVolume}/www/packages/SiteToolAutomation && ./bash/produce.sh $argv"

else
  # when no .env is in the Project,
  # this Exception text is written in the command line.
  exceptionNoticeLines=(
    ".env file is not set,"
    "\n   the example of the .env file is the .env.example,"
    "\n   in order to invoke PackageBuilder, You need copy the .env.example and rename to .env,"
    "\n   then to set in the new .env the for Your Project other constants for the sensitive infos."
    "\n"
  )

  echo -e "${exceptionNoticeLines[$'\052']}"

fi;


