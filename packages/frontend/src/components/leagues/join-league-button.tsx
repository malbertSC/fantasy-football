import React from "react";
import { JoinLeague } from "./join-league";

interface Props {
    onJoin: () => void;
    onClick: () => void;
    onCancel: () => void;
    leagues: Array<{
        id: number;
        name: string;
    }>
}
interface State {
    joinEnabled: boolean;
}
export class JoinLeagueButton extends React.Component<Props, State> {
    public state: State = {
        joinEnabled: false
    }
    public render() {
        return (
            <div>
                <button onClick={(e) => {
                    e.preventDefault();
                    this.setState({joinEnabled: true});
                    this.props.onClick();
                }}>Join a League</button>
                {this.state.joinEnabled &&
                    <div>
                        <JoinLeague onJoin={() => {
                            this.setState({joinEnabled: false});
                            this.props.onJoin()
                        }}></JoinLeague>
                        <button onClick={(e) => {
                            e.preventDefault();
                            this.setState({joinEnabled: false});
                            this.props.onCancel();
                        }}>Cancel</button>
                    </div>
                }
            </div>
        );
    }
}
