export const typeDefs = /* GraphQL */ `type AggregateFlipGamePlayer {
  count: Int!
}

type AggregateLeague {
  count: Int!
}

type AggregateNflGame {
  count: Int!
}

type AggregateNflPlayer {
  count: Int!
}

type AggregateNflTeam {
  count: Int!
}

type AggregateTeam {
  count: Int!
}

type AggregateTeamPlayer {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type FlipGamePlayer {
  id: Int!
  game: NflGame!
  team: NflTeam!
  position: FlipPosition!
  player: NflPlayer!
}

type FlipGamePlayerConnection {
  pageInfo: PageInfo!
  edges: [FlipGamePlayerEdge]!
  aggregate: AggregateFlipGamePlayer!
}

input FlipGamePlayerCreateInput {
  game: NflGameCreateOneInput!
  team: NflTeamCreateOneInput!
  position: FlipPosition!
  player: NflPlayerCreateOneInput!
}

type FlipGamePlayerEdge {
  node: FlipGamePlayer!
  cursor: String!
}

enum FlipGamePlayerOrderByInput {
  id_ASC
  id_DESC
  position_ASC
  position_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FlipGamePlayerPreviousValues {
  id: Int!
  position: FlipPosition!
}

type FlipGamePlayerSubscriptionPayload {
  mutation: MutationType!
  node: FlipGamePlayer
  updatedFields: [String!]
  previousValues: FlipGamePlayerPreviousValues
}

input FlipGamePlayerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FlipGamePlayerWhereInput
  AND: [FlipGamePlayerSubscriptionWhereInput!]
  OR: [FlipGamePlayerSubscriptionWhereInput!]
  NOT: [FlipGamePlayerSubscriptionWhereInput!]
}

input FlipGamePlayerUpdateInput {
  game: NflGameUpdateOneRequiredInput
  team: NflTeamUpdateOneRequiredInput
  position: FlipPosition
  player: NflPlayerUpdateOneRequiredInput
}

input FlipGamePlayerUpdateManyMutationInput {
  position: FlipPosition
}

input FlipGamePlayerWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  game: NflGameWhereInput
  team: NflTeamWhereInput
  position: FlipPosition
  position_not: FlipPosition
  position_in: [FlipPosition!]
  position_not_in: [FlipPosition!]
  player: NflPlayerWhereInput
  AND: [FlipGamePlayerWhereInput!]
  OR: [FlipGamePlayerWhereInput!]
  NOT: [FlipGamePlayerWhereInput!]
}

input FlipGamePlayerWhereUniqueInput {
  id: Int
}

enum FlipPosition {
  QB
  WR1
  WR2
  RB
  TE
}

enum GameSeasonType {
  PRE
  REG
}

type League {
  id: Int!
  name: String!
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
}

type LeagueConnection {
  pageInfo: PageInfo!
  edges: [LeagueEdge]!
  aggregate: AggregateLeague!
}

input LeagueCreateInput {
  name: String!
  teams: TeamCreateManyWithoutLeagueInput
}

input LeagueCreateOneWithoutTeamsInput {
  create: LeagueCreateWithoutTeamsInput
  connect: LeagueWhereUniqueInput
}

input LeagueCreateWithoutTeamsInput {
  name: String!
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
  name: String!
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

input LeagueUpdateOneRequiredWithoutTeamsInput {
  create: LeagueCreateWithoutTeamsInput
  update: LeagueUpdateWithoutTeamsDataInput
  upsert: LeagueUpsertWithoutTeamsInput
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
  createFlipGamePlayer(data: FlipGamePlayerCreateInput!): FlipGamePlayer!
  updateFlipGamePlayer(data: FlipGamePlayerUpdateInput!, where: FlipGamePlayerWhereUniqueInput!): FlipGamePlayer
  updateManyFlipGamePlayers(data: FlipGamePlayerUpdateManyMutationInput!, where: FlipGamePlayerWhereInput): BatchPayload!
  upsertFlipGamePlayer(where: FlipGamePlayerWhereUniqueInput!, create: FlipGamePlayerCreateInput!, update: FlipGamePlayerUpdateInput!): FlipGamePlayer!
  deleteFlipGamePlayer(where: FlipGamePlayerWhereUniqueInput!): FlipGamePlayer
  deleteManyFlipGamePlayers(where: FlipGamePlayerWhereInput): BatchPayload!
  createLeague(data: LeagueCreateInput!): League!
  updateLeague(data: LeagueUpdateInput!, where: LeagueWhereUniqueInput!): League
  updateManyLeagues(data: LeagueUpdateManyMutationInput!, where: LeagueWhereInput): BatchPayload!
  upsertLeague(where: LeagueWhereUniqueInput!, create: LeagueCreateInput!, update: LeagueUpdateInput!): League!
  deleteLeague(where: LeagueWhereUniqueInput!): League
  deleteManyLeagues(where: LeagueWhereInput): BatchPayload!
  createNflGame(data: NflGameCreateInput!): NflGame!
  updateNflGame(data: NflGameUpdateInput!, where: NflGameWhereUniqueInput!): NflGame
  updateManyNflGames(data: NflGameUpdateManyMutationInput!, where: NflGameWhereInput): BatchPayload!
  upsertNflGame(where: NflGameWhereUniqueInput!, create: NflGameCreateInput!, update: NflGameUpdateInput!): NflGame!
  deleteNflGame(where: NflGameWhereUniqueInput!): NflGame
  deleteManyNflGames(where: NflGameWhereInput): BatchPayload!
  createNflPlayer(data: NflPlayerCreateInput!): NflPlayer!
  updateNflPlayer(data: NflPlayerUpdateInput!, where: NflPlayerWhereUniqueInput!): NflPlayer
  updateManyNflPlayers(data: NflPlayerUpdateManyMutationInput!, where: NflPlayerWhereInput): BatchPayload!
  upsertNflPlayer(where: NflPlayerWhereUniqueInput!, create: NflPlayerCreateInput!, update: NflPlayerUpdateInput!): NflPlayer!
  deleteNflPlayer(where: NflPlayerWhereUniqueInput!): NflPlayer
  deleteManyNflPlayers(where: NflPlayerWhereInput): BatchPayload!
  createNflTeam(data: NflTeamCreateInput!): NflTeam!
  updateNflTeam(data: NflTeamUpdateInput!, where: NflTeamWhereUniqueInput!): NflTeam
  updateManyNflTeams(data: NflTeamUpdateManyMutationInput!, where: NflTeamWhereInput): BatchPayload!
  upsertNflTeam(where: NflTeamWhereUniqueInput!, create: NflTeamCreateInput!, update: NflTeamUpdateInput!): NflTeam!
  deleteNflTeam(where: NflTeamWhereUniqueInput!): NflTeam
  deleteManyNflTeams(where: NflTeamWhereInput): BatchPayload!
  createTeam(data: TeamCreateInput!): Team!
  updateTeam(data: TeamUpdateInput!, where: TeamWhereUniqueInput!): Team
  updateManyTeams(data: TeamUpdateManyMutationInput!, where: TeamWhereInput): BatchPayload!
  upsertTeam(where: TeamWhereUniqueInput!, create: TeamCreateInput!, update: TeamUpdateInput!): Team!
  deleteTeam(where: TeamWhereUniqueInput!): Team
  deleteManyTeams(where: TeamWhereInput): BatchPayload!
  createTeamPlayer(data: TeamPlayerCreateInput!): TeamPlayer!
  updateTeamPlayer(data: TeamPlayerUpdateInput!, where: TeamPlayerWhereUniqueInput!): TeamPlayer
  upsertTeamPlayer(where: TeamPlayerWhereUniqueInput!, create: TeamPlayerCreateInput!, update: TeamPlayerUpdateInput!): TeamPlayer!
  deleteTeamPlayer(where: TeamPlayerWhereUniqueInput!): TeamPlayer
  deleteManyTeamPlayers(where: TeamPlayerWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

type NflGame {
  id: Int!
  away_team: NflTeam!
  home_team: NflTeam!
  week: Int!
  season: Int!
  nfl_feed_id: Int!
  nfl_feed_key: Int!
  start: DateTime!
  season_type: GameSeasonType!
}

type NflGameConnection {
  pageInfo: PageInfo!
  edges: [NflGameEdge]!
  aggregate: AggregateNflGame!
}

input NflGameCreateInput {
  away_team: NflTeamCreateOneInput!
  home_team: NflTeamCreateOneInput!
  week: Int!
  season: Int!
  nfl_feed_id: Int!
  nfl_feed_key: Int!
  start: DateTime!
  season_type: GameSeasonType!
}

input NflGameCreateOneInput {
  create: NflGameCreateInput
  connect: NflGameWhereUniqueInput
}

type NflGameEdge {
  node: NflGame!
  cursor: String!
}

enum NflGameOrderByInput {
  id_ASC
  id_DESC
  week_ASC
  week_DESC
  season_ASC
  season_DESC
  nfl_feed_id_ASC
  nfl_feed_id_DESC
  nfl_feed_key_ASC
  nfl_feed_key_DESC
  start_ASC
  start_DESC
  season_type_ASC
  season_type_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type NflGamePreviousValues {
  id: Int!
  week: Int!
  season: Int!
  nfl_feed_id: Int!
  nfl_feed_key: Int!
  start: DateTime!
  season_type: GameSeasonType!
}

type NflGameSubscriptionPayload {
  mutation: MutationType!
  node: NflGame
  updatedFields: [String!]
  previousValues: NflGamePreviousValues
}

input NflGameSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NflGameWhereInput
  AND: [NflGameSubscriptionWhereInput!]
  OR: [NflGameSubscriptionWhereInput!]
  NOT: [NflGameSubscriptionWhereInput!]
}

input NflGameUpdateDataInput {
  away_team: NflTeamUpdateOneRequiredInput
  home_team: NflTeamUpdateOneRequiredInput
  week: Int
  season: Int
  nfl_feed_id: Int
  nfl_feed_key: Int
  start: DateTime
  season_type: GameSeasonType
}

input NflGameUpdateInput {
  away_team: NflTeamUpdateOneRequiredInput
  home_team: NflTeamUpdateOneRequiredInput
  week: Int
  season: Int
  nfl_feed_id: Int
  nfl_feed_key: Int
  start: DateTime
  season_type: GameSeasonType
}

input NflGameUpdateManyMutationInput {
  week: Int
  season: Int
  nfl_feed_id: Int
  nfl_feed_key: Int
  start: DateTime
  season_type: GameSeasonType
}

input NflGameUpdateOneRequiredInput {
  create: NflGameCreateInput
  update: NflGameUpdateDataInput
  upsert: NflGameUpsertNestedInput
  connect: NflGameWhereUniqueInput
}

input NflGameUpsertNestedInput {
  update: NflGameUpdateDataInput!
  create: NflGameCreateInput!
}

input NflGameWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  away_team: NflTeamWhereInput
  home_team: NflTeamWhereInput
  week: Int
  week_not: Int
  week_in: [Int!]
  week_not_in: [Int!]
  week_lt: Int
  week_lte: Int
  week_gt: Int
  week_gte: Int
  season: Int
  season_not: Int
  season_in: [Int!]
  season_not_in: [Int!]
  season_lt: Int
  season_lte: Int
  season_gt: Int
  season_gte: Int
  nfl_feed_id: Int
  nfl_feed_id_not: Int
  nfl_feed_id_in: [Int!]
  nfl_feed_id_not_in: [Int!]
  nfl_feed_id_lt: Int
  nfl_feed_id_lte: Int
  nfl_feed_id_gt: Int
  nfl_feed_id_gte: Int
  nfl_feed_key: Int
  nfl_feed_key_not: Int
  nfl_feed_key_in: [Int!]
  nfl_feed_key_not_in: [Int!]
  nfl_feed_key_lt: Int
  nfl_feed_key_lte: Int
  nfl_feed_key_gt: Int
  nfl_feed_key_gte: Int
  start: DateTime
  start_not: DateTime
  start_in: [DateTime!]
  start_not_in: [DateTime!]
  start_lt: DateTime
  start_lte: DateTime
  start_gt: DateTime
  start_gte: DateTime
  season_type: GameSeasonType
  season_type_not: GameSeasonType
  season_type_in: [GameSeasonType!]
  season_type_not_in: [GameSeasonType!]
  AND: [NflGameWhereInput!]
  OR: [NflGameWhereInput!]
  NOT: [NflGameWhereInput!]
}

input NflGameWhereUniqueInput {
  id: Int
  nfl_feed_id: Int
  nfl_feed_key: Int
}

type NflPlayer {
  id: Int!
  display_name: String!
  esb_id: String!
  first_name: String!
  gsis_id: String
  last_name: String!
  nfl_feed_id: Int!
  nfl_team: NflTeam!
  position: String!
  position_group: String!
  status: String!
  team_players(where: TeamPlayerWhereInput, orderBy: TeamPlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TeamPlayer!]
}

type NflPlayerConnection {
  pageInfo: PageInfo!
  edges: [NflPlayerEdge]!
  aggregate: AggregateNflPlayer!
}

input NflPlayerCreateInput {
  display_name: String!
  esb_id: String!
  first_name: String!
  gsis_id: String
  last_name: String!
  nfl_feed_id: Int!
  nfl_team: NflTeamCreateOneWithoutNfl_playersInput!
  position: String!
  position_group: String!
  status: String!
  team_players: TeamPlayerCreateManyWithoutNfl_playerInput
}

input NflPlayerCreateManyWithoutNfl_teamInput {
  create: [NflPlayerCreateWithoutNfl_teamInput!]
  connect: [NflPlayerWhereUniqueInput!]
}

input NflPlayerCreateOneInput {
  create: NflPlayerCreateInput
  connect: NflPlayerWhereUniqueInput
}

input NflPlayerCreateOneWithoutTeam_playersInput {
  create: NflPlayerCreateWithoutTeam_playersInput
  connect: NflPlayerWhereUniqueInput
}

input NflPlayerCreateWithoutNfl_teamInput {
  display_name: String!
  esb_id: String!
  first_name: String!
  gsis_id: String
  last_name: String!
  nfl_feed_id: Int!
  position: String!
  position_group: String!
  status: String!
  team_players: TeamPlayerCreateManyWithoutNfl_playerInput
}

input NflPlayerCreateWithoutTeam_playersInput {
  display_name: String!
  esb_id: String!
  first_name: String!
  gsis_id: String
  last_name: String!
  nfl_feed_id: Int!
  nfl_team: NflTeamCreateOneWithoutNfl_playersInput!
  position: String!
  position_group: String!
  status: String!
}

type NflPlayerEdge {
  node: NflPlayer!
  cursor: String!
}

enum NflPlayerOrderByInput {
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

type NflPlayerPreviousValues {
  id: Int!
  display_name: String!
  esb_id: String!
  first_name: String!
  gsis_id: String
  last_name: String!
  nfl_feed_id: Int!
  position: String!
  position_group: String!
  status: String!
}

input NflPlayerScalarWhereInput {
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
  nfl_feed_id: Int
  nfl_feed_id_not: Int
  nfl_feed_id_in: [Int!]
  nfl_feed_id_not_in: [Int!]
  nfl_feed_id_lt: Int
  nfl_feed_id_lte: Int
  nfl_feed_id_gt: Int
  nfl_feed_id_gte: Int
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
  AND: [NflPlayerScalarWhereInput!]
  OR: [NflPlayerScalarWhereInput!]
  NOT: [NflPlayerScalarWhereInput!]
}

type NflPlayerSubscriptionPayload {
  mutation: MutationType!
  node: NflPlayer
  updatedFields: [String!]
  previousValues: NflPlayerPreviousValues
}

input NflPlayerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NflPlayerWhereInput
  AND: [NflPlayerSubscriptionWhereInput!]
  OR: [NflPlayerSubscriptionWhereInput!]
  NOT: [NflPlayerSubscriptionWhereInput!]
}

input NflPlayerUpdateDataInput {
  display_name: String
  esb_id: String
  first_name: String
  gsis_id: String
  last_name: String
  nfl_feed_id: Int
  nfl_team: NflTeamUpdateOneRequiredWithoutNfl_playersInput
  position: String
  position_group: String
  status: String
  team_players: TeamPlayerUpdateManyWithoutNfl_playerInput
}

input NflPlayerUpdateInput {
  display_name: String
  esb_id: String
  first_name: String
  gsis_id: String
  last_name: String
  nfl_feed_id: Int
  nfl_team: NflTeamUpdateOneRequiredWithoutNfl_playersInput
  position: String
  position_group: String
  status: String
  team_players: TeamPlayerUpdateManyWithoutNfl_playerInput
}

input NflPlayerUpdateManyDataInput {
  display_name: String
  esb_id: String
  first_name: String
  gsis_id: String
  last_name: String
  nfl_feed_id: Int
  position: String
  position_group: String
  status: String
}

input NflPlayerUpdateManyMutationInput {
  display_name: String
  esb_id: String
  first_name: String
  gsis_id: String
  last_name: String
  nfl_feed_id: Int
  position: String
  position_group: String
  status: String
}

input NflPlayerUpdateManyWithoutNfl_teamInput {
  create: [NflPlayerCreateWithoutNfl_teamInput!]
  delete: [NflPlayerWhereUniqueInput!]
  connect: [NflPlayerWhereUniqueInput!]
  disconnect: [NflPlayerWhereUniqueInput!]
  update: [NflPlayerUpdateWithWhereUniqueWithoutNfl_teamInput!]
  upsert: [NflPlayerUpsertWithWhereUniqueWithoutNfl_teamInput!]
  deleteMany: [NflPlayerScalarWhereInput!]
  updateMany: [NflPlayerUpdateManyWithWhereNestedInput!]
}

input NflPlayerUpdateManyWithWhereNestedInput {
  where: NflPlayerScalarWhereInput!
  data: NflPlayerUpdateManyDataInput!
}

input NflPlayerUpdateOneRequiredInput {
  create: NflPlayerCreateInput
  update: NflPlayerUpdateDataInput
  upsert: NflPlayerUpsertNestedInput
  connect: NflPlayerWhereUniqueInput
}

input NflPlayerUpdateOneRequiredWithoutTeam_playersInput {
  create: NflPlayerCreateWithoutTeam_playersInput
  update: NflPlayerUpdateWithoutTeam_playersDataInput
  upsert: NflPlayerUpsertWithoutTeam_playersInput
  connect: NflPlayerWhereUniqueInput
}

input NflPlayerUpdateWithoutNfl_teamDataInput {
  display_name: String
  esb_id: String
  first_name: String
  gsis_id: String
  last_name: String
  nfl_feed_id: Int
  position: String
  position_group: String
  status: String
  team_players: TeamPlayerUpdateManyWithoutNfl_playerInput
}

input NflPlayerUpdateWithoutTeam_playersDataInput {
  display_name: String
  esb_id: String
  first_name: String
  gsis_id: String
  last_name: String
  nfl_feed_id: Int
  nfl_team: NflTeamUpdateOneRequiredWithoutNfl_playersInput
  position: String
  position_group: String
  status: String
}

input NflPlayerUpdateWithWhereUniqueWithoutNfl_teamInput {
  where: NflPlayerWhereUniqueInput!
  data: NflPlayerUpdateWithoutNfl_teamDataInput!
}

input NflPlayerUpsertNestedInput {
  update: NflPlayerUpdateDataInput!
  create: NflPlayerCreateInput!
}

input NflPlayerUpsertWithoutTeam_playersInput {
  update: NflPlayerUpdateWithoutTeam_playersDataInput!
  create: NflPlayerCreateWithoutTeam_playersInput!
}

input NflPlayerUpsertWithWhereUniqueWithoutNfl_teamInput {
  where: NflPlayerWhereUniqueInput!
  update: NflPlayerUpdateWithoutNfl_teamDataInput!
  create: NflPlayerCreateWithoutNfl_teamInput!
}

input NflPlayerWhereInput {
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
  nfl_feed_id: Int
  nfl_feed_id_not: Int
  nfl_feed_id_in: [Int!]
  nfl_feed_id_not_in: [Int!]
  nfl_feed_id_lt: Int
  nfl_feed_id_lte: Int
  nfl_feed_id_gt: Int
  nfl_feed_id_gte: Int
  nfl_team: NflTeamWhereInput
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
  team_players_every: TeamPlayerWhereInput
  team_players_some: TeamPlayerWhereInput
  team_players_none: TeamPlayerWhereInput
  AND: [NflPlayerWhereInput!]
  OR: [NflPlayerWhereInput!]
  NOT: [NflPlayerWhereInput!]
}

input NflPlayerWhereUniqueInput {
  id: Int
  nfl_feed_id: Int
}

type NflTeam {
  id: Int!
  city: String!
  code: String!
  full_name: String!
  name: String!
  nfl_feed_id: String!
  nfl_players(where: NflPlayerWhereInput, orderBy: NflPlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [NflPlayer!]
}

type NflTeamConnection {
  pageInfo: PageInfo!
  edges: [NflTeamEdge]!
  aggregate: AggregateNflTeam!
}

input NflTeamCreateInput {
  city: String!
  code: String!
  full_name: String!
  name: String!
  nfl_feed_id: String!
  nfl_players: NflPlayerCreateManyWithoutNfl_teamInput
}

input NflTeamCreateOneInput {
  create: NflTeamCreateInput
  connect: NflTeamWhereUniqueInput
}

input NflTeamCreateOneWithoutNfl_playersInput {
  create: NflTeamCreateWithoutNfl_playersInput
  connect: NflTeamWhereUniqueInput
}

input NflTeamCreateWithoutNfl_playersInput {
  city: String!
  code: String!
  full_name: String!
  name: String!
  nfl_feed_id: String!
}

type NflTeamEdge {
  node: NflTeam!
  cursor: String!
}

enum NflTeamOrderByInput {
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

type NflTeamPreviousValues {
  id: Int!
  city: String!
  code: String!
  full_name: String!
  name: String!
  nfl_feed_id: String!
}

type NflTeamSubscriptionPayload {
  mutation: MutationType!
  node: NflTeam
  updatedFields: [String!]
  previousValues: NflTeamPreviousValues
}

input NflTeamSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NflTeamWhereInput
  AND: [NflTeamSubscriptionWhereInput!]
  OR: [NflTeamSubscriptionWhereInput!]
  NOT: [NflTeamSubscriptionWhereInput!]
}

input NflTeamUpdateDataInput {
  city: String
  code: String
  full_name: String
  name: String
  nfl_feed_id: String
  nfl_players: NflPlayerUpdateManyWithoutNfl_teamInput
}

input NflTeamUpdateInput {
  city: String
  code: String
  full_name: String
  name: String
  nfl_feed_id: String
  nfl_players: NflPlayerUpdateManyWithoutNfl_teamInput
}

input NflTeamUpdateManyMutationInput {
  city: String
  code: String
  full_name: String
  name: String
  nfl_feed_id: String
}

input NflTeamUpdateOneRequiredInput {
  create: NflTeamCreateInput
  update: NflTeamUpdateDataInput
  upsert: NflTeamUpsertNestedInput
  connect: NflTeamWhereUniqueInput
}

input NflTeamUpdateOneRequiredWithoutNfl_playersInput {
  create: NflTeamCreateWithoutNfl_playersInput
  update: NflTeamUpdateWithoutNfl_playersDataInput
  upsert: NflTeamUpsertWithoutNfl_playersInput
  connect: NflTeamWhereUniqueInput
}

input NflTeamUpdateWithoutNfl_playersDataInput {
  city: String
  code: String
  full_name: String
  name: String
  nfl_feed_id: String
}

input NflTeamUpsertNestedInput {
  update: NflTeamUpdateDataInput!
  create: NflTeamCreateInput!
}

input NflTeamUpsertWithoutNfl_playersInput {
  update: NflTeamUpdateWithoutNfl_playersDataInput!
  create: NflTeamCreateWithoutNfl_playersInput!
}

input NflTeamWhereInput {
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
  nfl_players_every: NflPlayerWhereInput
  nfl_players_some: NflPlayerWhereInput
  nfl_players_none: NflPlayerWhereInput
  AND: [NflTeamWhereInput!]
  OR: [NflTeamWhereInput!]
  NOT: [NflTeamWhereInput!]
}

input NflTeamWhereUniqueInput {
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
  flipGamePlayer(where: FlipGamePlayerWhereUniqueInput!): FlipGamePlayer
  flipGamePlayers(where: FlipGamePlayerWhereInput, orderBy: FlipGamePlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FlipGamePlayer]!
  flipGamePlayersConnection(where: FlipGamePlayerWhereInput, orderBy: FlipGamePlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FlipGamePlayerConnection!
  league(where: LeagueWhereUniqueInput!): League
  leagues(where: LeagueWhereInput, orderBy: LeagueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [League]!
  leaguesConnection(where: LeagueWhereInput, orderBy: LeagueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LeagueConnection!
  nflGame(where: NflGameWhereUniqueInput!): NflGame
  nflGames(where: NflGameWhereInput, orderBy: NflGameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [NflGame]!
  nflGamesConnection(where: NflGameWhereInput, orderBy: NflGameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NflGameConnection!
  nflPlayer(where: NflPlayerWhereUniqueInput!): NflPlayer
  nflPlayers(where: NflPlayerWhereInput, orderBy: NflPlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [NflPlayer]!
  nflPlayersConnection(where: NflPlayerWhereInput, orderBy: NflPlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NflPlayerConnection!
  nflTeam(where: NflTeamWhereUniqueInput!): NflTeam
  nflTeams(where: NflTeamWhereInput, orderBy: NflTeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [NflTeam]!
  nflTeamsConnection(where: NflTeamWhereInput, orderBy: NflTeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NflTeamConnection!
  team(where: TeamWhereUniqueInput!): Team
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team]!
  teamsConnection(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TeamConnection!
  teamPlayer(where: TeamPlayerWhereUniqueInput!): TeamPlayer
  teamPlayers(where: TeamPlayerWhereInput, orderBy: TeamPlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TeamPlayer]!
  teamPlayersConnection(where: TeamPlayerWhereInput, orderBy: TeamPlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TeamPlayerConnection!
  node(id: ID!): Node
}

type Subscription {
  flipGamePlayer(where: FlipGamePlayerSubscriptionWhereInput): FlipGamePlayerSubscriptionPayload
  league(where: LeagueSubscriptionWhereInput): LeagueSubscriptionPayload
  nflGame(where: NflGameSubscriptionWhereInput): NflGameSubscriptionPayload
  nflPlayer(where: NflPlayerSubscriptionWhereInput): NflPlayerSubscriptionPayload
  nflTeam(where: NflTeamSubscriptionWhereInput): NflTeamSubscriptionPayload
  team(where: TeamSubscriptionWhereInput): TeamSubscriptionPayload
  teamPlayer(where: TeamPlayerSubscriptionWhereInput): TeamPlayerSubscriptionPayload
}

type Team {
  id: Int!
  league: League!
  name: String!
  team_players(where: TeamPlayerWhereInput, orderBy: TeamPlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TeamPlayer!]
}

type TeamConnection {
  pageInfo: PageInfo!
  edges: [TeamEdge]!
  aggregate: AggregateTeam!
}

input TeamCreateInput {
  league: LeagueCreateOneWithoutTeamsInput!
  name: String!
  team_players: TeamPlayerCreateManyWithoutTeamInput
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
  team_players: TeamPlayerCreateManyWithoutTeamInput
}

input TeamCreateWithoutTeam_playersInput {
  league: LeagueCreateOneWithoutTeamsInput!
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

type TeamPlayer {
  id: Int!
  nfl_player: NflPlayer!
  team: Team!
}

type TeamPlayerConnection {
  pageInfo: PageInfo!
  edges: [TeamPlayerEdge]!
  aggregate: AggregateTeamPlayer!
}

input TeamPlayerCreateInput {
  nfl_player: NflPlayerCreateOneWithoutTeam_playersInput!
  team: TeamCreateOneWithoutTeam_playersInput!
}

input TeamPlayerCreateManyWithoutNfl_playerInput {
  create: [TeamPlayerCreateWithoutNfl_playerInput!]
  connect: [TeamPlayerWhereUniqueInput!]
}

input TeamPlayerCreateManyWithoutTeamInput {
  create: [TeamPlayerCreateWithoutTeamInput!]
  connect: [TeamPlayerWhereUniqueInput!]
}

input TeamPlayerCreateWithoutNfl_playerInput {
  team: TeamCreateOneWithoutTeam_playersInput!
}

input TeamPlayerCreateWithoutTeamInput {
  nfl_player: NflPlayerCreateOneWithoutTeam_playersInput!
}

type TeamPlayerEdge {
  node: TeamPlayer!
  cursor: String!
}

enum TeamPlayerOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TeamPlayerPreviousValues {
  id: Int!
}

input TeamPlayerScalarWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  AND: [TeamPlayerScalarWhereInput!]
  OR: [TeamPlayerScalarWhereInput!]
  NOT: [TeamPlayerScalarWhereInput!]
}

type TeamPlayerSubscriptionPayload {
  mutation: MutationType!
  node: TeamPlayer
  updatedFields: [String!]
  previousValues: TeamPlayerPreviousValues
}

input TeamPlayerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TeamPlayerWhereInput
  AND: [TeamPlayerSubscriptionWhereInput!]
  OR: [TeamPlayerSubscriptionWhereInput!]
  NOT: [TeamPlayerSubscriptionWhereInput!]
}

input TeamPlayerUpdateInput {
  nfl_player: NflPlayerUpdateOneRequiredWithoutTeam_playersInput
  team: TeamUpdateOneRequiredWithoutTeam_playersInput
}

input TeamPlayerUpdateManyWithoutNfl_playerInput {
  create: [TeamPlayerCreateWithoutNfl_playerInput!]
  delete: [TeamPlayerWhereUniqueInput!]
  connect: [TeamPlayerWhereUniqueInput!]
  disconnect: [TeamPlayerWhereUniqueInput!]
  update: [TeamPlayerUpdateWithWhereUniqueWithoutNfl_playerInput!]
  upsert: [TeamPlayerUpsertWithWhereUniqueWithoutNfl_playerInput!]
  deleteMany: [TeamPlayerScalarWhereInput!]
}

input TeamPlayerUpdateManyWithoutTeamInput {
  create: [TeamPlayerCreateWithoutTeamInput!]
  delete: [TeamPlayerWhereUniqueInput!]
  connect: [TeamPlayerWhereUniqueInput!]
  disconnect: [TeamPlayerWhereUniqueInput!]
  update: [TeamPlayerUpdateWithWhereUniqueWithoutTeamInput!]
  upsert: [TeamPlayerUpsertWithWhereUniqueWithoutTeamInput!]
  deleteMany: [TeamPlayerScalarWhereInput!]
}

input TeamPlayerUpdateWithoutNfl_playerDataInput {
  team: TeamUpdateOneRequiredWithoutTeam_playersInput
}

input TeamPlayerUpdateWithoutTeamDataInput {
  nfl_player: NflPlayerUpdateOneRequiredWithoutTeam_playersInput
}

input TeamPlayerUpdateWithWhereUniqueWithoutNfl_playerInput {
  where: TeamPlayerWhereUniqueInput!
  data: TeamPlayerUpdateWithoutNfl_playerDataInput!
}

input TeamPlayerUpdateWithWhereUniqueWithoutTeamInput {
  where: TeamPlayerWhereUniqueInput!
  data: TeamPlayerUpdateWithoutTeamDataInput!
}

input TeamPlayerUpsertWithWhereUniqueWithoutNfl_playerInput {
  where: TeamPlayerWhereUniqueInput!
  update: TeamPlayerUpdateWithoutNfl_playerDataInput!
  create: TeamPlayerCreateWithoutNfl_playerInput!
}

input TeamPlayerUpsertWithWhereUniqueWithoutTeamInput {
  where: TeamPlayerWhereUniqueInput!
  update: TeamPlayerUpdateWithoutTeamDataInput!
  create: TeamPlayerCreateWithoutTeamInput!
}

input TeamPlayerWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  nfl_player: NflPlayerWhereInput
  team: TeamWhereInput
  AND: [TeamPlayerWhereInput!]
  OR: [TeamPlayerWhereInput!]
  NOT: [TeamPlayerWhereInput!]
}

input TeamPlayerWhereUniqueInput {
  id: Int
}

type TeamPreviousValues {
  id: Int!
  name: String!
}

input TeamScalarWhereInput {
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
  AND: [TeamScalarWhereInput!]
  OR: [TeamScalarWhereInput!]
  NOT: [TeamScalarWhereInput!]
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
  league: LeagueUpdateOneRequiredWithoutTeamsInput
  name: String
  team_players: TeamPlayerUpdateManyWithoutTeamInput
}

input TeamUpdateManyDataInput {
  name: String
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
  deleteMany: [TeamScalarWhereInput!]
  updateMany: [TeamUpdateManyWithWhereNestedInput!]
}

input TeamUpdateManyWithWhereNestedInput {
  where: TeamScalarWhereInput!
  data: TeamUpdateManyDataInput!
}

input TeamUpdateOneRequiredWithoutTeam_playersInput {
  create: TeamCreateWithoutTeam_playersInput
  update: TeamUpdateWithoutTeam_playersDataInput
  upsert: TeamUpsertWithoutTeam_playersInput
  connect: TeamWhereUniqueInput
}

input TeamUpdateWithoutLeagueDataInput {
  name: String
  team_players: TeamPlayerUpdateManyWithoutTeamInput
}

input TeamUpdateWithoutTeam_playersDataInput {
  league: LeagueUpdateOneRequiredWithoutTeamsInput
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
  team_players_every: TeamPlayerWhereInput
  team_players_some: TeamPlayerWhereInput
  team_players_none: TeamPlayerWhereInput
  AND: [TeamWhereInput!]
  OR: [TeamWhereInput!]
  NOT: [TeamWhereInput!]
}

input TeamWhereUniqueInput {
  id: Int
}
`