/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetWeekGames
// ====================================================

export interface GetWeekGames_nflGames_away_team {
  __typename: "NflTeam";
  id: number;
  full_name: string;
  code: string;
}

export interface GetWeekGames_nflGames_home_team {
  __typename: "NflTeam";
  id: number;
  full_name: string;
  code: string;
}

export interface GetWeekGames_nflGames {
  __typename: "NflGame";
  id: number;
  start: any;
  week: number;
  away_team: GetWeekGames_nflGames_away_team;
  home_team: GetWeekGames_nflGames_home_team;
}

export interface GetWeekGames {
  nflGames: (GetWeekGames_nflGames | null)[];
}

export interface GetWeekGamesVariables {
  week?: number | null;
}
