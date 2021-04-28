FROM node:12
WORKDIR /app

COPY tsconfig.json ./
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

COPY ./dist .

EXPOSE 80 443

RUN yarn global add pm2

CMD [ "pm2-runtime", "npm", "--", "start" ]