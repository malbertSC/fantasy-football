import { Component } from "react";
import "./App.css";
// import { Signin } from "./components/signin";
import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CurrentUser } from "./types";
import { UserState, UserProvider } from "./state/UserContext";
import { SigninOrSignup } from "./components/login-flow/signin-or-signup";
import { LoggedInUser } from "./components/logged-in-user";
import { LocalStorageKeys } from "./state/keys";
import { Dashboard } from "./components/dashboard";
import { NFLWeekLoader } from "./state/nfl-week-loader";
import { CreateLineup } from "./components/lineups/create-lineup";
import { League } from "./components/leagues/league";

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
                    <NFLWeekLoader>
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
                                        <Route path="/dashboard" component={Dashboard} />
                                        <Route path="/create-lineup" component={CreateLineup} />
                                        <Route path="/league/:leagueID" component={League} />
                                    </div>
                                </Router>
                            </header>
                        </div>
                    </NFLWeekLoader>
                </ApolloProvider>
            </UserProvider>
        );
    }
}

export default App;
