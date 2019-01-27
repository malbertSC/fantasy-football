import React from "react";
import { NFLWeekProvider, NFLWeekState } from "./nfl-week-context";
import { GetWeekGames, GetWeekGamesVariables } from "./__generated__/GetWeekGames";
import { GetWeekGames as QUERY } from "./queries";
import { GetWeekGames_nflGames } from "../components/__generated__/GetWeekGames";
import { client } from "../App";

const HARDCODED_NFL_WEEK = 17;

export class NFLWeekLoader extends React.Component<{}, NFLWeekState> {
    public readonly state: NFLWeekState = {
        isLoading: true,
        nflGames: undefined
    }
    public async componentDidMount() {
        const queryResults = await client.query<GetWeekGames, GetWeekGamesVariables>({
            query: QUERY,
            variables: {
                week: HARDCODED_NFL_WEEK
            }
        });
        const {nflGames} = queryResults.data;
        this.setState({
            nflGames: nflGames as Array<GetWeekGames_nflGames>,
            isLoading: false
        })
    }
    public render() {
        return (
            <NFLWeekProvider value={this.state}>
                {this.props.children}
            </NFLWeekProvider>
        )
    }
}
