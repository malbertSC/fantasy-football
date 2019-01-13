import { LeagueLineupResolvers } from "../generated/graphqlgen";

export const LeagueLineup: LeagueLineupResolvers.Type = {
    ...LeagueLineupResolvers.defaultResolvers,
    league: (parent, args, ctx) => {
        return ctx.db.leagueLineup({id: parent.id}).league();
    },
    lineup: (parent, args, ctx) => {
        return ctx.db.leagueLineup({id: parent.id}).lineup();
    }
};
