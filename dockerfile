FROM node:18-alpine AS dev
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY --from=dev /usr/src/app ./
COPY server.js .

USER node
EXPOSE 8080
CMD ["npm", "start"]