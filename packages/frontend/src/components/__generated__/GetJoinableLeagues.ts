/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetJoinableLeagues
// ====================================================

export interface GetJoinableLeagues_leagues {
  __typename: "League";
  id: number;
  name: string;
}

export interface GetJoinableLeagues {
  leagues: (GetJoinableLeagues_leagues | null)[];
}

export interface GetJoinableLeaguesVariables {
  userID?: number | null;
  searchTerm?: string | null;
}
