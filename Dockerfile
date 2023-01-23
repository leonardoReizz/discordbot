
FROM node:16.16.0-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 53011


CMD npm install nodemon
CMD npm run dev