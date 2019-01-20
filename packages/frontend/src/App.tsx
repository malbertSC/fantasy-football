import { Component } from "react";
import "./App.css";
// import { Signin } from "./components/signin";
import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Matchups } from "./components/flip_matchups/matchups";
import { CurrentUser } from "./types";
import { UserState, UserProvider } from "./state/UserContext";
import { SigninOrSignup } from "./components/login-flow/signin-or-signup";
import { MyLeagues } from "./components/my-leagues";
import { LoggedInUser } from "./components/logged-in-user";

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
        isLoading: true,
        user: undefined,
        setUser: (user: CurrentUser) => {
            localStorage.setItem("user", JSON.stringify(user));
            this.setState({...this.state, ...{user}});
        }
    };
    componentDidMount() {
        const rawUser = localStorage.getItem("user");
        if (rawUser) {
            const user: CurrentUser = JSON.parse(rawUser);
            this.setState({user});
        };
        this.setState({isLoading: false})
    }
    render() {
        return (
            <UserProvider value={this.state}>
                <ApolloProvider client={client}>
                    <div className="App">
                        <div>logged in user: {(this.state.user !== undefined) ? this.state.user.username : ""}</div>
                        <LoggedInUser></LoggedInUser>
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

                                    <Route path="/" exact component={SigninOrSignup} />
                                    <Route path="/game/:gameId" component={Matchups} />
                                    <Route path="/test" component={MyLeagues} />
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
