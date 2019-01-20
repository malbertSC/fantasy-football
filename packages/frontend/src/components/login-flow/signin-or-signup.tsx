import React from "react";
import { Signin } from "./signin";
import { Signup } from "./signup";

interface State {
    showSignup: boolean;
}

export class SigninOrSignup extends React.Component<{}, State> {
    public readonly state = {
        showSignup: false
    }

    public render() {
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
