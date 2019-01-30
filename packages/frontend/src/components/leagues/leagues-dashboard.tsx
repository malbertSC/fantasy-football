import React from "react";
import { CreateLeagueButton } from "./create-league-button";
import { JoinLeagueButton } from "./join-league-button";
import { Query } from "react-apollo";
import { GetLeaguesForUser, GetLeaguesForUserVariables, GetLeaguesForUser_leagues } from "../__generated__/GetLeaguesForUser";
import { UserConsumer } from "../../state/UserContext";
import { Redirect } from "react-router";
import { LeagueList } from "./league-list";
import { GetLeaguesForUser as QUERY } from "../queries";

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
                                            {/* https://github.com/prisma/prisma/issues/2999 */}
                                            <LeagueList
                                                leagues={leagues as Array<GetLeaguesForUser_leagues>}
                                                onClick={(leagueID) => {
                                                    this.setState({redirectToLeagueID: leagueID})
                                                }}
                                                actionButtonText="Settings"
                                            ></LeagueList>
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
