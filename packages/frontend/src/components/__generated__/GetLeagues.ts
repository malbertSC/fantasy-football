/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLeagues
// ====================================================

export interface GetLeagues_leagues {
  __typename: "League";
  id: number;
  name: string;
}

export interface GetLeagues {
  leagues: (GetLeagues_leagues | null)[];
}

export interface GetLeaguesVariables {
  searchTerm?: string | null;
}
