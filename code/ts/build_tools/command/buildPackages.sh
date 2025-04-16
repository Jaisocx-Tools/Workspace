#!/usr/bin/env bash

tsconfigVersion="$1"
tsServicePathInDockerVolume="$2"

cd "${tsServicePathInDockerVolume}/build_tools/ProjectBuilder" 

export NODE_OPTIONS="--no-warnings" 
node "./build/${tsconfigVersion}/cli/run.js"       --ProjectRoot="${tsServicePathInDockerVolume}"       --BuildData="${tsServicePathInDockerVolume}/BuildData.json"       --PackagesPath="${tsServicePathInDockerVolume}/www/"

