import { Query } from "react-apollo";
import { GetFlipGameMatchup, GetFlipGameMatchup_flipGamePlayers, GetFlipGameMatchupVariables } from "../__generated__/GetFlipGameMatchup";
import { GetFlipGameMatchup as QUERY } from "../queries";
import React, { Component } from "react";
import { getMatchups } from "./matchups";
import { GetWeekGames_nflGames } from "../__generated__/GetWeekGames";
import { Router } from "react-router";

class GetFlipGameMatchupQuery extends Query<GetFlipGameMatchup, GetFlipGameMatchupVariables> {}

interface MatchParams {
    id: ;
}

interface FlipGameProps {
    game: GetWeekGames_nflGames;
    match: Router.
}

export class FlipGame extends Component<FlipGameProps> {
    public render() {
        return (
            <GetFlipGameMatchupQuery query={QUERY} variables={{id: this.props.game.id}}>
                {({ loading, data, error }) => {
                    if (loading) return <div>Loading</div>;
                    if (error) return <h1>ERROR</h1>;
                    if (!data) return <div>no data</div>;
                    console.log(data);
                    const { flipGamePlayers } = data;
                    // https://github.com/prisma/prisma/issues/2999
                    const matchups = getMatchups(this.props.game, (flipGamePlayers as GetFlipGameMatchup_flipGamePlayers[]));
                    return (
                        <ul>
                            {matchups.map((matchup, i) => {
                                return (
                                    <div key={i}>
                                        Position {matchup.position}
                                        Away {matchup.away}
                                        Home {matchup.home}
                                    </div>
                                )
                            })}
                        </ul>
                    );
                }}
            </GetFlipGameMatchupQuery>
        );
    }
}
