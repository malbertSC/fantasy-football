import { TeamPlayerResolvers } from "../generated/graphqlgen";

export const TeamPlayer: TeamPlayerResolvers.Type = {
    ...TeamPlayerResolvers.defaultResolvers,

    nfl_player: (parent, args, ctx) => {
        return ctx.db.teamPlayer({id: parent.id}).nfl_player();
    },
    team: (parent, args, ctx) => {
        return ctx.db.teamPlayer({id: parent.id}).team();
    }
};
