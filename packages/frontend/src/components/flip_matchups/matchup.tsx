import React from "react";
import { GetMatchups_matchups } from "../__generated__/GetMatchups";
import { Lineup, MatchupPlayer } from "./matchups";
interface Props {
    matchup: GetMatchups_matchups;
    lineup: Lineup;
    addPlayerToLineup: (position: string, player: MatchupPlayer) => void;
}
export const Matchup: React.SFC<Props> = (props) => {
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
                <span>{props.matchup.awayPlayer.nflPlayer.display_name}</span>
                <span> ({props.matchup.awayPlayer.projectedScore})</span>
                <button onClick={(e) => {
                    e.preventDefault();
                    props.addPlayerToLineup(props.matchup.position, props.matchup.awayPlayer.nflPlayer)
                }}>Pick</button>
                <span> vs. </span>
                <span>{props.matchup.homePlayer.nflPlayer.display_name}</span>
                <span> ({props.matchup.homePlayer.projectedScore})</span>
                <button onClick={(e) => {
                    e.preventDefault();
                    props.addPlayerToLineup(props.matchup.position, props.matchup.homePlayer.nflPlayer)
                }}>Pick</button>
            </span>
        </div>
    )
}
