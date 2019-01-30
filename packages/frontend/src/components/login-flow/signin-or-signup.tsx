import React from "react";
import { Signin } from "./signin";
import { Signup } from "./signup";
import { LocalStorageKeys } from "../../state/keys";
import { Redirect } from "react-router";

interface State {
    showSignup: boolean;
}

export class SigninOrSignup extends React.Component<{}, State> {
    public readonly state = {
        showSignup: false
    }

    public render() {
        if (localStorage.getItem(LocalStorageKeys.user)) return <Redirect to="/dashboard"></Redirect>
        return (
            <div>
                <Signin></Signin>
                <div>
                    {
                        this.state.showSignup
                            ? <Signup></Signup>
                            : <button onClick={(e) => {
                                this.setState({...this.state, ...{showSignup: true}})}
                            }>Create Account</button>
                    }
                </div>
            </div>
        )
    }
}
