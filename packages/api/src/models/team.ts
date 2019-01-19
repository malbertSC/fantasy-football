// import { TeamWhereUniqueInput, prisma, TeamWhereInput, Team } from "@ffb/prisma";
// import { SafeUser } from "./user";
// import { TeamOrderByInput } from "@ffb/prisma";
// import { PrismaArgs, getFilteredArgs, SimpleModel } from "./utils";
// import { TeamPromise } from "@ffb/prisma";
// import { Context } from "types";

// export interface TeamArgs extends PrismaArgs<TeamWhereInput, TeamOrderByInput> {};

// interface TeamSimpleModel extends SimpleModel<Team, TeamWhereInput, TeamOrderByInput, TeamWhereInput> {};
// class TeamModel implements TeamSimpleModel {
//     public async find(user: SafeUser, args: TeamArgs): TeamPromise {
//         const authFilter = {
//             owner_user: {id: user.id}
//         }
//         const filteredArgs = getFilteredArgs(args, authFilter);
//         return prisma.teams(filteredArgs);
//     }

//     public async findOne(user: SafeUser, whereUniqueInput: TeamWhereUniqueInput) {
//         const ownerUser = await prisma.team(whereUniqueInput).owner_user();
//         if (ownerUser.id !== user.id) throw new Error("Unauthorized");
//         return prisma.team(whereUniqueInput);
//     }
// }

// export const TeamRepository = new TeamModel();

// export async function findTeam(parent, args: { where: TeamWhereUniqueInput }, ctx: Context) {
//     const isAuthorizedOrExists = ctx.db.$exists.team({
//         ...args.where,
//         ...{
//             owner_user: {
//                 id: ctx.user.id
//             }
//         }
//     });
//     if (!isAuthorizedOrExists) throw new Error("404");
//     return ctx.db.team(args.where);
// }

// export interface TeamArgs extends PrismaArgs<TeamWhereInput, TeamOrderByInput> {};

// export async function findTeams(parent, args: TeamArgs, ctx: Context) {
//     const authFilter = {
//         owner_user: {id: ctx.user.id}
//     }
//     const filteredArgs = getFilteredArgs(args, authFilter);
//     return prisma.teams(filteredArgs);
// }
