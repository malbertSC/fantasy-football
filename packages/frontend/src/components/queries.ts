import gql from "graphql-tag";

export const GetCurrentUser = gql`
    query GetCurrentUser {
        currentUser {
            id,
            username
        }
    }
`;

export const LineupPlayerFragment = gql`
    fragment LineupPlayer on LineupPlayer {
        id,
        nfl_player {
            id,
            nfl_team {
                id,
                name
            },
            display_name
        }
    }
`;

export const LineupFragment = gql`
    fragment Lineup on Lineup {
        id,
        name,
        lineup_players {
            ...LineupPlayer
        },
        nfl_game {
            id,
            home_team {
                id,
                full_name
            },
            away_team{
                id,
                full_name
            }
        },
        owner_user{
            id,
            username
        }
    }
    ${LineupPlayerFragment}
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
                nflPlayer {
                    id,
                    display_name,
                    nfl_team {
                        id,
                        full_name
                    }
                },
                projectedScore,
                actualScore
            },
            awayPlayer{
                nflPlayer {
                    id,
                    display_name,
                    nfl_team {
                        id,
                        full_name
                    }
                },
                projectedScore,
                actualScore
            }
        }
    }
`;

export const GetLineups = gql`
    query GetLineups($userID: Int!, $week: Int!, $leagueID: Int){
        lineups(where: {
            owner_user:{id: $userID},
            nfl_game:{week: $week},
            leagues_every:{id: $leagueID},
            leagues_some:{id_not: null}
        }) {
            ...Lineup
        }
    }
    ${LineupFragment}
`;

export const GetLeague = gql`
    query GetLeague($id: Int!) {
        league(where:{id: $id}) {
            id,
            name,
            league_lineups {
                lineup{
                    ...Lineup
                },
            },
            league_members{
                id,
                member_user {
                    id,
                    username
                }
            }
        }
    }
    ${LineupFragment}
`;
