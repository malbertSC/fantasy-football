import { LeagueResolvers } from "../generated/graphqlgen";

export const League: LeagueResolvers.Type = {
    ...LeagueResolvers.defaultResolvers,

    league_lineups: (parent, args, ctx) => {
        return ctx.db.league({id: parent.id}).league_lineups();
    },
    league_members: (parent, args, ctx) => {
        return ctx.db.league({id: parent.id}).league_members();
    },
    owner_user: (parent, args, ctx) => {
        return ctx.db.league({id: parent.id}).owner_user();
    }
};
