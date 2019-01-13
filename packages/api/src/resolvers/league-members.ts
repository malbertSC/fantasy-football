import { LeagueMemberResolvers } from "../generated/graphqlgen";

export const LeagueMember: LeagueMemberResolvers.Type = {
    ...LeagueMemberResolvers.defaultResolvers,
    league: (parent, args, ctx) => {
        return ctx.db.leagueMember({id: parent.id}).league();
    },
    member_user: (parent, args, ctx) => {
        return ctx.db.leagueMember({id: parent.id}).member_user();
    },
};
