import { LineupPlayerResolvers } from "../generated/graphqlgen";

export const LineupPlayer: LineupPlayerResolvers.Type = {
    ...LineupPlayerResolvers.defaultResolvers,

    nfl_player: (parent, args, ctx) => {
        return ctx.db.lineupPlayer({id: parent.id}).nfl_player();
    },
    lineup: (parent, args, ctx) => {
        return ctx.db.lineupPlayer({id: parent.id}).lineup();
    }
};
