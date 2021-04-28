# seed GraphQL proyect

This repository is created as a seed to create a microservice with graphQL and NoSQL DBMS.


Instructions to run with docker-compose.

First, run
 
`npm run build`

#Build two Docker images with a dynamic docker-compose file from our own javascript file. 


Create a file and named it local.yml into config folder with the content shown below

`
service:
  project: 'nodejs-seed-nosql'
  name: 'node-graphql-mongo'
  port: 2221
environment:
  name: 'docker-local'
  production: false
  node_env:
database:
  type: 'mongodb'
  host: 127.0.0.1
  port: 27017
  database: exampledb
  username: root
  password: 123456789
  synchronize: true
sonarqube:
  host: 127.0.0.1
  port: 9000
  version:
`

then, run the following script 
               
`npm run docker-compose:up`


This command will create two images and two containers in your Docker system.

A container with an app and another one with a MongoDB server

As you can see above, you just need to add a file with variables

In order to check whether the service is running correctly, you just need to run
`curl http://127.0.0.1:[service:port]/health` and the response should be `HTTP 200` `I'm alive!`
 
 
In order to check graphql app with its playground (only not productive environments)
Enter to http://127.0.0.1:[service:port]/graphql
 
Finally, you can run `npm run start:local` in order to spin up your app into your host system but connecting it to the same MongoDB sever without change anything
