import React, { Component, ChangeEvent } from "react";
import { Redirect } from "react-router-dom";
import { GetCurrentUser as QUERY } from "../queries";
import { GetCurrentUser_currentUser } from "../__generated__/GetCurrentUser";
import { CurrentUser } from "../../types";
import { UserConsumer } from "../../state/UserContext";
import { client } from "../../App";
import { LocalStorageKeys } from "../../state/keys";

interface State {
    password: string;
    username: string;
    signinError: boolean;
    navToDashboard: boolean;
}
export class Signin extends Component<{}, State> {
    public readonly state: State = {
        password: "",
        username: "",
        signinError: false,
        navToDashboard: false
    };

    private handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const change: any = {};
        change[event.target.name] = event.target.value
        this.setState(change)
    }

    private handleSigninAttempt = async (setUser: (user: CurrentUser) => void) => {
        {
            localStorage.setItem(LocalStorageKeys.token, btoa(`${this.state.username}:${this.state.password}`))
            try {
                const { data } = await client.query<{ currentUser: GetCurrentUser_currentUser }>({
                    query: QUERY
                });
                const signinUser = data.currentUser;
                if (signinUser !== undefined && signinUser.id) {
                    setUser(signinUser);
                    this.setState({ ...this.state, ...{ navToDashboard: true } });
                }
            } catch (err) {
                localStorage.removeItem(LocalStorageKeys.token);
                localStorage.removeItem(LocalStorageKeys.token);
                this.setState({ ...this.state, ...{ signinError: true } });
            }
        }
    }

    public render() {
        if (this.state.navToDashboard) return <Redirect to="/dashboard" />
        return (
            <UserConsumer>
                {({ signin }) => (
                    <form
                        method="post"
                        onSubmit={async e => {
                            e.preventDefault();
                            this.handleSigninAttempt(signin)
                        }
                        }
                    >
                        <fieldset disabled={false} aria-busy={false}>
                            <h2>Sign into your account</h2>
                            {/* <Error error={error} /> */}
                            <label htmlFor="username">
                                Username
                                <input
                                    type="username"
                                    name="username"
                                    placeholder="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                            </label>
                            <label htmlFor="password">
                                Password
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </label>

                            <button type="submit">Sign In!</button>
                        </fieldset>
                        {this.state.signinError && <p>Error :( Please try again</p>}
                    </form>
                )
                }
            </UserConsumer>
        )
    }
}
