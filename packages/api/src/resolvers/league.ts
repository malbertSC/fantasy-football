import { LeagueResolvers } from "../generated/graphqlgen";

export const League: LeagueResolvers.Type = {
    ...LeagueResolvers.defaultResolvers,

    teams: (parent, args, ctx) => {
        return ctx.db.league({id: parent.id}).teams();
    }
};
