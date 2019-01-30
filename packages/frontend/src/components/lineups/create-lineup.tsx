import React from "react";
import { GetWeekGames_nflGames } from "../../state/__generated__/GetWeekGames";
import { PickGame } from "./pick-game";
import { Matchups } from "../flip_matchups/matchups";
interface State {
    nflGame: GetWeekGames_nflGames | undefined
}
export class CreateLineup extends React.Component<{}, State> {
    public readonly state: State = {
        nflGame: undefined
    }
    public render() {
        if (!this.state.nflGame) {
            return <PickGame onPick={(nflGame) => {this.setState({nflGame})}}></PickGame>
        }
        return (
            <div>
                <div>{this.state.nflGame.away_team.full_name} vs. {this.state.nflGame.home_team.full_name}</div>
                <Matchups gameId={this.state.nflGame.id}></Matchups>
            </div>
        );
    }
}
