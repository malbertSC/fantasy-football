/* tslint:disable */
// This file was automatically generated and should not be edited.

import { FlipPosition } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetFlipGameMatchup
// ====================================================

export interface GetFlipGameMatchup_flipGamePlayers_player {
  __typename: "NflPlayer";
  id: number;
  display_name: string;
}

export interface GetFlipGameMatchup_flipGamePlayers_team {
  __typename: "NflTeam";
  id: number;
  full_name: string;
}

export interface GetFlipGameMatchup_flipGamePlayers {
  __typename: "FlipGamePlayer";
  id: number;
  position: FlipPosition;
  player: GetFlipGameMatchup_flipGamePlayers_player;
  team: GetFlipGameMatchup_flipGamePlayers_team;
}

export interface GetFlipGameMatchup {
  flipGamePlayers: (GetFlipGameMatchup_flipGamePlayers | null)[];
}

export interface GetFlipGameMatchupVariables {
  id?: number | null;
}
