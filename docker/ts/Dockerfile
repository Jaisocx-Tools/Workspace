FROM node:23.11.0-alpine3.21

USER root

WORKDIR /var/www/workspace/ts

RUN apk add --no-cache bash
RUN apk add --no-cache curl

# Verify installation
RUN node -v && npm -v
RUN npm install pm2

RUN corepack enable

# Set the desired Yarn version
# 4.9.1 advised on site https://yarnpkg.com/ on the 18th of April 2025.
ENV yarnVersion="4.9.1"
RUN corepack prepare "yarn@${yarnVersion}" --activate

# Verify Yarn installation
RUN yarn --version

RUN mkdir -p /entrypoint
COPY ./entrypoint.sh /entrypoint/entrypoint.sh
RUN chmod -R a+rwx /entrypoint

RUN if [ -e /entrypoint/npm-installed.mark ]; then rm /entrypoint/npm-installed.mark; fi

# Expose the application's port
EXPOSE 3000
EXPOSE 8083

ENTRYPOINT [ "/entrypoint/entrypoint.sh" ]
