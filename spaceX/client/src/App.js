import React from "react";
import "./App.css";
import logo from "./logo.jpg";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Launches from "./components/Launches";
import "bootstrap/dist/css/bootstrap.min.css";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <img
          src={logo}
          style={{ width: "300px", display: "block", margin: "auto" }}
        ></img>
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
