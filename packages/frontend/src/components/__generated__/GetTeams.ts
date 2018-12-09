/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTeams
// ====================================================

export interface GetTeams_teams {
  __typename: "Team";
  id: number;
  name: string;
}

export interface GetTeams {
  teams: (GetTeams_teams | null)[];
}
