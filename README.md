# TypeGraphqlBasics
Learning Source: https://www.youtube.com/watch?v=bqdEXPzjzQ4&list=PLN3n1USn4xlma1bBu3Tloe4NyYn9Ko8Gs&index=3
## Project setup from scratch steps:
1. npm init -> this will setup package.json file
2. npm install apollo-server-express express graphql reflect-metadata type-graphql --> this will install node_modules which will contain all the modules mentioned in the command.
3. npm install -D @types/express @types/graphql @types/node ts-node-dev typescript --> Installing node dependencies
4. npm add pg typeorm bcrypt js --> for installing database
5. npm install -D @types/bcrypt.js

### Setup PostGreSQL
1. Install Postgresql
 > brew install postgresql
2. This will run postgre when pc restarts
> pg_ctl -D /usr/local/var/postgres start && brew services start postgresql -> 
3. postgres -V --> for checking the version
4. psql postgres -> will start postgre command line
5. postgres=# \du -> to see which user installed
6. >CREATE ROLE testing WITH LOGIN PASSWORD 'testing' [OPTIONS]
- CREATE USER postgres WITH PASSWORD 'postgres';
7. > Create User:Source:https://www.codementor.io/@engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb  
### Creating User
1.createuser postgres
2.createuser postgres --createdb
3.CREATE DATABASE typegraphql-example;
4. postgres=> CREATE DATABASE typegraphql-example;

### Create Role
> CREATE ROLE postgres


## MarkDown Basics
link: https://www.markdownguide.org/basic-syntax/

## Tips and tricks

1. two  ** in entity means all the files in entity folder.




