// import { GetTeams, GetTeams_teams } from "./__generated__/GetTeams";
// import { GetTeams as QUERY } from "./queries";
import { Query } from "react-apollo";
import React, { Component } from "react";
// import { GetTeam_team } from "./__generated__/GetTeam";

// class GetTeamsQuery extends Query<GetTeams> { }

export class Teams extends Component {
    public render() {
        return (
            <div>Broken</div>
            // <GetTeamsQuery query={QUERY}>
            //     {({ loading, data, error }) => {
            //         if (loading) return <div>Loading</div>;
            //         if (error) return <h1>ERROR</h1>;
            //         if (!data) return <div>no data</div>;
            //         const { teams } = data;
            //         return (
            //             <ul>
            //                 {/* https://github.com/prisma/prisma/issues/2999 */}
            //                 {teams.map(team => <li>{(team as GetTeam_team).id}</li>)
            //                 }
            //             </ul>
            //         );
            //     }}
            // </GetTeamsQuery>
        )
    }
}
