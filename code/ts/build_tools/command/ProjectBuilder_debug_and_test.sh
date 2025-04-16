#!/usr/bin/env bash

tsconfigVersion="$1"
tsServicePathInDockerVolume="$2"

cd "${tsServicePathInDockerVolume}/build_tools/ProjectBuilder" 

export NODE_OPTIONS="--no-warnings" 
node "./build/${tsconfigVersion}/cli/debug_and_test.js"       --ProjectRoot="${tsServicePathInDockerVolume}"       --BuildData="BuildData.json"       --PackagesPath="www"


# to run in the debug terminal
# node "./debug_and_test.js"  --ProjectRoot="/Users/illiapolianskyi/Projects/JAISOCX_SITES_TOOLS/workspace/code/ts"  --BuildData="BuildData.json"  --PackagesPath="www"




