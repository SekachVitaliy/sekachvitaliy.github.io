FROM node:16-alpine
COPY package-lock.json .
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
VOLUME ./src:/app/src
CMD [ "npm", "start", "3000" ]