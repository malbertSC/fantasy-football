/* tslint:disable */
// This file was automatically generated and should not be edited.

import { FlipPosition } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetMatchup
// ====================================================

export interface GetMatchup_matchups_homePlayer_nfl_team {
  __typename: "NflTeam";
  id: number;
  full_name: string;
}

export interface GetMatchup_matchups_homePlayer {
  __typename: "NflPlayer";
  id: number;
  display_name: string;
  nfl_team: GetMatchup_matchups_homePlayer_nfl_team;
}

export interface GetMatchup_matchups_awayPlayer_nfl_team {
  __typename: "NflTeam";
  id: number;
  full_name: string;
}

export interface GetMatchup_matchups_awayPlayer {
  __typename: "NflPlayer";
  id: number;
  display_name: string;
  nfl_team: GetMatchup_matchups_awayPlayer_nfl_team;
}

export interface GetMatchup_matchups {
  __typename: "Matchup";
  position: FlipPosition;
  homePlayer: GetMatchup_matchups_homePlayer;
  awayPlayer: GetMatchup_matchups_awayPlayer;
}

export interface GetMatchup {
  matchups: (GetMatchup_matchups | null)[];
}

export interface GetMatchupVariables {
  id: number;
}
