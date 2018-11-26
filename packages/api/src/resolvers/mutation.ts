import { MutationResolvers } from "../generated/graphqlgen";

export const Mutation: MutationResolvers.Type = {
    ...MutationResolvers.defaultResolvers,
    createLeague: (parent, args, ctx) => {
        return ctx.db.createLeague(args.data);
    },
    createTeam: (parent, args, ctx) => {
        return ctx.db.createTeam(args.data);
    },
    createTeam_player: (parent, args, ctx) => {
        return ctx.db.createTeam_player(args.data);
    },
    updateLeague: (parent, args, ctx) => {
        return ctx.db.updateLeague(args);
    },
    updateTeam: (parent, args, ctx) => {
        return ctx.db.updateTeam(args);
    },
    updateTeam_player: (parent, args, ctx) => {
        return ctx.db.updateTeam_player(args);
    },
    deleteLeague: (parent, args, ctx) => {
        return ctx.db.deleteLeague(args.where);
    },
    deleteTeam: (parent, args, ctx) => {
        return ctx.db.deleteTeam(args.where);
    },
    deleteTeam_player: (parent, args, ctx) => {
        return ctx.db.deleteTeam_player(args.where);
    },
    upsertLeague: (parent, args, ctx) => {
        throw new Error("Resolver not implemented");
    },
    upsertTeam: (parent, args, ctx) => {
        throw new Error("Resolver not implemented");
    },
    upsertTeam_player: (parent, args, ctx) => {
        throw new Error("Resolver not implemented");
    },
    updateManyLeagues: (parent, args, ctx) => {
        throw new Error("Resolver not implemented");
    },
    updateManyTeams: (parent, args, ctx) => {
        throw new Error("Resolver not implemented");
    },
    deleteManyLeagues: (parent, args, ctx) => {
        throw new Error("Resolver not implemented");
    },
    deleteManyTeams: (parent, args, ctx) => {
        throw new Error("Resolver not implemented");
    },
    deleteManyTeam_players: (parent, args, ctx) => {
        throw new Error("Resolver not implemented");
    }
};
