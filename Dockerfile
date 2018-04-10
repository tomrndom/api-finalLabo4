FROM node:6.11
MAINTAINER tcastilloboireau@gmail.com

RUN mkdir -p /app
WORKDIR /app
RUN npm install -g nodemon
RUN npm install -g pm2

RUN npm config set registry https://registry.npmjs.org
COPY package.json /app/package.json
RUN npm install
RUN npm cache clean --force
RUN mv /app/node_modules /node_modules
COPY ./server /app/server
COPY ./common /app/common

# Expose
EXPOSE 3000
CMD ["pm2-docker","server/server.js","--log-date-format 'DD-MM HH:mm:ss.SSS'"]
