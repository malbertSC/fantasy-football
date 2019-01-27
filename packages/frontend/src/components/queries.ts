import gql from "graphql-tag";

export const GetCurrentUser = gql`
    query GetCurrentUser {
        currentUser {
            id,
            username
        }
    }
`;

export const GetLeaguesForUser = gql`
    query GetLeaguesForUser($userID: Int) {
        leagues(where:{league_members_some:{member_user:{id:$userID}}}) {
            id,
            name
        }
    }
`

export const GetJoinableLeagues = gql`
    query GetJoinableLeagues($userID: Int, $searchTerm: String) {
        leagues(where: {
            name_contains: $searchTerm,
            league_members_none:{member_user:{id:$userID}}
        }) {
            id,
            name
        }
    }
`

export const GetMatchups = gql`
    query GetMatchups($id:Int!) {
        matchups(where:{gameID: $id}) {
            position,
            homePlayer{
                id,
                display_name,
                nfl_team {
                    id,
                    full_name
                }
            },
            awayPlayer{
                id,
                display_name,
                nfl_team {
                    id,
                    full_name
                }
            }
        }
    }
`;
