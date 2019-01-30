/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLeague
// ====================================================

export interface GetLeague_league_league_lineups_lineup_lineup_players_nfl_player_nfl_team {
  __typename: "NflTeam";
  id: number;
  name: string;
}

export interface GetLeague_league_league_lineups_lineup_lineup_players_nfl_player {
  __typename: "NflPlayer";
  id: number;
  nfl_team: GetLeague_league_league_lineups_lineup_lineup_players_nfl_player_nfl_team;
  display_name: string;
}

export interface GetLeague_league_league_lineups_lineup_lineup_players {
  __typename: "LineupPlayer";
  id: number;
  nfl_player: GetLeague_league_league_lineups_lineup_lineup_players_nfl_player;
}

export interface GetLeague_league_league_lineups_lineup_nfl_game_home_team {
  __typename: "NflTeam";
  id: number;
  full_name: string;
}

export interface GetLeague_league_league_lineups_lineup_nfl_game_away_team {
  __typename: "NflTeam";
  id: number;
  full_name: string;
}

export interface GetLeague_league_league_lineups_lineup_nfl_game {
  __typename: "NflGame";
  id: number;
  home_team: GetLeague_league_league_lineups_lineup_nfl_game_home_team;
  away_team: GetLeague_league_league_lineups_lineup_nfl_game_away_team;
}

export interface GetLeague_league_league_lineups_lineup_owner_user {
  __typename: "User";
  id: number;
  username: string;
}

export interface GetLeague_league_league_lineups_lineup {
  __typename: "Lineup";
  id: number;
  name: string;
  lineup_players: GetLeague_league_league_lineups_lineup_lineup_players[] | null;
  nfl_game: GetLeague_league_league_lineups_lineup_nfl_game;
  owner_user: GetLeague_league_league_lineups_lineup_owner_user;
}

export interface GetLeague_league_league_lineups {
  __typename: "LeagueLineup";
  lineup: GetLeague_league_league_lineups_lineup;
}

export interface GetLeague_league_league_members_member_user {
  __typename: "User";
  id: number;
  username: string;
}

export interface GetLeague_league_league_members {
  __typename: "LeagueMember";
  id: number;
  member_user: GetLeague_league_league_members_member_user;
}

export interface GetLeague_league {
  __typename: "League";
  id: number;
  name: string;
  league_lineups: GetLeague_league_league_lineups[] | null;
  league_members: GetLeague_league_league_members[] | null;
}

export interface GetLeague {
  league: GetLeague_league | null;
}

export interface GetLeagueVariables {
  id: number;
}
