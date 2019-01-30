import React from "react";
import { RouteComponentProps, Redirect } from "react-router";
import { Query } from "react-apollo";
import { GetLeagueVariables, GetLeague, GetLeague_league_league_lineups,
    GetLeague_league_league_lineups_lineup, GetLeague_league_league_members,
    GetLeague_league } from "../__generated__/GetLeague";
import { GetLeague as QUERY} from "../queries";
import { UserConsumer } from "../../state/UserContext";
import { GetCurrentUser_currentUser } from "../__generated__/GetCurrentUser";

interface RoutedProps {
    leagueID: string;
}
interface Props extends RouteComponentProps<RoutedProps> {}

class GetLeagueQuery extends Query<GetLeague, GetLeagueVariables> {}

function findLineupForMember(lineups: GetLeague_league_league_lineups_lineup[], userID: number) {
    const memberLineup = lineups.find((lineup) => {
        return lineup.owner_user.id === userID;
    })
    console.log(memberLineup);
    return memberLineup;
}

function getLineupButtons(league: GetLeague_league, member: GetLeague_league_league_members, user: GetCurrentUser_currentUser) {
    const memberLineup = findLineupForMember((league.league_lineups as Array<GetLeague_league_league_lineups>)
        .map((leagueLineup) => leagueLineup.lineup)
    , member.member_user.id);
    if (member.member_user.id === user.id) {
        if (!memberLineup) return <button>Add Lineup</button>;
        return <button>Edit Lineup</button>
    }
    if (memberLineup) return <button>View Lineup</button>
}

export const League: React.SFC<Props> = (props) => {
    const leagueID: number = parseInt(props.match.params.leagueID, 10);
    return (
        <UserConsumer>{({isLoading, user}) => {
            if (isLoading) return
            if (!user) return <Redirect to="/" />
            return (
                <GetLeagueQuery query={QUERY} variables={{id: leagueID}}>{({data, loading, error}) => {
                    if (loading) return <div>Loading...</div>
                    if (!data || error) return <div>ERROR</div>
                    const { league } = data;
                    if (!league || !league.league_lineups || !league.league_lineups || !league.league_members) return <div>Error</div>
                    return (
                        <div>
                            <h2>Members</h2>
                            <div>{league.league_members.map((member) => {
                                return <div key={member.id}>
                                    <span>{member.member_user.username}</span>
                                    <span>{getLineupButtons(league, member, user)}</span>
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
