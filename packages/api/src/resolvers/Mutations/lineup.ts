import { Context } from "types";
import { prisma } from "@ffb/prisma";
import { MutationResolvers } from "generated/graphqlgen";

export async function createLineup(parent, args: MutationResolvers.ArgsCreateLineup, ctx: Context) {
    // TODO actually check to make sure lineup isn't BS
    let createLineupConfig = {
        name: args.data.name,
        lineup_players: {create: args.data.playerIDs.map((playerID) => {
            return {
                nfl_player: {connect: {id: playerID}}}
            }
        )},
        owner_user: {connect: {id: ctx.user.id}},
        nfl_game: {connect: {id: args.data.nflGameID}}
    };
    if (args.data.leagueID) {
        createLineupConfig = {
            ...createLineupConfig,
            ...{leagues: {connect: {id: args.data.leagueID}}}
        }
    }
    return prisma.createLineup(createLineupConfig);
}
