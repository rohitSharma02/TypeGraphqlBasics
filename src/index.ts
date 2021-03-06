import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { DataSource } from "typeorm";
import { RegisterResolver } from "./modules/Register";
//import { FirstResolver } from "./resolvers/helloWorld";

const main = async () => {
  const AppDataSource = new DataSource({
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "typegraphql-example",
    synchronize: true,
    logging: true,
    entities: ["src/entity/*.*"],
  });
  AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });

  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [RegisterResolver]
    }),
    context: ({ req, res }) => ({ req, res }),
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: true });

  app.listen(3000, () => {
    console.log("Express server started at : http://localhost:3000/");
  });
};

main();
