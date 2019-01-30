import React from "react";
import { RouteComponentProps } from "react-router";
import { Query } from "react-apollo";
import { GetLineups as QUERY } from "../queries";
import { GetLineups, GetLineupsVariables } from "../__generated__/GetLineups";
import { Lineup as LineupFragment } from "../__generated__/Lineup";
import { Lineup } from "./lineup";
import { Link } from "react-router-dom";
interface RouteProps {
    leagueID: string;
    userID: string;
}

class GetLineupsQuery extends Query<GetLineups, GetLineupsVariables> {}

export const LineupPage: React.SFC<RouteComponentProps<RouteProps>> = (props) => {
    const leagueID = parseInt(props.match.params.leagueID, 10);
    const userID = parseInt(props.match.params.userID, 10);
    return (
        <div>
            <Link to={`/league/${leagueID}`}>back to league...</Link>
            <GetLineupsQuery
                query={QUERY}
                variables={{week: 22, userID, leagueID}}
            >{({data, loading}) => {
                if (!loading && data) {
                    const { lineups } = data;
                    if (lineups.length !== 1) {
                        return <div>ERROR</div>
                    }
                    const lineup = lineups[0];
                    console.log(lineup);
                    return <Lineup lineup={lineup as LineupFragment}></Lineup>
                } else return (<div>Loading Lineup</div>)
            }}</GetLineupsQuery>
        </div>
    )
}
