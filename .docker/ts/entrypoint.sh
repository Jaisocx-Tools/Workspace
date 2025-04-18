#!/bin/bash
set -e



## STARTING Node http-server on port 8083
cd /var/www/code/ts

if [ ! -e /entrypoint/npm-installed.mark ]; then
    npm install
fi

npm run server & echo \"$!\" > server.pid && \



## STARTING EXPRESS FRAMEWORK HTTP ENDPOINT ON PORT 3000
cd /var/www/code/ts/express

if [ ! -e /entrypoint/npm-installed.mark ]; then
    npm install
fi

npm start & echo \"$!\" > serverExpress.pid

if [ ! -e /entrypoint/npm-installed.mark ]; then
    touch /entrypoint/npm-installed.mark
fi



exec "$@"

