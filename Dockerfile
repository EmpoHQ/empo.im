FROM node:16-slim

WORKDIR /usr/src/www

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

ENV HOST=0.0.0.0