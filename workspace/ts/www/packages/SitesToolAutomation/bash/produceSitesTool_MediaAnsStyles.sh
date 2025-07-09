#!/usr/bin/env bash

# thisPath="$(dirname "$(realpath "$0")")"
# packagePath="$(dirname "$(realpath "${thisPath}/../")")"

argv="$@"
node "transpiled/ESNext/main/produceSitesTool_MediaAndStyles.js" $argv

