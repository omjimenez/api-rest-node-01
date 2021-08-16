FROM node:16

RUN mkdir -p /usr/src/api

WORKDIR /usr/src/api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm",  "run", "start"]
