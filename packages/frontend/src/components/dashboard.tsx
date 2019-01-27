import React from "react";
import { LeaguesDashboard } from "./leagues/leagues-dashboard";
import { LineupsDashboard } from "./lineups/lineups-dashboard";
import { NFLWeekLoader } from "../state/nfl-week-loader";

export const Dashboard: React.SFC = () => {
    return (
        <div>
            <LeaguesDashboard></LeaguesDashboard>
            <NFLWeekLoader>
                <LineupsDashboard></LineupsDashboard>
            </NFLWeekLoader>
        </div>
    )
}
