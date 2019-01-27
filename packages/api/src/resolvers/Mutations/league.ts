import { Context } from "types";
import { prisma, LeagueWhereUniqueInput, LeagueWhereInput } from "@ffb/prisma";
import { MutationResolvers } from "../../generated/graphqlgen";

export async function createLeague(parent, { name }, ctx: Context) {
    return prisma.createLeague({
        name,
        owner_user: {connect: {id: ctx.user.id}},
        league_members: {create: {member_user: {connect: {id: ctx.user.id}}}}
    });
}

export async function updateLeagueName(parent, args: MutationResolvers.ArgsUpdateLeagueName, ctx: Context) {
    if (!(await isUpdateAuthorizedByOwner(ctx.user.id, args.where))) {
        throw new Error("Unauthorized");
    }
    return prisma.updateLeague(args);
}

export async function deleteLeagueMember(parent, args: MutationResolvers.ArgsDeleteLeagueMember, ctx: Context) {
    if (!(await isUpdateAuthorizedByOwner(ctx.user.id, args.where))) {
        throw new Error("Unauthorized");
    }
    return prisma.deleteLeagueMember(args.where);
}

export async function createLeagueMember(parent, args: MutationResolvers.ArgsCreateLeagueMember, ctx: Context) {
    const memberID = args.data.userID;
    const currentUserID = ctx.user.id;
    const leagueID = args.where.id;
    if (!(await isUpdateAuthorizedByOwner(currentUserID, args.where))) {
        throw new Error("Unauthorized");
    }
    if (await isUserAlreadyMemberOfLeague(memberID, leagueID)) {
        throw new Error("Already a member");
    }
    return prisma.updateLeague({data: {
        league_members: {
            create: {
                member_user: {
                    connect: {
                        id: memberID
                    }
                }
            }
        }
    }, where: args.where});
}

async function isUserAlreadyMemberOfLeague(userID: number, leagueID: number): Promise<boolean> {
    return prisma.$exists.leagueMember({
        league: {id: leagueID},
        member_user: {id: userID}
    })
}

async function isUpdateAuthorizedByOwner(ownerUserID: number, whereUnique: LeagueWhereUniqueInput): Promise<boolean> {
    // TODO add some kind of request system to join leagues - for now just let anyone do whatever they want
    // const whereWithUser: LeagueWhereInput = {
    //     ...whereUnique,
    //     ...{
    //         owner_user: {
    //             id: ownerUserID
    //         }
    //     }
    // }
    // return prisma.$exists.league(whereWithUser);
    return true;
}
