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

export const GetWeekGames = gql`
    query GetWeekGames($week:Int) {
        nflGames(where: {week: $week}) {
            id,
            start,
            week,
            away_team {
                id,
                full_name,
                code
            },
            home_team {
                id,
                full_name,
                code
            }
        }
    }
`;

export const GetFlipGameMatchup = gql`
    query GetFlipGameMatchup($id:Int) {
        flipGamePlayers(where: {game: {id: $id}}) {
            id,
                position,
                player {
                id,
                display_name
            },
                team {
                id,
                full_name
            }
        }
    }
`;
