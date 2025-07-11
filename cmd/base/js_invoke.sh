#!/usr/bin/env bash


transpiledJsSourcesLocalPathInPackage="transpiled/ESNext"


###------------------------------------------
## start block
## checks and validations, loads .env

echo "running js_invoke.sh ..."

thisPath="$(dirname "$(realpath "$0")")"
fodlerName="$(basename "$thisPath")"

echo "fodlerName: ${fodlerName}"

projectPath=""

if [[ "${fodlerName}" == "base" ]]; then
  projectPath="$(realpath "${thisPath}/../..")"
elif [[ "${fodlerName}" == "cmd" ]]; then
  projectPath="$(realpath "${thisPath}/..")"
fi

echo "projectPath: ${projectPath}"



envPath="${projectPath}/.env"

# echo "envPath: ${envPath}"

if [[ -e "${envPath}" ]]; then
  source "${envPath}"
else
  echo "Error: .env was not found."
  exit 2;
fi

## finish block
## checks and validations, loads .env
###------------------------------------------



commandLineArgs="$@"
argsLines="$(echo "$@" | tr " " "\n")"

debug="$(echo "${argsLines}" | grep "debug")"
packagePath="$(echo "${argsLines}" | grep "packagePath" | cut -d'=' -f2)"
script="$(echo "${argsLines}" | grep "script" | cut -d'=' -f2)"



debugInspectOption=''
if [[ "${debug}" == "--debug" ]]; then
  debugInspectOption="--inspect-brk=0.0.0.0:9229"
fi



commandToRun="cd "${tsServicePathInDockerVolume}/${packagePath}" && node ${debugInspectOption} "./${transpiledJsSourcesLocalPathInPackage}/${script}""



hostScriptPath="$(realpath "${relativeProjectPathWithTsCode}")/${packagePath}/${transpiledJsSourcesLocalPathInPackage}/${script}"
dockerScriptPath="${tsServicePathInDockerVolume}/${packagePath}/${transpiledJsSourcesLocalPathInPackage}/${script}"



echo "Script Path: ${hostScriptPath}"
echo "Script Path in docker ts: ${dockerScriptPath}"



cd "${projectPath}"
docker compose exec ts bash -c "${commandToRun} $commandLineArgs"





