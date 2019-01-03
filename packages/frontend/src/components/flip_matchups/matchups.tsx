import { Query } from "react-apollo";
import { GetMatchups as QUERY } from "../queries";
import React, { Component } from "react";
import { Router, RouteComponentProps } from "react-router";
import { GetMatchups, GetMatchupsVariables } from "../__generated__/GetMatchups";

class GetMatchupsQuery extends Query<GetMatchups, GetMatchupsVariables> {}

interface MatchupsParams {
    gameId: string;
}

interface MatchupProps extends RouteComponentProps<MatchupsParams> {}

export class Matchups extends Component<MatchupProps> {
    public render() {
        console.log("in matchups", )
        const gameIdInt = Number.parseInt(this.props.match.params.gameId, 10);
        console.log(gameIdInt)
        return (
            <GetMatchupsQuery query={QUERY} variables={{id: gameIdInt}}>
                {({ loading, data, error }) => {
                    if (loading) return <div>Loading</div>;
                    if (error) return <h1>ERROR</h1>;
                    if (!data) return <div>no data</div>;
                    console.log(data);
                    const { matchups } = data;
                    // https://github.com/prisma/prisma/issues/2999
                    return (
                        <ul>
                            {matchups.map((matchup, i) => {
                                if (!matchup) return;
                                return (
                                    <div key={i}>
                                        Position {matchup.position}
                                        Away {matchup.awayPlayer.display_name}
                                        Home {matchup.homePlayer.display_name}
                                    </div>
                                )
                            })}
                        </ul>
                    );
                }}
            </GetMatchupsQuery>
        );
    }
}
