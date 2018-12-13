import { QueryResolvers } from "../generated/graphqlgen"

export const Query: QueryResolvers.Type = {
    nflTeam: (parent, {where}, ctx) => ctx.db.nflTeam(where),
    nflTeams: (parent, args, ctx) => ctx.db.nflTeams(),
    nflPlayers: (parent, args, ctx) => ctx.db.nflPlayers(),
    nflPlayer: (parent, {where}, ctx) => ctx.db.nflPlayer(where),
    nflGames: (parent, args, ctx) => ctx.db.nflGames(),
    nflGame: (parent, {where}, ctx) => ctx.db.nflGame(where),
    leagues: (parent, args, ctx) => ctx.db.leagues(),
    league: (parent, { where }, ctx) => ctx.db.league(where),
    teams: (parent, args, ctx) => ctx.db.teams(),
    team: (parent, { where }, ctx) => ctx.db.team(where),
    teamPlayers: (parent, args, ctx) => ctx.db.teamPlayers(),
    teamPlayer: (parent,  { where }, ctx) => ctx.db.teamPlayer(where)
}
