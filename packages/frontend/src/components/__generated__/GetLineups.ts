/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLineups
// ====================================================

export interface GetLineups_lineups_lineup_players_nfl_player_nfl_team {
  __typename: "NflTeam";
  id: number;
  name: string;
}

export interface GetLineups_lineups_lineup_players_nfl_player {
  __typename: "NflPlayer";
  id: number;
  nfl_team: GetLineups_lineups_lineup_players_nfl_player_nfl_team;
  display_name: string;
}

export interface GetLineups_lineups_lineup_players {
  __typename: "LineupPlayer";
  id: number;
  nfl_player: GetLineups_lineups_lineup_players_nfl_player;
}

export interface GetLineups_lineups_nfl_game_home_team {
  __typename: "NflTeam";
  id: number;
  full_name: string;
}

export interface GetLineups_lineups_nfl_game_away_team {
  __typename: "NflTeam";
  id: number;
  full_name: string;
}

export interface GetLineups_lineups_nfl_game {
  __typename: "NflGame";
  id: number;
  home_team: GetLineups_lineups_nfl_game_home_team;
  away_team: GetLineups_lineups_nfl_game_away_team;
}

export interface GetLineups_lineups_owner_user {
  __typename: "User";
  id: number;
  username: string;
}

export interface GetLineups_lineups {
  __typename: "Lineup";
  id: number;
  name: string;
  lineup_players: GetLineups_lineups_lineup_players[] | null;
  nfl_game: GetLineups_lineups_nfl_game;
  owner_user: GetLineups_lineups_owner_user;
}

export interface GetLineups {
  lineups: (GetLineups_lineups | null)[];
}

export interface GetLineupsVariables {
  userID: number;
  week: number;
}
