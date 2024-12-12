#!/bin/bash
set -e



## STARTING Node http-server on port 8083
cd /var/www/workspace/ts

if [ "$NODE_ENV" != "production" ]; then
    npm install
fi

npm run server & echo \"$!\" > server.pid && \



## STARTING EXPRESS FRAMEWORK HTTP ENDPOINT ON PORT 3000
cd /var/www/workspace/ts/express/app

if [ "$NODE_ENV" != "production" ]; then
    npm install
fi

npm start & echo \"$!\" > serverExpress.pid




exec "$@"

