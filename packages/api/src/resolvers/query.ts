import { QueryResolvers } from "../generated/graphqlgen"

export const Query: QueryResolvers.Type = {
    Nfl_team: (parent, {id}, ctx) => ctx.db.nfl_team({id})
    // nfl_teams: (parent, args, ctx) => ctx.db.nfl_teams(),
    // nfl_team: (parent, { where: id }, ctx) => ctx.db.nfl_team(id),
    // nfl_players: (parent, args, ctx) => ctx.db.nfl_players(),
    // nfl_player: (parent, { where: id }, ctx) => ctx.db.nfl_player(id),
    // leagues: (parent, args, ctx) => ctx.db.leagues(),
    // league: (parent, { where: id }, ctx) => ctx.db.league(id),
    // teams: (parent, args, ctx) => ctx.db.teams(),
    // team: (parent, { where: id }, ctx) => ctx.db.team(id),
    // team_players: (parent, args, ctx) => ctx.db.team_players(),
    // team_player: (parent,  { where: id }, ctx) => ctx.db.team_player(id),
}
