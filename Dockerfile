FROM node:16.16.0-alpine

LABEL maintainer="Nightscout Contributors"

WORKDIR /opt/app
ADD . /opt/app

RUN npm install --cache /tmp/empty-cache && \
    npm run postinstall && \
    npm run env && \
    rm -rf /tmp/*

USER node

# Render сам подставит порт через переменную окружения $PORT
# EXPOSE можно оставить, но Render его игнорирует
EXPOSE 10000

CMD ["sh", "-c", "node server.js --port $PORT"]
