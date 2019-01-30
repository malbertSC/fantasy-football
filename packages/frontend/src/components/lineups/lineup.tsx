import React from "react";
import { Lineup as LineupFragment } from "../__generated__/Lineup";

interface Props {
    lineup: LineupFragment
}
export const Lineup: React.SFC<Props> = (props) => {
    return (
        <div>
            {props.lineup.lineup_players && props.lineup.lineup_players.map((player) => {
                return <div key={player.id}>{player.nfl_player.display_name}</div>
            })}
        </div>
    )
}
