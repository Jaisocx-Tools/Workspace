FROM node:23-alpine3.19

USER root

WORKDIR /var/www/workspace/ts

RUN apk add --no-cache bash
RUN apk add --no-cache curl

# Verify installation
RUN node -v && npm -v

RUN mkdir -p /entrypoint
COPY ./entrypoint.sh /entrypoint/entrypoint.sh
RUN chmod -R a+rwx /entrypoint

# Expose the application's port
EXPOSE 3000
EXPOSE 8083

ENTRYPOINT [ "/entrypoint/entrypoint.sh" ]

CMD ["bash", "-c", "tail -f < /dev/null"]


