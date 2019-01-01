import { NflGameResolvers } from "../generated/graphqlgen";

export const NflGame: NflGameResolvers.Type = {
    ...NflGameResolvers.defaultResolvers,

    away_team: (parent, args, ctx) => {
        return ctx.db.nflGame({id: parent.id}).away_team();
    },
    home_team: (parent, args, ctx) => {
        return ctx.db.nflGame({id: parent.id}).home_team();
    }
};
