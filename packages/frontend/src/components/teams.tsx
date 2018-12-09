import { GetTeams, GetTeams_teams } from "./__generated__/GetTeams";
import { GetTeams as QUERY } from "./queries";
import { Query } from "react-apollo";
import React, { Component } from "react";

class GetTeamsQuery extends Query<GetTeams> { }

export class Teams extends Component {
    public render() {
        return (
            <GetTeamsQuery query={QUERY}>
                {({ loading, data, error }) => {
                    if (loading) return <div>Loading</div>;
                    if (error) return <h1>ERROR</h1>;
                    if (!data) return <div>no data</div>;
                    const { teams } = data;
                    return (
                        <ul>
                            {teams.map(team => <li>{team.id}</li>)
                            }
                        </ul>
                    );
                }}
            </GetTeamsQuery>
        )
    }
}
