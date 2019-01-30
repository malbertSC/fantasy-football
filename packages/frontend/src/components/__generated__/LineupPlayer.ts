/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LineupPlayer
// ====================================================

export interface LineupPlayer_nfl_player_nfl_team {
  __typename: "NflTeam";
  id: number;
  name: string;
}

export interface LineupPlayer_nfl_player {
  __typename: "NflPlayer";
  id: number;
  nfl_team: LineupPlayer_nfl_player_nfl_team;
  display_name: string;
}

export interface LineupPlayer {
  __typename: "LineupPlayer";
  id: number;
  nfl_player: LineupPlayer_nfl_player;
}
