import { Component, ChangeEvent } from "react";
import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

interface State {
    username: string;
    password: string;
    signupError: string;
}

const SIGNUP = gql`
    mutation Signup($username:String!, $password: String!) {
        signup(username: $username, password: $password) {
        id
    }
}`;

export class Signup extends Component<{}, State> {
    private handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const change: any = {};
        change[event.target.name] = event.target.value
        this.setState(change)
    }

    public readonly state: State = {
        password: "",
        username: "",
        signupError: ""
    };

    public render() {
        return (
            <div>
                <Mutation mutation={SIGNUP}>{(signup, { data, error }) => {
                    if (data && !error) {
                        console.log("have data");
                        return (<div>User created succesfully!  Please sign in!</div>)
                    }
                    if (error && this.state.signupError !== error.graphQLErrors[0].message) {
                        console.log(error);
                        this.setState({...this.state, ...{signupError: error.graphQLErrors[0].message}})
                    }
                    return (
                        <div>
                            <form
                                method="post"
                                onSubmit={async e => {
                                    e.preventDefault();
                                    signup({variables: {
                                        username: this.state.username,
                                        password: this.state.password
                                    }})
                                }
                                }
                            >
                                <fieldset disabled={false} aria-busy={false}>
                                    <h2>Create a new account</h2>
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

                                    <button type="submit">Create Account!</button>
                                </fieldset>
                            </form>
                            {this.state.signupError && <p>Error! {this.state.signupError}</p>}
                        </div>
                    )
                }}
                </Mutation>
            </div>
        )
    }
}
