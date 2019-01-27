import gql from "graphql-tag";

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
