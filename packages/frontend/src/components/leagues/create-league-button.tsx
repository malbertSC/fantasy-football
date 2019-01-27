import React from "react";
import { CreateLeague } from "./create-league";

interface Props {
    onCreate: () => void;
    onClick?: () => void;
    onCancel?: () => void;
}
interface State {
    createEnabled: boolean;
}
export class CreateLeagueButton extends React.Component<Props, State> {
    public state: State = {
        createEnabled: false
    }
    public render() {
        return (
            <div>
                <button onClick={(e) => {
                    e.preventDefault();
                    this.setState({createEnabled: true});
                    this.props.onClick && this.props.onClick();
                }}>Create League</button>
                {this.state.createEnabled ? <CreateLeague onCreate={() => {
                    this.setState({createEnabled: false});
                    this.props.onCreate()
                }} onCancel={() => {
                    this.setState({createEnabled: false});
                    this.props.onCancel && this.props.onCancel()
                }}></CreateLeague> : ""}
            </div>
        );
    }
}
