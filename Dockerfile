FROM node:20-alpine

RUN npm i -g serve

RUN mkdir /usr/app

COPY . /usr/app/

WORKDIR /usr/app/to-do

RUN npm ci

RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "dist"]



