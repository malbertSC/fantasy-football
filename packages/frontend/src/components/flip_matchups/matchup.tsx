import React from "react";
import { GetMatchups_matchups } from "../__generated__/GetMatchups";
import { Lineup, MatchupPlayer } from "./matchups";
interface Props {
    matchup: GetMatchups_matchups;
    lineup: Lineup;
    addPlayerToLineup: (position: string, player: MatchupPlayer) => void;
}
export const Matchup: React.SFC<Props> = (props) => {
    const homePlayer = props.matchup.homePlayer;
    const awayPlayer = props.matchup.awayPlayer;
    const advantage = homePlayer.projectedScore - awayPlayer.projectedScore;
    const displayAdvantage = `(- ${Math.abs(advantage).toFixed(1)})`;
    const advantagedPlayer: "home"|"away" = advantage > 0 ? "home" : "away";
    const currentLineupPick = props.lineup.find((lineupItem) => {
        return lineupItem.position === props.matchup.position;
    })
    if (currentLineupPick) {
        return <div>
            <div>{props.matchup.position}</div>
            <div>Pick: {currentLineupPick.player.display_name}</div>
        </div>
    }
    return (
        <div>
            <div>{props.matchup.position}</div>
            <span>
                <span>{awayPlayer.nflPlayer.display_name}</span>
                <span> {advantagedPlayer === "away" && displayAdvantage}</span>
                <button onClick={(e) => {
                    e.preventDefault();
                    props.addPlayerToLineup(props.matchup.position, awayPlayer.nflPlayer)
                }}>Pick</button>
                <span> vs. </span>
                <span>{homePlayer.nflPlayer.display_name}</span>
                <span> {advantagedPlayer === "home" && displayAdvantage}</span>
                <button onClick={(e) => {
                    e.preventDefault();
                    props.addPlayerToLineup(props.matchup.position, homePlayer.nflPlayer)
                }}>Pick</button>
            </span>
        </div>
    )
}
