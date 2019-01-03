import { Component } from "react";
import "./App.css";
// import { Signin } from "./components/signin";
import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { FlipGameList } from "./components/flip_games/flip_game_list";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FlipGame } from "./components/flip_matchups/flip_game";

const client = new ApolloClient({
    uri: "http://localhost:4000"
});

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <div className="App">
                    <header className="App-header">
                        <FlipGameList></FlipGameList>
                        <Router>
                            <div>
                                <nav>
                                    <ul>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                    </ul>
                                </nav>

                                <Route path="/" exact component={FlipGameList} />
                                <Route path="/game/:id" component={FlipGame} />
                            </div>
                        </Router>
                    </header>
                </div>
            </ApolloProvider>
        );
    }
}

export default App;
