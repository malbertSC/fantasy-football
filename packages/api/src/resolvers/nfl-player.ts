import { NflPlayerResolvers } from "../generated/graphqlgen";

export const NflPlayer: NflPlayerResolvers.Type = {
    ...NflPlayerResolvers.defaultResolvers,

    nfl_team: (parent, args, ctx) => {
        return ctx.db.nflPlayer({id: parent.id}).nfl_team();
    }
};
