FROM node:15

WORKDIR /usr/src/app

COPY . .

RUN rm -rf node_modules && rm -f package-lock.json && npm cache clean --force

RUN npm install --quiet

EXPOSE 3000

CMD [ "node", "index.js" ]