import React from "react";
import { Query } from "react-apollo";
import { GetLineups, GetLineupsVariables, GetLineups_lineups } from "../__generated__/GetLineups";
import { GetLineups as QUERY } from "../queries";
import { LineupList } from "./lineup-list";

interface Props {
    userID: number;
    currentNFLWeek: number;
}

class GetLineupsQuery extends Query<GetLineups, GetLineupsVariables> {}

export const MyLineups: React.SFC<Props> = (props) => {
    return (
        <GetLineupsQuery
            query={QUERY}
            variables={{week: props.currentNFLWeek, userID: props.userID}}
        >{({data, loading}) => {
            if (!loading && data) {
                const { lineups } = data;
                if (lineups.length === 0) {
                    return <div>no lineups set for this week</div>
                }
                return <LineupList lineups={lineups as Array<GetLineups_lineups>}></LineupList>
            } else return (<div>Loading Lineups</div>)
        }}</GetLineupsQuery>
    )
}
