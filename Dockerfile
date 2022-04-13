FROM node:16

WORKDIR /src

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 4001

CMD [ "npm", "run", "start" ]