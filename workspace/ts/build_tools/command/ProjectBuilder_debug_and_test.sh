#!/usr/bin/env bash

tsconfigVersion="$1"
tsServicePathInDockerVolume="$2"

cd "${tsServicePathInDockerVolume}/build_tools/ProjectBuilder"

export NODE_OPTIONS="--no-warnings"
node --inspect=0.0.0.0:9229 "./transpiled/${tsconfigVersion}/cli/debug_and_test.js"       --ProjectRoot="${tsServicePathInDockerVolume}"       --BuildData="BuildData.json"       --PackagesPath="www"


# to run in the debug terminal
# node "./debug_and_test.js"  --ProjectRoot="/Users/illiapolianskyi/Projects/JAISOCX_SITES_TOOLS/workspace/workspace/ts"  --BuildData="BuildData.json"  --PackagesPath="www"
# node "./debug_and_test.js"  --ProjectRoot="/var/www/workspace/ts"  --BuildData="BuildData.json"  --PackagesPath="www"




