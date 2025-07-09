#!/usr/bin/env bash

# thisPath="$(dirname "$(realpath "$0")")"
# packagePath="$(dirname "$(realpath "${thisPath}/../")")"

argv="$@"
node "transpiled/ESNext/main/produceSitesToolTemplate.js" $argv

