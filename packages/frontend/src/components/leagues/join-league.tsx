import React from "react";
import { LeagueList } from "./league-list";
import { Query } from "react-apollo";
import { GetJoinableLeagues, GetJoinableLeaguesVariables, GetJoinableLeagues_leagues } from "../__generated__/GetJoinableLeagues";
import { GetJoinableLeagues as QUERY } from "../queries";
import { UserConsumer } from "../../state/UserContext";
import { Redirect } from "react-router";
import { SearchBox } from "../search-box";
import { JoinLeagueList } from "./join-league-list";
interface Props {
    onJoin: () => void;
}
interface State {
    searchTerm: string;
}
class GetJoinableLeaguesQuery extends Query<GetJoinableLeagues, GetJoinableLeaguesVariables> {}
export class JoinLeague extends React.Component<Props, State> {
    public readonly state: State = {
        searchTerm: ""
    }
    public render() {
        return (
            <div>
                <SearchBox onChangeValue={(newValue) => {
                    this.setState({searchTerm: newValue});
                }}></SearchBox>
                <UserConsumer>{({isLoading, user}) => {
                    if (isLoading) return
                    if (!user) return <Redirect to="/" />
                    return (
                        <GetJoinableLeaguesQuery query={QUERY} variables={{userID: user.id, searchTerm: this.state.searchTerm}}>{({data}) => {
                            if (!data) return (<div>no data</div>)
                            const { leagues } = data;
                            return (
                                <div>
                                    {/* https://github.com/prisma/prisma/issues/2999 */}
                                    <JoinLeagueList leagues={leagues as Array<GetJoinableLeagues_leagues>}
                                        onJoin={this.props.onJoin}
                                        userID={user.id}
                                    ></JoinLeagueList>
                                </div>
                            )
                        }}
                        </GetJoinableLeaguesQuery>
                    )
                }}</UserConsumer>
            </div>
        );
    }
};
