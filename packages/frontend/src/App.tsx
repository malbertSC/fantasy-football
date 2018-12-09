import { Component } from "react";
import "./App.css";
// import { Signin } from "./components/signin";
import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Teams } from "./components/teams";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <Teams></Teams>
          </header>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
