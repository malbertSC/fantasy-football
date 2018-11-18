export const typeDefs = /* GraphQL */ `type AggregateLeague {
  count: Int!
}

type AggregateNfl_player {
  count: Int!
}

type AggregateNfl_team {
  count: Int!
}

type AggregateTeam {
  count: Int!
}

type AggregateTeam_player {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type League {
  id: Int!
  name: String
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
}

type LeagueConnection {
  pageInfo: PageInfo!
  edges: [LeagueEdge]!
  aggregate: AggregateLeague!
}

input LeagueCreateInput {
  name: String
  teams: TeamCreateManyWithoutLeagueInput
}

input LeagueCreateOneWithoutTeamsInput {
  create: LeagueCreateWithoutTeamsInput
  connect: LeagueWhereUniqueInput
}

input LeagueCreateWithoutTeamsInput {
  name: String
}

type LeagueEdge {
  node: League!
  cursor: String!
}

enum LeagueOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LeaguePreviousValues {
  id: Int!
  name: String
}

type LeagueSubscriptionPayload {
  mutation: MutationType!
  node: League
  updatedFields: [String!]
  previousValues: LeaguePreviousValues
}

input LeagueSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LeagueWhereInput
  AND: [LeagueSubscriptionWhereInput!]
  OR: [LeagueSubscriptionWhereInput!]
  NOT: [LeagueSubscriptionWhereInput!]
}

input LeagueUpdateInput {
  name: String
  teams: TeamUpdateManyWithoutLeagueInput
}

input LeagueUpdateManyMutationInput {
  name: String
}

input LeagueUpdateOneWithoutTeamsInput {
  create: LeagueCreateWithoutTeamsInput
  update: LeagueUpdateWithoutTeamsDataInput
  upsert: LeagueUpsertWithoutTeamsInput
  delete: Boolean
  disconnect: Boolean
  connect: LeagueWhereUniqueInput
}

input LeagueUpdateWithoutTeamsDataInput {
  name: String
}

input LeagueUpsertWithoutTeamsInput {
  update: LeagueUpdateWithoutTeamsDataInput!
  create: LeagueCreateWithoutTeamsInput!
}

input LeagueWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  teams_every: TeamWhereInput
  teams_some: TeamWhereInput
  teams_none: TeamWhereInput
  AND: [LeagueWhereInput!]
  OR: [LeagueWhereInput!]
  NOT: [LeagueWhereInput!]
}

input LeagueWhereUniqueInput {
  id: Int
}

scalar Long

type Mutation {
  createLeague(data: LeagueCreateInput!): League!
  updateLeague(data: LeagueUpdateInput!, where: LeagueWhereUniqueInput!): League
  updateManyLeagues(data: LeagueUpdateManyMutationInput!, where: LeagueWhereInput): BatchPayload!
  upsertLeague(where: LeagueWhereUniqueInput!, create: LeagueCreateInput!, update: LeagueUpdateInput!): League!
  deleteLeague(where: LeagueWhereUniqueInput!): League
  deleteManyLeagues(where: LeagueWhereInput): BatchPayload!
  createNfl_player(data: Nfl_playerCreateInput!): Nfl_player!
  updateNfl_player(data: Nfl_playerUpdateInput!, where: Nfl_playerWhereUniqueInput!): Nfl_player
  updateManyNfl_players(data: Nfl_playerUpdateManyMutationInput!, where: Nfl_playerWhereInput): BatchPayload!
  upsertNfl_player(where: Nfl_playerWhereUniqueInput!, create: Nfl_playerCreateInput!, update: Nfl_playerUpdateInput!): Nfl_player!
  deleteNfl_player(where: Nfl_playerWhereUniqueInput!): Nfl_player
  deleteManyNfl_players(where: Nfl_playerWhereInput): BatchPayload!
  createNfl_team(data: Nfl_teamCreateInput!): Nfl_team!
  updateNfl_team(data: Nfl_teamUpdateInput!, where: Nfl_teamWhereUniqueInput!): Nfl_team
  updateManyNfl_teams(data: Nfl_teamUpdateManyMutationInput!, where: Nfl_teamWhereInput): BatchPayload!
  upsertNfl_team(where: Nfl_teamWhereUniqueInput!, create: Nfl_teamCreateInput!, update: Nfl_teamUpdateInput!): Nfl_team!
  deleteNfl_team(where: Nfl_teamWhereUniqueInput!): Nfl_team
  deleteManyNfl_teams(where: Nfl_teamWhereInput): BatchPayload!
  createTeam(data: TeamCreateInput!): Team!
  updateTeam(data: TeamUpdateInput!, where: TeamWhereUniqueInput!): Team
  updateManyTeams(data: TeamUpdateManyMutationInput!, where: TeamWhereInput): BatchPayload!
  upsertTeam(where: TeamWhereUniqueInput!, create: TeamCreateInput!, update: TeamUpdateInput!): Team!
  deleteTeam(where: TeamWhereUniqueInput!): Team
  deleteManyTeams(where: TeamWhereInput): BatchPayload!
  createTeam_player(data: Team_playerCreateInput!): Team_player!
  updateTeam_player(data: Team_playerUpdateInput!, where: Team_playerWhereUniqueInput!): Team_player
  upsertTeam_player(where: Team_playerWhereUniqueInput!, create: Team_playerCreateInput!, update: Team_playerUpdateInput!): Team_player!
  deleteTeam_player(where: Team_playerWhereUniqueInput!): Team_player
  deleteManyTeam_players(where: Team_playerWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

type Nfl_player {
  id: Int!
  display_name: String
  esb_id: String
  first_name: String
  gsis_id: String
  last_name: String
  nfl_feed_id: String
  nfl_team: Nfl_team
  position: String
  position_group: String
  status: String
  team_players(where: Team_playerWhereInput, orderBy: Team_playerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team_player!]
}

type Nfl_playerConnection {
  pageInfo: PageInfo!
  edges: [Nfl_playerEdge]!
  aggregate: AggregateNfl_player!
}

input Nfl_playerCreateInput {
  display_name: String
  esb_id: String
  first_name: String
  gsis_id: String
  last_name: String
  nfl_feed_id: String
  nfl_team: Nfl_teamCreateOneWithoutNfl_playersInput
  position: String
  position_group: String
  status: String
  team_players: Team_playerCreateManyWithoutNfl_playerInput
}

input Nfl_playerCreateManyWithoutNfl_teamInput {
  create: [Nfl_playerCreateWithoutNfl_teamInput!]
  connect: [Nfl_playerWhereUniqueInput!]
}

input Nfl_playerCreateOneWithoutTeam_playersInput {
  create: Nfl_playerCreateWithoutTeam_playersInput
  connect: Nfl_playerWhereUniqueInput
}

input Nfl_playerCreateWithoutNfl_teamInput {
  display_name: String
  esb_id: String
  first_name: String
  gsis_id: String
  last_name: String
  nfl_feed_id: String
  position: String
  position_group: String
  status: String
  team_players: Team_playerCreateManyWithoutNfl_playerInput
}

input Nfl_playerCreateWithoutTeam_playersInput {
  display_name: String
  esb_id: String
  first_name: String
  gsis_id: String
  last_name: String
  nfl_feed_id: String
  nfl_team: Nfl_teamCreateOneWithoutNfl_playersInput
  position: String
  position_group: String
  status: String
}

type Nfl_playerEdge {
  node: Nfl_player!
  cursor: String!
}

enum Nfl_playerOrderByInput {
  id_ASC
  id_DESC
  display_name_ASC
  display_name_DESC
  esb_id_ASC
  esb_id_DESC
  first_name_ASC
  first_name_DESC
  gsis_id_ASC
  gsis_id_DESC
  last_name_ASC
  last_name_DESC
  nfl_feed_id_ASC
  nfl_feed_id_DESC
  position_ASC
  position_DESC
  position_group_ASC
  position_group_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type Nfl_playerPreviousValues {
  id: Int!
  display_name: String
  esb_id: String
  first_name: String
  gsis_id: String
  last_name: String
  nfl_feed_id: String
  position: String
  position_group: String
  status: String
}

type Nfl_playerSubscriptionPayload {
  mutation: MutationType!
  node: Nfl_player
  updatedFields: [String!]
  previousValues: Nfl_playerPreviousValues
}

input Nfl_playerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: Nfl_playerWhereInput
  AND: [Nfl_playerSubscriptionWhereInput!]
  OR: [Nfl_playerSubscriptionWhereInput!]
  NOT: [Nfl_playerSubscriptionWhereInput!]
}

input Nfl_playerUpdateInput {
  display_name: String
  esb_id: String
  first_name: String
  gsis_id: String
  last_name: String
  nfl_feed_id: String
  nfl_team: Nfl_teamUpdateOneWithoutNfl_playersInput
  position: String
  position_group: String
  status: String
  team_players: Team_playerUpdateManyWithoutNfl_playerInput
}

input Nfl_playerUpdateManyMutationInput {
  display_name: String
  esb_id: String
  first_name: String
  gsis_id: String
  last_name: String
  nfl_feed_id: String
  position: String
  position_group: String
  status: String
}

input Nfl_playerUpdateManyWithoutNfl_teamInput {
  create: [Nfl_playerCreateWithoutNfl_teamInput!]
  delete: [Nfl_playerWhereUniqueInput!]
  connect: [Nfl_playerWhereUniqueInput!]
  disconnect: [Nfl_playerWhereUniqueInput!]
  update: [Nfl_playerUpdateWithWhereUniqueWithoutNfl_teamInput!]
  upsert: [Nfl_playerUpsertWithWhereUniqueWithoutNfl_teamInput!]
}

input Nfl_playerUpdateOneWithoutTeam_playersInput {
  create: Nfl_playerCreateWithoutTeam_playersInput
  update: Nfl_playerUpdateWithoutTeam_playersDataInput
  upsert: Nfl_playerUpsertWithoutTeam_playersInput
  delete: Boolean
  disconnect: Boolean
  connect: Nfl_playerWhereUniqueInput
}

input Nfl_playerUpdateWithoutNfl_teamDataInput {
  display_name: String
  esb_id: String
  first_name: String
  gsis_id: String
  last_name: String
  nfl_feed_id: String
  position: String
  position_group: String
  status: String
  team_players: Team_playerUpdateManyWithoutNfl_playerInput
}

input Nfl_playerUpdateWithoutTeam_playersDataInput {
  display_name: String
  esb_id: String
  first_name: String
  gsis_id: String
  last_name: String
  nfl_feed_id: String
  nfl_team: Nfl_teamUpdateOneWithoutNfl_playersInput
  position: String
  position_group: String
  status: String
}

input Nfl_playerUpdateWithWhereUniqueWithoutNfl_teamInput {
  where: Nfl_playerWhereUniqueInput!
  data: Nfl_playerUpdateWithoutNfl_teamDataInput!
}

input Nfl_playerUpsertWithoutTeam_playersInput {
  update: Nfl_playerUpdateWithoutTeam_playersDataInput!
  create: Nfl_playerCreateWithoutTeam_playersInput!
}

input Nfl_playerUpsertWithWhereUniqueWithoutNfl_teamInput {
  where: Nfl_playerWhereUniqueInput!
  update: Nfl_playerUpdateWithoutNfl_teamDataInput!
  create: Nfl_playerCreateWithoutNfl_teamInput!
}

input Nfl_playerWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  display_name: String
  display_name_not: String
  display_name_in: [String!]
  display_name_not_in: [String!]
  display_name_lt: String
  display_name_lte: String
  display_name_gt: String
  display_name_gte: String
  display_name_contains: String
  display_name_not_contains: String
  display_name_starts_with: String
  display_name_not_starts_with: String
  display_name_ends_with: String
  display_name_not_ends_with: String
  esb_id: String
  esb_id_not: String
  esb_id_in: [String!]
  esb_id_not_in: [String!]
  esb_id_lt: String
  esb_id_lte: String
  esb_id_gt: String
  esb_id_gte: String
  esb_id_contains: String
  esb_id_not_contains: String
  esb_id_starts_with: String
  esb_id_not_starts_with: String
  esb_id_ends_with: String
  esb_id_not_ends_with: String
  first_name: String
  first_name_not: String
  first_name_in: [String!]
  first_name_not_in: [String!]
  first_name_lt: String
  first_name_lte: String
  first_name_gt: String
  first_name_gte: String
  first_name_contains: String
  first_name_not_contains: String
  first_name_starts_with: String
  first_name_not_starts_with: String
  first_name_ends_with: String
  first_name_not_ends_with: String
  gsis_id: String
  gsis_id_not: String
  gsis_id_in: [String!]
  gsis_id_not_in: [String!]
  gsis_id_lt: String
  gsis_id_lte: String
  gsis_id_gt: String
  gsis_id_gte: String
  gsis_id_contains: String
  gsis_id_not_contains: String
  gsis_id_starts_with: String
  gsis_id_not_starts_with: String
  gsis_id_ends_with: String
  gsis_id_not_ends_with: String
  last_name: String
  last_name_not: String
  last_name_in: [String!]
  last_name_not_in: [String!]
  last_name_lt: String
  last_name_lte: String
  last_name_gt: String
  last_name_gte: String
  last_name_contains: String
  last_name_not_contains: String
  last_name_starts_with: String
  last_name_not_starts_with: String
  last_name_ends_with: String
  last_name_not_ends_with: String
  nfl_feed_id: String
  nfl_feed_id_not: String
  nfl_feed_id_in: [String!]
  nfl_feed_id_not_in: [String!]
  nfl_feed_id_lt: String
  nfl_feed_id_lte: String
  nfl_feed_id_gt: String
  nfl_feed_id_gte: String
  nfl_feed_id_contains: String
  nfl_feed_id_not_contains: String
  nfl_feed_id_starts_with: String
  nfl_feed_id_not_starts_with: String
  nfl_feed_id_ends_with: String
  nfl_feed_id_not_ends_with: String
  nfl_team: Nfl_teamWhereInput
  position: String
  position_not: String
  position_in: [String!]
  position_not_in: [String!]
  position_lt: String
  position_lte: String
  position_gt: String
  position_gte: String
  position_contains: String
  position_not_contains: String
  position_starts_with: String
  position_not_starts_with: String
  position_ends_with: String
  position_not_ends_with: String
  position_group: String
  position_group_not: String
  position_group_in: [String!]
  position_group_not_in: [String!]
  position_group_lt: String
  position_group_lte: String
  position_group_gt: String
  position_group_gte: String
  position_group_contains: String
  position_group_not_contains: String
  position_group_starts_with: String
  position_group_not_starts_with: String
  position_group_ends_with: String
  position_group_not_ends_with: String
  status: String
  status_not: String
  status_in: [String!]
  status_not_in: [String!]
  status_lt: String
  status_lte: String
  status_gt: String
  status_gte: String
  status_contains: String
  status_not_contains: String
  status_starts_with: String
  status_not_starts_with: String
  status_ends_with: String
  status_not_ends_with: String
  team_players_every: Team_playerWhereInput
  team_players_some: Team_playerWhereInput
  team_players_none: Team_playerWhereInput
  AND: [Nfl_playerWhereInput!]
  OR: [Nfl_playerWhereInput!]
  NOT: [Nfl_playerWhereInput!]
}

input Nfl_playerWhereUniqueInput {
  id: Int
  nfl_feed_id: String
}

type Nfl_team {
  id: Int!
  city: String
  code: String
  full_name: String
  name: String
  nfl_feed_id: String
  nfl_players(where: Nfl_playerWhereInput, orderBy: Nfl_playerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Nfl_player!]
}

type Nfl_teamConnection {
  pageInfo: PageInfo!
  edges: [Nfl_teamEdge]!
  aggregate: AggregateNfl_team!
}

input Nfl_teamCreateInput {
  city: String
  code: String
  full_name: String
  name: String
  nfl_feed_id: String
  nfl_players: Nfl_playerCreateManyWithoutNfl_teamInput
}

input Nfl_teamCreateOneWithoutNfl_playersInput {
  create: Nfl_teamCreateWithoutNfl_playersInput
  connect: Nfl_teamWhereUniqueInput
}

input Nfl_teamCreateWithoutNfl_playersInput {
  city: String
  code: String
  full_name: String
  name: String
  nfl_feed_id: String
}

type Nfl_teamEdge {
  node: Nfl_team!
  cursor: String!
}

enum Nfl_teamOrderByInput {
  id_ASC
  id_DESC
  city_ASC
  city_DESC
  code_ASC
  code_DESC
  full_name_ASC
  full_name_DESC
  name_ASC
  name_DESC
  nfl_feed_id_ASC
  nfl_feed_id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type Nfl_teamPreviousValues {
  id: Int!
  city: String
  code: String
  full_name: String
  name: String
  nfl_feed_id: String
}

type Nfl_teamSubscriptionPayload {
  mutation: MutationType!
  node: Nfl_team
  updatedFields: [String!]
  previousValues: Nfl_teamPreviousValues
}

input Nfl_teamSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: Nfl_teamWhereInput
  AND: [Nfl_teamSubscriptionWhereInput!]
  OR: [Nfl_teamSubscriptionWhereInput!]
  NOT: [Nfl_teamSubscriptionWhereInput!]
}

input Nfl_teamUpdateInput {
  city: String
  code: String
  full_name: String
  name: String
  nfl_feed_id: String
  nfl_players: Nfl_playerUpdateManyWithoutNfl_teamInput
}

input Nfl_teamUpdateManyMutationInput {
  city: String
  code: String
  full_name: String
  name: String
  nfl_feed_id: String
}

input Nfl_teamUpdateOneWithoutNfl_playersInput {
  create: Nfl_teamCreateWithoutNfl_playersInput
  update: Nfl_teamUpdateWithoutNfl_playersDataInput
  upsert: Nfl_teamUpsertWithoutNfl_playersInput
  delete: Boolean
  disconnect: Boolean
  connect: Nfl_teamWhereUniqueInput
}

input Nfl_teamUpdateWithoutNfl_playersDataInput {
  city: String
  code: String
  full_name: String
  name: String
  nfl_feed_id: String
}

input Nfl_teamUpsertWithoutNfl_playersInput {
  update: Nfl_teamUpdateWithoutNfl_playersDataInput!
  create: Nfl_teamCreateWithoutNfl_playersInput!
}

input Nfl_teamWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  full_name: String
  full_name_not: String
  full_name_in: [String!]
  full_name_not_in: [String!]
  full_name_lt: String
  full_name_lte: String
  full_name_gt: String
  full_name_gte: String
  full_name_contains: String
  full_name_not_contains: String
  full_name_starts_with: String
  full_name_not_starts_with: String
  full_name_ends_with: String
  full_name_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  nfl_feed_id: String
  nfl_feed_id_not: String
  nfl_feed_id_in: [String!]
  nfl_feed_id_not_in: [String!]
  nfl_feed_id_lt: String
  nfl_feed_id_lte: String
  nfl_feed_id_gt: String
  nfl_feed_id_gte: String
  nfl_feed_id_contains: String
  nfl_feed_id_not_contains: String
  nfl_feed_id_starts_with: String
  nfl_feed_id_not_starts_with: String
  nfl_feed_id_ends_with: String
  nfl_feed_id_not_ends_with: String
  nfl_players_every: Nfl_playerWhereInput
  nfl_players_some: Nfl_playerWhereInput
  nfl_players_none: Nfl_playerWhereInput
  AND: [Nfl_teamWhereInput!]
  OR: [Nfl_teamWhereInput!]
  NOT: [Nfl_teamWhereInput!]
}

input Nfl_teamWhereUniqueInput {
  id: Int
  nfl_feed_id: String
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  league(where: LeagueWhereUniqueInput!): League
  leagues(where: LeagueWhereInput, orderBy: LeagueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [League]!
  leaguesConnection(where: LeagueWhereInput, orderBy: LeagueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LeagueConnection!
  nfl_player(where: Nfl_playerWhereUniqueInput!): Nfl_player
  nfl_players(where: Nfl_playerWhereInput, orderBy: Nfl_playerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Nfl_player]!
  nfl_playersConnection(where: Nfl_playerWhereInput, orderBy: Nfl_playerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): Nfl_playerConnection!
  nfl_team(where: Nfl_teamWhereUniqueInput!): Nfl_team
  nfl_teams(where: Nfl_teamWhereInput, orderBy: Nfl_teamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Nfl_team]!
  nfl_teamsConnection(where: Nfl_teamWhereInput, orderBy: Nfl_teamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): Nfl_teamConnection!
  team(where: TeamWhereUniqueInput!): Team
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team]!
  teamsConnection(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TeamConnection!
  team_player(where: Team_playerWhereUniqueInput!): Team_player
  team_players(where: Team_playerWhereInput, orderBy: Team_playerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team_player]!
  team_playersConnection(where: Team_playerWhereInput, orderBy: Team_playerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): Team_playerConnection!
  node(id: ID!): Node
}

type Subscription {
  league(where: LeagueSubscriptionWhereInput): LeagueSubscriptionPayload
  nfl_player(where: Nfl_playerSubscriptionWhereInput): Nfl_playerSubscriptionPayload
  nfl_team(where: Nfl_teamSubscriptionWhereInput): Nfl_teamSubscriptionPayload
  team(where: TeamSubscriptionWhereInput): TeamSubscriptionPayload
  team_player(where: Team_playerSubscriptionWhereInput): Team_playerSubscriptionPayload
}

type Team {
  id: Int!
  league: League
  name: String!
  team_players(where: Team_playerWhereInput, orderBy: Team_playerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team_player!]
}

type Team_player {
  id: Int!
  nfl_player: Nfl_player
  team: Team
}

type Team_playerConnection {
  pageInfo: PageInfo!
  edges: [Team_playerEdge]!
  aggregate: AggregateTeam_player!
}

input Team_playerCreateInput {
  nfl_player: Nfl_playerCreateOneWithoutTeam_playersInput
  team: TeamCreateOneWithoutTeam_playersInput
}

input Team_playerCreateManyWithoutNfl_playerInput {
  create: [Team_playerCreateWithoutNfl_playerInput!]
  connect: [Team_playerWhereUniqueInput!]
}

input Team_playerCreateManyWithoutTeamInput {
  create: [Team_playerCreateWithoutTeamInput!]
  connect: [Team_playerWhereUniqueInput!]
}

input Team_playerCreateWithoutNfl_playerInput {
  team: TeamCreateOneWithoutTeam_playersInput
}

input Team_playerCreateWithoutTeamInput {
  nfl_player: Nfl_playerCreateOneWithoutTeam_playersInput
}

type Team_playerEdge {
  node: Team_player!
  cursor: String!
}

enum Team_playerOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type Team_playerPreviousValues {
  id: Int!
}

type Team_playerSubscriptionPayload {
  mutation: MutationType!
  node: Team_player
  updatedFields: [String!]
  previousValues: Team_playerPreviousValues
}

input Team_playerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: Team_playerWhereInput
  AND: [Team_playerSubscriptionWhereInput!]
  OR: [Team_playerSubscriptionWhereInput!]
  NOT: [Team_playerSubscriptionWhereInput!]
}

input Team_playerUpdateInput {
  nfl_player: Nfl_playerUpdateOneWithoutTeam_playersInput
  team: TeamUpdateOneWithoutTeam_playersInput
}

input Team_playerUpdateManyWithoutNfl_playerInput {
  create: [Team_playerCreateWithoutNfl_playerInput!]
  delete: [Team_playerWhereUniqueInput!]
  connect: [Team_playerWhereUniqueInput!]
  disconnect: [Team_playerWhereUniqueInput!]
  update: [Team_playerUpdateWithWhereUniqueWithoutNfl_playerInput!]
  upsert: [Team_playerUpsertWithWhereUniqueWithoutNfl_playerInput!]
}

input Team_playerUpdateManyWithoutTeamInput {
  create: [Team_playerCreateWithoutTeamInput!]
  delete: [Team_playerWhereUniqueInput!]
  connect: [Team_playerWhereUniqueInput!]
  disconnect: [Team_playerWhereUniqueInput!]
  update: [Team_playerUpdateWithWhereUniqueWithoutTeamInput!]
  upsert: [Team_playerUpsertWithWhereUniqueWithoutTeamInput!]
}

input Team_playerUpdateWithoutNfl_playerDataInput {
  team: TeamUpdateOneWithoutTeam_playersInput
}

input Team_playerUpdateWithoutTeamDataInput {
  nfl_player: Nfl_playerUpdateOneWithoutTeam_playersInput
}

input Team_playerUpdateWithWhereUniqueWithoutNfl_playerInput {
  where: Team_playerWhereUniqueInput!
  data: Team_playerUpdateWithoutNfl_playerDataInput!
}

input Team_playerUpdateWithWhereUniqueWithoutTeamInput {
  where: Team_playerWhereUniqueInput!
  data: Team_playerUpdateWithoutTeamDataInput!
}

input Team_playerUpsertWithWhereUniqueWithoutNfl_playerInput {
  where: Team_playerWhereUniqueInput!
  update: Team_playerUpdateWithoutNfl_playerDataInput!
  create: Team_playerCreateWithoutNfl_playerInput!
}

input Team_playerUpsertWithWhereUniqueWithoutTeamInput {
  where: Team_playerWhereUniqueInput!
  update: Team_playerUpdateWithoutTeamDataInput!
  create: Team_playerCreateWithoutTeamInput!
}

input Team_playerWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  nfl_player: Nfl_playerWhereInput
  team: TeamWhereInput
  AND: [Team_playerWhereInput!]
  OR: [Team_playerWhereInput!]
  NOT: [Team_playerWhereInput!]
}

input Team_playerWhereUniqueInput {
  id: Int
}

type TeamConnection {
  pageInfo: PageInfo!
  edges: [TeamEdge]!
  aggregate: AggregateTeam!
}

input TeamCreateInput {
  league: LeagueCreateOneWithoutTeamsInput
  name: String!
  team_players: Team_playerCreateManyWithoutTeamInput
}

input TeamCreateManyWithoutLeagueInput {
  create: [TeamCreateWithoutLeagueInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateOneWithoutTeam_playersInput {
  create: TeamCreateWithoutTeam_playersInput
  connect: TeamWhereUniqueInput
}

input TeamCreateWithoutLeagueInput {
  name: String!
  team_players: Team_playerCreateManyWithoutTeamInput
}

input TeamCreateWithoutTeam_playersInput {
  league: LeagueCreateOneWithoutTeamsInput
  name: String!
}

type TeamEdge {
  node: Team!
  cursor: String!
}

enum TeamOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TeamPreviousValues {
  id: Int!
  name: String!
}

type TeamSubscriptionPayload {
  mutation: MutationType!
  node: Team
  updatedFields: [String!]
  previousValues: TeamPreviousValues
}

input TeamSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TeamWhereInput
  AND: [TeamSubscriptionWhereInput!]
  OR: [TeamSubscriptionWhereInput!]
  NOT: [TeamSubscriptionWhereInput!]
}

input TeamUpdateInput {
  league: LeagueUpdateOneWithoutTeamsInput
  name: String
  team_players: Team_playerUpdateManyWithoutTeamInput
}

input TeamUpdateManyMutationInput {
  name: String
}

input TeamUpdateManyWithoutLeagueInput {
  create: [TeamCreateWithoutLeagueInput!]
  delete: [TeamWhereUniqueInput!]
  connect: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueWithoutLeagueInput!]
  upsert: [TeamUpsertWithWhereUniqueWithoutLeagueInput!]
}

input TeamUpdateOneWithoutTeam_playersInput {
  create: TeamCreateWithoutTeam_playersInput
  update: TeamUpdateWithoutTeam_playersDataInput
  upsert: TeamUpsertWithoutTeam_playersInput
  delete: Boolean
  disconnect: Boolean
  connect: TeamWhereUniqueInput
}

input TeamUpdateWithoutLeagueDataInput {
  name: String
  team_players: Team_playerUpdateManyWithoutTeamInput
}

input TeamUpdateWithoutTeam_playersDataInput {
  league: LeagueUpdateOneWithoutTeamsInput
  name: String
}

input TeamUpdateWithWhereUniqueWithoutLeagueInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutLeagueDataInput!
}

input TeamUpsertWithoutTeam_playersInput {
  update: TeamUpdateWithoutTeam_playersDataInput!
  create: TeamCreateWithoutTeam_playersInput!
}

input TeamUpsertWithWhereUniqueWithoutLeagueInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateWithoutLeagueDataInput!
  create: TeamCreateWithoutLeagueInput!
}

input TeamWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  league: LeagueWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  team_players_every: Team_playerWhereInput
  team_players_some: Team_playerWhereInput
  team_players_none: Team_playerWhereInput
  AND: [TeamWhereInput!]
  OR: [TeamWhereInput!]
  NOT: [TeamWhereInput!]
}

input TeamWhereUniqueInput {
  id: Int
}
`