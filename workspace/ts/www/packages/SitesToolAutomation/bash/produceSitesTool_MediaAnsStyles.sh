#!/usr/bin/env bash

# thisPath="$(dirname "$(realpath "$0")")"
# packagePath="$(dirname "$(realpath "${thisPath}/../")")"



# --inspect=0.0.0.0:9229 is for the debugging the node program, js or ts both.
#
# I was able to debug in VSCode with some node or js debug extension.
# for VSCode, the .vscode/launch.json code snippet:
# {
#   "version": "0.2.0",
#   "configurations": [
#     {
#       "name": "Debug Node: js or ts",
#       "type": "node",
#       "request": "attach",
#       "port": 9229,
#       "address": "localhost",
#       "localRoot": "${workspaceFolder}/workspace/ts",
#       "remoteRoot": "/var/www/workspace/ts",
#       "restart": false,
#       "skipFiles": ["<node_internals>/**"]
#     },
#     ...
#     ...
#
export NODE_OPTIONS="--no-warnings"
commandLineArgs="$@"
argsToGrep="$(echo "${commandLineArgs}" | tr ' ' '\n' )"
debug="$(echo "${argsToGrep}" | grep "debug" )"

if [[ "$debug" == "--debug" ]]; then
  node --inspect-brk=0.0.0.0:9229 "transpiled/ESNext/main/produceSitesTool_MediaAndStyles.js" $commandLineArgs
else
  node "transpiled/ESNext/main/produceSitesTool_MediaAndStyles.js" $commandLineArgs
fi


