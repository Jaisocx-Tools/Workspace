#!/usr/bin/env bash

node --inspect=0.0.0.0:9229 ./../transpiled/ESNext/WriteAllDataSetsCommand.js "./../cdn_data"

echo -e ".json files have been written to "cdn_data" folder\n"
