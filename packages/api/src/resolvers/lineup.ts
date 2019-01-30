import { LineupResolvers } from "../generated/graphqlgen";

export const Lineup: LineupResolvers.Type = {
    ...LineupResolvers.defaultResolvers,
    leagues: (parent, args, ctx) => {
        return ctx.db.lineup({id: parent.id}).leagues();
    },
    lineup_players: (parent, args, ctx) => {
        return ctx.db.lineup({id: parent.id}).lineup_players();
    },
    owner_user: (parent, args, ctx) => {
        return ctx.db.lineup({id: parent.id}).owner_user();
    },
    nfl_game: (parent, args, ctx) => {
        return ctx.db.lineup({id: parent.id}).nfl_game();
    }
};
