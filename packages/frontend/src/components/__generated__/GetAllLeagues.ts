/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllLeagues
// ====================================================

export interface GetAllLeagues_leagues {
  __typename: "League";
  id: number;
  name: string;
}

export interface GetAllLeagues {
  leagues: (GetAllLeagues_leagues | null)[];
}

export interface GetAllLeaguesVariables {
  searchTerm?: string | null;
}
