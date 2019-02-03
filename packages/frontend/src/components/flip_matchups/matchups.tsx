import { Query } from "react-apollo";
import { GetMatchups as QUERY } from "../queries";
import React, { Component } from "react";
import { GetMatchups, GetMatchupsVariables, GetMatchups_matchups } from "../__generated__/GetMatchups";
import { PickMatchup } from "./pick-matchup";

class GetMatchupsQuery extends Query<GetMatchups, GetMatchupsVariables> {}

interface Props {
    gameId: number;
    onSubmitLineup: (name: string, playerIDs: number[]) => void;
}

export interface MatchupPlayer {
    id: number;
    display_name: string;
}
export type Lineup = Array<{
    position: string;
    player: MatchupPlayer
}>;

interface State {
    lineup: Lineup,
    name: string;
}

export class Matchups extends Component<Props, State> {
    public readonly state: State = {
        lineup: [],
        name: ""
    }
    public resetLineup = () => {
        this.setState({lineup: []});
    }
    public addPlayerToLineup = (position: string, player: MatchupPlayer) => {
        this.setState({lineup: [...this.state.lineup, {
            position,
            player
        }]})
    }
    public render() {
        return (
            <GetMatchupsQuery query={QUERY} variables={{id: this.props.gameId}}>
                {({ loading, data, error }) => {
                    if (loading) return <div>Loading</div>;
                    if (error) return <h1>ERROR</h1>;
                    if (!data) return <div>no data</div>;
                    console.log(data);
                    const { matchups } = data;
                    return (
                        <div>
                            <ul>
                                {matchups.map((matchup, i) => {
                                    // https://github.com/prisma/prisma/issues/2999
                                    return <PickMatchup
                                        key={i}
                                        matchup={matchup as GetMatchups_matchups}
                                        lineup={this.state.lineup}
                                        addPlayerToLineup={this.addPlayerToLineup}
                                    ></PickMatchup>
                                })}
                            </ul>
                            <button onClick={(e) => {
                                e.preventDefault();
                                this.props.onSubmitLineup(this.state.name, this.state.lineup.map((lineupItem) => lineupItem.player.id));
                            }}>Submit</button>
                            <button onClick={(e) => {
                                e.preventDefault();
                                this.resetLineup();
                            }}>Reset</button>
                        </div>
                    );
                }}
            </GetMatchupsQuery>
        );
    }
}
