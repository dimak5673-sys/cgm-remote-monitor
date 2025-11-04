FROM node:16.16.0-alpine

LABEL maintainer="Nightscout Contributors"

WORKDIR /opt/app
ADD . /opt/app

RUN npm install --cache /tmp/empty-cache && \
    npm run postinstall && \
    npm run env && \
    rm -rf /tmp/*

USER node

EXPOSE 1337

CMD ["node", "server.js"]
