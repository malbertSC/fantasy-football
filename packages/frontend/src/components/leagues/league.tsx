import React from "react";
import { GetLeaguesForUser_leagues } from "../__generated__/GetLeaguesForUser";

interface Props {
    league: GetLeaguesForUser_leagues
}
export const League: React.SFC<Props> = (props) => {
    return (<div>{props.league.name}</div>);
}
