FROM node:16.14.2

RUN mkdir -p /AeroBot
WORKDIR /AeroBot

COPY package.json /AeroBot
RUN npm install

COPY . /AeroBot

CMD ["node", "index.js"]