#!/bin/bash

# Set timezone
ln -snf /usr/share/zoneinfo/${TIMEZONE} /etc/localtime
echo -e "${TIMEZONE}\n" > /etc/timezone
echo -e "[PHP]\ndate.timezone = ${TIMEZONE}\n" > /usr/local/etc/php/conf.d/tzone.ini


exec "$@"

