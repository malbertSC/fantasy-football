export const typeDefs = /* GraphQL */ `type AggregateFlipGamePlayer {
  count: Int!
}

type AggregateLeague {
  count: Int!
}

type AggregateLeagueLineup {
  count: Int!
}

type AggregateLeagueMember {
  count: Int!
}

type AggregateLineup {
  count: Int!
}

type AggregateLineupPlayer {
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

type AggregateUser {
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
  league_lineups(where: LeagueLineupWhereInput, orderBy: LeagueLineupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LeagueLineup!]
  league_members(where: LeagueMemberWhereInput, orderBy: LeagueMemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LeagueMember!]
  owner_user: User!
}

type LeagueConnection {
  pageInfo: PageInfo!
  edges: [LeagueEdge]!
  aggregate: AggregateLeague!
}

input LeagueCreateInput {
  name: String!
  league_lineups: LeagueLineupCreateManyWithoutLeagueInput
  league_members: LeagueMemberCreateManyWithoutLeagueInput
  owner_user: UserCreateOneWithoutLeaguesInput!
}

input LeagueCreateManyInput {
  create: [LeagueCreateInput!]
  connect: [LeagueWhereUniqueInput!]
}

input LeagueCreateManyWithoutOwner_userInput {
  create: [LeagueCreateWithoutOwner_userInput!]
  connect: [LeagueWhereUniqueInput!]
}

input LeagueCreateOneWithoutLeague_lineupsInput {
  create: LeagueCreateWithoutLeague_lineupsInput
  connect: LeagueWhereUniqueInput
}

input LeagueCreateOneWithoutLeague_membersInput {
  create: LeagueCreateWithoutLeague_membersInput
  connect: LeagueWhereUniqueInput
}

input LeagueCreateWithoutLeague_lineupsInput {
  name: String!
  league_members: LeagueMemberCreateManyWithoutLeagueInput
  owner_user: UserCreateOneWithoutLeaguesInput!
}

input LeagueCreateWithoutLeague_membersInput {
  name: String!
  league_lineups: LeagueLineupCreateManyWithoutLeagueInput
  owner_user: UserCreateOneWithoutLeaguesInput!
}

input LeagueCreateWithoutOwner_userInput {
  name: String!
  league_lineups: LeagueLineupCreateManyWithoutLeagueInput
  league_members: LeagueMemberCreateManyWithoutLeagueInput
}

type LeagueEdge {
  node: League!
  cursor: String!
}

type LeagueLineup {
  id: Int!
  lineup: Lineup!
  league: League!
}

type LeagueLineupConnection {
  pageInfo: PageInfo!
  edges: [LeagueLineupEdge]!
  aggregate: AggregateLeagueLineup!
}

input LeagueLineupCreateInput {
  lineup: LineupCreateOneInput!
  league: LeagueCreateOneWithoutLeague_lineupsInput!
}

input LeagueLineupCreateManyWithoutLeagueInput {
  create: [LeagueLineupCreateWithoutLeagueInput!]
  connect: [LeagueLineupWhereUniqueInput!]
}

input LeagueLineupCreateWithoutLeagueInput {
  lineup: LineupCreateOneInput!
}

type LeagueLineupEdge {
  node: LeagueLineup!
  cursor: String!
}

enum LeagueLineupOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LeagueLineupPreviousValues {
  id: Int!
}

input LeagueLineupScalarWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  AND: [LeagueLineupScalarWhereInput!]
  OR: [LeagueLineupScalarWhereInput!]
  NOT: [LeagueLineupScalarWhereInput!]
}

type LeagueLineupSubscriptionPayload {
  mutation: MutationType!
  node: LeagueLineup
  updatedFields: [String!]
  previousValues: LeagueLineupPreviousValues
}

input LeagueLineupSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LeagueLineupWhereInput
  AND: [LeagueLineupSubscriptionWhereInput!]
  OR: [LeagueLineupSubscriptionWhereInput!]
  NOT: [LeagueLineupSubscriptionWhereInput!]
}

input LeagueLineupUpdateInput {
  lineup: LineupUpdateOneRequiredInput
  league: LeagueUpdateOneRequiredWithoutLeague_lineupsInput
}

input LeagueLineupUpdateManyWithoutLeagueInput {
  create: [LeagueLineupCreateWithoutLeagueInput!]
  delete: [LeagueLineupWhereUniqueInput!]
  connect: [LeagueLineupWhereUniqueInput!]
  disconnect: [LeagueLineupWhereUniqueInput!]
  update: [LeagueLineupUpdateWithWhereUniqueWithoutLeagueInput!]
  upsert: [LeagueLineupUpsertWithWhereUniqueWithoutLeagueInput!]
  deleteMany: [LeagueLineupScalarWhereInput!]
}

input LeagueLineupUpdateWithoutLeagueDataInput {
  lineup: LineupUpdateOneRequiredInput
}

input LeagueLineupUpdateWithWhereUniqueWithoutLeagueInput {
  where: LeagueLineupWhereUniqueInput!
  data: LeagueLineupUpdateWithoutLeagueDataInput!
}

input LeagueLineupUpsertWithWhereUniqueWithoutLeagueInput {
  where: LeagueLineupWhereUniqueInput!
  update: LeagueLineupUpdateWithoutLeagueDataInput!
  create: LeagueLineupCreateWithoutLeagueInput!
}

input LeagueLineupWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  lineup: LineupWhereInput
  league: LeagueWhereInput
  AND: [LeagueLineupWhereInput!]
  OR: [LeagueLineupWhereInput!]
  NOT: [LeagueLineupWhereInput!]
}

input LeagueLineupWhereUniqueInput {
  id: Int
}

type LeagueMember {
  id: Int!
  league: League!
  member_user: User!
}

type LeagueMemberConnection {
  pageInfo: PageInfo!
  edges: [LeagueMemberEdge]!
  aggregate: AggregateLeagueMember!
}

input LeagueMemberCreateInput {
  league: LeagueCreateOneWithoutLeague_membersInput!
  member_user: UserCreateOneInput!
}

input LeagueMemberCreateManyWithoutLeagueInput {
  create: [LeagueMemberCreateWithoutLeagueInput!]
  connect: [LeagueMemberWhereUniqueInput!]
}

input LeagueMemberCreateWithoutLeagueInput {
  member_user: UserCreateOneInput!
}

type LeagueMemberEdge {
  node: LeagueMember!
  cursor: String!
}

enum LeagueMemberOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LeagueMemberPreviousValues {
  id: Int!
}

input LeagueMemberScalarWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  AND: [LeagueMemberScalarWhereInput!]
  OR: [LeagueMemberScalarWhereInput!]
  NOT: [LeagueMemberScalarWhereInput!]
}

type LeagueMemberSubscriptionPayload {
  mutation: MutationType!
  node: LeagueMember
  updatedFields: [String!]
  previousValues: LeagueMemberPreviousValues
}

input LeagueMemberSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LeagueMemberWhereInput
  AND: [LeagueMemberSubscriptionWhereInput!]
  OR: [LeagueMemberSubscriptionWhereInput!]
  NOT: [LeagueMemberSubscriptionWhereInput!]
}

input LeagueMemberUpdateInput {
  league: LeagueUpdateOneRequiredWithoutLeague_membersInput
  member_user: UserUpdateOneRequiredInput
}

input LeagueMemberUpdateManyWithoutLeagueInput {
  create: [LeagueMemberCreateWithoutLeagueInput!]
  delete: [LeagueMemberWhereUniqueInput!]
  connect: [LeagueMemberWhereUniqueInput!]
  disconnect: [LeagueMemberWhereUniqueInput!]
  update: [LeagueMemberUpdateWithWhereUniqueWithoutLeagueInput!]
  upsert: [LeagueMemberUpsertWithWhereUniqueWithoutLeagueInput!]
  deleteMany: [LeagueMemberScalarWhereInput!]
}

input LeagueMemberUpdateWithoutLeagueDataInput {
  member_user: UserUpdateOneRequiredInput
}

input LeagueMemberUpdateWithWhereUniqueWithoutLeagueInput {
  where: LeagueMemberWhereUniqueInput!
  data: LeagueMemberUpdateWithoutLeagueDataInput!
}

input LeagueMemberUpsertWithWhereUniqueWithoutLeagueInput {
  where: LeagueMemberWhereUniqueInput!
  update: LeagueMemberUpdateWithoutLeagueDataInput!
  create: LeagueMemberCreateWithoutLeagueInput!
}

input LeagueMemberWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  league: LeagueWhereInput
  member_user: UserWhereInput
  AND: [LeagueMemberWhereInput!]
  OR: [LeagueMemberWhereInput!]
  NOT: [LeagueMemberWhereInput!]
}

input LeagueMemberWhereUniqueInput {
  id: Int
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

input LeagueScalarWhereInput {
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
  AND: [LeagueScalarWhereInput!]
  OR: [LeagueScalarWhereInput!]
  NOT: [LeagueScalarWhereInput!]
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

input LeagueUpdateDataInput {
  name: String
  league_lineups: LeagueLineupUpdateManyWithoutLeagueInput
  league_members: LeagueMemberUpdateManyWithoutLeagueInput
  owner_user: UserUpdateOneRequiredWithoutLeaguesInput
}

input LeagueUpdateInput {
  name: String
  league_lineups: LeagueLineupUpdateManyWithoutLeagueInput
  league_members: LeagueMemberUpdateManyWithoutLeagueInput
  owner_user: UserUpdateOneRequiredWithoutLeaguesInput
}

input LeagueUpdateManyDataInput {
  name: String
}

input LeagueUpdateManyInput {
  create: [LeagueCreateInput!]
  update: [LeagueUpdateWithWhereUniqueNestedInput!]
  upsert: [LeagueUpsertWithWhereUniqueNestedInput!]
  delete: [LeagueWhereUniqueInput!]
  connect: [LeagueWhereUniqueInput!]
  disconnect: [LeagueWhereUniqueInput!]
  deleteMany: [LeagueScalarWhereInput!]
  updateMany: [LeagueUpdateManyWithWhereNestedInput!]
}

input LeagueUpdateManyMutationInput {
  name: String
}

input LeagueUpdateManyWithoutOwner_userInput {
  create: [LeagueCreateWithoutOwner_userInput!]
  delete: [LeagueWhereUniqueInput!]
  connect: [LeagueWhereUniqueInput!]
  disconnect: [LeagueWhereUniqueInput!]
  update: [LeagueUpdateWithWhereUniqueWithoutOwner_userInput!]
  upsert: [LeagueUpsertWithWhereUniqueWithoutOwner_userInput!]
  deleteMany: [LeagueScalarWhereInput!]
  updateMany: [LeagueUpdateManyWithWhereNestedInput!]
}

input LeagueUpdateManyWithWhereNestedInput {
  where: LeagueScalarWhereInput!
  data: LeagueUpdateManyDataInput!
}

input LeagueUpdateOneRequiredWithoutLeague_lineupsInput {
  create: LeagueCreateWithoutLeague_lineupsInput
  update: LeagueUpdateWithoutLeague_lineupsDataInput
  upsert: LeagueUpsertWithoutLeague_lineupsInput
  connect: LeagueWhereUniqueInput
}

input LeagueUpdateOneRequiredWithoutLeague_membersInput {
  create: LeagueCreateWithoutLeague_membersInput
  update: LeagueUpdateWithoutLeague_membersDataInput
  upsert: LeagueUpsertWithoutLeague_membersInput
  connect: LeagueWhereUniqueInput
}

input LeagueUpdateWithoutLeague_lineupsDataInput {
  name: String
  league_members: LeagueMemberUpdateManyWithoutLeagueInput
  owner_user: UserUpdateOneRequiredWithoutLeaguesInput
}

input LeagueUpdateWithoutLeague_membersDataInput {
  name: String
  league_lineups: LeagueLineupUpdateManyWithoutLeagueInput
  owner_user: UserUpdateOneRequiredWithoutLeaguesInput
}

input LeagueUpdateWithoutOwner_userDataInput {
  name: String
  league_lineups: LeagueLineupUpdateManyWithoutLeagueInput
  league_members: LeagueMemberUpdateManyWithoutLeagueInput
}

input LeagueUpdateWithWhereUniqueNestedInput {
  where: LeagueWhereUniqueInput!
  data: LeagueUpdateDataInput!
}

input LeagueUpdateWithWhereUniqueWithoutOwner_userInput {
  where: LeagueWhereUniqueInput!
  data: LeagueUpdateWithoutOwner_userDataInput!
}

input LeagueUpsertWithoutLeague_lineupsInput {
  update: LeagueUpdateWithoutLeague_lineupsDataInput!
  create: LeagueCreateWithoutLeague_lineupsInput!
}

input LeagueUpsertWithoutLeague_membersInput {
  update: LeagueUpdateWithoutLeague_membersDataInput!
  create: LeagueCreateWithoutLeague_membersInput!
}

input LeagueUpsertWithWhereUniqueNestedInput {
  where: LeagueWhereUniqueInput!
  update: LeagueUpdateDataInput!
  create: LeagueCreateInput!
}

input LeagueUpsertWithWhereUniqueWithoutOwner_userInput {
  where: LeagueWhereUniqueInput!
  update: LeagueUpdateWithoutOwner_userDataInput!
  create: LeagueCreateWithoutOwner_userInput!
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
  league_lineups_every: LeagueLineupWhereInput
  league_lineups_some: LeagueLineupWhereInput
  league_lineups_none: LeagueLineupWhereInput
  league_members_every: LeagueMemberWhereInput
  league_members_some: LeagueMemberWhereInput
  league_members_none: LeagueMemberWhereInput
  owner_user: UserWhereInput
  AND: [LeagueWhereInput!]
  OR: [LeagueWhereInput!]
  NOT: [LeagueWhereInput!]
}

input LeagueWhereUniqueInput {
  id: Int
}

type Lineup {
  id: Int!
  leagues(where: LeagueWhereInput, orderBy: LeagueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [League!]
  name: String!
  lineup_players(where: LineupPlayerWhereInput, orderBy: LineupPlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LineupPlayer!]
  owner_user: User!
  nfl_game: NflGame!
}

type LineupConnection {
  pageInfo: PageInfo!
  edges: [LineupEdge]!
  aggregate: AggregateLineup!
}

input LineupCreateInput {
  leagues: LeagueCreateManyInput
  name: String!
  lineup_players: LineupPlayerCreateManyWithoutLineupInput
  owner_user: UserCreateOneInput!
  nfl_game: NflGameCreateOneInput!
}

input LineupCreateOneInput {
  create: LineupCreateInput
  connect: LineupWhereUniqueInput
}

input LineupCreateOneWithoutLineup_playersInput {
  create: LineupCreateWithoutLineup_playersInput
  connect: LineupWhereUniqueInput
}

input LineupCreateWithoutLineup_playersInput {
  leagues: LeagueCreateManyInput
  name: String!
  owner_user: UserCreateOneInput!
  nfl_game: NflGameCreateOneInput!
}

type LineupEdge {
  node: Lineup!
  cursor: String!
}

enum LineupOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LineupPlayer {
  id: Int!
  nfl_player: NflPlayer!
  lineup: Lineup!
}

type LineupPlayerConnection {
  pageInfo: PageInfo!
  edges: [LineupPlayerEdge]!
  aggregate: AggregateLineupPlayer!
}

input LineupPlayerCreateInput {
  nfl_player: NflPlayerCreateOneInput!
  lineup: LineupCreateOneWithoutLineup_playersInput!
}

input LineupPlayerCreateManyWithoutLineupInput {
  create: [LineupPlayerCreateWithoutLineupInput!]
  connect: [LineupPlayerWhereUniqueInput!]
}

input LineupPlayerCreateWithoutLineupInput {
  nfl_player: NflPlayerCreateOneInput!
}

type LineupPlayerEdge {
  node: LineupPlayer!
  cursor: String!
}

enum LineupPlayerOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LineupPlayerPreviousValues {
  id: Int!
}

input LineupPlayerScalarWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  AND: [LineupPlayerScalarWhereInput!]
  OR: [LineupPlayerScalarWhereInput!]
  NOT: [LineupPlayerScalarWhereInput!]
}

type LineupPlayerSubscriptionPayload {
  mutation: MutationType!
  node: LineupPlayer
  updatedFields: [String!]
  previousValues: LineupPlayerPreviousValues
}

input LineupPlayerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LineupPlayerWhereInput
  AND: [LineupPlayerSubscriptionWhereInput!]
  OR: [LineupPlayerSubscriptionWhereInput!]
  NOT: [LineupPlayerSubscriptionWhereInput!]
}

input LineupPlayerUpdateInput {
  nfl_player: NflPlayerUpdateOneRequiredInput
  lineup: LineupUpdateOneRequiredWithoutLineup_playersInput
}

input LineupPlayerUpdateManyWithoutLineupInput {
  create: [LineupPlayerCreateWithoutLineupInput!]
  delete: [LineupPlayerWhereUniqueInput!]
  connect: [LineupPlayerWhereUniqueInput!]
  disconnect: [LineupPlayerWhereUniqueInput!]
  update: [LineupPlayerUpdateWithWhereUniqueWithoutLineupInput!]
  upsert: [LineupPlayerUpsertWithWhereUniqueWithoutLineupInput!]
  deleteMany: [LineupPlayerScalarWhereInput!]
}

input LineupPlayerUpdateWithoutLineupDataInput {
  nfl_player: NflPlayerUpdateOneRequiredInput
}

input LineupPlayerUpdateWithWhereUniqueWithoutLineupInput {
  where: LineupPlayerWhereUniqueInput!
  data: LineupPlayerUpdateWithoutLineupDataInput!
}

input LineupPlayerUpsertWithWhereUniqueWithoutLineupInput {
  where: LineupPlayerWhereUniqueInput!
  update: LineupPlayerUpdateWithoutLineupDataInput!
  create: LineupPlayerCreateWithoutLineupInput!
}

input LineupPlayerWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  nfl_player: NflPlayerWhereInput
  lineup: LineupWhereInput
  AND: [LineupPlayerWhereInput!]
  OR: [LineupPlayerWhereInput!]
  NOT: [LineupPlayerWhereInput!]
}

input LineupPlayerWhereUniqueInput {
  id: Int
}

type LineupPreviousValues {
  id: Int!
  name: String!
}

type LineupSubscriptionPayload {
  mutation: MutationType!
  node: Lineup
  updatedFields: [String!]
  previousValues: LineupPreviousValues
}

input LineupSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LineupWhereInput
  AND: [LineupSubscriptionWhereInput!]
  OR: [LineupSubscriptionWhereInput!]
  NOT: [LineupSubscriptionWhereInput!]
}

input LineupUpdateDataInput {
  leagues: LeagueUpdateManyInput
  name: String
  lineup_players: LineupPlayerUpdateManyWithoutLineupInput
  owner_user: UserUpdateOneRequiredInput
  nfl_game: NflGameUpdateOneRequiredInput
}

input LineupUpdateInput {
  leagues: LeagueUpdateManyInput
  name: String
  lineup_players: LineupPlayerUpdateManyWithoutLineupInput
  owner_user: UserUpdateOneRequiredInput
  nfl_game: NflGameUpdateOneRequiredInput
}

input LineupUpdateManyMutationInput {
  name: String
}

input LineupUpdateOneRequiredInput {
  create: LineupCreateInput
  update: LineupUpdateDataInput
  upsert: LineupUpsertNestedInput
  connect: LineupWhereUniqueInput
}

input LineupUpdateOneRequiredWithoutLineup_playersInput {
  create: LineupCreateWithoutLineup_playersInput
  update: LineupUpdateWithoutLineup_playersDataInput
  upsert: LineupUpsertWithoutLineup_playersInput
  connect: LineupWhereUniqueInput
}

input LineupUpdateWithoutLineup_playersDataInput {
  leagues: LeagueUpdateManyInput
  name: String
  owner_user: UserUpdateOneRequiredInput
  nfl_game: NflGameUpdateOneRequiredInput
}

input LineupUpsertNestedInput {
  update: LineupUpdateDataInput!
  create: LineupCreateInput!
}

input LineupUpsertWithoutLineup_playersInput {
  update: LineupUpdateWithoutLineup_playersDataInput!
  create: LineupCreateWithoutLineup_playersInput!
}

input LineupWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  leagues_every: LeagueWhereInput
  leagues_some: LeagueWhereInput
  leagues_none: LeagueWhereInput
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
  lineup_players_every: LineupPlayerWhereInput
  lineup_players_some: LineupPlayerWhereInput
  lineup_players_none: LineupPlayerWhereInput
  owner_user: UserWhereInput
  nfl_game: NflGameWhereInput
  AND: [LineupWhereInput!]
  OR: [LineupWhereInput!]
  NOT: [LineupWhereInput!]
}

input LineupWhereUniqueInput {
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
  createLeagueLineup(data: LeagueLineupCreateInput!): LeagueLineup!
  updateLeagueLineup(data: LeagueLineupUpdateInput!, where: LeagueLineupWhereUniqueInput!): LeagueLineup
  upsertLeagueLineup(where: LeagueLineupWhereUniqueInput!, create: LeagueLineupCreateInput!, update: LeagueLineupUpdateInput!): LeagueLineup!
  deleteLeagueLineup(where: LeagueLineupWhereUniqueInput!): LeagueLineup
  deleteManyLeagueLineups(where: LeagueLineupWhereInput): BatchPayload!
  createLeagueMember(data: LeagueMemberCreateInput!): LeagueMember!
  updateLeagueMember(data: LeagueMemberUpdateInput!, where: LeagueMemberWhereUniqueInput!): LeagueMember
  upsertLeagueMember(where: LeagueMemberWhereUniqueInput!, create: LeagueMemberCreateInput!, update: LeagueMemberUpdateInput!): LeagueMember!
  deleteLeagueMember(where: LeagueMemberWhereUniqueInput!): LeagueMember
  deleteManyLeagueMembers(where: LeagueMemberWhereInput): BatchPayload!
  createLineup(data: LineupCreateInput!): Lineup!
  updateLineup(data: LineupUpdateInput!, where: LineupWhereUniqueInput!): Lineup
  updateManyLineups(data: LineupUpdateManyMutationInput!, where: LineupWhereInput): BatchPayload!
  upsertLineup(where: LineupWhereUniqueInput!, create: LineupCreateInput!, update: LineupUpdateInput!): Lineup!
  deleteLineup(where: LineupWhereUniqueInput!): Lineup
  deleteManyLineups(where: LineupWhereInput): BatchPayload!
  createLineupPlayer(data: LineupPlayerCreateInput!): LineupPlayer!
  updateLineupPlayer(data: LineupPlayerUpdateInput!, where: LineupPlayerWhereUniqueInput!): LineupPlayer
  upsertLineupPlayer(where: LineupPlayerWhereUniqueInput!, create: LineupPlayerCreateInput!, update: LineupPlayerUpdateInput!): LineupPlayer!
  deleteLineupPlayer(where: LineupPlayerWhereUniqueInput!): LineupPlayer
  deleteManyLineupPlayers(where: LineupPlayerWhereInput): BatchPayload!
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
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
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
}

input NflPlayerCreateManyWithoutNfl_teamInput {
  create: [NflPlayerCreateWithoutNfl_teamInput!]
  connect: [NflPlayerWhereUniqueInput!]
}

input NflPlayerCreateOneInput {
  create: NflPlayerCreateInput
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
}

input NflPlayerUpdateWithWhereUniqueWithoutNfl_teamInput {
  where: NflPlayerWhereUniqueInput!
  data: NflPlayerUpdateWithoutNfl_teamDataInput!
}

input NflPlayerUpsertNestedInput {
  update: NflPlayerUpdateDataInput!
  create: NflPlayerCreateInput!
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
  leagueLineup(where: LeagueLineupWhereUniqueInput!): LeagueLineup
  leagueLineups(where: LeagueLineupWhereInput, orderBy: LeagueLineupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LeagueLineup]!
  leagueLineupsConnection(where: LeagueLineupWhereInput, orderBy: LeagueLineupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LeagueLineupConnection!
  leagueMember(where: LeagueMemberWhereUniqueInput!): LeagueMember
  leagueMembers(where: LeagueMemberWhereInput, orderBy: LeagueMemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LeagueMember]!
  leagueMembersConnection(where: LeagueMemberWhereInput, orderBy: LeagueMemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LeagueMemberConnection!
  lineup(where: LineupWhereUniqueInput!): Lineup
  lineups(where: LineupWhereInput, orderBy: LineupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Lineup]!
  lineupsConnection(where: LineupWhereInput, orderBy: LineupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LineupConnection!
  lineupPlayer(where: LineupPlayerWhereUniqueInput!): LineupPlayer
  lineupPlayers(where: LineupPlayerWhereInput, orderBy: LineupPlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LineupPlayer]!
  lineupPlayersConnection(where: LineupPlayerWhereInput, orderBy: LineupPlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LineupPlayerConnection!
  nflGame(where: NflGameWhereUniqueInput!): NflGame
  nflGames(where: NflGameWhereInput, orderBy: NflGameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [NflGame]!
  nflGamesConnection(where: NflGameWhereInput, orderBy: NflGameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NflGameConnection!
  nflPlayer(where: NflPlayerWhereUniqueInput!): NflPlayer
  nflPlayers(where: NflPlayerWhereInput, orderBy: NflPlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [NflPlayer]!
  nflPlayersConnection(where: NflPlayerWhereInput, orderBy: NflPlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NflPlayerConnection!
  nflTeam(where: NflTeamWhereUniqueInput!): NflTeam
  nflTeams(where: NflTeamWhereInput, orderBy: NflTeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [NflTeam]!
  nflTeamsConnection(where: NflTeamWhereInput, orderBy: NflTeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NflTeamConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  flipGamePlayer(where: FlipGamePlayerSubscriptionWhereInput): FlipGamePlayerSubscriptionPayload
  league(where: LeagueSubscriptionWhereInput): LeagueSubscriptionPayload
  leagueLineup(where: LeagueLineupSubscriptionWhereInput): LeagueLineupSubscriptionPayload
  leagueMember(where: LeagueMemberSubscriptionWhereInput): LeagueMemberSubscriptionPayload
  lineup(where: LineupSubscriptionWhereInput): LineupSubscriptionPayload
  lineupPlayer(where: LineupPlayerSubscriptionWhereInput): LineupPlayerSubscriptionPayload
  nflGame(where: NflGameSubscriptionWhereInput): NflGameSubscriptionPayload
  nflPlayer(where: NflPlayerSubscriptionWhereInput): NflPlayerSubscriptionPayload
  nflTeam(where: NflTeamSubscriptionWhereInput): NflTeamSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: Int!
  username: String!
  passwordHash: String!
  leagues(where: LeagueWhereInput, orderBy: LeagueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [League!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  username: String!
  passwordHash: String!
  leagues: LeagueCreateManyWithoutOwner_userInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutLeaguesInput {
  create: UserCreateWithoutLeaguesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutLeaguesInput {
  username: String!
  passwordHash: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  passwordHash_ASC
  passwordHash_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: Int!
  username: String!
  passwordHash: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  username: String
  passwordHash: String
  leagues: LeagueUpdateManyWithoutOwner_userInput
}

input UserUpdateInput {
  username: String
  passwordHash: String
  leagues: LeagueUpdateManyWithoutOwner_userInput
}

input UserUpdateManyMutationInput {
  username: String
  passwordHash: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutLeaguesInput {
  create: UserCreateWithoutLeaguesInput
  update: UserUpdateWithoutLeaguesDataInput
  upsert: UserUpsertWithoutLeaguesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutLeaguesDataInput {
  username: String
  passwordHash: String
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutLeaguesInput {
  update: UserUpdateWithoutLeaguesDataInput!
  create: UserCreateWithoutLeaguesInput!
}

input UserWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  passwordHash: String
  passwordHash_not: String
  passwordHash_in: [String!]
  passwordHash_not_in: [String!]
  passwordHash_lt: String
  passwordHash_lte: String
  passwordHash_gt: String
  passwordHash_gte: String
  passwordHash_contains: String
  passwordHash_not_contains: String
  passwordHash_starts_with: String
  passwordHash_not_starts_with: String
  passwordHash_ends_with: String
  passwordHash_not_ends_with: String
  leagues_every: LeagueWhereInput
  leagues_some: LeagueWhereInput
  leagues_none: LeagueWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: Int
  username: String
}
`