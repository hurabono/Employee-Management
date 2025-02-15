// index.js
require('dotenv').config(); // .env file for mongodb 
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');

// internal modules
const connectDB = require('./config/db');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

async function startServer() {
  const app = express();
  app.use(cors());

  // MongoDB connection
  await connectDB(process.env.MONGO_URI);

  // ApolloServer Instance 
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Server start and middleware connection
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

// Server listen localhost port 4000
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
