/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLeaguesForUser
// ====================================================

export interface GetLeaguesForUser_leagues {
  __typename: "League";
  id: number;
  name: string;
}

export interface GetLeaguesForUser {
  leagues: (GetLeaguesForUser_leagues | null)[];
}

export interface GetLeaguesForUserVariables {
  userID?: number | null;
}
