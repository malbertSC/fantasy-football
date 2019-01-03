import { Query } from "react-apollo";
import { GetWeekGames as QUERY } from "../queries";
import { GetWeekGames, GetWeekGames_nflGames, GetWeekGamesVariables } from "../__generated__/GetWeekGames";
import React, { Component } from "react";
import { FlipGameListItem } from "./flip_game_list_item";

class GetWeekGamesQuery extends Query<GetWeekGames, GetWeekGamesVariables> {};

export class FlipGameList extends Component {
    public render() {
        return (
            <GetWeekGamesQuery query={QUERY} variables={{week: 15}}>
                {({ loading, data, error }) => {
                    if (loading) return <div>Loading</div>;
                    if (error) return <h1>ERROR</h1>;
                    if (!data) return <div>no data</div>;
                    console.log(data);
                    const { nflGames } = data;
                    return (
                        <ul>
                            {/* https://github.com/prisma/prisma/issues/2999 */}
                            {nflGames.map((nflGame, i) => {
                                return (
                                    <div key={i}>
                                        {FlipGameListItem({nflGame: (nflGame as GetWeekGames_nflGames)})}
                                    </div>
                                )
                            })}
                        </ul>
                    );
                }}
            </GetWeekGamesQuery>
        )
    }
}
