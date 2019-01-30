import React from "react";
import { GetWeekGames_nflGames } from "../../state/__generated__/GetWeekGames";

interface FlipGameProps {
    nflGame: GetWeekGames_nflGames
}
export const FlipGameListItem: React.SFC<FlipGameProps> = ({nflGame}) => {
    return <div>
        {(nflGame).start}<br/>
        {(nflGame).away_team.full_name}<br/>
        at {(nflGame).home_team.full_name}
    </div>
}
