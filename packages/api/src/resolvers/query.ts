import { QueryResolvers } from "../generated/graphqlgen"
import { getMatchups } from "../models/Matchup";

export const Query: QueryResolvers.Type = {
    nflTeam: (parent, {where}, ctx) => ctx.db.nflTeam(where),
    nflTeams: (parent, args, ctx) => ctx.db.nflTeams(args),
    nflPlayers: (parent, args, ctx) => ctx.db.nflPlayers(args),
    nflPlayer: (parent, {where}, ctx) => ctx.db.nflPlayer(where),
    nflGames: (parent, args, ctx) => ctx.db.nflGames(args),
    nflGame: (parent, {where}, ctx) => ctx.db.nflGame(where),
    leagues: (parent, args, ctx) => ctx.db.leagues(args),
    league: (parent, { where }, ctx) => ctx.db.league(where),
    lineups: (parent, args, ctx) => ctx.db.lineups(args),
    lineup: (parent, { where }, ctx) => ctx.db.lineup(where),
    leagueLineups: (parent, args, ctx) => ctx.db.leagueLineups(args),
    leagueLineup: (parent, { where }, ctx) => ctx.db.leagueLineup(where),
    leagueMembers: (parent, args, ctx) => ctx.db.leagueMembers(args),
    leagueMember: (parent, { where }, ctx) => ctx.db.leagueMember(where),
    lineupPlayers: (parent, args, ctx) => ctx.db.lineupPlayers(args),
    lineupPlayer: (parent,  { where }, ctx) => ctx.db.lineupPlayer(where),
    flipGamePlayers: (parent, args, ctx) => ctx.db.flipGamePlayers(args),
    flipGamePlayer: (parent, { where }, ctx) => ctx.db.flipGamePlayer(where),
    users: (parent, args, ctx) => ctx.db.users(args),
    user: (parent, { where }, ctx) => ctx.db.user(where),
    matchups: (parent, { where }, ctx) => {
        return getMatchups(where.gameID)
    }
}
