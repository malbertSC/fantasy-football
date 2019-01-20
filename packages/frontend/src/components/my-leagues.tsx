import { GetLeaguesForUser, GetLeaguesForUser_leagues, GetLeaguesForUserVariables } from "./__generated__/GetLeaguesForUser";
import { GetLeaguesForUser as QUERY } from "./queries";
import { Query } from "react-apollo";
import React, { Component } from "react";
import { UserConsumer } from "../state/UserContext";
import { Redirect } from "react-router-dom";

class GetLeaguesForUserQuery extends Query<GetLeaguesForUser, GetLeaguesForUserVariables> { }

export class MyLeagues extends Component {
    public render() {
        return (
            <UserConsumer>{({isLoading, user}) => {
                if (!isLoading && !user) return <Redirect to="/" />
                return (
                    <GetLeaguesForUserQuery query={QUERY} variables={{userID: user ? user.id : 100}}>
                        {({ loading, data, error }) => {
                            if (loading) return <div>Loading</div>;
                            if (error) return <h1>ERROR</h1>;
                            if (!data) return <div>no data</div>;
                            const { leagues } = data;
                            return (
                                <ul>
                                    {/* https://github.com/prisma/prisma/issues/2999 */}
                                    {leagues.map(league => <li>{(league as GetLeaguesForUser_leagues).id}</li>)
                                    }
                                </ul>
                            );
                        }}
                    </GetLeaguesForUserQuery>
                )
            }}
            </UserConsumer>
        )
    }
}
