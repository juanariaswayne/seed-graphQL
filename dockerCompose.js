const fs = require('fs');
const path = require('path');
const config = require('config');
const service = config.get('service');
const environment = config.get('environment');
const database = config.get('database');
const composeYml = `
version: '3'
services:
  ${service.name}:
    container_name: "${service.name}_${environment.name}"
    build: .
    ports:
    - "${service.port}:80"
    environment:
      NODE_CONFIG_STRICT_MODE: "false"
      NODE_ENV: develop
      DB_HOST: mongo
      DB_PORT: 27017
      DB_NAME: "${database.database}"
      DB_USER: "${database.username}"
      DB_PASSWORD: "${database.password}"
    depends_on:
    - mongo
    links:
    - mongo:mongo
    command: ["npm", "run", "start:docker"]

  mongo:
    container_name: mongo
    image: mongo:4.2
    environment:
      MONGO_INITDB_ROOT_USERNAME: "${database.username}"
      MONGO_INITDB_ROOT_PASSWORD: "${database.password}"
      MONGO_INITDB_DATABASE: "${database.database}"
    ports:
    - "${database.port}:27017"
#    volumes:
#      - ~/docker/nodejs-seed-nosql/db_data/mongodb:/var/lib/mongodb
`;
fs.writeFileSync(path.join(__dirname, 'docker-compose.yml'), composeYml, { encoding: 'utf8', flag: 'w' });
