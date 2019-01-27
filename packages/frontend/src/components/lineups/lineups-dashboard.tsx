import React from "react";
import { NFLWeekConsumer } from "../../state/nfl-week-context";
export const LineupsDashboard: React.SFC = () => {
    return (
        <div>
            <h2>My Lineups</h2>
            <NFLWeekConsumer>{({nflGames, isLoading}) => {
                if (!isLoading) {
                    if (!nflGames) return <div>nfl games bad</div>
                    return nflGames.map((nflGame) => {
                        return (<div key={nflGame.id}>{nflGame.away_team.full_name} vs. {nflGame.home_team.full_name}</div>)
                    })
                }
                else return (<div>fail</div>)
            }}</NFLWeekConsumer>
        </div>
    )
}
