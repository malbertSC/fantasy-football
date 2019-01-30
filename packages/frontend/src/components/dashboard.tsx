import React from "react";
import { LeaguesDashboard } from "./leagues/leagues-dashboard";
import { LineupsDashboard } from "./lineups/lineups-dashboard";

export const Dashboard: React.SFC = () => {
    return (
        <div>
            <LeaguesDashboard></LeaguesDashboard>
            {/* <LineupsDashboard></LineupsDashboard> */}
        </div>
    )
}
