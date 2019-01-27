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
import { LoggedInUser } from "./components/logged-in-user";
import { LocalStorageKeys } from "./state/keys";
import { Dashboard } from "./components/dashboard";
import { NFLWeekLoader } from "./state/nfl-week-loader";

export const client = new ApolloClient({
    uri: "http://localhost:4000",
    request: async operation => {
        const token = await localStorage.getItem(LocalStorageKeys.token);
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
        signin: (user: CurrentUser) => {
            localStorage.setItem(LocalStorageKeys.user, JSON.stringify(user));
            this.setState({user});
        },
        signout: () => {
            localStorage.removeItem(LocalStorageKeys.user);
            localStorage.removeItem(LocalStorageKeys.token);
            this.setState({user: undefined});
        }
    };
    componentDidMount() {
        const rawUser = localStorage.getItem(LocalStorageKeys.user);
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
                                    <Route path="/dashboard" component={Dashboard} />
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
