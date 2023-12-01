FROM node:lts-bookworm

RUN npm i -g serve

RUN mkdir /usr/app

COPY . /usr/app/

WORKDIR /usr/app/to-do

RUN npm ci

RUN npx playwright install-deps

RUN npx playwright install chrome

RUN npx playwright install msedge

RUN npx playwright install firefox

RUN npx playwright install webkit

RUN npx playwright install chromium

RUN npm run test:unit

RUN npm run test:e2e

RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "dist"]



