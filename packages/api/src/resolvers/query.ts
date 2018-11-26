import { QueryResolvers } from "../generated/graphqlgen"

export const Query: QueryResolvers.Type = {
    nfl_team: (parent, {where}, ctx) => ctx.db.nfl_team(where),
    nfl_teams: (parent, args, ctx) => ctx.db.nfl_teams(),
    nfl_players: (parent, args, ctx) => ctx.db.nfl_players(),
    nfl_player: (parent, {where}, ctx) => ctx.db.nfl_player(where),
    leagues: (parent, args, ctx) => ctx.db.leagues(),
    league: (parent, { where }, ctx) => ctx.db.league(where),
    teams: (parent, args, ctx) => ctx.db.teams(),
    team: (parent, { where }, ctx) => ctx.db.team(where),
    team_players: (parent, args, ctx) => ctx.db.team_players(),
    team_player: (parent,  { where }, ctx) => ctx.db.team_player(where),
}
