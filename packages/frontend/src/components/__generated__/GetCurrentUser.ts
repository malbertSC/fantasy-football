/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCurrentUser
// ====================================================

export interface GetCurrentUser_currentUser {
  __typename: "SafeUser";
  id: number;
  username: string;
}

export interface GetCurrentUser {
  currentUser: GetCurrentUser_currentUser | null;
}
