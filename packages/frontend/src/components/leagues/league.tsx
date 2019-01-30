import React from "react";
import { RouteComponentProps, Redirect } from "react-router";
import { Query } from "react-apollo";
import { GetLeagueVariables, GetLeague} from "../__generated__/GetLeague";
import { Lineup as LineupFragment } from "../__generated__/Lineup";
import { GetLeague as QUERY} from "../queries";
import { UserConsumer } from "../../state/UserContext";
import { Lineup } from "../lineups/lineup";
import { Link } from "react-router-dom";

interface RoutedProps {
    leagueID: string;
}
interface Props extends RouteComponentProps<RoutedProps> {}

class GetLeagueQuery extends Query<GetLeague, GetLeagueVariables> {}

function findLineupForMember(lineups: LineupFragment[], memberUserID: number) {
    const memberLineup = lineups.find((lineup) => {
        return lineup.owner_user.id === memberUserID;
    })
    console.log(memberLineup);
    return memberLineup;
}

function getLineupButtons(lineups: LineupFragment[], memberUserID: number, leagueID: number) {
    const memberLineup = findLineupForMember(lineups, memberUserID);
    if (memberLineup) return <Link to={`/league/${leagueID}/${memberUserID}/lineup`}><button>View Lineup</button></Link>
    return <span> (no lineup set)</span>
}

export const League: React.SFC<Props> = (props) => {
    const leagueID: number = parseInt(props.match.params.leagueID, 10);
    return (
        <UserConsumer>{({isLoading, user}) => {
            if (isLoading) return
            if (!user) return <Redirect to="/" />
            return (
                <GetLeagueQuery query={QUERY} variables={{id: leagueID}} fetchPolicy="cache-and-network">{({data, loading, error}) => {
                    if (loading) return <div>Loading...</div>
                    if (!data || error) return <div>ERROR</div>
                    const { league } = data;
                    if (!league || !league.league_lineups || !league.league_members) return <div>Error</div>
                    const lineups = league.league_lineups.map((leagueLineup) => leagueLineup.lineup);
                    const otherLeagueMembers = league.league_members
                        .filter((member) => member.member_user.id !== user.id)
                        .map((member) => member.member_user);
                    return (
                        <div>
                            <h2>My Lineup</h2>
                            {(() => {
                                const myLineup = findLineupForMember(lineups, user.id);
                                if (!myLineup) return (<Link to={`/league/${league.id}/create-lineup`}><button>Set Lineup</button></Link>)
                                return <Lineup lineup={findLineupForMember(lineups, user.id) as LineupFragment}></Lineup>
                            })()}
                            <h2>Members</h2>
                            {otherLeagueMembers.length === 0 && <div>No other teams in league</div>}
                            <div>{otherLeagueMembers.map((member) => {
                                return <div key={member.id}>
                                    <span>{member.username}</span>
                                    <span>{getLineupButtons(lineups, member.id, league.id)}</span>
                                </div>
                            })}</div>
                        </div>
                    )
                }}</GetLeagueQuery>
            )
        }}
        </UserConsumer>
    )
}
