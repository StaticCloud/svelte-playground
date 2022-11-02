const express = require('express');
const axios = require('axios');
const app = express();

const { ApolloServer } = require('apollo-server-express');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { typeDefs, resolvers } = require('./schemas')

const startServer = async () => {
    const server = new ApolloServer({ typeDefs, resolvers });
  
    await server.start();
  
    server.applyMiddleware({ app });
  
    console.log(`Use GraphQL at http://localhost:3001${server.graphqlPath}`);
}

startServer();

app.listen(3001, () => console.log('listening on port 3001'));