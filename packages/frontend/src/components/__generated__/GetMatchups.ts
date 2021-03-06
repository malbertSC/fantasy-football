/* tslint:disable */
// This file was automatically generated and should not be edited.

import { FlipPosition } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetMatchups
// ====================================================

export interface GetMatchups_matchups_homePlayer_nflPlayer_nfl_team {
  __typename: "NflTeam";
  id: number;
  full_name: string;
}

export interface GetMatchups_matchups_homePlayer_nflPlayer {
  __typename: "NflPlayer";
  id: number;
  display_name: string;
  nfl_team: GetMatchups_matchups_homePlayer_nflPlayer_nfl_team;
}

export interface GetMatchups_matchups_homePlayer {
  __typename: "MatchupPlayer";
  nflPlayer: GetMatchups_matchups_homePlayer_nflPlayer;
  projectedScore: number | null;
  actualScore: number | null;
}

export interface GetMatchups_matchups_awayPlayer_nflPlayer_nfl_team {
  __typename: "NflTeam";
  id: number;
  full_name: string;
}

export interface GetMatchups_matchups_awayPlayer_nflPlayer {
  __typename: "NflPlayer";
  id: number;
  display_name: string;
  nfl_team: GetMatchups_matchups_awayPlayer_nflPlayer_nfl_team;
}

export interface GetMatchups_matchups_awayPlayer {
  __typename: "MatchupPlayer";
  nflPlayer: GetMatchups_matchups_awayPlayer_nflPlayer;
  projectedScore: number | null;
  actualScore: number | null;
}

export interface GetMatchups_matchups {
  __typename: "Matchup";
  position: FlipPosition;
  homePlayer: GetMatchups_matchups_homePlayer;
  awayPlayer: GetMatchups_matchups_awayPlayer;
}

export interface GetMatchups {
  matchups: (GetMatchups_matchups | null)[];
}

export interface GetMatchupsVariables {
  id: number;
}
