import { QueryResolvers } from "../generated/graphqlgen"
import { getMatchups } from "./matchups";

export const Query: QueryResolvers.Type = {
    nflTeam: (parent, {where}, ctx) => ctx.db.nflTeam(where),
    nflTeams: (parent, args, ctx) => ctx.db.nflTeams(args),
    nflPlayers: (parent, args, ctx) => ctx.db.nflPlayers(args),
    nflPlayer: (parent, {where}, ctx) => ctx.db.nflPlayer(where),
    nflGames: (parent, args, ctx) => ctx.db.nflGames(args),
    nflGame: (parent, {where}, ctx) => ctx.db.nflGame(where),
    leagues: (parent, args, ctx) => ctx.db.leagues(args),
    league: (parent, { where }, ctx) => ctx.db.league(where),
    teams: (parent, args, ctx) => ctx.db.teams(args),
    team: (parent, { where }, ctx) => ctx.db.team(where),
    teamPlayers: (parent, args, ctx) => ctx.db.teamPlayers(args),
    teamPlayer: (parent,  { where }, ctx) => ctx.db.teamPlayer(where),
    flipGamePlayers: (parent, args, ctx) => ctx.db.flipGamePlayers(args),
    flipGamePlayer: (parent, { where }, ctx) => ctx.db.flipGamePlayer(where),
    matchups: (parent, { where }, ctx) => {
        return getMatchups(where.gameID)
    }
}
