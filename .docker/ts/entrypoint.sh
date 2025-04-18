#!/bin/bash
set -e

## STARTING Node http-server on port 8083
cd /var/www/code/ts

if [ ! -e /entrypoint/npm-installed.mark ]; then
    npm install
fi

npm run server &  # Start in background
PID1=$!
trap "echo 'Shutting down...'; kill $PID1 $PID2; wait $PID1 $PID2" SIGINT SIGTERM




## STARTING EXPRESS FRAMEWORK HTTP ENDPOINT ON PORT 3000
cd /var/www/code/ts/express

if [ ! -e /entrypoint/npm-installed.mark ]; then
    npm install
fi

npm start &  # Start in background
PID2=$!
trap "echo 'Shutting down...'; kill $PID1 $PID2; wait $PID1 $PID2" SIGINT SIGTERM




if [ ! -e /entrypoint/npm-installed.mark ]; then
    touch /entrypoint/npm-installed.mark
fi

# Wait for both to exit (container stays alive as long as they run)
wait $PID1
wait $PID2
