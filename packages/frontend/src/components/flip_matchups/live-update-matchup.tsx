import React from "react";
import { Query } from "react-apollo";
import { GetMatchups, GetMatchupsVariables, GetMatchups_matchups } from "../__generated__/GetMatchups";
import { GetMatchups as QUERY} from "../queries";
import { Lineup_lineup_players } from "../__generated__/Lineup";

interface Props {
    gameID: number;
    lineupPlayers: Lineup_lineup_players[];
}

const getPickUI = (matchup: GetMatchups_matchups, lineupPlayers: Lineup_lineup_players[]) => {
    // TODO fix this shitty code
    const pickedAwayPlayer = lineupPlayers.find((lineupPlayer) => lineupPlayer.nfl_player.id === matchup.awayPlayer.nflPlayer.id);
    const pickedTeam = pickedAwayPlayer ? "away" : "home";
    const homePlayer = matchup.homePlayer;
    const awayPlayer = matchup.awayPlayer;
    const homePlayerProjected = homePlayer.projectedScore ? homePlayer.projectedScore : 0;
    const awayPlayerProjected = awayPlayer.projectedScore ? awayPlayer.projectedScore : 0;
    const homePlayerActual = homePlayer.actualScore ? homePlayer.actualScore : 0;
    const awayPlayerActual = awayPlayer.actualScore ? awayPlayer.actualScore : 0;
    const advantage =  homePlayerProjected - awayPlayerProjected;
    const actualScoreDiff = homePlayerActual - awayPlayerActual;
    const actualAgainstSpread = actualScoreDiff - advantage;
    const isWinning = actualAgainstSpread > 0 ? pickedTeam === "home" : pickedTeam === "away";
    const displayAdvantage = ` (- ${Math.abs(advantage).toFixed(1)})`;
    const advantagedPlayer: "home"|"away" = advantage > 0 ? "home" : "away";
    return <div>
        <div className={"away-player " + (pickedTeam === "away" ? "picked-player" : "")}>
            {awayPlayer.nflPlayer.display_name}{advantagedPlayer === "away" && displayAdvantage} (live: {awayPlayer.actualScore})
        </div>
        <div className={"home-away-divider"}>vs.</div>
        <div className={"home-player " + (pickedTeam === "home" ? "picked-player" : "")}>
            {homePlayer.nflPlayer.display_name}{advantagedPlayer === "home" && displayAdvantage} (live: {homePlayer.actualScore})
        </div>
        <div>{isWinning && "WINNING"}</div>
    </div>
}
class GetMatchupsQuery extends Query<GetMatchups, GetMatchupsVariables> {};
export const LiveUpdateMatchup: React.SFC<Props> = (props) => {
    return (
        <GetMatchupsQuery query={QUERY} variables={{id: props.gameID}} pollInterval={30000}>{({data, loading, error}) => {
            if (loading) {
                return(<div>Loading</div>)
            }
            if (!data || error) return <div>Error</div>
            // https://github.com/prisma/prisma/issues/2999
            const matchups = data.matchups as GetMatchups_matchups[];
            return (<div>{matchups.map((matchup) => {
                return getPickUI(matchup, props.lineupPlayers);
            })}</div>)
        }}</GetMatchupsQuery>
    )
}
