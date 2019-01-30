import React from "react";
import { NFLWeekConsumer } from "../../state/nfl-week-context";
import { UserConsumer } from "../../state/UserContext";
import { MyLineups } from "./my-lineups";
import { Link } from "react-router-dom";
export const LineupsDashboard: React.SFC = () => {
    return (
        <div>
            <h2>My Lineups</h2>
            <UserConsumer>{({isLoading, user}) => {
                if (!isLoading && user) {
                    return (
                        <NFLWeekConsumer>{({nflCurrentWeek, isLoading: isNFLWeekLoading}) => {
                            if (!isNFLWeekLoading) {
                                return (
                                    <div>
                                        <MyLineups currentNFLWeek={nflCurrentWeek} userID={user.id}></MyLineups>
                                        <Link to="/create-lineup"><button>Create Lineup</button></Link>
                                    </div>
                                )
                            }
                        }}</NFLWeekConsumer>
                    )
                }
            }}
            </UserConsumer>
        </div>
    )
}
