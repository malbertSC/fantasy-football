import { FlipGamePlayerResolvers } from "../generated/graphqlgen";
import { FlipGamePlayerCreateInput, FlipPosition } from "@ffb/prisma";
import { prisma } from "@ffb/prisma";

export const FlipGamePlayer: FlipGamePlayerResolvers.Type = {
    ...FlipGamePlayerResolvers.defaultResolvers,

    game: (parent, args, ctx) => {
        return ctx.db.flipGamePlayer({id: parent.id}).game();
    },
    team: (parent, args, ctx) => {
        return ctx.db.flipGamePlayer({id: parent.id}).team();
    },
    player: (parent, args, ctx) => {
        return ctx.db.flipGamePlayer({id: parent.id}).player();
    }
};
