import { Context } from "types";
import { prisma, LeagueWhereUniqueInput } from "@ffb/prisma";
import { MutationResolvers } from "../../generated/graphqlgen";

export async function createLeague(parent, { name }, ctx: Context) {
    return prisma.createLeague({name, owner_user: {connect: {id: ctx.user.id}}});
}

export interface UpdateLeagueArgs {
    data: MutationResolvers.LeagueUpdateInput,
    where: LeagueWhereUniqueInput
}
export async function updateLeague(parent, args: UpdateLeagueArgs, ctx: Context) {
    if (prisma.$exists.league)
    return prisma.updateLeague(args);
}
