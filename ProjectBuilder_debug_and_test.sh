#!/usr/bin/env bash

# This script obtains the settings values from the .env,
# and then invokes another .sh script,
# however the script already executes in the dockerized node environment,
# having the fixed node and npm ver.,
# this is the best to keep the npm dependencies of the same ver., too,
# since when another node and npm ver is installed,
# the npm dependencies (javascript libraries) supported, are already of another their versions,
# and then could be not doing.

thisPath="$(dirname "$(realpath "$0")")"
pathToEnv="${thisPath}/.env"



# when there is the .env
if [ -e "${pathToEnv}" ]; then
  # Obtaining the Project's settings from the .env
  source "${pathToEnv}"


  # the constants from the .env, pleae don't use there hardcoed, the best to set in the .env file :
  # tsconfigVersion="ESNext"
  # relativeProjectPathWithTsCode="./workspace/ts"
  # tsServicePathInDockerVolume="/var/www/workspace/ts"

  # the command line tool PackageBuilder.ts is best to invoke in the dockerized node service,
  # since the node ver. 23 and npm ver. are fixed in Your setup,
  # until changed in ./docker/ts/Dockerfile in the first line:
  # FROM node:23-alpine3.19
  # this line invokes the .sh command to call the ProjectBuilder.ts the desired way.

  docker compose exec ts bash -c "${tsServicePathInDockerVolume}/build_tools/command/ProjectBuilder_debug_and_test.sh "${tsconfigVersion}" "${tsServicePathInDockerVolume}""

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




