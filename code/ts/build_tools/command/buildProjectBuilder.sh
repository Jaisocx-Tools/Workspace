#!/usr/bin/env bash

tsServicePathInDockerVolume="$1"

cd "${tsServicePathInDockerVolume}/build_tools/ProjectBuilder"

export NODE_OPTIONS="--no-warnings" 

npx tsc -p "./tsconfig.ESNext.overrides.json"

npx tsc -p "./tsconfig.CommonJS.overrides.json"
