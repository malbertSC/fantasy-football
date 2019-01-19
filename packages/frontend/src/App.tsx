import { Component } from "react";
import "./App.css";
// import { Signin } from "./components/signin";
import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { FlipGameList } from "./components/flip_games/flip_game_list";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Matchups } from "./components/flip_matchups/matchups";
import { setContext } from "apollo-link-context";
import { Signin } from "./components/signin";
import { CurrentUser } from "./types";
import { UserState, UserProvider } from "./state/UserContext";

export const client = new ApolloClient({
    uri: "http://localhost:4000",
    request: async operation => {
        const token = await localStorage.getItem("token");
        operation.setContext({
            headers: {
                authorization: token ? `Basic ${token}` : ""
            }
        });
    }
});

interface State extends UserState {}

class App extends Component {
    public readonly state: State = {
        user: undefined,
        setUser: (user: CurrentUser) => {
            this.setState({...this.state, ...{user}});
        }
    };
    render() {
        return (
            <UserProvider value={this.state}>
                <ApolloProvider client={client}>
                    <div className="App">
                        <div>logged in user: {(this.state.user !== undefined) ? this.state.user.username : ""}</div>
                        <header className="App-header">
                            <Router>
                                <div>
                                    <nav>
                                        <ul>
                                            <li>
                                                <Link to="/">Home</Link>
                                            </li>
                                        </ul>
                                    </nav>

                                    <Route path="/" exact component={Signin} />
                                    <Route path="/game/:gameId" component={Matchups} />
                                </div>
                            </Router>
                        </header>
                    </div>
                </ApolloProvider>
            </UserProvider>
        );
    }
}

export default App;
