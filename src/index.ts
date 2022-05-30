import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { FirstResolver } from "./resolvers/helloWorld";

(async() => {
    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [FirstResolver]
    }),
    context: ({ req,res }) => ({ req, res })
});
apolloServer.applyMiddleware({ app, cors:false });

app.listen(4000, () => {
    console.log("Express server started at : 4000");
});
});