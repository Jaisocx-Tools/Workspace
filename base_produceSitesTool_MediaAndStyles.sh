#!/usr/bin/env bash

# this script invokes:
#     => in docker ts:
#             ${SitesToolAutomation}/bash/produceSitesTool_MediaAnsStyles.sh
#
#     then subcall => in docker ts, node with debug option:
#             node  ${SitesToolAutomation}/transpiled/ESNext/main/produceSitesTool_MediaAndStyles.js



commandLineArgs="$@"
thisPath="$(dirname "$(realpath "$0")")"
pathToEnv="${thisPath}/.env"



# when there is the .env
if [ -e "${pathToEnv}" ]; then
  # Obtaining the Project's settings from the .env
  source "${pathToEnv}"

  argv="$@"
  docker compose exec ts bash -c "cd ${tsServicePathInDockerVolume}/www/packages/SitesToolAutomation && ./bash/produceSitesTool_MediaAnsStyles.sh $commandLineArgs"

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
