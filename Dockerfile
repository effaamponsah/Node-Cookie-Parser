FROM node:6.11.5

# Create app directory
WORKDIR /usr/src/app

COPY package.json .

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "node", "index.js" ]