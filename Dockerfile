FROM node:16

WORKDIR /src

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 4001

RUN ls

CMD [ "npm", "run", "start" ]