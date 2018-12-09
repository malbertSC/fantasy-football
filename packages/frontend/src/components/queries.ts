import gql from "graphql-tag";

export const GetTeam = gql`
    query GetTeam($id: Int!) {
        team(where: {id: $id}) {
            id
        }
    }
`;

export const GetTeams = gql`
    query GetTeams {
        teams {
            id,
            name
        }
    }
`;
