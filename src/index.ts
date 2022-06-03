import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema, Resolver, Query } from "type-graphql";
//import { FirstResolver } from "./resolvers/helloWorld";


@Resolver()
class HelloResolver {

  @Query(()=> String)
  async hello() {
    return "Hi testing...";
  }
}

const main = async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver]
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
