const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");

const server = express();

server.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log("Server running on", port);
});
