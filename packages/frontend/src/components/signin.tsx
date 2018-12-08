import React, { Component } from "react";

export class Signin extends Component {
    state = {
        name: "",
        password: "",
        email: "",
    };
    public render() {
        return (
            <form
                method="post"
                onSubmit={async e => {
                    e.preventDefault();
                    // await signup();
                    this.setState({ name: "", email: "", password: "" });
                }}
            >
                <fieldset disabled={false} aria-busy={false}>
                    <h2>Sign into your account</h2>
                    {/* <Error error={error} /> */}
                    <label htmlFor="email">
                        Email
                <input
                            type="email"
                            name="email"
                            placeholder="email"
                            value={this.state.email}
                            // onChange={console.log("changed")}
                        />
                    </label>
                    <label htmlFor="password">
                        Password
                <input
                            type="password"
                            name="password"
                            placeholder="password"
                            value={this.state.password}
                            // onChange={this.saveToState}
                        />
                    </label>

                    <button type="submit">Sign In!</button>
                </fieldset>
            </form>
        )
    }
}
