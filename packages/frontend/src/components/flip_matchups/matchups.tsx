import { Query } from "react-apollo";
import { GetMatchups as QUERY } from "../queries";
import React, { Component } from "react";
import { GetMatchups, GetMatchupsVariables, GetMatchups_matchups } from "../__generated__/GetMatchups";
import { Matchup } from "./matchup";
import { client } from "../../App";
import gql from "graphql-tag";
import { Redirect } from "react-router";

class GetMatchupsQuery extends Query<GetMatchups, GetMatchupsVariables> {}

interface Props {
    gameId: number;
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
    submitted: boolean;
}

export class Matchups extends Component<Props, State> {
    public readonly state: State = {
        lineup: [],
        name: "",
        submitted: false
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
    public submitLineup = async () => {
        const mutationQuery = gql`
            mutation CreateLineup($name: String!, $nflGameID: Int!, $playerIDs: [Int!]!) {
                createLineup(data: {
                    name: $name,
                    nflGameID: $nflGameID,
                    playerIDs: $playerIDs
                }) {
                    id,
                    name
                }
            }
        `;
        const response = await client.mutate({
            mutation: mutationQuery,
            variables: {
                name: this.state.name,
                nflGameID: this.props.gameId,
                playerIDs: this.state.lineup.map((lineupItem) => lineupItem.player.id)
            }
        });
        this.setState({submitted: true});
    }
    public render() {
        if (this.state.submitted) return (<Redirect to="/dashboard"></Redirect>)
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
                                    return <Matchup
                                        key={i}
                                        matchup={matchup as GetMatchups_matchups}
                                        lineup={this.state.lineup}
                                        addPlayerToLineup={this.addPlayerToLineup}
                                    ></Matchup>
                                })}
                            </ul>
                            <button onClick={(e) => {
                                e.preventDefault();
                                this.submitLineup();
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
