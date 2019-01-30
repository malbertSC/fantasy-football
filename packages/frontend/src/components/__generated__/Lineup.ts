/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Lineup
// ====================================================

export interface Lineup_lineup_players_nfl_player_nfl_team {
  __typename: "NflTeam";
  id: number;
  name: string;
}

export interface Lineup_lineup_players_nfl_player {
  __typename: "NflPlayer";
  id: number;
  nfl_team: Lineup_lineup_players_nfl_player_nfl_team;
  display_name: string;
}

export interface Lineup_lineup_players {
  __typename: "LineupPlayer";
  id: number;
  nfl_player: Lineup_lineup_players_nfl_player;
}

export interface Lineup_nfl_game_home_team {
  __typename: "NflTeam";
  id: number;
  full_name: string;
}

export interface Lineup_nfl_game_away_team {
  __typename: "NflTeam";
  id: number;
  full_name: string;
}

export interface Lineup_nfl_game {
  __typename: "NflGame";
  id: number;
  home_team: Lineup_nfl_game_home_team;
  away_team: Lineup_nfl_game_away_team;
}

export interface Lineup_owner_user {
  __typename: "User";
  id: number;
  username: string;
}

export interface Lineup {
  __typename: "Lineup";
  id: number;
  name: string;
  lineup_players: Lineup_lineup_players[] | null;
  nfl_game: Lineup_nfl_game;
  owner_user: Lineup_owner_user;
}
