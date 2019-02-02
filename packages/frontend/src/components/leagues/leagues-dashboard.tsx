import React from "react";
import { CreateLeagueButton } from "./create-league-button";
import { JoinLeagueButton } from "./join-league-button";
import { Query } from "react-apollo";
import { GetLeaguesForUser, GetLeaguesForUserVariables, GetLeaguesForUser_leagues } from "../__generated__/GetLeaguesForUser";
import { UserConsumer } from "../../state/UserContext";
import { Redirect } from "react-router";
import { LeagueList } from "./league-list";
import { GetLeaguesForUser as QUERY } from "../queries";
import { Link } from "react-router-dom";

class GetLeaguesForUserQuery extends Query<GetLeaguesForUser, GetLeaguesForUserVariables> { }

interface State {
    showMyLeagues: boolean;
    redirectToLeagueID: number | undefined
}

export class LeaguesDashboard extends React.Component<{}, State> {
    public readonly state: State = {
        showMyLeagues: true,
        redirectToLeagueID: undefined
    }
    public render() {
        if (this.state.redirectToLeagueID) return <Redirect to={`/league/${this.state.redirectToLeagueID}`}></Redirect>
        return (
            <UserConsumer>{({isLoading, user}) => {
                if (isLoading) return
                if (!user) return <Redirect to="/" />
                return (
                    <GetLeaguesForUserQuery query={QUERY} variables={{userID: user.id} }>
                        {({ loading, data, error, refetch }) => {
                            if (loading) return <div>Loading</div>;
                            if (error) return <h1>ERROR</h1>;
                            if (!data) return <div>no data</div>;
                            const { leagues } = data;
                            return (
                                <div>
                                    {this.state.showMyLeagues &&
                                        <div>
                                            <h2>My Leagues</h2>
                                            <ul>
                                                {(() => {
                                                    {/* https://github.com/prisma/prisma/issues/2999 */}
                                                    return (leagues as Array<GetLeaguesForUser_leagues>).map((league) => {
                                                        return (
                                                            <Link to={`/league/${league.id}`}><li>{league.name}</li></Link>
                                                        )
                                                    })
                                                })()}
                                            </ul>
                                            <CreateLeagueButton onCreate={() => {
                                                this.setState({showMyLeagues: true});
                                                refetch();
                                            }}></CreateLeagueButton>
                                        </div>
                                    }
                                    <JoinLeagueButton leagues={leagues as Array<GetLeaguesForUser_leagues>} onClick={() => {
                                        this.setState({showMyLeagues: false});
                                    }} onJoin={() => {
                                        this.setState({showMyLeagues: true});
                                        refetch();
                                    }} onCancel={() => {
                                        this.setState({showMyLeagues: true});
                                    }}></JoinLeagueButton>
                                </div>
                            );
                        }}
                    </GetLeaguesForUserQuery>
                )
            }}
            </UserConsumer>
        );
    }
}
