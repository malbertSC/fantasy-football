/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTeam
// ====================================================

export interface GetTeam_team {
  __typename: "Team";
  id: number;
}

export interface GetTeam {
  team: GetTeam_team | null;
}

export interface GetTeamVariables {
  id: number;
}
