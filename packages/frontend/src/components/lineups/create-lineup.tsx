import React from "react";
import { GetWeekGames_nflGames } from "../../state/__generated__/GetWeekGames";
import { PickGame } from "./pick-game";
import { Matchups } from "../flip_matchups/matchups";
import { Redirect, RouteComponentProps } from "react-router";
import gql from "graphql-tag";
import { client } from "../../App";
interface State {
    nflGame: GetWeekGames_nflGames | undefined;
    leagueID: number | undefined;
    submitted: boolean;
}
interface RouteProps {
    leagueID: string;
}
export class CreateLineup extends React.Component<RouteComponentProps<RouteProps>, State> {
    public submitLineup = async (name: string, playerIDs: number[]) => {
        const mutationQuery = gql`
            mutation CreateLineup($name: String!, $nflGameID: Int!, $playerIDs: [Int!]!, $leagueID: Int) {
                createLineup(data: {
                    name: $name,
                    nflGameID: $nflGameID,
                    playerIDs: $playerIDs,
                    leagueID: $leagueID
                }) {
                    id,
                    name
                }
            }
        `;
        await client.mutate({
            mutation: mutationQuery,
            variables: {
                name,
                nflGameID: this.state.nflGame && this.state.nflGame.id,
                playerIDs,
                leagueID: this.state.leagueID
            }
        });
        this.setState({submitted: true});
    }
    public componentDidMount() {
        this.setState({leagueID: parseInt(this.props.match.params.leagueID, 10)});
    }
    public readonly state: State = {
        nflGame: undefined,
        leagueID: undefined,
        submitted: false
    }
    public render() {
        if (this.state.submitted) {
            if (this.state.leagueID) {
                return <Redirect to={`/league/${this.state.leagueID}`}></Redirect>
            }
            else return <Redirect to="/dashboard"></Redirect>
        }
        if (!this.state.nflGame) {
            return <PickGame onPick={(nflGame) => {this.setState({nflGame})}}></PickGame>
        }
        return (
            <div>
                <div>{this.state.nflGame.away_team.full_name} vs. {this.state.nflGame.home_team.full_name}</div>
                <Matchups gameId={this.state.nflGame.id} onSubmitLineup={this.submitLineup}></Matchups>
            </div>
        );
    }
}
